import { boatPath } from '../../services/boat-routing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketplaceAsset, MarketplaceService } from '../marketplace/marketplace.service';

@Component({
  standalone: false,selector:'app-asset-entry',templateUrl:'./asset-entry.component.html',styleUrls:['./asset-entry.component.scss']})
export class AssetEntryComponent implements OnInit {
  asset: MarketplaceAsset | null = null;
  loading = true;
  constructor(private route:ActivatedRoute,private router:Router,private marketplace:MarketplaceService){}
  async ngOnInit():Promise<void>{
    const assetId=this.route.snapshot.paramMap.get('assetId') || 'alegria';
    this.asset=await this.marketplace.find(assetId);
    this.loading=false;
  }
  enter():void{
    if(this.asset?.assetType==='boat') window.location.assign(boatPath('/bateau', this.asset.assetId));
  }
}
