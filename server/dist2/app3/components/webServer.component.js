"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebServerComponent = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
class WebServerComponent {
    constructor(utilsSvc, stripeSvc, bookingsSvc, usersSvc, boatownersSvc) {
        this.utilsSvc = utilsSvc;
        this.stripeSvc = stripeSvc;
        this.bookingsSvc = bookingsSvc;
        this.usersSvc = usersSvc;
        this.boatownersSvc = boatownersSvc;
        this.app = (0, express_1.default)();
        this.appHttp = (0, express_1.default)();
        this.router = express_1.default.Router();
    }
    async initWebServer() {
        this.port = Number(this.utilsSvc.serverPort);
        this.portHttp = this.port + 1;
        // Apply middlewares
        this.setupMiddlewares();
        // Setup routes
        this.router = express_1.default.Router();
        this.setRoutes();
        this.app.use('/', this.router);
        // Serve static files
        const temp = process.cwd();
        this.app.use(express_1.default.static(path_1.default.join(temp, './dist')));
        this.app.use(express_1.default.static(path_1.default.join(temp, './dist2')));
        // Catch-all for SPA routing (must be after static!)
        this.app.get('/*', (req, res) => {
            res.sendFile(path_1.default.join(temp, './dist/index.html'));
        });
        // HTTP -> HTTPS redirect
        this.appHttp.use((req, res) => {
            const host = req.headers.host?.replace(/:\d+$/, `:${this.port}`) || '';
            res.redirect(301, `https://${host}${req.url}`);
        });
        // SSL options
        const sslOptions = {
            key: fs_1.default.readFileSync('./sslKeys/kamli.net/alldigitalnetwork.com.key'),
            cert: fs_1.default.readFileSync('./sslKeys/kamli.net/alldigitalnetwork.com.crt'),
            ca: [fs_1.default.readFileSync('./sslKeys/kamli.net/GandiCert.pem')],
        };
        // Start HTTPS server
        https_1.default.createServer(sslOptions, this.app).listen(this.port, () => {
            console.log(`✅ HTTPS server running on port ${this.port}`);
        });
        // Start HTTP server (redirects)
        http_1.default.createServer(this.appHttp).listen(this.portHttp, () => {
            console.log(`✅ HTTP redirect server running on port ${this.portHttp}`);
        });
    }
    setupMiddlewares() {
        // CORS setup
        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            next();
        });
        // Stripe webhooks must be registered BEFORE JSON body parsers.
        this.app.post('/stripe/owner/:ownerId/webhook', body_parser_1.default.raw({ type: 'application/json' }), (req, res) => this.stripeSvc.handleOwnerWebhook(req, res));
        this.app.post('/stripe/webhook', body_parser_1.default.raw({ type: 'application/json' }), (req, res) => this.stripeSvc.handlePlatformWebhook(req, res, process.env.STRIPE_WEBHOOK_SECRET || ''));
        // Stripe webhooks must be registered BEFORE JSON body parsers.
        this.app.post('/stripe/owner/:ownerId/webhook', body_parser_1.default.raw({ type: 'application/json' }), (req, res) => this.stripeSvc.handleOwnerWebhook(req, res));
        this.app.post('/stripe/webhook', body_parser_1.default.raw({ type: 'application/json' }), (req, res) => this.stripeSvc.handlePlatformWebhook(req, res, process.env.STRIPE_WEBHOOK_SECRET || ''));
        // Body parsers
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    setRoutes() {
        this.utilsSvc.setRoutes(this.router);
        this.stripeSvc.setRoutes(this.router);
        this.bookingsSvc.setRoutes(this.router);
        this.usersSvc.setRoutes(this.router);
        this.boatownersSvc.setRoutes(this.router);
    }
}
exports.WebServerComponent = WebServerComponent;

//# sourceMappingURL=webServer.component.js.map
