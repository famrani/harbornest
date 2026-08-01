
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilsService } from 'godigital-lib';
import { BoatContextService } from '../../services/boat-context.service';

export type WarrantyPaymentChoice = 'stripe_card' | 'cash_on_board';
export type OfferStatus = 'request' | 'draft' | 'sent' | 'accepted' | 'expired' | 'cancelled';
export type BookingSource = 'direct' | 'request' | 'samboat' | 'clickandboat' | 'other';

export interface AlegriaOffer {
  offerId: string;
  relatedBookingId?: string;
  offerSentAfter?: string;
  requestSubmittedAt?: number;
  requestBookingId?: string;
  offerOrigin?: 'admin_direct' | 'customer_request' | 'email_request' | string;
  source: BookingSource;
  externalOnboardAmount?: number;
  externalExtraServicesOnboardAmount?: number;
  externalRemainingOnboardAmount?: number;
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
  cleaningCashAmount?: number;
  cateringAmount?: number;
  drinksAmount?: number;
  waterToysAmount?: number;
  otherOnboardAmount?: number;
  externalRemainingOwnerAmount?: number;
  bookingSource?: string;
  status: OfferStatus;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  outingType: string;
  outingDate: string;
  departureTime?: string;
  arrivalTime?: string;
  bookingRequestStatus?: string;
  timePeriod?: string;
  selectedOptions?: any[];
  destination?: string;
  startMarina?: string;
  passengers?: number;
  totalAmount: number;
  skipperCashAmount?: number;
  onlinePayableAmount?: number;
  appPayableAmount?: number;
  offerCleaningPrice?: number;
  proposalFuelPrice?: number;
  fuelPrice?: number;
  fuelAmount?: number;
  estimatedOptionsPrice?: number;
  estimatedBoatPrice?: number;
  requestOrigin?: string;
  createdByAdmin?: boolean;
  pricingToBeFinalizedByAdmin?: boolean;
  requestNeedsAdminOffer?: boolean;
  durationHours?: number;
  endTime?: string;
  startTime?: string;
  bookingPricePeriodLabel?: string;
  bookingPricePeriod?: string;
  proposalExtraServicesPrice?: number;
  proposalSkipperPrice?: number;
  proposalBoatPrice?: number;
  estimatedExtraGuestCount?: number;
  estimatedCleaningPrice?: number;
  estimatedSkipperPrice?: number;
  estimatedExtraGuestsAmount?: number;
  estimatedCalendarMultiplier?: number;
  estimatedBasePrice?: number;
  estimatedPrice?: number;
  depositRate: number;
  depositAmount: number;
  balanceAmount: number;
  warrantyAmount: number;
  warrantyPaymentChoice?: WarrantyPaymentChoice;
  tncAccepted?: boolean;
  termsAccepted?: boolean;
  acceptedTerms?: boolean;
  tncAcceptedAt?: number | null;
  termsAcceptedAt?: number | null;
  validUntil: number;
  offerMessage?: string;
  comments?: string;
  depositStatus?: string;
  depositPaid?: boolean;
  depositPaidAmount?: number;
  paidDepositAmount?: number;
  paymentStatus?: string;
  stripeCheckoutSessionId?: string;
  stripePaymentIntentId?: string;
  warrantyStatus?: string;
  warrantyRegistered?: boolean;
  warrantyPaymentMethodId?: string;
  warrantySetupIntentId?: string;
  warrantyChargeAmount?: number;
  warrantyChargeReason?: string;
  warrantyChargeStatus?: string;
  createdTS: number;
  modifiedTS: number;
  acceptedTS?: number;
  customerUid?: string;
  customerAuthProvider?: 'google' | 'auto_email' | string;
  customerAccountCreated?: boolean;
  customerAccountCreatedAt?: number;
  customerLastLoginAt?: number;
  offerLink?: string;
  offerNotificationStatus?: string;
  offerEmailNotificationStatus?: string;
  offerWhatsappNotificationStatus?: string;
  offerNotificationQueuedAt?: number;
  offerNotificationSentAt?: number;
  workflow?: any;
  bookingWorkflow?: any;
  raw?: any;
  boatId?: string;
  ownerId?: string;
  skipperId?: string;
}

@Injectable({ providedIn: 'root' })
export class OfferApiService {
  private readonly offersCollection = 'bnProposals';
  private readonly bookingsCollection = 'bnBookings';
  private readonly firebaseUrl = 'https://adn-dev-4d05d.firebaseio.com';

  constructor(
    private http: HttpClient,
    private utilsSvc: UtilsService,
    private boatContext: BoatContextService,
  ) {}

  getOffers(): Observable<AlegriaOffer[]> {
    return from(this.readCollection(this.offersCollection)).pipe(catchError(() => of([])));
  }

  getOffer(id: string): Observable<AlegriaOffer | undefined> {
    return from(this.readOfferWithPaymentState(id)).pipe(catchError(() => of(undefined)));
  }


  private validateOfferInput(input: Partial<AlegriaOffer>): void {
    const errors: string[] = [];
    const source = String((input as any).source || '').toLowerCase();
    const bookingSource = String((input as any).bookingSource || '').toLowerCase();
    const isExternalBooking =
      bookingSource === 'external' ||
      ['external', 'samboat', 'clickandboat', 'click_and_boat', 'platform', 'airbnb', 'manual_external'].includes(source);
    const email = String(input.customerEmail || '').trim();
    const phone = String(input.customerPhone || '').trim();

    if (!String(input.customerName || '').trim()) errors.push('Customer name is required.');
    if (!email) errors.push('Customer email is required.');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) errors.push('Customer email is invalid.');

    if (!phone) errors.push('Customer phone is required.');
    else {
      const digits = phone.replace(/[^\d]/g, '');
      if (digits.length < 8 || digits.length > 15 || !/^[+()\d\s.-]+$/.test(phone)) errors.push('Customer phone is invalid.');
    }

    if (!String(input.outingType || '').trim()) errors.push('Outing type is required.');
    if (!String(input.outingDate || '').trim()) errors.push('Outing date is required.');
    else if (Number.isNaN(Date.parse(String(input.outingDate)))) errors.push('Outing date is invalid.');

    if (!String(input.departureTime || '').trim()) errors.push('Departure time is required.');
    if (!String(input.arrivalTime || '').trim()) errors.push('Return time is required.');
    if (!isExternalBooking && Number(input.passengers || 0) <= 0)
      errors.push('Passengers must be greater than zero.');
    if (!isExternalBooking && Number(input.totalAmount ?? 0) < 0)
      errors.push('Total amount cannot be negative.');
    if (Number(input.warrantyAmount || 0) < 0) errors.push('Warranty amount cannot be negative.');
    if (!isExternalBooking && !String((input as any).offerMessage || '').trim())
      errors.push('Offer message is required.');

