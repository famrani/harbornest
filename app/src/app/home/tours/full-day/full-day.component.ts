
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../services/language.service';
import { SITE_CONTENT } from '../../site-content';
import { TourPage, getTourContent } from '../tour-content';

@Component({
  selector: 'app-full-day',
  templateUrl: './full-day.component.html',
  styleUrls: ['./full-day.component.scss'],
})
export class FullDayComponent implements OnInit, OnDestroy {
  tour: TourPage = getTourContent('fr', 'journee-en-mer');
  content = SITE_CONTENT.fr;
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.tour = getTourContent(language, 'journee-en-mer');
      this.content = SITE_CONTENT[language];
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
