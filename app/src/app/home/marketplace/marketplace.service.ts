import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlegriaBoatResource, AssetType, FleetService } from '../fleet.service';

export interface AssetSearchCriteria {
  assetType: AssetType | 'all';
  geography: string;
  subtype: string;
  capacity: number | null;
}

export interface MarketplaceAsset extends AlegriaBoatResource {
  assetId: string;
  assetType: AssetType;
}

@Injectable({ providedIn: 'root' })
export class MarketplaceService {
  private readonly firebaseUrl = 'https://adn-dev-4d05d.firebaseio.com';

  constructor(private fleet: FleetService, private http: HttpClient) {}

  async search(criteria: AssetSearchCriteria): Promise<MarketplaceAsset[]> {
    const fleetAssets = (await this.fleet.listBoats()).map((item) => this.normalise(item));
    const assets = await Promise.all(fleetAssets.map((asset) => this.withCmsHeroImage(asset)));
    return assets.filter((asset) => {
      if (asset.search?.searchable === false || asset.active === false) return false;
      if (criteria.assetType !== 'all' && asset.assetType !== criteria.assetType) return false;
      const place = [
        asset.search?.location?.city,
        asset.search?.location?.region,
        asset.search?.location?.country,
        asset.defaultDepartureMarina,
      ].filter(Boolean).join(' ').toLowerCase();
      if (criteria.geography && !place.includes(criteria.geography.toLowerCase())) return false;
      if (criteria.subtype && criteria.subtype !== 'all') {
        const subtype = String(asset.attributes?.['subtype'] || asset.boatType || '').toLowerCase();
        if (!subtype.includes(criteria.subtype.toLowerCase())) return false;
      }
      return criteria.capacity == null || Number(asset.maxGuests || 0) >= criteria.capacity;
    });
  }

  async find(assetId: string): Promise<MarketplaceAsset | null> {
    const assets = await this.fleet.listBoats();
    const found = assets.find((asset) => (asset.assetId || asset.boatId) === assetId);
    return found ? this.withCmsHeroImage(this.normalise(found)) : null;
  }

  /** Marketplace cards must follow the CMS primary image for EACH resource. */
  private async withCmsHeroImage(asset: MarketplaceAsset): Promise<MarketplaceAsset> {
    try {
      const content = await this.http.get<any>(
        `${this.firebaseUrl}/siteContent/${encodeURIComponent(asset.assetType)}/${encodeURIComponent(asset.assetId)}.json`,
      ).toPromise();

      // siteContent is language-scoped (fr/en/es/de/...). Prefer French, then English,
      // then the first language that actually defines boatHeroImage.
      const candidates = [content?.fr, content?.en, content?.es, content?.de, ...(content && typeof content === 'object' ? Object.values(content) : [])];
      const lang: any = candidates.find((entry: any) => entry && typeof entry === 'object' && String(entry.boatHeroImage || '').trim());
      const hero = String(lang?.boatHeroImage || '').trim();
      if (hero) return { ...asset, imageUrl: this.mediaObjectUrl(hero) };
    } catch {}
    return asset;
  }

  private mediaObjectUrl(path: string): string {
    const value = String(path || '').trim();
    if (!value) return '';
    if (/^(https?:|data:|blob:)/i.test(value) || value.startsWith('/api/media/object?')) return value;
    if (value.startsWith('assets/')) return value;
    return `/api/media/object?path=${encodeURIComponent(value.replace(/^\/+/, ''))}`;
  }

  private normalise(asset: AlegriaBoatResource): MarketplaceAsset {
    return {
      ...asset,
      assetId: asset.assetId || asset.boatId,
      assetType: asset.assetType || 'boat',
      search: {
        searchable: true,
        tags: [],
        ...(asset.search || {}),
      },
    };
  }
}
