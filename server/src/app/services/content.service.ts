import { Request, Response, Router } from 'express';
import { StoreDbService } from './firebase.service';

export class ContentService {
  private readonly root = 'cmsContent';
  constructor(private store: StoreDbService) {}

  setRoutes(router: Router): void {
    router.get('/api/admin/content', async (_req: Request, res: Response) => {
      try {
        const content = await this.store.getObject(this.root);
        res.status(200).json(content || {});
      } catch (error: any) {
        res.status(500).json({ error: 'content_read_failed', message: error?.message || String(error) });
      }
    });

    router.get('/api/admin/content/:section', async (req: Request, res: Response) => {
      try {
        const section = this.safeSection(req.params.section);
        const content = await this.store.getObject(`${this.root}/${section}`);
        res.status(200).json(content || {});
      } catch (error: any) {
        res.status(400).json({ error: 'content_read_failed', message: error?.message || String(error) });
      }
    });

    router.put('/api/admin/content/:section', async (req: Request, res: Response) => {
      try {
        const section = this.safeSection(req.params.section);
        if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
          return res.status(400).json({ error: 'invalid_content_payload' });
        }
        const value = { ...req.body, modifiedAt: Date.now(), modifiedBy: String(req.body.modifiedBy || 'admin') };
        await this.store.setObject(`${this.root}/${section}`, value);
        res.status(200).json({ ok: true, section, value });
      } catch (error: any) {
        res.status(400).json({ error: 'content_write_failed', message: error?.message || String(error) });
      }
    });

    router.patch('/api/admin/content/:section', async (req: Request, res: Response) => {
      try {
        const section = this.safeSection(req.params.section);
        const current = (await this.store.getObject(`${this.root}/${section}`)) || {};
        const value = { ...current, ...(req.body || {}), modifiedAt: Date.now(), modifiedBy: String(req.body?.modifiedBy || 'admin') };
        await this.store.setObject(`${this.root}/${section}`, value);
        res.status(200).json({ ok: true, section, value });
      } catch (error: any) {
        res.status(400).json({ error: 'content_write_failed', message: error?.message || String(error) });
      }
    });
  }

  private safeSection(value: string): string {
    const section = String(value || '').trim();
    if (!/^[a-z0-9-]{2,40}$/i.test(section)) throw new Error('invalid_section');
    return section;
  }
}
