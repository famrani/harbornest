import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';
import http from 'http';
import https from 'https';
import { UtilsService } from '../services/utils.service';
import { StripeService } from '../services/stripeAdn';

export class WebServerComponent {
    private app = express();
    private appHttp = express();
    private port: number;
    private portHttp: number;
    private router = express.Router();

    constructor(private utilsSvc: UtilsService, private stripeSvc: StripeService) {}

    async initWebServer(): Promise<void> {
        this.port = Number(this.utilsSvc.serverPort);
        this.portHttp = this.port + 1;

        // Apply middlewares
        this.setupMiddlewares();

        // Setup routes
        this.router = express.Router();
        this.setRoutes();
        this.app.use('/', this.router);

        // Serve static files
        const temp = process.cwd();
        this.app.use(express.static(path.join(temp, './dist')));
        this.app.use(express.static(path.join(temp, './dist2')));

        // Catch-all for SPA routing (must be after static!)
        this.app.get('/*', (req: Request, res: Response) => {
            res.sendFile(path.join(temp, './dist/index.html'));
        });

        // HTTP -> HTTPS redirect
        this.appHttp.use((req: Request, res: Response) => {
            const host = req.headers.host?.replace(/:\d+$/, `:${this.port}`) || '';
            res.redirect(301, `https://${host}${req.url}`);
        });

        // SSL options
        const sslOptions = {
            key: fs.readFileSync('./sslKeys/kamli.net/_.kamli.net.key'),
            cert: fs.readFileSync('./sslKeys/kamli.net/_.kamli.net.crt'),
            ca: [fs.readFileSync('./sslKeys/kamli.net/GandiCert.pem')],
        };

        // Start HTTPS server
        https.createServer(sslOptions, this.app).listen(this.port, () => {
            console.log(`✅ HTTPS server running on port ${this.port}`);
        });

        // Start HTTP server (redirects)
        http.createServer(this.appHttp).listen(this.portHttp, () => {
            console.log(`✅ HTTP redirect server running on port ${this.portHttp}`);
        });
    }

    private setupMiddlewares(): void {
        // CORS setup
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            next();
        });

        // Body parsers
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private setRoutes(): void {
        this.utilsSvc.setRoutes(this.router);
    }
}
