"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebServerComponent = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser")); // (optional) express has built-ins now
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const FRONTEND_ORIGIN = 'http://localhost:8100';
const corsOptions = {
    origin: FRONTEND_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-user-id'],
    credentials: true,
    optionsSuccessStatus: 204, // helps some legacy browsers with 204 vs 200
};
class WebServerComponent {
    constructor(utilsSvc, stripeSvc) {
        this.utilsSvc = utilsSvc;
        this.stripeSvc = stripeSvc;
        this.app = (0, express_1.default)();
        this.router = express_1.default.Router();
    }
    async initWebServer() {
        // ✅ resolve port with fallback and number coercion
        const rawPort = this.utilsSvc.serverPort ?? process.env.PORT ?? 3000;
        this.port = Number(rawPort);
        if (Number.isNaN(this.port))
            this.port = 3000;
        // Middlewares
        this.setupMiddlewares();
        // Routes
        this.setRoutes();
        this.app.use('/', this.router);
        // Static
        const cwd = process.cwd();
        this.app.use(express_1.default.static(path_1.default.join(cwd, './dist')));
        this.app.use(express_1.default.static(path_1.default.join(cwd, './dist2')));
        // SPA catch-all (after static)
        this.app.get('/*', (_req, res) => {
            res.sendFile(path_1.default.join(cwd, './dist/index.html'));
        });
        // Start server
        http_1.default.createServer(this.app).listen(this.port, () => {
            console.log(`✅ HTTP server running on port ${this.port}`);
        });
    }
    setupMiddlewares() {
        // ❌ remove the manual header block to avoid conflicts
        // this.app.use((req, res, next) => { ... });
        // ✅ proper CORS
        this.app.use((0, cors_1.default)(corsOptions));
        // ✅ explicit preflight handling (optional but useful)
        this.app.options('*', (0, cors_1.default)(corsOptions));
        // Body parsers (you can use express.json() / express.urlencoded() instead)
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        // Or:
        // this.app.use(express.json());
        // this.app.use(express.urlencoded({ extended: true }));
    }
    setRoutes() {
        this.utilsSvc.setRoutes(this.router);
        this.stripeSvc.setRoutes(this.router);
    }
}
exports.WebServerComponent = WebServerComponent;

//# sourceMappingURL=webServer.component.js.map
