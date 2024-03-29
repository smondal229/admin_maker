"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _LocalStrapiDestinationProvider_instances, _LocalStrapiDestinationProvider_entitiesMapper, _LocalStrapiDestinationProvider_validateOptions, _LocalStrapiDestinationProvider_deleteAll;
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocalStrapiDestinationProvider = exports.DEFAULT_CONFLICT_STRATEGY = exports.VALID_CONFLICT_STRATEGIES = void 0;
const stream_1 = require("stream");
const path_1 = __importDefault(require("path"));
const fse = __importStar(require("fs-extra"));
const strategies_1 = require("./strategies");
const utils = __importStar(require("../../../utils"));
const providers_1 = require("../../../errors/providers");
const providers_2 = require("../../../utils/providers");
exports.VALID_CONFLICT_STRATEGIES = ['restore', 'merge'];
exports.DEFAULT_CONFLICT_STRATEGY = 'restore';
class LocalStrapiDestinationProvider {
    constructor(options) {
        _LocalStrapiDestinationProvider_instances.add(this);
        this.name = 'destination::local-strapi';
        this.type = 'destination';
        /**
         * The entities mapper is used to map old entities to their new IDs
         */
        _LocalStrapiDestinationProvider_entitiesMapper.set(this, void 0);
        this.options = options;
        __classPrivateFieldSet(this, _LocalStrapiDestinationProvider_entitiesMapper, {}, "f");
    }
    async bootstrap() {
        __classPrivateFieldGet(this, _LocalStrapiDestinationProvider_instances, "m", _LocalStrapiDestinationProvider_validateOptions).call(this);
        this.strapi = await this.options.getStrapi();
        this.transaction = utils.transaction.createTransaction(this.strapi);
    }
    async close() {
        const { autoDestroy } = this.options;
        this.transaction?.end();
        // Basically `!== false` but more deterministic
        if (autoDestroy === undefined || autoDestroy === true) {
            await this.strapi?.destroy();
        }
    }
    async rollback() {
        await this.transaction?.rollback();
    }
    async beforeTransfer() {
        if (!this.strapi) {
            throw new Error('Strapi instance not found');
        }
        await this.transaction?.attach(async () => {
            try {
                if (this.options.strategy === 'restore') {
                    await __classPrivateFieldGet(this, _LocalStrapiDestinationProvider_instances, "m", _LocalStrapiDestinationProvider_deleteAll).call(this);
                }
            }
            catch (error) {
                throw new Error(`restore failed ${error}`);
            }
        });
    }
    getMetadata() {
        const strapiVersion = strapi.config.get('info.strapi');
        const createdAt = new Date().toISOString();
        return {
            createdAt,
            strapi: {
                version: strapiVersion,
            },
        };
    }
    getSchemas() {
        (0, providers_2.assertValidStrapi)(this.strapi, 'Not able to get Schemas');
        const schemas = {
            ...this.strapi.contentTypes,
            ...this.strapi.components,
        };
        return utils.schema.mapSchemasValues(schemas);
    }
    createEntitiesWriteStream() {
        (0, providers_2.assertValidStrapi)(this.strapi, 'Not able to import entities');
        const { strategy } = this.options;
        const updateMappingTable = (type, oldID, newID) => {
            if (!__classPrivateFieldGet(this, _LocalStrapiDestinationProvider_entitiesMapper, "f")[type]) {
                __classPrivateFieldGet(this, _LocalStrapiDestinationProvider_entitiesMapper, "f")[type] = {};
            }
            Object.assign(__classPrivateFieldGet(this, _LocalStrapiDestinationProvider_entitiesMapper, "f")[type], { [oldID]: newID });
        };
        if (strategy === 'restore') {
            return strategies_1.restore.createEntitiesWriteStream({
                strapi: this.strapi,
                updateMappingTable,
                transaction: this.transaction,
            });
        }
        throw new providers_1.ProviderValidationError(`Invalid strategy ${this.options.strategy}`, {
            check: 'strategy',
            strategy: this.options.strategy,
            validStrategies: exports.VALID_CONFLICT_STRATEGIES,
        });
    }
    // TODO: Move this logic to the restore strategy
    async createAssetsWriteStream() {
        (0, providers_2.assertValidStrapi)(this.strapi, 'Not able to stream Assets');
        const assetsDirectory = path_1.default.join(this.strapi.dirs.static.public, 'uploads');
        const backupDirectory = path_1.default.join(this.strapi.dirs.static.public, `uploads_backup_${Date.now()}`);
        try {
            await fse.move(assetsDirectory, backupDirectory);
            await fse.mkdir(assetsDirectory);
            // Create a .gitkeep file to ensure the directory is not empty
            await fse.outputFile(path_1.default.join(assetsDirectory, '.gitkeep'), '');
        }
        catch (err) {
            throw new providers_1.ProviderTransferError('The backup folder for the assets could not be created inside the public folder. Please ensure Strapi has write permissions on the public directory');
        }
        return new stream_1.Writable({
            objectMode: true,
            async final(next) {
                await fse.rm(backupDirectory, { recursive: true, force: true });
                next();
            },
            async write(chunk, _encoding, callback) {
                const entryPath = path_1.default.join(assetsDirectory, chunk.filename);
                const writableStream = fse.createWriteStream(entryPath);
                chunk.stream
                    .pipe(writableStream)
                    .on('close', () => {
                    callback(null);
                })
                    .on('error', async (error) => {
                    const errorMessage = error.code === 'ENOSPC'
                        ? " Your server doesn't have space to proceed with the import. "
                        : ' ';
                    try {
                        await fse.rm(assetsDirectory, { recursive: true, force: true });
                        await fse.move(backupDirectory, assetsDirectory);
                        this.destroy(new providers_1.ProviderTransferError(`There was an error during the transfer process.${errorMessage}The original files have been restored to ${assetsDirectory}`));
                    }
                    catch (err) {
                        throw new providers_1.ProviderTransferError(`There was an error doing the rollback process. The original files are in ${backupDirectory}, but we failed to restore them to ${assetsDirectory}`);
                    }
                    finally {
                        callback(error);
                    }
                });
            },
        });
    }
    async createConfigurationWriteStream() {
        (0, providers_2.assertValidStrapi)(this.strapi, 'Not able to stream Configurations');
        const { strategy } = this.options;
        if (strategy === 'restore') {
            return strategies_1.restore.createConfigurationWriteStream(this.strapi, this.transaction);
        }
        throw new providers_1.ProviderValidationError(`Invalid strategy ${strategy}`, {
            check: 'strategy',
            strategy,
            validStrategies: exports.VALID_CONFLICT_STRATEGIES,
        });
    }
    async createLinksWriteStream() {
        if (!this.strapi) {
            throw new Error('Not able to stream links. Strapi instance not found');
        }
        const { strategy } = this.options;
        const mapID = (uid, id) => __classPrivateFieldGet(this, _LocalStrapiDestinationProvider_entitiesMapper, "f")[uid]?.[id];
        if (strategy === 'restore') {
            return strategies_1.restore.createLinksWriteStream(mapID, this.strapi, this.transaction);
        }
        throw new providers_1.ProviderValidationError(`Invalid strategy ${strategy}`, {
            check: 'strategy',
            strategy,
            validStrategies: exports.VALID_CONFLICT_STRATEGIES,
        });
    }
}
_LocalStrapiDestinationProvider_entitiesMapper = new WeakMap(), _LocalStrapiDestinationProvider_instances = new WeakSet(), _LocalStrapiDestinationProvider_validateOptions = function _LocalStrapiDestinationProvider_validateOptions() {
    if (!exports.VALID_CONFLICT_STRATEGIES.includes(this.options.strategy)) {
        throw new providers_1.ProviderValidationError(`Invalid strategy ${this.options.strategy}`, {
            check: 'strategy',
            strategy: this.options.strategy,
            validStrategies: exports.VALID_CONFLICT_STRATEGIES,
        });
    }
}, _LocalStrapiDestinationProvider_deleteAll = async function _LocalStrapiDestinationProvider_deleteAll() {
    (0, providers_2.assertValidStrapi)(this.strapi);
    return strategies_1.restore.deleteRecords(this.strapi, this.options.restore);
};
const createLocalStrapiDestinationProvider = (options) => {
    return new LocalStrapiDestinationProvider(options);
};
exports.createLocalStrapiDestinationProvider = createLocalStrapiDestinationProvider;
//# sourceMappingURL=index.js.map