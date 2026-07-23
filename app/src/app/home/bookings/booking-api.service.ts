import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StoreDbService, UtilsService } from 'godigital-lib';
import { BoatContextService } from '../../services/boat-context.service';

export interface AlegriaPricingModel {
  day: number;
  halfDay: number;
  sunset: number;
  evening: number;
  skipperPrice: number;
  cleaningPrice: number;
  nominalGuests: number;
  extraGuestPrice: number;
  minGuests: number;
  maxGuests: number;
  seasonalMultipliers?: Array<{ startDate: string; endDate: string; multiplier: number; label?: string; }>;
  specialDates?: Array<{ date: string; price?: number; multiplier?: number; label?: string; }>;
  updatedAt?: number;
}

export interface AlegriaBooking {
  bookingId: string;
  customerName: string;
  email: string;
  phone?: string;
  outingType: string;
  outingDate: string;
  departureTime?: string;
  arrivalTime?: string;
  timePeriod?: string;
  pricingModelSnapshot?: any;
  pricingMultiplier?: number;
  extraGuestPrice?: number;
  extraGuestCount?: number;
  basePrice?: number;
  bookingPricePeriod?: string;
  selectedOptions?: any[];
  destination?: string;
  startMarina?: string;
  passengers?: number;
  totalPrice: number;
  customerEmail?: string;
  totalAmount?: number;
  onlinePayableAmount?: number;
  appPayableAmount?: number;
  remainingFeesAmount?: number;
  remainingOnboardAmount?: number;
  skipperPaid?: boolean;
  skipperStatus?: string;
  offerCleaningPrice?: number;
  estimatedOptionsPrice?: number;
  estimatedCleaningPrice?: number;
  estimatedSkipperPrice?: number;
  estimatedBoatPrice?: number;
  durationHours?: number;
  endTime?: string;
  startTime?: string;
  bookingPricePeriodLabel?: string;
  estimatedExtraGuestCount?: number;
  estimatedExtraGuestsAmount?: number;
  estimatedCalendarMultiplier?: number;
  estimatedBasePrice?: number;
  estimatedPrice?: number;
  depositAmount?: number;
  warrantyAmount?: number;
  termsAccepted?: boolean;
  tcAccepted?: boolean;
  tAndCAccepted?: boolean;
  termsAndConditionsAccepted?: boolean;
  acceptedTerms?: boolean;
  termsAcceptedAt?: number;
  warrantyPaymentChoice?: string;
  warrantyMethod?: string;
  warrantySelected?: boolean;
  warrantySelectedAt?: number;
  warrantyRegistered?: boolean;
  warrantySetupIntentId?: string;
  warrantyPaymentMethodId?: string;
  warrantyCardLast4?: string;
  setupIntentAmount?: number;
  warrantySetupIntentAmount?: number;
  warrantyCashSelected?: boolean;
  damageReported?: boolean;
  damageCharged?: boolean;
  balanceAmount?: number;
  balancePaid?: boolean;
  balancePaymentMethod?: string;
  balancePaidAt?: number;
  extrasAmount?: number;
  depositStatus?: string | boolean;
  depositPaid?: boolean;
  paymentStripeCheckoutSessionId?: string;
  stripeCheckoutSessionId?: string;
  stripePaymentIntentId?: string;
  warrantyStatus?: string | boolean;
  bookingStatus?: string | boolean;
  ownerId?: string;
  skipperId?: string;
  customerPhone?: string;
  payments?: any;
  paymentStatus?: any;
  comments?: string;
  extraServices?: any[];
  refunds?: any[];
  proposalBoatPrice?: number;
  proposalSkipperPrice?: number;
  proposalExtraServicesPrice?: number;
  offerNotes?: string;
  bookingSource?: string;
  source?: string;
  externalPlatform?: string;
  externalPlatformName?: string;
  externalPlatformBookingRef?: string;
  platformBookingReference?: string;
  platformReservationNumber?: string;
  externalPlatformListingName?: string;
  externalPlatformUrl?: string;
  externalPlatformPaidAmount?: number;
  externalPlatformNetOwnerAmount?: number;
  externalPlatformTotalClientAmount?: number;
  externalPlatformRemainingOwnerAmount?: number;
  externalPortAmount?: number;
  externalCashOnBoardAmount?: number;
  externalTotalRemainingAmount?: number;
  externalPaymentItems?: any[];
  externalDocuments?: string;
  requestNeedsAdminOffer?: boolean;
  pricingToBeFinalizedByAdmin?: boolean;
  clientNextStep?: string;
  requestedOptions?: any[];
  offerCreatedAt?: number;
  offerCreatedFromRequestId?: string;
  requestSubmittedAt?: number;
  boatId?: string;
  boatName?: string;
  boatType?: string;
  boatManufacturer?: string;
  boatModel?: string;
  boatYear?: number;
  boatRegistrationNumber?: string;
  raw?: any;
}

@Injectable({ providedIn: 'root' })
export class BookingApiService {
  private readonly collectionName = 'bnBookings';
  private get pricingModelPath(): string { return `bnPricingModel/${this.boatContext.boatId}`; }

  private readonly restDatabaseUrls = [    'https://adn-dev-4d05d.firebaseio.com',
  ];

  private fallbackBookings: AlegriaBooking[] = [];

  constructor(
    private http: HttpClient,
    private utilsSvc: UtilsService,
    private storeDb: StoreDbService,
    private boatContext: BoatContextService,
  ) {}


  getDefaultPricingModel(): AlegriaPricingModel {
    return { day: 1200, halfDay: 900, sunset: 600, evening: 900, skipperPrice: 300, cleaningPrice: 150,
      nominalGuests: 8,
      extraGuestPrice: 60,
      minGuests: 1,
      maxGuests: 12,
      seasonalMultipliers: [
        { startDate: '2026-07-01', endDate: '2026-08-31', multiplier: 1.20, label: 'High season' }
      ],
      specialDates: [],
    };
  }

  async getPricingModel(): Promise<AlegriaPricingModel> {
    // One pricing source per boat.
    try {
      const [operational, cms] = await Promise.all([
        this.readFirebasePath(`/bnPricingModel/${this.boatContext.boatId}`).catch(() => null),
        Promise.resolve(null),
      ]);
      return {
        ...this.getDefaultPricingModel(),
        ...(operational || {}),
        ...(cms || {}),
      };
    } catch {
      return this.getDefaultPricingModel();
    }
  }

  async savePricingModel(model: AlegriaPricingModel): Promise<void> {
    const payload = { ...this.getDefaultPricingModel(), ...(model || {}), updatedAt: Date.now() };
    const store: any = this.storeDb as any;
    const util: any = this.utilsSvc as any;

    for (const db of this.getRealtimeDatabaseCandidates(store, util)) {
      try {
        await db.ref(this.pricingModelPath).set(payload);
        return;
      } catch {}
    }

    for (const baseUrl of this.restDatabaseUrls) {
      try {
        await this.http.put(`${baseUrl.replace(/\/+$/, '')}/${this.pricingModelPath}.json`, payload).toPromise();
        return;
      } catch {}
    }

    if (typeof store.updateObject === 'function') {
      await store.updateObject('bnPricingModel', payload, this.boatContext.boatId);
      return;
    }

    throw new Error('Unable to save pricing model.');
  }

  getBookings(email?: string): Observable<AlegriaBooking[]> {
    return from(this.getBookingsFromFirebase(email)).pipe(
      catchError(() => this.getBookingsFromBackend(email)),
      catchError(() => of(this.fallbackBookings))
    );
  }


