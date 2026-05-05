import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../../../home/site-content';
import { LanguageService, SiteLanguage } from '../../../services/language.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss'],
})
export class HomeheaderComponent implements OnInit, OnDestroy {
  menuOpen = false;
  currentLanguage: SiteLanguage = 'fr';
  content: SiteContent = SITE_CONTENT.fr;
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = SITE_CONTENT[language];
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  changeLanguage(language: string): void {
    this.languageService.setLanguage(language as SiteLanguage);
  }
}
