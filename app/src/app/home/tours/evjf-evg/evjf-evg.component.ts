
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../services/language.service';
import { SITE_CONTENT } from '../../site-content';
import { TourPage, getTourContent } from '../tour-content';

@Component({
  selector: 'app-evjf-evg',
  templateUrl: './evjf-evg.component.html',
  styleUrls: ['./evjf-evg.component.scss'],
})
export class EvjfEvgComponent implements OnInit, OnDestroy {
  tour: TourPage = getTourContent('fr', 'anniversaire');
  content = SITE_CONTENT.fr;
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.tour = getTourContent(language, 'anniversaire');
      this.content = SITE_CONTENT[language];
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
