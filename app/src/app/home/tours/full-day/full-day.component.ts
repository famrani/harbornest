import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../../services/language.service';
import { TourPage, getTourContent } from '../tour-content';
import { DynamicOuting, OutingsDataService } from '../../outings-data.service';

@Component({
  selector: 'app-full-day',
  templateUrl: './full-day.component.html',
  styleUrls: ['./full-day.component.scss'],
})
export class FullDayComponent implements OnInit, OnDestroy {
  tour: TourPage = getTourContent('fr', 'journee-en-mer' as any);
  private currentLanguage: SiteLanguage = 'fr';
  private dynamicOuting?: DynamicOuting;
  private languageSub?: Subscription;

  constructor(
    private languageService: LanguageService,
    private outingsData: OutingsDataService,
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.applyTour();
    });
    this.loadDynamicTour();
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  private async loadDynamicTour(): Promise<void> {
    try {
      this.dynamicOuting = await this.outingsData.getOutingBySlug('journee-en-mer');
    } catch {
      this.dynamicOuting = undefined;
    }
    this.applyTour();
  }

  private applyTour(): void {
    const fallback = getTourContent(this.currentLanguage, 'journee-en-mer' as any);
    this.tour = this.outingsData.toTourPage(this.dynamicOuting, this.currentLanguage, fallback);
  }
}
