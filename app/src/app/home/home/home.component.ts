import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { DynamicOuting, OutingsDataService } from '../outings-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  content: SiteContent = SITE_CONTENT.fr;
  featuredOutings = SITE_CONTENT.fr.outings;
  highlights = SITE_CONTENT.fr.boatHighlights;
  publicPriceFrom = SITE_CONTENT.fr.priceFrom;
  private currentLanguage: SiteLanguage = 'fr';
  private dynamicOutings: DynamicOuting[] = [];
  private languageSub?: Subscription;

  constructor(
    private languageService: LanguageService,
    private outingsData: OutingsDataService,
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = SITE_CONTENT[language];
      this.highlights = this.content.boatHighlights;
      this.applyOutings();
    });

    this.loadDynamicOutings();
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  private async loadDynamicOutings(): Promise<void> {
    try {
      this.dynamicOutings = await this.outingsData.getOutings();
    } catch {
      this.dynamicOutings = [];
    }
    this.applyOutings();
  }

  private applyOutings(): void {
    this.featuredOutings = this.outingsData.localizeOutings(
      this.dynamicOutings,
      this.currentLanguage,
      this.content.outings,
    );

    const visiblePrices = (this.dynamicOutings || [])
      .filter((outing) => outing && outing.active !== false && Number(outing.priceFrom) > 0)
      .map((outing) => Number(outing.priceFrom));

    if (visiblePrices.length) {
      this.publicPriceFrom = this.outingsData.priceLabel(this.currentLanguage, Math.min(...visiblePrices));
    } else {
      this.publicPriceFrom = this.content.priceFrom;
    }
  }
}
