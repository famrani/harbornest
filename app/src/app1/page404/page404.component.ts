import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../home/site-content';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss'],
})
export class Page404Component implements OnInit, OnDestroy {
  content: SiteContent = SITE_CONTENT.fr;
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.content = SITE_CONTENT[language];
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
