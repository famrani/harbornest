import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StoreDbService, UtilsService } from 'godigital-lib';

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
  proposalCleaningPrice?: number;
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
  customerPhone?: string;
  payments?: any;
  paymentStatus?: any;
  comments?: string;
  extraServices?: any[];
  refunds?: any[];
  proposalBoatPrice?: number;
  proposalSkipperPrice?: number;
  proposalExtraServicesPrice?: number;
  proposalNotes?: string;
  requestNeedsAdminProposal?: boolean;
  pricingToBeFinalizedByAdmin?: boolean;
  clientNextStep?: string;
  requestedOptions?: any[];
  proposalCreatedAt?: number;
  proposalCreatedFromRequestId?: string;
  requestSubmittedAt?: number;
  raw?: any;
}

@Injectable({ providedIn: 'root' })
export class BookingApiService {
  private readonly collectionName = 'bnBookings';
  private readonly pricingModelPath = 'bnPricingModel/alegria';

  private readonly restDatabaseUrls = [    'https://adn-dev-4d05d.firebaseio.com',
  ];

  private fallbackBookings: AlegriaBooking[] = [];

  constructor(
    private http: HttpClient,
    private utilsSvc: UtilsService,
    private storeDb: StoreDbService
  ) {}


  getDefaultPricingModel(): AlegriaPricingModel {
    return { day: 1200, halfDay: 800, sunset: 600, evening: 900, skipperPrice: 300, cleaningPrice: 150,
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
    try {
      const raw = await this.readFirebasePath('/bnPricingModel/alegria');
      return { ...this.getDefaultPricingModel(), ...(raw || {}) };
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
      await store.updateObject('bnPricingModel', payload, 'alegria');
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
    const totalPrice = Number(input.totalPrice || 0);
    const depositAmount = Number(input.depositAmount || Math.round(totalPrice * 0.10 * 100) / 100);
    const balanceAmount = Number(input.balanceAmount || Math.round((totalPrice - depositAmount) * 100) / 100);

    const booking: AlegriaBooking = {
      ...(input as any),
      bookingId,
      customerName: input.customerName || '',
      email: input.email || '',
      phone: input.phone || input.customerPhone || '',
      outingType: input.outingType || 'Online booking',
      outingDate: input.outingDate || '',
      departureTime: input.departureTime || (input as any).timePeriod || '',
      arrivalTime: input.arrivalTime || '',
      passengers: Number(input.passengers || 0),
      totalPrice,
      depositAmount,
      balanceAmount,
      warrantyAmount: Number(input.warrantyAmount || 500),
      bookingStatus: false,
      depositStatus: false,
      depositPaid: false,
      paymentStatus: false,
      warrantyStatus: input.warrantyStatus || false,
      ownerId: input.ownerId || 'alegria',
      createdTS: now,
      modifiedTS: now,
    } as any;

    await this.updateBooking(bookingId, booking as any);
    return booking;
  }

  getBooking(bookingId: string): Observable<AlegriaBooking | undefined> {
    return from(this.getBookingFromFirebase(bookingId)).pipe(
      catchError(() => this.getBookingFromBackend(bookingId)),
      catchError(() => of(undefined))
    );
  }

  createDepositCheckout(payload: {
    bookingId: string;
    proposalId?: string;
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
    successUrl: string;
    cancelUrl: string;
  }): Observable<any> {
    const enrichedPayload = {
      ...payload,
      proposalId: payload.proposalId || payload.bookingId,
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

  createBalanceCheckout(payload: {
    bookingId: string;
    proposalId?: string;
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
    successUrl: string;
    cancelUrl: string;
  }): Observable<any> {
    const balanceAmount = Number(payload.balanceAmount || payload.amount || 0);
    const enrichedPayload = {
      ...payload,
      proposalId: payload.proposalId || payload.bookingId,
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
    ownerId: string;
    warrantyAmount: number;
    currency?: string;
    customerEmail?: string;
    customerName?: string;
    customerPhone?: string;
    outingType?: string;
    outingDate?: string;
    successUrl: string;
    cancelUrl: string;
  }): Observable<any> {
    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-warranty-checkout`,
      `${this.baseUrl}/api/payments/create-warranty-checkout-session`,
      `${this.baseUrl}/api/payments/create-warranty-setup-session`,
      `${this.baseUrl}/stripe/warranty-setup`,
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

  chargeWarranty(bookingId: string, amount: number, reason: string, ownerId?: string): Observable<any> {
    const payload = { bookingId, ownerId, amount, warrantyAmount: amount, reason };
    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-warranty-charge`,
      `${this.baseUrl}/api/payments/charge-warranty`,
      `${this.baseUrl}/stripe/warranty-charge`,
    ], payload);
  }



  acceptBookingRequest(bookingId: string, ownerId = 'alegria', note = ''): Observable<any> {
    const payload = { bookingId, ownerId, note };
    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-booking-accept`,
      `${this.baseUrl}/api/bookings/accept-request`,
    ], payload);
  }

  rejectBookingRequest(bookingId: string, reason: string, ownerId = 'alegria'): Observable<any> {
    const payload = { bookingId, ownerId, reason };
    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-booking-reject`,
      `${this.baseUrl}/api/bookings/reject-request`,
    ], payload);
  }

