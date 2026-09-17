import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceRegistryService, ResourceRegistryItem } from '../services/resource-registry.service';
import { validAssetType } from '../services/boat-routing';

@Component({ selector: 'app-resource-list', templateUrl: './resource-list.component.html', styleUrls: ['./resource-list.component.scss'] })
export class ResourceListComponent implements OnInit {
  type = ''; items: Array<ResourceRegistryItem & {resourceId:string;resourceType:string}> = []; loading = true;
  constructor(public registry: ResourceRegistryService, private route: ActivatedRoute, private router: Router) {}
  async ngOnInit() {
    this.type = (this.route.snapshot.paramMap.get('assetType') || '').toLowerCase();
    if (!validAssetType(this.type)) { this.router.navigate(['/']); return; }
    this.items = await this.registry.list(this.type); this.loading = false;
  }
  open(item: any) { this.router.navigate(['/', this.type, item.resourceId, 'home']); }
  back() { this.router.navigate(['/']); }
}
