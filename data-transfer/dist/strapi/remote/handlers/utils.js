"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerControllerFactory = exports.handleWSUpgrade = exports.isDataTransferMessage = exports.assertValidHeader = exports.transformUpgradeHeader = void 0;
const crypto_1 = require("crypto");
const ws_1 = require("ws");
const providers_1 = require("../../../errors/providers");
const constants_1 = require("./constants");
const transformUpgradeHeader = (header = '') => {
    return header.split(',').map((s) => s.trim().toLowerCase());
};
exports.transformUpgradeHeader = transformUpgradeHeader;
/**
 * Make sure that the upgrade header is a valid websocket one
 */
const assertValidHeader = (ctx) => {
    const upgradeHeader = (0, exports.transformUpgradeHeader)(ctx.headers.upgrade);
    if (!upgradeHeader.includes('websocket')) {
        throw new Error('Invalid Header');
    }
};
exports.assertValidHeader = assertValidHeader;
const isDataTransferMessage = (message) => {
    if (!message || typeof message !== 'object') {
        return false;
    }
    const { uuid, type } = message;
    if (typeof uuid !== 'string' || typeof type !== 'string') {
        return false;
    }
    if (!['command', 'transfer'].includes(type)) {
        return false;
    }
    return true;
};
exports.isDataTransferMessage = isDataTransferMessage;
/**
 * Handle the upgrade to ws connection
 */
const handleWSUpgrade = (wss, ctx, callback) => {
    (0, exports.assertValidHeader)(ctx);
    wss.handleUpgrade(ctx.req, ctx.request.socket, Buffer.alloc(0), (client, request) => {
        // Create a connection between the client & the server
        wss.emit('connection', client, ctx.req);
        // Invoke the ws callback
        callback(client, request);
    });
    ctx.respond = false;
};
exports.handleWSUpgrade = handleWSUpgrade;
// Protocol related functions
const handlerControllerFactory = (implementation) => (options) => {
    const { verify, server: serverOptions } = options ?? {};
    const wss = new ws_1.WebSocket.Server({ ...serverOptions, noServer: true });
    return async (ctx) => {
        (0, exports.handleWSUpgrade)(wss, ctx, (ws) => {
            const state = { id: undefined };
            const prototype = {
                // Transfer ID
                get transferID() {
                    return state.id;
                },
                set transferID(id) {
                    state.id = id;
                },
                // Started at
                get startedAt() {
                    return state.startedAt;
                },
                set startedAt(timestamp) {
                    state.startedAt = timestamp;
                },
                isTransferStarted() {
                    return this.transferID !== undefined && this.startedAt !== undefined;
                },
                assertValidTransfer() {
                    const isStarted = this.isTransferStarted();
                    if (!isStarted) {
                        throw new Error('Invalid Transfer Process');
                    }
                },
                assertValidTransferCommand(command) {
                    const isDefined = typeof this[command] === 'function';
                    const isValidTransferCommand = constants_1.VALID_TRANSFER_COMMANDS.includes(command);
                    if (!isDefined || !isValidTransferCommand) {
                        throw new Error('Invalid transfer command');
                    }
                },
                respond(uuid, e, data) {
                    return new Promise((resolve, reject) => {
                        if (!uuid && !e) {
                            reject(new Error('Missing uuid for this message'));
                            return;
                        }
                        const payload = JSON.stringify({
                            uuid,
                            data: data ?? null,
                            error: e
                                ? {
                                    code: e?.name ?? 'ERR',
                                    message: e?.message,
                                }
                                : null,
                        });
                        this.send(payload, (error) => (error ? reject(error) : resolve()));
                    });
                },
                send(message, cb) {
                    ws.send(message, cb);
                },
                confirm(message) {
                    return new Promise((resolve, reject) => {
                        const uuid = (0, crypto_1.randomUUID)();
                        const payload = JSON.stringify({ uuid, data: message });
                        this.send(payload, (error) => {
                            if (error) {
                                reject(error);
                            }
                        });
                        const onResponse = (raw) => {
                            const response = JSON.parse(raw.toString());
                            if (response.uuid === uuid) {
                                if (response.error) {
                                    return reject(new Error(response.error.message));
                                }
                                resolve(response.data ?? null);
                            }
                            else {
                                ws.once('message', onResponse);
                            }
                        };
                        ws.once('message', onResponse);
                    });
                },
                async executeAndRespond(uuid, fn) {
                    try {
                        const response = await fn();
                        this.respond(uuid, null, response);
                    }
                    catch (e) {
                        if (e instanceof Error) {
                            this.respond(uuid, e);
                        }
                        else if (typeof e === 'string') {
                            this.respond(uuid, new providers_1.ProviderTransferError(e));
                        }
                        else {
                            this.respond(uuid, new providers_1.ProviderTransferError('Unexpected error', {
                                error: e,
                            }));
                        }
                    }
                },
                cleanup() {
                    this.transferID = undefined;
                    this.startedAt = undefined;
                },
                teardown() {
                    this.cleanup();
                },
                verifyAuth(scope) {
                    return verify(ctx, scope);
                },
                // Transfer commands
                init() { },
                end() { },
                status() { },
                // Default prototype implementation for events
                onMessage() { },
                onError() { },
                onClose() { },
            };
            const handler = Object.assign(Object.create(prototype), implementation(prototype));
            // Bind ws events to handler methods
            ws.on('close', (...args) => handler.onClose(...args));
            ws.on('error', (...args) => handler.onError(...args));
            ws.on('message', (...args) => handler.onMessage(...args));
        });
    };
};
exports.handlerControllerFactory = handlerControllerFactory;
//# sourceMappingURL=utils.js.map