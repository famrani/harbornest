import { Injectable } from '@angular/core';

/**
 * Resolves the boat/site being displayed.  A cloned deployment can set
 * `window.__BOAT_ID__`, use `?boat=<id>`, or persist a choice in localStorage.
 * Alegria remains the backwards-compatible default.
 */
@Injectable({ providedIn: 'root' })
export class BoatContextService {
  private readonly storageKey = 'boat_site_id';
  private currentBoatId = this.resolveInitialBoatId();

  get boatId(): string {
    return this.currentBoatId;
  }

  setBoatId(value: string): string {
    this.currentBoatId = this.normalize(value);
    try { localStorage.setItem(this.storageKey, this.currentBoatId); } catch {}
    return this.currentBoatId;
  }

  scopedPath(root: string, suffix = ''): string {
    const cleanRoot = String(root || '').replace(/^\/+|\/+$/g, '');
    const cleanSuffix = String(suffix || '').replace(/^\/+|\/+$/g, '');
    return [cleanRoot, this.boatId, cleanSuffix].filter(Boolean).join('/');
  }

  private resolveInitialBoatId(): string {
    const globalBoatId = (window as any).__BOAT_ID__;
    const queryBoatId = new URLSearchParams(window.location.search).get('boat');
    let storedBoatId = '';
    try { storedBoatId = localStorage.getItem(this.storageKey) || ''; } catch {}
    return this.normalize(globalBoatId || queryBoatId || storedBoatId || 'alegria');
  }

  private normalize(value: any): string {
    return String(value || 'alegria')
      .trim().toLowerCase()
      .replace(/[^a-z0-9_-]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'alegria';
  }
}
