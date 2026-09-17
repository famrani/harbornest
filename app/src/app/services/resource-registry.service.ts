import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ResourceRegistryItem {
  name: string;
  enabled?: boolean;
  description?: string;
  coverImage?: string;
  resourceType?: string;
  resourceId?: string;
}

export interface ResourceTypeSummary {
  type: string;
  label: string;
  count: number;
}

@Injectable({ providedIn: 'root' })
export class ResourceRegistryService {
  private readonly firebaseUrl = 'https://adn-dev-4d05d.firebaseio.com';
  private readonly supported = ['boat', 'place', 'car', 'pool'];
  private readonly labels: Record<string, string> = { boat: 'Boats', place: 'Places', car: 'Cars', pool: 'Pools' };

  constructor(private http: HttpClient) {}

  async listTypes(): Promise<ResourceTypeSummary[]> {
    const registry: any = await this.http.get(`${this.firebaseUrl}/resources.json`).toPromise().catch(() => ({}));
    return this.supported.map(type => {
      const entries = registry && registry[type] && typeof registry[type] === 'object' ? registry[type] : {};
      const count = Object.values(entries).filter((v: any) => v && v.enabled !== false).length;
      return { type, label: this.labels[type], count };
    });
  }

  async list(type: string): Promise<Array<ResourceRegistryItem & { resourceId: string; resourceType: string }>> {
    if (!this.supported.includes(type)) return [];
    const raw: any = await this.http.get(`${this.firebaseUrl}/resources/${encodeURIComponent(type)}.json`).toPromise().catch(() => ({}));
    if (!raw || typeof raw !== 'object') return [];
    return Object.keys(raw)
      .map(resourceId => ({ resourceId, resourceType: type, ...(raw[resourceId] || {}) }))
      .filter(item => item.enabled !== false);
  }

  mediaUrl(path?: string): string {
    if (!path) return '';
    if (/^https?:\/\//i.test(path) || path.startsWith('/api/')) return path;
    return `/api/media/object?path=${encodeURIComponent(path)}`;
  }
}
