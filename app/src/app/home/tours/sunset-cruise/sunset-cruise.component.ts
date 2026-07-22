import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../../services/language.service';
import { TourPage, getTourContent } from '../tour-content';
import { DynamicOuting, OutingsDataService } from '../../outings-data.service';

@Component({
  selector: 'app-sunset-cruise',
  templateUrl: './sunset-cruise.component.html',
  styleUrls: ['./sunset-cruise.component.scss'],
})
export class SunsetCruiseComponent implements OnInit, OnDestroy {
  tour: TourPage = getTourContent('fr', 'coucher-de-soleil' as any);
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
      this.dynamicOuting = await this.outingsData.getOutingBySlug('coucher-de-soleil');
    } catch {
      this.dynamicOuting = undefined;
    }
    this.applyTour();
  }

  private applyTour(): void {
    const fallback = getTourContent(this.currentLanguage, 'coucher-de-soleil' as any);
    this.tour = this.outingsData.toTourPage(this.dynamicOuting, this.currentLanguage, fallback);
  }
}
