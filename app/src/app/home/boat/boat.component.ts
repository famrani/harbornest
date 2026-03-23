import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { galleryImages, getContent } from '../site-content';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss'],
})
export class BoatComponent {
  images = galleryImages.slice(0, 4);

  constructor(public languageService: LanguageService) {}

  get t() {
    return getContent(this.languageService.currentLang);
  }

  get highlights() {
    return this.t.boatHighlights;
  }
}
