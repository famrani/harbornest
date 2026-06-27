import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProposalApiService, AlegriaProposal } from '../bookings/proposal-api.service';
import { SITE_CONTENT } from '../site-content';
import { SiteContentService } from '../site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';

@Component({
  selector: 'app-admin-external-bookings',
  templateUrl: './admin-external-bookings.component.html',
  styleUrls: ['./admin-external-bookings.component.scss']
})
export class AdminExternalBookingsComponent implements OnInit, OnDestroy {
  saving = false;
  message = '';
  error = '';
  currentLanguage: SiteLanguage = 'fr';
  pageText: any = (SITE_CONTENT as any).fr?.externalBookings || {};
  private languageSub?: Subscription;

  form: Partial<AlegriaProposal> = {
    source: 'samboat',
    externalPlatformName: '',
    externalPlatformBookingRef: '',
    status: 'accepted',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    outingType: 'Journée en mer',
    outingDate: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
    departureTime: '10:00',
    arrivalTime: '18:00',
    totalAmount: 0,
    externalRemainingOnboardAmount: 0,
    externalExtraServicesOnboardAmount: 0,
    warrantyAmount: 500,
    proposalMessage: 'Please accept the T&C, pay the deposit for the amount due on board, and select your warranty mode.',
    warrantyPaymentChoice: 'stripe_card',
  };

  constructor(
    private proposalApi: ProposalApiService,
    private siteContentService: SiteContentService,
    private languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadPageText(language);
    });
    this.loadPageText(this.currentLanguage);
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  async loadPageText(language: SiteLanguage): Promise<void> {
    const fallback = (SITE_CONTENT as any)[language]?.externalBookings || (SITE_CONTENT as any).fr?.externalBookings || {};
    try {
      const content: any = await this.siteContentService.getContent();
      this.pageText = {
        ...fallback,
        ...(content?.[language]?.externalBookings || {}),
        ...(content?.externalBookings?.[language] || {}),
      };
    } catch {
      this.pageText = fallback;
    }
  }

  t(key: string): string {
    return this.pageText?.[key] || key;
  }

  async saveExternalBooking(): Promise<void> {
    this.saving = true;
    this.error = '';
    this.message = '';

    try {
      const remainingOnboardAmount = Number((this.form as any).externalRemainingOnboardAmount || 0);
      const extraServicesOnboardAmount = Number((this.form as any).externalExtraServicesOnboardAmount || 0);
      const onboardAmount = remainingOnboardAmount + extraServicesOnboardAmount;
      const warrantyAmount = Number(this.form.warrantyAmount || 0);
      const platformSource = String((this.form as any).source || '');
      const externalPlatformName = String((this.form as any).externalPlatformName || '').trim();
      const externalPlatformBookingRef = String((this.form as any).externalPlatformBookingRef || '').trim();

      if (platformSource === 'other' && !externalPlatformName) {
        throw new Error(this.t('missingOtherPlatformNameError'));
      }

      if (!externalPlatformBookingRef) {
        throw new Error(this.t('missingPlatformBookingRefError'));
      }

      if (remainingOnboardAmount < 0 || extraServicesOnboardAmount < 0) {
        throw new Error(this.t('negativeAmountsError'));
      }

      if (onboardAmount <= 0) {
        throw new Error(this.t('missingOnboardAmountError'));
      }

      if (warrantyAmount < 0) {
        throw new Error(this.t('negativeWarrantyError'));
      }

      const saved = await this.proposalApi.createExternalBooking({
        ...this.form,
        totalAmount: onboardAmount,
        externalPlatformName,
        externalPlatformBookingRef,
        platformBookingReference: externalPlatformBookingRef,
        platformReservationNumber: externalPlatformBookingRef,
        externalRemainingOnboardAmount: remainingOnboardAmount,
        externalExtraServicesOnboardAmount: extraServicesOnboardAmount,
        warrantyAmount,
      } as any);

      this.form = { ...saved };
      this.message = `${this.t('savedMessage')} ${window.location.origin}/proposal/${saved.proposalId}`;
    } catch (e: any) {
      this.error = e?.message || this.t('saveError');
    }

    this.saving = false;
  }

  get warrantyLink(): string {
    return this.form.proposalId ? `${window.location.origin}/proposal/${this.form.proposalId}` : '';
  }
}
