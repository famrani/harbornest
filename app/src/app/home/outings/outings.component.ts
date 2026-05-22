import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent, OutingItem } from '../site-content';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { DynamicOuting, OutingsDataService } from '../outings-data.service';

@Component({
  selector: 'app-outings',
  templateUrl: './outings.component.html',
  styleUrls: ['./outings.component.scss'],
})
export class OutingsComponent implements OnInit, OnDestroy {
  content: SiteContent = SITE_CONTENT.fr;
  outings: OutingItem[] = SITE_CONTENT.fr.outings;
  loading = true;
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
      this.applyOutings();
    });
    this.loadDynamicOutings();
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  private async loadDynamicOutings(): Promise<void> {
    this.loading = true;
    try {
      this.dynamicOutings = await this.outingsData.getOutings();
    } catch {
      this.dynamicOutings = [];
    }
    this.loading = false;
    this.applyOutings();
  }

  private applyOutings(): void {
    this.outings = this.outingsData.localizeOutings(
      this.dynamicOutings,
      this.currentLanguage,
      this.content.outings,
    );
  }
}
