import { Injectable } from '@angular/core';
import { activeAssetContext, assetBasePath, boatPath, validAssetType, validBoatId } from './boat-routing';

/** Generic runtime scope for any rentable resource: boat, place, car, pool, ... */
@Injectable({ providedIn: 'root' })
export class ResourceContextService {
  get resourceType(): string { return activeAssetContext().assetType; }
  get resourceId(): string { return activeAssetContext().assetId; }
  // Compatibility aliases while boat-specific domain models are progressively generalized.
  get assetType(): string { return this.resourceType; }
  get assetId(): string { return this.resourceId; }
  get boatId(): string { return this.resourceId; }
  get basePath(): string { return assetBasePath(this.resourceType, this.resourceId); }

  setResource(resourceType: string, resourceId: string): void {
    if (!validAssetType(resourceType) || !validBoatId(resourceId)) throw new Error('Invalid resource scope');
    if (typeof window !== 'undefined') window.location.assign(boatPath('/home', resourceId, resourceType));
  }

  setResourceId(resourceId: string): string {
    if (!validBoatId(resourceId)) throw new Error('Invalid resource ID');
    if (resourceId !== this.resourceId && typeof window !== 'undefined') {
      const prefix = this.basePath;
      const rest = window.location.pathname.startsWith(prefix) ? window.location.pathname.slice(prefix.length) || '/home' : '/home';
      window.location.assign(boatPath(rest, resourceId, this.resourceType) + window.location.search + window.location.hash);
    }
    return resourceId;
  }

  /**
   * Firebase path policy for the real production database.
   *
   * Resource configuration/content is namespaced as:
   *   /{collection}/{resourceType}/{resourceId}/...
   *
   * Operational/index collections remain flat for backend compatibility and
   * are filtered by resourceId/boatId/ownerId in the consuming services:
   *   /bnBookings/{bookingId}
   *   /bnProposals/{proposalId}
   *   /backendpayments/{paymentId}
   *   /backendcalendar/{date}/{entryId}
   */
  scopedPath(root: string, suffix = ''): string {
    const r = String(root || '').replace(/^\/+|\/+$/g, '');
    const s = String(suffix || '').replace(/^\/+|\/+$/g, '');
    const flatOperational = new Set([
      'backendcalendar', 'backendfeedbacks', 'backendpayments', 'backendusers',
      'bnBookings', 'bnProposals', 'bnSkippers'
    ]);
    if (flatOperational.has(r)) return [r, s].filter(Boolean).join('/');
    return [r, this.resourceType, this.resourceId, s].filter(Boolean).join('/');
  }

  route(path = '/'): string { return boatPath(path, this.resourceId, this.resourceType); }
}
