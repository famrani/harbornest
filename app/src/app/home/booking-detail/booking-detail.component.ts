import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { SITE_CONTENT } from '../site-content';
import { SiteContentService } from '../site-content-service/site-content.service';
import { BookingApiService } from '../bookings/booking-api.service';
import { BookingFinancialService } from '../bookings/booking-financial.service';
import { BookingStateService } from '../bookings/booking-state.service';

type MoneyRow = {
  label: string;
  amount: number;
  method: string;
  status: string;
  date?: string;
};

type BookingVm = {
  bookingId: string;
  isAdmin: boolean;
  isExternalBooking: boolean;
  isHistoricalBooking: boolean;
  bookingStatusBadge: string;
  paymentStatusBadge: string;
  warrantyStatusBadge: string;
  platformLabel: string;
  boatListingUrl: string;
  platformBookingUrl: string;
  totalClientCost: number;
  collectedViaPlatform: number;
  collectedDirectTotal: number;
  totalCollected: number;
  totalRemaining: number;
  paymentDifference: number;
  paymentBreakdownRows: MoneyRow[];
  totalDirectSkipper: number;
  totalDirectCatering: number;
  totalDirectTips: number;
  totalDirectCleaningFuel: number;
  totalDirectDrinks: number;
  totalDirectWaterToys: number;
  totalDirectOther: number;
  boatOutingCost: number;
  platformCost: number;
  platformFees: number;
  skipperCost: number;
  extraServicesCost: number;
  fuelCost: number;
  remainingFuelCost: number;
  outstandingFuelCost: number;
  totalCustomerCost: number;
  depositAmount: number;
  depositPaidAmount: number;
  remainingBoatBalance: number;
  remainingSkipperFee: number;
  remainingExtraServices: number;
  alegriaPaidAmount: number;
  remainingAlegriaRevenue: number;
  skipperPaidAmount: number;
  totalRemainingCustomer: number;
  stripeDepositCollected: number;
  totalStripeCollections: number;
  onboardBoatBalanceCollected: number;
  onboardSkipperCollected: number;
  outstandingBoatBalance: number;
  outstandingSkipperFee: number;
  outstandingExtraServices: number;
  outstandingTotal: number;
  paymentHistoryRows: MoneyRow[];
  stripePaymentRecords: any[];
  totalOnboardCollections: number;
  alegriaRevenueTotal: number;
  boatRentalAmount: number;
  portFeesAmount: number;
  cateringAmount: number;
  drinksAmount: number;
  waterToysAmount: number;
  tipsAmount: number;
  otherAmount: number;
  rentalCommissionAmount: number;
  serviceFeesAmount: number;
  totalCommission: number;
  totalOutingPrice: number;
  skipperRevenueTotal: number;
  customerPaidThroughPlatform: number;
  customerPaidDirectly: number;
  display: any;
  termsAccepted: boolean;
  alegriaPaymentComplete: boolean;
  skipperPaymentComplete: boolean;
  warrantyComplete: boolean;
  bookingCompletionPercent: number;
  customerJourneyComplete: boolean;
  customerJourneyStatus: string;
};

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss'],
})
export class BookingDetailComponent implements OnInit {
  bookingId = '';
  loading = false;
  notFound = false;
  error = '';
  vm: BookingVm | null = null;
  editMode = false;
  saving = false;
  deleting = false;
  payingAlegria = false;
  registeringWarrantyCard = false;
  payingSkipper = false;
  selectingAlegriaCash = false;
  selectingSkipperCash = false;
  termsModalOpen = false;
  termsSectionsVm: Array<{ title: string; paragraphs: string[] }> = [];
  editForm: any = {};

  extraPaymentAmount: number | null = null;
  adminAlegriaCashAmount: number | null = null;
  adminSkipperCashAmount: number | null = null;
  extraPaymentDescription = '';
  extraPaymentKind: 'tip' | 'extra_service' | 'damage_charge' = 'tip';
  payingExtra = false;

  adminWarrantyChargeAmount: number | null = null;
  adminWarrantyChargeReason = '';
  adminChargingWarranty = false;
  adminReleasingWarranty = false;
  adminRefundAmount: number | null = null;
  adminRefundReason = '';
  adminRefundPaymentType = 'balance';
  adminRefundPaymentIntentId = '';
  adminRefunding = false;
  actionMessage = '';
  financialHistoryRows: any[] = [];
  additionalPaymentRows: any[] = [];

  private readonly firebaseBaseUrl = 'https://adn-dev-4d05d.firebaseio.com';

