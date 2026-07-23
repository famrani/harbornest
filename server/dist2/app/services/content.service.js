"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
/** Admin API for the canonical multi-boat site content tree. */
class ContentService {
    constructor(store) {
        this.store = store;
        this.root = 'siteContent';
    }
    setRoutes(router) {
        router.get('/api/admin/content/:boatId', async (req, res) => {
            try {
                const boatId = this.safeId(req.params.boatId);
                res.status(200).json((await this.store.getObject(`${this.root}/${boatId}`)) || {});
            }
            catch (error) {
                res.status(400).json({ error: 'content_read_failed', message: error?.message || String(error) });
            }
        });
        router.get('/api/admin/content/:boatId/:language/:section', async (req, res) => {
            try {
                const path = this.contentPath(req.params.boatId, req.params.language, req.params.section);
                res.status(200).json((await this.store.getObject(path)) || {});
            }
            catch (error) {
                res.status(400).json({ error: 'content_read_failed', message: error?.message || String(error) });
            }
        });
        router.put('/api/admin/content/:boatId/:language/:section', async (req, res) => {
            try {
                if (req.body === undefined)
                    return res.status(400).json({ error: 'invalid_content_payload' });
                const path = this.contentPath(req.params.boatId, req.params.language, req.params.section);
                await this.store.setObject(path, req.body);
                res.status(200).json({ ok: true, path });
            }
            catch (error) {
                res.status(400).json({ error: 'content_write_failed', message: error?.message || String(error) });
            }
        });
    }
    contentPath(boatId, language, section) {
        const lang = String(language || '').toLowerCase();
        if (!['fr', 'en', 'es', 'it', 'de', 'nl', 'ru'].includes(lang))
            throw new Error('invalid_language');
        return `${this.root}/${this.safeId(boatId)}/${lang}/${this.safeId(section)}`;
    }
    safeId(value) {
        const id = String(value || '').trim().toLowerCase();
        if (!/^[a-z0-9_-]{2,80}$/.test(id))
            throw new Error('invalid_identifier');
        return id;
    }
}
exports.ContentService = ContentService;

//# sourceMappingURL=content.service.js.map
