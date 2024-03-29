"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RemoteStrapiSourceProvider_instances, _RemoteStrapiSourceProvider_createStageReadStream, _RemoteStrapiSourceProvider_startStep, _RemoteStrapiSourceProvider_respond, _RemoteStrapiSourceProvider_endStep;
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRemoteStrapiSourceProvider = void 0;
const stream_1 = require("stream");
const providers_1 = require("../../../errors/providers");
const constants_1 = require("../../remote/constants");
const utils_1 = require("../utils");
class RemoteStrapiSourceProvider {
    constructor(options) {
        _RemoteStrapiSourceProvider_instances.add(this);
        this.name = 'source::remote-strapi';
        this.type = 'source';
        this.options = options;
        this.ws = null;
        this.dispatcher = null;
    }
    createEntitiesReadStream() {
        return __classPrivateFieldGet(this, _RemoteStrapiSourceProvider_instances, "m", _RemoteStrapiSourceProvider_createStageReadStream).call(this, 'entities');
    }
    createLinksReadStream() {
        return __classPrivateFieldGet(this, _RemoteStrapiSourceProvider_instances, "m", _RemoteStrapiSourceProvider_createStageReadStream).call(this, 'links');
    }
    async createAssetsReadStream() {
        const assets = {};
        const stream = await __classPrivateFieldGet(this, _RemoteStrapiSourceProvider_instances, "m", _RemoteStrapiSourceProvider_createStageReadStream).call(this, 'assets');
        const pass = new stream_1.PassThrough({ objectMode: true });
        stream
            .on('data', (asset) => {
            const { chunk, ...rest } = asset;
            if (!(asset.filename in assets)) {
                const assetStream = new stream_1.PassThrough();
                assets[asset.filename] = assetStream;
                pass.push({ ...rest, stream: assetStream });
            }
            if (asset.filename in assets) {
                // The buffer has gone through JSON operations and is now of shape { type: "Buffer"; data: UInt8Array }
                // We need to transform it back into a Buffer instance
                assets[asset.filename].push(Buffer.from(chunk.data));
            }
        })
            .on('end', () => {
            Object.values(assets).forEach((s) => {
                s.push(null);
            });
        })
            .on('close', () => {
            pass.end();
        });
        return pass;
    }
    createConfigurationReadStream() {
        return __classPrivateFieldGet(this, _RemoteStrapiSourceProvider_instances, "m", _RemoteStrapiSourceProvider_createStageReadStream).call(this, 'configuration');
    }
    async getMetadata() {
        const metadata = await this.dispatcher?.dispatchTransferAction('getMetadata');
        return metadata ?? null;
    }
    assertValidProtocol(url) {
        const validProtocols = ['https:', 'http:'];
        if (!validProtocols.includes(url.protocol)) {
            throw new providers_1.ProviderValidationError(`Invalid protocol "${url.protocol}"`, {
                check: 'url',
                details: {
                    protocol: url.protocol,
                    validProtocols,
                },
            });
        }
    }
    async initTransfer() {
        return new Promise((resolve, reject) => {
            this.ws
                ?.on('unexpected-response', (_req, res) => {
                if (res.statusCode === 401) {
                    return reject(new providers_1.ProviderInitializationError('Failed to initialize the connection: Authentication Error'));
                }
                if (res.statusCode === 403) {
                    return reject(new providers_1.ProviderInitializationError('Failed to initialize the connection: Authorization Error'));
                }
                if (res.statusCode === 404) {
                    return reject(new providers_1.ProviderInitializationError('Failed to initialize the connection: Data transfer is not enabled on the remote host'));
                }
                return reject(new providers_1.ProviderInitializationError(`Failed to initialize the connection: Unexpected server response ${res.statusCode}`));
            })
                ?.once('open', async () => {
                const query = this.dispatcher?.dispatchCommand({
                    command: 'init',
                });
                const res = (await query);
                if (!res?.transferID) {
                    return reject(new providers_1.ProviderTransferError('Init failed, invalid response from the server'));
                }
                resolve(res.transferID);
            })
                .once('error', reject);
        });
    }
    async bootstrap() {
        const { url, auth } = this.options;
        let ws;
        this.assertValidProtocol(url);
        const wsProtocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsUrl = `${wsProtocol}//${url.host}${(0, utils_1.trimTrailingSlash)(url.pathname)}${constants_1.TRANSFER_PATH}/pull`;
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
        const transferID = await this.initTransfer();
        this.dispatcher.setTransferProperties({ id: transferID, kind: 'pull' });
        await this.dispatcher.dispatchTransferAction('bootstrap');
    }
    async close() {
        await this.dispatcher?.dispatchTransferAction('close');
        await new Promise((resolve) => {
            const { ws } = this;
            if (!ws || ws.CLOSED) {
                resolve();
                return;
            }
            ws.on('close', () => resolve()).close();
        });
    }
    async getSchemas() {
        const schemas = (await this.dispatcher?.dispatchTransferAction('getSchemas')) ?? null;
        return schemas;
    }
}
_RemoteStrapiSourceProvider_instances = new WeakSet(), _RemoteStrapiSourceProvider_createStageReadStream = async function _RemoteStrapiSourceProvider_createStageReadStream(stage) {
    const startResult = await __classPrivateFieldGet(this, _RemoteStrapiSourceProvider_instances, "m", _RemoteStrapiSourceProvider_startStep).call(this, stage);
    if (startResult instanceof Error) {
        throw startResult;
    }
    const { id: processID } = startResult;
    const stream = new stream_1.PassThrough({ objectMode: true });
    const listener = async (raw) => {
        const parsed = JSON.parse(raw.toString());
        // If not a message related to our transfer process, ignore it
        if (!parsed.uuid || parsed?.data?.type !== 'transfer' || parsed?.data?.id !== processID) {
            this.ws?.once('message', listener);
            return;
        }
        const { uuid, data: message } = parsed;
        const { ended, error, data } = message;
        if (ended) {
            await __classPrivateFieldGet(this, _RemoteStrapiSourceProvider_instances, "m", _RemoteStrapiSourceProvider_respond).call(this, uuid);
            await __classPrivateFieldGet(this, _RemoteStrapiSourceProvider_instances, "m", _RemoteStrapiSourceProvider_endStep).call(this, stage);
            stream.end();
            return;
        }
        if (error) {
            await __classPrivateFieldGet(this, _RemoteStrapiSourceProvider_instances, "m", _RemoteStrapiSourceProvider_respond).call(this, uuid);
            await __classPrivateFieldGet(this, _RemoteStrapiSourceProvider_instances, "m", _RemoteStrapiSourceProvider_endStep).call(this, stage);
            stream.destroy(error);
            return;
        }
        stream.push(data);
        this.ws?.once('message', listener);
        await __classPrivateFieldGet(this, _RemoteStrapiSourceProvider_instances, "m", _RemoteStrapiSourceProvider_respond).call(this, uuid);
    };
    this.ws?.once('message', listener);
    return stream;
}, _RemoteStrapiSourceProvider_startStep = async function _RemoteStrapiSourceProvider_startStep(step) {
    try {
        return await this.dispatcher?.dispatchTransferStep({ action: 'start', step });
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
}, _RemoteStrapiSourceProvider_respond = async function _RemoteStrapiSourceProvider_respond(uuid) {
    return new Promise((resolve, reject) => {
        this.ws?.send(JSON.stringify({ uuid }), (e) => {
            if (e) {
                reject(e);
            }
            else {
                resolve(e);
            }
        });
    });
}, _RemoteStrapiSourceProvider_endStep = async function _RemoteStrapiSourceProvider_endStep(step) {
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
};
const createRemoteStrapiSourceProvider = (options) => {
    return new RemoteStrapiSourceProvider(options);
};
exports.createRemoteStrapiSourceProvider = createRemoteStrapiSourceProvider;
//# sourceMappingURL=index.js.map