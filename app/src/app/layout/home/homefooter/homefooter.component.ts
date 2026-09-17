import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicesService } from 'godigital-lib';

import { SITE_CONTENT, SiteContent } from '../../../home/site-content';
import { LanguageService, SiteLanguage } from '../../../services/language.service';
import { SiteContentService } from '../../../home/site-content-service/site-content.service';
import { ResourceContextService } from '../../../services/resource-context.service';
import { ResourceRegistryService } from '../../../services/resource-registry.service';

@Component({
  standalone: false,
  selector: 'app-homefooter',
  templateUrl: './homefooter.component.html',
  styleUrls: ['./homefooter.component.scss'],
})
export class HomefooterComponent implements OnInit, OnDestroy {
  year = new Date().getFullYear();

  content: SiteContent = SITE_CONTENT.fr;
  private allSiteContent: Record<string, SiteContent> = SITE_CONTENT as any;

  currentLanguage: SiteLanguage = 'fr';
  private languageSub?: Subscription;
  resourceName = 'HarborNest';

  constructor(
    private languageService: LanguageService,
    public mainSvc: ServicesService,
    private siteContentService: SiteContentService,
    private resourceContext: ResourceContextService,
    private resourceRegistry: ResourceRegistryService
  ) {}

  ngOnInit(): void {
    this.loadSiteContent();
    this.loadResourceName();

    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.applyLanguageContent(language);
    });
  }

  private async loadSiteContent(): Promise<void> {
    try {
      this.allSiteContent = await this.siteContentService.getContent();
    } catch {
      this.allSiteContent = SITE_CONTENT as any;
    }

    this.applyLanguageContent(this.currentLanguage);
  }

  private applyLanguageContent(language: SiteLanguage): void {
    this.content =
      this.allSiteContent?.[language] ||
      SITE_CONTENT?.[language] ||
      SITE_CONTENT.fr;
  }


  private async loadResourceName(): Promise<void> {
    const type = this.resourceContext.resourceType;
    const id = this.resourceContext.resourceId;
    try {
      const items = await this.resourceRegistry.list(type);
      const current = items.find(item => item.resourceId === id);
      this.resourceName = current?.name || this.safeBrandName() || id || 'HarborNest';
    } catch {
      this.resourceName = this.safeBrandName() || id || 'HarborNest';
    }
  }

  private safeBrandName(): string {
    const brand: any = (this.content as any)?.brand;
    if (typeof brand === 'string') return brand;
    if (brand && typeof brand === 'object') {
      return brand.name || brand.label || brand.title || '';
    }
    return '';
  }

  private get footerContent(): any {
  return this.content?.footer || {};
}

get releaseLabel(): string {
  return this.footerContent.release || '';
}

get bookingProcessLabel(): string {
  return this.footerContent.bookingProcess || this.footerContent.howToBook || '';
}

get seaToysLabel(): string {
  return this.footerContent.seaToys || (this.content as any)?.nav?.seaToys || '';
}

get termsLabel(): string {
  return this.footerContent.terms || '';
}

get safetyLabel(): string {
  return this.footerContent.safety || '';
}

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}