  async createBooking(input: Partial<AlegriaBooking>): Promise<AlegriaBooking> {
    const now = Date.now();
    const bookingId = input.bookingId || `booking_${now}_${Math.random().toString(36).slice(2, 8)}`;
    const anyInput: any = input || {};
    const proposalBoatPrice = Number(anyInput.proposalBoatPrice ?? anyInput.estimatedBoatPrice ?? anyInput.boatPrice ?? 0) || 0;
    const proposalSkipperPrice = Number(anyInput.proposalSkipperPrice ?? anyInput.estimatedSkipperPrice ?? anyInput.skipperCashAmount ?? 0) || 0;
    const proposalExtraServicesPrice = Number(anyInput.proposalExtraServicesPrice ?? anyInput.estimatedExtraGuestsAmount ?? anyInput.estimatedOptionsPrice ?? anyInput.extraServicesPrice ?? 0) || 0;
    const calculatedTotal = proposalBoatPrice + proposalSkipperPrice + proposalExtraServicesPrice;
    const totalPrice = Number(anyInput.totalPrice ?? anyInput.totalAmount ?? anyInput.estimatedPrice ?? calculatedTotal ?? 0) || calculatedTotal || 0;
    const skipperCashAmount = Number(anyInput.skipperCashAmount ?? proposalSkipperPrice ?? 0) || 0;
    const onlinePayableAmount = Number(anyInput.onlinePayableAmount ?? anyInput.appPayableAmount ?? Math.max(0, totalPrice - skipperCashAmount)) || 0;
    const explicitDeposit = Number(anyInput.depositAmount ?? 0) || 0;
    const depositAmount = explicitDeposit > 0 ? explicitDeposit : Math.round(onlinePayableAmount * 0.10 * 100) / 100;
    const explicitBalance = Number(anyInput.balanceAmount ?? anyInput.remainingFeesAmount ?? anyInput.remainingOnboardAmount ?? 0) || 0;
    const balanceAmount = explicitBalance > 0 ? explicitBalance : Math.max(0, Math.round((onlinePayableAmount - depositAmount) * 100) / 100);
    const isConfirmed = anyInput.bookingStatus === true || String(anyInput.bookingStatus || anyInput.status || '').toLowerCase() === 'confirmed';
    const isDepositPaid = anyInput.depositPaid === true || anyInput.depositStatus === true || anyInput.depositStatus === 'paid' || anyInput.paymentStatus === true || anyInput.paymentStatus === 'paid';

    const booking: AlegriaBooking = {
      ...(input as any),
      bookingId,
      customerName: input.customerName || anyInput.customerName || '',
      email: input.email || anyInput.customerEmail || '',
      phone: input.phone || input.customerPhone || '',
      outingType: input.outingType || 'Online booking',
      outingDate: input.outingDate || '',
      departureTime: input.departureTime || anyInput.startTime || anyInput.timePeriod || '',
      arrivalTime: input.arrivalTime || anyInput.endTime || '',
      passengers: Number(input.passengers || 0),
      totalPrice,
      totalAmount: totalPrice,
      onlinePayableAmount,
      appPayableAmount: onlinePayableAmount,
      skipperCashAmount,
      proposalBoatPrice: anyInput.proposalBoatPrice ?? proposalBoatPrice,
      proposalSkipperPrice: anyInput.proposalSkipperPrice ?? proposalSkipperPrice,
      proposalExtraServicesPrice: anyInput.proposalExtraServicesPrice ?? proposalExtraServicesPrice,
      depositAmount,
      balanceAmount,
      remainingFeesAmount: balanceAmount,
      remainingOnboardAmount: balanceAmount,
      warrantyAmount: Number(input.warrantyAmount || 500),
      bookingStatus: anyInput.bookingStatus ?? (isConfirmed ? 'confirmed' : 'not_confirmed'),
      status: anyInput.status || (isConfirmed ? 'confirmed' : 'not_confirmed'),
      bookingRequestStatus: anyInput.bookingRequestStatus || (isConfirmed ? 'confirmed' : 'not_confirmed'),
      depositStatus: anyInput.depositStatus ?? (isDepositPaid ? 'paid' : 'pending'),
      depositPaid: isDepositPaid,
      paymentStatus: anyInput.paymentStatus ?? (isDepositPaid ? 'paid' : 'pending'),
      balancePaid: anyInput.balancePaid === true || anyInput.balanceStatus === 'paid',
      warrantyStatus: input.warrantyStatus || false,
      boatId: input.boatId || this.boatContext.boatId,
      ownerId: input.ownerId || this.boatContext.boatId,
      skipperId: anyInput.skipperId || '',
      createdTS: anyInput.createdTS || now,
      modifiedTS: now,
    } as any;

    await this.updateBooking(bookingId, booking as any);
    return booking;
  }

  getBookingDirect(bookingId: string): Observable<AlegriaBooking | undefined> {
    return from(this.getBookingDirectFromFirebase(bookingId)).pipe(
      catchError(() => of(undefined))
    );
  }

  private async getBookingDirectFromFirebase(bookingId: string): Promise<AlegriaBooking | undefined> {
    if (!bookingId) return undefined;

    for (const baseUrl of this.restDatabaseUrls) {
      try {
        const direct = await this.http.get<any>(`${baseUrl.replace(/\/+$/, '')}/${this.collectionName}/${encodeURIComponent(bookingId)}.json`).toPromise();
        if (direct) return this.normalizeBooking({ bookingId, ...direct } as any);
      } catch {}
    }

    const store: any = this.storeDb as any;
    const util: any = this.utilsSvc as any;
    for (const db of this.getRealtimeDatabaseCandidates(store, util)) {
      try {
        const snap = await db.ref(`${this.collectionName}/${bookingId}`).once('value');
        const value = snap && typeof snap.val === 'function' ? snap.val() : null;
        if (value) return this.normalizeBooking({ bookingId, ...value } as any);
      } catch {}
    }

    return undefined;
  }

  getBooking(bookingId: string): Observable<AlegriaBooking | undefined> {
    return from(this.getBookingFromFirebase(bookingId)).pipe(
      catchError(() => this.getBookingFromBackend(bookingId)),
      catchError(() => of(undefined))
    );
  }