  currentLanguage: SiteLanguage = 'fr';
  private financeText: any = (SITE_CONTENT as any).fr?.bookingFinance || {};
  private siteContentAll: any = SITE_CONTENT as any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private languageService: LanguageService,
    private siteContentService: SiteContentService,
    private bookingApi: BookingApiService,
    private bookingFinancial: BookingFinancialService,
    private bookingStateService: BookingStateService,
  ) {}

  ngOnInit(): void {
    this.bookingId = this.route.snapshot.paramMap.get('bookingId') || this.route.snapshot.paramMap.get('id') || '';
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadFinanceText(language).finally(() => this.refreshFinancialWorkspace());
    });
    this.loadBooking();
    this.handleStripeReturn();
    this.focusRequestedSection();
  }


  private focusRequestedSection(): void {
    const focus = String(this.route.snapshot.queryParamMap.get('focus') || '');
    if (focus !== 'additional-payment') return;
    setTimeout(() => {
      document.getElementById('additional-payments')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 900);
  }

  private handleStripeReturn(): void {
    const params = this.route.snapshot.queryParamMap;
    const sessionId = params.get('session_id') || params.get('checkoutSessionId') || '';
    const paymentType = String(params.get('paymentType') || params.get('payment') || '').toLowerCase();
    const warrantyResult = String(params.get('warranty') || '').toLowerCase();
    if (!this.bookingId) return;

    if (warrantyResult === 'success' && sessionId) {
      this.bookingApi.completeWarrantySetup({ bookingId: this.bookingId, ownerId: 'alegria', sessionId, checkoutSessionId: sessionId }).subscribe({
        next: () => this.loadBooking(),
        error: () => this.loadBooking(),
      });
      return;
    }

    if (paymentType === 'deposit') {
      this.bookingApi.completeDepositPayment({ bookingId: this.bookingId, ownerId: 'alegria', sessionId, checkoutSessionId: sessionId }).subscribe({
        next: () => this.loadBooking(),
        error: () => this.loadBooking(),
      });
      return;
    }

    if (paymentType === 'balance' || paymentType === 'alegria_balance') {
      this.bookingApi.completeBalancePayment({ bookingId: this.bookingId, ownerId: 'alegria', sessionId, checkoutSessionId: sessionId }).subscribe({
        next: () => this.loadBooking(),
        error: () => this.loadBooking(),
      });
      return;
    }

    if (paymentType === 'skipper_fee' || paymentType === 'skipper') {
      this.markSkipperPaidAfterStripe(sessionId);
      return;
    }

    if (['ad_hoc', 'adhoc', 'ad-hoc', 'extra_service', 'extra', 'tip', 'damage_charge'].includes(paymentType)) {
      const adhocPaymentId = params.get('adhocPaymentId') || params.get('extraServiceId') || '';
      this.markAdditionalPaymentPaidAfterStripe(sessionId, paymentType || 'ad_hoc', adhocPaymentId);
      return;
    }
  }

  private async markSkipperPaidAfterStripe(sessionId: string): Promise<void> {
    if (!this.bookingId) return;
    try {
      const current = await this.bookingApi.getBooking(this.bookingId).toPromise() as any;
      const raw = current?.raw || current || {};
      const payments = { ...(raw.payments || {}) };
      const amount = this.number(raw.skipperCashAmount || raw.proposalSkipperPrice || payments.direct?.skipperCashAmount || payments.skipper?.amount || 0);
      const now = Date.now();
      await this.bookingApi.updateBooking(this.bookingId, {
        skipperPaid: true,
        skipperStatus: 'paid',
        skipperPaymentStatus: 'paid',
        skipperPaidAmount: amount,
        skipperPaidAt: raw.skipperPaidAt || now,
        payments: {
          ...payments,
          skipper: {
            ...(payments.skipper || {}),
            paid: true,
            status: 'paid',
            paymentStatus: 'paid',
            paymentType: 'skipper_fee',
            type: 'skipper_fee',
            method: 'Stripe',
            amount,
            amount_total: Math.round(amount * 100),
            currency: 'eur',
            bookingId: this.bookingId,
            checkoutSessionId: sessionId,
            stripeCheckoutSessionId: sessionId,
            paidAt: payments.skipper?.paidAt || now,
            modifiedTS: now,
            source: 'stripe_return',
          },
          direct: {
            ...(payments.direct || {}),
            skipperCashAmount: amount,
            skipperPaid: true,
            skipperStatus: 'paid',
            skipperPaidAt: payments.direct?.skipperPaidAt || now,
          },
        },
      } as any);
    } finally {
      this.loadBooking();
    }
  }



  private async markAdditionalPaymentPaidAfterStripe(sessionId: string, paymentType = 'ad_hoc', paymentId = ''): Promise<void> {
    if (!this.bookingId) return;
    try {
      const current = await this.bookingApi.getBooking(this.bookingId).toPromise() as any;
      const raw = current?.raw || current || {};
      const payments = { ...(raw.payments || {}) };
      const id = paymentId || `adhoc_${Date.now()}`;
      const now = Date.now();
      const normalizedType = paymentType === 'tip' ? 'tip' : (paymentType === 'damage_charge' ? 'damage_charge' : (paymentType.includes('extra') ? 'extra_service' : 'ad_hoc'));
      const existing = payments.adHoc?.[id] || payments.extraServices?.[id] || {};
      await this.bookingApi.updateBooking(this.bookingId, {
        payments: {
          ...payments,
          adHoc: {
            ...(payments.adHoc || {}),
            [id]: {
              ...existing,
              id,
              paid: true,
              status: 'paid',
              paymentStatus: 'paid',
              paymentType: normalizedType,
              type: normalizedType,
              method: 'Stripe',
              checkoutSessionId: sessionId,
              stripeCheckoutSessionId: sessionId,
              paidAt: now,
              modifiedTS: now,
              source: 'stripe_return',
            }
          }
        }
      } as any);
    } finally {
      this.loadBooking();
    }
  }

  async loadBooking(): Promise<void> {
    this.loading = true;
    this.notFound = false;
    this.error = '';
    this.vm = null;

    const hardStop = window.setTimeout(() => {
      if (this.loading) {
        this.loading = false;
        this.notFound = true;
        this.error = `Timeout loading ${this.bookingId}.`;
      }
    }, 7000);

    try {
      if (!this.bookingId) {
        this.notFound = true;
        return;
      }

      const attempts = [
        { path: `bnBookings/${this.bookingId}`, type: 'booking' },
        { path: this.bookingId, type: 'booking' },
        { path: `bnProposals/${this.bookingId}`, type: 'offer' },
      ];

      for (const attempt of attempts) {
        const data = await this.fetchJsonWithTimeout(attempt.path, 2200);
        if (data) {
          const booking = attempt.type === 'offer'
            ? this.offerToBooking({ offerId: this.bookingId, ...data })
            : { bookingId: this.bookingId, ...data };
          const normalized = this.normalize(booking);
          const enriched = await this.enrichWithPaymentRecords(normalized);
          this.vm = this.buildVm(enriched);
          this.clearContradictoryTermsError();
          this.refreshFinancialWorkspace();
          return;
        }
      }

      this.notFound = true;
      this.error = `Booking ${this.bookingId} was not found in bnBookings or bnProposals.`;
    } catch (error: any) {
      this.notFound = true;
      this.error = error?.message || `Unable to load booking ${this.bookingId}.`;
    } finally {
      window.clearTimeout(hardStop);
      this.loading = false;
    }
  }


  startEdit(): void {
    if (!this.vm?.display) return;
    const b = this.vm.display;
    this.editMode = true;
    this.editForm = {
      bookingId: b.bookingId || this.bookingId,
      customerName: b.customerName || '',
      email: b.email || '',
      phone: b.phone || '',
      outingDate: b.outingDate || '',
      departureTime: b.departureTime || '',
      arrivalTime: b.arrivalTime || '',
      passengers: b.passengers || 0,
      outingType: b.outingType || 'Journée en mer',
      boatName: b.boatName || 'Alegria',
      boatType: b.boatType || '',
      boatManufacturer: b.boatManufacturer || '',
      boatModel: b.boatModel || '',
      startMarina: b.startMarina || '',
      source: b.source || '',
      bookingSource: b.bookingSource || '',
      externalPlatform: b.externalPlatform || '',
      externalPlatformName: b.externalPlatformName || '',
      externalPlatformBookingRef: b.externalPlatformBookingRef || b.platformBookingReference || '',
      platformBookingReference: b.platformBookingReference || b.externalPlatformBookingRef || '',
      externalPlatformUrl: b.externalPlatformUrl || '',
      platformBookingUrl: b.platformBookingUrl || b.externalPlatformBookingUrl || '',
      boatOutingCost: this.number(this.vm?.boatRentalAmount || this.vm?.boatOutingCost || b.pricing?.boatRentalAmount || b.boatRentalAmount || b.proposalBoatPrice || b.boatPrice || b.estimatedBoatPrice),
      fuelAmount: this.number(this.vm?.fuelCost || b.pricing?.fuelAmount || b.fuelAmount || b.proposalFuelPrice || b.cleaningCashAmount),
      portFeesAmount: this.number(this.vm?.portFeesAmount || b.pricing?.portFeesAmount || b.portFeesAmount || b.harborFeesAmount),
      serviceFeesAmount: this.number(this.vm?.serviceFeesAmount || b.pricing?.serviceFeesAmount || b.serviceFeesAmount || b.platformServiceFees),
      rentalCommissionAmount: this.number(this.vm?.rentalCommissionAmount || b.pricing?.rentalCommissionAmount || b.rentalCommissionAmount || b.platformCommissionAmount || b.platformFees),
      totalAmount: b.totalAmount || b.totalPrice || 0,
      totalPrice: b.totalPrice || b.totalAmount || 0,
      externalPlatformTotalClientAmount: b.externalPlatformTotalClientAmount || b.payments?.platform?.totalClientAmount || b.raw?.externalPlatformTotalClientAmount || b.raw?.payments?.platform?.totalClientAmount || 0,
      externalPlatformPaidAmount: b.externalPlatformPaidAmount || b.payments?.platform?.paidAmount || b.raw?.externalPlatformPaidAmount || 0,
      platformFees: b.platformFees || b.platformFeeAmount || b.externalPlatformFees || b.payments?.platform?.fees || Math.max(0, this.number(b.externalPlatformTotalClientAmount || b.payments?.platform?.totalClientAmount) - this.number(b.externalPlatformPaidAmount || b.payments?.platform?.paidAmount)),
      skipperCashAmount: b.skipperCashAmount || 0,
      cateringAmount: b.cateringAmount || 0,
      tipsAmount: b.tipsAmount || 0,
      cleaningCashAmount: b.cleaningCashAmount || 0,
      drinksAmount: b.drinksAmount || 0,
      waterToysAmount: b.waterToysAmount || 0,
      otherOnboardAmount: b.pricing?.otherAmount || b.otherOnboardAmount || b.otherAmount || 0,
      warrantyAmount: b.warrantyAmount || 0,
      warrantyStatus: b.warrantyStatus || 'not_requested',
      warrantyPaymentChoice: b.warrantyPaymentChoice || b.warrantyMethod || 'cash',
      bookingStatus: b.bookingStatus || 'completed',
      status: b.status || 'completed',
      paymentStatusLabel: b.paymentStatusLabel || b.balanceStatus || 'fully_paid',
      comments: b.comments || '',
    };
    this.recalculateEditCustomerTotal();
  }

  recalculateEditCustomerTotal(): void {
    if (!this.editForm) return;
    const source = String(this.editForm.source || this.editForm.externalPlatform || '').toLowerCase();
    const direct = !source || source === 'direct' || source === 'alegria' || source === 'direct alegria';
    if (direct) {
      this.editForm.rentalCommissionAmount = 0;
      this.editForm.serviceFeesAmount = 0;
    }
    const values = [
      this.editForm.boatOutingCost, this.editForm.skipperCashAmount, this.editForm.fuelAmount,
      this.editForm.portFeesAmount, this.editForm.cateringAmount, this.editForm.drinksAmount,
      this.editForm.waterToysAmount, this.editForm.tipsAmount, this.editForm.otherOnboardAmount,
    ].map((value: any) => this.number(value));
    this.editForm.totalAmount = Math.round(values.reduce((sum: number, value: number) => sum + value, 0) * 100) / 100;
    this.editForm.totalPrice = this.editForm.totalAmount;
    this.editForm.totalCommission = Math.round((this.number(this.editForm.rentalCommissionAmount) + this.number(this.editForm.serviceFeesAmount)) * 100) / 100;
    this.editForm.alegriaRevenueTotal = Math.max(0, Math.round((this.editForm.totalAmount - this.editForm.totalCommission - this.number(this.editForm.skipperCashAmount)) * 100) / 100);
    this.editForm.skipperRevenueTotal = Math.round((this.number(this.editForm.skipperCashAmount) + this.number(this.editForm.tipsAmount)) * 100) / 100;
    if (!direct) this.editForm.externalPlatformTotalClientAmount = this.number(this.editForm.boatOutingCost);
  }

  cancelEdit(): void {
    this.editMode = false;
    this.editForm = {};
    this.error = '';
  }

  showPlatformNameField(): boolean {
    const source = String(this.editForm?.source || '').toLowerCase().trim();
    // Click&Boat and SamBoat already identify the platform from the source selector.
    // Keep the custom platform-name field only when the admin chooses Other.
    return source === 'other';
  }

  private normalizedPlatformName(sourceValue: any, explicitName: any): string {
    const source = String(sourceValue || '').toLowerCase().trim();
    if (source === 'clickandboat' || source === 'click&boat') return 'Click&Boat';
    if (source === 'samboat') return 'SamBoat';
    if (source === 'direct' || source === 'alegria' || source === 'direct alegria') return 'Alegria direct';
    return String(explicitName || '').trim();
  }

  async saveEdit(): Promise<void> {
    if (!this.editForm?.bookingId) return;
    this.saving = true;
    this.error = '';

    try {
      const now = Date.now();
      const existing = this.vm?.display || {};
      const raw = existing.raw || {};
      const bookingId = this.editForm.bookingId || this.bookingId;
      const boatOutingCost = this.number(this.editForm.boatOutingCost);
      const platformPaid = this.number(this.editForm.externalPlatformPaidAmount);
      const sourceKey = String(this.editForm.source || this.editForm.externalPlatform || existing.source || '').toLowerCase();
      const directBooking = !sourceKey || ['direct', 'alegria', 'direct alegria'].includes(sourceKey);
      const skipper = this.number(this.editForm.skipperCashAmount);
      const fuel = this.number(this.editForm.fuelAmount);
      const portFees = this.number(this.editForm.portFeesAmount);
      const catering = this.number(this.editForm.cateringAmount);
      const tips = this.number(this.editForm.tipsAmount);
      const drinks = this.number(this.editForm.drinksAmount);
      const waterToys = this.number(this.editForm.waterToysAmount);
      const other = this.number(this.editForm.otherOnboardAmount);
      const rentalCommission = directBooking ? 0 : this.number(this.editForm.rentalCommissionAmount);
      const serviceFees = directBooking ? 0 : this.number(this.editForm.serviceFeesAmount);
      const platformFees = rentalCommission + serviceFees;
      const directTotal = skipper + fuel + portFees + catering + tips + drinks + waterToys + other;
      const platformCustomerAmount = directBooking ? 0 : boatOutingCost;
      const totalCollected = platformPaid + directTotal;
      const totalClientCost = boatOutingCost + directTotal;
      const alegriaRevenue = Math.max(0, totalClientCost - platformFees - skipper);
      const skipperRevenueTotal = skipper + tips;
      const paymentStatusLabel = this.editForm.paymentStatusLabel || 'fully_paid';
      const normalizedPlatformName = this.normalizedPlatformName(this.editForm.source || this.editForm.externalPlatform || existing.source, this.editForm.externalPlatformName);

      const payload = {
        ...existing,
        ...this.editForm,
        bookingId,
        externalPlatformName: normalizedPlatformName,
        externalPlatform: this.editForm.source || this.editForm.externalPlatform || existing.externalPlatform || existing.source || '',
        offerId: existing.offerId || bookingId,
        relatedBookingId: existing.relatedBookingId || bookingId,
        proposalBoatPrice: boatOutingCost,
        boatPrice: boatOutingCost,
        estimatedBoatPrice: boatOutingCost,
        totalCustomerCost: totalClientCost,
        customerTotal: totalClientCost,
        totalCustomerPrice: totalClientCost,
        totalAmount: totalClientCost,
        totalPrice: totalClientCost,
        externalPlatformTotalClientAmount: platformCustomerAmount,
        externalPlatformPaidAmount: platformPaid,
        platformFees,
        platformFeeAmount: platformFees,
        externalPlatformFees: platformFees,
        rentalCommissionAmount: rentalCommission,
        serviceFeesAmount: serviceFees,
        totalCommission: platformFees,
        boatRentalAmount: boatOutingCost,
        fuelAmount: fuel,
        portFeesAmount: portFees,
        skipperCashAmount: skipper,
        cateringAmount: catering,
        tipsAmount: tips,
        cleaningCashAmount: fuel,
        drinksAmount: drinks,
        waterToysAmount: waterToys,
        otherOnboardAmount: other,
        totalCollectedAmount: totalCollected,
        totalOnboardCollections: directTotal,
        customerPaidThroughPlatform: platformCustomerAmount,
        customerPaidDirectly: directTotal,
        alegriaRevenueTotal: alegriaRevenue,
        skipperRevenueTotal,
        totalOutingPrice: totalClientCost,
        pricing: {
          boatRentalAmount: boatOutingCost, skipperAmount: skipper, fuelAmount: fuel, portFeesAmount: portFees,
          cateringAmount: catering, drinksAmount: drinks, waterToysAmount: waterToys, tipsAmount: tips, otherAmount: other,
          rentalCommissionAmount: rentalCommission, serviceFeesAmount: serviceFees, totalCommission: platformFees,
          totalOutingPrice: totalClientCost, alegriaRevenue, skipperRevenue: skipperRevenueTotal,
        },
        remainingFeesAmount: 0,
        remainingOnboardAmount: 0,
        externalTotalRemainingAmount: 0,
        depositAmount: 0,
        depositPaid: true,
        depositStatus: 'not_required',
        balanceAmount: 0,
        balancePaid: true,
        balanceStatus: 'paid',
        paymentStatus: paymentStatusLabel === 'fully_paid' || paymentStatusLabel === 'balance_paid' ? true : paymentStatusLabel,
        paymentStatusLabel,
        warrantyMethod: this.editForm.warrantyPaymentChoice,
        warrantyPaymentChoice: this.editForm.warrantyPaymentChoice,
        warrantyStatus: this.editForm.warrantyStatus,
        bookingStatus: this.editForm.bookingStatus || 'completed',
        status: this.editForm.status || 'completed',
        bookingRequestStatus: this.editForm.bookingStatus === 'cancelled' ? 'cancelled' : 'confirmed',
        modifiedTS: now,
        updatedAt: now,
        payments: {
          ...(existing.payments || {}),
          platform: {
            source: this.editForm.source || this.editForm.externalPlatform || existing.source || 'external',
            name: normalizedPlatformName,
            reference: this.editForm.externalPlatformBookingRef || this.editForm.platformBookingReference || '',
            paidAmount: platformPaid,
            totalClientAmount: platformCustomerAmount,
            fees: platformFees,
            feeAmount: platformFees,
            status: 'recorded',
            recordedAt: now,
          },
          direct: {
            skipperCashAmount: skipper,
            cateringAmount: catering,
            tipsAmount: tips,
            cleaningCashAmount: fuel,
            drinksAmount: drinks,
            waterToysAmount: waterToys,
            otherOnboardAmount: other,
            fuelAmount: fuel,
            portFeesAmount: portFees,
            totalDirectAmount: directTotal,
            status: 'recorded',
            recordedAt: now,
          },
        },
        raw: {
          ...raw,
          ...this.editForm,
          externalPlatformName: normalizedPlatformName,
          proposalBoatPrice: boatOutingCost,
          boatPrice: boatOutingCost,
          estimatedBoatPrice: boatOutingCost,
          totalCustomerCost: totalClientCost,
          customerTotal: totalClientCost,
          totalCustomerPrice: totalClientCost,
          totalAmount: totalClientCost,
          totalPrice: totalClientCost,
          externalPlatformTotalClientAmount: platformCustomerAmount,
          externalPlatformPaidAmount: platformPaid,
        platformFees,
        platformFeeAmount: platformFees,
        externalPlatformFees: platformFees,
        rentalCommissionAmount: rentalCommission,
        serviceFeesAmount: serviceFees,
        totalCommission: platformFees,
        boatRentalAmount: boatOutingCost,
        fuelAmount: fuel,
        portFeesAmount: portFees,
          importedManually: raw.importedManually !== false,
          entryMode: raw.entryMode || 'historical',
          editedAt: now,
        },
      };

      await this.writeJson(`bnBookings/${bookingId}`, payload);
      this.vm = this.buildVm(this.normalize(payload));
      this.editMode = false;
    } catch (e: any) {
      this.error = e?.message || 'Unable to save booking.';
    } finally {
      this.saving = false;
    }
  }

  async deleteBooking(): Promise<void> {
    const id = this.vm?.bookingId || this.bookingId;
    if (!id) return;
    const ok = window.confirm(`Delete booking ${id}? This cannot be undone.`);
    if (!ok) return;

    this.deleting = true;
    this.error = '';

    try {
      await this.writeJson(`bnBookings/${id}`, null);
      // Also remove stale offer copy if one exists.
      await this.writeJson(`bnProposals/${id}`, null).catch(() => undefined);
      this.vm = null;
      this.notFound = true;
      this.error = `Booking ${id} deleted.`;
    } catch (e: any) {
      this.error = e?.message || 'Unable to delete booking.';
    } finally {
      this.deleting = false;
    }
  }

  private async writeJson(path: string, payload: any): Promise<void> {
    const encodedPath = path.split('/').filter(Boolean).map((part) => encodeURIComponent(part)).join('/');
    const url = `${this.firebaseBaseUrl}/${encodedPath}.json`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Firebase write failed: ${response.status}`);
    }
  }


  private async enrichWithPaymentRecords(booking: any): Promise<any> {
    const bookingId = booking?.bookingId || this.bookingId;
    const offerId = booking?.offerId || booking?.relatedBookingId || bookingId;
    const ids = Array.from(new Set([bookingId, offerId].filter(Boolean)));
    const collections = ['bnPayments', 'bnPayment', 'backendpayments'];
    const records: any[] = [];

    for (const collection of collections) {
      for (const id of ids) {
        const matches = await this.fetchPaymentRecordsByBookingId(collection, id).catch(() => null);
        if (matches && typeof matches === 'object') {
          Object.keys(matches).forEach((key) => {
            const value = matches[key];
            if (value && typeof value === 'object') records.push({ paymentId: value.paymentId || key, ...value });
          });
        }
      }
    }

    const unique = new Map<string, any>();
    records.forEach((record) => {
      const key = String(record.paymentId || record.stripeCheckoutSessionId || record.stripePaymentIntentId || JSON.stringify(record));
      unique.set(key, record);
    });

    return {
      ...booking,
      stripePaymentRecords: Array.from(unique.values()),
    };
  }

  private async fetchPaymentRecordsByBookingId(collection: string, bookingId: string): Promise<any | null> {
    const encodedCollection = encodeURIComponent(collection);
    const encodedId = encodeURIComponent(bookingId);
    const url = `${this.firebaseBaseUrl}/${encodedCollection}.json?orderBy=%22bookingId%22&equalTo=%22${encodedId}%22`;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 1800);
    try {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) return null;
      return await response.json();
    } catch {
      return null;
    } finally {
      window.clearTimeout(timeout);
    }
  }


  private async fetchJsonWithTimeout(path: string, timeoutMs: number): Promise<any | null> {
    const encodedPath = path.split('/').filter(Boolean).map((part) => encodeURIComponent(part)).join('/');
    const url = `${this.firebaseBaseUrl}/${encodedPath}.json`;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) return null;
      return await response.json();
    } catch {
      return null;
    } finally {
      window.clearTimeout(timeout);
    }
  }

  private offerToBooking(offer: any): any {
    const totalAmount = this.number(offer.totalAmount || offer.totalPrice || offer.estimatedPrice);
    const skipperCashAmount = this.number(offer.skipperCashAmount || offer.proposalSkipperPrice || offer.estimatedSkipperPrice);
    const onlinePayableAmount = this.number(offer.onlinePayableAmount || offer.appPayableAmount || Math.max(0, totalAmount - skipperCashAmount));
    const depositAmount = this.number(offer.depositAmount);
    const balanceAmount = this.number(offer.balanceAmount || offer.remainingFeesAmount || Math.max(0, onlinePayableAmount - depositAmount));

    return {
      ...offer,
      bookingId: offer.relatedBookingId || offer.offerId || this.bookingId,
      offerId: offer.offerId || this.bookingId,
      relatedBookingId: offer.relatedBookingId || offer.offerId || this.bookingId,
      customerName: offer.customerName || '',
      email: offer.customerEmail || offer.email || '',
      phone: offer.customerPhone || offer.phone || '',
      outingType: offer.outingType || 'Journée en mer',
      outingDate: offer.outingDate || '',
      departureTime: offer.departureTime || offer.startTime || '',
      arrivalTime: offer.arrivalTime || offer.endTime || '',
      passengers: this.number(offer.passengers),
      totalAmount,
      totalPrice: totalAmount,
      onlinePayableAmount,
      appPayableAmount: onlinePayableAmount,
      skipperCashAmount,
      depositAmount,
      balanceAmount,
      remainingFeesAmount: balanceAmount,
      remainingOnboardAmount: balanceAmount,
      bookingStatus: offer.bookingStatus || offer.bookingRequestStatus || 'offer',
      status: offer.status || 'offer',
      bookingRequestStatus: offer.bookingRequestStatus || 'offer',
      warrantyAmount: this.number(offer.warrantyAmount || 500),
      raw: offer,
    };
  }

  private normalize(input: any): any {
    const raw = input?.raw || {};
    const deepRaw = raw?.raw || {};
    const directPayments = input?.payments?.direct || raw?.payments?.direct || {};
    const depositPayment = input?.payments?.deposit || raw?.payments?.deposit || {};
    const totalAmount = this.firstPositive(
      input.totalAmount, input.totalPrice, input.estimatedPrice, input.estimatedTotalPrice, input.estimatedTotal,
      input.totalCustomerCost, input.customerTotal, input.finalAmount, input.amountTotal,
      raw.totalAmount, raw.totalPrice, raw.estimatedPrice, raw.estimatedTotalPrice, raw.estimatedTotal,
      raw.totalCustomerCost, raw.customerTotal, raw.finalAmount, raw.amountTotal,
      deepRaw.totalAmount, deepRaw.totalPrice, deepRaw.estimatedPrice, deepRaw.estimatedTotalPrice, deepRaw.estimatedTotal
    );
    const skipperCashAmount = this.firstPositive(
      input.skipperCashAmount, input.proposalSkipperPrice, input.estimatedSkipperPrice, input.skipperPrice, input.skipperAmount, input.skipperFee,
      raw.skipperCashAmount, raw.proposalSkipperPrice, raw.estimatedSkipperPrice, raw.skipperPrice, raw.skipperAmount, raw.skipperFee,
      deepRaw.skipperCashAmount, deepRaw.proposalSkipperPrice, deepRaw.estimatedSkipperPrice, deepRaw.skipperPrice, deepRaw.skipperAmount, deepRaw.skipperFee,
      directPayments.skipperCashAmount, directPayments.skipperAmount, directPayments.skipperFee
    );
    const onlinePayableAmount = this.firstPositive(
      input.onlinePayableAmount, input.appPayableAmount, input.boatPayableAmount, input.alegriaPayableAmount,
      raw.onlinePayableAmount, raw.appPayableAmount, raw.boatPayableAmount, raw.alegriaPayableAmount,
      Math.max(0, totalAmount - skipperCashAmount)
    );
    const depositAmount = this.firstPositive(input.depositAmount, input.deposit, raw.depositAmount, raw.deposit, depositPayment.amount, depositPayment.amount_total ? Number(depositPayment.amount_total) / 100 : 0, 0);
    const balanceAmount = this.firstPositive(
      input.balanceAmount, input.remainingFeesAmount, input.remainingOnboardAmount, input.remainingBoatBalance, input.remainingAlegriaRevenue,
      raw.balanceAmount, raw.remainingFeesAmount, raw.remainingOnboardAmount, raw.remainingBoatBalance, raw.remainingAlegriaRevenue,
      Math.max(0, onlinePayableAmount - depositAmount)
    );

    const booking = {
      ...input,
      raw,
      customerName: input.customerName || raw.customerName || deepRaw.customerName || '',
      email: input.email || input.customerEmail || raw.email || raw.customerEmail || deepRaw.email || deepRaw.customerEmail || '',
      phone: input.phone || input.customerPhone || raw.phone || raw.customerPhone || deepRaw.phone || deepRaw.customerPhone || '',
      outingType: input.outingType || raw.outingType || deepRaw.outingType || 'Journée en mer',
      outingDate: input.outingDate || raw.outingDate || deepRaw.outingDate || '',
      departureTime: input.departureTime || raw.departureTime || raw.startTime || deepRaw.departureTime || deepRaw.startTime || '',
      arrivalTime: input.arrivalTime || raw.arrivalTime || raw.endTime || deepRaw.arrivalTime || deepRaw.endTime || '',
      passengers: this.number(input.passengers || raw.passengers || deepRaw.passengers),
      totalAmount,
      totalPrice: totalAmount,
      totalCustomerCost: totalAmount,
      customerTotal: totalAmount,
      totalCustomerPrice: totalAmount,
      skipperCashAmount,
      skipperPaid: input.skipperPaid === true || raw.skipperPaid === true || directPayments.skipperPaid === true,
      skipperStatus: input.skipperStatus || raw.skipperStatus || directPayments.skipperStatus || (skipperCashAmount > 0 ? 'to_be_paid_onboard' : 'not_applicable'),
      onlinePayableAmount,
      appPayableAmount: onlinePayableAmount,
      depositAmount,
      balanceAmount,
      remainingFeesAmount: balanceAmount,
      remainingOnboardAmount: balanceAmount,
      boatName: input.boatName || raw.boatName || deepRaw.boatName || 'Alegria',
      boatType: input.boatType || raw.boatType || deepRaw.boatType || 'Catamaran',
      boatManufacturer: input.boatManufacturer || raw.boatManufacturer || deepRaw.boatManufacturer || '',
      boatModel: input.boatModel || raw.boatModel || deepRaw.boatModel || '',
      startMarina: input.startMarina || raw.startMarina || deepRaw.startMarina || 'Marina Baie des Anges',
      boatClickAndBoatUrl: input.boatClickAndBoatUrl || raw.boatClickAndBoatUrl || deepRaw.boatClickAndBoatUrl || '',
      externalPlatformUrl: input.externalPlatformUrl || raw.externalPlatformUrl || deepRaw.externalPlatformUrl || '',
      platformBookingUrl: input.platformBookingUrl || raw.platformBookingUrl || deepRaw.platformBookingUrl || input.platformBookingReference || raw.platformBookingReference || '',
      externalPlatformBookingUrl: input.externalPlatformBookingUrl || raw.externalPlatformBookingUrl || deepRaw.externalPlatformBookingUrl || input.platformBookingReference || raw.platformBookingReference || '',
      cateringAmount: this.number(input.cateringAmount || raw.cateringAmount || deepRaw.cateringAmount || directPayments.cateringAmount),
      tipsAmount: this.number(input.tipsAmount || input.tipAmount || raw.tipsAmount || raw.tipAmount || deepRaw.tipsAmount || deepRaw.tipAmount || directPayments.tipsAmount || directPayments.tipAmount),
      cleaningCashAmount: this.number(input.cleaningCashAmount || raw.cleaningCashAmount || deepRaw.cleaningCashAmount || directPayments.cleaningCashAmount),
      drinksAmount: this.number(input.drinksAmount || raw.drinksAmount || deepRaw.drinksAmount || directPayments.drinksAmount),
      waterToysAmount: this.number(input.waterToysAmount || raw.waterToysAmount || deepRaw.waterToysAmount || directPayments.waterToysAmount),
      otherOnboardAmount: this.number(input.otherOnboardAmount || raw.otherOnboardAmount || deepRaw.otherOnboardAmount || directPayments.otherOnboardAmount),
      externalPlatformTotalClientAmount: this.number(input.externalPlatformTotalClientAmount || raw.externalPlatformTotalClientAmount || deepRaw.externalPlatformTotalClientAmount || input.payments?.platform?.totalClientAmount || raw.payments?.platform?.totalClientAmount),
      externalPlatformPaidAmount: this.number(input.externalPlatformPaidAmount || raw.externalPlatformPaidAmount || deepRaw.externalPlatformPaidAmount || input.payments?.platform?.paidAmount || raw.payments?.platform?.paidAmount),
      externalTotalRemainingAmount: this.number(input.externalTotalRemainingAmount || raw.externalTotalRemainingAmount || deepRaw.externalTotalRemainingAmount),
    };

    if (this.isHistoricalRecord(booking)) {
      booking.bookingStatus = 'completed';
      booking.status = 'completed';
      booking.bookingRequestStatus = 'confirmed';
      booking.depositAmount = 0;
      booking.depositStatus = 'not_required';
      booking.depositPaid = true;
      booking.balanceAmount = 0;
      booking.balanceStatus = 'paid';
      booking.balancePaid = true;
      booking.remainingFeesAmount = 0;
      booking.remainingOnboardAmount = 0;
      booking.paymentStatus = true;
    }

    return booking;
  }

  private buildVm(booking: any): BookingVm {
    const isHistoricalBooking = this.isHistoricalRecord(booking);
    const sourceKey = String(booking.source || booking.bookingSource || '').toLowerCase();
    const isDirectAlegria = !sourceKey || sourceKey === 'direct' || sourceKey === 'alegria' || sourceKey === 'direct alegria';
    const isExternalBooking = !isDirectAlegria && (booking.bookingSource === 'external' || !!booking.externalPlatform || !!booking.externalPlatformBookingRef || !!booking.raw?.externalPlatformBookingRef);
    const status = String(booking.bookingStatus || booking.status || '').toLowerCase();

    const paymentBreakdownRows = this.buildPaymentRows(booking);
    const stripePaymentRecords = Array.isArray(booking.stripePaymentRecords) ? booking.stripePaymentRecords : [];

    const totalDirectSkipper = this.number(booking.skipperCashAmount || booking.proposalSkipperPrice || booking.payments?.direct?.skipperCashAmount);
    const totalDirectCatering = this.number(booking.cateringAmount || booking.payments?.direct?.cateringAmount);
    const totalDirectTips = this.number(booking.tipsAmount || booking.tipAmount || booking.payments?.direct?.tipsAmount || booking.payments?.direct?.tipAmount);
    const totalDirectCleaningFuel = this.number(booking.cleaningCashAmount || booking.payments?.direct?.cleaningCashAmount);
    const totalDirectDrinks = this.number(booking.drinksAmount || booking.payments?.direct?.drinksAmount);
    const totalDirectWaterToys = this.number(booking.waterToysAmount || booking.payments?.direct?.waterToysAmount);
    const totalDirectOther = this.number(booking.otherOnboardAmount || booking.payments?.direct?.otherOnboardAmount);

    const collectedDirectTotal = paymentBreakdownRows.filter((row) => row.status !== 'to be paid').reduce((sum, row) => sum + row.amount, 0);
    const collectedViaPlatform = isExternalBooking ? this.number(booking.externalPlatformPaidAmount || booking.payments?.platform?.paidAmount || booking.raw?.externalPlatformPaidAmount) : 0;
    const customerPaidThroughPlatform = isExternalBooking ? this.number(booking.externalPlatformTotalClientAmount || booking.payments?.platform?.totalClientAmount || booking.raw?.externalPlatformTotalClientAmount || booking.raw?.payments?.platform?.totalClientAmount) : 0;
    const explicitOnlinePayable = this.number(booking.onlinePayableAmount || booking.appPayableAmount);

    const f = this.bookingFinancial.build(booking);
    let skipperCost = f.skipperAmount;
    let fuelCost = f.fuelAmount;
    let extraServicesCost = f.extraServicesAmount;
    let boatOutingCost = f.platformCost;
    let totalCustomerCost = f.totalCustomerPrice;

    const stripeDepositPaidAmount = this.paidStripeAmountFor(booking, 'deposit');
    const depositPaidAmount = this.isDepositPaid(booking)
      ? (stripeDepositPaidAmount || this.number(booking.depositPaidAmount || booking.paidDepositAmount || booking.depositAmount || booking.payments?.deposit?.amount || (booking.payments?.deposit?.amount_total ? Number(booking.payments.deposit.amount_total) / 100 : 0)))
      : 0;

    const rawBoatBalance = Math.max(0, f.alegriaPayableRevenue - depositPaidAmount);
    const explicitBalanceDue = this.firstPositive(
      booking.balanceAmount, booking.remainingFeesAmount, booking.remainingOnboardAmount, booking.remainingBoatBalance, booking.remainingAlegriaRevenue,
      booking.raw?.balanceAmount, booking.raw?.remainingFeesAmount, booking.raw?.remainingOnboardAmount, booking.raw?.remainingBoatBalance, booking.raw?.remainingAlegriaRevenue
    );
    const balanceExplicitlyPaid = booking.balancePaid === true
      || String(booking.balanceStatus || booking.payments?.balance?.status || '').toLowerCase() === 'paid'
      || this.hasPaidStripeRecordFor(booking, 'balance')
      || this.hasPaidStripeRecordFor(booking, 'alegria');
    let alegriaRemainingComputed = f.alegriaRemaining;
    if (alegriaRemainingComputed <= 0 && explicitBalanceDue > 0 && !balanceExplicitlyPaid) {
      alegriaRemainingComputed = explicitBalanceDue;
    }
    const balancePaid = alegriaRemainingComputed <= 0;
    let skipperRemainingComputed = f.skipperRemaining;
    const skipperExplicitlyPaid = booking.skipperPaid === true
      || String(booking.skipperStatus || booking.skipperPaymentStatus || booking.payments?.skipper?.status || booking.payments?.direct?.skipperStatus || '').toLowerCase() === 'paid'
      || booking.payments?.skipper?.paid === true
      || booking.payments?.direct?.skipperPaid === true
      || this.hasPaidStripeRecordFor(booking, 'skipper');
    if (skipperRemainingComputed <= 0 && skipperCost > 0 && !skipperExplicitlyPaid) {
      skipperRemainingComputed = Math.max(0, skipperCost - f.skipperPaid);
    }
    const skipperPaid = skipperRemainingComputed <= 0;
    const skipperPaidAmount = skipperPaid ? (f.skipperPaid || skipperCost) : f.skipperPaid;
    const onboardBoatBalanceCollected = balancePaid ? rawBoatBalance : 0;
    const onboardSkipperCollected = skipperPaidAmount;
    const remainingBoatBalance = alegriaRemainingComputed;
    const remainingSkipperFee = skipperRemainingComputed;
    const remainingFuelCost = 0;
    const remainingExtraServices = 0;
    const totalRemainingCustomer = alegriaRemainingComputed + skipperRemainingComputed;
    const totalClientCost = f.totalCustomerPrice;
    const totalCollected = this.number(booking.totalCollectedAmount || booking.raw?.totalCollectedAmount) || collectedViaPlatform + collectedDirectTotal;
    const totalRemaining = isHistoricalBooking ? 0 : totalRemainingCustomer;
    const totalOnboardCollections = onboardBoatBalanceCollected + onboardSkipperCollected + totalDirectCatering + totalDirectTips + totalDirectCleaningFuel + totalDirectDrinks + totalDirectWaterToys + totalDirectOther;
    const alegriaRevenueTotal = f.alegriaRevenue;
    const alegriaPaidAmount = f.alegriaPaid;
    const remainingAlegriaRevenue = alegriaRemainingComputed;

    const canonicalState = this.bookingStateService.resolve(booking);
    const termsAccepted = canonicalState.termsAccepted;
    const alegriaPaymentComplete = canonicalState.alegriaPaymentComplete;
    const skipperPaymentComplete = canonicalState.skipperPaymentComplete;
    const warrantyComplete = canonicalState.warrantyComplete;
    const bookingCompletionPercent = canonicalState.progress;
    const customerJourneyComplete = canonicalState.confirmed || canonicalState.completed;
    const customerJourneyStatus = this.t(canonicalState.statusKey);
    const bookingStatusBadge = this.t(canonicalState.statusKey);
    const paymentStatusBadge = this.t(canonicalState.paymentKey);
    const customerPaidDirectly = totalOnboardCollections;
    const paymentHistoryRows = this.buildPaymentHistoryRows(booking, depositPaidAmount, rawBoatBalance, balancePaid, skipperCost, skipperPaid);

    return {
      bookingId: booking.bookingId || this.bookingId,
      isAdmin: this.isCurrentUserAdmin(),
      isExternalBooking,
      isHistoricalBooking,
      bookingStatusBadge,
      paymentStatusBadge,
      warrantyStatusBadge: this.buildWarrantyBadge(booking),
      platformLabel: this.buildPlatformLabel(booking),
      boatListingUrl: String(booking.clickAndBoatUrl || booking.boatClickAndBoatUrl || booking.raw?.clickAndBoatUrl || booking.raw?.boatClickAndBoatUrl || booking.externalPlatformUrl || booking.raw?.externalPlatformUrl || '').trim(),
      platformBookingUrl: String(booking.platformBookingUrl || booking.externalPlatformBookingUrl || booking.raw?.platformBookingUrl || booking.raw?.externalPlatformBookingUrl || booking.platformBookingReference || booking.externalPlatformBookingRef || '').trim(),
      totalClientCost,
      collectedViaPlatform,
      collectedDirectTotal,
      totalCollected,
      totalRemaining,
      paymentDifference: 0,
      paymentBreakdownRows,
      totalDirectSkipper,
      totalDirectCatering,
      totalDirectTips,
      totalDirectCleaningFuel,
      totalDirectDrinks,
      totalDirectWaterToys,
      totalDirectOther,
      boatOutingCost,
      platformCost: f.platformCost,
      platformFees: f.platformFees,
      skipperCost,
      extraServicesCost,
      fuelCost,
      remainingFuelCost,
      totalCustomerCost,
      depositAmount: this.number(booking.depositAmount || booking.payments?.deposit?.amount || (booking.payments?.deposit?.amount_total ? Number(booking.payments.deposit.amount_total) / 100 : 0)),
      depositPaidAmount,
      remainingBoatBalance,
      remainingSkipperFee,
      remainingExtraServices,
      alegriaPaidAmount,
      remainingAlegriaRevenue,
      skipperPaidAmount,
      totalRemainingCustomer,
      stripeDepositCollected: depositPaidAmount,
      totalStripeCollections: depositPaidAmount,
      onboardBoatBalanceCollected,
      onboardSkipperCollected,
      outstandingBoatBalance: remainingBoatBalance,
      outstandingSkipperFee: remainingSkipperFee,
      outstandingFuelCost: remainingFuelCost,
      outstandingExtraServices: remainingExtraServices,
      outstandingTotal: totalRemainingCustomer,
      paymentHistoryRows,
      stripePaymentRecords,
      totalOnboardCollections,
      alegriaRevenueTotal,
      boatRentalAmount: f.boatRentalAmount,
      portFeesAmount: f.portFeesAmount,
      cateringAmount: f.cateringAmount,
      drinksAmount: f.drinksAmount,
      waterToysAmount: f.waterToysAmount,
      tipsAmount: f.tipsAmount,
      otherAmount: f.otherAmount,
      rentalCommissionAmount: f.rentalCommissionAmount,
      serviceFeesAmount: f.serviceFeesAmount,
      totalCommission: f.totalCommission,
      totalOutingPrice: f.totalOutingPrice,
      skipperRevenueTotal: f.skipperRevenue,
      customerPaidThroughPlatform,
      customerPaidDirectly,
      display: booking,
      termsAccepted,
      alegriaPaymentComplete,
      skipperPaymentComplete,
      warrantyComplete,
      bookingCompletionPercent,
      customerJourneyComplete,
      customerJourneyStatus,
    };
  }

  private buildPaymentRows(booking: any): MoneyRow[] {
    const rows: MoneyRow[] = [];
    const add = (label: string, amount: any, method: string, status = 'paid') => {
      const value = this.number(amount);
      if (value > 0) rows.push({ label, amount: value, method, status });
    };

    const payments = booking.payments || {};
    const deposit = payments.deposit || {};
    if (booking.depositPaid === true || booking.depositStatus === 'paid' || deposit.paid === true || deposit.status === 'paid') {
      add('Deposit', booking.depositAmount || deposit.amount || (deposit.amount_total ? Number(deposit.amount_total) / 100 : 0), 'Stripe', 'paid');
    }

    const direct = booking.payments?.direct || {};
    const skipperPaid = booking.skipperPaid === true || direct.skipperPaid === true || direct.skipperStatus === 'paid' || booking.skipperStatus === 'paid';
    add('Skipper', booking.skipperCashAmount || booking.proposalSkipperPrice || direct.skipperCashAmount, 'Cash onboard', skipperPaid ? 'paid' : 'to be paid');
    add('Catering', booking.cateringAmount || direct.cateringAmount, 'Direct');
    add('Tips', booking.tipsAmount || booking.tipAmount || direct.tipsAmount || direct.tipAmount, 'Direct');
    add('Cleaning / fuel', booking.cleaningCashAmount || direct.cleaningCashAmount, 'Direct');
    add('Drinks', booking.drinksAmount || direct.drinksAmount, 'Direct');
    add('Water toys', booking.waterToysAmount || direct.waterToysAmount, 'Direct');
    add('Other', booking.otherOnboardAmount || direct.otherOnboardAmount, 'Direct');

    Object.keys(payments).forEach((key) => {
      if (['deposit', 'balance', 'platform', 'warranty'].includes(key)) return;
      const payment = payments[key] || {};
      const type = String(payment.paymentType || payment.type || key).toLowerCase();
      const label = payment.description || payment.title || payment.name || (type.includes('adhoc') ? 'Ad hoc payment' : type.includes('extra') ? 'Extra service' : key);
      add(label, this.centsToEuros(payment.amount ?? payment.amount_total ?? payment.total ?? 0), payment.method || (payment.stripeCheckoutSessionId ? 'Stripe' : 'Direct'), payment.status || 'paid');
    });

    return rows;
  }


  private isPaidStripeRecord(record: any): boolean {
    const status = String(record?.status || record?.paymentStatus || record?.stripePaymentStatus || '').toLowerCase();
    return ['paid', 'succeeded', 'success', 'complete', 'completed', 'checkout_completed', 'payment_succeeded', 'charge_succeeded'].includes(status);
  }

  private paymentType(record: any): string {
    return [
      record?.paymentType,
      record?.type,
      record?.checkoutType,
      record?.paymentPurpose,
      record?.extraServiceId,
      record?.title,
      record?.name,
      record?.description,
      record?.metadata?.paymentType,
      record?.metadata?.checkoutType,
      record?.metadata?.extraServiceId,
      record?.metadata?.title,
    ].filter(Boolean).join(' ').toLowerCase();
  }

  private recordMatchesPayment(record: any, type: string): boolean {
    const text = this.paymentType(record);
    const normalized = String(type || '').toLowerCase();
    if (normalized === 'alegria' || normalized === 'balance') {
      return text.includes('alegria')
        || text.includes('balance')
        || text.includes('remaining')
        || text.includes('remaining 90')
        || (text.includes('extra_service') && text.includes('balance_'));
    }
    if (normalized === 'skipper') return text.includes('skipper') || text.includes('skipper_');
    return text.includes(normalized);
  }

  private paidStripeAmountFor(booking: any, type: string): number {
    const records = Array.isArray(booking?.stripePaymentRecords) ? booking.stripePaymentRecords : [];
    return records
      .filter((record) => this.isPaidStripeRecord(record) && this.recordMatchesPayment(record, type))
      .reduce((sum, record) => sum + this.centsToEuros(
        record.amount
        ?? record.balanceAmount
        ?? record.remainingAmount
        ?? record.extraServiceAmount
        ?? record.skipperAmount
        ?? record.depositAmount
        ?? record.amount_total
        ?? record.total
        ?? record.metadata?.amount
        ?? 0
      ), 0);
  }

  private hasPaidStripeRecordFor(booking: any, type: string): boolean {
    return this.paidStripeAmountFor(booking, type) > 0;
  }


  private termsAcceptanceMetadata(): {
    termsAccepted: boolean;
    tncAccepted: boolean;
    customerTermsAccepted: boolean;
    termsAcceptedAt: number | string | null;
    tncAcceptedAt: number | string | null;
  } {
    const booking: any = this.vm?.display || {};
    // Imported/external bookings can be confirmed without carrying the legacy
    // tncAccepted boolean. The workflow already shows the terms step as complete,
    // so preserve that canonical state when creating the warranty SetupIntent.
    const accepted = this.vm?.termsAccepted === true
      || booking.termsAccepted === true
      || booking.tncAccepted === true
      || booking.customerTermsAccepted === true
      || ['confirmed', 'completed'].includes(String(booking.bookingRequestStatus || booking.bookingStatus || booking.status || '').toLowerCase())
      || ['accepted', 'confirmed'].includes(String(booking.offerStatus || '').toLowerCase());
    const acceptedAt = booking.termsAcceptedAt
      || booking.tncAcceptedAt
      || booking.acceptedTermsAt
      || booking.offerAcceptedAt
      || booking.acceptedAt
      || (accepted ? Date.now() : null);

    return {
      termsAccepted: accepted,
      tncAccepted: accepted,
      customerTermsAccepted: accepted,
      termsAcceptedAt: acceptedAt,
      tncAcceptedAt: acceptedAt,
    };
  }

  private clearContradictoryTermsError(): void {
    if (this.vm?.termsAccepted !== true || !this.error) return;
    const normalized = String(this.error).toLowerCase();
    if (normalized.includes('term') && normalized.includes('accept')) {
      this.error = '';
    }
  }

  canPayDepositOnline(): boolean {
    // The booking details page is now the unique customer payment cockpit.
    // We no longer expose a separate deposit-only button here; the Alegria
    // button pays whatever is still due to Alegria.
    return false;
  }

  payDepositOnline(): void {
    if (!this.vm || !this.canPayDepositOnline() || this.payingAlegria) return;
    const booking = this.vm.display || {};
    const bookingId = this.vm.bookingId || booking.bookingId || this.bookingId;
    const amount = this.number(booking.depositAmount || this.vm.depositAmount || 0);
    if (!bookingId || amount <= 0) return;

    this.payingAlegria = true;
    this.error = '';
    const bookingUrl = `${window.location.origin}/bookings/${encodeURIComponent(bookingId)}`;
    this.bookingApi.createDepositCheckout({
      ...this.termsAcceptanceMetadata(),
      bookingId,
      offerId: booking.offerId || bookingId,
      ownerId: booking.ownerId || 'alegria',
      amount,
      depositAmount: amount,
      totalAmount: this.vm.totalCustomerCost,
      currency: 'eur',
      paymentType: 'deposit',
      customerEmail: booking.email || booking.customerEmail || '',
      customerName: booking.customerName || booking.displayName || '',
      customerPhone: booking.phone || booking.customerPhone || '',
      outingType: booking.outingType || '',
      outingDate: booking.outingDate || booking.date || '',
      successUrl: `${bookingUrl}?payment=success&paymentType=deposit&session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${bookingUrl}?payment=cancelled&paymentType=deposit`,
    }).subscribe({
      next: (response: any) => {
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) {
          window.location.href = url;
          return;
        }
        this.payingAlegria = false;
        this.error = this.t('stripeCheckoutError');
      },
      error: (error: any) => {
        this.payingAlegria = false;
        this.error = error?.error?.message || error?.message || this.t('stripeCheckoutError');
        this.clearContradictoryTermsError();
      },
    });
  }

  canPayAlegriaOnline(): boolean {
    if (!this.vm || this.editMode) return false;
    return this.vm.remainingAlegriaRevenue > 0;
  }

  payAlegriaOnline(): void {
    if (!this.vm || !this.canPayAlegriaOnline() || this.payingAlegria) return;
    const booking = this.vm.display || {};
    const bookingId = this.vm.bookingId || booking.bookingId || this.bookingId;
    const amount = this.vm.remainingAlegriaRevenue;
    if (!bookingId || amount <= 0) return;

    this.payingAlegria = true;
    this.error = '';
    const bookingUrl = `${window.location.origin}/bookings/${encodeURIComponent(bookingId)}`;
    this.savePendingAlegriaPayment(bookingId, amount);

    this.bookingApi.createBalanceCheckout({
      ...this.termsAcceptanceMetadata(),
      bookingId,
      offerId: booking.offerId || bookingId,
      ownerId: booking.ownerId || 'alegria',
      amount,
      balanceAmount: amount,
      totalAmount: this.vm.totalCustomerCost,
      currency: 'eur',
      paymentType: 'alegria_balance',
      customerEmail: booking.email || booking.customerEmail || '',
      customerName: booking.customerName || booking.displayName || '',
      customerPhone: booking.phone || booking.customerPhone || '',
      outingType: booking.outingType || '',
      outingDate: booking.outingDate || booking.date || '',
      successUrl: `${bookingUrl}?payment=success&paymentType=alegria_balance&session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${bookingUrl}?payment=cancelled&paymentType=alegria_balance`,
    }).subscribe({
      next: (response: any) => {
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) {
          window.location.href = url;
          return;
        }
        this.payingAlegria = false;
        this.error = this.t('stripeCheckoutError');
      },
      error: (error: any) => {
        this.payingAlegria = false;
        this.error = error?.error?.error || error?.error?.message || error?.message || this.t('stripeCheckoutError');
        this.clearContradictoryTermsError();
      }
    });
  }
  private async savePendingAlegriaPayment(bookingId: string, amount: number): Promise<void> {
    if (!bookingId || amount <= 0) return;
    try {
      const current = await this.bookingApi.getBooking(bookingId).toPromise() as any;
      const raw = current?.raw || current || this.vm?.display || {};
      const payments = { ...(raw.payments || {}) };
      await this.bookingApi.updateBooking(bookingId, {
        payments: {
          ...payments,
          pendingAlegria: {
            amount,
            status: 'checkout_started',
            paymentType: 'alegria_balance',
            createdAt: Date.now(),
          },
        },
      } as any);
    } catch {
      // Non-blocking: the Stripe return handler and webhook/reconciliation can still update the booking.
    }
  }

  private pendingAlegriaCashAmount(): number {
    const booking: any = this.vm?.display || {};
    const payments = booking.payments || {};
    return this.firstPositive(
      payments.alegria?.amountDue,
      payments.balance?.amountDue,
      booking.alegriaCashSelectedAmount,
      booking.balanceAmount,
      booking.remainingAlegriaRevenue,
      booking.remainingFeesAmount,
      this.vm?.remainingAlegriaRevenue,
    );
  }

  canConfirmAlegriaCashReceived(): boolean {
    if (!this.vm || this.editMode) return false;
    // The amount still due is the single source of truth. Legacy flags such as
    // balancePaid may describe an old payment phase and must not hide the admin
    // cash-entry control when a boat/Alegria balance remains outstanding.
    return (this.vm.isAdmin || this.isCurrentUserAdmin()) &&
      Number(this.vm.remainingAlegriaRevenue || 0) > 0.009;
  }

  async confirmAlegriaCashReceived(): Promise<void> {
    if (!this.vm || !this.canConfirmAlegriaCashReceived() || this.payingAlegria) return;
    const booking: any = this.vm.display || {};
    const bookingId = this.vm.bookingId || booking.bookingId || this.bookingId;
    if (!bookingId) return;

    const remaining = Math.max(0, Number(this.vm.remainingAlegriaRevenue || 0));
    const amount = Math.min(remaining, Math.max(0, Number(this.adminAlegriaCashAmount || 0)));
    if (amount <= 0) {
      this.error = this.t('enterValidAmount');
      return;
    }

    this.payingAlegria = true;
    this.error = '';
    const now = Date.now();
    const payments = { ...(booking.payments || {}) };
    const previousCash = Number(booking.alegriaCashReceivedAmount || payments.alegria?.cashAmountPaid || 0) || 0;
    const cumulativeCash = Math.round((previousCash + amount) * 100) / 100;
    const fullyPaid = amount >= remaining - 0.009;

    try {
      await this.bookingApi.updateBooking(bookingId, {
        balancePaid: fullyPaid,
        balanceStatus: fullyPaid ? 'paid' : 'partially_paid',
        balancePaidAmount: Math.round((Number(booking.balancePaidAmount || 0) + amount) * 100) / 100,
        balancePaidAt: now,
        alegriaPaymentMethod: this.vm.alegriaPaidAmount > 0 ? 'mixed' : 'cash',
        balancePaymentMethod: this.vm.alegriaPaidAmount > 0 ? 'mixed' : 'cash',
        alegriaPaymentStatus: fullyPaid ? 'paid' : 'partially_paid',
        balancePaymentStatus: fullyPaid ? 'paid' : 'partially_paid',
        alegriaCashReceived: cumulativeCash > 0,
        alegriaCashReceivedAmount: cumulativeCash,
        alegriaCashReceivedAt: now,
        payments: {
          ...payments,
          alegria: {
            ...(payments.alegria || {}),
            method: this.vm.alegriaPaidAmount > 0 ? 'mixed' : 'cash',
            status: fullyPaid ? 'paid' : 'partially_paid',
            paid: fullyPaid,
            cashAmountPaid: cumulativeCash,
            amountPaid: Math.round((Number(this.vm.alegriaPaidAmount || 0) + amount) * 100) / 100,
            receivedAt: now,
          },
          balance: {
            ...(payments.balance || {}),
            method: this.vm.alegriaPaidAmount > 0 ? 'mixed' : 'cash',
            status: fullyPaid ? 'paid' : 'partially_paid',
            paid: fullyPaid,
            cashAmountPaid: cumulativeCash,
            amountPaid: Math.round((Number(this.vm.alegriaPaidAmount || 0) + amount) * 100) / 100,
            paidAt: now,
          },
        },
      } as any);
      this.adminAlegriaCashAmount = null;
      this.actionMessage = this.t('alegriaCashReceivedConfirmed');
      await this.loadBooking();
    } catch (error: any) {
      this.error = error?.message || this.t('saveError');
    } finally {
      this.payingAlegria = false;
    }
  }

  private pendingSkipperCashAmount(): number {
    const booking: any = this.vm?.display || {};
    const payments = booking.payments || {};
    return this.firstPositive(
      payments.skipper?.amountDue,
      payments.direct?.skipperCashAmount,
      booking.skipperCashAmount,
      booking.proposalSkipperPrice,
      this.vm?.remainingSkipperFee,
      this.vm?.skipperCost,
    );
  }

  canConfirmSkipperPaid(): boolean {
    if (!this.vm || this.editMode) return false;
    const booking: any = this.vm.display || {};
    const alreadyPaid = booking.skipperPaid === true ||
      String(booking.skipperStatus || booking.skipperPaymentStatus || booking.payments?.skipper?.status || booking.payments?.direct?.skipperStatus || '').toLowerCase() === 'paid';
    return (this.vm.isAdmin || this.isCurrentUserAdmin()) && !alreadyPaid && this.pendingSkipperCashAmount() > 0;
  }

  async confirmSkipperPaid(): Promise<void> {
    if (!this.vm || !this.canConfirmSkipperPaid() || this.payingSkipper) return;
    const booking: any = this.vm.display || {};
    const bookingId = this.vm.bookingId || booking.bookingId || this.bookingId;
    if (!bookingId) return;

    const remaining = Math.max(0, Number(this.vm.remainingSkipperFee || 0));
    const amount = Math.min(remaining, Math.max(0, Number(this.adminSkipperCashAmount || 0)));
    if (amount <= 0) {
      this.error = this.t('enterValidAmount');
      return;
    }

    this.payingSkipper = true;
    this.error = '';
    const now = Date.now();
    const payments = { ...(booking.payments || {}) };
    const previousCash = Number(booking.skipperCashReceivedAmount || payments.skipper?.cashAmountPaid || payments.direct?.skipperCashPaidAmount || 0) || 0;
    const cumulativeCash = Math.round((previousCash + amount) * 100) / 100;
    const fullyPaid = amount >= remaining - 0.009;
    payments.direct = {
      ...(payments.direct || {}),
      skipperPaid: fullyPaid,
      skipperStatus: fullyPaid ? 'paid' : 'partially_paid',
      skipperCashPaidAmount: cumulativeCash,
      skipperPaidAt: now,
    };
    payments.skipper = {
      ...(payments.skipper || {}),
      method: this.vm.skipperPaidAmount > 0 ? 'mixed' : 'cash',
      status: fullyPaid ? 'paid' : 'partially_paid',
      paid: fullyPaid,
      cashAmountPaid: cumulativeCash,
      amountPaid: Math.round((Number(this.vm.skipperPaidAmount || 0) + amount) * 100) / 100,
      paidAt: now,
    };

    try {
      await this.bookingApi.updateBooking(bookingId, {
        skipperPaid: fullyPaid,
        skipperStatus: fullyPaid ? 'paid' : 'partially_paid',
        skipperPaidAt: now,
        skipperPaymentMethod: this.vm.skipperPaidAmount > 0 ? 'mixed' : 'cash',
        skipperPaymentStatus: fullyPaid ? 'paid' : 'partially_paid',
        skipperPaidAmount: Math.round((Number(this.vm.skipperPaidAmount || 0) + amount) * 100) / 100,
        skipperCashReceivedAmount: cumulativeCash,
        payments,
      } as any);
      this.adminSkipperCashAmount = null;
      await this.loadBooking();
    } catch (error: any) {
      this.error = error?.message || this.t('saveError');
    } finally {
      this.payingSkipper = false;
    }
  }



  isAlegriaCashSelected(): boolean {
    const booking: any = this.vm?.display || {};
    const payments = booking.payments || {};
    const method = String(
      booking.alegriaPaymentMethod ||
      booking.balancePaymentMethod ||
      payments.alegria?.method ||
      payments.balance?.method ||
      ''
    ).toLowerCase();
    const status = String(
      booking.alegriaPaymentStatus ||
      booking.balancePaymentStatus ||
      payments.alegria?.status ||
      payments.balance?.status ||
      ''
    ).toLowerCase();
    return method === 'cash' || status === 'cash_selected' || status === 'cash_pending';
  }

  async selectAlegriaCash(): Promise<void> {
    if (!this.vm || this.editMode || this.vm.remainingAlegriaRevenue <= 0 || this.selectingAlegriaCash) return;
    const booking: any = this.vm.display || {};
    const bookingId = this.vm.bookingId || booking.bookingId || this.bookingId;
    if (!bookingId) return;

    this.selectingAlegriaCash = true;
    this.error = '';
    const payments = { ...(booking.payments || {}) };
    const now = Date.now();
    try {
      await this.bookingApi.updateBooking(bookingId, {
        alegriaPaymentMethod: 'cash',
        balancePaymentMethod: 'cash',
        alegriaPaymentStatus: 'cash_selected',
        balancePaymentStatus: 'cash_selected',
        payments: {
          ...payments,
          alegria: {
            ...(payments.alegria || {}),
            method: 'cash',
            status: 'cash_selected',
            amountDue: this.vm.remainingAlegriaRevenue,
            selectedAt: now,
          },
        },
      } as any);
      this.actionMessage = this.t('cashPaymentSelected');
      await this.loadBooking();
    } catch (error: any) {
      this.error = error?.message || this.t('saveError');
    } finally {
      this.selectingAlegriaCash = false;
    }
  }

  isSkipperCashSelected(): boolean {
    const booking: any = this.vm?.display || {};
    const payments = booking.payments || {};
    const method = String(
      booking.skipperPaymentMethod ||
      payments.skipper?.method ||
      payments.direct?.skipperPaymentMethod ||
      ''
    ).toLowerCase();
    const status = String(
      booking.skipperPaymentStatus ||
      booking.skipperStatus ||
      payments.skipper?.status ||
      payments.direct?.skipperStatus ||
      ''
    ).toLowerCase();
    return method === 'cash' || status === 'cash_selected' || status === 'cash_pending';
  }

  async selectSkipperCash(): Promise<void> {
    if (!this.vm || this.editMode || this.vm.remainingSkipperFee <= 0 || this.selectingSkipperCash) return;
    const booking: any = this.vm.display || {};
    const bookingId = this.vm.bookingId || booking.bookingId || this.bookingId;
    if (!bookingId) return;

    this.selectingSkipperCash = true;
    this.error = '';
    const payments = { ...(booking.payments || {}) };
    const now = Date.now();
    try {
      await this.bookingApi.updateBooking(bookingId, {
        skipperPaymentMethod: 'cash',
        skipperPaymentStatus: 'cash_selected',
        payments: {
          ...payments,
          skipper: {
            ...(payments.skipper || {}),
            method: 'cash',
            status: 'cash_selected',
            amountDue: this.vm.remainingSkipperFee,
            selectedAt: now,
          },
        },
      } as any);
      this.actionMessage = this.t('cashPaymentSelected');
      await this.loadBooking();
    } catch (error: any) {
      this.error = error?.message || this.t('saveError');
    } finally {
      this.selectingSkipperCash = false;
    }
  }



  canPaySkipperOnline(): boolean {
    if (!this.vm || this.editMode) return false;
    return this.vm.remainingSkipperFee > 0;
  }

  paySkipperOnline(): void {
    if (!this.vm || !this.canPaySkipperOnline() || this.payingSkipper) return;
    const booking = this.vm.display || {};
    const bookingId = this.vm.bookingId || booking.bookingId || this.bookingId;
    const amount = this.vm.remainingSkipperFee;
    if (!bookingId || amount <= 0) return;

    this.payingSkipper = true;
    this.error = '';
    const bookingUrl = `${window.location.origin}/bookings/${encodeURIComponent(bookingId)}`;
    this.bookingApi.createSkipperFeeCheckout({
      ...this.termsAcceptanceMetadata(),
      bookingId,
      offerId: booking.offerId || bookingId,
      ownerId: booking.ownerId || 'alegria',
      amount,
      skipperAmount: amount,
      totalAmount: this.vm.totalCustomerCost,
      currency: 'eur',
      customerEmail: booking.email || booking.customerEmail || '',
      customerName: booking.customerName || booking.displayName || '',
      customerPhone: booking.phone || booking.customerPhone || '',
      outingType: booking.outingType || '',
      outingDate: booking.outingDate || booking.date || '',
      successUrl: `${bookingUrl}?payment=success&paymentType=skipper_fee&session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${bookingUrl}?payment=cancelled&paymentType=skipper_fee`,
    }).subscribe({
      next: (response: any) => {
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) {
          window.location.href = url;
          return;
        }
        this.payingSkipper = false;
        this.error = this.t('stripeCheckoutError');
      },
      error: (error: any) => {
        this.payingSkipper = false;
        this.error = error?.error?.error || error?.error?.message || error?.message || this.t('stripeCheckoutError');
        this.clearContradictoryTermsError();
      }
    });
  }



  canPayAdditionalOnline(): boolean {
    return !!this.vm && !this.editMode && Number(this.extraPaymentAmount || 0) > 0 && !this.payingExtra;
  }

  payAdditionalOnline(): void {
    if (!this.vm || !this.canPayAdditionalOnline()) return;
    const booking = this.vm.display || {};
    const bookingId = this.vm.bookingId || booking.bookingId || this.bookingId;
    const amount = Number(this.extraPaymentAmount || 0);
    if (!bookingId || amount <= 0) return;

    const kind = this.extraPaymentKind || 'tip';
    const idPrefix = kind === 'tip' ? 'tip' : kind === 'damage_charge' ? 'damage' : 'extra';
    const adhocPaymentId = `${idPrefix}_${Date.now()}`;
    const description = (this.extraPaymentDescription || '').trim()
      || (kind === 'tip' ? this.t('tipPayment') : kind === 'damage_charge' ? this.t('damagePayment') : this.t('extraServicePayment'));
    const bookingUrl = `${window.location.origin}/bookings/${encodeURIComponent(bookingId)}`;

    this.payingExtra = true;
    this.error = '';
    this.actionMessage = '';
    this.bookingApi.createAdhocCheckout({
      bookingId,
      adhocPaymentId,
      ownerId: booking.ownerId || 'alegria',
      amount,
      description,
      currency: 'eur',
      customerEmail: booking.email || booking.customerEmail || '',
      customerName: booking.customerName || booking.displayName || '',
      successUrl: `${bookingUrl}?payment=success&paymentType=${encodeURIComponent(kind)}&adhocPaymentId=${encodeURIComponent(adhocPaymentId)}&session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${bookingUrl}?payment=cancelled&paymentType=${encodeURIComponent(kind)}&adhocPaymentId=${encodeURIComponent(adhocPaymentId)}`,
    }).subscribe({
      next: (response: any) => {
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) {
          window.location.href = url;
          return;
        }
        this.payingExtra = false;
        this.error = this.t('stripeCheckoutError');
      },
      error: (error: any) => {
        this.payingExtra = false;
        this.error = error?.error?.error || error?.error?.message || error?.message || this.t('stripeCheckoutError');
        this.clearContradictoryTermsError();
      }
    });
  }

  canAdminChargeWarranty(): boolean {
    if (!this.vm || !this.vm.isAdmin || this.editMode || this.adminChargingWarranty) return false;
    if (this.isWarrantyReleased(this.vm.display) || this.vm.display?.canChargeWarranty === false) return false;
    return Number(this.adminWarrantyChargeAmount || 0) > 0;
  }

  async chargeWarrantyForDamage(): Promise<void> {
    if (!this.vm || !this.canAdminChargeWarranty()) return;
    const bookingId = this.vm.bookingId || this.bookingId;
    const amount = Number(this.adminWarrantyChargeAmount || 0);
    const reason = (this.adminWarrantyChargeReason || '').trim();
    if (!reason) {
      this.error = this.t('damageReasonRequired');
      return;
    }

    this.adminChargingWarranty = true;
    this.error = '';
    this.actionMessage = '';

    // Persist the admin entry before contacting Stripe. This keeps the amount/reason
    // visible after refresh and also records failed Stripe attempts for follow-up.
    try {
      await this.bookingApi.updateBooking(bookingId, {
        pendingWarrantyChargeAmount: amount,
        pendingWarrantyChargeAmountCents: Math.round(amount * 100),
        pendingWarrantyChargeReason: reason,
        pendingWarrantyChargeStatus: 'requested',
        pendingWarrantyChargeRequestedAt: Date.now(),
      } as any);
    } catch {
      // Stripe remains the source of truth for the actual charge; do not block the attempt.
    }

    this.bookingApi.chargeWarranty(bookingId, amount, reason, this.vm.display?.ownerId || 'alegria').subscribe({
      next: (result: any) => {
        const chargedCents = Number(result?.amount || Math.round(amount * 100));
        this.adminWarrantyChargeAmount = chargedCents / 100;
        this.actionMessage = this.t('warrantyChargeSuccess');
        this.adminWarrantyChargeReason = reason;
        this.adminChargingWarranty = false;
        this.loadBooking();
      },
      error: async (error: any) => {
        this.adminChargingWarranty = false;
        try {
          await this.bookingApi.updateBooking(bookingId, {
            pendingWarrantyChargeAmount: amount,
            pendingWarrantyChargeAmountCents: Math.round(amount * 100),
            pendingWarrantyChargeReason: reason,
            pendingWarrantyChargeStatus: 'failed',
            pendingWarrantyChargeError: error?.error?.error || error?.error?.message || error?.message || '',
            pendingWarrantyChargeModifiedAt: Date.now(),
          } as any);
        } catch {}
        this.error = error?.error?.error || error?.error?.message || error?.message || this.t('warrantyChargeError');
      }
    });
  }

  isWarrantyReleased(booking: any = this.vm?.display): boolean {
    const status = String(booking?.warrantyStatus || booking?.payments?.warranty?.status || '').toLowerCase();
    return booking?.warrantyReleased === true || status === 'released';
  }

  canAdminReleaseWarranty(): boolean {
    if (!this.vm || !this.vm.isAdmin || this.editMode || this.adminReleasingWarranty) return false;
    const booking: any = this.vm.display || {};
    if (this.isWarrantyReleased(booking) || !this.hasWarrantyCardRegistered(booking)) return false;
    if (this.warrantyChargedAmount > 0 || booking.damageCharged === true) return false;
    const status = String(booking.bookingStatus || booking.status || '').toLowerCase();
    const outingDate = booking.outingDate || booking.date;
    const outingIsPastOrToday = outingDate ? new Date(`${String(outingDate).slice(0, 10)}T23:59:59`).getTime() <= Date.now() : false;
    return ['completed', 'closed', 'finished', 'terminated'].includes(status) || outingIsPastOrToday;
  }

  releaseWarranty(): void {
    if (!this.vm || !this.canAdminReleaseWarranty()) return;
    const bookingId = this.vm.bookingId || this.bookingId;
    this.adminReleasingWarranty = true;
    this.error = '';
    this.actionMessage = '';
    this.bookingApi.releaseWarranty(bookingId, this.vm.display?.ownerId || 'alegria', 'admin').subscribe({
      next: () => {
        this.adminReleasingWarranty = false;
        this.actionMessage = this.t('warrantyReleaseSuccess');
        this.loadBooking();
      },
      error: (error: any) => {
        this.adminReleasingWarranty = false;
        this.error = error?.error?.error || error?.error?.message || error?.message || this.t('warrantyReleaseError');
      }
    });
  }

  get savedWarrantyChargeAmount(): number {
    const display: any = this.vm?.display || {};
    const cents = Number(display.lastWarrantyChargeAmount || display.warrantyChargeAmountCents || 0);
    if (cents > 0) return cents / 100;
    return Number(display.pendingWarrantyChargeAmount || 0);
  }

  get savedWarrantyChargeReason(): string {
    const display: any = this.vm?.display || {};
    return String(display.warrantyChargeReason || display.pendingWarrantyChargeReason || '').trim();
  }

  get savedWarrantyChargeStatus(): string {
    const display: any = this.vm?.display || {};
    return String(display.lastWarrantyChargeStatus || display.pendingWarrantyChargeStatus || display.warrantyChargeStatus || '').trim();
  }

  get savedWarrantyChargeDate(): any {
    const display: any = this.vm?.display || {};
    return display.lastWarrantyChargeAt || display.pendingWarrantyChargeModifiedAt || display.pendingWarrantyChargeRequestedAt || display.warrantyChargeAt || '';
  }

  get savedWarrantyChargeStripeId(): string {
    const display: any = this.vm?.display || {};
    return String(display.lastWarrantyChargePaymentIntentId || display.warrantyChargePaymentIntentId || display.pendingWarrantyChargePaymentIntentId || '').trim();
  }

  get savedWarrantyChargeMethodLabel(): string {
    const display: any = this.vm?.display || {};
    const method = String(
      display.lastWarrantyChargePaymentMethod ||
      display.warrantyChargePaymentMethod ||
      display.warrantyPaymentChoice ||
      display.warrantyMethod ||
      ''
    ).toLowerCase();
    return method.includes('cash') ? this.t('cash') : (this.savedWarrantyChargeStripeId ? 'Stripe' : this.warrantyMethodLabel(method));
  }

  get savedWarrantyChargeStatusLabel(): string {
    const status = this.savedWarrantyChargeStatus.toLowerCase();
    if (['paid', 'succeeded', 'captured', 'success'].includes(status)) return this.t('paid');
    if (status === 'processing') return this.t('processing');
    if (status === 'failed') return this.t('failed');
    return this.savedWarrantyChargeStatus;
  }

  get warrantyChargedAmount(): number {
    const display: any = this.vm?.display || {};
    const cents = Number(
      display.warrantyDamageChargedTotalCents ||
      display.warrantyChargedTotalCents ||
      display.totalWarrantyChargesCents ||
      display.lastWarrantyChargeAmount ||
      display.warrantyChargeAmountCents ||
      0
    );
    if (cents > 0) return cents / 100;
    const charges = this.normalizedFinancialRecords(display.warrantyDamageCharges || display.warrantyCharges || display.damageCharges);
    const total = charges.reduce((sum: number, item: any) => sum + this.moneyValue(item.amountEuros ?? item.amount ?? item.amountCents), 0);
    return total > 0 ? total : this.savedWarrantyChargeAmount;
  }

  get warrantyRemainingAmount(): number {
    return Math.max(0, this.warrantyAmount() - this.warrantyChargedAmount);
  }

  get warrantyUsagePercent(): number {
    const total = this.warrantyAmount();
    return total > 0 ? Math.min(100, Math.max(0, (this.warrantyChargedAmount / total) * 100)) : 0;
  }

  private refreshFinancialWorkspace(): void {
    if (!this.vm) {
      this.financialHistoryRows = [];
      this.additionalPaymentRows = [];
      return;
    }

    const display: any = this.vm.display || {};
    const rows: any[] = (this.vm.paymentHistoryRows || []).map((row: any) => ({
      ...row,
      kind: 'payment',
      signedAmount: Number(row.amount || 0),
    }));

    const adHocRecords = this.normalizedFinancialRecords(display.payments?.adHoc || display.payments?.extraServices || display.adHocPayments);
    adHocRecords.forEach((item: any) => {
      const amount = this.adHocPaymentAmountInEuros(item);
      const type = String(item.paymentType || item.type || item.category || '').toLowerCase();
      const label = type === 'tip'
        ? this.t('tipPayment')
        : (type.includes('damage')
          ? this.t('damagePayment')
          : (type.includes('extra') ? this.t('extraServicePayment') : this.t('additionalPayments')));

      rows.push({
        label,
        amount,
        signedAmount: Math.abs(amount),
        method: item.method || (item.stripeCheckoutSessionId || item.checkoutSessionId ? 'Stripe' : this.t('recorded')),
        status: item.status || item.paymentStatus || (item.paid === true ? this.t('paid') : this.t('recorded')),
        date: this.formatDisplayDate(item.paidAt || item.modifiedTS || item.createdTS || item.createdAt),
        description: item.description || item.reason || '',
        reference: item.paymentId || item.stripePaymentIntentId || item.stripeCheckoutSessionId || item.checkoutSessionId || '',
        kind: 'additional',
      });
    });

    const damageRecords = this.normalizedFinancialRecords(display.warrantyDamageCharges || display.warrantyCharges || display.damageCharges);
    damageRecords.forEach((item: any) => {
      const amount = this.moneyValue(item.amountEuros ?? item.amount ?? item.amountCents);
      rows.push({
        label: this.t('damageCharge'),
        amount,
        signedAmount: -Math.abs(amount),
        method: item.paymentIntentId || item.stripePaymentIntentId ? 'Stripe' : this.warrantyMethodLabel(display.warrantyPaymentChoice || display.warrantyMethod),
        status: item.status || this.t('recorded'),
        date: this.formatDisplayDate(item.chargedAt || item.createdAt || item.createdTS || item.modifiedAt),
        description: item.reason || item.description || '',
        reference: item.paymentIntentId || item.stripePaymentIntentId || '',
        kind: 'damage',
      });
    });

    if (!damageRecords.length && this.savedWarrantyChargeAmount > 0) {
      rows.push({
        label: this.t('damageCharge'),
        amount: this.savedWarrantyChargeAmount,
        signedAmount: -Math.abs(this.savedWarrantyChargeAmount),
        method: this.savedWarrantyChargeStripeId ? 'Stripe' : this.warrantyMethodLabel(display.warrantyPaymentChoice || display.warrantyMethod),
        status: this.savedWarrantyChargeStatus || this.t('recorded'),
        date: this.formatDisplayDate(this.savedWarrantyChargeDate),
        description: this.savedWarrantyChargeReason,
        reference: this.savedWarrantyChargeStripeId,
        kind: 'damage',
      });
    }

    const refunds = this.normalizedFinancialRecords(display.refunds || display.paymentRefunds || display.stripeRefunds);
    refunds.forEach((item: any) => {
      const amount = this.moneyValue(item.amountEuros ?? item.amount ?? item.amountCents);
      rows.push({
        label: this.t('refund'),
        amount,
        signedAmount: -Math.abs(amount),
        method: 'Stripe',
        status: item.status || this.t('recorded'),
        date: this.formatDisplayDate(item.refundedAt || item.createdAt || item.createdTS || item.modifiedAt),
        description: item.reason || item.description || '',
        reference: item.refundId || item.stripeRefundId || '',
        kind: 'refund',
      });
    });

    this.financialHistoryRows = rows
      .filter((row: any) => Number(row.amount || 0) > 0)
      .reverse();

    this.additionalPaymentRows = this.financialHistoryRows
      .filter((row: any) => row.kind === 'additional');
  }

  private normalizedFinancialRecords(value: any): any[] {
    if (Array.isArray(value)) return value;
    if (value && typeof value === 'object') return Object.values(value);
    return [];
  }

  private moneyValue(value: any): number {
    const amount = Number(value || 0);
    if (!Number.isFinite(amount)) return 0;
    return amount > 10000 ? amount / 100 : amount;
  }

  private adHocPaymentAmountInEuros(payment: any): number {
    if (payment?.amountEuros != null) return this.number(payment.amountEuros);
    if (payment?.amountCents != null) return this.number(payment.amountCents) / 100;
    if (payment?.amount_total != null) return this.number(payment.amount_total) / 100;

    // Additional Stripe payments are persisted in cents in payments.adHoc.
    return this.number(payment?.amount) / 100;
  }

  canAdminRefund(): boolean {
    return !!this.vm && this.vm.isAdmin && !this.editMode && Number(this.adminRefundAmount || 0) > 0 && !this.adminRefunding;
  }

  refundCustomer(): void {
    if (!this.vm || !this.canAdminRefund()) return;
    const bookingId = this.vm.bookingId || this.bookingId;
    const amount = Number(this.adminRefundAmount || 0);
    this.adminRefunding = true;
    this.error = '';
    this.actionMessage = '';
    this.bookingApi.refundBooking({
      bookingId,
      ownerId: this.vm.display?.ownerId || 'alegria',
      amount,
      paymentType: this.adminRefundPaymentType || 'balance',
      reason: (this.adminRefundReason || '').trim(),
      paymentIntentId: (this.adminRefundPaymentIntentId || '').trim() || undefined,
    } as any).subscribe({
      next: () => {
        this.actionMessage = this.t('refundSuccess');
        this.adminRefundAmount = null;
        this.adminRefundReason = '';
        this.adminRefundPaymentIntentId = '';
        this.adminRefunding = false;
        this.loadBooking();
      },
      error: (error: any) => {
        this.adminRefunding = false;
        this.error = error?.error?.error || error?.error?.message || error?.message || this.t('refundError');
      }
    });
  }


  warrantyAmount(): number {
    const booking = this.vm?.display || {};
    return Number(booking.warrantyAmount || booking.cautionAmount || booking.securityDepositAmount || 500) || 500;
  }

  canRegisterWarrantyCard(): boolean {
    if (!this.vm || this.editMode) return false;
    const booking = this.vm.display || {};
    const cardRegistered = this.hasWarrantyCardRegistered(booking);
    return this.warrantyAmount() > 0 && !cardRegistered && !this.isWarrantyReleased(booking);
  }

  async registerWarrantyCardOnline(): Promise<void> {
    if (!this.vm || !this.canRegisterWarrantyCard() || this.registeringWarrantyCard) return;
    const booking = this.vm.display || {};
    const bookingId = this.vm.bookingId || booking.bookingId || this.bookingId;
    if (!bookingId) return;

    this.registeringWarrantyCard = true;
    this.error = '';
    try {
      await this.bookingApi.updateBooking(bookingId, {
        warrantyPaymentChoice: 'stripe_card',
        warrantyMethod: 'stripe_card',
        warrantyStatus: 'card_selected',
        warrantySelected: true,
        warrantySelectedAt: Date.now(),
      } as any);
    } catch (error) {
      // Continue to Stripe setup even if the local pre-save failed; the completion callback will update the booking.
    }
    const bookingUrl = `${window.location.origin}/bookings/${encodeURIComponent(bookingId)}`;
    this.bookingApi.createWarrantySetup({
      ...this.termsAcceptanceMetadata(),
      bookingId,
      offerId: booking.offerId || bookingId,
      ownerId: booking.ownerId || 'alegria',
      warrantyAmount: this.warrantyAmount(),
      amount: this.warrantyAmount(),
      currency: 'eur',
      customerEmail: booking.email || booking.customerEmail || '',
      customerName: booking.customerName || booking.displayName || '',
      customerPhone: booking.phone || booking.customerPhone || '',
      outingType: booking.outingType || '',
      outingDate: booking.outingDate || booking.date || '',
      successUrl: `${bookingUrl}?warranty=success&session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${bookingUrl}?warranty=cancelled`,
    }).subscribe({
      next: (response: any) => {
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) {
          window.location.href = url;
          return;
        }
        this.registeringWarrantyCard = false;
        this.error = this.t('warrantyCheckoutError');
      },
      error: (error: any) => {
        this.registeringWarrantyCard = false;
        this.error = error?.error?.error || error?.error?.message || error?.message || this.t('warrantyCheckoutError');
        this.clearContradictoryTermsError();
      }
    });
  }


  canSelectCashWarranty(): boolean {
    if (!this.vm || this.editMode) return false;
    const booking = this.vm.display || {};
    if (this.isWarrantyReleased(booking)) return false;
    const amount = this.warrantyAmount();
    const method = String(booking.warrantyPaymentChoice || booking.warrantyMethod || '').toLowerCase();
    const status = String(booking.warrantyStatus || '').toLowerCase();
    return amount > 0 && !method.includes('cash') && !status.includes('cash');
  }

  async selectCashWarranty(): Promise<void> {
    if (!this.vm || !this.canSelectCashWarranty()) return;
    const booking = this.vm.display || {};
    const bookingId = this.vm.bookingId || booking.bookingId || this.bookingId;
    if (!bookingId) return;
    this.registeringWarrantyCard = true;
    this.error = '';
    try {
      await this.bookingApi.updateBooking(bookingId, {
        warrantyPaymentChoice: 'cash',
        warrantyMethod: 'cash',
        warrantyStatus: 'cash_selected',
        warrantySelected: true,
        warrantySelectedAt: Date.now(),
        warrantyCardSelected: false,
        warrantyCashSelected: true,
      } as any);
      await this.loadBooking();
    } catch (error: any) {
      this.error = error?.message || this.t('saveError');
    } finally {
      this.registeringWarrantyCard = false;
    }
  }

  private hasWarrantyCardRegistered(booking: any): boolean {
    if (this.isWarrantyReleased(booking)) return false;
    const status = String(booking?.warrantyStatus || '').toLowerCase();
    const method = String(booking?.warrantyPaymentChoice || booking?.warrantyMethod || '').toLowerCase();
    // The currently selected warranty method wins. If the customer switches to cash,
    // an older saved card must not keep the UI stuck on "card registered".
    if (method.includes('cash') || status.includes('cash')) return false;
    const warrantyPayment = booking?.payments?.warranty || {};
    const paymentMethodId = booking?.warrantyPaymentMethodId || booking?.paymentMethodId || warrantyPayment?.paymentMethodId || warrantyPayment?.warrantyPaymentMethodId;
    const setupIntentId = booking?.warrantySetupIntentId || booking?.setupIntentId || warrantyPayment?.setupIntentId || warrantyPayment?.warrantySetupIntentId;
    const proofStatus = String(warrantyPayment?.status || '').toLowerCase();
    return !!paymentMethodId && (
      !!setupIntentId ||
      proofStatus.includes('warranty_card_saved') ||
      proofStatus.includes('setup_succeeded') ||
      proofStatus.includes('card_registered')
    );
  }

  private isCashWarrantySelected(booking: any): boolean {
    const status = String(booking?.warrantyStatus || '').toLowerCase();
    const method = String(booking?.warrantyPaymentChoice || booking?.warrantyMethod || '').toLowerCase();
    return method.includes('cash') || status.includes('cash');
  }

  private isWarrantyComplete(booking: any): boolean {
    if (this.isWarrantyReleased(booking)) return true;
    const amount = this.number(booking?.warrantyAmount || booking?.cautionAmount || booking?.securityDepositAmount || 500);
    if (amount <= 0) return true;
    const status = String(booking?.warrantyStatus || '').toLowerCase();
    return this.hasWarrantyCardRegistered(booking) || status.includes('cash_received') || booking?.warrantyCashReceived === true || booking?.warrantyCashConfirmed === true;
  }

  private isTermsAccepted(booking: any): boolean {
    const candidates = [
      booking,
      booking?.raw,
      booking?.raw?.raw,
      booking?.offer,
      booking?.raw?.offer,
      booking?.sourceOffer,
    ].filter(Boolean);

    const hasExplicitAcceptance = (obj: any): boolean => obj?.customerTermsAccepted === true ||
      obj?.tncAccepted === true ||
      obj?.termsAccepted === true ||
      obj?.acceptedTerms === true ||
      obj?.tcAccepted === true ||
      obj?.tAndCAccepted === true ||
      obj?.termsAndConditionsAccepted === true ||
      obj?.workflow?.termsAccepted === true ||
      obj?.bookingWorkflow?.termsAccepted === true ||
      obj?.terms?.accepted === true ||
      obj?.documents?.termsAccepted === true ||
      obj?.termsAcceptedStatus === 'accepted' ||
      obj?.termsStatus === 'accepted' ||
      obj?.termsAndConditionsStatus === 'accepted' ||
      obj?.acceptedTermsStatus === 'accepted';

    if (candidates.some(hasExplicitAcceptance)) return true;

    const hasAcceptanceAudit = (obj: any): boolean => !!(
      obj?.tncAcceptedAt ||
      obj?.termsAcceptedAt ||
      obj?.acceptedTermsAt ||
      obj?.tcAcceptedAt ||
      obj?.termsAndConditionsAcceptedAt ||
      obj?.workflow?.termsAcceptedAt ||
      obj?.bookingWorkflow?.termsAcceptedAt ||
      obj?.terms?.acceptedAt ||
      obj?.documents?.termsAcceptedAt ||
      obj?.tncAcceptedBy ||
      obj?.termsAcceptedBy ||
      obj?.acceptedTermsBy ||
      obj?.workflow?.termsAcceptedBy ||
      obj?.bookingWorkflow?.termsAcceptedBy ||
      obj?.terms?.acceptedBy ||
      obj?.documents?.termsAcceptedBy ||
      obj?.offerAcceptedAt ||
      obj?.acceptedAt ||
      obj?.confirmedAt ||
      obj?.bookingCreatedAt
    );

    if (candidates.some(hasAcceptanceAudit)) return true;

    const statusText = candidates.map((obj: any) => [
      obj?.status,
      obj?.offerStatus,
      obj?.bookingStatus,
      obj?.bookingRequestStatus,
      obj?.customerStatus,
      obj?.offerAccepted,
      obj?.accepted,
      obj?.confirmed,
    ].filter(Boolean).join(' ')).join(' ').toLowerCase();

    // Direct Alegria bookings are normally created only after the offer acceptance step,
    // where the customer has already accepted the terms and conditions. Some older booking
    // copies do not keep the offerId or the T&C audit fields, so do not block remaining
    // balance / skipper / warranty actions just because the booking copy is incomplete.
    const acceptedOrConfirmed = statusText.includes('accepted')
      || statusText.includes('confirmed')
      || statusText.includes('booking_created')
      || statusText.includes('paid')
      || statusText.includes('validated');

    if (acceptedOrConfirmed) return true;

    const bookingIdText = String(booking?.bookingId || booking?.id || this.bookingId || '').toLowerCase();
    const looksLikeConfirmedBooking = bookingIdText.startsWith('booking_')
      && !statusText.includes('cancel')
      && !statusText.includes('deleted');

    // A direct booking in this app is created after the offer acceptance stage.
    // If the booking copy lost the original T&C fields, treat it as accepted so the
    // customer can pay the remaining boat balance/skipper and can still re-read terms.
    return looksLikeConfirmedBooking || !!booking?.offerId || !!booking?.relatedOfferId || !!booking?.createdFromOfferId;
  }





  openTermsModal(): void {
    // Release 51: booking reuses the same readable T&C content model as offer mode,
    // but in read-only mode. Cache the sections before opening the modal so Angular
    // does not rebuild arrays during change detection.
    this.termsSectionsVm = this.resolveTermsSections();
    this.termsModalOpen = true;
  }

  closeTermsModal(): void {
    this.termsModalOpen = false;
  }

  private resolveTermsSections(): Array<{ title: string; paragraphs: string[] }> {
    const language = this.currentLanguage || 'fr';
    const defaultSections = this.defaultTermsSections(language);
    const languageContent = (this.siteContentAll || {})[language] || {};
    const candidates = [
      languageContent?.offerInfo?.termsSections,
      languageContent?.offerConfirmation?.termsSections,
      languageContent?.terms?.sections,
      languageContent?.legal?.termsSections,
      (this.siteContentAll || {})?.offerInfo?.[language]?.termsSections,
      (this.siteContentAll || {})?.terms?.[language]?.sections,
    ];

    for (const candidate of candidates) {
      if (Array.isArray(candidate) && candidate.length >= defaultSections.length && candidate.length > 1) {
        const normalized = candidate
          .map((section: any) => ({
            title: String(section?.title || ''),
            paragraphs: Array.isArray(section?.paragraphs)
              ? section.paragraphs.map((p: any) => String(p || '')).filter(Boolean)
              : String(section?.text || section?.body || '').split('\n').filter(Boolean),
          }))
          .filter((section: any) => section.title || section.paragraphs.length);
        if (normalized.length >= defaultSections.length) {
          return normalized;
        }
      }
    }

    return defaultSections;
  }

  private defaultTermsSections(language: string): Array<{ title: string; paragraphs: string[] }> {
    const sections: Record<string, Array<{ title: string; paragraphs: string[] }>> = {
      fr: [
        { title: '1. Confirmation de réservation', paragraphs: ['La réservation est confirmée uniquement après acceptation de la offre, acceptation des Conditions Générales et paiement de l’acompte demandé.', 'Tant que ces étapes ne sont pas finalisées, la sortie n’est pas considérée comme confirmée.'] },
        { title: '2. Acompte et annulation', paragraphs: ['Un acompte est demandé afin de sécuriser la réservation.', 'Les conditions d’annulation dépendent de la date, de la météo, de la sécurité et de tout accord spécifique établi avec Alegria Boat.'] },
        { title: '3. Paiement du solde', paragraphs: ['Le solde doit être réglé avant la sortie ou à bord selon les modalités convenues.', 'Les frais additionnels, extras ou services complémentaires doivent être réglés avant la fin de la sortie.'] },
        { title: '4. Skipper', paragraphs: ['Lorsque la sortie inclut un skipper, les frais skipper peuvent être facturés séparément du montant Alegria.', 'Le mode de règlement du skipper est indiqué dans la offre ou dans la réservation.'] },
        { title: '5. Caution / garantie', paragraphs: ['Une caution est obligatoire pour couvrir les dommages éventuels, frais exceptionnels ou montants impayés.', 'La caution peut être enregistrée par carte bancaire via Stripe ou remise en espèces selon les modalités acceptées par Alegria.', 'Aucun montant n’est débité sur la carte sauf en cas de dommage, frais impayé ou manquement confirmé.'] },
        { title: '6. Sécurité à bord', paragraphs: ['Les passagers doivent suivre les instructions du skipper à tout moment.', 'Le skipper peut modifier, raccourcir, reporter ou annuler la sortie si la sécurité, la météo ou le comportement des passagers l’exige.'] },
        { title: '7. Ponctualité', paragraphs: ['Les passagers doivent se présenter à l’heure convenue au point de rendez-vous.', 'Tout retard peut réduire la durée de la sortie sans compensation.'] },
        { title: '8. Baignade et activités nautiques', paragraphs: ['La baignade et les activités nautiques se font sous la responsabilité des passagers.', 'Elles ne sont autorisées que lorsque le skipper les juge possibles et sûres.', 'Les enfants et les personnes ne sachant pas nager doivent être surveillés par un adulte responsable.'] },
        { title: '9. Toilettes marines', paragraphs: ['Les toilettes marines sont fragiles.', 'Il est strictement interdit d’y jeter du papier, des lingettes, protections hygiéniques, nourriture, mégots ou tout autre objet.', 'Tout bouchage causé par une mauvaise utilisation pourra être facturé.'] },
        { title: '10. Dommages et nettoyage', paragraphs: ['Les passagers sont responsables des dommages causés au bateau, coussins, équipements, installations et matériel de sécurité.', 'Les brûlures de cigarette, équipements cassés ou perdus, toilettes bouchées et nettoyages exceptionnels pourront être facturés.'] },
        { title: '11. Décision du skipper et acceptation', paragraphs: ['La décision du skipper est définitive concernant l’itinéraire, les mouillages, la baignade, le départ, le retour et l’annulation pour raisons de sécurité ou de météo.', 'En acceptant la offre, le client confirme avoir lu, compris et accepté l’intégralité des Conditions Générales.'] },
      ],
      en: [
        { title: '1. Booking confirmation', paragraphs: ['The booking is confirmed only after the offer has been accepted, the Terms & Conditions have been accepted and the requested deposit has been paid.', 'Until these steps are completed, the outing is not considered confirmed.'] },
        { title: '2. Deposit and cancellation', paragraphs: ['A deposit is required to secure the booking.', 'Cancellation conditions depend on the date, weather, safety and any specific agreement made with Alegria Boat.'] },
        { title: '3. Remaining balance', paragraphs: ['The remaining balance must be paid before the outing or onboard according to the agreed conditions.', 'Any additional costs, extras or services must be paid before the end of the outing.'] },
        { title: '4. Skipper', paragraphs: ['When the outing includes a skipper, skipper fees may be charged separately from the Alegria amount.', 'The skipper payment method is shown in the offer or booking.'] },
        { title: '5. Warranty / security deposit', paragraphs: ['A warranty is mandatory to cover possible damage, exceptional costs or unpaid amounts.', 'The warranty may be registered by card through Stripe or provided in cash according to the method accepted by Alegria.', 'No amount is charged to the card unless there is confirmed damage, unpaid costs or a confirmed breach.'] },
        { title: '6. Safety onboard', paragraphs: ['Passengers must follow the skipper’s instructions at all times.', 'The skipper may modify, shorten, postpone or cancel the outing if safety, weather or passenger behaviour requires it.'] },
        { title: '7. Punctuality', paragraphs: ['Passengers must arrive at the agreed meeting point at the agreed time.', 'Any delay may reduce the duration of the outing without compensation.'] },
        { title: '8. Swimming and water activities', paragraphs: ['Swimming and water activities are carried out under the passengers’ responsibility.', 'They are only allowed when the skipper considers them possible and safe.', 'Children and non-swimmers must be supervised by a responsible adult.'] },
        { title: '9. Marine toilets', paragraphs: ['Marine toilets are fragile.', 'It is strictly forbidden to throw paper, wipes, hygiene products, food, cigarette ends or any other object into them.', 'Any blockage caused by misuse may be charged.'] },
        { title: '10. Damage and cleaning', paragraphs: ['Passengers are responsible for damage caused to the boat, cushions, equipment, installations and safety gear.', 'Cigarette burns, broken or lost equipment, blocked toilets and exceptional cleaning may be charged.'] },
        { title: '11. Skipper decision and acceptance', paragraphs: ['The skipper’s decision is final regarding the itinerary, anchorages, swimming, departure, return and cancellation for safety or weather reasons.', 'By accepting the offer, the customer confirms that they have read, understood and accepted the full Terms & Conditions.'] },
      ],
      es: [
        { title: '1. Confirmación de reserva', paragraphs: ['La reserva queda confirmada únicamente después de aceptar la propuesta, aceptar las Condiciones Generales y pagar el depósito solicitado.', 'Hasta que estos pasos se completen, la salida no se considera confirmada.'] },
        { title: '2. Depósito y cancelación', paragraphs: ['Se requiere un depósito para asegurar la reserva.', 'Las condiciones de cancelación dependen de la fecha, la meteorología, la seguridad y cualquier acuerdo específico establecido con Alegria Boat.'] },
        { title: '3. Pago restante', paragraphs: ['El importe restante debe pagarse antes de la salida o a bordo según las condiciones acordadas.', 'Cualquier coste adicional, extra o servicio complementario debe pagarse antes del final de la salida.'] },
        { title: '4. Skipper', paragraphs: ['Cuando la salida incluye skipper, los gastos de skipper pueden cobrarse por separado del importe Alegria.', 'El método de pago del skipper se indica en la propuesta o reserva.'] },
        { title: '5. Fianza / garantía', paragraphs: ['La garantía es obligatoria para cubrir posibles daños, costes excepcionales o importes pendientes.', 'Puede registrarse con tarjeta mediante Stripe o entregarse en efectivo según el método aceptado por Alegria.', 'No se cargará ningún importe en la tarjeta salvo en caso de daños, costes impagados o incumplimiento confirmado.'] },
        { title: '6. Seguridad a bordo', paragraphs: ['Los pasajeros deben seguir las instrucciones del skipper en todo momento.', 'El skipper puede modificar, acortar, aplazar o cancelar la salida si la seguridad, la meteorología o el comportamiento de los pasajeros lo requieren.'] },
        { title: '7. Puntualidad', paragraphs: ['Los pasajeros deben presentarse a la hora acordada en el punto de encuentro.', 'Cualquier retraso puede reducir la duración de la salida sin compensación.'] },
        { title: '8. Baño y actividades náuticas', paragraphs: ['El baño y las actividades náuticas se realizan bajo la responsabilidad de los pasajeros.', 'Solo están permitidos cuando el skipper los considera posibles y seguros.', 'Los niños y las personas que no sepan nadar deben estar supervisados por un adulto responsable.'] },
        { title: '9. Aseos marinos', paragraphs: ['Los aseos marinos son frágiles.', 'Está estrictamente prohibido tirar papel, toallitas, productos higiénicos, comida, colillas o cualquier otro objeto.', 'Cualquier atasco causado por un uso indebido podrá ser facturado.'] },
        { title: '10. Daños y limpieza', paragraphs: ['Los pasajeros son responsables de los daños causados al barco, cojines, equipos, instalaciones y material de seguridad.', 'Las quemaduras de cigarrillo, equipos rotos o perdidos, aseos obstruidos y limpiezas excepcionales podrán ser facturados.'] },
        { title: '11. Decisión del skipper y aceptación', paragraphs: ['La decisión del skipper es definitiva respecto al itinerario, fondeos, baño, salida, regreso y cancelación por razones de seguridad o meteorología.', 'Al aceptar la propuesta, el cliente confirma que ha leído, comprendido y aceptado la totalidad de las Condiciones Generales.'] },
      ],
    };

    return sections[language] || sections.en;
  }

  async loadFinanceText(language: SiteLanguage): Promise<void> {
    const fallback = (SITE_CONTENT as any)[language]?.bookingFinance || (SITE_CONTENT as any).en?.bookingFinance || {};
    this.financeText = fallback;

    try {
      const allContent = await this.siteContentService.getContent();
      this.siteContentAll = allContent || (SITE_CONTENT as any);
      this.financeText = {
        ...fallback,
        ...((allContent as any)[language]?.bookingFinance || {}),
        ...((allContent as any).bookingFinance?.[language] || {}),
      };
    } catch {
      this.financeText = fallback;
    }
  }

  tText(key: string, fallback = ''): string {
    return this.siteContentService.tFromContent(this.siteContentAll || (SITE_CONTENT as any), key, this.currentLanguage, fallback);
  }

  t(key: string): string {
    const staticFallbacks: Record<string, Record<string, string>> = {
      outingPrice: { en: 'Outing price', fr: 'Prix de la sortie', es: 'Precio de la salida', it: 'Prezzo uscita', de: 'Ausflugspreis', nl: 'Prijs van de uitstap', ru: 'Стоимость выхода' },
      boatRental: { en: 'Boat rental', fr: 'Location bateau', es: 'Alquiler del barco', it: 'Noleggio barca', de: 'Bootsmiete', nl: 'Bootverhuur', ru: 'Аренда лодки' },
      fuel: { en: 'Fuel', fr: 'Carburant', es: 'Combustible', it: 'Carburante', de: 'Kraftstoff', nl: 'Brandstof', ru: 'Топливо' },
      portFeesLabel: { en: 'Port fees', fr: 'Frais de port', es: 'Tasas portuarias', it: 'Spese portuali', de: 'Hafengebühren', nl: 'Havengelden', ru: 'Портовые сборы' },
      drinks: { en: 'Drinks', fr: 'Boissons', es: 'Bebidas', it: 'Bevande', de: 'Getränke', nl: 'Dranken', ru: 'Напитки' },
      waterToys: { en: 'Water toys', fr: 'Jouets nautiques', es: 'Juguetes acuáticos', it: 'Giochi nautici', de: 'Wasserspielzeug', nl: 'Waterspeelgoed', ru: 'Водные игрушки' },
      tips: { en: 'Tips', fr: 'Pourboires', es: 'Propinas', it: 'Mance', de: 'Trinkgeld', nl: 'Fooien', ru: 'Чаевые' },
      otherPricing: { en: 'Other', fr: 'Autres', es: 'Otros', it: 'Altro', de: 'Sonstiges', nl: 'Overig', ru: 'Другое' },
      totalOutingPrice: { en: 'Total outing price', fr: 'Total prix de la sortie', es: 'Precio total de la salida', it: 'Prezzo totale uscita', de: 'Gesamtpreis Ausflug', nl: 'Totale prijs uitstap', ru: 'Итоговая стоимость' },
      commission: { en: 'Commission', fr: 'Commission', es: 'Comisión', it: 'Commissione', de: 'Provision', nl: 'Commissie', ru: 'Комиссия' },
      rentalCommission: { en: 'Commission on rental', fr: 'Commission sur la location', es: 'Comisión sobre el alquiler', it: 'Commissione sul noleggio', de: 'Provision auf Miete', nl: 'Commissie op verhuur', ru: 'Комиссия с аренды' },
      serviceFeesLabel: { en: 'Service fees', fr: 'Frais de service', es: 'Gastos de servicio', it: 'Spese di servizio', de: 'Servicegebühren', nl: 'Servicekosten', ru: 'Сервисные сборы' },
      totalCommission: { en: 'Total commission', fr: 'Total commission', es: 'Comisión total', it: 'Commissione totale', de: 'Gesamtprovision', nl: 'Totale commissie', ru: 'Общая комиссия' },
      financialSummary: { en: 'Financial summary', fr: 'Synthèse financière', es: 'Resumen financiero', it: 'Riepilogo finanziario', de: 'Finanzübersicht', nl: 'Financieel overzicht', ru: 'Финансовая сводка' },
      alegriaRevenue: { en: 'Alegria revenue', fr: 'Revenu Alegria', es: 'Ingresos Alegria', it: 'Ricavo Alegria', de: 'Alegria-Umsatz', nl: 'Alegria-inkomsten', ru: 'Доход Alegria' },
      alegriaRevenueHelp: { en: 'All booking revenue excluding skipper fees.', fr: 'Tous les postes de revenu hors skipper.', es: 'Todos los ingresos excepto el skipper.', it: 'Tutti i ricavi escluso lo skipper.', de: 'Alle Umsätze ohne Skippergebühr.', nl: 'Alle inkomsten behalve skipperkosten.', ru: 'Все доходы, кроме оплаты шкипера.' },
      skipperRevenue: { en: 'Skipper revenue', fr: 'Revenu skipper', es: 'Ingresos skipper', it: 'Ricavo skipper', de: 'Skipper-Umsatz', nl: 'Skipper-inkomsten', ru: 'Доход шкипера' },
      skipperRevenueHelp: { en: 'Paid separately to the skipper, usually in cash onboard.', fr: 'À régler séparément au skipper, généralement en espèces à bord.', es: 'A pagar por separado al skipper, normalmente en efectivo a bordo.', it: 'Da pagare separatamente allo skipper, di solito in contanti a bordo.', de: 'Separat an den Skipper zu zahlen, meist bar an Bord.', nl: 'Apart te betalen aan de skipper, meestal contant aan boord.', ru: 'Оплачивается отдельно шкиперу, обычно наличными на борту.' },
      platformPayoutToAlegria: { en: 'Platform payout to Alegria', fr: 'Reversement plateforme à Alegria', es: 'Pago de la plataforma a Alegria', it: 'Versamento piattaforma ad Alegria', de: 'Plattform-Auszahlung an Alegria', nl: 'Platformuitbetaling aan Alegria', ru: 'Выплата платформы Alegria' },
      boatOuting: { en: 'Boat cost', fr: 'Coût bateau', es: 'Coste del barco', it: 'Costo barca', de: 'Bootskosten', nl: 'Bootkosten', ru: 'Стоимость лодки' },
      platformCost: { en: 'Platform cost', fr: 'Coût plateforme', es: 'Coste de plataforma', it: 'Costo piattaforma', de: 'Plattformkosten', nl: 'Platformkosten', ru: 'Стоимость платформы' },
      platformFees: { en: 'Platform fees', fr: 'Frais plateforme', es: 'Comisiones de plataforma', it: 'Commissioni piattaforma', de: 'Plattformgebühren', nl: 'Platformkosten', ru: 'Комиссия платформы' },
      rest: { en: 'Rest', fr: 'Reste', es: 'Resto', it: 'Resto', de: 'Rest', nl: 'Overig', ru: 'Остальное' },
      totalAlegriaRevenue: { en: 'TOTAL ALEGRIA REVENUE', fr: 'REVENU TOTAL ALEGRIA', es: 'INGRESOS TOTALES ALEGRIA', it: 'RICAVO TOTALE ALEGRIA', de: 'GESAMTUMSATZ ALEGRIA', nl: 'TOTALE OPBRENGST ALEGRIA', ru: 'ОБЩИЙ ДОХОД ALEGRIA' },
      remainingToPayAlegria: { en: 'Remaining to pay to Alegria', fr: 'Reste à payer à Alegria', es: 'Pendiente de pagar a Alegria', it: 'Resto da pagare ad Alegria', de: 'Noch an Alegria zu zahlen', nl: 'Nog te betalen aan Alegria', ru: 'Осталось оплатить Alegria' },
      remainingToPaySkipper: { en: 'Remaining to pay to the skipper', fr: 'Reste à payer au skipper', es: 'Pendiente de pagar al skipper', it: 'Resto da pagare allo skipper', de: 'Noch an den Skipper zu zahlen', nl: 'Nog te betalen aan de skipper', ru: 'Осталось оплатить шкиперу' },
      skipperCashOnboard: { en: 'To be paid in cash onboard directly to the skipper.', fr: 'À régler en espèces à bord directement au skipper.', es: 'A pagar en efectivo a bordo directamente al skipper.', it: 'Da pagare in contanti a bordo direttamente allo skipper.', de: 'An Bord in bar direkt an den Skipper zu zahlen.', nl: 'Aan boord contant rechtstreeks aan de skipper te betalen.', ru: 'Оплачивается наличными на борту напрямую шкиперу.' },
      remainingBoatToPay: { en: 'Remaining to pay for the boat', fr: 'Reste à payer pour le bateau', es: 'Pendiente de pagar por el barco', it: 'Resto da pagare per la barca', de: 'Noch für das Boot zu zahlen', nl: 'Nog te betalen voor de boot', ru: 'Осталось оплатить за лодку' },
      alegriaAmount: { en: 'Alegria amount', fr: 'Montant Alegria', es: 'Importe Alegria', it: 'Importo Alegria', de: 'Alegria-Betrag', nl: 'Alegria-bedrag', ru: 'Сумма Alegria' },
      confirmSkipperPaid: { en: 'Confirm skipper paid', fr: 'Confirmer skipper payé', es: 'Confirmar skipper pagado', it: 'Conferma skipper pagato', de: 'Skipperzahlung bestätigen', nl: 'Skipper betaald bevestigen', ru: 'Подтвердить оплату шкипера' },
      skipperPaid: { en: 'Skipper paid', fr: 'Skipper payé', es: 'Skipper pagado', it: 'Skipper pagato', de: 'Skipper bezahlt', nl: 'Skipper betaald', ru: 'Шкипер оплачен' },
      saving: { en: 'Saving…', fr: 'Enregistrement…', es: 'Guardando…', it: 'Salvataggio…', de: 'Speichern…', nl: 'Opslaan…', ru: 'Сохранение…' },
      saveError: { en: 'Unable to save.', fr: 'Impossible d’enregistrer.', es: 'No se puede guardar.', it: 'Impossibile salvare.', de: 'Speichern nicht möglich.', nl: 'Kan niet opslaan.', ru: 'Не удалось сохранить.' },
      warrantyModeAndAmount: { en: 'Warranty mode and amount', fr: 'Mode et montant de garantie', es: 'Modo e importe de garantía', it: 'Modalità e importo della garanzia', de: 'Kautionsart und Betrag', nl: 'Waarborgmethode en bedrag', ru: 'Способ и сумма гарантии' },
      warranty: { en: 'Warranty', fr: 'Garantie', es: 'Garantía', it: 'Garanzia', de: 'Kaution', nl: 'Waarborg', ru: 'Гарантия' },
      amountDueAlegria: { en: 'Amount due to Alegria', fr: 'Montant restant dû à Alegria', es: 'Importe pendiente a Alegria', it: 'Importo dovuto ad Alegria', de: 'Fälliger Betrag an Alegria', nl: 'Bedrag verschuldigd aan Alegria', ru: 'Сумма к оплате Alegria' },
      amount: { en: 'Amount', fr: 'Montant', es: 'Importe', it: 'Importo', de: 'Betrag', nl: 'Bedrag', ru: 'Сумма' },
      payAlegriaNow: { en: 'Pay Alegria', fr: 'Payer Alegria', es: 'Pagar Alegria', it: 'Paga Alegria', de: 'Alegria zahlen', nl: 'Alegria betalen', ru: 'Оплатить Alegria' },
      paySkipperNow: { en: 'Pay skipper', fr: 'Payer skipper', es: 'Pagar skipper', it: 'Paga skipper', de: 'Skipper zahlen', nl: 'Skipper betalen', ru: 'Оплатить шкипера' },
      payDepositNow: { en: 'Pay deposit', fr: 'Payer l’acompte', es: 'Pagar el anticipo', it: 'Paga l’acconto', de: 'Anzahlung zahlen', nl: 'Aanbetaling betalen', ru: 'Оплатить депозит' },
      alreadyPaid: { en: 'Already paid', fr: 'Déjà payé', es: 'Ya pagado', it: 'Già pagato', de: 'Bereits bezahlt', nl: 'Al betaald', ru: 'Уже оплачено' },
      leftToPay: { en: 'Left to pay', fr: 'Reste à payer', es: 'Pendiente de pago', it: 'Resto da pagare', de: 'Noch zu zahlen', nl: 'Nog te betalen', ru: 'Осталось оплатить' },
      depositDueFirst: { en: 'The deposit must be paid first. The balance will be available afterwards.', fr: 'L’acompte doit être réglé en premier. Le solde sera proposé ensuite.', es: 'Primero debe pagarse el anticipo. El saldo estará disponible después.', it: 'Prima va pagato l’acconto. Il saldo sarà disponibile dopo.', de: 'Zuerst muss die Anzahlung bezahlt werden. Der Restbetrag wird danach verfügbar.', nl: 'De aanbetaling moet eerst worden betaald. Daarna wordt het saldo beschikbaar.', ru: 'Сначала необходимо оплатить депозит. Остаток будет доступен после этого.' },
      alegriaPaid: { en: 'Alegria paid', fr: 'Alegria réglé', es: 'Alegria pagado', it: 'Alegria pagata', de: 'Alegria bezahlt', nl: 'Alegria betaald', ru: 'Alegria оплачено' },
      redirecting: { en: 'Redirecting…', fr: 'Redirection…', es: 'Redirigiendo…', it: 'Reindirizzamento…', de: 'Weiterleitung…', nl: 'Doorverwijzen…', ru: 'Перенаправление…' },
      registerWarrantyCardButton: { en: 'Use a card', fr: 'Utiliser une carte', es: 'Usar tarjeta', it: 'Usa una carta', de: 'Karte nutzen', nl: 'Kaart gebruiken', ru: 'Использовать карту' },
      changeWarrantyToCard: { en: 'You can replace cash warranty with a registered card.', fr: 'Vous pouvez remplacer la caution en espèces par une carte enregistrée.', es: 'Puede sustituir la garantía en efectivo por una tarjeta registrada.', it: 'Puoi sostituire la cauzione in contanti con una carta registrata.', de: 'Sie können die Barkaution durch eine hinterlegte Karte ersetzen.', nl: 'U kunt de contante waarborg vervangen door een geregistreerde kaart.', ru: 'Вы можете заменить наличный залог зарегистрированной картой.' },
      changeWarrantyMethodHelp: { en: 'You can change the warranty method at any time before the outing.', fr: 'Vous pouvez changer le mode de caution à tout moment avant la sortie.', es: 'Puede cambiar el método de garantía en cualquier momento antes de la salida.', it: 'Puoi cambiare il metodo della cauzione in qualsiasi momento prima dell’uscita.', de: 'Sie können die Kautionsart jederzeit vor der Ausfahrt ändern.', nl: 'U kunt de waarborgmethode op elk moment vóór de outing wijzigen.', ru: 'Вы можете изменить способ гарантии в любое время до выхода.' },
      stripeCheckoutError: { en: 'Unable to open Stripe payment.', fr: 'Impossible d’ouvrir le paiement Stripe.', es: 'No se puede abrir el pago Stripe.', it: 'Impossibile aprire il pagamento Stripe.', de: 'Stripe-Zahlung kann nicht geöffnet werden.', nl: 'Kan Stripe-betaling niet openen.', ru: 'Не удалось открыть оплату Stripe.' },
      warrantyCheckoutError: { en: 'Unable to open warranty card registration.', fr: 'Impossible d’ouvrir l’enregistrement de la carte de caution.', es: 'No se puede abrir el registro de la tarjeta de garantía.', it: 'Impossibile aprire la registrazione della carta di cauzione.', de: 'Kartenregistrierung für die Kaution kann nicht geöffnet werden.', nl: 'Kan kaartregistratie voor de waarborg niet openen.', ru: 'Не удалось открыть регистрацию карты.' },
      bookingCompletion: { en: 'Booking completion', fr: 'Confirmation de la réservation', es: 'Confirmación de la reserva', it: 'Conferma della prenotazione', de: 'Buchungsabschluss', nl: 'Boekingsbevestiging', ru: 'Завершение бронирования' },
      termsAndConditions: { en: 'Terms & Conditions', fr: 'Conditions générales', es: 'Condiciones generales', it: 'Termini e condizioni', de: 'AGB', nl: 'Algemene voorwaarden', ru: 'Условия' },
      rereadTerms: { en: 'Re-read Terms & Conditions', fr: 'Relire les Conditions générales', es: 'Volver a leer las condiciones generales', it: 'Rileggi i termini e condizioni', de: 'AGB erneut lesen', nl: 'Algemene voorwaarden opnieuw lezen', ru: 'Перечитать условия' },
      openTermsPage: { en: 'Open full page', fr: 'Ouvrir la page complète', es: 'Abrir página completa', it: 'Apri pagina completa', de: 'Vollständige Seite öffnen', nl: 'Volledige pagina openen', ru: 'Открыть полную страницу' },
      termsModalTitle: { en: 'Terms & Conditions accepted at offer stage', fr: 'Conditions générales acceptées lors de la offre', es: 'Condiciones generales aceptadas al confirmar la propuesta', it: 'Termini e condizioni accettati nella proposta', de: 'AGB bei Annahme des Vorschlags akzeptiert', nl: 'Algemene voorwaarden aanvaard bij het voorstel', ru: 'Условия приняты на этапе предложения' },
      readTermsButton: { en: 'I have read them', fr: 'J’ai relu les CGV', es: 'Las he leído', it: 'Le ho lette', de: 'Ich habe sie gelesen', nl: 'Ik heb ze gelezen', ru: 'Я прочитал(а)' },
      close: { en: 'Close', fr: 'Fermer', es: 'Cerrar', it: 'Chiudi', de: 'Schließen', nl: 'Sluiten', ru: 'Закрыть' },
      completed: { en: 'Completed', fr: 'Terminé', es: 'Completado', it: 'Completato', de: 'Abgeschlossen', nl: 'Voltooid', ru: 'Завершено' },
      waitingForCustomer: { en: 'Waiting for customer', fr: 'En attente du client', es: 'Esperando al cliente', it: 'In attesa del cliente', de: 'Wartet auf Kunden', nl: 'Wachten op klant', ru: 'Ожидает клиента' },
      bookingConfirmed: { en: 'Booking confirmed', fr: 'Réservation confirmée', es: 'Reserva confirmada', it: 'Prenotazione confermata', de: 'Buchung bestätigt', nl: 'Boeking bevestigd', ru: 'Бронирование подтверждено' },
      fullyPaid: { en: 'Fully paid', fr: 'Tout est réglé', es: 'Todo pagado', it: 'Tutto pagato', de: 'Vollständig bezahlt', nl: 'Volledig betaald', ru: 'Полностью оплачено' },
      paymentPending: { en: 'Payment pending', fr: 'Paiement en attente', es: 'Pago pendiente', it: 'Pagamento in sospeso', de: 'Zahlung ausstehend', nl: 'Betaling in behandeling', ru: 'Ожидает оплаты' },
      cancelled: { en: 'Cancelled', fr: 'Annulée', es: 'Cancelada', it: 'Annullata', de: 'Storniert', nl: 'Geannuleerd', ru: 'Отменено' },
      chooseWarrantyCash: { en: 'Use cash warranty', fr: 'Caution en espèces', es: 'Garantía en efectivo', it: 'Cauzione in contanti', de: 'Barkaution nutzen', nl: 'Contante waarborg', ru: 'Залог наличными' },
      additionalPayments: { en: 'Additional payments', fr: 'Paiements additionnels', es: 'Pagos adicionales', it: 'Pagamenti aggiuntivi', de: 'Zusätzliche Zahlungen', nl: 'Extra betalingen', ru: 'Дополнительные платежи' },
      additionalPaymentsHelp: { en: 'Pay a tip, an extra service or another amount requested by Alegria.', fr: 'Réglez un pourboire, un service additionnel ou un autre montant demandé par Alegria.', es: 'Pague una propina, un servicio extra u otro importe solicitado por Alegria.', it: 'Paga una mancia, un servizio extra o un altro importo richiesto da Alegria.', de: 'Zahlen Sie ein Trinkgeld, eine Zusatzleistung oder einen anderen von Alegria angeforderten Betrag.', nl: 'Betaal een fooi, extra dienst of ander bedrag dat door Alegria is gevraagd.', ru: 'Оплатите чаевые, дополнительную услугу или другую сумму, запрошенную Alegria.' },
      paymentType: { en: 'Payment type', fr: 'Type de paiement', es: 'Tipo de pago', it: 'Tipo di pagamento', de: 'Zahlungsart', nl: 'Betaaltype', ru: 'Тип платежа' },
      tipPayment: { en: 'Tip', fr: 'Pourboire', es: 'Propina', it: 'Mancia', de: 'Trinkgeld', nl: 'Fooi', ru: 'Чаевые' },
      extraServicePayment: { en: 'Extra service', fr: 'Service additionnel', es: 'Servicio extra', it: 'Servizio extra', de: 'Zusatzleistung', nl: 'Extra dienst', ru: 'Дополнительная услуга' },
      damagePayment: { en: 'Damage payment', fr: 'Paiement dommages', es: 'Pago por daños', it: 'Pagamento danni', de: 'Schadenszahlung', nl: 'Schadebetaling', ru: 'Оплата ущерба' },
      description: { en: 'Description', fr: 'Description', es: 'Descripción', it: 'Descrizione', de: 'Beschreibung', nl: 'Beschrijving', ru: 'Описание' },
      payAdditionalNow: { en: 'Pay additional amount', fr: 'Payer un montant additionnel', es: 'Pagar importe adicional', it: 'Paga importo aggiuntivo', de: 'Zusätzlichen Betrag zahlen', nl: 'Extra bedrag betalen', ru: 'Оплатить дополнительную сумму' },
      adminPaymentActions: { en: 'Admin payment actions', fr: 'Actions paiement admin', es: 'Acciones de pago admin', it: 'Azioni pagamento admin', de: 'Admin-Zahlungsaktionen', nl: 'Admin betalingsacties', ru: 'Админ-действия с платежами' },
      chargeWarrantyForDamages: { en: 'Charge warranty for damages', fr: 'Débiter la caution pour dommages', es: 'Cargar garantía por daños', it: 'Addebita cauzione per danni', de: 'Kaution für Schäden belasten', nl: 'Waarborg aanrekenen voor schade', ru: 'Списать залог за ущерб' },
      damageReason: { en: 'Damage reason', fr: 'Motif des dommages', es: 'Motivo del daño', it: 'Motivo del danno', de: 'Schadensgrund', nl: 'Reden van schade', ru: 'Причина ущерба' },
      damageReasonRequired: { en: 'Please describe the damage before charging the warranty.', fr: 'Merci de décrire les dommages avant de débiter la caution.', es: 'Describa los daños antes de cargar la garantía.', it: 'Descrivi il danno prima di addebitare la cauzione.', de: 'Bitte beschreiben Sie den Schaden, bevor Sie die Kaution belasten.', nl: 'Beschrijf de schade voordat u de waarborg aanrekent.', ru: 'Опишите ущерб перед списанием залога.' },
      warrantyChargeSuccess: { en: 'Warranty charge recorded.', fr: 'Débit de caution enregistré.', es: 'Cargo de garantía registrado.', it: 'Addebito cauzione registrato.', de: 'Kautionsbelastung erfasst.', nl: 'Waarborgaanrekening geregistreerd.', ru: 'Списание залога записано.' },
      warrantyChargeError: { en: 'Unable to charge warranty.', fr: 'Impossible de débiter la caution.', es: 'No se puede cargar la garantía.', it: 'Impossibile addebitare la cauzione.', de: 'Kaution kann nicht belastet werden.', nl: 'Kan waarborg niet aanrekenen.', ru: 'Не удалось списать залог.' },
      warrantyRelease: { en: 'Release warranty', fr: 'Libérer la caution', es: 'Liberar garantía', it: 'Rilascia cauzione', de: 'Kaution freigeben', nl: 'Waarborg vrijgeven', ru: 'Освободить залог' },
      warrantyReleased: { en: 'Warranty released', fr: 'Caution libérée', es: 'Garantía liberada', it: 'Cauzione rilasciata', de: 'Kaution freigegeben', nl: 'Waarborg vrijgegeven', ru: 'Залог освобождён' },
      warrantyReleaseSuccess: { en: 'Warranty released. The saved card was removed and no charge was made.', fr: 'Caution libérée. La carte enregistrée a été supprimée et aucun débit n’a été effectué.', es: 'Garantía liberada. Se eliminó la tarjeta guardada y no se realizó ningún cargo.', it: 'Cauzione rilasciata. La carta salvata è stata rimossa e non è stato effettuato alcun addebito.', de: 'Kaution freigegeben. Die gespeicherte Karte wurde entfernt und nicht belastet.', nl: 'Waarborg vrijgegeven. De opgeslagen kaart is verwijderd en er is niets aangerekend.', ru: 'Залог освобождён. Сохранённая карта удалена, списаний не было.' },
      warrantyReleaseError: { en: 'Unable to release the warranty.', fr: 'Impossible de libérer la caution.', es: 'No se puede liberar la garantía.', it: 'Impossibile rilasciare la cauzione.', de: 'Kaution kann nicht freigegeben werden.', nl: 'Kan waarborg niet vrijgeven.', ru: 'Не удалось освободить залог.' },
      warrantyReleasedNoDamage: { en: 'No damage was observed. The warranty is closed and no further charge is permitted.', fr: 'Aucun dommage n’a été constaté. La caution est clôturée et aucun nouveau débit n’est autorisé.', es: 'No se observaron daños. La garantía está cerrada y no se permite ningún cargo adicional.', it: 'Nessun danno rilevato. La cauzione è chiusa e non sono consentiti ulteriori addebiti.', de: 'Es wurden keine Schäden festgestellt. Die Kaution ist geschlossen und weitere Belastungen sind nicht zulässig.', nl: 'Er is geen schade vastgesteld. De waarborg is afgesloten en verdere afschrijvingen zijn niet toegestaan.', ru: 'Повреждений не обнаружено. Залог закрыт, дальнейшие списания запрещены.' },
      warrantyReleasedAt: { en: 'Released on', fr: 'Libérée le', es: 'Liberada el', it: 'Rilasciata il', de: 'Freigegeben am', nl: 'Vrijgegeven op', ru: 'Освобождён' },
      refundCustomer: { en: 'Refund customer', fr: 'Rembourser le client', es: 'Reembolsar al cliente', it: 'Rimborsa il cliente', de: 'Kunden erstatten', nl: 'Klant terugbetalen', ru: 'Вернуть клиенту' },
      refundPaymentType: { en: 'Payment to refund', fr: 'Paiement à rembourser', es: 'Pago a reembolsar', it: 'Pagamento da rimborsare', de: 'Zu erstattende Zahlung', nl: 'Terug te betalen betaling', ru: 'Платеж для возврата' },
      refundSuccess: { en: 'Refund recorded.', fr: 'Remboursement enregistré.', es: 'Reembolso registrado.', it: 'Rimborso registrato.', de: 'Erstattung erfasst.', nl: 'Terugbetaling geregistreerd.', ru: 'Возврат записан.' },
      refundError: { en: 'Unable to refund customer.', fr: 'Impossible de rembourser le client.', es: 'No se puede reembolsar al cliente.', it: 'Impossibile rimborsare il cliente.', de: 'Kunde kann nicht erstattet werden.', nl: 'Kan klant niet terugbetalen.', ru: 'Не удалось вернуть средства клиенту.' },
      paid: { en: 'Successful', fr: 'Réussi', es: 'Correcto', it: 'Riuscito', de: 'Erfolgreich', nl: 'Geslaagd', ru: 'Успешно' },
      processing: { en: 'Processing', fr: 'En cours', es: 'En proceso', it: 'In elaborazione', de: 'In Bearbeitung', nl: 'In behandeling', ru: 'В обработке' },
      failed: { en: 'Failed', fr: 'Échec', es: 'Fallido', it: 'Non riuscito', de: 'Fehlgeschlagen', nl: 'Mislukt', ru: 'Ошибка' },
      financialWorkspace: { en: 'Financial workspace', fr: 'Espace financier', es: 'Espacio financiero', it: 'Area finanziaria', de: 'Finanzbereich', nl: 'Financiële werkruimte', ru: 'Финансовый центр' },
      warrantyAvailable: { en: 'Available', fr: 'Disponible', es: 'Disponible', it: 'Disponibile', de: 'Verfügbar', nl: 'Beschikbaar', ru: 'Доступно' },
      warrantyUsed: { en: 'Used', fr: 'Utilisé', es: 'Utilizado', it: 'Utilizzato', de: 'Verwendet', nl: 'Gebruikt', ru: 'Использовано' },
      damageCharge: { en: 'Damage charge', fr: 'Prélèvement dommages', es: 'Cargo por daños', it: 'Addebito danni', de: 'Schadensbelastung', nl: 'Schade-inhouding', ru: 'Списание за ущерб' },
      lastOperation: { en: 'Last operation', fr: 'Dernière opération', es: 'Última operación', it: 'Ultima operazione', de: 'Letzte Transaktion', nl: 'Laatste verrichting', ru: 'Последняя операция' },
      operationRecorded: { en: 'Operation recorded', fr: 'Opération enregistrée', es: 'Operación registrada', it: 'Operazione registrata', de: 'Vorgang erfasst', nl: 'Verrichting geregistreerd', ru: 'Операция записана' },
      recorded: { en: 'Recorded', fr: 'Enregistré', es: 'Registrado', it: 'Registrato', de: 'Erfasst', nl: 'Geregistreerd', ru: 'Записано' },
      refund: { en: 'Refund', fr: 'Remboursement', es: 'Reembolso', it: 'Rimborso', de: 'Erstattung', nl: 'Terugbetaling', ru: 'Возврат' },
      financialHistory: { en: 'Financial history', fr: 'Historique financier', es: 'Historial financiero', it: 'Cronologia finanziaria', de: 'Finanzverlauf', nl: 'Financiële historie', ru: 'Финансовая история' },
      noFinancialOperations: { en: 'No financial operation recorded yet.', fr: 'Aucune opération financière enregistrée.', es: 'Aún no hay operaciones financieras.', it: 'Nessuna operazione finanziaria registrata.', de: 'Noch keine Finanztransaktion erfasst.', nl: 'Nog geen financiële verrichtingen.', ru: 'Финансовых операций пока нет.' },
      paymentReference: { en: 'Reference', fr: 'Référence', es: 'Referencia', it: 'Riferimento', de: 'Referenz', nl: 'Referentie', ru: 'Ссылка' },
      paymentIntentOptional: { en: 'Stripe payment intent (optional)', fr: 'Payment intent Stripe (optionnel)', es: 'Payment intent Stripe (opcional)', it: 'Payment intent Stripe (opzionale)', de: 'Stripe Payment Intent (optional)', nl: 'Stripe payment intent (optioneel)', ru: 'Stripe payment intent (необязательно)' },
      paymentMethodChoice: { en: 'Choose how to pay', fr: 'Choisissez votre mode de paiement', es: 'Elija cómo pagar', it: 'Scegli come pagare', de: 'Zahlungsart wählen', nl: 'Kies hoe u betaalt', ru: 'Выберите способ оплаты' },
      payByCard: { en: 'Pay by card', fr: 'Payer par carte', es: 'Pagar con tarjeta', it: 'Paga con carta', de: 'Mit Karte zahlen', nl: 'Met kaart betalen', ru: 'Оплатить картой' },
      payByCash: { en: 'Pay in cash', fr: 'Payer en espèces', es: 'Pagar en efectivo', it: 'Paga in contanti', de: 'Bar bezahlen', nl: 'Contant betalen', ru: 'Оплатить наличными' },
      enterValidAmount: { en: 'Enter a valid amount.', fr: 'Saisissez un montant valide.', es: 'Introduzca un importe válido.', it: 'Inserisci un importo valido.', de: 'Geben Sie einen gültigen Betrag ein.', nl: 'Voer een geldig bedrag in.', ru: 'Введите корректную сумму.' },
      confirmAlegriaCashReceived: { en: 'Confirm cash received by Alegria', fr: 'Confirmer la réception des espèces par Alegria', es: 'Confirmar el efectivo recibido por Alegria', it: 'Conferma contanti ricevuti da Alegria', de: 'Bargeldeingang bei Alegria bestätigen', nl: 'Ontvangst contant geld door Alegria bevestigen', ru: 'Подтвердить получение наличных Alegria' },
      alegriaCashReceivedConfirmed: { en: 'Cash payment received by Alegria has been confirmed.', fr: 'La réception du paiement en espèces par Alegria a été confirmée.', es: 'Se confirmó la recepción del pago en efectivo por Alegria.', it: 'La ricezione del pagamento in contanti da parte di Alegria è stata confermata.', de: 'Der Bargeldeingang bei Alegria wurde bestätigt.', nl: 'De ontvangst van de contante betaling door Alegria is bevestigd.', ru: 'Получение наличной оплаты Alegria подтверждено.' },
      cashPaymentSelected: { en: 'Cash payment selected. The payment will be confirmed when the cash is received.', fr: 'Paiement en espèces sélectionné. Le paiement sera confirmé lors de la remise des espèces.', es: 'Pago en efectivo seleccionado. El pago se confirmará al recibir el efectivo.', it: 'Pagamento in contanti selezionato. Il pagamento sarà confermato alla consegna del contante.', de: 'Barzahlung ausgewählt. Die Zahlung wird beim Erhalt des Bargelds bestätigt.', nl: 'Contante betaling geselecteerd. De betaling wordt bevestigd zodra het geld is ontvangen.', ru: 'Выбрана оплата наличными. Платёж будет подтверждён после получения наличных.' },
      cashPendingConfirmation: { en: 'Cash selected — awaiting receipt', fr: 'Espèces sélectionnées — en attente de remise', es: 'Efectivo seleccionado — pendiente de entrega', it: 'Contanti selezionati — in attesa di consegna', de: 'Barzahlung gewählt — Übergabe ausstehend', nl: 'Contant gekozen — ontvangst in afwachting', ru: 'Выбраны наличные — ожидается передача' },
      cardPaymentHelp: { en: 'Pay securely online by card.', fr: 'Payez en ligne de manière sécurisée par carte.', es: 'Pague en línea de forma segura con tarjeta.', it: 'Paga online in modo sicuro con carta.', de: 'Sicher online mit Karte bezahlen.', nl: 'Betaal veilig online met kaart.', ru: 'Безопасная онлайн-оплата картой.' },
      cashPaymentHelpAlegria: { en: 'Choose cash to pay Alegria onboard or before departure. Alegria will confirm receipt.', fr: 'Choisissez les espèces pour régler Alegria à bord ou avant le départ. Alegria confirmera la réception.', es: 'Elija efectivo para pagar a Alegria a bordo o antes de la salida. Alegria confirmará la recepción.', it: 'Scegli i contanti per pagare Alegria a bordo o prima della partenza. Alegria confermerà la ricezione.', de: 'Wählen Sie Barzahlung, um Alegria an Bord oder vor der Abfahrt zu bezahlen. Alegria bestätigt den Erhalt.', nl: 'Kies contant om Alegria aan boord of vóór vertrek te betalen. Alegria bevestigt de ontvangst.', ru: 'Выберите наличные для оплаты Alegria на борту или до отправления. Alegria подтвердит получение.' },
      cashPaymentHelpSkipper: { en: 'Choose cash to pay the skipper directly onboard. The receipt will then be confirmed.', fr: 'Choisissez les espèces pour régler directement le skipper à bord. La réception sera ensuite confirmée.', es: 'Elija efectivo para pagar directamente al skipper a bordo. Después se confirmará la recepción.', it: 'Scegli i contanti per pagare direttamente lo skipper a bordo. La ricezione sarà poi confermata.', de: 'Wählen Sie Barzahlung, um den Skipper direkt an Bord zu bezahlen. Der Erhalt wird anschließend bestätigt.', nl: 'Kies contant om de skipper rechtstreeks aan boord te betalen. De ontvangst wordt daarna bevestigd.', ru: 'Выберите наличные для оплаты шкиперу напрямую на борту. Получение будет подтверждено.' },
      remainingExtraServices: {
        en: 'Remaining extra services',
        fr: 'Services additionnels restants',
        es: 'Servicios extra restantes',
        it: 'Servizi extra restanti',
        de: 'Restbetrag Zusatzleistungen',
        nl: 'Resterende extra diensten',
        ru: 'Оставшиеся дополнительные услуги'
      }
    };
    const englishFallback = (SITE_CONTENT as any).en?.bookingFinance || {};
    return this.financeText?.[key] || staticFallbacks[key]?.[this.currentLanguage] || englishFallback[key] || staticFallbacks[key]?.en || key;
  }

  private isDepositPaid(booking: any): boolean {
    const deposit = booking?.payments?.deposit || {};
    const legacy = booking?.payment || {};
    return booking.depositPaid === true || booking.depositStatus === 'paid' || booking.depositStatus === 'deposit_paid' || booking.paymentStatus === 'paid' || booking.paymentStatus === 'charge_succeeded' || deposit.paid === true || deposit.status === 'paid' || deposit.status === 'deposit_paid' || legacy.paid === true || legacy.status === 'paid' || this.hasPaidStripeRecordFor(booking, 'deposit');
  }

  private buildPaymentHistoryRows(booking: any, depositAmount: number, boatBalance: number, balancePaid: boolean, skipperCost: number, skipperPaid: boolean): MoneyRow[] {
    const outingDate = booking.outingDate || booking.date || '';
    const depositDate = booking.depositPaidAt || booking.payments?.deposit?.paidAt || booking.confirmedAt || booking.modifiedTS || '';
    const rows: MoneyRow[] = [];
    if (depositAmount > 0) rows.push({ label: `${this.t('stripe')} ${this.t('deposit')}`, amount: depositAmount, method: 'Stripe', status: this.t('paid'), date: this.formatDisplayDate(depositDate) });
    const stripeBalancePaidAmount = this.paidStripeAmountFor(booking, 'balance');
    if (boatBalance > 0 || stripeBalancePaidAmount > 0) rows.push({ label: this.t('boatBalance'), amount: stripeBalancePaidAmount || boatBalance, method: balancePaid ? 'Stripe' : '-', status: balancePaid ? this.t('paid') : this.t('pending'), date: this.formatDisplayDate(booking.balancePaidAt || booking.payments?.balance?.paidAt || outingDate) });
    if (skipperCost > 0) rows.push({ label: this.t('skipper'), amount: skipperCost, method: this.t('onboard'), status: skipperPaid ? this.t('paid') : this.t('pending'), date: this.formatDisplayDate(booking.skipperPaidAt || booking.payments?.direct?.skipperPaidAt || outingDate) });
    return rows;
  }

  formatDisplayDate(value: any): string {
    if (!value) return '-';
    const d = typeof value === 'number' ? new Date(value) : new Date(value);
    if (Number.isNaN(d.getTime())) return String(value).slice(0, 10);
    return d.toLocaleDateString(this.currentLanguage === 'fr' ? 'fr-FR' : this.currentLanguage === 'es' ? 'es-ES' : this.currentLanguage === 'de' ? 'de-DE' : this.currentLanguage === 'it' ? 'it-IT' : this.currentLanguage === 'nl' ? 'nl-NL' : 'en-GB');
  }

  warrantyMethodLabel(value: any): string {
    const v = String(value || '').toLowerCase();
    if (v.includes('card') || v.includes('stripe')) return this.t('creditCard');
    if (v.includes('cash')) return this.t('cash');
    return value || '-';
  }

  private buildWarrantyBadge(booking: any): string {
    if (this.isWarrantyReleased(booking)) return this.t('warrantyReleased');
    if (this.hasWarrantyCardRegistered(booking)) return this.t('warrantyCardRegistered');
    if (this.isCashWarrantySelected(booking) || booking.warrantyRegistered === true) return this.t('cashWarrantyRecorded');
    return this.t('warrantyNotSelected');
  }

  private buildPlatformLabel(booking: any): string {
    const source = String(booking.externalPlatformName || booking.externalPlatform || booking.source || booking.raw?.externalPlatform || '').trim();
    if (!source || source.toLowerCase() === 'direct' || source.toLowerCase() === 'alegria') return 'Alegria direct';
    if (source.toLowerCase() === 'clickandboat') return 'Click&Boat';
    if (source.toLowerCase() === 'samboat') return 'SamBoat';
    return source;
  }

  private isHistoricalRecord(value: any): boolean {
    // "Completed" describes the outing lifecycle, not the financial lifecycle.
    // Only records explicitly imported as historical are allowed to bypass payment steps.
    const entryMode = String(value?.entryMode || value?.raw?.entryMode || value?.raw?.raw?.entryMode || '').toLowerCase();
    return entryMode === 'historical';
  }

  private isCurrentUserAdmin(): boolean {
    const user = this.readCachedUser();
    const role = String(user?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || user?.isAdmin === true;
  }

  private readCachedUser(): any {
    for (const key of ['bnUser', 'loggedUser', 'currentUser', 'user', 'adnUser', 'wnGuest']) {
      try {
        const raw = localStorage.getItem(key) || sessionStorage.getItem(key);
        if (raw) return JSON.parse(raw);
      } catch {}
    }
    return null;
  }

  private firstPositive(...values: any[]): number {
    for (const value of values) {
      const parsed = this.number(value);
      if (parsed > 0) return parsed;
    }
    return 0;
  }

  private number(value: any): number {
    const parsed = Number(value || 0);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  private centsToEuros(value: any): number {
    const amount = this.number(value);
    return amount > 10000 ? Math.round(amount) / 100 : amount;
  }

  formatMoney(value: any): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(this.number(value));
  }

  goBack(): void {
    this.router.navigate([this.vm?.isAdmin ? '/admin/bookings' : '/my-bookings']);
  }

  openEdit(): void {
    if (!this.vm?.bookingId) return;
    this.router.navigate(['/admin/bookings', this.vm.bookingId], { queryParams: { edit: true } });
  }
}
