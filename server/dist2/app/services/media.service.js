"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const storage_1 = require("@google-cloud/storage");
/**
 * Generates short-lived read URLs for public website media while the bucket
 * itself remains private. Credentials are resolved through Google ADC.
 */
class MediaService {
    constructor() {
        this.bucketName = process.env.GCS_MEDIA_BUCKET || 'alegria_pics';
        this.allowedPrefix = process.env.GCS_MEDIA_PREFIX || 'alegria/img/';
        this.lifetimeMs = Math.max(15 * 60 * 1000, Number(process.env.GCS_SIGNED_URL_LIFETIME_MS || 6 * 60 * 60 * 1000));
        this.storage = new storage_1.Storage();
    }
    setRoutes(router) {
        const limiter = (0, express_rate_limit_1.default)({
            windowMs: 60 * 1000,
            max: 60,
            standardHeaders: true,
            legacyHeaders: false,
        });
        router.post('/api/media/signed-urls', limiter, (req, res) => this.createSignedUrls(req, res));
    }
    async createSignedUrls(req, res) {
        try {
            const requested = Array.isArray(req.body?.paths) ? req.body.paths : [];
            const paths = Array.from(new Set(requested.map((value) => String(value || '').trim())));
            if (!paths.length || paths.length > 200) {
                return res.status(400).json({ error: 'invalid_media_paths' });
            }
            for (const objectPath of paths) {
                if (!this.isAllowedPath(objectPath)) {
                    return res.status(400).json({ error: 'invalid_media_path', path: objectPath });
                }
            }
            const expiresAt = Date.now() + this.lifetimeMs;
            const entries = await Promise.all(paths.map(async (objectPath) => {
                const [url] = await this.storage
                    .bucket(this.bucketName)
                    .file(objectPath)
                    .getSignedUrl({ version: 'v4', action: 'read', expires: expiresAt });
                return [objectPath, url];
            }));
            const urls = entries.reduce((result, entry) => {
                result[entry[0]] = entry[1];
                return result;
            }, {});
            res.setHeader('Cache-Control', 'private, max-age=300');
            return res.status(200).json({ expiresAt, urls });
        }
        catch (error) {
            console.error('Unable to sign media URLs', error);
            return res.status(500).json({
                error: 'media_signing_failed',
                message: process.env.NODE_ENV === 'production' ? undefined : error?.message || String(error),
            });
        }
    }
    isAllowedPath(objectPath) {
        return objectPath.startsWith(this.allowedPrefix)
            && objectPath.length <= 512
            && !objectPath.includes('..')
            && !objectPath.includes('\\')
            && /^[a-zA-Z0-9._/\-]+$/.test(objectPath);
    }
}
exports.MediaService = MediaService;

//# sourceMappingURL=media.service.js.map