  createDepositCheckout(payload: {
    bookingId: string;
    offerId?: string;
    ownerId: string;
    amount?: number;
    depositAmount: number;
    totalAmount?: number;
    currency?: string;
    paymentType?: string;
    authorizeOnly?: boolean;
    captureMethod?: string;
    capture_method?: string;
    depositAuthorizationOnly?: boolean;
    customerEmail?: string;
    customerName?: string;
    customerPhone?: string;
    outingType?: string;
    outingDate?: string;
    termsAccepted?: boolean;
    tncAccepted?: boolean;
    customerTermsAccepted?: boolean;
    termsAcceptedAt?: number | string | null;
    tncAcceptedAt?: number | string | null;
    successUrl: string;
    cancelUrl: string;
  }): Observable<any> {
    const enrichedPayload = {
      ...payload,
      offerId: payload.offerId || payload.bookingId,
      amount: Number(payload.amount || payload.depositAmount || 0),
      depositAmount: Number(payload.depositAmount || payload.amount || 0),
      currency: payload.currency || 'eur',
      paymentType: payload.paymentType || 'deposit',
    };

    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-deposit-checkout`,
      `${this.baseUrl}/api/payments/create-deposit-checkout-session`,
      `${this.baseUrl}/stripe/deposit-checkout`,
    ], enrichedPayload);
  }

  completeDepositPayment(payload: {
    bookingId: string;
    ownerId?: string;
    checkoutSessionId?: string;
    sessionId?: string;
    amount?: number;
    depositAmount?: number;
  }): Observable<any> {
    const endpoints = [
      `${this.baseUrl}/pay/outing-deposit-complete`,
      `${this.baseUrl}/api/payments/complete-deposit-payment`,
      `${this.baseUrl}/stripe/deposit-complete`,
    ];

    return new Observable((observer) => {
      const markLocally = async (backendResponse: any = {}, backendError: any = null) => {
        try {
          const localResult = await this.markDepositPaidLocally(payload, backendResponse);
          observer.next({ ...(backendResponse || {}), ...(localResult || {}), localDepositSaved: true, backendError: backendError?.message || backendError?.error?.message || '' });
          observer.complete();
        } catch (localError) {
          observer.error(localError);
        }
      };

      this.postFirstAvailable(endpoints, payload).subscribe({
        next: (response) => markLocally(response),
        error: (error) => markLocally({}, error),
      });
    });
  }

  private async markDepositPaidLocally(payload: { bookingId: string; checkoutSessionId?: string; sessionId?: string; amount?: number; depositAmount?: number; }, backendResponse: any = {}): Promise<any> {
    const bookingId = String(payload.bookingId || '').trim();
    if (!bookingId) throw new Error('Missing booking id for local deposit update.');

    const existing = await this.getBookingFromFirebase(bookingId).catch(() => undefined) as any;
    const raw = existing?.raw || existing || {};
    const now = Date.now();
    const existingPayments = raw.payments || {};
    const explicitAmount = Number(payload.depositAmount ?? payload.amount ?? backendResponse?.depositAmount ?? backendResponse?.amount ?? 0) || 0;
    const storedDeposit = Number(raw.depositAmount ?? existingPayments?.deposit?.amount ?? 0) || 0;
    const paidAmount = explicitAmount > 0 ? explicitAmount : this.normalizePaymentAmount(storedDeposit);
    const sessionId = String(payload.sessionId || payload.checkoutSessionId || backendResponse?.sessionId || backendResponse?.checkoutSessionId || backendResponse?.stripeCheckoutSessionId || '').trim();
    const paymentIntentId = String(backendResponse?.paymentIntentId || backendResponse?.stripePaymentIntentId || '').trim();

    await this.updateBooking(bookingId, {
      depositPaid: true,
      depositStatus: 'paid',
      depositPaymentStatus: 'paid',
      depositPaidAmount: paidAmount,
      paidDepositAmount: paidAmount,
      depositPaymentMethod: 'Stripe',
      depositPaidAt: raw.depositPaidAt || now,
      paymentStatus: 'deposit_paid',
      paymentStatusLabel: 'deposit_paid',
      payments: {
        ...existingPayments,
        deposit: {
          ...(existingPayments.deposit || {}),
          paid: true,
          status: 'paid',
          paymentStatus: 'paid',
          paymentType: 'deposit',
          type: 'deposit',
          method: 'Stripe',
          amount: paidAmount,
          amount_total: Math.round(paidAmount * 100),
          currency: 'eur',
          bookingId,
          ownerId: raw.ownerId || 'alegria',
          checkoutSessionId: sessionId,
          stripeCheckoutSessionId: sessionId,
          stripePaymentIntentId: paymentIntentId,
          paidAt: existingPayments.deposit?.paidAt || now,
          modifiedTS: now,
          source: 'stripe_return',
        },
      },
    } as any);

    return { bookingId, depositPaid: true, depositAmount: paidAmount };
  }

  createBalanceCheckout(payload: {
    bookingId: string;
    offerId?: string;
    ownerId: string;
    amount?: number;
    balanceAmount: number;
    totalAmount?: number;
    currency?: string;
    paymentType?: string;
    customerEmail?: string;
    customerName?: string;
    customerPhone?: string;
    outingType?: string;
    outingDate?: string;
    termsAccepted?: boolean;
    tncAccepted?: boolean;
    customerTermsAccepted?: boolean;
    termsAcceptedAt?: number | string | null;
    tncAcceptedAt?: number | string | null;
    successUrl: string;
    cancelUrl: string;
  }): Observable<any> {
    const balanceAmount = Number(payload.balanceAmount || payload.amount || 0);
    const enrichedPayload = {
      ...payload,
      offerId: payload.offerId || payload.bookingId,
      amount: balanceAmount,
      balanceAmount,
      // Some deployed backends only have the original deposit checkout route.
      // Keep the balance metadata, but also provide depositAmount so that legacy
      // checkout handlers can still create a Stripe session for the 90% payment.
      depositAmount: balanceAmount,
      remainingAmount: balanceAmount,
      paymentType: payload.paymentType || 'balance',
      checkoutType: 'balance',
      description: `Remaining 90% balance for booking ${payload.bookingId}`,
      currency: payload.currency || 'eur',
    };

    return this.postFirstAvailable([
      // Routes present in the latest backend app(36).zip.
      `${this.baseUrl}/pay/outing-balance-checkout`,
      `${this.baseUrl}/pay/outing-remaining-checkout`,
      `${this.baseUrl}/api/payments/create-balance-checkout-session`,
      `${this.baseUrl}/api/payments/create-remaining-checkout-session`,
      `${this.baseUrl}/stripe/balance-checkout`,
      `${this.baseUrl}/stripe/remaining-checkout`,

      // Practical fallback: latest backend also has extra-service checkout.
      // This still redirects to Stripe for the 90% amount; the booking-detail return handler
      // records balancePaid=true because successUrl keeps paymentType=balance.
      `${this.baseUrl}/pay/outing-extra-service-checkout`,
      `${this.baseUrl}/api/payments/create-extra-service-checkout-session`,
      `${this.baseUrl}/stripe/extra-service-checkout`,
    ], {
      ...enrichedPayload,
      extraServiceId: `balance_${payload.bookingId}`,
      title: 'Remaining 90% balance',
      name: 'Remaining 90% balance',
    });
  }

  createWarrantySetup(payload: {
    bookingId: string;
    offerId?: string;
    ownerId: string;
    warrantyAmount: number;
    amount?: number;
    currency?: string;
    customerEmail?: string;
    customerName?: string;
    customerPhone?: string;
    outingType?: string;
    outingDate?: string;
    termsAccepted?: boolean;
    tncAccepted?: boolean;
    customerTermsAccepted?: boolean;
    termsAcceptedAt?: number | string | null;
    tncAcceptedAt?: number | string | null;
    successUrl: string;
    cancelUrl: string;
  }): Observable<any> {
    // Keep the payload compatible with both the legacy endpoint and the newer
    // warranty SetupIntent handlers. Some backend versions require the generic
    // amount/offerId/paymentType aliases even for a booking-based warranty.
    const amount = Number(payload.warrantyAmount ?? payload.amount ?? 0);
    const enrichedPayload = {
      ...payload,
      bookingId: payload.bookingId,
      offerId: payload.offerId || payload.bookingId,
      warrantyAmount: amount,
      amount,
      ownerId: payload.ownerId || 'alegria',
      currency: payload.currency || 'eur',
      paymentType: 'warranty',
      checkoutType: 'warranty_setup',
    };

    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-warranty-checkout`,
      `${this.baseUrl}/api/payments/create-warranty-checkout-session`,
      `${this.baseUrl}/api/payments/create-warranty-setup-session`,
      `${this.baseUrl}/stripe/warranty-setup`,
      `${this.baseUrl}/stripe/warranty-checkout`,
    ], enrichedPayload);
  }




  createSkipperFeeCheckout(payload: {
    bookingId: string;
    offerId?: string;
    ownerId: string;
    amount: number;
    skipperAmount?: number;
    totalAmount?: number;
    currency?: string;
    customerEmail?: string;
    customerName?: string;
    customerPhone?: string;
    outingType?: string;
    outingDate?: string;
    termsAccepted?: boolean;
    tncAccepted?: boolean;
    customerTermsAccepted?: boolean;
    termsAcceptedAt?: number | string | null;
    tncAcceptedAt?: number | string | null;
    successUrl: string;
    cancelUrl: string;
  }): Observable<any> {
    const amount = Number(payload.amount || payload.skipperAmount || 0);
    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-skipper-fee-checkout`,
      `${this.baseUrl}/api/payments/create-skipper-fee-checkout-session`,
      `${this.baseUrl}/stripe/skipper-fee-checkout`,
      `${this.baseUrl}/pay/outing-extra-service-checkout`,
      `${this.baseUrl}/api/payments/create-extra-service-checkout-session`,
      `${this.baseUrl}/stripe/extra-service-checkout`,
      `${this.baseUrl}/pay/outing-deposit-checkout`,
      `${this.baseUrl}/api/payments/create-deposit-checkout-session`,
      `${this.baseUrl}/stripe/deposit-checkout`,
    ], {
      ...payload,
      offerId: payload.offerId || payload.bookingId,
      amount,
      skipperAmount: amount,
      extraServiceAmount: amount,
      depositAmount: amount,
      extraServiceId: `skipper_${payload.bookingId}`,
      title: 'Skipper fee',
      name: 'Skipper fee',
      description: `Skipper fee for booking ${payload.bookingId}`,
      paymentType: 'skipper_fee',
      checkoutType: 'skipper_fee',
      currency: payload.currency || 'eur'
    });
  }



  completeBalancePayment(payload: {
    bookingId: string;
    ownerId?: string;
    checkoutSessionId?: string;
    sessionId?: string;
    amount?: number;
    balanceAmount?: number;
  }): Observable<any> {
    const endpoints = [
      `${this.baseUrl}/pay/outing-balance-complete`,
      `${this.baseUrl}/pay/outing-remaining-complete`,
      `${this.baseUrl}/api/payments/complete-balance-payment`,
      `${this.baseUrl}/api/payments/complete-remaining-payment`,
      `${this.baseUrl}/stripe/balance-complete`,
      `${this.baseUrl}/stripe/remaining-complete`,
    ];

    return new Observable((observer) => {
      const markLocally = async (backendResponse: any = {}, backendError: any = null) => {
        try {
          const localResult = await this.markBalancePaidLocally(payload, backendResponse);
          observer.next({ ...(backendResponse || {}), ...(localResult || {}), localBalanceSaved: true, backendError: backendError?.message || backendError?.error?.message || '' });
          observer.complete();
        } catch (localError) {
          observer.error(localError);
        }
      };

      this.postFirstAvailable(endpoints, payload).subscribe({
        next: (response) => markLocally(response),
        error: (error) => markLocally({}, error),
      });
    });
  }

  private async markBalancePaidLocally(payload: { bookingId: string; checkoutSessionId?: string; sessionId?: string; amount?: number; balanceAmount?: number; }, backendResponse: any = {}): Promise<any> {
    const bookingId = String(payload.bookingId || '').trim();
    if (!bookingId) throw new Error('Missing booking id for local balance update.');

    const existing = await this.getBookingFromFirebase(bookingId).catch(() => undefined) as any;
    const raw = existing?.raw || existing || {};
    const now = Date.now();
    const existingPayments = raw.payments || {};
    const explicitAmount = Number(payload.balanceAmount ?? payload.amount ?? backendResponse?.balanceAmount ?? backendResponse?.amount ?? 0) || 0;
    const storedBalance = Number(
      raw.balanceAmount
      ?? raw.remainingFeesAmount
      ?? raw.remainingOnboardAmount
      ?? raw.remainingAlegriaRevenue
      ?? raw.alegriaRemaining
      ?? existingPayments?.pendingAlegria?.amount
      ?? existingPayments?.balance?.amount
      ?? 0
    ) || 0;
    const computedRemaining = this.computeRemainingAlegriaAmount(raw);
    const paidAmount = explicitAmount > 0 ? explicitAmount : this.normalizePaymentAmount(storedBalance || computedRemaining);
    const sessionId = String(payload.sessionId || payload.checkoutSessionId || backendResponse?.sessionId || backendResponse?.checkoutSessionId || backendResponse?.stripeCheckoutSessionId || '').trim();
    const paymentIntentId = String(backendResponse?.paymentIntentId || backendResponse?.stripePaymentIntentId || '').trim();

    await this.updateBooking(bookingId, {
      balancePaid: true,
      balanceStatus: 'paid',
      balancePaymentStatus: 'paid',
      balancePaymentMethod: 'Stripe',
      balancePaidAt: raw.balancePaidAt || now,
      remainingFeesAmount: 0,
      remainingOnboardAmount: 0,
      remainingAlegriaRevenue: 0,
      alegriaPaid: true,
      alegriaPaidAmount: (Number(raw.alegriaPaidAmount || existingPayments?.alegria?.amount || existingPayments?.balance?.amount || 0) || 0) + paidAmount,
      alegriaPaymentStatus: 'paid',
      paymentStatus: 'balance_paid',
      paymentStatusLabel: 'balance_paid',
      payments: {
        ...existingPayments,
        alegria: {
          ...(existingPayments.alegria || {}),
          paid: true,
          status: 'paid',
          paymentStatus: 'paid',
          paymentType: 'alegria_balance',
          type: 'alegria_balance',
          method: 'Stripe',
          amount: (Number(existingPayments?.alegria?.amount || 0) || 0) + paidAmount,
          amount_total: Math.round(((Number(existingPayments?.alegria?.amount || 0) || 0) + paidAmount) * 100),
          currency: 'eur',
          bookingId,
          ownerId: raw.ownerId || 'alegria',
          checkoutSessionId: sessionId,
          stripeCheckoutSessionId: sessionId,
          stripePaymentIntentId: paymentIntentId,
          paidAt: existingPayments.alegria?.paidAt || now,
          modifiedTS: now,
          source: 'stripe_return',
        },
        pendingAlegria: null,
        balance: {
          ...(existingPayments.balance || {}),
          paid: true,
          status: 'paid',
          paymentStatus: 'paid',
          paymentType: 'balance',
          type: 'balance',
          method: 'Stripe',
          amount: paidAmount,
          amount_total: Math.round(paidAmount * 100),
          currency: 'eur',
          bookingId,
          ownerId: raw.ownerId || 'alegria',
          checkoutSessionId: sessionId,
          stripeCheckoutSessionId: sessionId,
          stripePaymentIntentId: paymentIntentId,
          paidAt: existingPayments.balance?.paidAt || now,
          modifiedTS: now,
          source: 'stripe_return',
        },
      },
    } as any);

    return { bookingId, balancePaid: true, balanceAmount: paidAmount };
  }

  private normalizePaymentAmount(value: number): number {
    const amount = Number(value || 0);
    if (!amount) return 0;
    return amount > 10000 ? Math.round((amount / 100) * 100) / 100 : Math.round(amount * 100) / 100;
  }

  private computeRemainingAlegriaAmount(raw: any): number {
    const n = (...values: any[]): number => {
      for (const value of values) {
        if (value === undefined || value === null || value === '') continue;
        const parsed = Number(value);
        if (Number.isFinite(parsed)) return parsed;
      }
      return 0;
    };

    const payments = raw?.payments || {};
    const source = String(raw?.source || raw?.bookingSource || raw?.externalPlatform || '').toLowerCase();
    const external = !!source && !['direct', 'alegria', 'direct alegria'].includes(source);

    const platformPaid = n(raw?.externalPlatformPaidAmount, payments?.platform?.paidAmount, raw?.raw?.externalPlatformPaidAmount);
    const skipper = n(raw?.skipperCashAmount, raw?.proposalSkipperPrice, payments?.direct?.skipperCashAmount);
    const fuel = external
      ? n(raw?.cleaningCashAmount, payments?.direct?.cleaningCashAmount)
      : n(raw?.proposalFuelPrice, raw?.fuelPrice, raw?.fuelAmount, raw?.offerCleaningPrice);
    const catering = n(raw?.cateringAmount, payments?.direct?.cateringAmount);
    const tips = n(raw?.tipsAmount, raw?.tipAmount, payments?.direct?.tipsAmount, payments?.direct?.tipAmount);
    const drinks = n(raw?.drinksAmount, payments?.direct?.drinksAmount);
    const waterToys = n(raw?.waterToysAmount, payments?.direct?.waterToysAmount);
    const other = n(raw?.otherOnboardAmount, payments?.direct?.otherOnboardAmount);
    const explicitExtras = n(raw?.proposalExtraServicesPrice, raw?.extraServicesPrice, raw?.extrasAmount, raw?.extraServicesAmount);
    const extras = external ? catering + tips + drinks + waterToys + other : explicitExtras;

    let boat = n(raw?.proposalBoatPrice, raw?.boatPrice, raw?.estimatedBoatPrice);
    let customerTotal = n(raw?.totalAmount, raw?.totalPrice, raw?.totalCustomerCost, raw?.customerTotal);
    if (external && customerTotal && !boat) boat = Math.max(0, customerTotal - skipper - fuel - extras);

    const alegriaRevenue = external ? platformPaid + fuel + extras : boat + fuel + extras;
    const alreadyPaid = platformPaid
      + n(payments?.alegria?.amount, payments?.balance?.amount, raw?.alegriaPaidAmount, raw?.balancePaidAmount)
      + n(payments?.deposit?.amount, raw?.depositPaidAmount, raw?.paidDepositAmount);
    return Math.max(0, Math.round((alegriaRevenue - alreadyPaid) * 100) / 100);
  }


  completeWarrantySetup(payload: {
    bookingId: string;
    ownerId?: string;
    checkoutSessionId?: string;
    sessionId?: string;
  }): Observable<any> {
    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-warranty-complete`,
      `${this.baseUrl}/api/payments/complete-warranty-setup`,
      `${this.baseUrl}/stripe/warranty-complete`,
    ], payload);
  }

  getPaymentStatus(bookingId: string): Observable<any> {
    const endpoints = [
      `${this.baseUrl}/pay/outing-payment-status?bookingId=${encodeURIComponent(bookingId)}`,
      `${this.baseUrl}/api/payments/status?bookingId=${encodeURIComponent(bookingId)}`,
    ];

    return new Observable((observer) => {
      let index = 0;
      const tryNext = () => {
        if (index >= endpoints.length) {
          observer.error(new Error('Unable to read payment status.'));
          return;
        }
        this.http.get<any>(endpoints[index++], { withCredentials: true }).subscribe({
          next: (response) => { observer.next(response); observer.complete(); },
          error: () => tryNext(),
        });
      };
      tryNext();
    });
  }


  /**
   * Payment-page source of truth.
   * - Booking/payment state comes from bnBookings/{bookingId}.
   * - Stripe transaction details come only from bnPayment records linked to the booking/offer.
   * This avoids mixing backend summary endpoints with the persisted booking state shown to the customer.
   */
  getPaymentPageState(bookingId: string): Observable<any> {
    return from(this.getPaymentPageStateFromFirebase(bookingId)).pipe(
      catchError((error) => { throw error; })
    );
  }

  private async getPaymentPageStateFromFirebase(bookingId: string): Promise<any> {
    const id = String(bookingId || '').trim();
    if (!id) throw new Error('Missing booking id.');

    const booking = await this.getBookingFromFirebase(id).catch(() => undefined) as any;
    const raw = booking?.raw || booking || {};
    const offerId = String(raw.offerId || raw.relatedBookingId || raw.sourceOfferId || raw.bookingId || id).trim();
    const ids = Array.from(new Set([id, offerId].filter(Boolean)));

    const stripeRecords: any[] = [];
    for (const matchId of ids) {
      const byBooking = await this.fetchBnPaymentRecordsByField('bookingId', matchId).catch(() => null);
      Object.entries(byBooking || {}).forEach(([key, value]: [string, any]) => {
        if (value && typeof value === 'object') stripeRecords.push({ paymentId: value.paymentId || key, ...value });
      });

      const byOffer = await this.fetchBnPaymentRecordsByField('offerId', matchId).catch(() => null);
      Object.entries(byOffer || {}).forEach(([key, value]: [string, any]) => {
        if (value && typeof value === 'object') stripeRecords.push({ paymentId: value.paymentId || key, ...value });
      });
    }

    const unique = new Map<string, any>();
    stripeRecords.forEach((record) => {
      const key = String(record.paymentId || record.stripeCheckoutSessionId || record.stripePaymentIntentId || record.checkoutSessionId || JSON.stringify(record));
      unique.set(key, record);
    });

    return {
      bookingId: id,
      booking: raw,
      payments: raw.payments || {},
      paymentStatus: raw.paymentStatus || null,
      depositStatus: raw.depositStatus || null,
      balanceStatus: raw.balanceStatus || raw.balancePaymentStatus || null,
      warrantyStatus: raw.warrantyStatus || null,
      stripePayments: Array.from(unique.values()),
    };
  }

  private async fetchBnPaymentRecordsByField(field: string, value: string): Promise<any | null> {
    const safeField = encodeURIComponent(`\"${field}\"`).replace(/%5C/g, '');
    const encodedValue = encodeURIComponent(`\"${value}\"`).replace(/%5C/g, '');
    const collection = 'bnPayment';

    for (const baseUrl of this.restDatabaseUrls) {
      try {
        const base = baseUrl.replace(/\/+$/, '');
        const url = `${base}/${collection}.json?orderBy=${safeField}&equalTo=${encodedValue}`;
        const result = await this.http.get<any>(url).toPromise();
        if (result && typeof result === 'object') return result;
      } catch {}
    }

    return null;
  }

  chargeWarranty(bookingId: string, amount: number, reason: string, ownerId?: string): Observable<any> {
    const payload = { bookingId, ownerId, amount, warrantyAmount: amount, reason };
    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-warranty-charge`,
      `${this.baseUrl}/api/payments/charge-warranty`,
      `${this.baseUrl}/stripe/warranty-charge`,
    ], payload);
  }

  releaseWarranty(bookingId: string, ownerId?: string, releasedBy = 'admin'): Observable<any> {
    const payload = { bookingId, ownerId, releasedBy };
    return this.postFirstAvailable([
      `${this.baseUrl}/api/payments/release-warranty`,
      `${this.baseUrl}/pay/outing-warranty-release`,
      `${this.baseUrl}/stripe/warranty-release`,
    ], payload);
  }



  acceptBookingRequest(bookingId: string, ownerId = this.boatContext.boatId, note = ''): Observable<any> {
    const payload = { bookingId, ownerId, note };
    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-booking-accept`,
      `${this.baseUrl}/api/bookings/accept-request`,
    ], payload);
  }

  rejectBookingRequest(bookingId: string, reason: string, ownerId = this.boatContext.boatId): Observable<any> {
    const payload = { bookingId, ownerId, reason };
    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-booking-reject`,
      `${this.baseUrl}/api/bookings/reject-request`,
    ], payload);
  }

  getExtraServicesCatalog(): Observable<any[]> {
    return from(this.readFirebasePath(`/bnFleet/${this.boatContext.boatId}/extraServices`)).pipe(
      map((raw: any) => {
        const catalog = this.unwrapFirebaseNamedObject(raw, 'extraServices');
        return this.normalizeArray(catalog)
          .filter((item: any) => item && item.active !== false)
          .sort((a: any, b: any) => Number(a.sortOrder ?? 999) - Number(b.sortOrder ?? 999));
      }),
      catchError(() => of([]))
    );
  }

  async createExtraServiceRequest(bookingId: string, extraService: any): Promise<void> {
    const id = extraService.id || `extra_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const payload = {
      ...extraService,
      id,
      bookingId,
      paymentType: 'extra_service',
      status: 'pending',
      paid: false,
      createdTS: Date.now(),
      modifiedTS: Date.now(),
    };

    const existing = await this.getBookingFromFirebase(bookingId).catch(() => undefined);
    const raw = existing?.raw || existing || {};
    const extraServices = Array.isArray((raw as any).extraServices) ? [...(raw as any).extraServices] : [];
    const index = extraServices.findIndex((item: any) => item.id === id);
    if (index >= 0) {
      extraServices[index] = payload;
    } else {
      extraServices.push(payload);
    }
    await this.updateBooking(bookingId, { ...(raw as any), extraServices } as any);
  }

  createExtraServiceCheckout(payload: {
    bookingId: string;
    extraServiceId: string;
    ownerId: string;
    amount: number;
    description?: string;
    currency?: string;
    customerEmail?: string;
    customerName?: string;
    customerUserId?: string;
    category?: string;
    successUrl: string;
    cancelUrl: string;
  }): Observable<any> {
    const amount = Number(payload.amount || 0);
    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-extra-service-checkout`,
      `${this.baseUrl}/api/payments/create-extra-service-checkout-session`,
      `${this.baseUrl}/stripe/extra-service-checkout`,
      // Legacy fallback: create a standard Stripe checkout session with extra-service metadata.
      `${this.baseUrl}/pay/outing-deposit-checkout`,
      `${this.baseUrl}/api/payments/create-deposit-checkout-session`,
      `${this.baseUrl}/stripe/deposit-checkout`,
    ], {
      ...payload,
      amount,
      extraServiceAmount: amount,
      depositAmount: amount,
      amountUnit: 'eur',
      paymentType: 'extra_service',
      checkoutType: 'extra_service',
      currency: payload.currency || 'eur'
    });
  }

  createAdhocCheckout(payload: {
    bookingId?: string;
    adhocPaymentId?: string;
    ownerId: string;
    amount: number;
    description?: string;
    currency?: string;
    customerEmail?: string;
    customerName?: string;
    customerUserId?: string;
    category?: string;
    successUrl: string;
    cancelUrl: string;
    standalonePayment?: boolean;
  }): Observable<any> {
    const adhocPaymentId = payload.adhocPaymentId || `adhoc_${Date.now()}`;
    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-adhoc-checkout`,
      `${this.baseUrl}/pay/outing-ad-hoc-checkout`,
      `${this.baseUrl}/api/payments/create-adhoc-checkout-session`,
      `${this.baseUrl}/api/payments/create-ad-hoc-checkout-session`,
      `${this.baseUrl}/stripe/adhoc-checkout`,
      `${this.baseUrl}/stripe/ad-hoc-checkout`,
      // Compatibility fallback for older deployments.
      `${this.baseUrl}/pay/outing-extra-service-checkout`,
      `${this.baseUrl}/api/payments/create-extra-service-checkout-session`,
      `${this.baseUrl}/stripe/extra-service-checkout`,
    ], {
      ...payload,
      adhocPaymentId,
      extraServiceId: adhocPaymentId,
      amount: Number(payload.amount || 0),
      adhocAmount: Number(payload.amount || 0),
      depositAmount: Number(payload.amount || 0),
      amountUnit: 'eur',
      paymentType: 'ad_hoc',
      checkoutType: 'ad_hoc',
      currency: payload.currency || 'eur'
    });
  }

  refundBooking(payload: {
    bookingId: string;
    ownerId: string;
    amount: number;
    paymentType?: 'deposit' | 'balance' | string;
    reason?: string;
  }): Observable<any> {
    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-refund`,
      `${this.baseUrl}/api/payments/refund`,
      `${this.baseUrl}/stripe/booking-refund`,
    ], payload);
  }

  private async readFirebasePath(path: string): Promise<any> {
    for (const baseUrl of this.restDatabaseUrls) {
      try {
        return await this.http.get<any>(`${baseUrl}${path}.json`).toPromise();
      } catch {}
    }
    throw new Error(`Unable to read ${path}`);
  }

  private postFirstAvailable(endpoints: string[], payload: any): Observable<any> {
    return new Observable((observer) => {
      let index = 0;
      let lastError: any = null;

      const tryNext = () => {
        if (index >= endpoints.length) {
          const backendMessage = lastError?.error?.error || lastError?.error?.message || lastError?.message;
          observer.error(new Error(backendMessage || 'No checkout endpoint is available on the deployed backend.'));
          return;
        }

        // Do not send cookies for Stripe checkout creation.
        // The backend sent by the project uses Access-Control-Allow-Origin: *;
        // withCredentials=true can make browsers reject the call before the route is reached.
        this.http.post<any>(endpoints[index++], payload).subscribe({
          next: (response) => { observer.next(response); observer.complete(); },
          error: (error) => {
            lastError = error;

            // 400/401/403/409 are application-level responses from a route that exists
            // (for example: Terms & Conditions not accepted, missing amount, cancelled booking).
            // Retrying fallback endpoint aliases only creates duplicate console errors and can
            // hide the actual backend message. Only retry for routing/network style failures.
            const status = Number(error?.status || 0);
            if ([400, 401, 403, 409].includes(status)) {
              const backendMessage = error?.error?.error || error?.error?.message || error?.message;
              observer.error(new Error(backendMessage || 'The payment request was rejected by the backend.'));
              return;
            }

            tryNext();
          },
        });
      };
      tryNext();
    });
  }


  isRequestBooking(booking: Partial<AlegriaBooking> | undefined): boolean {
    const status = String((booking as any)?.bookingRequestStatus || (booking as any)?.status || '').toLowerCase();
    return status === 'request_submitted' ||
      status === 'admin_pricing_in_progress' ||
      (booking as any)?.requestNeedsAdminOffer === true ||
      (booking as any)?.pricingToBeFinalizedByAdmin === true;
  }

  canCustomerManageRequest(booking: Partial<AlegriaBooking> | undefined): boolean {
    if (!booking) return false;
    const status = String((booking as any).bookingRequestStatus || (booking as any).status || '').toLowerCase();
    const issued = (booking as any).offerCreatedFromRequestId || (booking as any).offerId || (booking as any).relatedOfferId || (booking as any).offerIssued === true;
    if (issued) return false;
    return this.isRequestBooking(booking) && !['cancelled_by_customer', 'deleted', 'offer_issued', 'offer_sent', 'accepted', 'confirmed'].includes(status);
  }

  async updateCustomerRequest(bookingId: string, payload: Partial<AlegriaBooking>): Promise<void> {
    const patch: Partial<AlegriaBooking> = {
      ...payload,
      bookingRequestStatus: 'request_updated_by_customer',
      status: 'request_updated_by_customer',
      requestUpdatedByCustomerAt: Date.now(),
      requestNeedsAdminOffer: true,
      pricingToBeFinalizedByAdmin: true,
    } as any;
    await this.updateBooking(bookingId, patch);
  }

  async cancelCustomerRequest(bookingId: string): Promise<void> {
    await this.updateBooking(bookingId, {
      status: 'cancelled_by_customer',
      bookingRequestStatus: 'cancelled_by_customer',
      requestCancelledByCustomerAt: Date.now(),
      requestNeedsAdminOffer: false,
      pricingToBeFinalizedByAdmin: false,
    } as any);
  }

  async deleteBooking(bookingId: string): Promise<void> {
    const store: any = this.storeDb as any;
    const util: any = this.utilsSvc as any;

    for (const db of this.getRealtimeDatabaseCandidates(store, util)) {
      try {
        await db.ref(`${this.collectionName}/${bookingId}`).remove();
        return;
      } catch {}
    }

    for (const baseUrl of this.restDatabaseUrls) {
      try {
        await this.http.delete(`${baseUrl.replace(/\/+$/, '')}/${this.collectionName}/${bookingId}.json`).toPromise();
        return;
      } catch {}
    }

    if (typeof store.deleteObject === 'function') {
      try {
        await store.deleteObject(this.collectionName, bookingId);
        return;
      } catch {}
    }

    await this.updateBooking(bookingId, { status: 'deleted', bookingRequestStatus: 'deleted' } as any);
  }


  private notifyBookingUpdated(bookingId: string, payload: Partial<AlegriaBooking>): void {
    if (!bookingId) return;
    const safePayload: any = { ...(payload || {}) };
    delete safePayload.raw;
    const status = String(safePayload.bookingRequestStatus || safePayload.status || '').toLowerCase();
    if (!['request_updated_by_customer', 'cancelled_by_customer'].includes(status)) return;
    const endpoint = status === 'cancelled_by_customer' ? 'notify-cancelled' : 'notify-updated';
    this.http.post<any>(`${this.baseUrl}/api/bookings/${encodeURIComponent(bookingId)}/${endpoint}`, { payload: safePayload }).subscribe({
      next: () => {},
      error: (error) => console.warn('[BookingApi] offer request email notification failed', error?.message || error)
    });
  }

  async updateBooking(bookingId: string, payload: Partial<AlegriaBooking>): Promise<void> {
    const store: any = this.storeDb as any;
    const util: any = this.utilsSvc as any;
    const existing = await this.getBookingFromFirebase(bookingId).catch(() => undefined);
    const merged = { ...(existing?.raw || existing || {}), ...payload, bookingId, modifiedTS: Date.now() };
    const notify = () => this.notifyBookingUpdated(bookingId, payload);

    // Prefer real RTDB handles when available.
    for (const db of this.getRealtimeDatabaseCandidates(store, util)) {
      try {
        await db.ref(`${this.collectionName}/${bookingId}`).set(merged);
        notify();
        return;
      } catch {}
    }

    // REST fallback to root /bnBookings/{bookingId}.
    for (const baseUrl of this.restDatabaseUrls) {
      try {
        await this.http.put(`${baseUrl.replace(/\/+$/, '')}/${this.collectionName}/${bookingId}.json`, merged).toPromise();
        notify();
        return;
      } catch {}
    }

    if (typeof store.updateObject !== 'function') {
      throw new Error('Firebase updateObject is not available.');
    }

    try {
      await store.updateObject(this.collectionName, merged, bookingId);
      notify();
      return;
    } catch {}

    try {
      await store.updateObject(this.collectionName, bookingId, merged);
      notify();
      return;
    } catch {}

    await store.updateObject(util.backendFBstoreId, util.mdb, this.collectionName, merged, bookingId);
    notify();
  }

  private get baseUrl(): string {
    return this.resolvedBackendUrl;
  }

  private get resolvedBackendUrl(): string {
    const hostname = window.location.hostname;

    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0') {
      return 'https://localhost:2000';
    }

    return window.location.origin;
  }

  private getBookingsFromBackend(email?: string): Observable<AlegriaBooking[]> {
    const suffix = email ? `?email=${encodeURIComponent(email)}` : '';
    return this.http.get<any>(`${this.baseUrl}/bookings${suffix}`, { withCredentials: true }).pipe(
      map((response) => this.normalizeBookings(response))
    );
  }

  private getBookingFromBackend(bookingId: string): Observable<AlegriaBooking | undefined> {
    return this.http.get<any>(`${this.baseUrl}/bookings/${bookingId}`, { withCredentials: true }).pipe(
      map((response) => this.normalizeBooking(response?.booking || response))
    );
  }

  private async getBookingsFromFirebase(email?: string): Promise<AlegriaBooking[]> {
    const raw = await this.readBookingsRaw();
    const bookings = this.normalizeBookings(raw)
      .filter((booking) => String((booking as any).boatId || 'alegria') === this.boatContext.boatId)
      .filter((booking) => String((booking as any).bookingStatus || (booking as any).status || '').toLowerCase() !== 'deleted')
      .filter((booking) => String((booking as any).bookingRequestStatus || (booking as any).status || '').toLowerCase() !== 'cancelled_by_customer')
      .sort((a, b) => String(b.outingDate || '').localeCompare(String(a.outingDate || '')) || String(b.departureTime || '').localeCompare(String(a.departureTime || '')));

    if (!email) return bookings;
    const expected = String(email).trim().toLowerCase();
    return bookings.filter((booking) => String(booking.email || '').trim().toLowerCase() === expected);
  }

  private async getBookingFromFirebase(bookingId: string): Promise<AlegriaBooking | undefined> {
    const bookings = await this.getBookingsFromFirebase();
    return bookings.find((booking) => booking.bookingId === bookingId);
  }

  private async readBookingsRaw(): Promise<any> {
    const store: any = this.storeDb as any;
    const util: any = this.utilsSvc as any;

    // Current Firebase structure from your export:
    // /bnBookings/{bookingId}
    // Example: /bnBookings/202606071
    const restValue = await this.readBookingsViaRest();
    const extractedRest = this.extractBookings(restValue);
    if (this.hasBookings(extractedRest)) return extractedRest;

    for (const db of this.getRealtimeDatabaseCandidates(store, util)) {
      const rootValue = await this.readDatabasePath(db, this.collectionName);
      const extractedRoot = this.extractBookings(rootValue);
      if (this.hasBookings(extractedRoot)) return extractedRoot;

      if (util.backendFBstoreId) {
        const scopedValue = await this.readDatabasePath(db, `${util.backendFBstoreId}/${this.collectionName}`);
        const extractedScoped = this.extractBookings(scopedValue);
        if (this.hasBookings(extractedScoped)) return extractedScoped;
      }
    }

    const candidates: Array<() => Promise<any>> = [];
    if (typeof store.getObject === 'function') {
      candidates.push(() => store.getObject(this.collectionName));
      candidates.push(() => store.getObject(`/${this.collectionName}`));
      candidates.push(() => store.getObject(this.collectionName, -1));
      candidates.push(() => store.getObject(undefined, util.mdb, this.collectionName, -1));
      candidates.push(() => store.getObject(null, util.mdb, this.collectionName, -1));
      candidates.push(() => store.getObject(util.backendFBstoreId, util.mdb, this.collectionName, -1));
      candidates.push(() => store.getObject(util.backendFBstoreId, util.mdb, this.collectionName));
      candidates.push(() => store.getObject(`${util.backendFBstoreId}/${this.collectionName}`));
      candidates.push(() => store.getObject('1000', util.mdb, this.collectionName, -1));
      candidates.push(() => store.getObject('1000', util.mdb, this.collectionName));
    }

    for (const candidate of candidates) {
      try {
        const value = await candidate();
        const extracted = this.extractBookings(value);
        if (this.hasBookings(extracted)) return extracted;
      } catch {}
    }

    const memoryCandidates = [
      store.firebaseBSSdata?.[this.collectionName],
      store.firebaseBSSdata?.['1000']?.[this.collectionName],
      store.firebaseBSSdata?.[util.backendFBstoreId]?.[this.collectionName],
      store.firebaseBSSdata?.[util.backendFBstoreId],
      store.firebaseBSSdata,
      store[this.collectionName],
      store?.data?.[this.collectionName],
      store?.data?.['1000']?.[this.collectionName],
    ];

    for (const value of memoryCandidates) {
      const extracted = this.extractBookings(value);
      if (this.hasBookings(extracted)) return extracted;
    }

    return [];
  }

  private async readBookingsViaRest(): Promise<any> {
    const paths = [
      this.collectionName,
      `1000/${this.collectionName}`,
    ];

    for (const baseUrl of this.restDatabaseUrls) {
      for (const path of paths) {
        try {
          const value = await this.http.get<any>(`${baseUrl.replace(/\/+$/, '')}/${path}.json`).toPromise();
          const extracted = this.extractBookings(value);
          if (this.hasBookings(extracted)) return extracted;
        } catch {}
      }
    }

    // Last chance: fetch root export and extract /bnBookings from it.
    for (const baseUrl of this.restDatabaseUrls) {
      try {
        const value = await this.http.get<any>(`${baseUrl.replace(/\/+$/, '')}/.json`).toPromise();
        const extracted = this.extractBookings(value);
        if (this.hasBookings(extracted)) return extracted;
      } catch {}
    }

    return null;
  }

  private getRealtimeDatabaseCandidates(store: any, util: any): any[] {
    const candidates = [
      util?.mdb,
      store?.backendFbRef?.database,
      store?.backendFbRef?.['database'],
      store?.firebaseBSSdata?.database,
    ];

    return candidates.filter((db, index, array) =>
      db && typeof db.ref === 'function' && array.indexOf(db) === index
    );
  }

  private async readDatabasePath(db: any, path: string): Promise<any> {
    try {
      const cleanPath = path.replace(/^\/+/, '');
      const snapshot = await db.ref(cleanPath).once('value');
      return snapshot && typeof snapshot.val === 'function' ? snapshot.val() : null;
    } catch {
      return null;
    }
  }

  private hasBookings(value: any): boolean {
    if (!value) return false;
    if (Array.isArray(value)) return value.filter(Boolean).length > 0;
    if (typeof value === 'object') return Object.keys(value).length > 0;
    return false;
  }

  private extractBookings(value: any): any {
    if (!value) return null;

    if (Array.isArray(value)) {
      return value.filter((item) => !!item);
    }

    if (typeof value !== 'object') return null;

    // Direct root export: { bnBookings: { bookingId: {...} } }
    if (value[this.collectionName]) return value[this.collectionName];

    // Store-scoped export: { 1000: { bnBookings: {...} } }
    const storeId = (this.utilsSvc as any)?.backendFBstoreId || '1000';
    if (value[storeId]?.[this.collectionName]) return value[storeId][this.collectionName];
    if (value['1000']?.[this.collectionName]) return value['1000'][this.collectionName];

    // Already inside the collection: { 202606071: { bookingId: '202606071', ... } }
    const keys = Object.keys(value);
    if (keys.some((key) => value[key]?.bookingId || value[key]?.customerName || value[key]?.customer?.email || value[key]?.email || value[key]?.outingType)) {
      return value;
    }

    // Last resort: recursively search for a bnBookings object inside a bigger Firebase export.
    for (const key of keys) {
      const child = value[key];
      if (child && typeof child === 'object') {
        if (child[this.collectionName]) return child[this.collectionName];
        if (child['1000']?.[this.collectionName]) return child['1000'][this.collectionName];
      }
    }

    return null;
  }

  private normalizeBookings(response: any): AlegriaBooking[] {
    const raw = Array.isArray(response)
      ? response
      : Array.isArray(response?.bookings)
        ? response.bookings
        : response && typeof response === 'object'
          ? Object.keys(response).map((key) => ({ ...response[key], bookingId: response[key]?.bookingId || key }))
          : [];

    return raw.map((item: any) => this.normalizeBooking(item)).filter((booking: AlegriaBooking) => !!booking.bookingId);
  }



  private unwrapFirebaseNamedObject(raw: any, key: string): any {
    if (!raw || typeof raw !== 'object') {
      return raw;
    }

    // Handles both a direct object and a named wrapper from legacy imports.
    if (raw[key] && typeof raw[key] === 'object') {
      return raw[key];
    }

    return raw;
  }

  private normalizeArray(raw: any): any[] {
    if (!raw) {
      return [];
    }

    if (Array.isArray(raw)) {
      return raw.filter((item) => item !== null && item !== undefined);
    }

    if (typeof raw === 'object') {
      return Object.keys(raw).map((key) => {
        const value = raw[key];
        if (value && typeof value === 'object') {
          return {
            id: value.id || key,
            ...value,
          };
        }

        return {
          id: key,
          value,
        };
      });
    }

    return [];
  }

  private normalizeBooking(item: any): AlegriaBooking {
    if (!item) {
      return { bookingId: '', customerName: '', email: '', outingType: '', outingDate: '', totalPrice: 0 };
    }

    const customer = item?.customer || {};
    const time = item?.time || {};
    const party = item?.party || {};
    const start = time.startAt || item.startAt || item.departureAt || '';
    const end = time.endAt || item.endAt || item.arrivalAt || '';

    const totalPrice = Number(
      item.totalPrice ??
      item.totalAmount ??
      item.estimatedPrice ??
      item.total ??
      item.amount ??
      item.price ??
      ((Number(item.proposalBoatPrice || 0) + Number(item.proposalSkipperPrice || 0) + Number(item.proposalExtraServicesPrice || 0)) || 0)
    );
    const rawDepositPayment = (item.payments || item.raw?.payments || item.raw?.raw?.payments || {}).deposit || {};
    const legacyPaymentForAmount = item.payment || {};
    const depositAmount = Number(
      item.depositAmount ??
      rawDepositPayment.amount ??
      (rawDepositPayment.amount_total ? Number(rawDepositPayment.amount_total) / 100 : undefined) ??
      legacyPaymentForAmount.amount ??
      (legacyPaymentForAmount.amount_total ? Number(legacyPaymentForAmount.amount_total) / 100 : undefined) ??
      item.deposit ??
      (totalPrice ? Math.round(totalPrice * 0.1 * 100) / 100 : 0)
    );
    const balanceAmount = Number(
      item.balanceAmount ??
      (totalPrice && depositAmount ? Math.round((totalPrice - depositAmount) * 100) / 100 : 0)
    );
    const nestedRaw = item.raw || {};
    const nestedRawRaw = nestedRaw.raw || {};
    const warrantyAmount = Number(item.warrantyAmount ?? nestedRaw.warrantyAmount ?? nestedRawRaw.warrantyAmount ?? item.warranty ?? item.cautionAmount ?? item.securityDepositAmount ?? 0);

    const payments = item.payments || nestedRaw.payments || nestedRawRaw.payments || item.paymentStatus || {};
    const depositPayment = payments.deposit || item.depositPayment || {};
    const warrantyPayment = payments.warranty || item.warrantyPayment || {};
    const balancePayment = payments.balance || item.balancePayment || {};
    const legacyPayment = item.payment || {};

    const depositPaid =
      item.depositPaid === true ||
      item.depositStatus === 'paid' ||
      item.depositStatus === 'deposit_paid' ||
      item.paymentStatus === 'paid' ||
      item.paymentStatus === 'charge_succeeded' ||
      legacyPayment.depositPaid === true ||
      legacyPayment.paid === true ||
      legacyPayment.status === 'paid' ||
      legacyPayment.status === 'deposit_paid' ||
      depositPayment.depositPaid === true ||
      depositPayment.paid === true ||
      depositPayment.status === 'paid' ||
      depositPayment.status === 'deposit_paid';

    const balancePaid =
      item.balancePaid === true ||
      item.balanceStatus === 'paid' ||
      item.balancePaymentStatus === 'paid' ||
      balancePayment.paid === true ||
      balancePayment.status === 'paid';

    const warrantyPaymentMethodId =
      item.warrantyPaymentMethodId || item.paymentMethodId ||
      nestedRaw.warrantyPaymentMethodId || nestedRaw.paymentMethodId ||
      nestedRawRaw.warrantyPaymentMethodId || nestedRawRaw.paymentMethodId ||
      warrantyPayment.paymentMethodId || warrantyPayment.warrantyPaymentMethodId || '';
    const warrantySetupIntentId =
      item.warrantySetupIntentId || item.setupIntentId ||
      nestedRaw.warrantySetupIntentId || nestedRaw.setupIntentId ||
      nestedRawRaw.warrantySetupIntentId || nestedRawRaw.setupIntentId ||
      warrantyPayment.setupIntentId || warrantyPayment.warrantySetupIntentId || '';
    const warrantyProofStatus = String(warrantyPayment.status || warrantyPayment.warrantyStatus || '').toLowerCase();
    const warrantyCardProven = !!warrantyPaymentMethodId && (
      !!warrantySetupIntentId ||
      warrantyProofStatus === 'card_registered' ||
      warrantyProofStatus === 'warranty_card_saved' ||
      warrantyProofStatus === 'setup_succeeded'
    );

    return {
      bookingId: item.bookingId || item.id || item.reference || '',
      ownerId: item.ownerId || item.owner || item.hostId || '',
      customerName: item.customerName || item.customerFullName || item.payments?.deposit?.customerName || item.payments?.warranty?.customerName || customer.fullName || item.name || `${customer.firstname || ''} ${customer.lastname || ''}`.trim() || '',
      email: item.email || item.customerEmail || item.payments?.deposit?.customerEmail || item.payments?.warranty?.customerEmail || customer.email || '',
      customerEmail: item.customerEmail || item.email || item.payments?.deposit?.customerEmail || item.payments?.warranty?.customerEmail || customer.email || '',
      phone: item.phone || customer.phone || '',
      customerPhone: item.customerPhone || item.phone || customer.phone || '',
      outingType: item.outingType || item.outing || item.type || item.category || '',
      outingDate: item.outingDate || item.date || (start ? String(start).slice(0, 10) : ''),
      departureTime: item.departureTime || (start ? String(start).slice(11, 16) : ''),
      arrivalTime: item.arrivalTime || (end ? String(end).slice(11, 16) : ''),
      passengers: Number(item.passengers || party.total || item.guests || 0) || undefined,
      totalPrice,
      totalAmount: Number(item.totalAmount ?? totalPrice),
      onlinePayableAmount: Number(item.onlinePayableAmount ?? item.appPayableAmount ?? Math.max(0, totalPrice - Number(item.skipperCashAmount || item.proposalSkipperPrice || 0))),
      appPayableAmount: Number(item.appPayableAmount ?? item.onlinePayableAmount ?? Math.max(0, totalPrice - Number(item.skipperCashAmount || item.proposalSkipperPrice || 0))),
      remainingFeesAmount: Number(item.remainingFeesAmount ?? item.balanceAmount ?? balanceAmount),
      remainingOnboardAmount: Number(item.remainingOnboardAmount ?? item.balanceAmount ?? balanceAmount),
      skipperPaid: item.skipperPaid === true || item.payments?.direct?.skipperPaid === true,
      skipperStatus: item.skipperStatus || item.payments?.direct?.skipperStatus || (Number(item.skipperCashAmount || item.proposalSkipperPrice || 0) > 0 ? 'to_be_paid_onboard' : 'not_applicable'),
      depositAmount,
      balanceAmount,
      warrantyAmount,
      balancePaid,
      balancePaymentMethod: item.balancePaymentMethod || balancePayment.method || '',
      balancePaidAt: item.balancePaidAt || balancePayment.paidAt || null,
      extrasAmount: Number(item.extrasAmount || payments?.extras?.amount || 0),
      depositStatus: depositPaid ? 'paid' : (item.depositStatus ?? depositPayment.status ?? item.depositPaid ?? false),
      depositPaid,
      warrantyStatus: warrantyCardProven ? 'card_registered' : (item.warrantyStatus === 'cash_selected' || item.warrantyStatus === 'cash_received' ? item.warrantyStatus : 'pending'),
      payments,
      paymentStatus: payments,
      bookingStatus: item.bookingStatus || item.status || 'requested',
      comments: item.comments || item.notes?.customerNote || item.comment || '',
      termsAccepted: item.termsAccepted === true || item.termsStatus === 'accepted',
      termsAcceptedAt: item.termsAcceptedAt || null,
      warrantyPaymentChoice: item.warrantyPaymentChoice || nestedRaw.warrantyPaymentChoice || nestedRawRaw.warrantyPaymentChoice || item.warrantyMethod || nestedRaw.warrantyMethod || nestedRawRaw.warrantyMethod || item.warrantyChoice || '',
      warrantyMethod: item.warrantyMethod || nestedRaw.warrantyMethod || nestedRawRaw.warrantyMethod || item.warrantyPaymentChoice || nestedRaw.warrantyPaymentChoice || nestedRawRaw.warrantyPaymentChoice || '',
      warrantySelected: item.warrantySelected === true || !!item.warrantyPaymentChoice || !!nestedRaw.warrantyPaymentChoice || !!nestedRawRaw.warrantyPaymentChoice || !!item.warrantyMethod || !!nestedRaw.warrantyMethod || !!nestedRawRaw.warrantyMethod,
      warrantySelectedAt: item.warrantySelectedAt || nestedRaw.warrantySelectedAt || nestedRawRaw.warrantySelectedAt || null,
      warrantyRegistered: warrantyCardProven,
      warrantyCashSelected: item.warrantyPaymentChoice === 'cash_on_board' || nestedRaw.warrantyPaymentChoice === 'cash_on_board' || nestedRawRaw.warrantyPaymentChoice === 'cash_on_board' || item.warrantyMethod === 'cash' || nestedRaw.warrantyMethod === 'cash' || nestedRawRaw.warrantyMethod === 'cash' || item.warrantyStatus === 'cash_selected' || nestedRaw.warrantyStatus === 'cash_selected' || nestedRawRaw.warrantyStatus === 'cash_selected',
      damageReported: item.damageReported === true || item.warrantyStatus === 'charged' || item.warrantyCashDamageAmount > 0,
      damageCharged: item.damageCharged === true || item.warrantyStatus === 'charged' || item.warrantyCashDamageAmount > 0,
      extraServices: Array.isArray(item.extraServices) ? item.extraServices : this.normalizeArray(item.extraServices || item.payments?.extraServices || []),
      refunds: Array.isArray(item.refunds) ? item.refunds : this.normalizeArray(item.refunds || item.payments?.refunds || []),
      bookingSource: item.bookingSource || item.raw?.bookingSource || '',
      source: item.source || item.raw?.source || '',
      externalPlatform: item.externalPlatform || item.raw?.externalPlatform || item.source || '',
      externalPlatformName: item.externalPlatformName || item.raw?.externalPlatformName || '',
      externalPlatformBookingRef: item.externalPlatformBookingRef || item.platformBookingReference || item.platformReservationNumber || item.raw?.externalPlatformBookingRef || '',
      platformBookingReference: item.platformBookingReference || item.externalPlatformBookingRef || item.raw?.platformBookingReference || '',
      platformReservationNumber: item.platformReservationNumber || item.externalPlatformBookingRef || item.raw?.platformReservationNumber || '',
      externalPlatformListingName: item.externalPlatformListingName || item.raw?.externalPlatformListingName || '',
      externalPlatformUrl: item.externalPlatformUrl || item.raw?.externalPlatformUrl || '',
      externalPlatformPaidAmount: Number(item.externalPlatformPaidAmount || item.raw?.externalPlatformPaidAmount || 0),
      externalPlatformNetOwnerAmount: Number(item.externalPlatformNetOwnerAmount || item.raw?.externalPlatformNetOwnerAmount || 0),
      externalPlatformTotalClientAmount: Number(item.externalPlatformTotalClientAmount || item.raw?.externalPlatformTotalClientAmount || 0),
      externalPlatformRemainingOwnerAmount: Number(item.externalPlatformRemainingOwnerAmount || item.raw?.externalPlatformRemainingOwnerAmount || 0),
      externalPortAmount: Number(item.externalPortAmount || item.raw?.externalPortAmount || 0),
      externalCashOnBoardAmount: Number(item.externalCashOnBoardAmount || item.raw?.externalCashOnBoardAmount || 0),
      externalTotalRemainingAmount: Number(item.externalTotalRemainingAmount || item.raw?.externalTotalRemainingAmount || 0),
      externalPaymentItems: Array.isArray(item.externalPaymentItems) ? item.externalPaymentItems : this.normalizeArray(item.externalPaymentItems || item.raw?.externalPaymentItems || []),
      externalDocuments: item.externalDocuments || item.raw?.externalDocuments || '',
      boatId: item.boatId || item.raw?.boatId || '',
      boatName: item.boatName || item.raw?.boatName || '',
      boatType: item.boatType || item.raw?.boatType || '',
      boatManufacturer: item.boatManufacturer || item.raw?.boatManufacturer || '',
      boatModel: item.boatModel || item.raw?.boatModel || '',
      boatYear: item.boatYear || item.raw?.boatYear || null,
      boatRegistrationNumber: item.boatRegistrationNumber || item.raw?.boatRegistrationNumber || '',
      raw: item,
    };
  }}
