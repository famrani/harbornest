import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { SiteContentService } from '../site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit, OnDestroy {
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
