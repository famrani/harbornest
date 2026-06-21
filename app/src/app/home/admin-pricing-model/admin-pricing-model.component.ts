import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookingApiService, AlegriaPricingModel } from '../bookings/booking-api.service';
import { SITE_CONTENT } from '../site-content';
import { SiteContentService } from '../site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-pricing-model',
  templateUrl: './admin-pricing-model.component.html',
  styleUrls: ['./admin-pricing-model.component.scss'],
})
export class AdminPricingModelComponent implements OnInit, OnDestroy {
  model: AlegriaPricingModel = { day: 1200, halfDay: 800, sunset: 600, evening: 900, skipperPrice: 300, cleaningPrice: 150, nominalGuests: 8, extraGuestPrice: 60, minGuests: 1, maxGuests: 12, seasonalMultipliers: [], specialDates: [] };
  saving = false;
  message = '';
  error = '';
  currentLanguage: SiteLanguage = 'fr';
  pageText: any = (SITE_CONTENT as any).fr?.pricingModel || {};
  private languageSub?: Subscription;

  constructor(
    private bookingApi: BookingApiService,
    private siteContentService: SiteContentService,
    private languageService: LanguageService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadPageText(language);
    });

    await this.loadPageText(this.currentLanguage);

    try {
      this.model = await this.bookingApi.getPricingModel();
    } catch {
      this.model = this.bookingApi.getDefaultPricingModel();
    }
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  async loadPageText(language: SiteLanguage): Promise<void> {
    const fallback = (SITE_CONTENT as any)[language]?.pricingModel || (SITE_CONTENT as any).fr?.pricingModel || {};
    try {
      const content: any = await this.siteContentService.getContent();
      this.pageText = {
        ...fallback,
        ...(content?.[language]?.pricingModel || {}),
        ...(content?.pricingModel?.[language] || {}),
      };
    } catch {
      this.pageText = fallback;
    }
  }

  t(key: string): string {
    return this.pageText?.[key] || key;
  }

  addSeason(): void {
    this.model.seasonalMultipliers = this.model.seasonalMultipliers || [];
    this.model.seasonalMultipliers.push({ startDate: '', endDate: '', multiplier: 1, label: '' });
  }

  removeSeason(index: number): void {
    this.model.seasonalMultipliers = (this.model.seasonalMultipliers || []).filter((_item, i) => i !== index);
  }

  addSpecialDate(): void {
    this.model.specialDates = this.model.specialDates || [];
    this.model.specialDates.push({ date: '', price: undefined, multiplier: 1, label: '' });
  }

  removeSpecialDate(index: number): void {
    this.model.specialDates = (this.model.specialDates || []).filter((_item, i) => i !== index);
  }

  async save(): Promise<void> {
    this.saving = true;
    this.message = '';
    this.error = '';
    try {
      await this.bookingApi.savePricingModel({
        ...this.model,
        day: Number(this.model.day || 0),
        halfDay: Number(this.model.halfDay || 0),
        sunset: Number(this.model.sunset || 0),
        evening: Number(this.model.evening || 0),
        nominalGuests: Number(this.model.nominalGuests || 0),
        extraGuestPrice: Number(this.model.extraGuestPrice || 0),
        minGuests: Number(this.model.minGuests || 1),
        maxGuests: Number(this.model.maxGuests || 12),
        seasonalMultipliers: (this.model.seasonalMultipliers || []).map((item) => ({ ...item, multiplier: Number(item.multiplier || 1) })),
        specialDates: (this.model.specialDates || []).map((item) => ({ ...item, price: item.price === undefined || item.price === null ? undefined : Number(item.price || 0), multiplier: Number(item.multiplier || 1) })),
      });
      this.message = this.t('saved');
    } catch (e: any) {
      this.error = e?.message || this.t('saveError');
    } finally {
      this.saving = false;
    }
  }
}
