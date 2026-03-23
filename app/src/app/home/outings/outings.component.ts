import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { getContent } from '../site-content';

@Component({
  selector: 'app-outings',
  templateUrl: './outings.component.html',
  styleUrls: ['./outings.component.scss'],
})
export class OutingsComponent {
  constructor(public languageService: LanguageService) {}

  get t() {
    return getContent(this.languageService.currentLang);
  }

  get outings() {
    return this.t.outingsList;
  }
}
