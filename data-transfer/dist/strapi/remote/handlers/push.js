"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPushController = void 0;
const crypto_1 = require("crypto");
const stream_1 = require("stream");
const providers_1 = require("../../../errors/providers");
const providers_2 = require("../../providers");
const flows_1 = require("../flows");
const utils_1 = require("./utils");
const VALID_TRANSFER_ACTIONS = [
    'bootstrap',
    'close',
    'rollback',
    'beforeTransfer',
    'getMetadata',
    'getSchemas',
];
const TRANSFER_KIND = 'push';
const writeAsync = (stream, data) => {
    return new Promise((resolve, reject) => {
        stream.write(data, (error) => {
            if (error) {
                reject(error);
            }
            resolve();
        });
    });
};
exports.createPushController = (0, utils_1.handlerControllerFactory)((proto) => ({
    isTransferStarted() {
        return proto.isTransferStarted.call(this) && this.provider !== undefined;
    },
    verifyAuth() {
        return proto.verifyAuth.call(this, TRANSFER_KIND);
    },
    cleanup() {
        proto.cleanup.call(this);
        this.streams = {};
        this.assets = {};
        delete this.flow;
        delete this.provider;
    },
    teardown() {
        if (this.provider) {
            this.provider.rollback();
        }
        proto.teardown.call(this);
    },
    assertValidTransfer() {
        proto.assertValidTransfer.call(this);
        if (this.provider === undefined) {
            throw new Error('Invalid Transfer Process');
        }
    },
    assertValidTransferAction(action) {
        if (VALID_TRANSFER_ACTIONS.includes(action)) {
            return;
        }
        throw new providers_1.ProviderTransferError(`Invalid action provided: "${action}"`, {
            action,
            validActions: Object.keys(VALID_TRANSFER_ACTIONS),
        });
    },
    assertValidStreamTransferStep(stage) {
        const currentStep = this.flow?.get();
        const nextStep = { kind: 'transfer', stage };
        if (currentStep?.kind === 'transfer' && !currentStep.locked) {
            throw new providers_1.ProviderTransferError(`You need to initialize the transfer stage (${nextStep}) before starting to stream data`);
        }
        if (this.flow?.cannot(nextStep)) {
            throw new providers_1.ProviderTransferError(`Invalid stage (${nextStep}) provided for the current flow`, {
                step: nextStep,
            });
        }
    },
    async createWritableStreamForStep(step) {
        const mapper = {
            entities: () => this.provider?.createEntitiesWriteStream(),
            links: () => this.provider?.createLinksWriteStream(),
            configuration: () => this.provider?.createConfigurationWriteStream(),
            assets: () => this.provider?.createAssetsWriteStream(),
        };
        if (!(step in mapper)) {
            throw new Error('Invalid transfer step, impossible to create a stream');
        }
        if (!this.streams) {
            throw new Error('Invalid transfer state');
        }
        this.streams[step] = await mapper[step]();
    },
    async onMessage(raw) {
        const msg = JSON.parse(raw.toString());
        if (!(0, utils_1.isDataTransferMessage)(msg)) {
            return;
        }
        if (!msg.uuid) {
            await this.respond(undefined, new Error('Missing uuid in message'));
        }
        const { uuid, type } = msg;
        // Regular command message (init, end, status)
        if (type === 'command') {
            const { command } = msg;
            await this.executeAndRespond(uuid, () => {
                this.assertValidTransferCommand(command);
                // The status command don't have params
                if (command === 'status') {
                    return this.status();
                }
                return this[command](msg.params);
            });
        }
        // Transfer message (the transfer must be init first)
        else if (type === 'transfer') {
            await this.executeAndRespond(uuid, async () => {
                await this.verifyAuth();
                this.assertValidTransfer();
                return this.onTransferMessage(msg);
            });
        }
        // Invalid messages
        else {
            await this.respond(uuid, new Error('Bad Request'));
        }
    },
    async onTransferMessage(msg) {
        const { kind } = msg;
        if (kind === 'action') {
            return this.onTransferAction(msg);
        }
        if (kind === 'step') {
            return this.onTransferStep(msg);
        }
    },
    lockTransferStep(stage) {
        const currentStep = this.flow?.get();
        const nextStep = { kind: 'transfer', stage };
        if (currentStep?.kind === 'transfer' && currentStep.locked) {
            throw new providers_1.ProviderTransferError(`It's not possible to start a new transfer stage (${stage}) while another one is in progress (${currentStep.stage})`);
        }
        if (this.flow?.cannot(nextStep)) {
            throw new providers_1.ProviderTransferError(`Invalid stage (${stage}) provided for the current flow`, {
                step: nextStep,
            });
        }
        this.flow?.set({ ...nextStep, locked: true });
    },
    unlockTransferStep(stage) {
        const currentStep = this.flow?.get();
        const nextStep = { kind: 'transfer', stage };
        // Cannot unlock if not locked (aka: started)
        if (currentStep?.kind === 'transfer' && !currentStep.locked) {
            throw new providers_1.ProviderTransferError(`You need to initialize the transfer stage (${stage}) before ending it`);
        }
        // Cannot unlock if invalid step provided
        if (this.flow?.cannot(nextStep)) {
            throw new providers_1.ProviderTransferError(`Invalid stage (${stage}) provided for the current flow`, {
                step: nextStep,
            });
        }
        this.flow?.set({ ...nextStep, locked: false });
    },
    async onTransferStep(msg) {
        const { step: stage } = msg;
        if (msg.action === 'start') {
            this.lockTransferStep(stage);
            if (this.streams?.[stage] instanceof stream_1.Writable) {
                throw new Error('Stream already created, something went wrong');
            }
            await this.createWritableStreamForStep(stage);
            return { ok: true };
        }
        if (msg.action === 'stream') {
            this.assertValidStreamTransferStep(stage);
            // Stream operation on the current transfer stage
            const stream = this.streams?.[stage];
            if (!stream) {
                throw new Error('You need to init first');
            }
            // Assets are nested streams
            if (stage === 'assets') {
                return this.streamAsset(msg.data);
            }
            // For all other steps
            await Promise.all(msg.data.map((item) => writeAsync(stream, item)));
        }
        if (msg.action === 'end') {
            this.unlockTransferStep(stage);
            const stream = this.streams?.[stage];
            if (stream && !stream.closed) {
                await new Promise((resolve, reject) => {
                    stream.on('close', resolve).on('error', reject).end();
                });
            }
            delete this.streams?.[stage];
            return { ok: true };
        }
    },
    async onTransferAction(msg) {
        const { action } = msg;
        this.assertValidTransferAction(action);
        const step = { kind: 'action', action };
        const isStepRegistered = this.flow?.has(step);
        if (isStepRegistered) {
            if (this.flow?.cannot(step)) {
                throw new providers_1.ProviderTransferError(`Invalid action "${action}" found for the current flow `, {
                    action,
                });
            }
            this.flow?.set(step);
        }
        return this.provider?.[action]();
    },
    async streamAsset(payload) {
        const assetsStream = this.streams?.assets;
        // TODO: close the stream upong receiving an 'end' event instead
        if (payload === null) {
            this.streams?.assets?.end();
            return;
        }
        for (const item of payload) {
            const { action, assetID } = item;
            if (!assetsStream) {
                throw new Error('Stream not defined');
            }
            if (action === 'start') {
                this.assets[assetID] = { ...item.data, stream: new stream_1.PassThrough() };
                writeAsync(assetsStream, this.assets[assetID]);
            }
            if (action === 'stream') {
                // The buffer has gone through JSON operations and is now of shape { type: "Buffer"; data: UInt8Array }
                // We need to transform it back into a Buffer instance
                const rawBuffer = item.data;
                const chunk = Buffer.from(rawBuffer.data);
                await writeAsync(this.assets[assetID].stream, chunk);
            }
            if (action === 'end') {
                await new Promise((resolve, reject) => {
                    const { stream: assetStream } = this.assets[assetID];
                    assetStream
                        .on('close', () => {
                        delete this.assets[assetID];
                        resolve();
                    })
                        .on('error', reject)
                        .end();
                });
            }
        }
    },
    onClose() {
        this.teardown();
    },
    onError(err) {
        this.teardown();
        strapi.log.error(err);
    },
    // Commands
    async init(params) {
        if (this.transferID || this.provider) {
            throw new Error('Transfer already in progress');
        }
        await this.verifyAuth();
        this.transferID = (0, crypto_1.randomUUID)();
        this.startedAt = Date.now();
        this.assets = {};
        this.streams = {};
        this.flow = (0, flows_1.createFlow)(flows_1.DEFAULT_TRANSFER_FLOW);
        this.provider = (0, providers_2.createLocalStrapiDestinationProvider)({
            ...params.options,
            autoDestroy: false,
            getStrapi: () => strapi,
        });
        return { transferID: this.transferID };
    },
    async status() {
        const isStarted = this.isTransferStarted();
        if (isStarted) {
            const startedAt = this.startedAt;
            return {
                active: true,
                kind: TRANSFER_KIND,
                startedAt,
                elapsed: Date.now() - startedAt,
            };
        }
        return { active: false, kind: null, elapsed: null, startedAt: null };
    },
    async end(params) {
        await this.verifyAuth();
        if (this.transferID !== params.transferID) {
            throw new providers_1.ProviderTransferError('Bad transfer ID provided');
        }
        this.cleanup();
        return { ok: true };
    },
}));
//# sourceMappingURL=push.js.map