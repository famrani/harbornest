"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const storage_1 = require("@google-cloud/storage");
const multer_1 = __importDefault(require("multer"));
/**
 * Proxies public website media from a private tenant folder. The browser only
 * knows logical paths such as `alegria/img/...`; bucket and tenant paths remain
 * trusted backend configuration. Credentials are resolved through Google ADC.
 */
class MediaService {
    constructor(store) {
        this.store = store;
        this.bucketName = process.env.GCS_MEDIA_BUCKET || 'adn_root';
        this.tenantRoot = String(process.env.GCS_MEDIA_TENANT_ROOT || 'tenants/alegria_data').replace(/^\/+|\/+$/g, '');
        this.allowedPrefix = process.env.GCS_MEDIA_PREFIX || 'alegria/img/';
        this.lifetimeMs = Math.max(15 * 60 * 1000, Number(process.env.GCS_SIGNED_URL_LIFETIME_MS || 6 * 60 * 60 * 1000));
        this.storage = new storage_1.Storage();
        this.upload = (0, multer_1.default)({
            storage: multer_1.default.memoryStorage(),
            limits: { fileSize: 12 * 1024 * 1024, files: 1 },
            fileFilter: (_req, file, callback) => {
                const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'];
                callback(null, allowed.includes(String(file.mimetype || '').toLowerCase()));
            },
        });
    }
    setRoutes(router) {
        const limiter = (0, express_rate_limit_1.default)({
            windowMs: 60 * 1000,
            max: 60,
            standardHeaders: true,
            legacyHeaders: false,
        });
        router.post('/api/media/urls', limiter, (req, res) => this.createMediaUrls(req, res));
        // Backward-compatible route for already deployed frontends. The returned
        // URLs now point to the authenticated backend proxy, not directly to GCS.
        router.post('/api/media/signed-urls', limiter, (req, res) => this.createMediaUrls(req, res));
        router.get('/api/media/object', limiter, (req, res) => this.streamObject(req, res));
        router.post('/api/admin/media/upload', limiter, (req, res, next) => {
            this.upload.single('file')(req, res, (error) => {
                if (!error)
                    return next();
                const tooLarge = error?.code === 'LIMIT_FILE_SIZE';
                return res.status(tooLarge ? 413 : 400).json({
                    error: tooLarge ? 'image_too_large' : 'invalid_image_upload',
                    message: tooLarge ? 'La photo dépasse la limite de 12 Mo.' : error?.message,
                });
            });
        }, (req, res) => this.uploadObject(req, res));
    }
    async uploadObject(req, res) {
        try {
            const adminUser = await this.requireAdmin(req);
            if (!adminUser)
                return res.status(403).json({ error: 'admin_access_required' });
            const file = req.file;
            if (!file)
                return res.status(400).json({ error: 'image_file_required' });
            const category = this.safeSegment(req.body?.category || 'content');
            const subject = this.safeSegment(req.body?.subject || 'general');
            const categoryFolders = {
                outings: 'events',
                boat: 'boat',
                gallery: 'gallery',
                content: 'content',
            };
            const folder = categoryFolders[category];
            if (!folder)
                return res.status(400).json({ error: 'invalid_media_category' });
            const extension = this.extensionFor(file.mimetype);
            if (!extension)
                return res.status(400).json({ error: 'unsupported_image_type' });
            const baseName = this.safeFileBase(file.originalname || 'photo');
            const uniqueName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${baseName}.${extension}`;
            const logicalPath = `${this.allowedPrefix}${folder}/${subject}/${uniqueName}`;
            if (!this.isAllowedPath(logicalPath)) {
                return res.status(400).json({ error: 'invalid_media_path' });
            }
            const object = this.storage.bucket(this.bucketName).file(this.getPhysicalPath(logicalPath));
            await object.save(file.buffer, {
                resumable: false,
                contentType: file.mimetype,
                metadata: {
                    cacheControl: 'private, max-age=3600',
                    metadata: {
                        uploadedBy: adminUser.uid,
                        uploadedAt: String(Date.now()),
                        logicalPath,
                    },
                },
            });
            return res.status(201).json({
                ok: true,
                path: logicalPath,
                url: `/api/media/object?path=${encodeURIComponent(logicalPath)}`,
                contentType: file.mimetype,
                size: file.size,
            });
        }
        catch (error) {
            console.error('Unable to upload private media object', error);
            const message = String(error?.message || error || '');
            if (message === 'missing_token' || message === 'invalid_token') {
                return res.status(401).json({ error: 'authentication_required' });
            }
            if (message === 'invalid_identifier') {
                return res.status(400).json({ error: 'invalid_media_destination' });
            }
            return res.status(500).json({
                error: 'media_upload_failed',
                message: process.env.NODE_ENV === 'production' ? undefined : message,
            });
        }
    }
    async requireAdmin(req) {
        const header = String(req.headers.authorization || '');
        const match = /^Bearer\s+(.+)$/i.exec(header);
        if (!match)
            throw new Error('missing_token');
        let decoded;
        try {
            decoded = await this.store.auth.verifyIdToken(match[1]);
        }
        catch {
            throw new Error('invalid_token');
        }
        const snapshot = await this.store.db.ref(`/backendusers/${decoded.uid}`).once('value');
        const profile = snapshot.val() || {};
        const role = String(profile.role || decoded.role || '').toLowerCase();
        const roles = profile.roles || {};
        const allowed = role === 'admin'
            || role === 'owner'
            || roles.admin === true
            || roles.boatOwner === true
            || profile.isAdmin === true;
        return allowed ? { uid: decoded.uid } : null;
    }
    safeSegment(value) {
        const segment = String(value || '').trim().toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9_-]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 80);
        if (!segment || !/^[a-z0-9_-]+$/.test(segment))
            throw new Error('invalid_identifier');
        return segment;
    }
    safeFileBase(originalName) {
        const withoutExtension = originalName.replace(/\.[^.]+$/, '');
        return this.safeSegment(withoutExtension || 'photo').slice(0, 60);
    }
    extensionFor(contentType) {
        const extensions = {
            'image/jpeg': 'jpg',
            'image/png': 'png',
            'image/webp': 'webp',
            'image/gif': 'gif',
            'image/avif': 'avif',
        };
        return extensions[String(contentType || '').toLowerCase()] || null;
    }
    async createMediaUrls(req, res) {
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
            const entries = paths.map((objectPath) => [
                objectPath,
                `/api/media/object?path=${encodeURIComponent(objectPath)}`,
            ]);
            const urls = entries.reduce((result, entry) => {
                result[entry[0]] = entry[1];
                return result;
            }, {});
            res.setHeader('Cache-Control', 'private, max-age=300');
            return res.status(200).json({ expiresAt, urls });
        }
        catch (error) {
            console.error('Unable to create media URLs', error);
            return res.status(500).json({
                error: 'media_url_creation_failed',
                message: process.env.NODE_ENV === 'production' ? undefined : error?.message || String(error),
            });
        }
    }
    async streamObject(req, res) {
        const objectPath = String(req.query?.path || '').trim();
        if (!this.isAllowedPath(objectPath)) {
            res.status(400).json({ error: 'invalid_media_path' });
            return;
        }
        try {
            const file = this.storage
                .bucket(this.bucketName)
                .file(this.getPhysicalPath(objectPath));
            const [metadata] = await file.getMetadata();
            res.setHeader('Content-Type', metadata.contentType || 'application/octet-stream');
            if (metadata.size)
                res.setHeader('Content-Length', String(metadata.size));
            if (metadata.etag)
                res.setHeader('ETag', String(metadata.etag));
            res.setHeader('Cache-Control', 'private, max-age=3600');
            file.createReadStream()
                .on('error', (error) => {
                console.error('Unable to stream private media object', error);
                if (!res.headersSent)
                    res.status(error?.code === 404 ? 404 : 500).end();
                else
                    res.end();
            })
                .pipe(res);
        }
        catch (error) {
            console.error('Unable to read private media object', error);
            if (!res.headersSent) {
                res.status(error?.code === 404 ? 404 : 500).json({
                    error: error?.code === 404 ? 'media_not_found' : 'media_read_failed',
                });
            }
        }
    }
    getPhysicalPath(objectPath) {
        return `${this.tenantRoot}/${objectPath}`;
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