    if (errors.length) throw new Error(errors.join(' '));
  }

  private getSkipperCashAmount(input: Partial<AlegriaOffer>): number {
    return Number((input as any).proposalSkipperPrice ?? (input as any).estimatedSkipperPrice ?? (input as any).skipperPrice ?? 0) || 0;
  }

  private getOnlinePayableAmount(input: Partial<AlegriaOffer>): number {
    const explicitOnline = Number((input as any).onlinePayableAmount ?? (input as any).appPayableAmount ?? 0) || 0;
    if (explicitOnline > 0) return Math.round(explicitOnline * 100) / 100;
    const boatPrice = Number((input as any).proposalBoatPrice ?? (input as any).estimatedBoatPrice ?? 0) || 0;
    const fuelPrice = Number((input as any).proposalFuelPrice ?? (input as any).fuelPrice ?? (input as any).fuelAmount ?? (input as any).offerCleaningPrice ?? (input as any).estimatedCleaningPrice ?? 0) || 0;
    const extraServicesPrice = Number((input as any).proposalExtraServicesPrice ?? (input as any).extraServicesPrice ?? (input as any).extrasAmount ?? (input as any).extraServicesAmount ?? 0) || 0;
    const componentOnline = boatPrice + fuelPrice + extraServicesPrice;
    if (componentOnline > 0) return Math.round(componentOnline * 100) / 100;
    const total = Number((input as any).totalAmount ?? (input as any).totalPrice ?? 0) || 0;
    const skipperCashAmount = this.getSkipperCashAmount(input);
    return Math.max(0, Math.round((total - skipperCashAmount) * 100) / 100);
  }


  async saveOffer(input: Partial<AlegriaOffer>): Promise<AlegriaOffer> {
    this.validateOfferInput(input);
    const now = Date.now();
    const boatId = String(input.boatId || this.boatContext.boatId);
    const fleetBoat = await this.readFirebasePath(`/bnFleet/${boatId}`).catch(() => ({}));
    const ownerId = String(input.ownerId || (fleetBoat as any)?.ownerId || boatId);
    const offerId = input.offerId || `offer_${now}_${Math.random().toString(36).slice(2, 8)}`;
    const skipperCashAmount = this.getSkipperCashAmount(input);
    const proposalBoatPrice = Number((input as any).proposalBoatPrice ?? (input as any).estimatedBoatPrice ?? 0) || 0;
    const proposalFuelPrice = Number((input as any).proposalFuelPrice ?? (input as any).fuelPrice ?? (input as any).fuelAmount ?? (input as any).offerCleaningPrice ?? (input as any).estimatedCleaningPrice ?? 0) || 0;
    const proposalExtraServicesPrice = Number((input as any).proposalExtraServicesPrice ?? (input as any).extraServicesPrice ?? (input as any).extrasAmount ?? (input as any).extraServicesAmount ?? 0) || 0;
    const computedTotalAmount = proposalBoatPrice + proposalFuelPrice + proposalExtraServicesPrice + skipperCashAmount;
    const totalAmount = computedTotalAmount > 0 ? Math.round(computedTotalAmount * 100) / 100 : Number(input.totalAmount || 0);
    const onlinePayableAmount = this.getOnlinePayableAmount({ ...(input as any), proposalBoatPrice, proposalFuelPrice, proposalExtraServicesPrice });
    const depositRate = 0.10;
    const depositAmount = Math.round(onlinePayableAmount * depositRate * 100) / 100;
    const balanceAmount = Math.round((onlinePayableAmount - depositAmount) * 100) / 100;
    const offer: AlegriaOffer = {
      offerId,
      boatId,
      ownerId,
      skipperId: input.skipperId || '',
      source: input.source || 'direct',
      bookingSource: (input as any).bookingSource || '',
      externalPlatform: (input as any).externalPlatform || (input as any).source || '',
      externalPlatformName: (input as any).externalPlatformName || '',
      externalPlatformBookingRef: (input as any).externalPlatformBookingRef || '',
      platformBookingReference: (input as any).platformBookingReference || (input as any).externalPlatformBookingRef || '',
      platformReservationNumber: (input as any).platformReservationNumber || (input as any).externalPlatformBookingRef || '',
      externalPlatformListingName: (input as any).externalPlatformListingName || '',
      externalPlatformUrl: (input as any).externalPlatformUrl || '',
      externalPlatformPaidAmount: Number((input as any).externalPlatformPaidAmount || 0),
      externalPlatformNetOwnerAmount: Number((input as any).externalPlatformNetOwnerAmount || 0),
      externalPlatformTotalClientAmount: Number((input as any).externalPlatformTotalClientAmount || 0),
      externalPlatformRemainingOwnerAmount: Number((input as any).externalPlatformRemainingOwnerAmount || 0),
      externalPortAmount: Number((input as any).externalPortAmount || 0),
      externalDocuments: (input as any).externalDocuments || '',
      externalPaymentItems: Array.isArray((input as any).externalPaymentItems) ? (input as any).externalPaymentItems : [],
      externalCashOnBoardAmount: Number((input as any).externalCashOnBoardAmount || 0),
      externalTotalRemainingAmount: Number((input as any).externalTotalRemainingAmount || 0),
      status: input.status || 'draft',
      customerName: input.customerName || '',
      customerEmail: input.customerEmail || '',
      customerPhone: input.customerPhone || '',
      outingType: input.outingType || '',
      outingDate: input.outingDate || '',
      departureTime: input.departureTime || '',
      arrivalTime: input.arrivalTime || '',
      startMarina: input.startMarina || (input as any).marina || '',
      destination: input.destination || '',
      selectedOptions: Array.isArray((input as any).selectedOptions) ? (input as any).selectedOptions : [],
      timePeriod: (input as any).timePeriod || '',
      bookingRequestStatus: (input as any).bookingRequestStatus || 'request_submitted',
      passengers: Number(input.passengers || 0) || undefined,
      totalAmount,
      skipperCashAmount: skipperCashAmount as any,
      onlinePayableAmount: onlinePayableAmount as any,
      appPayableAmount: onlinePayableAmount as any,
      ...((Number((input as any).offerCleaningPrice || 0) > 0 && proposalFuelPrice <= 0) ? { offerCleaningPrice: Number((input as any).offerCleaningPrice || 0) } : {}),
      proposalFuelPrice: proposalFuelPrice || undefined,
      fuelPrice: proposalFuelPrice || undefined,
      fuelAmount: proposalFuelPrice || undefined,
      estimatedOptionsPrice: (input as any).estimatedOptionsPrice || null,
      estimatedBoatPrice: (input as any).estimatedBoatPrice || null,
      estimatedPrice: (input as any).estimatedPrice ?? totalAmount,
      estimatedBasePrice: (input as any).estimatedBasePrice || null,
      estimatedCalendarMultiplier: (input as any).estimatedCalendarMultiplier || null,
      estimatedExtraGuestsAmount: (input as any).estimatedExtraGuestsAmount || null,
      estimatedExtraGuestCount: (input as any).estimatedExtraGuestCount || null,
      estimatedSkipperPrice: (input as any).estimatedSkipperPrice || null,
      estimatedCleaningPrice: (input as any).estimatedCleaningPrice || null,
      proposalBoatPrice: proposalBoatPrice || undefined,
      proposalSkipperPrice: skipperCashAmount || undefined,
      proposalExtraServicesPrice: proposalExtraServicesPrice || undefined,
      bookingPricePeriod: (input as any).bookingPricePeriod || '',
      bookingPricePeriodLabel: (input as any).bookingPricePeriodLabel || '',
      startTime: (input as any).startTime || input.departureTime || '',
      endTime: (input as any).endTime || input.arrivalTime || '',
      durationHours: (input as any).durationHours || null,
      requestNeedsAdminOffer: (input as any).requestNeedsAdminOffer === true,
      pricingToBeFinalizedByAdmin: (input as any).pricingToBeFinalizedByAdmin === true,
      createdByAdmin: (input as any).createdByAdmin === true,
      requestOrigin: (input as any).requestOrigin || '',
      depositRate,
      depositAmount,
      balanceAmount,
      warrantyAmount: Number(input.warrantyAmount || 500),
      warrantyPaymentChoice: input.warrantyPaymentChoice,
      tncAccepted: input.tncAccepted === true,
      tncAcceptedAt: input.tncAccepted === true ? (input.tncAcceptedAt || now) : null,
      workflow: {
        offerIssued: input.status === 'sent' || (input as any).offerIssued === true || (input as any).issued === true,
        termsAccepted: input.tncAccepted === true,
        depositPaid: input.depositPaid === true,
        alegriaPaid: false,
        skipperPaid: false,
        warrantyCompleted: input.warrantyStatus === 'card_registered' || input.warrantyPaymentChoice === 'cash_on_board',
        bookingConfirmed: false,
      },
      validUntil: input.validUntil || now + 24 * 60 * 60 * 1000,
      offerMessage: input.offerMessage || '',
      comments: input.comments || '',
      depositStatus: input.depositStatus || 'pending',
      depositPaid: input.depositPaid === true,
      depositPaidAmount: input.depositPaid === true ? Number((input as any).depositPaidAmount || depositAmount || 0) : 0,
      paidDepositAmount: input.depositPaid === true ? Number((input as any).paidDepositAmount || (input as any).depositPaidAmount || depositAmount || 0) : 0,
      paymentStatus: input.paymentStatus || 'pending',
      warrantyStatus: input.warrantyStatus || 'not_selected',
      createdTS: input.createdTS || now,
      modifiedTS: now,
      acceptedTS: input.acceptedTS,
      customerUid: input.customerUid || '',
      customerAuthProvider: input.customerAuthProvider || '',
      customerAccountCreated: input.customerAccountCreated === true,
      customerAccountCreatedAt: input.customerAccountCreatedAt,
      customerLastLoginAt: input.customerLastLoginAt,
      raw: input.raw || input,
    };
    await this.writeItem(this.offersCollection, offerId, offer);
    return offer;
  }


  async markTermsAccepted(offerId: string): Promise<AlegriaOffer> {
    const current = await this.readItem(this.offersCollection, offerId);
    if (!current) throw new Error('Offer not found');
    if (current.validUntil && Date.now() > current.validUntil) {
      await this.patchOffer(offerId, { status: 'expired' });
      throw new Error('Offer expired');
    }

    const now = Date.now();
    const acceptedAt = current.tncAcceptedAt || current.termsAcceptedAt || now;
    const acceptedBy = (current as any).customerUid || (current as any).customerEmail || (current as any).email || 'customer';

    const updated: AlegriaOffer = {
      ...current,
      tncAccepted: true,
      termsAccepted: true,
      customerTermsAccepted: true,
      tncAcceptedAt: acceptedAt,
      termsAcceptedAt: acceptedAt,
      tncAcceptedBy: acceptedBy,
      termsAcceptedBy: acceptedBy,
      tncAcceptedSource: 'customer_portal',
      termsAcceptedSource: 'customer_portal',
      terms: {
        ...((current as any).terms || {}),
        accepted: true,
        acceptedAt,
        acceptedBy,
        source: 'customer_portal',
      },
      documents: {
        ...((current as any).documents || {}),
        termsAccepted: true,
        termsAcceptedAt: acceptedAt,
        termsAcceptedBy: acceptedBy,
        termsAcceptedSource: 'customer_portal',
      },
      workflow: {
        ...((current as any).workflow || {}),
        termsAccepted: true,
        termsAcceptedAt: acceptedAt,
        termsAcceptedBy: acceptedBy,
        termsAcceptedSource: 'customer_portal',
      },
      bookingWorkflow: {
        ...((current as any).bookingWorkflow || {}),
        termsAccepted: true,
        termsAcceptedAt: acceptedAt,
        termsAcceptedBy: acceptedBy,
        termsAcceptedSource: 'customer_portal',
      },
      modifiedTS: now,
    };

    await this.writeItem(this.offersCollection, offerId, updated);

    // Keep the canonical booking synchronized when it already exists. Payments
    // are validated from bnBookings, while terms are accepted from the offer UI.
    const bookingId = String((current as any).relatedBookingId || (current as any).bookingId || offerId).trim();
    if (bookingId) {
      const existingBooking = await this.readItem(this.bookingsCollection, bookingId).catch(() => undefined);
      if (existingBooking) {
        await this.writeItem(this.bookingsCollection, bookingId, {
          ...existingBooking,
          termsAccepted: true,
          tncAccepted: true,
          customerTermsAccepted: true,
          termsAcceptedAt: acceptedAt,
          tncAcceptedAt: acceptedAt,
          termsAcceptedBy: acceptedBy,
          tncAcceptedBy: acceptedBy,
          termsAcceptedSource: 'customer_portal',
          tncAcceptedSource: 'customer_portal',
          terms: {
            ...(existingBooking.terms || {}),
            accepted: true,
            acceptedAt,
            acceptedBy,
            source: 'customer_portal',
          },
          documents: {
            ...(existingBooking.documents || {}),
            termsAccepted: true,
            termsAcceptedAt: acceptedAt,
            termsAcceptedBy: acceptedBy,
            termsAcceptedSource: 'customer_portal',
          },
          workflow: {
            ...(existingBooking.workflow || {}),
            termsAccepted: true,
            termsAcceptedAt: acceptedAt,
            termsAcceptedBy: acceptedBy,
            termsAcceptedSource: 'customer_portal',
          },
          bookingWorkflow: {
            ...(existingBooking.bookingWorkflow || {}),
            termsAccepted: true,
            termsAcceptedAt: acceptedAt,
            termsAcceptedBy: acceptedBy,
            termsAcceptedSource: 'customer_portal',
          },
          modifiedTS: now,
        });
      }
    }

    return updated;
  }

  async setWarrantyChoice(offerId: string, warrantyPaymentChoice: WarrantyPaymentChoice): Promise<AlegriaOffer> {
    const current = await this.readItem(this.offersCollection, offerId);
    if (!current) throw new Error('Offer not found');

    const patch: Partial<AlegriaOffer> = {
      warrantyPaymentChoice,
      warrantyStatus: warrantyPaymentChoice === 'cash_on_board' ? 'cash_selected' : 'not_selected',
      warrantyRegistered: warrantyPaymentChoice === 'cash_on_board' ? true : current.warrantyRegistered === true,
      modifiedTS: Date.now(),
    };

    await this.patchOffer(offerId, patch);
    return { ...current, ...patch } as AlegriaOffer;
  }

  async finalizeOfferWizard(offerId: string, warrantyPaymentChoice: WarrantyPaymentChoice): Promise<{ bookingId: string }> {
    const hydrated = await this.readOfferWithPaymentState(offerId);
    if (!hydrated) throw new Error('Offer not found');

    const depositPaid =
      hydrated.depositPaid === true ||
      hydrated.depositStatus === 'paid' ||
      hydrated.paymentStatus === 'paid' ||
      hydrated.paymentStatus === 'charge_succeeded';

    const warrantyOk =
      warrantyPaymentChoice === 'cash_on_board' ||
      hydrated.warrantyRegistered === true ||
      hydrated.warrantyStatus === 'card_registered' ||
      hydrated.warrantyStatus === 'warranty_card_saved';

    if (!hydrated.tncAccepted) throw new Error('Terms and Conditions must be accepted first.');
    if (!depositPaid) throw new Error('Deposit must be paid first.');
    if (!warrantyOk) throw new Error('Warranty card must be registered or cash warranty accepted first.');

    const bookingId = hydrated.relatedBookingId || hydrated.offerId;
    const accepted: AlegriaOffer = {
      ...hydrated,
      status: 'accepted',
      relatedBookingId: bookingId,
      warrantyPaymentChoice,
      warrantyStatus: warrantyPaymentChoice === 'cash_on_board'
        ? 'cash_selected'
        : (hydrated.warrantyStatus || 'card_registered'),
      warrantyRegistered: warrantyPaymentChoice === 'cash_on_board' ? true : hydrated.warrantyRegistered === true,
      depositPaid: true,
      depositStatus: 'paid',
      depositPaidAmount: Number(hydrated.depositAmount || 0),
      paidDepositAmount: Number(hydrated.depositAmount || 0),
      paymentStatus: 'paid',
      acceptedTS: Date.now(),
      bookingRequestStatus: 'confirmed',
      modifiedTS: Date.now(),
    };

    await this.createBookingFromOffer(accepted);
    await this.deleteOffer(offerId);
    await this.notifyBookingConfirmed(bookingId).toPromise().catch((error) => {
      console.warn('Booking confirmation email notification failed', error);
    });
    return { bookingId };
  }


  private parseOfferOutingDate(value: any): number {
    const rawDate = String(value || '').trim();
    if (!rawDate) return 0;

    let normalized = rawDate;
    const frenchDate = rawDate.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
    if (frenchDate) {
      const day = frenchDate[1].padStart(2, '0');
      const month = frenchDate[2].padStart(2, '0');
      const year = frenchDate[3].length === 2 ? `20${frenchDate[3]}` : frenchDate[3];
      normalized = `${year}-${month}-${day}`;
    }

    const timestamp = Date.parse(normalized);
    if (Number.isNaN(timestamp)) return 0;

    const date = new Date(timestamp);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  }

  private isOutingDateTodayOrPast(offer: Partial<AlegriaOffer>): boolean {
    const outingTime = this.parseOfferOutingDate((offer as any).outingDate || (offer as any).date);
    if (!outingTime) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return outingTime <= today.getTime();
  }

  private assertOfferCanBeRenewed(offer: Partial<AlegriaOffer>): void {
    if (this.isOutingDateTodayOrPast(offer)) {
      throw new Error('This offer cannot be renewed because the outing date is today or already past.');
    }
  }


  notifyBookingRequestCreated(offerId: string, payload: any = {}): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/offers/${encodeURIComponent(offerId)}/notify-request-created`, payload, { withCredentials: true });
  }

  notifyOfferSent(offerId: string, payload: any = {}): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/offers/${encodeURIComponent(offerId)}/notify-sent`, payload, { withCredentials: true });
  }

  notifyOfferWhatsapp(offerId: string, payload: any = {}): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/offers/${encodeURIComponent(offerId)}/notify-whatsapp`, payload, { withCredentials: true });
  }

  notifyBookingConfirmed(bookingId: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/bookings/${encodeURIComponent(bookingId)}/notify-confirmed`, {}, { withCredentials: true });
  }

  async markSent(offer: AlegriaOffer): Promise<void> {
    this.assertOfferCanBeRenewed(offer);
    const refreshed = await this.readItem(this.offersCollection, offer.offerId).catch(() => offer);
    const offerToSend = { ...offer, ...(refreshed || {}) } as AlegriaOffer;
    await this.patchOffer(offer.offerId, {
      status: 'sent',
      offerStatus: 'sent',
      bookingRequestStatus: 'offer_issued',
      offerIssued: true,
      issued: true,
      offerIssuedAt: Date.now(),
      requestNeedsAdminOffer: false,
      pricingToBeFinalizedByAdmin: false,
      validUntil: Date.now() + 24 * 60 * 60 * 1000,
      offerLink: this.buildOfferLink(offer.offerId),
      tncAccepted: refreshed?.tncAccepted === true && !!(refreshed as any)?.tncAcceptedAt,
      termsAccepted: refreshed?.tncAccepted === true && !!(refreshed as any)?.tncAcceptedAt,
      tncAcceptedAt: refreshed?.tncAccepted === true ? ((refreshed as any)?.tncAcceptedAt || null) : null,
      termsAcceptedAt: refreshed?.tncAccepted === true ? ((refreshed as any)?.termsAcceptedAt || (refreshed as any)?.tncAcceptedAt || null) : null,
      customerTermsAccepted: (refreshed as any)?.customerTermsAccepted === true,
      tncAcceptedBy: (refreshed as any)?.tncAcceptedBy || (refreshed as any)?.termsAcceptedBy || null,
      termsAcceptedBy: (refreshed as any)?.termsAcceptedBy || (refreshed as any)?.tncAcceptedBy || null,
      tncAcceptedSource: (refreshed as any)?.tncAcceptedSource || (refreshed as any)?.termsAcceptedSource || null,
      termsAcceptedSource: (refreshed as any)?.termsAcceptedSource || (refreshed as any)?.tncAcceptedSource || null,
      terms: { ...((refreshed as any)?.terms || {}) },
      documents: { ...((refreshed as any)?.documents || {}) },
      workflow: { ...((refreshed as any)?.workflow || {}), offerIssued: true },
      bookingWorkflow: { ...((refreshed as any)?.bookingWorkflow || {}), offerIssued: true },
    } as any);
    await this.sendOfferNotifications({ ...offerToSend, status: 'sent', offerStatus: 'sent', bookingRequestStatus: 'offer_issued', offerIssued: true, issued: true, requestNeedsAdminOffer: false, pricingToBeFinalizedByAdmin: false, offerLink: this.buildOfferLink(offer.offerId) } as AlegriaOffer);
  }

  async sendOfferNotifications(offer: AlegriaOffer): Promise<void> {
    const offerId = offer.offerId;
    if (!offerId) return;

    const now = Date.now();
    const link = String((offer as any).offerLink || this.buildOfferLink(offerId));
    const payload = this.buildOfferNotificationPayload(offer, link);

    await this.queueOfferNotification(offer, 'email', payload, now).catch((error) => {
      console.warn('Offer email queue write failed', error);
    });
    await this.queueOfferNotification(offer, 'whatsapp', payload, now).catch((error) => {
      console.warn('Offer WhatsApp queue write failed', error);
    });

    const patch: Partial<AlegriaOffer> = {
      status: 'sent',
      validUntil: offer.validUntil || now + 24 * 60 * 60 * 1000,
      offerLink: link,
      offerNotificationStatus: 'queued',
      offerEmailNotificationStatus: 'queued',
      offerWhatsappNotificationStatus: 'queued',
      offerNotificationQueuedAt: now,
      modifiedTS: now,
    } as any;

    await this.patchOffer(offerId, patch).catch((error) => {
      console.warn('Offer notification status patch failed', error);
    });

    await this.notifyOfferSent(offerId, { ...payload, channel: 'email', channels: ['email', 'whatsapp'] }).toPromise().then(() => {
      return this.patchOffer(offerId, { offerEmailNotificationStatus: 'sent', offerNotificationSentAt: Date.now() } as any);
    }).catch((error) => {
      console.warn('Offer email notification failed', error);
    });

    await this.notifyOfferWhatsapp(offerId, { ...payload, channel: 'whatsapp', channels: ['email', 'whatsapp'] }).toPromise().then(() => {
      return this.patchOffer(offerId, { offerWhatsappNotificationStatus: 'sent', offerNotificationSentAt: Date.now() } as any);
    }).catch((error) => {
      console.warn('Offer WhatsApp notification endpoint failed; notification remains queued in Firebase', error);
    });
  }

  async acceptOffer(offerId: string, warrantyPaymentChoice: WarrantyPaymentChoice): Promise<AlegriaOffer> {
    // Backward-compatible wrapper: in the new wizard, accepting only records T&C + warranty choice.
    const offer = await this.markTermsAccepted(offerId);
    return this.setWarrantyChoice(offerId, warrantyPaymentChoice).then((updated) => ({ ...offer, ...updated }));
  }


  async renewOffer(offerId: string): Promise<AlegriaOffer> {
    const current = await this.readItem(this.offersCollection, offerId);
    if (!current) throw new Error('Offer not found');
    this.assertOfferCanBeRenewed(current);

    const renewed: AlegriaOffer = {
      ...current,
      status: 'sent',
      validUntil: Date.now() + 24 * 60 * 60 * 1000,
      modifiedTS: Date.now(),
    };

    await this.writeItem(this.offersCollection, offerId, renewed);
    return renewed;
  }

  canCustomerManageRequest(offer: Partial<AlegriaOffer> | undefined): boolean {
    if (!offer) return false;
    const status = String((offer as any).status || (offer as any).bookingRequestStatus || '').toLowerCase();
    const issued = (offer as any).offerIssued === true || (offer as any).issued === true || ['sent', 'issued', 'offer_issued', 'accepted'].includes(status);
    const origin = String((offer as any).offerOrigin || (offer as any).source || '').toLowerCase();
    const isRequest = status === 'request' || status === 'offer_requested' || status === 'pending_admin' || (offer as any).requestNeedsAdminOffer === true || origin === 'customer_request';
    return isRequest && !issued && !['cancelled_by_customer', 'cancelled', 'deleted'].includes(status);
  }

  async updateCustomerOfferRequest(offerId: string, patch: Partial<AlegriaOffer>): Promise<void> {
    await this.patchOffer(offerId, {
      ...patch,
      status: 'request',
      bookingRequestStatus: 'request_updated_by_customer',
      requestUpdatedByCustomerAt: Date.now(),
      requestNeedsAdminOffer: true,
      pricingToBeFinalizedByAdmin: true,
    } as any);
    this.http.post<any>(`${this.baseUrl}/api/offers/${encodeURIComponent(offerId)}/notify-request-updated`, { payload: patch }, { withCredentials: true }).subscribe({ next: () => {}, error: () => {} });
  }

  async cancelCustomerOfferRequest(offerId: string): Promise<void> {
    await this.patchOffer(offerId, {
      status: 'cancelled_by_customer' as any,
      bookingRequestStatus: 'cancelled_by_customer',
      requestCancelledByCustomerAt: Date.now(),
      requestNeedsAdminOffer: false,
      pricingToBeFinalizedByAdmin: false,
    } as any);
    this.http.post<any>(`${this.baseUrl}/api/offers/${encodeURIComponent(offerId)}/notify-request-cancelled`, {}, { withCredentials: true }).subscribe({ next: () => {}, error: () => {} });
  }

  async deleteOffer(offerId: string): Promise<void> {
    await this.deleteItem(this.offersCollection, offerId);
  }



  async createManualHistoricalBookingRecord(input: any): Promise<any> {
    const now = Date.now();
    const bookingId = String(input.bookingId || `booking_${now}_${Math.random().toString(36).slice(2, 8)}`);
    const source = String(input.source || 'direct').toLowerCase();
    const isExternal = source !== 'direct';
    const skipperCashAmount = Number(input.skipperCashAmount || input.proposalSkipperPrice || 0) || 0;
    // Historical records are archive-only: no customer payment remains to be collected.
    const onlinePayableAmount = 0;
    const cashOnBoardAmount = 0;
    const platformPaidAmount = Number(input.externalPlatformPaidAmount || 0) || 0;
    const platformTotalClientAmount = Number(input.externalPlatformTotalClientAmount || 0) || 0;
    const directTotal = Number(input.totalAmount || input.totalPrice || 0) || 0;
    const totalPrice = directTotal || platformTotalClientAmount || (platformPaidAmount + onlinePayableAmount + cashOnBoardAmount);
    const boatPrice = Number(input.proposalBoatPrice || input.estimatedBoatPrice || Math.max(0, totalPrice - skipperCashAmount)) || 0;

    const boatId = String(input.boatId || this.boatContext.boatId);
    const fleetBoat = await this.readFirebasePath(`/bnFleet/${boatId}`).catch(() => ({}));
    const ownerId = String(input.ownerId || (fleetBoat as any)?.ownerId || boatId);
    const booking: any = {
      bookingId, offerId: bookingId, relatedBookingId: bookingId, ownerId,
      source, bookingSource: isExternal ? 'external' : 'direct',
      boatId,
      boatName: String(input.boatName || 'Alegria'),
      boatType: String(input.boatType || 'Catamaran'),
      boatManufacturer: String(input.boatManufacturer || ''),
      boatModel: String(input.boatModel || ''),
      boatYear: input.boatYear || null,
      boatRegistrationNumber: String(input.boatRegistrationNumber || ''),
      startMarina: String(input.startMarina || ''),
      externalPlatform: isExternal ? source : '',
      externalPlatformName: source === 'other' ? String(input.externalPlatformName || '') : '',
      externalPlatformBookingRef: isExternal ? String(input.externalPlatformBookingRef || input.platformBookingReference || input.platformReservationNumber || bookingId) : '',
      platformBookingReference: isExternal ? String(input.externalPlatformBookingRef || input.platformBookingReference || '') : '',
      platformReservationNumber: isExternal ? String(input.externalPlatformBookingRef || input.platformReservationNumber || '') : '',
      externalPlatformListingName: String(input.externalPlatformListingName || ''),
      externalPlatformUrl: String(input.externalPlatformUrl || ''),
      externalPlatformPaidAmount: platformPaidAmount,
      externalPlatformNetOwnerAmount: Number(input.externalPlatformNetOwnerAmount || 0) || 0,
      externalPlatformTotalClientAmount: platformTotalClientAmount,
      externalPlatformRemainingOwnerAmount: Number(input.externalPlatformRemainingOwnerAmount || 0) || 0,
      externalPortAmount: Number(input.externalPortAmount || 0) || 0,
      externalDocuments: String(input.externalDocuments || ''),
      platformBookingUrl: String(input.platformBookingUrl || input.externalPlatformBookingUrl || ''),
      externalPlatformBookingUrl: String(input.externalPlatformBookingUrl || input.platformBookingUrl || ''),
      boatClickAndBoatUrl: String(input.boatClickAndBoatUrl || input.clickAndBoatUrl || ''),
      cateringAmount: Number(input.cateringAmount || 0) || 0,
      tipsAmount: Number(input.tipsAmount || input.tipAmount || 0) || 0,
      cleaningCashAmount: Number(input.cleaningCashAmount || 0) || 0,
      drinksAmount: Number(input.drinksAmount || 0) || 0,
      waterToysAmount: Number(input.waterToysAmount || 0) || 0,
      otherOnboardAmount: Number(input.otherOnboardAmount || 0) || 0,
      customerName: String(input.customerName || ''),
      email: String(input.customerEmail || input.email || ''),
      phone: String(input.customerPhone || input.phone || ''),
      outingType: String(input.outingType || 'Journée en mer'),
      outingDate: String(input.outingDate || ''),
      departureTime: String(input.departureTime || ''),
      arrivalTime: String(input.arrivalTime || ''),
      passengers: Number(input.passengers || 0) || 0,
      comments: String(input.comments || input.offerMessage || ''),
      totalPrice, totalAmount: totalPrice, estimatedPrice: totalPrice,
      estimatedBoatPrice: boatPrice, estimatedSkipperPrice: skipperCashAmount,
      estimatedOptionsPrice: Number(input.estimatedOptionsPrice || 0) || 0,
      estimatedExtraGuestsAmount: Number(input.estimatedExtraGuestsAmount || 0) || 0,
      proposalBoatPrice: boatPrice, proposalSkipperPrice: skipperCashAmount,
      proposalExtraServicesPrice: Number(input.proposalExtraServicesPrice || input.externalExtraServicesOnboardAmount || 0) || 0,
      skipperCashAmount, onlinePayableAmount, appPayableAmount: onlinePayableAmount,
      depositAmount: 0, balanceAmount: onlinePayableAmount,
      remainingFeesAmount: onlinePayableAmount, remainingOnboardAmount: onlinePayableAmount,
      externalOnboardAmount: 0,
      externalRemainingOnboardAmount: 0,
      externalExtraServicesOnboardAmount: 0,
      externalCashOnBoardAmount: 0,
      externalTotalRemainingAmount: 0,
      depositPaid: true, depositStatus: 'not_required',
      balancePaid: true,
      balanceStatus: 'paid',
      paymentStatus: true,
      bookingStatus: input.bookingStatus || 'completed',
      status: input.status || 'completed',
      bookingRequestStatus: input.bookingRequestStatus || 'confirmed',
      offerStatus: 'accepted',
      termsAccepted: false, tncAccepted: false, termsAcceptedAt: null, tncAcceptedAt: null,
      warrantyAmount: Number(input.warrantyAmount || 500) || 0,
      warrantyMethod: input.warrantyPaymentChoice || input.warrantyMethod || 'cash_on_board',
      warrantyPaymentChoice: input.warrantyPaymentChoice || input.warrantyMethod || 'cash_on_board',
      warrantyStatus: input.warrantyPaymentChoice === 'stripe_card' ? 'card_registered' : 'cash_selected',
      warrantyRegistered: true,
      customerUid: input.customerUid || '', customerAccountCreated: false, customerAuthProvider: input.customerAuthProvider || '',
      stripeCheckoutSessionId: '', paymentPaymentIntentId: '',
      bookingConfirmationEmailLanguage: 'fr', bookingConfirmationEmailSentAt: null,
      bookingConfirmationEmailSentTo: String(input.customerEmail || input.email || ''),
      bookingConfirmationEmailTemplateKey: 'bookingConfirmed',
      createdTS: input.createdTS || now, modifiedTS: now, updatedAt: now,
      payments: {
        deposit: { amount: 0, paid: true, status: 'not_required', depositPaid: true, depositStatus: 'not_required', paymentStatus: 'not_required', paidAt: now, source: 'manual_historical_import' },
        balance: { amount: Math.round(onlinePayableAmount * 100), amount_total: Math.round(onlinePayableAmount * 100), bookingId, currency: 'eur', customerEmail: String(input.customerEmail || input.email || ''), customerName: String(input.customerName || ''), customerPhone: String(input.customerPhone || input.phone || ''), modifiedTS: now, outingDate: String(input.outingDate || ''), outingType: String(input.outingType || 'Journée en mer'), ownerId, paymentType: 'balance', status: input.balancePaid === false ? 'pending' : 'paid', source: 'manual_historical_import' }
      },
      raw: { ...input, bookingId, source, bookingSource: isExternal ? 'external' : 'direct', importedManually: true, importedAt: now }
    };
    if (isExternal) {
      booking.payments.platform = { source, reference: String(input.externalPlatformBookingRef || ''), paidAmount: platformPaidAmount, netOwnerAmount: Number(input.externalPlatformNetOwnerAmount || 0) || 0, totalClientAmount: platformTotalClientAmount, remainingOwnerAmount: Number(input.externalPlatformRemainingOwnerAmount || 0) || 0, portAmount: Number(input.externalPortAmount || 0) || 0, status: 'recorded', recordedAt: now };
    }
    await this.writeItem(this.bookingsCollection, bookingId, booking);
    return booking;
  }

  async createExternalBookingRecord(offer: Partial<AlegriaOffer>): Promise<void> {
    const now = Date.now();
    const anyOffer: any = offer || {};
    const bookingId = String(anyOffer.relatedBookingId || anyOffer.offerId || `external_${now}_${Math.random().toString(36).slice(2, 8)}`);
    const onlinePayable = Number(anyOffer.externalRemainingOnboardAmount || anyOffer.totalAmount || anyOffer.onlinePayableAmount || 0) || 0;
    const cashOnBoard = Number(anyOffer.externalCashOnBoardAmount || anyOffer.skipperCashAmount || anyOffer.proposalSkipperPrice || 0) || 0;
    const totalRemaining = Number(anyOffer.externalTotalRemainingAmount || (onlinePayable + cashOnBoard)) || 0;
    const platformCustomerAmount = Number(
      anyOffer.externalPlatformTotalClientAmount ||
      anyOffer.payments?.platform?.totalClientAmount ||
      0
    ) || 0;
    const platformPaidAmount = Number(
      anyOffer.externalPlatformPaidAmount ||
      anyOffer.payments?.platform?.paidAmount ||
      0
    ) || 0;
    const completeCustomerTotal = platformCustomerAmount > 0
      ? platformCustomerAmount + totalRemaining
      : Number(anyOffer.totalCustomerCost || anyOffer.customerTotal || anyOffer.totalPrice || totalRemaining) || totalRemaining;
    const platformCommissionAmount = Math.max(0, platformCustomerAmount - platformPaidAmount);
    const depositAmount = Number(anyOffer.depositAmount || Math.round(onlinePayable * 0.10 * 100) / 100) || 0;
    const balanceAmount = Number(anyOffer.balanceAmount || Math.max(0, Math.round((onlinePayable - depositAmount) * 100) / 100)) || 0;

    const booking = {
      ...anyOffer,
      bookingId,
      offerId: anyOffer.offerId || bookingId,
      relatedOfferId: anyOffer.offerId || bookingId,
      ownerId: anyOffer.ownerId || this.boatContext.boatId,
      bookingSource: 'external',
      source: anyOffer.source || anyOffer.externalPlatform || 'clickandboat',
      externalPlatform: anyOffer.externalPlatform || anyOffer.source || 'clickandboat',
      externalPlatformName: anyOffer.externalPlatformName || '',
      externalPlatformBookingRef: anyOffer.externalPlatformBookingRef || anyOffer.platformBookingReference || anyOffer.platformReservationNumber || '',
      platformBookingReference: anyOffer.platformBookingReference || anyOffer.externalPlatformBookingRef || '',
      platformReservationNumber: anyOffer.platformReservationNumber || anyOffer.externalPlatformBookingRef || '',
      customerName: anyOffer.customerName || '',
      email: anyOffer.customerEmail || anyOffer.email || '',
      phone: anyOffer.customerPhone || anyOffer.phone || '',
      outingType: anyOffer.outingType || '',
      outingDate: anyOffer.outingDate || '',
      departureTime: anyOffer.departureTime || '',
      arrivalTime: anyOffer.arrivalTime || '',
      passengers: Number(anyOffer.passengers || 0) || 0,
      // Keep the complete price paid by the customer separate from the amount
      // still to collect directly. Reopening the booking must not change its price.
      totalPrice: completeCustomerTotal,
      totalAmount: completeCustomerTotal,
      totalCustomerCost: completeCustomerTotal,
      customerTotal: completeCustomerTotal,
      totalCustomerPrice: completeCustomerTotal,
      proposalBoatPrice: platformCustomerAmount || Number(anyOffer.proposalBoatPrice || 0),
      boatRentalAmount: platformCustomerAmount || Number(anyOffer.boatRentalAmount || anyOffer.proposalBoatPrice || 0),
      platformCommissionAmount,
      rentalCommissionAmount: platformCommissionAmount,
      onlinePayableAmount: onlinePayable,
      appPayableAmount: onlinePayable,
      skipperCashAmount: cashOnBoard,
      externalRemainingOnboardAmount: onlinePayable,
      externalCashOnBoardAmount: cashOnBoard,
      externalTotalRemainingAmount: totalRemaining,
      depositAmount,
      balanceAmount,
      remainingFeesAmount: balanceAmount,
      remainingOnboardAmount: balanceAmount,
      depositPaid: false,
      depositStatus: 'pending',
      paymentStatus: 'awaiting_deposit',
      balancePaid: false,
      bookingStatus: 'external_platform_pending',
      status: 'external_platform_pending',
      bookingRequestStatus: 'external_platform_pending',
      warrantyAmount: Number(anyOffer.warrantyAmount || 500),
      warrantyStatus: 'not_selected',
      warrantyRegistered: false,
      termsAccepted: false,
      termsAcceptedAt: null,
      createdTS: anyOffer.createdTS || now,
      modifiedTS: now,
      payments: {
        ...(anyOffer.payments || {}),
        platform: {
          source: anyOffer.externalPlatform || anyOffer.source || 'clickandboat',
          reference: anyOffer.externalPlatformBookingRef || anyOffer.platformBookingReference || '',
          paidAmount: platformPaidAmount,
          netOwnerAmount: Number(anyOffer.externalPlatformNetOwnerAmount || 0),
          totalClientAmount: platformCustomerAmount,
          fees: platformCommissionAmount,
          feeAmount: platformCommissionAmount,
          remainingOwnerAmount: Number(anyOffer.externalPlatformRemainingOwnerAmount || 0),
          portAmount: Number(anyOffer.externalPortAmount || 0),
          status: 'recorded',
          recordedAt: now,
        },
      },
      raw: anyOffer,
    };

    await this.writeItem(this.bookingsCollection, bookingId, booking);
  }


  async createExternalBooking(input: Partial<AlegriaOffer>): Promise<AlegriaOffer> {
    const remainingOnboardAmount = Number((input as any).externalRemainingOnboardAmount || (input as any).remainingOnboardAmount || 0);
    const extraServicesOnboardAmount = Number((input as any).externalExtraServicesOnboardAmount || (input as any).extraServicesOnboardAmount || 0);
    const onboardAmount = Number((input as any).totalAmount || (remainingOnboardAmount + extraServicesOnboardAmount) || 0);
    const warrantyAmount = Number((input as any).warrantyAmount ?? 500);
    const platformSource = String((input as any).source || 'samboat');
    const externalPlatformName = platformSource === 'other'
      ? String((input as any).externalPlatformName || (input as any).otherPlatformName || '').trim()
      : '';
    const externalPlatformBookingRef = String(
      (input as any).externalPlatformBookingRef ||
      (input as any).platformBookingReference ||
      (input as any).platformReservationNumber ||
      (input as any).externalReservationReference ||
      ''
    ).trim();

    const saved = await this.saveOffer({
      ...input,
      source: platformSource as any,
      bookingSource: 'external',
      externalPlatform: platformSource,
      externalPlatformName,
      externalPlatformBookingRef,
      platformBookingReference: externalPlatformBookingRef,
      platformReservationNumber: externalPlatformBookingRef,
      externalPlatformListingName: (input as any).externalPlatformListingName || '',
      externalPlatformUrl: (input as any).externalPlatformUrl || '',
      externalPlatformPaidAmount: Number((input as any).externalPlatformPaidAmount || 0),
      externalPlatformNetOwnerAmount: Number((input as any).externalPlatformNetOwnerAmount || 0),
      externalPlatformTotalClientAmount: Number((input as any).externalPlatformTotalClientAmount || 0),
      externalPlatformRemainingOwnerAmount: Number((input as any).externalPlatformRemainingOwnerAmount || 0),
      externalPortAmount: Number((input as any).externalPortAmount || 0),
      externalDocuments: (input as any).externalDocuments || '',
      externalPaymentItems: Array.isArray((input as any).externalPaymentItems) ? (input as any).externalPaymentItems : [],
      externalOnboardAmount: onboardAmount,
      externalRemainingOnboardAmount: remainingOnboardAmount,
      externalExtraServicesOnboardAmount: extraServicesOnboardAmount,
      externalCashOnBoardAmount: Number((input as any).externalCashOnBoardAmount || 0),
      externalTotalRemainingAmount: Number((input as any).externalTotalRemainingAmount || (remainingOnboardAmount + Number((input as any).externalCashOnBoardAmount || 0))),
      proposalExtraServicesPrice: extraServicesOnboardAmount,
      offerMessage: (input as any).offerMessage || 'Please accept the T&C, pay the deposit for the amount due on board, and select your warranty mode.',
      passengers: Number((input as any).passengers || 0),
      totalAmount: onboardAmount,
      warrantyAmount,
      status: 'sent',
      depositStatus: 'pending',
      depositPaid: false,
      paymentStatus: 'awaiting_deposit',
      warrantyStatus: 'not_selected',
      warrantyRegistered: false,
      tncAccepted: false,
      tncAcceptedAt: null,
      acceptedTS: undefined,
      validUntil: (input as any).validUntil || Date.now() + 30 * 24 * 60 * 60 * 1000,
      relatedBookingId: (input as any).relatedBookingId || (input as any).offerId,
    } as any);

    const visible = !saved.relatedBookingId
      ? ({ ...saved, relatedBookingId: saved.offerId } as any)
      : saved;

    if (!saved.relatedBookingId) {
      await this.patchOffer(saved.offerId, { relatedBookingId: saved.offerId } as any);
    }

    await this.createExternalBookingRecord(visible).catch((error) => {
      console.warn('Unable to create external booking record in bnBookings', error);
    });

    return visible;
  }

  async attachCustomerAccount(offerId: string, payload: { customerUid: string; customerAuthProvider: string; customerAccountCreated?: boolean; }): Promise<void> {
    await this.patchOffer(offerId, {
      customerUid: payload.customerUid,
      customerAuthProvider: payload.customerAuthProvider,
      customerAccountCreated: payload.customerAccountCreated === true,
      customerAccountCreatedAt: Date.now(),
      customerLastLoginAt: Date.now(),
    } as any);
  }

  async patchOffer(id: string, patch: Partial<AlegriaOffer>): Promise<void> {
    const current = await this.readItem(this.offersCollection, id);
    if (!current) throw new Error('Offer not found');
    await this.writeItem(this.offersCollection, id, { ...current, ...patch, modifiedTS: Date.now() });
  }


  async markDepositPaidFromStripeReturn(offerId: string, payload: any = {}): Promise<AlegriaOffer> {
    const current = await this.readItem(this.offersCollection, offerId);
    if (!current) {
      throw new Error('Offer not found');
    }
    const sessionId = String(payload.sessionId || payload.session_id || payload.checkoutSessionId || '').trim();
    if (!sessionId) throw new Error('Missing Stripe Checkout session id.');
    const verified = await this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-deposit-complete`,
      `${this.baseUrl}/api/payments/complete-deposit-payment`,
      `${this.baseUrl}/stripe/deposit-complete`,
    ], {
      // Checkout creation uses offerId as the Stripe metadata bookingId.
      // Keep the exact same identifier for ownership/session verification.
      bookingId: offerId,
      offerId,
      ownerId: current.ownerId || this.boatContext.boatId,
      checkoutSessionId: sessionId,
      sessionId,
    }).toPromise();

    const patch: Partial<AlegriaOffer> = {
      depositPaid: true,
      depositStatus: 'paid',
      depositPaidAmount: Number(current.depositAmount || 0),
      paidDepositAmount: Number(current.depositAmount || 0),
      paymentStatus: 'paid',
      stripeCheckoutSessionId: verified?.stripeCheckoutSessionId || sessionId,
      stripePaymentIntentId: verified?.stripePaymentIntentId || current.stripePaymentIntentId || '',
      modifiedTS: Date.now(),
    };

    await this.patchOffer(offerId, patch);
    await this.patchBookingDepositState(offerId, { ...current, ...patch }, payload).catch(() => undefined);
    return { ...current, ...patch } as AlegriaOffer;
  }

  private async patchBookingDepositState(offerId: string, offer: Partial<AlegriaOffer>, payload: any = {}): Promise<void> {
    const bookingId = (offer as any).relatedBookingId || offerId;
    const existing = await this.readItem(this.bookingsCollection, bookingId).catch(() => undefined);
    const payment = {
      ...(existing?.payments?.deposit || {}),
      paid: true,
      depositPaid: true,
      status: 'paid',
      depositStatus: 'paid',
      paymentStatus: 'paid',
      amount: Number(offer.depositAmount || 0),
      checkoutSessionId: payload.sessionId || payload.checkoutSessionId || offer.stripeCheckoutSessionId || '',
      stripeCheckoutSessionId: payload.sessionId || payload.checkoutSessionId || offer.stripeCheckoutSessionId || '',
      stripePaymentIntentId: payload.paymentIntentId || offer.stripePaymentIntentId || '',
      paidAt: existing?.payments?.deposit?.paidAt || Date.now(),
      source: 'stripe_return',
    };

    const proposalBoatPrice = Number((offer as any).proposalBoatPrice ?? (offer as any).estimatedBoatPrice ?? 0) || 0;
    const proposalFuelPrice = Number((offer as any).proposalFuelPrice ?? (offer as any).fuelPrice ?? (offer as any).fuelAmount ?? (offer as any).offerCleaningPrice ?? (offer as any).estimatedCleaningPrice ?? 0) || 0;
    const skipperCashAmount = Number((offer as any).skipperCashAmount ?? (offer as any).proposalSkipperPrice ?? (offer as any).estimatedSkipperPrice ?? 0) || 0;
    const computedTotalAmount = proposalBoatPrice + proposalFuelPrice + skipperCashAmount + Number((offer as any).proposalExtraServicesPrice || 0);
    const onlinePlusSkipperAmount = Number((offer as any).onlinePayableAmount || 0) + skipperCashAmount;
    // The complete customer total always includes the skipper, even though the
    // skipper is paid separately. Some older offers stored only Alegria's
    // online amount in totalAmount/totalPrice.
    const explicitTotals = [
      (offer as any).totalCustomerCost,
      (offer as any).customerTotal,
      (offer as any).totalAmount,
      (offer as any).totalPrice,
      onlinePlusSkipperAmount,
      computedTotalAmount,
    ]
      .map((value) => Number(value))
      .filter((value) => Number.isFinite(value) && value > 0);
    const totalAmount = explicitTotals.length ? Math.max(...explicitTotals) : 0;
    const onlinePayableAmount = Number((offer as any).onlinePayableAmount ?? (offer as any).appPayableAmount ?? Math.max(0, totalAmount - skipperCashAmount)) || 0;
    const balanceAmount = Number((offer as any).balanceAmount ?? (offer as any).remainingFeesAmount ?? Math.max(0, onlinePayableAmount - Number(offer.depositAmount || 0))) || 0;

    await this.writeItem(this.bookingsCollection, bookingId, {
      ...(existing || {}),
      bookingId,
      offerId,
      ownerId: (offer as any).ownerId || existing?.ownerId || this.boatContext.boatId,
      source: (offer as any).source || existing?.source || 'direct',
      bookingSource: (offer as any).source === 'direct' || !(offer as any).source ? 'direct' : (existing?.bookingSource || 'external'),
      customerName: (offer as any).customerName || existing?.customerName || '',
      email: (offer as any).customerEmail || existing?.email || '',
      phone: (offer as any).customerPhone || existing?.phone || '',
      customerEmail: (offer as any).customerEmail || existing?.customerEmail || existing?.email || '',
      outingType: (offer as any).outingType || existing?.outingType || '',
      outingDate: (offer as any).outingDate || existing?.outingDate || '',
      departureTime: (offer as any).departureTime || existing?.departureTime || '',
      arrivalTime: (offer as any).arrivalTime || existing?.arrivalTime || '',
      totalAmount,
      totalPrice: totalAmount,
      proposalBoatPrice,
      proposalFuelPrice,
      fuelPrice: proposalFuelPrice,
      fuelAmount: proposalFuelPrice,
      skipperCashAmount,
      proposalSkipperPrice: skipperCashAmount,
      onlinePayableAmount,
      appPayableAmount: onlinePayableAmount,
      balanceAmount,
      remainingFeesAmount: balanceAmount,
      remainingOnboardAmount: balanceAmount,
      depositAmount: Number(offer.depositAmount || existing?.depositAmount || 0),
      depositPaid: true,
      depositStatus: 'paid',
      depositPaidAmount: Number(offer.depositAmount || existing?.depositAmount || 0),
      paidDepositAmount: Number(offer.depositAmount || existing?.depositAmount || 0),
      paymentStatus: 'paid',
      stripeCheckoutSessionId: payment.stripeCheckoutSessionId,
      stripePaymentIntentId: payment.stripePaymentIntentId,
      modifiedTS: Date.now(),
      payments: {
        ...(existing?.payments || {}),
        deposit: payment,
      },
    });
  }

  createDepositCheckout(offer: AlegriaOffer): Observable<any> {
    const configuredDeposit = Number(offer.depositAmount || 0);
    const cardDepositAmount = configuredDeposit > 0 ? Math.max(0.50, configuredDeposit) : 0;
    return this.http.post<any>(`${this.baseUrl}/pay/outing-deposit-checkout`, {
      bookingId: offer.offerId,
      offerId: offer.offerId,
      ownerId: offer.ownerId || this.boatContext.boatId,
      customerName: offer.customerName,
      customerEmail: offer.customerEmail,
      customerPhone: offer.customerPhone,
      outingDate: offer.outingDate,
      outingType: offer.outingType,
      amount: cardDepositAmount,
      depositAmount: cardDepositAmount,
      requestedDepositAmount: configuredDeposit,
      totalAmount: (offer as any).onlinePayableAmount || (offer as any).appPayableAmount || Math.max(0, Number(offer.totalAmount || 0) - Number((offer as any).proposalSkipperPrice || (offer as any).estimatedSkipperPrice || 0)),
      skipperCashAmount: (offer as any).proposalSkipperPrice || (offer as any).estimatedSkipperPrice || 0,
      paymentType: 'deposit',
      currency: 'eur',
      successUrl: `${window.location.origin}/offer/${offer.offerId}?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/offer/${offer.offerId}?payment=cancelled`,
    }, { withCredentials: true });
  }

  async markWarrantyRegisteredFromStripeReturn(offerId: string, payload: any = {}): Promise<AlegriaOffer> {
    const current = await this.readItem(this.offersCollection, offerId);
    if (!current) throw new Error('Offer not found');

    const sessionId = String(payload.sessionId || payload.session_id || payload.checkoutSessionId || '').trim();
    let backendResult: any = {};
    if (sessionId) {
      try {
        backendResult = await this.completeWarrantySetup(
          offerId,
          sessionId,
          current.ownerId || this.boatContext.boatId
        ).toPromise();
      } catch {
        // Keep the local fallback below, but without a payment method the admin screen will clearly show that the card is not chargeable.
        backendResult = {};
      }
    }

    const paymentMethodId = backendResult?.paymentMethodId || payload.paymentMethodId || '';
    const setupIntentId = backendResult?.setupIntentId || payload.setupIntentId || payload.setup_intent || current.warrantySetupIntentId || '';
    const stripeCustomerId = backendResult?.stripeCustomerId || payload.stripeCustomerId || '';
    const cardLast4 = backendResult?.cardLast4 || payload.cardLast4 || '';
    const cardBrand = backendResult?.cardBrand || payload.cardBrand || '';

    const patch: Partial<AlegriaOffer> = {
      warrantyPaymentChoice: 'stripe_card',
      warrantyMethod: 'stripe_card',
      warrantyRegistered: !!paymentMethodId,
      warrantyStatus: paymentMethodId ? 'card_registered' : 'card_selected',
      warrantySetupIntentId: setupIntentId,
      warrantyPaymentMethodId: paymentMethodId,
      warrantyCardLast4: cardLast4,
      modifiedTS: Date.now(),
    } as any;

    await this.patchOffer(offerId, patch);
    const bookingId = (current as any).relatedBookingId || offerId;
    const existing = await this.readItem(this.bookingsCollection, bookingId).catch(() => undefined);
    await this.writeItem(this.bookingsCollection, bookingId, {
      ...(existing || {}),
      bookingId,
      offerId,
      warrantyPaymentChoice: 'stripe_card',
      warrantyMethod: 'stripe_card',
      warrantyRegistered: !!paymentMethodId,
      warrantyStatus: paymentMethodId ? 'card_registered' : 'card_selected',
      warrantySetupIntentId: setupIntentId,
      warrantyPaymentMethodId: paymentMethodId,
      stripeCustomerId,
      warrantyStripeCustomerId: stripeCustomerId,
      warrantyCardLast4: cardLast4,
      warrantyCardBrand: cardBrand,
      modifiedTS: Date.now(),
      payments: {
        ...(existing?.payments || {}),
        warranty: {
          ...(existing?.payments?.warranty || {}),
          paymentType: 'warranty',
          status: paymentMethodId ? 'warranty_card_saved' : 'card_selected',
          warrantyRegistered: !!paymentMethodId,
          method: 'stripe_card',
          warrantyPaymentChoice: 'stripe_card',
          setupIntentId,
          paymentMethodId,
          warrantyPaymentMethodId: paymentMethodId,
          stripeCustomerId,
          cardLast4,
          cardBrand,
          amount: Number(current.warrantyAmount || 500),
          updatedAt: Date.now(),
        }
      }
    });
    return { ...current, ...patch } as AlegriaOffer;
  }

  createWarrantySetup(offer: AlegriaOffer): Observable<any> {
    const payload = {
      bookingId: offer.offerId,
      offerId: offer.offerId,
      ownerId: offer.ownerId || this.boatContext.boatId,
      customerName: offer.customerName,
      customerEmail: offer.customerEmail,
      customerPhone: offer.customerPhone,
      outingDate: offer.outingDate,
      outingType: offer.outingType,
      warrantyAmount: offer.warrantyAmount || 500,
      amount: offer.warrantyAmount || 500,
      paymentType: 'warranty',
      checkoutType: 'warranty_setup',
      currency: 'eur',
      successUrl: `${window.location.origin}/offer/${offer.offerId}?warranty=success&session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/offer/${offer.offerId}?warranty=cancelled`,
    };

    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-warranty-checkout`,
      `${this.baseUrl}/api/payments/create-warranty-checkout-session`,
      `${this.baseUrl}/api/payments/create-warranty-setup-session`,
      `${this.baseUrl}/stripe/warranty-setup`,
      `${this.baseUrl}/stripe/warranty-checkout`,
    ], payload);
  }


  completeWarrantySetup(offerId: string, sessionId: string, ownerId = this.boatContext.boatId): Observable<any> {
    const payload = {
      bookingId: offerId,
      offerId,
      ownerId,
      checkoutSessionId: sessionId,
      sessionId,
    };
    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-warranty-complete`,
      `${this.baseUrl}/api/payments/complete-warranty-setup`,
      `${this.baseUrl}/stripe/warranty-complete`,
    ], payload);
  }


  chargeWarranty(offer: AlegriaOffer, amount: number, reason: string): Observable<any> {
    const payload = {
      bookingId: offer.offerId,
      ownerId: offer.ownerId || this.boatContext.boatId,
      amount,
      reason,
      currency: 'eur',
    };

    return this.postFirstAvailable([
      `${this.baseUrl}/pay/outing-warranty-charge`,
      `${this.baseUrl}/api/payments/charge-warranty`,
      `${this.baseUrl}/stripe/warranty-charge`,
    ], payload);
  }

  private async createBookingFromOffer(p: AlegriaOffer): Promise<void> {
    const anyP: any = p || {};
    const raw: any = anyP.raw || {};
    const firstPositive = (...values: any[]): number => {
      for (const value of values) {
        const n = Number(value);
        if (Number.isFinite(n) && n > 0) return n;
      }
      return 0;
    };
    const source = String(anyP.source || raw.source || 'direct').toLowerCase();
    const isDirectAlegria = source === 'direct' || source === 'alegria' || source === '';
    const proposalBoatPrice = firstPositive(anyP.proposalBoatPrice, anyP.estimatedBoatPrice, raw.proposalBoatPrice, raw.estimatedBoatPrice, raw.estimatedBasePrice);
    const proposalFuelPrice = firstPositive(anyP.proposalFuelPrice, anyP.fuelPrice, anyP.fuelAmount, anyP.offerCleaningPrice, anyP.estimatedCleaningPrice, raw.proposalFuelPrice, raw.fuelPrice, raw.fuelAmount, raw.offerCleaningPrice, raw.estimatedCleaningPrice);
    const proposalSkipperPrice = firstPositive(anyP.proposalSkipperPrice, anyP.estimatedSkipperPrice, anyP.skipperCashAmount, raw.proposalSkipperPrice, raw.estimatedSkipperPrice);
    const proposalExtraServicesPrice = firstPositive(anyP.proposalExtraServicesPrice, anyP.estimatedExtraGuestsAmount, anyP.estimatedOptionsPrice, raw.proposalExtraServicesPrice, raw.estimatedExtraGuestsAmount, raw.estimatedOptionsPrice);
    const computedTotal = proposalBoatPrice + proposalFuelPrice + proposalSkipperPrice + proposalExtraServicesPrice;
    // Keep Alegria's payable amount and the complete customer price distinct.
    // The complete booking total must include the separately paid skipper.
    const explicitCustomerTotals = [
      anyP.totalCustomerCost,
      anyP.customerTotal,
      anyP.totalAmount,
      anyP.totalPrice,
      anyP.estimatedPrice,
      raw.totalCustomerCost,
      raw.customerTotal,
      raw.totalAmount,
      raw.totalPrice,
      raw.estimatedPrice,
      computedTotal,
    ]
      .map((value) => Number(value))
      .filter((value) => Number.isFinite(value) && value > 0);
    const totalAmount = explicitCustomerTotals.length ? Math.max(...explicitCustomerTotals) : 0;
    const skipperCashAmount = firstPositive(anyP.skipperCashAmount, proposalSkipperPrice, raw.skipperCashAmount);
    // Alegria direct workflow: skipper is not paid online. Only the boat/app amount is paid online.
    const onlinePayableAmount = firstPositive(anyP.onlinePayableAmount, anyP.appPayableAmount, raw.onlinePayableAmount, raw.appPayableAmount, Math.max(0, totalAmount - skipperCashAmount));
    const depositAmount = firstPositive(anyP.depositAmount, raw.depositAmount, Math.round(onlinePayableAmount * 0.10 * 100) / 100);
    const balanceAmount = firstPositive(anyP.balanceAmount, anyP.remainingFeesAmount, raw.balanceAmount, raw.remainingFeesAmount, Math.max(0, Math.round((onlinePayableAmount - depositAmount) * 100) / 100));

    await this.writeItem(this.bookingsCollection, p.offerId, {
      bookingId: p.relatedBookingId || p.offerId,
      offerId: p.offerId,
      relatedBookingId: p.relatedBookingId || p.offerId,
      source: isDirectAlegria ? 'direct' : source,
      bookingSource: isDirectAlegria ? 'direct' : ((p as any).bookingSource || 'external'),
      externalPlatform: isDirectAlegria ? '' : ((p as any).externalPlatform || source),
      externalOnboardAmount: isDirectAlegria ? 0 : ((p as any).externalOnboardAmount || totalAmount || 0),
      externalRemainingOnboardAmount: isDirectAlegria ? 0 : ((p as any).externalRemainingOnboardAmount || 0),
      externalExtraServicesOnboardAmount: isDirectAlegria ? 0 : ((p as any).externalExtraServicesOnboardAmount || 0),
      customerName: p.customerName,
      email: p.customerEmail,
      phone: p.customerPhone || '',
      outingType: p.outingType,
      outingDate: p.outingDate,
      departureTime: p.departureTime || '',
      arrivalTime: p.arrivalTime || '',
      passengers: p.passengers || null,
      proposalBoatPrice,
      proposalFuelPrice,
      fuelPrice: proposalFuelPrice,
      fuelAmount: proposalFuelPrice,
      proposalSkipperPrice,
      proposalExtraServicesPrice,
      estimatedBoatPrice: (p as any).estimatedBoatPrice ?? proposalBoatPrice,
      ...((p as any).estimatedCleaningPrice ? { estimatedCleaningPrice: (p as any).estimatedCleaningPrice } : {}),
      estimatedSkipperPrice: (p as any).estimatedSkipperPrice ?? proposalSkipperPrice,
      estimatedExtraGuestsAmount: (p as any).estimatedExtraGuestsAmount ?? 0,
      estimatedOptionsPrice: (p as any).estimatedOptionsPrice ?? 0,
      estimatedPrice: (p as any).estimatedPrice ?? totalAmount,
      totalPrice: totalAmount,
      totalAmount,
      skipperCashAmount,
      onlinePayableAmount,
      appPayableAmount: onlinePayableAmount,
      depositAmount,
      balanceAmount,
      remainingOnboardAmount: balanceAmount,
      extraServicesOnboardAmount: 0,
      remainingFeesAmount: balanceAmount,
      warrantyAmount: p.warrantyAmount || 500,
      depositStatus: p.depositStatus || (p.depositPaid ? 'paid' : 'pending'),
      depositPaid: p.depositPaid === true || p.depositStatus === 'paid',
      paymentStatus: p.paymentStatus || (p.depositPaid === true || p.depositStatus === 'paid' ? 'paid' : 'pending'),
      warrantyStatus: p.warrantyStatus || (p.warrantyPaymentChoice === 'cash_on_board' ? 'cash_selected' : 'card_registered'),
      warrantyRegistered: p.warrantyRegistered === true || p.warrantyPaymentChoice === 'cash_on_board',
      warrantyPaymentChoice: p.warrantyPaymentChoice || null,
      customerUid: p.customerUid || '',
      customerAuthProvider: p.customerAuthProvider || '',
      customerAccountCreated: p.customerAccountCreated === true,
      bookingStatus: (p.depositPaid === true || p.depositStatus === 'paid') && p.tncAccepted ? 'confirmed' : 'not_confirmed',
      status: (p.depositPaid === true || p.depositStatus === 'paid') && p.tncAccepted ? 'confirmed' : 'not_confirmed',
      bookingRequestStatus: (p.depositPaid === true || p.depositStatus === 'paid') && p.tncAccepted ? 'confirmed' : 'not_confirmed',
      offerStatus: 'accepted',
      termsAccepted: p.tncAccepted === true && !!p.tncAcceptedAt,
      tncAccepted: p.tncAccepted === true && !!p.tncAcceptedAt,
      customerTermsAccepted: (p as any).customerTermsAccepted === true,
      tncAcceptedAt: p.tncAccepted === true ? p.tncAcceptedAt : null,
      termsAcceptedAt: p.tncAccepted === true ? (p.termsAcceptedAt || p.tncAcceptedAt) : null,
      tncAcceptedBy: (p as any).tncAcceptedBy || (p as any).termsAcceptedBy || '',
      termsAcceptedBy: (p as any).termsAcceptedBy || (p as any).tncAcceptedBy || '',
      tncAcceptedSource: (p as any).tncAcceptedSource || (p as any).termsAcceptedSource || '',
      termsAcceptedSource: (p as any).termsAcceptedSource || (p as any).tncAcceptedSource || '',
      terms: { ...((p as any).terms || {}) },
      documents: { ...((p as any).documents || {}) },
      workflow: {
        offerIssued: true,
        termsAccepted: p.tncAccepted === true && !!p.tncAcceptedAt,
        termsAcceptedAt: p.tncAccepted === true ? (p.termsAcceptedAt || p.tncAcceptedAt) : null,
        termsAcceptedBy: (p as any).termsAcceptedBy || (p as any).tncAcceptedBy || '',
        termsAcceptedSource: (p as any).termsAcceptedSource || (p as any).tncAcceptedSource || '',
        depositPaid: p.depositPaid === true || p.depositStatus === 'paid',
        alegriaPaid: false,
        skipperPaid: false,
        warrantyCompleted: p.warrantyRegistered === true || p.warrantyPaymentChoice === 'cash_on_board',
        bookingConfirmed: (p.tncAccepted === true) && (p.depositPaid === true || p.depositStatus === 'paid') && (p.warrantyRegistered === true || p.warrantyPaymentChoice === 'cash_on_board'),
      },
      bookingWorkflow: {
        offerIssued: true,
        termsAccepted: p.tncAccepted === true && !!p.tncAcceptedAt,
        termsAcceptedAt: p.tncAccepted === true ? (p.termsAcceptedAt || p.tncAcceptedAt) : null,
        termsAcceptedBy: (p as any).termsAcceptedBy || (p as any).tncAcceptedBy || '',
        termsAcceptedSource: (p as any).termsAcceptedSource || (p as any).tncAcceptedSource || '',
        depositPaid: p.depositPaid === true || p.depositStatus === 'paid',
        alegriaPaid: false,
        skipperPaid: false,
        warrantyCompleted: p.warrantyRegistered === true || p.warrantyPaymentChoice === 'cash_on_board',
        bookingConfirmed: (p.tncAccepted === true) && (p.depositPaid === true || p.depositStatus === 'paid') && (p.warrantyRegistered === true || p.warrantyPaymentChoice === 'cash_on_board'),
      },
      comments: p.comments || '',
      payments: {
        deposit: {
          paymentType: 'deposit',
          amount: depositAmount,
          bookingId: p.relatedBookingId || p.offerId,
          customerEmail: p.customerEmail || '',
          customerName: p.customerName || '',
          customerPhone: p.customerPhone || '',
          outingDate: p.outingDate || '',
          outingType: p.outingType || '',
          paid: p.depositPaid === true || p.depositStatus === 'paid',
          status: p.depositPaid === true || p.depositStatus === 'paid' ? 'paid' : 'pending',
          depositPaid: p.depositPaid === true || p.depositStatus === 'paid',
          depositStatus: p.depositPaid === true || p.depositStatus === 'paid' ? 'paid' : 'pending',
          stripeCheckoutSessionId: p.stripeCheckoutSessionId || '',
          stripePaymentIntentId: p.stripePaymentIntentId || '',
          source: 'offer_finalization',
          updatedAt: Date.now(),
        },
        direct: {
          skipperCashAmount,
          skipperStatus: skipperCashAmount > 0 ? 'to_be_paid_onboard' : 'not_applicable',
          skipperPaid: false,
          recordedAt: Date.now(),
        }
      },
      createdTS: p.createdTS,
      modifiedTS: Date.now(),
      raw: p,
    });
  }


  private postFirstAvailable(endpoints: string[], payload: any): Observable<any> {
    return new Observable((observer) => {
      let index = 0;

      const tryNext = (lastError?: any) => {
        if (index >= endpoints.length) {
          observer.error(lastError || new Error('No payment endpoint is available.'));
          return;
        }

        this.http.post<any>(endpoints[index++], payload).subscribe({
          next: (response) => {
            observer.next(response);
            observer.complete();
          },
          error: (error) => tryNext(error),
        });
      };

      tryNext();
    });
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


  private buildOfferLink(offerId: string): string {
    const origin = typeof window !== 'undefined' && window.location?.origin ? window.location.origin : '';
    return `${origin}/offer/${encodeURIComponent(offerId)}`;
  }

  private buildOfferNotificationPayload(offer: AlegriaOffer, offerLink: string): any {
    const money = (value: any): string => `${(Number(value || 0)).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
    const boatPrice = Number((offer as any).proposalBoatPrice ?? (offer as any).estimatedBoatPrice ?? 0) || 0;
    const fuelPrice = Number((offer as any).proposalFuelPrice ?? (offer as any).fuelPrice ?? (offer as any).fuelAmount ?? 0) || 0;
    const extraServicesPrice = Number((offer as any).proposalExtraServicesPrice ?? 0) || 0;
    const skipperCashAmount = Number((offer as any).skipperCashAmount ?? (offer as any).proposalSkipperPrice ?? 0) || 0;
    const computedTotal = boatPrice + fuelPrice + extraServicesPrice + skipperCashAmount;
    const totalAmount = Number(offer.totalAmount || computedTotal || 0);
    const onlinePayableAmount = Number((offer as any).onlinePayableAmount ?? (offer as any).appPayableAmount ?? Math.max(0, totalAmount - skipperCashAmount)) || 0;
    const depositAmount = Number(offer.depositAmount || Math.round(onlinePayableAmount * 0.10 * 100) / 100 || 0);
    const balanceAmount = Number(offer.balanceAmount || Math.max(0, Math.round((onlinePayableAmount - depositAmount) * 100) / 100) || 0);
    const warrantyAmount = Number(offer.warrantyAmount || 500);
    const customerName = String(offer.customerName || '').trim();
    const outingType = String(offer.outingType || 'Journée en mer').trim();
    const outingDate = String(offer.outingDate || '').trim();
    const departureTime = String(offer.departureTime || '').trim();
    const arrivalTime = String(offer.arrivalTime || '').trim();

    const summaryHtml = [
      '<div style="margin:18px 0;padding:14px 16px;border:1px solid #e6ded2;border-radius:12px;background:#fbf8f2;">',
      '<p style="margin:0 0 10px;font-weight:700;">Synthèse financière</p>',
      `<p style="margin:4px 0;"><strong>Sortie bateau :</strong> ${money(boatPrice)}</p>`,
      fuelPrice ? `<p style="margin:4px 0;"><strong>Carburant :</strong> ${money(fuelPrice)}</p>` : '',
      extraServicesPrice ? `<p style="margin:4px 0;"><strong>Extras / services :</strong> ${money(extraServicesPrice)}</p>` : '',
      skipperCashAmount ? `<p style="margin:4px 0;"><strong>Skipper à régler directement :</strong> ${money(skipperCashAmount)}</p>` : '',
      `<p style="margin:10px 0 0;padding-top:10px;border-top:1px solid #e6ded2;"><strong>Coût total client :</strong> ${money(totalAmount)}</p>`,
      '</div>',
      '<div style="margin:18px 0;padding:14px 16px;border:1px solid #d7eadf;border-radius:12px;background:#f1fbf5;">',
      '<p style="margin:0 0 10px;font-weight:700;">À payer à Alegria</p>',
      `<p style="margin:4px 0;"><strong>Montant payable à Alegria :</strong> ${money(onlinePayableAmount)}</p>`,
      `<p style="margin:4px 0;"><strong>Acompte 10 % :</strong> ${money(depositAmount)}</p>`,
      `<p style="margin:4px 0;"><strong>Solde Alegria :</strong> ${money(balanceAmount)}</p>`,
      '</div>',
      skipperCashAmount ? `<div style="margin:18px 0;padding:14px 16px;border:1px solid #f2dfb9;border-radius:12px;background:#fff9ed;"><p style="margin:0 0 10px;font-weight:700;">À payer au skipper</p><p style="margin:4px 0;"><strong>Skipper :</strong> ${money(skipperCashAmount)}</p></div>` : '',
      `<div style="margin:18px 0;padding:14px 16px;border:1px solid #e1d8f2;border-radius:12px;background:#faf7ff;"><p style="margin:0 0 10px;font-weight:700;">Garantie</p><p style="margin:4px 0;"><strong>Montant :</strong> ${money(warrantyAmount)}</p></div>`,
    ].filter(Boolean).join('');

    const plainFinancialSummary = [
      `Sortie bateau : ${money(boatPrice)}`,
      fuelPrice ? `Carburant : ${money(fuelPrice)}` : '',
      extraServicesPrice ? `Extras / services : ${money(extraServicesPrice)}` : '',
      skipperCashAmount ? `Skipper à régler directement : ${money(skipperCashAmount)}` : '',
      `Coût total client : ${money(totalAmount)}`,
      '',
      `À payer à Alegria : ${money(onlinePayableAmount)}`,
      `Acompte 10 % : ${money(depositAmount)}`,
      `Solde Alegria : ${money(balanceAmount)}`,
      skipperCashAmount ? `À payer au skipper : ${money(skipperCashAmount)}` : '',
      `Garantie : ${money(warrantyAmount)}`,
    ].filter(Boolean).join('\n');

    const skipperHtml = skipperCashAmount
      ? `<p style="margin:4px 0;"><strong>Skipper à régler directement :</strong> ${money(skipperCashAmount)}</p>`
      : '';
    const skipperSectionHtml = skipperCashAmount
      ? `<div style="margin:18px 0;padding:14px 16px;border:1px solid #f2dfb9;border-radius:12px;background:#fff9ed;"><p style="margin:0 0 10px;font-weight:700;">À payer au skipper</p><p style="margin:4px 0;"><strong>Honoraires skipper :</strong> ${money(skipperCashAmount)}</p><p style="margin:4px 0;color:#526173;">À régler directement au skipper le jour de la sortie.</p></div>`
      : '';

    const whatsappText = [
      `Bonjour ${customerName || ''} 👋`,
      `Votre offre Alegria Boat pour ${outingType}${outingDate ? ` le ${outingDate}` : ''} est prête.`,
      '',
      `💙 À payer à Alegria : ${money(onlinePayableAmount)}`,
      `• Acompte 10 % : ${money(depositAmount)}`,
      `• Solde Alegria : ${money(balanceAmount)}`,
      skipperCashAmount ? `👨‍✈️ À payer au skipper : ${money(skipperCashAmount)}` : '',
      `🛡 Garantie : ${money(warrantyAmount)}`,
      '',
      `Coût total client : ${money(totalAmount)}`,
      '',
      `Consulter et accepter la offre : ${offerLink}`
    ].filter(Boolean).join('\n');

    return {
      offerId: offer.offerId,
      offerLink,
      offerUrl: offerLink,
      customerName,
      customerEmail: String(offer.customerEmail || '').trim(),
      customerPhone: String(offer.customerPhone || '').trim(),
      customerWhatsapp: this.normalizeWhatsappPhone(offer.customerPhone),
      outingType,
      outingDate,
      departureTime,
      arrivalTime,
      passengers: offer.passengers || null,
      boatPrice,
      boatPriceFormatted: money(boatPrice),
      fuelPrice,
      fuelPriceFormatted: money(fuelPrice),
      extraServicesPrice,
      extraServicesPriceFormatted: money(extraServicesPrice),
      skipperCashAmount,
      skipperAmount: skipperCashAmount,
      skipperPrice: skipperCashAmount,
      skipperFee: skipperCashAmount,
      skipperAmountFormatted: money(skipperCashAmount),
      skipperPriceFormatted: money(skipperCashAmount),
      skipperFeeFormatted: money(skipperCashAmount),
      proposalSkipperPrice: skipperCashAmount,
      proposalSkipperPriceFormatted: money(skipperCashAmount),
      onlinePayableAmount,
      onlinePayableAmountFormatted: money(onlinePayableAmount),
      alegriaAmount: onlinePayableAmount,
      alegriaAmountFormatted: money(onlinePayableAmount),
      totalAmount,
      totalAmountFormatted: money(totalAmount),
      totalCustomerCost: totalAmount,
      totalCustomerCostFormatted: money(totalAmount),
      depositAmount,
      depositAmountFormatted: money(depositAmount),
      balanceAmount,
      balanceAmountFormatted: money(balanceAmount),
      warrantyAmount,
      warrantyAmountFormatted: money(warrantyAmount),
      summaryHtml,
      plainFinancialSummary,
      financialSummaryText: plainFinancialSummary,
      skipperHtml,
      skipperSectionHtml,
      skipperLineHtml: skipperHtml,
      toPaySkipperHtml: skipperSectionHtml,
      emailBodyHtml: summaryHtml,
      subject: `Votre offre bateau - ${outingType}`,
      whatsappText,
      emailTemplate: 'offerReady',
      whatsappTemplate: 'offerReady',
      createdTS: Date.now(),
      boatId: offer.boatId || this.boatContext.boatId,
      ownerId: offer.ownerId || this.boatContext.boatId,
    };
  }

  private normalizeWhatsappPhone(value: any): string {
    const raw = String(value || '').trim();
    if (!raw) return '';
    const plusPrefixed = raw.startsWith('+');
    const digits = raw.replace(/[^\d]/g, '');
    if (!digits) return '';
    if (plusPrefixed) return digits;
    if (digits.startsWith('00')) return digits.slice(2);
    if (digits.startsWith('0') && digits.length === 10) return `33${digits.slice(1)}`;
    return digits;
  }

  private async queueOfferNotification(offer: AlegriaOffer, channel: 'email' | 'whatsapp', payload: any, now: number): Promise<void> {
    const offerId = offer.offerId;
    const id = `${offerId}_${channel}_${now}`;
    const destination = channel === 'email' ? payload.customerEmail : payload.customerWhatsapp;
    if (!destination) return;

    await this.writeItem(`${this.offersCollection}/${offerId}/events`, id, {
      notificationId: id,
      type: 'offer_sent',
      channel,
      status: 'queued',
      offerId,
      bookingId: offer.relatedBookingId || '',
      destination,
      payload,
      createdTS: now,
      modifiedTS: now,
      source: 'admin_offer',
      boatId: offer.boatId || this.boatContext.boatId,
      ownerId: offer.ownerId || this.boatContext.boatId,
    });
  }


  private async readOfferWithPaymentState(id: string): Promise<AlegriaOffer | undefined> {
    const offer = await this.readItem(this.offersCollection, id);
    if (!offer) return undefined;

    if (offer.status === 'accepted') {
      const existingBooking = await this.readItem(this.bookingsCollection, offer.relatedBookingId || offer.offerId).catch(() => undefined);
      if (!existingBooking) {
        await this.createBookingFromOffer({ ...offer, relatedBookingId: offer.relatedBookingId || offer.offerId } as AlegriaOffer);
        await this.patchOffer(offer.offerId, { relatedBookingId: offer.relatedBookingId || offer.offerId } as any).catch(() => undefined);
      }
    }

    const canonicalBooking = await this.readItem(this.bookingsCollection, offer.relatedBookingId || offer.offerId).catch(() => undefined);
    const depositPayment = canonicalBooking?.payments?.deposit || canonicalBooking?.payment || null;
    const warrantyPayment = canonicalBooking?.payments?.warranty || null;
    const warrantyCharge = canonicalBooking?.payments?.warrantyCharge || null;

    const depositPaid =
      offer.depositPaid === true ||
      offer.depositStatus === 'paid' ||
      offer.paymentStatus === 'paid' ||
      canonicalBooking?.depositPaid === true ||
      canonicalBooking?.depositStatus === 'paid' ||
      canonicalBooking?.paymentStatus === 'paid' ||
      canonicalBooking?.paymentStatus === 'charge_succeeded' ||
      depositPayment?.depositPaid === true ||
      depositPayment?.paid === true ||
      depositPayment?.status === 'paid' ||
      depositPayment?.status === 'deposit_paid';

    return {
      ...offer,
      relatedBookingId: offer.relatedBookingId || offer.offerId,
      depositPaid,
      depositStatus: depositPaid ? 'paid' : (offer.depositStatus || depositPayment?.status || 'pending'),
      paymentStatus: depositPaid ? 'paid' : (offer.paymentStatus || canonicalBooking?.paymentStatus || depositPayment?.status || ''),
      stripeCheckoutSessionId: offer.stripeCheckoutSessionId || canonicalBooking?.stripeCheckoutSessionId || depositPayment?.stripeCheckoutSessionId || depositPayment?.checkoutSessionId || '',
      stripePaymentIntentId: offer.stripePaymentIntentId || canonicalBooking?.stripePaymentIntentId || depositPayment?.stripePaymentIntentId || depositPayment?.paymentIntentId || '',
      warrantyStatus: offer.warrantyStatus || canonicalBooking?.warrantyStatus || warrantyPayment?.warrantyStatus || warrantyPayment?.status || 'not_selected',
      warrantyRegistered:
        offer.warrantyRegistered === true ||
        canonicalBooking?.warrantyRegistered === true ||
        warrantyPayment?.warrantyRegistered === true ||
        warrantyPayment?.status === 'warranty_card_saved' ||
        warrantyPayment?.status === 'card_registered',
      warrantyPaymentMethodId:
        offer.warrantyPaymentMethodId || canonicalBooking?.warrantyPaymentMethodId || warrantyPayment?.paymentMethodId || '',
      warrantySetupIntentId:
        offer.warrantySetupIntentId || canonicalBooking?.warrantySetupIntentId || warrantyPayment?.setupIntentId || '',
      warrantyChargeAmount:
        offer.warrantyChargeAmount || canonicalBooking?.warrantyChargedAmount || warrantyCharge?.warrantyChargeAmount || 0,
      warrantyChargeReason:
        offer.warrantyChargeReason || canonicalBooking?.warrantyChargeReason || warrantyCharge?.warrantyChargeReason || '',
      warrantyChargeStatus:
        offer.warrantyChargeStatus || canonicalBooking?.warrantyStatus || warrantyCharge?.status || '',
    };
  }

  private async readFirebasePath(path: string): Promise<any> {
    const normalizedPath = String(path || '').replace(/^\/+|\/+$/g, '');
    if (!normalizedPath) return undefined;
    return this.http.get<any>(`${this.firebaseUrl}/${normalizedPath}.json`).toPromise();
  }

  private async readCollection(collection: string): Promise<AlegriaOffer[]> {
    const value = await this.http.get<any>(`${this.firebaseUrl}/${collection}.json`).toPromise();
    if (!value) return [];
    return Object.keys(value)
      .map((key) => ({ ...value[key], offerId: value[key]?.offerId || key }))
      .filter((offer) => String(offer.boatId || 'alegria') === this.boatContext.boatId);
  }

  private async readItem(collection: string, id: string): Promise<any> {
    const value = await this.http.get<any>(`${this.firebaseUrl}/${collection}/${id}.json`).toPromise();
    return value ? { ...value, offerId: value.offerId || id } : undefined;
  }


  private async deleteItem(collection: string, id: string): Promise<void> {
    await this.http.delete(`${this.firebaseUrl}/${collection}/${id}.json`).toPromise();
  }

  private async writeItem(collection: string, id: string, value: any): Promise<void> {
    await this.http.put(`${this.firebaseUrl}/${collection}/${id}.json`, value).toPromise();
  }
}
