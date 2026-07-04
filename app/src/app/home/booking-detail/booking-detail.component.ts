import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { SITE_CONTENT } from '../site-content';
import { SiteContentService } from '../site-content-service/site-content.service';
import { BookingApiService } from '../bookings/booking-api.service';
import { BookingFinancialService } from '../bookings/booking-financial.service';
import { BookingWorkflowService } from '../bookings/booking-workflow.service';

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
  editForm: any = {};

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
    private bookingWorkflow: BookingWorkflowService,
  ) {}

  ngOnInit(): void {
    this.bookingId = this.route.snapshot.paramMap.get('bookingId') || this.route.snapshot.paramMap.get('id') || '';
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadFinanceText(language);
    });
    this.loadBooking();
    this.handleStripeReturn();
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
        { path: `bnProposals/${this.bookingId}`, type: 'proposal' },
      ];

      for (const attempt of attempts) {
        const data = await this.fetchJsonWithTimeout(attempt.path, 2200);
        if (data) {
          const booking = attempt.type === 'proposal'
            ? this.proposalToBooking({ proposalId: this.bookingId, ...data })
            : { bookingId: this.bookingId, ...data };
          const normalized = this.normalize(booking);
          const enriched = await this.enrichWithPaymentRecords(normalized);
          this.vm = this.buildVm(enriched);
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
      totalAmount: b.totalAmount || b.totalPrice || 0,
      totalPrice: b.totalPrice || b.totalAmount || 0,
      externalPlatformTotalClientAmount: b.externalPlatformTotalClientAmount || b.payments?.platform?.totalClientAmount || b.raw?.externalPlatformTotalClientAmount || b.raw?.payments?.platform?.totalClientAmount || 0,
      externalPlatformPaidAmount: b.externalPlatformPaidAmount || b.payments?.platform?.paidAmount || b.raw?.externalPlatformPaidAmount || 0,
      skipperCashAmount: b.skipperCashAmount || 0,
      cateringAmount: b.cateringAmount || 0,
      tipsAmount: b.tipsAmount || 0,
      cleaningCashAmount: b.cleaningCashAmount || 0,
      drinksAmount: b.drinksAmount || 0,
      waterToysAmount: b.waterToysAmount || 0,
      otherOnboardAmount: b.otherOnboardAmount || 0,
      warrantyAmount: b.warrantyAmount || 0,
      warrantyStatus: b.warrantyStatus || 'not_requested',
      warrantyPaymentChoice: b.warrantyPaymentChoice || b.warrantyMethod || 'cash',
      bookingStatus: b.bookingStatus || 'completed',
      status: b.status || 'completed',
      paymentStatusLabel: b.paymentStatusLabel || b.balanceStatus || 'fully_paid',
      comments: b.comments || '',
    };
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
      const platformPaid = this.number(this.editForm.externalPlatformPaidAmount);
      const skipper = this.number(this.editForm.skipperCashAmount);
      const catering = this.number(this.editForm.cateringAmount);
      const tips = this.number(this.editForm.tipsAmount);
      const cleaning = this.number(this.editForm.cleaningCashAmount);
      const drinks = this.number(this.editForm.drinksAmount);
      const waterToys = this.number(this.editForm.waterToysAmount);
      const other = this.number(this.editForm.otherOnboardAmount);
      const directTotal = skipper + catering + tips + cleaning + drinks + waterToys + other;
      const platformCustomerAmount = this.number(this.editForm.externalPlatformTotalClientAmount);
      const totalCollected = platformPaid + directTotal;
      const totalClientCost = this.number(this.editForm.totalAmount || (platformCustomerAmount + directTotal) || totalCollected);
      const paymentStatusLabel = this.editForm.paymentStatusLabel || 'fully_paid';
      const normalizedPlatformName = this.normalizedPlatformName(this.editForm.source || this.editForm.externalPlatform || existing.source, this.editForm.externalPlatformName);

      const payload = {
        ...existing,
        ...this.editForm,
        bookingId,
        externalPlatformName: normalizedPlatformName,
        externalPlatform: this.editForm.source || this.editForm.externalPlatform || existing.externalPlatform || existing.source || '',
        proposalId: existing.proposalId || bookingId,
        relatedBookingId: existing.relatedBookingId || bookingId,
        totalAmount: totalClientCost,
        totalPrice: totalClientCost,
        externalPlatformTotalClientAmount: platformCustomerAmount,
        externalPlatformPaidAmount: platformPaid,
        skipperCashAmount: skipper,
        cateringAmount: catering,
        tipsAmount: tips,
        cleaningCashAmount: cleaning,
        drinksAmount: drinks,
        waterToysAmount: waterToys,
        otherOnboardAmount: other,
        totalCollectedAmount: totalCollected,
        totalOnboardCollections: directTotal,
        customerPaidThroughPlatform: platformCustomerAmount,
        customerPaidDirectly: directTotal,
        alegriaRevenueTotal: totalCollected,
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
            status: 'recorded',
            recordedAt: now,
          },
          direct: {
            skipperCashAmount: skipper,
            cateringAmount: catering,
            tipsAmount: tips,
            cleaningCashAmount: cleaning,
            drinksAmount: drinks,
            waterToysAmount: waterToys,
            otherOnboardAmount: other,
            totalDirectAmount: skipper + catering + tips + cleaning + drinks + waterToys + other,
            status: 'recorded',
            recordedAt: now,
          },
        },
        raw: {
          ...raw,
          ...this.editForm,
          externalPlatformName: normalizedPlatformName,
          externalPlatformTotalClientAmount: platformCustomerAmount,
          externalPlatformPaidAmount: platformPaid,
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
      // Also remove stale proposal copy if one exists.
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
    const proposalId = booking?.proposalId || booking?.relatedBookingId || bookingId;
    const ids = Array.from(new Set([bookingId, proposalId].filter(Boolean)));
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

  private proposalToBooking(proposal: any): any {
    const totalAmount = this.number(proposal.totalAmount || proposal.totalPrice || proposal.estimatedPrice);
    const skipperCashAmount = this.number(proposal.skipperCashAmount || proposal.proposalSkipperPrice || proposal.estimatedSkipperPrice);
    const onlinePayableAmount = this.number(proposal.onlinePayableAmount || proposal.appPayableAmount || Math.max(0, totalAmount - skipperCashAmount));
    const depositAmount = this.number(proposal.depositAmount);
    const balanceAmount = this.number(proposal.balanceAmount || proposal.remainingFeesAmount || Math.max(0, onlinePayableAmount - depositAmount));

    return {
      ...proposal,
      bookingId: proposal.relatedBookingId || proposal.proposalId || this.bookingId,
      proposalId: proposal.proposalId || this.bookingId,
      relatedBookingId: proposal.relatedBookingId || proposal.proposalId || this.bookingId,
      customerName: proposal.customerName || '',
      email: proposal.customerEmail || proposal.email || '',
      phone: proposal.customerPhone || proposal.phone || '',
      outingType: proposal.outingType || 'Journée en mer',
      outingDate: proposal.outingDate || '',
      departureTime: proposal.departureTime || proposal.startTime || '',
      arrivalTime: proposal.arrivalTime || proposal.endTime || '',
      passengers: this.number(proposal.passengers),
      totalAmount,
      totalPrice: totalAmount,
      onlinePayableAmount,
      appPayableAmount: onlinePayableAmount,
      skipperCashAmount,
      depositAmount,
      balanceAmount,
      remainingFeesAmount: balanceAmount,
      remainingOnboardAmount: balanceAmount,
      bookingStatus: proposal.bookingStatus || proposal.bookingRequestStatus || 'proposal',
      status: proposal.status || 'proposal',
      bookingRequestStatus: proposal.bookingRequestStatus || 'proposal',
      warrantyAmount: this.number(proposal.warrantyAmount || 500),
      raw: proposal,
    };
  }

  private normalize(input: any): any {
    const raw = input?.raw || {};
    const deepRaw = raw?.raw || {};
    const directPayments = input?.payments?.direct || raw?.payments?.direct || {};
    const depositPayment = input?.payments?.deposit || raw?.payments?.deposit || {};
    const totalAmount = this.firstPositive(input.totalAmount, input.totalPrice, input.estimatedPrice, raw.totalAmount, raw.totalPrice, raw.estimatedPrice, deepRaw.totalAmount, deepRaw.totalPrice);
    const skipperCashAmount = this.firstPositive(input.skipperCashAmount, input.proposalSkipperPrice, raw.skipperCashAmount, raw.proposalSkipperPrice, deepRaw.skipperCashAmount);
    const onlinePayableAmount = this.firstPositive(input.onlinePayableAmount, input.appPayableAmount, raw.onlinePayableAmount, raw.appPayableAmount, Math.max(0, totalAmount - skipperCashAmount));
    const depositAmount = this.firstPositive(input.depositAmount, raw.depositAmount, depositPayment.amount, depositPayment.amount_total ? Number(depositPayment.amount_total) / 100 : 0, 0);
    const balanceAmount = this.firstPositive(input.balanceAmount, input.remainingFeesAmount, input.remainingOnboardAmount, raw.balanceAmount, raw.remainingFeesAmount, Math.max(0, onlinePayableAmount - depositAmount));

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
    let boatOutingCost = f.boatAmount;
    let totalCustomerCost = f.customerTotal;

    const stripeDepositPaidAmount = this.paidStripeAmountFor(booking, 'deposit');
    const depositPaidAmount = this.isDepositPaid(booking)
      ? (stripeDepositPaidAmount || this.number(booking.depositPaidAmount || booking.paidDepositAmount || booking.depositAmount || booking.payments?.deposit?.amount || (booking.payments?.deposit?.amount_total ? Number(booking.payments.deposit.amount_total) / 100 : 0)))
      : 0;

    const rawBoatBalance = Math.max(0, f.alegriaRevenue - depositPaidAmount);
    const balancePaid = f.alegriaRemaining <= 0;
    const skipperPaid = f.skipperRemaining <= 0;
    const skipperPaidAmount = f.skipperPaid;
    const onboardBoatBalanceCollected = balancePaid ? rawBoatBalance : 0;
    const onboardSkipperCollected = skipperPaidAmount;
    const remainingBoatBalance = f.alegriaRemaining;
    const remainingSkipperFee = f.skipperRemaining;
    const remainingFuelCost = 0;
    const remainingExtraServices = 0;
    const totalRemainingCustomer = f.alegriaRemaining + f.skipperRemaining;
    const totalClientCost = f.customerTotal;
    const totalCollected = this.number(booking.totalCollectedAmount || booking.raw?.totalCollectedAmount) || collectedViaPlatform + collectedDirectTotal;
    const totalRemaining = isHistoricalBooking ? 0 : totalRemainingCustomer;
    const totalOnboardCollections = onboardBoatBalanceCollected + onboardSkipperCollected + totalDirectCatering + totalDirectTips + totalDirectCleaningFuel + totalDirectDrinks + totalDirectWaterToys + totalDirectOther;
    const alegriaRevenueTotal = f.alegriaRevenue;
    const alegriaPaidAmount = f.alegriaPaid;
    const remainingAlegriaRevenue = f.alegriaRemaining;

    const workflow = this.bookingWorkflow.build(booking, f);
    const alegriaPaymentComplete = workflow.alegriaPaymentComplete;
    const skipperPaymentComplete = workflow.skipperPaymentComplete;
    const warrantyComplete = workflow.warrantyComplete;
    const termsAccepted = workflow.termsAccepted;
    const bookingCompletionPercent = workflow.percent;
    const customerJourneyComplete = workflow.confirmed;
    const customerJourneyStatus = this.t(workflow.statusKey);
    const bookingStatusBadge = this.t(workflow.statusKey);
    const paymentStatusBadge = this.t(workflow.paymentKey);
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


  canPayDepositOnline(): boolean {
    // The booking details page is now the unique customer payment cockpit.
    // We no longer expose a separate deposit-only button here; the Alegria
    // button pays whatever is still due to Alegria.
    return false;
  }

  payDepositOnline(): void {
    if (!this.vm || !this.canPayDepositOnline() || this.payingAlegria) return;
    const booking = this.vm.display || {};
    if (!this.isTermsAccepted(booking)) {
      this.error = this.t('termsRequiredBeforePayment');
      return;
    }
    const bookingId = this.vm.bookingId || booking.bookingId || this.bookingId;
    const amount = this.number(booking.depositAmount || this.vm.depositAmount || 0);
    if (!bookingId || amount <= 0) return;

    this.payingAlegria = true;
    this.error = '';
    const bookingUrl = `${window.location.origin}/bookings/${encodeURIComponent(bookingId)}`;
    this.bookingApi.createDepositCheckout({
      bookingId,
      proposalId: booking.proposalId || bookingId,
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
      },
    });
  }

  canPayAlegriaOnline(): boolean {
    if (!this.vm || this.editMode) return false;
    const booking = this.vm.display || {};
    return this.isTermsAccepted(booking) && this.vm.remainingAlegriaRevenue > 0;
  }

  payAlegriaOnline(): void {
    if (!this.vm || !this.canPayAlegriaOnline() || this.payingAlegria) return;
    const booking = this.vm.display || {};
    if (!this.isTermsAccepted(booking)) {
      this.error = this.t('termsRequiredBeforePayment');
      return;
    }
    const bookingId = this.vm.bookingId || booking.bookingId || this.bookingId;
    const amount = this.vm.remainingAlegriaRevenue;
    if (!bookingId || amount <= 0) return;

    this.payingAlegria = true;
    this.error = '';
    const bookingUrl = `${window.location.origin}/bookings/${encodeURIComponent(bookingId)}`;
    this.savePendingAlegriaPayment(bookingId, amount);

    this.bookingApi.createBalanceCheckout({
      bookingId,
      proposalId: booking.proposalId || bookingId,
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

  canConfirmSkipperPaid(): boolean {
    if (!this.vm || this.editMode) return false;
    return this.vm.isAdmin && this.vm.remainingSkipperFee > 0;
  }

  async confirmSkipperPaid(): Promise<void> {
    if (!this.vm || !this.canConfirmSkipperPaid() || this.payingSkipper) return;
    const booking = this.vm.display || {};
    const bookingId = this.vm.bookingId || booking.bookingId || this.bookingId;
    if (!bookingId) return;

    this.payingSkipper = true;
    this.error = '';
    const now = Date.now();
    const payments = { ...(booking.payments || {}) };
    payments.direct = {
      ...(payments.direct || {}),
      skipperPaid: true,
      skipperStatus: 'paid',
      skipperCashAmount: this.vm.skipperCost,
      skipperPaidAt: now,
    };

    try {
      await this.bookingApi.updateBooking(bookingId, {
        skipperPaid: true,
        skipperStatus: 'paid',
        skipperPaidAt: now,
        payments,
      } as any);
      await this.loadBooking();
    } catch (error: any) {
      this.error = error?.message || this.t('saveError');
    } finally {
      this.payingSkipper = false;
    }
  }



  canPaySkipperOnline(): boolean {
    if (!this.vm || this.editMode) return false;
    const booking = this.vm.display || {};
    return this.isTermsAccepted(booking) && this.vm.remainingSkipperFee > 0;
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
      bookingId,
      proposalId: booking.proposalId || bookingId,
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
    return this.warrantyAmount() > 0 && !cardRegistered;
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
      bookingId,
      ownerId: booking.ownerId || 'alegria',
      warrantyAmount: this.warrantyAmount(),
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
      }
    });
  }


  canSelectCashWarranty(): boolean {
    if (!this.vm || this.editMode) return false;
    const booking = this.vm.display || {};
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
    const status = String(booking?.warrantyStatus || '').toLowerCase();
    const method = String(booking?.warrantyPaymentChoice || booking?.warrantyMethod || '').toLowerCase();
    // The currently selected warranty method wins. If the customer switches to cash,
    // an older saved card must not keep the UI stuck on "card registered".
    if (method.includes('cash') || status.includes('cash')) return false;
    return status.includes('card_registered') || status.includes('warranty_card_saved') || status.includes('setup_succeeded') || !!booking?.warrantyPaymentMethodId || !!booking?.warrantySetupIntentId || method.includes('stripe_card_registered');
  }

  private isCashWarrantySelected(booking: any): boolean {
    const status = String(booking?.warrantyStatus || '').toLowerCase();
    const method = String(booking?.warrantyPaymentChoice || booking?.warrantyMethod || '').toLowerCase();
    return method.includes('cash') || status.includes('cash');
  }

  private isWarrantyComplete(booking: any): boolean {
    const amount = this.number(booking?.warrantyAmount || booking?.cautionAmount || booking?.securityDepositAmount || 500);
    if (amount <= 0) return true;
    return this.hasWarrantyCardRegistered(booking) || this.isCashWarrantySelected(booking);
  }

  private isTermsAccepted(booking: any): boolean {
    const explicitAccepted = booking?.customerTermsAccepted === true ||
      booking?.tncAccepted === true ||
      booking?.termsAccepted === true ||
      booking?.acceptedTerms === true ||
      booking?.tcAccepted === true ||
      booking?.tAndCAccepted === true ||
      booking?.termsAndConditionsAccepted === true ||
      booking?.workflow?.termsAccepted === true ||
      booking?.bookingWorkflow?.termsAccepted === true ||
      booking?.terms?.accepted === true ||
      booking?.documents?.termsAccepted === true;

    const explicitTimestamp = booking?.tncAcceptedAt ||
      booking?.termsAcceptedAt ||
      booking?.acceptedTermsAt ||
      booking?.tcAcceptedAt ||
      booking?.termsAndConditionsAcceptedAt ||
      booking?.workflow?.termsAcceptedAt ||
      booking?.bookingWorkflow?.termsAcceptedAt ||
      booking?.terms?.acceptedAt ||
      booking?.documents?.termsAcceptedAt;

    const acceptedBy = booking?.tncAcceptedBy ||
      booking?.termsAcceptedBy ||
      booking?.acceptedTermsBy ||
      booking?.workflow?.termsAcceptedBy ||
      booking?.bookingWorkflow?.termsAcceptedBy ||
      booking?.terms?.acceptedBy ||
      booking?.documents?.termsAcceptedBy;

    const source = String(
      booking?.tncAcceptedSource ||
      booking?.termsAcceptedSource ||
      booking?.acceptedTermsSource ||
      booking?.workflow?.termsAcceptedSource ||
      booking?.bookingWorkflow?.termsAcceptedSource ||
      booking?.terms?.source ||
      booking?.documents?.termsAcceptedSource ||
      ''
    ).toLowerCase();

    const formalCustomerMarker = booking?.customerTermsAccepted === true ||
      source.includes('customer') ||
      source.includes('client') ||
      source.includes('proposal') ||
      source.includes('portal') ||
      !!acceptedBy;

    // Do not infer T&C acceptance from booking/proposal status or admin-created legacy flags.
    // The customer must have explicitly accepted the conditions in the customer/proposal portal.
    return explicitAccepted === true && !!explicitTimestamp && formalCustomerMarker;
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
      financialSummary: { en: 'Financial summary', fr: 'Synthèse financière', es: 'Resumen financiero', it: 'Riepilogo finanziario', de: 'Finanzübersicht', nl: 'Financieel overzicht', ru: 'Финансовая сводка' },
      alegriaRevenue: { en: 'Alegria revenue', fr: 'Revenu Alegria', es: 'Ingresos Alegria', it: 'Ricavo Alegria', de: 'Alegria-Umsatz', nl: 'Alegria-inkomsten', ru: 'Доход Alegria' },
      alegriaRevenueHelp: { en: 'All booking revenue excluding skipper fees.', fr: 'Tous les postes de revenu hors skipper.', es: 'Todos los ingresos excepto el skipper.', it: 'Tutti i ricavi escluso lo skipper.', de: 'Alle Umsätze ohne Skippergebühr.', nl: 'Alle inkomsten behalve skipperkosten.', ru: 'Все доходы, кроме оплаты шкипера.' },
      skipperRevenue: { en: 'Skipper revenue', fr: 'Revenu skipper', es: 'Ingresos skipper', it: 'Ricavo skipper', de: 'Skipper-Umsatz', nl: 'Skipper-inkomsten', ru: 'Доход шкипера' },
      skipperRevenueHelp: { en: 'Paid separately to the skipper, usually in cash onboard.', fr: 'À régler séparément au skipper, généralement en espèces à bord.', es: 'A pagar por separado al skipper, normalmente en efectivo a bordo.', it: 'Da pagare separatamente allo skipper, di solito in contanti a bordo.', de: 'Separat an den Skipper zu zahlen, meist bar an Bord.', nl: 'Apart te betalen aan de skipper, meestal contant aan boord.', ru: 'Оплачивается отдельно шкиперу, обычно наличными на борту.' },
      platformPayoutToAlegria: { en: 'Platform payout to Alegria', fr: 'Reversement plateforme à Alegria', es: 'Pago de la plataforma a Alegria', it: 'Versamento piattaforma ad Alegria', de: 'Plattform-Auszahlung an Alegria', nl: 'Platformuitbetaling aan Alegria', ru: 'Выплата платформы Alegria' },
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
      completed: { en: 'Completed', fr: 'Terminé', es: 'Completado', it: 'Completato', de: 'Abgeschlossen', nl: 'Voltooid', ru: 'Завершено' },
      waitingForCustomer: { en: 'Waiting for customer', fr: 'En attente du client', es: 'Esperando al cliente', it: 'In attesa del cliente', de: 'Wartet auf Kunden', nl: 'Wachten op klant', ru: 'Ожидает клиента' },
      bookingConfirmed: { en: 'Booking confirmed', fr: 'Réservation confirmée', es: 'Reserva confirmada', it: 'Prenotazione confermata', de: 'Buchung bestätigt', nl: 'Boeking bevestigd', ru: 'Бронирование подтверждено' },
      fullyPaid: { en: 'Fully paid', fr: 'Tout est réglé', es: 'Todo pagado', it: 'Tutto pagato', de: 'Vollständig bezahlt', nl: 'Volledig betaald', ru: 'Полностью оплачено' },
      paymentPending: { en: 'Payment pending', fr: 'Paiement en attente', es: 'Pago pendiente', it: 'Pagamento in sospeso', de: 'Zahlung ausstehend', nl: 'Betaling in behandeling', ru: 'Ожидает оплаты' },
      cancelled: { en: 'Cancelled', fr: 'Annulée', es: 'Cancelada', it: 'Annullata', de: 'Storniert', nl: 'Geannuleerd', ru: 'Отменено' },
      chooseWarrantyCash: { en: 'Use cash warranty', fr: 'Caution en espèces', es: 'Garantía en efectivo', it: 'Cauzione in contanti', de: 'Barkaution nutzen', nl: 'Contante waarborg', ru: 'Залог наличными' },
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

  private formatDisplayDate(value: any): string {
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
    return value?.status === 'completed' ||
      value?.bookingStatus === 'completed' ||
      value?.raw?.importedManually === true ||
      value?.raw?.entryMode === 'historical' ||
      value?.raw?.raw?.entryMode === 'historical' ||
      value?.payments?.deposit?.source === 'manual_historical_import';
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
