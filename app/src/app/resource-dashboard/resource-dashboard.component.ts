import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceRegistryService, ResourceTypeSummary } from '../services/resource-registry.service';

@Component({ selector: 'app-resource-dashboard', templateUrl: './resource-dashboard.component.html', styleUrls: ['./resource-dashboard.component.scss'] })
export class ResourceDashboardComponent implements OnInit {
  types: ResourceTypeSummary[] = [];
  loading = true;
  constructor(private registry: ResourceRegistryService, private router: Router) {}
  async ngOnInit() { this.types = await this.registry.listTypes(); this.loading = false; }
  open(type: string) { this.router.navigate(['/', type]); }
}
