import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../../../home/site-content';
import { LanguageService, SiteLanguage } from '../../../services/language.service';
import { ServicesService } from 'godigital-lib';

@Component({
  selector: 'app-homefooter',
  templateUrl: './homefooter.component.html',
  styleUrls: ['./homefooter.component.scss'],
})
export class HomefooterComponent implements OnInit, OnDestroy {
  year = new Date().getFullYear();
  content: SiteContent = SITE_CONTENT.fr;
  currentLanguage: SiteLanguage = 'fr';
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService, public mainSvc: ServicesService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = SITE_CONTENT[language];
    });
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
