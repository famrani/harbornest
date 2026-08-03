import { Request, Response, Router } from 'express';
import rateLimit from 'express-rate-limit';
import { Storage } from '@google-cloud/storage';

/**
 * Proxies public website media from a private tenant folder. The browser only
 * knows logical paths such as `alegria/img/...`; bucket and tenant paths remain
 * trusted backend configuration. Credentials are resolved through Google ADC.
 */
export class MediaService {
  private readonly bucketName = process.env.GCS_MEDIA_BUCKET || 'adn_root';
  private readonly tenantRoot = String(
    process.env.GCS_MEDIA_TENANT_ROOT || 'tenants/alegria_data',
  ).replace(/^\/+|\/+$/g, '');
  private readonly allowedPrefix = process.env.GCS_MEDIA_PREFIX || 'alegria/img/';
  private readonly lifetimeMs = Math.max(
    15 * 60 * 1000,
    Number(process.env.GCS_SIGNED_URL_LIFETIME_MS || 6 * 60 * 60 * 1000),
  );
  private readonly storage = new Storage();

  setRoutes(router: Router): void {
    const limiter = rateLimit({
      windowMs: 60 * 1000,
      max: 60,
      standardHeaders: true,
      legacyHeaders: false,
    });

    router.post('/api/media/urls', limiter, (req: Request, res: Response) =>
      this.createMediaUrls(req, res),
    );

    // Backward-compatible route for already deployed frontends. The returned
    // URLs now point to the authenticated backend proxy, not directly to GCS.
    router.post('/api/media/signed-urls', limiter, (req: Request, res: Response) =>
      this.createMediaUrls(req, res),
    );

    router.get('/api/media/object', limiter, (req: Request, res: Response) =>
      this.streamObject(req, res),
    );
  }

  private async createMediaUrls(req: Request, res: Response): Promise<Response> {
    try {
      const requested: unknown[] = Array.isArray(req.body?.paths) ? req.body.paths : [];
      const paths: string[] = Array.from(new Set<string>(
        requested.map((value: unknown) => String(value || '').trim()),
      ));

      if (!paths.length || paths.length > 200) {
        return res.status(400).json({ error: 'invalid_media_paths' });
      }

      for (const objectPath of paths) {
        if (!this.isAllowedPath(objectPath)) {
          return res.status(400).json({ error: 'invalid_media_path', path: objectPath });
        }
      }

      const expiresAt = Date.now() + this.lifetimeMs;
      const entries: Array<readonly [string, string]> = paths.map((objectPath) => [
        objectPath,
        `/api/media/object?path=${encodeURIComponent(objectPath)}`,
      ] as const);

      const urls = entries.reduce((result, entry) => {
        result[entry[0]] = entry[1];
        return result;
      }, {} as Record<string, string>);

      res.setHeader('Cache-Control', 'private, max-age=300');
      return res.status(200).json({ expiresAt, urls });
    } catch (error: any) {
      console.error('Unable to create media URLs', error);
      return res.status(500).json({
        error: 'media_url_creation_failed',
        message: process.env.NODE_ENV === 'production' ? undefined : error?.message || String(error),
      });
    }
  }

  private async streamObject(req: Request, res: Response): Promise<void> {
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
      if (metadata.size) res.setHeader('Content-Length', String(metadata.size));
      if (metadata.etag) res.setHeader('ETag', String(metadata.etag));
      res.setHeader('Cache-Control', 'private, max-age=3600');

      file.createReadStream()
        .on('error', (error: any) => {
          console.error('Unable to stream private media object', error);
          if (!res.headersSent) res.status(error?.code === 404 ? 404 : 500).end();
          else res.end();
        })
        .pipe(res);
    } catch (error: any) {
      console.error('Unable to read private media object', error);
      if (!res.headersSent) {
        res.status(error?.code === 404 ? 404 : 500).json({
          error: error?.code === 404 ? 'media_not_found' : 'media_read_failed',
        });
      }
    }
  }

  private getPhysicalPath(objectPath: string): string {
    return `${this.tenantRoot}/${objectPath}`;
  }

  private isAllowedPath(objectPath: string): boolean {
    return objectPath.startsWith(this.allowedPrefix)
      && objectPath.length <= 512
      && !objectPath.includes('..')
      && !objectPath.includes('\\')
      && /^[a-zA-Z0-9._/\-]+$/.test(objectPath);
  }
}
