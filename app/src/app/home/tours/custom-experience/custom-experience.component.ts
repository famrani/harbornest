
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../services/language.service';
import { SITE_CONTENT } from '../../site-content';
import { TourPage, getTourContent } from '../tour-content';

@Component({
  selector: 'app-custom-experience',
  templateUrl: './custom-experience.component.html',
  styleUrls: ['./custom-experience.component.scss'],
})
export class CustomExperienceComponent implements OnInit, OnDestroy {
  tour: TourPage = getTourContent('fr', 'experience-sur-mesure');
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.tour = getTourContent(language, 'experience-sur-mesure');
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
