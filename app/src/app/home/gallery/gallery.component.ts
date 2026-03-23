import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { galleryImages, getContent } from '../site-content';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  images = galleryImages;

  constructor(public languageService: LanguageService) {}

  get t() {
    return getContent(this.languageService.currentLang);
  }
}
