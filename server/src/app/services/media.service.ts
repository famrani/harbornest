import { Request, Response, Router } from 'express';
import rateLimit from 'express-rate-limit';
import { Storage } from '@google-cloud/storage';

/**
 * Generates short-lived read URLs for public website media while the bucket
 * itself remains private. Credentials are resolved through Google ADC.
 */
export class MediaService {
  private readonly bucketName = process.env.GCS_MEDIA_BUCKET || 'alegria_pics';
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

    router.post('/api/media/signed-urls', limiter, (req: Request, res: Response) =>
      this.createSignedUrls(req, res),
    );
  }

  private async createSignedUrls(req: Request, res: Response): Promise<Response> {
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
      const entries: Array<readonly [string, string]> = await Promise.all(paths.map(async (objectPath) => {
        const [url] = await this.storage
          .bucket(this.bucketName)
          .file(objectPath)
          .getSignedUrl({ version: 'v4', action: 'read', expires: expiresAt });
        return [objectPath, url] as const;
      }));

      const urls = entries.reduce((result, entry) => {
        result[entry[0]] = entry[1];
        return result;
      }, {} as Record<string, string>);

      res.setHeader('Cache-Control', 'private, max-age=300');
      return res.status(200).json({ expiresAt, urls });
    } catch (error: any) {
      console.error('Unable to sign media URLs', error);
      return res.status(500).json({
        error: 'media_signing_failed',
        message: process.env.NODE_ENV === 'production' ? undefined : error?.message || String(error),
      });
    }
  }

  private isAllowedPath(objectPath: string): boolean {
    return objectPath.startsWith(this.allowedPrefix)
      && objectPath.length <= 512
      && !objectPath.includes('..')
      && !objectPath.includes('\\')
      && /^[a-zA-Z0-9._/\-]+$/.test(objectPath);
  }
}
