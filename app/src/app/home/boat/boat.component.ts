import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss'],
})
export class BoatComponent implements OnInit, OnDestroy {
  content: SiteContent = SITE_CONTENT.fr;
  images = SITE_CONTENT.fr.galleryImages.slice(0, 4);
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.content = SITE_CONTENT[language];
      this.images = this.content.galleryImages.slice(0, 4);
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
