
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../services/language.service';
import { SITE_CONTENT } from '../../site-content';
import { TourPage, getTourContent } from '../tour-content';

@Component({
  selector: 'app-lerins-escape',
  templateUrl: './lerins-escape.component.html',
  styleUrls: ['./lerins-escape.component.scss'],
})
export class LerinsEscapeComponent implements OnInit, OnDestroy {
  tour: TourPage = getTourContent('fr', 'escapade-lerins');
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.tour = getTourContent(language, 'escapade-lerins');
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
