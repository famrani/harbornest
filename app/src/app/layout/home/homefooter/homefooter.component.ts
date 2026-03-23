import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { getContent, siteConfig } from '../../../home/site-content';

@Component({
  selector: 'app-homefooter',
  templateUrl: './homefooter.component.html',
  styleUrls: ['./homefooter.component.scss'],
})
export class HomefooterComponent {
  year = new Date().getFullYear();
  config = siteConfig;

  constructor(public languageService: LanguageService) {}

  get t() {
    return getContent(this.languageService.currentLang);
  }
}
