"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
class ContentService {
    constructor(store) {
        this.store = store;
        this.root = 'cmsContent';
    }
    setRoutes(router) {
        router.get('/api/admin/content', async (_req, res) => {
            try {
                const content = await this.store.getObject(this.root);
                res.status(200).json(content || {});
            }
            catch (error) {
                res.status(500).json({ error: 'content_read_failed', message: error?.message || String(error) });
            }
        });
        router.get('/api/admin/content/:section', async (req, res) => {
            try {
                const section = this.safeSection(req.params.section);
                const content = await this.store.getObject(`${this.root}/${section}`);
                res.status(200).json(content || {});
            }
            catch (error) {
                res.status(400).json({ error: 'content_read_failed', message: error?.message || String(error) });
            }
        });
        router.put('/api/admin/content/:section', async (req, res) => {
            try {
                const section = this.safeSection(req.params.section);
                if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
                    return res.status(400).json({ error: 'invalid_content_payload' });
                }
                const value = { ...req.body, modifiedAt: Date.now(), modifiedBy: String(req.body.modifiedBy || 'admin') };
                await this.store.setObject(`${this.root}/${section}`, value);
                res.status(200).json({ ok: true, section, value });
            }
            catch (error) {
                res.status(400).json({ error: 'content_write_failed', message: error?.message || String(error) });
            }
        });
        router.patch('/api/admin/content/:section', async (req, res) => {
            try {
                const section = this.safeSection(req.params.section);
                const current = (await this.store.getObject(`${this.root}/${section}`)) || {};
                const value = { ...current, ...(req.body || {}), modifiedAt: Date.now(), modifiedBy: String(req.body?.modifiedBy || 'admin') };
                await this.store.setObject(`${this.root}/${section}`, value);
                res.status(200).json({ ok: true, section, value });
            }
            catch (error) {
                res.status(400).json({ error: 'content_write_failed', message: error?.message || String(error) });
            }
        });
    }
    safeSection(value) {
        const section = String(value || '').trim();
        if (!/^[a-z0-9-]{2,40}$/i.test(section))
            throw new Error('invalid_section');
        return section;
    }
}
exports.ContentService = ContentService;

//# sourceMappingURL=content.service.js.map
