import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetSearchCriteria, MarketplaceAsset, MarketplaceService } from './marketplace.service';
import { AssetType } from '../fleet.service';

@Component({
  standalone: false,
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent implements OnInit {
  criteria: AssetSearchCriteria = { assetType: 'boat', geography: '', subtype: 'all', capacity: null };
  assets: MarketplaceAsset[] = [];
  loading = true;
  searched = false;

  readonly categories: { value: AssetType; label: string; icon: string }[] = [
    { value: 'boat', label: 'Boats', icon: 'boat-outline' },
    { value: 'car', label: 'Cars', icon: 'car-sport-outline' },
    { value: 'property', label: 'Stays', icon: 'home-outline' },
  ];

  readonly subtypeOptions: Record<AssetType, string[]> = {
    boat: ['all', 'Catamaran', 'Motor yacht', 'Sailboat'],
    car: ['all', 'Convertible', 'Electric', 'SUV'],
    property: ['all', 'Villa', 'Apartment', 'House'],
    other: ['all'],
  };

  constructor(private marketplace: MarketplaceService, private router: Router) {}

  async ngOnInit(): Promise<void> { await this.runSearch(false); }

  async selectCategory(assetType: AssetType): Promise<void> {
    this.criteria.assetType = assetType;
    this.criteria.subtype = 'all';
    await this.runSearch(false);
  }

  async runSearch(markSearched = true): Promise<void> {
    this.loading = true;
    this.searched = markSearched;
    try { this.assets = await this.marketplace.search(this.criteria); }
    finally { this.loading = false; }
  }

  open(asset: MarketplaceAsset): void {
    if (asset.assetType === 'boat' && asset.assetId === 'alegria') {
      this.router.navigate(['/asset', asset.assetId]);
      return;
    }
    this.router.navigate(['/asset', asset.assetId]);
  }

  trackByAssetId(_: number, asset: MarketplaceAsset): string { return asset.assetId; }
}
