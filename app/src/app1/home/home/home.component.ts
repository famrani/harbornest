import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  content: SiteContent = SITE_CONTENT.fr;
  featuredOutings = SITE_CONTENT.fr.outings;
  highlights = SITE_CONTENT.fr.boatHighlights;
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.content = SITE_CONTENT[language];
      this.featuredOutings = this.content.outings;
      this.highlights = this.content.boatHighlights;
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
