import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicesService } from 'godigital-lib';

import { SITE_CONTENT, SiteContent } from '../../../home/site-content';
import { LanguageService, SiteLanguage } from '../../../services/language.service';
import { SiteContentService } from '../../../home/site-content-service/site-content.service';

@Component({
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

  constructor(
    private languageService: LanguageService,
    public mainSvc: ServicesService,
    private siteContentService: SiteContentService
  ) {}

  ngOnInit(): void {
    this.loadSiteContent();

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