import express, { Request, Response } from 'express';
import path from 'path';
import bodyParser from 'body-parser'; // (optional) express has built-ins now
import http from 'http';
import cors from 'cors';
import { UtilsService } from '../services/utils.service';
import { StripeService } from '../services/stripeAdn';

const FRONTEND_ORIGIN = 'http://localhost:8100';

const corsOptions: cors.CorsOptions = {
  origin: FRONTEND_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-user-id'],
  credentials: true,
  optionsSuccessStatus: 204, // helps some legacy browsers with 204 vs 200
};

export class WebServerComponent {
  private app = express();
  private router = express.Router();
  private port!: number; // ✅ definite assignment (or initialize in constructor)

  constructor(
    private utilsSvc: UtilsService, 
    private stripeSvc: StripeService,
  ) {}

  async initWebServer(): Promise<void> {
    // ✅ resolve port with fallback and number coercion
    const rawPort = this.utilsSvc.serverPort ?? process.env.PORT ?? 3000;
    this.port = Number(rawPort);
    if (Number.isNaN(this.port)) this.port = 3000;

    // Middlewares
    this.setupMiddlewares();

    // Routes
    this.setRoutes();
    this.app.use('/', this.router);

    // Static
    const cwd = process.cwd();
    this.app.use(express.static(path.join(cwd, './dist')));
    this.app.use(express.static(path.join(cwd, './dist2')));

    // SPA catch-all (after static)
    this.app.get('/*', (_req: Request, res: Response) => {
      res.sendFile(path.join(cwd, './dist/index.html'));
    });

    // Start server
    http.createServer(this.app).listen(this.port, () => {
      console.log(`✅ HTTP server running on port ${this.port}`);
    });
  }

  private setupMiddlewares(): void {
    // ❌ remove the manual header block to avoid conflicts
    // this.app.use((req, res, next) => { ... });

    // ✅ proper CORS
    this.app.use(cors(corsOptions));

    // ✅ explicit preflight handling (optional but useful)
    this.app.options('*', cors(corsOptions));

    // Body parsers (you can use express.json() / express.urlencoded() instead)
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    // Or:
    // this.app.use(express.json());
    // this.app.use(express.urlencoded({ extended: true }));
  }

  private setRoutes(): void {
    this.utilsSvc.setRoutes(this.router);
    this.stripeSvc.setRoutes(this.router);
  }
}
