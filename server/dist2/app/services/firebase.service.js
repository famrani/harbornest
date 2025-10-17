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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreDbService = exports.OBJECTNAME = void 0;
const common_1 = require("@nestjs/common"); // if using NestJS
const rxjs_1 = require("rxjs");
const admin = __importStar(require("firebase-admin")); // ✅ Correct way
const fs = __importStar(require("fs"));
var OBJECTNAME;
(function (OBJECTNAME) {
    OBJECTNAME["wnLocations"] = "backendlocations";
    OBJECTNAME["wnLocationtypes"] = "backendlocationtypes";
    OBJECTNAME["wnUsers"] = "backendusers";
    OBJECTNAME["wnMessages"] = "backendmessages";
    OBJECTNAME["wnEquipments"] = "backendequipments";
    OBJECTNAME["wnBookings"] = "backendbookings";
    OBJECTNAME["wnFeedbacks"] = "backendfeedbacks";
})(OBJECTNAME || (exports.OBJECTNAME = OBJECTNAME = {}));
let StoreDbService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var StoreDbService = _classThis = class {
        constructor(utilSvc) {
            this.utilSvc = utilSvc;
            this.firebaseBSS = {};
            this.firebaseData = {};
        }
        initFirebase() {
            let currentDir = process.cwd();
            const serviceAccount = JSON.parse(fs.readFileSync(currentDir + '/dist2/config/adn-dev-4d05d-firebase-adminsdk-gzmds-f64bd43091.json', 'utf8'));
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: this.utilSvc.databaseURL,
                storageBucket: 'your-bucket.appspot.com',
            });
            this.db = admin.database();
            this.auth = admin.auth();
            this.bucket = admin.storage().bucket();
        }
        async getObject(refPath) {
            const snapshot = await this.db.ref(refPath).once('value');
            return snapshot.val();
        }
        async setObject(refPath, data) {
            await this.db.ref(refPath).set(data);
        }
        async removeObject(refPath) {
            await this.db.ref(refPath).remove();
        }
        subscribe(refPath, storeKey) {
            if (!this.firebaseBSS[storeKey]) {
                this.firebaseBSS[storeKey] = new rxjs_1.BehaviorSubject(null);
            }
            this.db.ref(refPath).on('value', snapshot => {
                const value = snapshot.val();
                this.firebaseBSS[storeKey].next(value);
            });
        }
        unsubscribe(refPath) {
            this.db.ref(refPath).off();
        }
        async uploadFile(localFilePath, destinationPath) {
            await this.bucket.upload(localFilePath, {
                destination: destinationPath,
                metadata: {
                    cacheControl: 'public,max-age=31536000',
                },
            });
        }
        async deleteFile(destinationPath) {
            await this.bucket.file(destinationPath).delete();
        }
        createUser(email, password) {
            return new Promise(async (resolve, reject) => {
                try {
                    const userRecord = await admin.auth().createUser({
                        email,
                        password,
                    });
                    resolve(userRecord);
                }
                catch (e) {
                    reject(e);
                }
            });
        }
        getUserIdByEmail(email) {
            const maf = admin.auth();
            return new Promise((resolve, reject) => {
                maf.getUserByEmail(email.toLowerCase()).then((success) => {
                    const userid = success.uid;
                    resolve(userid);
                }, error => {
                    reject(error);
                });
            });
        }
    };
    __setFunctionName(_classThis, "StoreDbService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StoreDbService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StoreDbService = _classThis;
})();
exports.StoreDbService = StoreDbService;

//# sourceMappingURL=firebase.service.js.map
