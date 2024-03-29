"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RemoteStrapiDestinationProvider_instances, _RemoteStrapiDestinationProvider_startStepOnce, _RemoteStrapiDestinationProvider_startStep, _RemoteStrapiDestinationProvider_endStep, _RemoteStrapiDestinationProvider_streamStep, _RemoteStrapiDestinationProvider_writeStream;
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRemoteStrapiDestinationProvider = void 0;
const crypto_1 = require("crypto");
const stream_1 = require("stream");
const fp_1 = require("lodash/fp");
const utils_1 = require("../utils");
const constants_1 = require("../../remote/constants");
const providers_1 = require("../../../errors/providers");
const jsonLength = (obj) => Buffer.byteLength(JSON.stringify(obj));
class RemoteStrapiDestinationProvider {
    constructor(options) {
        _RemoteStrapiDestinationProvider_instances.add(this);
        this.name = 'destination::remote-strapi';
        this.type = 'destination';
        this.options = options;
        this.ws = null;
        this.dispatcher = null;
        this.transferID = null;
    }
    async initTransfer() {
        const { strategy, restore } = this.options;
        const query = this.dispatcher?.dispatchCommand({
            command: 'init',
            params: { options: { strategy, restore }, transfer: 'push' },
        });
        const res = (await query);
        if (!res?.transferID) {
            throw new providers_1.ProviderTransferError('Init failed, invalid response from the server');
        }
        return res.transferID;
    }
    async bootstrap() {
        const { url, auth } = this.options;
        const validProtocols = ['https:', 'http:'];
        let ws;
        if (!validProtocols.includes(url.protocol)) {
            throw new providers_1.ProviderValidationError(`Invalid protocol "${url.protocol}"`, {
                check: 'url',
                details: {
                    protocol: url.protocol,
                    validProtocols,
                },
            });
        }
        const wsProtocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsUrl = `${wsProtocol}//${url.host}${(0, utils_1.trimTrailingSlash)(url.pathname)}${constants_1.TRANSFER_PATH}/push`;
        // No auth defined, trying public access for transfer
        if (!auth) {
            ws = await (0, utils_1.connectToWebsocket)(wsUrl);
        }
        // Common token auth, this should be the main auth method
        else if (auth.type === 'token') {
            const headers = { Authorization: `Bearer ${auth.token}` };
            ws = await (0, utils_1.connectToWebsocket)(wsUrl, { headers });
        }
        // Invalid auth method provided
        else {
            throw new providers_1.ProviderValidationError('Auth method not available', {
                check: 'auth.type',
                details: {
                    auth: auth.type,
                },
            });
        }
        this.ws = ws;
        this.dispatcher = (0, utils_1.createDispatcher)(this.ws);
        this.transferID = await this.initTransfer();
        this.dispatcher.setTransferProperties({ id: this.transferID, kind: 'push' });
        await this.dispatcher.dispatchTransferAction('bootstrap');
    }
    async close() {
        // Gracefully close the remote transfer process
        if (this.transferID && this.dispatcher) {
            await this.dispatcher.dispatchTransferAction('close');
            await this.dispatcher.dispatchCommand({
                command: 'end',
                params: { transferID: this.transferID },
            });
        }
        await new Promise((resolve) => {
            const { ws } = this;
            if (!ws || ws.CLOSED) {
                resolve();
                return;
            }
            ws.on('close', () => resolve()).close();
        });
    }
    getMetadata() {
        return this.dispatcher?.dispatchTransferAction('getMetadata') ?? null;
    }
    async beforeTransfer() {
        await this.dispatcher?.dispatchTransferAction('beforeTransfer');
    }
    async rollback() {
        await this.dispatcher?.dispatchTransferAction('rollback');
    }
    getSchemas() {
        if (!this.dispatcher) {
            return Promise.resolve(null);
        }
        return this.dispatcher.dispatchTransferAction('getSchemas');
    }
    createEntitiesWriteStream() {
        return __classPrivateFieldGet(this, _RemoteStrapiDestinationProvider_instances, "m", _RemoteStrapiDestinationProvider_writeStream).call(this, 'entities');
    }
    createLinksWriteStream() {
        return __classPrivateFieldGet(this, _RemoteStrapiDestinationProvider_instances, "m", _RemoteStrapiDestinationProvider_writeStream).call(this, 'links');
    }
    createConfigurationWriteStream() {
        return __classPrivateFieldGet(this, _RemoteStrapiDestinationProvider_instances, "m", _RemoteStrapiDestinationProvider_writeStream).call(this, 'configuration');
    }
    createAssetsWriteStream() {
        let batch = [];
        let hasStarted = false;
        const batchSize = 1024 * 1024; // 1MB;
        const batchLength = () => {
            return batch.reduce((acc, chunk) => (chunk.action === 'stream' ? acc + chunk.data.byteLength : acc), 0);
        };
        const startAssetsTransferOnce = __classPrivateFieldGet(this, _RemoteStrapiDestinationProvider_instances, "m", _RemoteStrapiDestinationProvider_startStepOnce).call(this, 'assets');
        const flush = async () => {
            const streamError = await __classPrivateFieldGet(this, _RemoteStrapiDestinationProvider_instances, "m", _RemoteStrapiDestinationProvider_streamStep).call(this, 'assets', batch);
            batch = [];
            return streamError;
        };
        const safePush = async (chunk) => {
            batch.push(chunk);
            if (batchLength() >= batchSize) {
                const streamError = await flush();
                if (streamError) {
                    throw streamError;
                }
            }
        };
        return new stream_1.Writable({
            objectMode: true,
            final: async (callback) => {
                if (batch.length > 0) {
                    await flush();
                }
                if (hasStarted) {
                    await __classPrivateFieldGet(this, _RemoteStrapiDestinationProvider_instances, "m", _RemoteStrapiDestinationProvider_streamStep).call(this, 'assets', null);
                    const endStepError = await __classPrivateFieldGet(this, _RemoteStrapiDestinationProvider_instances, "m", _RemoteStrapiDestinationProvider_endStep).call(this, 'assets');
                    if (endStepError) {
                        return callback(endStepError);
                    }
                }
                return callback(null);
            },
            async write(asset, _encoding, callback) {
                const startError = await startAssetsTransferOnce();
                if (startError) {
                    return callback(startError);
                }
                hasStarted = true;
                const assetID = (0, crypto_1.randomUUID)();
                const { filename, filepath, stats, stream } = asset;
                try {
                    await safePush({
                        action: 'start',
                        assetID,
                        data: { filename, filepath, stats },
                    });
                    for await (const chunk of stream) {
                        await safePush({ action: 'stream', assetID, data: chunk });
                    }
                    await safePush({ action: 'end', assetID });
                    callback();
                }
                catch (error) {
                    if (error instanceof Error) {
                        callback(error);
                    }
                }
            },
        });
    }
}
_RemoteStrapiDestinationProvider_instances = new WeakSet(), _RemoteStrapiDestinationProvider_startStepOnce = function _RemoteStrapiDestinationProvider_startStepOnce(stage) {
    return (0, fp_1.once)(() => __classPrivateFieldGet(this, _RemoteStrapiDestinationProvider_instances, "m", _RemoteStrapiDestinationProvider_startStep).call(this, stage));
}, _RemoteStrapiDestinationProvider_startStep = async function _RemoteStrapiDestinationProvider_startStep(step) {
    try {
        await this.dispatcher?.dispatchTransferStep({ action: 'start', step });
    }
    catch (e) {
        if (e instanceof Error) {
            return e;
        }
        if (typeof e === 'string') {
            return new providers_1.ProviderTransferError(e);
        }
        return new providers_1.ProviderTransferError('Unexpected error');
    }
    return null;
}, _RemoteStrapiDestinationProvider_endStep = async function _RemoteStrapiDestinationProvider_endStep(step) {
    try {
        await this.dispatcher?.dispatchTransferStep({ action: 'end', step });
    }
    catch (e) {
        if (e instanceof Error) {
            return e;
        }
        if (typeof e === 'string') {
            return new providers_1.ProviderTransferError(e);
        }
        return new providers_1.ProviderTransferError('Unexpected error');
    }
    return null;
}, _RemoteStrapiDestinationProvider_streamStep = async function _RemoteStrapiDestinationProvider_streamStep(step, data) {
    try {
        await this.dispatcher?.dispatchTransferStep({ action: 'stream', step, data });
    }
    catch (e) {
        if (e instanceof Error) {
            return e;
        }
        if (typeof e === 'string') {
            return new providers_1.ProviderTransferError(e);
        }
        return new providers_1.ProviderTransferError('Unexpected error');
    }
    return null;
}, _RemoteStrapiDestinationProvider_writeStream = function _RemoteStrapiDestinationProvider_writeStream(step) {
    const batchSize = 1024 * 1024; // 1MB;
    const startTransferOnce = __classPrivateFieldGet(this, _RemoteStrapiDestinationProvider_instances, "m", _RemoteStrapiDestinationProvider_startStepOnce).call(this, step);
    let batch = [];
    const batchLength = () => jsonLength(batch);
    return new stream_1.Writable({
        objectMode: true,
        final: async (callback) => {
            if (batch.length > 0) {
                const streamError = await __classPrivateFieldGet(this, _RemoteStrapiDestinationProvider_instances, "m", _RemoteStrapiDestinationProvider_streamStep).call(this, step, batch);
                batch = [];
                if (streamError) {
                    return callback(streamError);
                }
            }
            const e = await __classPrivateFieldGet(this, _RemoteStrapiDestinationProvider_instances, "m", _RemoteStrapiDestinationProvider_endStep).call(this, step);
            callback(e);
        },
        write: async (chunk, _encoding, callback) => {
            const startError = await startTransferOnce();
            if (startError) {
                return callback(startError);
            }
            batch.push(chunk);
            if (batchLength() >= batchSize) {
                const streamError = await __classPrivateFieldGet(this, _RemoteStrapiDestinationProvider_instances, "m", _RemoteStrapiDestinationProvider_streamStep).call(this, step, batch);
                batch = [];
                if (streamError) {
                    return callback(streamError);
                }
            }
            callback();
        },
    });
};
const createRemoteStrapiDestinationProvider = (options) => {
    return new RemoteStrapiDestinationProvider(options);
};
exports.createRemoteStrapiDestinationProvider = createRemoteStrapiDestinationProvider;
//# sourceMappingURL=index.js.map