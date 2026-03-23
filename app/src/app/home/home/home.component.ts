import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { getContent, siteConfig } from '../site-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  config = siteConfig;

  constructor(public languageService: LanguageService) {}

  get t() {
    return getContent(this.languageService.currentLang);
  }

  get featuredOutings() {
    return this.t.outingsList.slice(0, 4);
  }

  get highlights() {
    return this.t.boatHighlights;
  }
}
