import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../../../home/site-content';
import { LanguageService, SiteLanguage } from '../../../services/language.service';
import { ServicesService } from 'godigital-lib';
import { SiteContentService } from '../../../home/site-content-service/site-content.service';

@Component({
  selector: 'app-homefooter',
  templateUrl: './homefooter.component.html',
  styleUrls: ['./homefooter.component.scss'],
})
export class HomefooterComponent implements OnInit, OnDestroy {
  year = new Date().getFullYear();
  content: SiteContent = SITE_CONTENT.fr;
  private allSiteContent = SITE_CONTENT;
  currentLanguage: SiteLanguage = 'fr';
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService, public mainSvc: ServicesService, private siteContentService: SiteContentService) {}

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
      this.content = this.allSiteContent[this.currentLanguage] || SITE_CONTENT[this.currentLanguage];
    } catch {
      this.allSiteContent = SITE_CONTENT;
      this.content = SITE_CONTENT[this.currentLanguage] || SITE_CONTENT.fr;
    }
  }

  get termsLabel(): string {
    if (this.currentLanguage === 'en') {
      return 'Terms & Conditions';
    }
    if (this.currentLanguage === 'es') {
      return 'Términos y condiciones';
    }
    return 'Conditions générales';
  }


  get safetyLabel(): string {
    if (this.currentLanguage === 'en') {
      return 'Safety instructions';
    }
    if (this.currentLanguage === 'es') {
      return 'Instrucciones de seguridad';
    }
    return 'Consignes de sécurité';
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
