import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../home/site-content';
import { SiteContentService } from '../home/site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../services/language.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss'],
})
export class Page404Component implements OnInit, OnDestroy {
  content: SiteContent = SITE_CONTENT.fr;
  currentLanguage: SiteLanguage = 'fr';
  private allSiteContent = SITE_CONTENT;
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService, private siteContentService: SiteContentService) {}

  ngOnInit(): void {
    this.loadSiteContent();
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = this.allSiteContent[language] || SITE_CONTENT[language];
    });
  }

  private async loadSiteContent(): Promise<void> {
    try {
      this.allSiteContent = await this.siteContentService.getContent();
      this.content = this.allSiteContent[this.currentLanguage] || SITE_CONTENT[this.currentLanguage] || SITE_CONTENT.fr;
    } catch {
      this.allSiteContent = SITE_CONTENT;
    }
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
