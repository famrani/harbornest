import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface SkipperResource {
  skipperId: string;
  ownerId: string;
  displayName: string;
  email?: string;
  phone?: string;
  licenseNumber?: string;
  dailyRate?: number;
  currency?: string;
  boatIds?: Record<string, boolean>;
  active?: boolean;
  createdTS?: number;
  modifiedTS?: number;
}

@Injectable({ providedIn: 'root' })
export class SkipperService {
  private readonly firebaseUrl = 'https://adn-dev-4d05d.firebaseio.com';
  constructor(private http: HttpClient) {}

  async listSkippers(boatId?: string): Promise<SkipperResource[]> {
    const raw = await this.http.get<any>(`${this.firebaseUrl}/bnSkippers.json`).toPromise().catch(() => ({}));
    return Object.keys(raw || {})
      .map(key => ({ skipperId: key, ...(raw[key] || {}) }))
      .filter(item => item.active !== false && (!boatId || item.boatIds?.[boatId] === true))
      .sort((a, b) => String(a.displayName || '').localeCompare(String(b.displayName || '')));
  }

  async saveSkipper(input: Partial<SkipperResource>): Promise<SkipperResource> {
    const now = Date.now();
    const skipperId = this.slug(input.skipperId || input.displayName || `skipper-${now}`);
    const payload: SkipperResource = {
      skipperId,
      ownerId: String(input.ownerId || ''),
      displayName: String(input.displayName || ''),
      email: input.email || '',
      phone: input.phone || '',
      licenseNumber: input.licenseNumber || '',
      dailyRate: Number(input.dailyRate || 0),
      currency: input.currency || 'EUR',
      boatIds: input.boatIds || {},
      active: input.active !== false,
      createdTS: input.createdTS || now,
      modifiedTS: now,
    };
    await this.http.put(`${this.firebaseUrl}/bnSkippers/${encodeURIComponent(skipperId)}.json`, payload).toPromise();
    return payload;
  }

  private slug(value: any): string {
    return String(value || '').trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '');
  }
}
