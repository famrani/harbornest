import { Component } from '@angular/core';
import { LanguageCode, LanguageService } from '../../../services/language.service';
import { getContent, siteConfig } from '../../../home/site-content';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss'],
})
export class HomeheaderComponent {
  menuOpen = false;
  config = siteConfig;

  constructor(public languageService: LanguageService) {}

  get t() {
    return getContent(this.languageService.currentLang);
  }

  get currentLang(): LanguageCode {
    return this.languageService.currentLang;
  }

  setLanguage(lang: LanguageCode): void {
    this.languageService.setLanguage(lang);
    this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
