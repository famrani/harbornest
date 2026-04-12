"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebServerComponent = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var http_1 = __importDefault(require("http"));
var WebServerComponent = /** @class */ (function () {
    function WebServerComponent(utilsSvc, stripeSvc) {
        this.utilsSvc = utilsSvc;
        this.stripeSvc = stripeSvc;
        this.app = (0, express_1.default)();
        this.router = express_1.default.Router();
    }
    WebServerComponent.prototype.initWebServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var temp;
            var _this = this;
            return __generator(this, function (_a) {
                this.port = Number(this.utilsSvc.serverPort);
                // Apply middlewares
                this.setupMiddlewares();
                // Setup routes
                this.setRoutes();
                this.app.use('/', this.router);
                temp = process.cwd();
                this.app.use(express_1.default.static(path_1.default.join(temp, './dist')));
                this.app.use(express_1.default.static(path_1.default.join(temp, './dist2')));
                // Catch-all for SPA routing (after static serving)
                this.app.get('/*', function (req, res) {
                    res.sendFile(path_1.default.join(temp, './dist/index.html'));
                });
                // Start HTTP server directly
                http_1.default.createServer(this.app).listen(this.port, function () {
                    console.log("\u2705 HTTP server running on port ".concat(_this.port));
                });
                return [2 /*return*/];
            });
        });
    };
    WebServerComponent.prototype.setupMiddlewares = function () {
        // CORS setup
        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            next();
        });
        // Body parsers
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    };
    WebServerComponent.prototype.setRoutes = function () {
        this.utilsSvc.setRoutes(this.router);
        this.stripeSvc.setRoutes(this.router);
    };
    return WebServerComponent;
}());
exports.WebServerComponent = WebServerComponent;
