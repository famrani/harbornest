import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../../services/language.service';
import { TourPage, getTourContent } from '../tour-content';
import { DynamicOuting, OutingsDataService } from '../../outings-data.service';

@Component({
  selector: 'app-business-outing',
  templateUrl: './business-outing.component.html',
  styleUrls: ['./business-outing.component.scss'],
})
export class BusinessOutingComponent implements OnInit, OnDestroy {
  tour: TourPage = getTourContent('fr', 'sortie-entreprise' as any);
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
      this.dynamicOuting = await this.outingsData.getOutingBySlug('sortie-entreprise');
    } catch {
      this.dynamicOuting = undefined;
    }
    this.applyTour();
  }

  private applyTour(): void {
    const fallback = getTourContent(this.currentLanguage, 'sortie-entreprise' as any);
    this.tour = this.outingsData.toTourPage(this.dynamicOuting, this.currentLanguage, fallback);
  }
}
