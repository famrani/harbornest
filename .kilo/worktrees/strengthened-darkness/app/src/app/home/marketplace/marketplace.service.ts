import { Injectable } from '@angular/core';
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
  constructor(private fleet: FleetService) {}

  async search(criteria: AssetSearchCriteria): Promise<MarketplaceAsset[]> {
    const assets = (await this.fleet.listBoats()).map((item) => this.normalise(item));
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
    return found ? this.normalise(found) : null;
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
