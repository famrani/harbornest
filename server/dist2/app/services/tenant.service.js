"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantService = void 0;
class TenantService {
    constructor(storeDbSvc) {
        this.storeDbSvc = storeDbSvc;
    }
    setRoutes(router) {
        router.get('/api/tenants/:tenantSlug', async (req, res) => {
            try {
                const tenant = await this.getTenant(req.params.tenantSlug);
                if (!tenant) {
                    return res.status(404).json({ error: 'TENANT_NOT_FOUND' });
                }
                return res.json(tenant);
            }
            catch (error) {
                console.error('Tenant lookup failed', error);
                return res.status(500).json({ error: 'TENANT_LOOKUP_FAILED' });
            }
        });
        router.get('/api/tenants/:tenantSlug/content/:language', async (req, res) => {
            try {
                const language = req.params.language || 'fr';
                const content = await this.storeDbSvc.getObject(`harbornest/i18n/${language}`) || await this.storeDbSvc.getObject(`alegria_v2/i18n/${language}`) || {};
                return res.json(content);
            }
            catch (error) {
                console.error('Tenant content lookup failed', error);
                return res.status(500).json({ error: 'TENANT_CONTENT_LOOKUP_FAILED' });
            }
        });
    }
    async getTenant(slug) {
        const normalizedSlug = String(slug || 'alegria').toLowerCase();
        return await this.storeDbSvc.getObject(`harbornest/tenants/${normalizedSlug}`)
            || await this.storeDbSvc.getObject(`alegria_v2/tenants/${normalizedSlug}`)
            || null;
    }
    tenantScopedPath(tenantSlug, collection, id) {
        const safeTenant = String(tenantSlug || 'alegria').toLowerCase();
        const safeCollection = String(collection || '').replace(/^\/+|\/+$/g, '');
        return id ? `harbornest/tenants/${safeTenant}/${safeCollection}/${id}` : `harbornest/tenants/${safeTenant}/${safeCollection}`;
    }
}
exports.TenantService = TenantService;

//# sourceMappingURL=tenant.service.js.map
