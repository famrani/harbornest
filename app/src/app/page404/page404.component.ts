import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { getContent } from '../home/site-content';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss'],
})
export class Page404Component {
  constructor(public languageService: LanguageService) {}

  get t() {
    return getContent(this.languageService.currentLang);
  }
}
