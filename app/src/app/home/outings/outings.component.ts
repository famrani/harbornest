import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent, OutingItem } from '../site-content';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { DynamicOuting, OutingsDataService } from '../outings-data.service';
import { SiteContentService } from '../site-content-service/site-content.service';

@Component({
  selector: 'app-outings',
  templateUrl: './outings.component.html',
  styleUrls: ['./outings.component.scss'],
})
export class OutingsComponent implements OnInit, OnDestroy {
  content: SiteContent = SITE_CONTENT.fr;
  private allSiteContent = SITE_CONTENT;
  outings: OutingItem[] = SITE_CONTENT.fr.outings;
  loading = true;
  private currentLanguage: SiteLanguage = 'fr';
  private dynamicOutings: DynamicOuting[] = [];
  private languageSub?: Subscription;

  constructor(
    private languageService: LanguageService,
    private outingsData: OutingsDataService,
    private siteContentService: SiteContentService,
  ) {}

  ngOnInit(): void {
    this.loadSiteContent();
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = this.allSiteContent[language] || SITE_CONTENT[language];
      this.applyOutings();
    });
    this.loadDynamicOutings();
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  private async loadSiteContent(): Promise<void> {
    try {
      this.allSiteContent = await this.siteContentService.getContent();
      this.content = this.allSiteContent[this.currentLanguage] || SITE_CONTENT[this.currentLanguage];
      this.applyOutings();
    } catch {
      this.allSiteContent = SITE_CONTENT;
    }
  }

  private async loadDynamicOutings(): Promise<void> {
    this.loading = true;
    try {
      this.dynamicOutings = await this.outingsData.getOutings();
    } catch {
      this.dynamicOutings = [];
    }
    this.loading = false;
    this.applyOutings();
  }

  private applyOutings(): void {
    this.outings = this.outingsData.localizeOutings(
      this.dynamicOutings,
      this.currentLanguage,
      this.content.outings,
    );
  }
}
