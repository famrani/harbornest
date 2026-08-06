import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface MediaUrlsResponse {
  expiresAt: number;
  urls: Record<string, string>;
}

@Injectable({ providedIn: 'root' })
export class PrivateMediaService {
  private readonly http: HttpClient;
  private readonly cache = new Map<string, { url: string; expiresAt: number }>();
  private readonly imagePattern = /\.(avif|gif|jpe?g|png|svg|webp)(?:[?#].*)?$/i;

  constructor(handler: HttpBackend) {
    // A dedicated client bypasses the Firebase response interceptor and avoids
    // an interceptor loop when requesting signed URLs from our own backend.
    this.http = new HttpClient(handler);
  }

  async resolveFirebaseTree<T>(body: T): Promise<T> {
    const values = new Set<string>();
    this.collectImageValues(body, values);
    if (!values.size) return body;

    const valueToPath = new Map<string, string>();
    for (const value of values) {
      const objectPath = this.toObjectPath(value);
      if (objectPath) valueToPath.set(value, objectPath);
    }
    if (!valueToPath.size) return body;

    const urls = await this.resolvePaths([...new Set(valueToPath.values())]);
    return this.replaceImageValues(body, valueToPath, urls);
  }

  /**
   * Return a browser-safe URL for a private media value.
   *
   * Files under `assets/...` are public Angular assets and are returned
   * unchanged. Only private-storage values are routed through the backend.
   */
  objectUrl(value: string): string {
    const objectPath = this.toObjectPath(value);
    if (!objectPath) return value;

    // Keep an already-resolved backend URL intact.
    if (/\/api\/media\/object(?:\?|$)/i.test(value)) {
      return this.absoluteBackendUrl(value);
    }

    return `${this.backendOrigin}/api/media/object?path=${encodeURIComponent(objectPath)}`;
  }

  private async resolvePaths(paths: string[]): Promise<Record<string, string>> {
    const now = Date.now();
    const resolved: Record<string, string> = {};
    const missing: string[] = [];

    for (const objectPath of paths) {
      const cached = this.cache.get(objectPath);
      if (cached && cached.expiresAt > now + 5 * 60 * 1000) resolved[objectPath] = cached.url;
      else missing.push(objectPath);
    }

    if (missing.length) {
      try {
        const response = await firstValueFrom(this.http.post<MediaUrlsResponse>(
          `${this.backendOrigin}/api/media/urls`,
          { paths: missing },
        ));
        const signedUrls: Record<string, string> = response.urls || {};
        for (const objectPath of Object.keys(signedUrls)) {
          const url = this.absoluteBackendUrl(signedUrls[objectPath]);
          this.cache.set(objectPath, { url, expiresAt: Number(response.expiresAt || 0) });
          resolved[objectPath] = url;
        }
      } catch (error) {
        console.warn('Private media URL resolution failed', error);
      }
    }

    return resolved;
  }

  private collectImageValues(value: any, result: Set<string>): void {
    if (Array.isArray(value)) {
      value.forEach((item) => this.collectImageValues(item, result));
      return;
    }
    if (value && typeof value === 'object') {
      Object.values(value).forEach((item) => this.collectImageValues(item, result));
      return;
    }
    if (typeof value === 'string' && this.imagePattern.test(value)) result.add(value);
  }

  private replaceImageValues<T>(value: T, valueToPath: Map<string, string>, urls: Record<string, string>): T {
    if (Array.isArray(value)) {
      return value.map((item) => this.replaceImageValues(item, valueToPath, urls)) as any;
    }
    if (value && typeof value === 'object') {
      const output: any = {};
      for (const [key, child] of Object.entries(value as any)) {
        output[key] = this.replaceImageValues(child, valueToPath, urls);
      }
      return output;
    }
    if (typeof value === 'string') {
      const objectPath = valueToPath.get(value);
      return (objectPath && urls[objectPath] ? urls[objectPath] : value) as any;
    }
    return value;
  }

  private toObjectPath(value: string): string | null {
    const clean = String(value || '').trim().replace(/\\/g, '/').split(/[?#]/)[0];

    // Angular assets are public. This covers relative paths (`assets/...`),
    // root-relative paths (`/assets/...`) and absolute development/production
    // URLs such as `https://localhost:2000/assets/...`.
    const pathWithoutOrigin = clean.replace(/^https?:\/\/[^/]+/i, '');
    if (
      clean.startsWith('assets/') ||
      pathWithoutOrigin.startsWith('/assets/')
    ) {
      return null;
    }

    if (clean.startsWith('alegria/img/')) return clean;
    const tenantMarker = '/tenants/alegria_data/';
    const tenantIndex = clean.indexOf(tenantMarker);
    if (tenantIndex >= 0) {
      const logicalPath = clean.slice(tenantIndex + tenantMarker.length);
      if (logicalPath.startsWith('alegria/img/')) return logicalPath;
    }
    // Migration compatibility for former gs://alegria_pics/... and direct
    // storage.googleapis.com URLs. Only the logical Alegria path is retained.
    const logicalIndex = clean.indexOf('alegria/img/');
    if (logicalIndex >= 0) return clean.slice(logicalIndex);
    return null;
  }

  private absoluteBackendUrl(value: string): string {
    const url = String(value || '').trim();
    if (!url) return '';
    if (/^https?:\/\//i.test(url)) return url;
    return `${this.backendOrigin}${url.startsWith('/') ? '' : '/'}${url}`;
  }

  private get backendOrigin(): string {
    const hostname = window.location.hostname;
    return ['localhost', '127.0.0.1', '0.0.0.0'].includes(hostname)
      ? 'https://localhost:2000'
      : window.location.origin;
  }
}