  getExtraServicesCatalog(): Observable<any[]> {
    return from(this.readFirebasePath('/bnExtraServices')).pipe(
      map((raw: any) => {
        const catalog = this.unwrapFirebaseNamedObject(raw, 'bnExtraServices');
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
      depositAmount: amount,
      paymentType: 'extra_service',
      checkoutType: 'extra_service',
      currency: payload.currency || 'eur'
    });
  }

  createAdhocCheckout(payload: {
    bookingId: string;
    adhocPaymentId?: string;
    ownerId: string;
    amount: number;
    description?: string;
    currency?: string;
    customerEmail?: string;
    customerName?: string;
    successUrl: string;
    cancelUrl: string;
  }): Observable<any> {
    const adhocPaymentId = payload.adhocPaymentId || `adhoc_${Date.now()}`;
    return this.postFirstAvailable([
      // The latest backend app(36).zip does not expose dedicated ad-hoc routes.
      // Use the deployed generic extra-service checkout for ad-hoc customer payments.
      `${this.baseUrl}/pay/outing-extra-service-checkout`,
      `${this.baseUrl}/api/payments/create-extra-service-checkout-session`,
      `${this.baseUrl}/stripe/extra-service-checkout`,
    ], {
      ...payload,
      adhocPaymentId,
      extraServiceId: adhocPaymentId,
      amount: Number(payload.amount || 0),
      depositAmount: Number(payload.amount || 0),
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
          error: (error) => { lastError = error; tryNext(); },
        });
      };
      tryNext();
    });
  }


  isRequestBooking(booking: Partial<AlegriaBooking> | undefined): boolean {
    const status = String((booking as any)?.bookingRequestStatus || (booking as any)?.status || '').toLowerCase();
    return status === 'request_submitted' ||
      status === 'admin_pricing_in_progress' ||
      (booking as any)?.requestNeedsAdminProposal === true ||
      (booking as any)?.pricingToBeFinalizedByAdmin === true;
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


  async updateBooking(bookingId: string, payload: Partial<AlegriaBooking>): Promise<void> {
    const store: any = this.storeDb as any;
    const util: any = this.utilsSvc as any;
    const existing = await this.getBookingFromFirebase(bookingId).catch(() => undefined);
    const merged = { ...(existing?.raw || existing || {}), ...payload, bookingId, modifiedTS: Date.now() };

    // Prefer real RTDB handles when available.
    for (const db of this.getRealtimeDatabaseCandidates(store, util)) {
      try {
        await db.ref(`${this.collectionName}/${bookingId}`).set(merged);
        return;
      } catch {}
    }

    // REST fallback to root /bnBookings/{bookingId}.
    for (const baseUrl of this.restDatabaseUrls) {
      try {
        await this.http.put(`${baseUrl.replace(/\/+$/, '')}/${this.collectionName}/${bookingId}.json`, merged).toPromise();
        return;
      } catch {}
    }

    if (typeof store.updateObject !== 'function') {
      throw new Error('Firebase updateObject is not available.');
    }

    try {
      await store.updateObject(this.collectionName, merged, bookingId);
      return;
    } catch {}

    try {
      await store.updateObject(this.collectionName, bookingId, merged);
      return;
    } catch {}

    await store.updateObject(util.backendFBstoreId, util.mdb, this.collectionName, merged, bookingId);
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
      .filter((booking) => booking.bookingStatus !== 'deleted')
      .filter((booking) => !this.isRequestBooking(booking))
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

    // Firebase exports may contain either:
    //   /bnExtraServices/{serviceId}
    // or the imported wrapper:
    //   /bnExtraServices/bnExtraServices/{serviceId}
    // Same principle is used for guestInfo.
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

    const totalPrice = Number(item.totalPrice ?? item.total ?? item.amount ?? item.price ?? 0);
    const depositAmount = Number(
      item.depositAmount ??
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

    return {
      bookingId: item.bookingId || item.id || item.reference || '',
      ownerId: item.ownerId || item.owner || item.hostId || '',
      customerName: item.customerName || customer.fullName || item.name || `${customer.firstname || ''} ${customer.lastname || ''}`.trim() || '',
      email: item.email || customer.email || '',
      phone: item.phone || customer.phone || '',
      customerPhone: item.customerPhone || item.phone || customer.phone || '',
      outingType: item.outingType || item.outing || item.type || item.category || '',
      outingDate: item.outingDate || item.date || (start ? String(start).slice(0, 10) : ''),
      departureTime: item.departureTime || (start ? String(start).slice(11, 16) : ''),
      arrivalTime: item.arrivalTime || (end ? String(end).slice(11, 16) : ''),
      passengers: Number(item.passengers || party.total || item.guests || 0) || undefined,
      totalPrice,
      depositAmount,
      balanceAmount,
      warrantyAmount,
      balancePaid,
      balancePaymentMethod: item.balancePaymentMethod || balancePayment.method || '',
      balancePaidAt: item.balancePaidAt || balancePayment.paidAt || null,
      extrasAmount: Number(item.extrasAmount || payments?.extras?.amount || 0),
      depositStatus: depositPaid ? 'paid' : (item.depositStatus ?? depositPayment.status ?? item.depositPaid ?? false),
      depositPaid,
      warrantyStatus: item.warrantyStatus ?? warrantyPayment.status ?? item.warrantyRegistered ?? false,
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
      warrantyRegistered: (item.warrantyPaymentChoice || nestedRaw.warrantyPaymentChoice || nestedRawRaw.warrantyPaymentChoice) === 'cash_on_board' || (item.warrantyStatus || nestedRaw.warrantyStatus || nestedRawRaw.warrantyStatus) === 'cash_selected' ? false : (item.warrantyRegistered === true || nestedRaw.warrantyRegistered === true || nestedRawRaw.warrantyRegistered === true || item.warrantyStatus === 'card_registered' || item.warrantyStatus === 'warranty_card_saved' || nestedRaw.warrantyStatus === 'card_registered' || nestedRaw.warrantyStatus === 'warranty_card_saved'),
      warrantyCashSelected: item.warrantyPaymentChoice === 'cash_on_board' || nestedRaw.warrantyPaymentChoice === 'cash_on_board' || nestedRawRaw.warrantyPaymentChoice === 'cash_on_board' || item.warrantyMethod === 'cash' || nestedRaw.warrantyMethod === 'cash' || nestedRawRaw.warrantyMethod === 'cash' || item.warrantyStatus === 'cash_selected' || nestedRaw.warrantyStatus === 'cash_selected' || nestedRawRaw.warrantyStatus === 'cash_selected',
      damageReported: item.damageReported === true || item.warrantyStatus === 'charged' || item.warrantyCashDamageAmount > 0,
      damageCharged: item.damageCharged === true || item.warrantyStatus === 'charged' || item.warrantyCashDamageAmount > 0,
      extraServices: Array.isArray(item.extraServices) ? item.extraServices : this.normalizeArray(item.extraServices || item.payments?.extraServices || []),
      refunds: Array.isArray(item.refunds) ? item.refunds : this.normalizeArray(item.refunds || item.payments?.refunds || []),
      raw: item,
    };
  }}
