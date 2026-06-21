
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilsService } from 'godigital-lib';

export type WarrantyPaymentChoice = 'stripe_card' | 'cash_on_board';
export type ProposalStatus = 'request' | 'draft' | 'sent' | 'accepted' | 'expired' | 'cancelled';
export type BookingSource = 'direct' | 'request' | 'samboat' | 'clickandboat' | 'other';

export interface AlegriaProposal {
  proposalId: string;
  relatedBookingId?: string;
  proposalSentAfter?: string;
  requestSubmittedAt?: number;
  requestBookingId?: string;
  proposalOrigin?: 'admin_direct' | 'customer_request' | 'email_request' | string;
  source: BookingSource;
  status: ProposalStatus;
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
  proposalCleaningPrice?: number;
  estimatedOptionsPrice?: number;
  estimatedBoatPrice?: number;
  requestOrigin?: string;
  createdByAdmin?: boolean;
  pricingToBeFinalizedByAdmin?: boolean;
  requestNeedsAdminProposal?: boolean;
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
  tncAcceptedAt?: number | null;
  validUntil: number;
  proposalMessage?: string;
  comments?: string;
  depositStatus?: string;
  depositPaid?: boolean;
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
  raw?: any;
}

@Injectable({ providedIn: 'root' })
export class ProposalApiService {
  private readonly proposalsCollection = 'bnProposals';
  private readonly bookingsCollection = 'bnBookings';
  private readonly firebaseUrl = 'https://adn-dev-4d05d.firebaseio.com';

  constructor(private http: HttpClient, private utilsSvc: UtilsService) {}

  getProposals(): Observable<AlegriaProposal[]> {
    return from(this.readCollection(this.proposalsCollection)).pipe(catchError(() => of([])));
  }

  getProposal(id: string): Observable<AlegriaProposal | undefined> {
    return from(this.readProposalWithPaymentState(id)).pipe(catchError(() => of(undefined)));
  }


  private validateProposalInput(input: Partial<AlegriaProposal>): void {
    const errors: string[] = [];
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
    if (Number(input.passengers || 0) <= 0) errors.push('Passengers must be greater than zero.');
    if (Number(input.totalAmount || 0) <= 0) errors.push('Total amount must be greater than zero.');
    if (Number(input.warrantyAmount || 0) < 0) errors.push('Warranty amount cannot be negative.');
    if (!String((input as any).proposalMessage || '').trim()) errors.push('Proposal message is required.');

    if (errors.length) throw new Error(errors.join(' '));
  }


  async saveProposal(input: Partial<AlegriaProposal>): Promise<AlegriaProposal> {
    this.validateProposalInput(input);
    const now = Date.now();
    const proposalId = input.proposalId || `proposal_${now}_${Math.random().toString(36).slice(2, 8)}`;
    const totalAmount = Number(input.totalAmount || 0);
    const depositRate = 0.10;
    const depositAmount = Math.round(totalAmount * depositRate * 100) / 100;
    const balanceAmount = Math.round((totalAmount - depositAmount) * 100) / 100;
    const proposal: AlegriaProposal = {
      proposalId,
      source: input.source || 'direct',
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
      proposalCleaningPrice: (input as any).proposalCleaningPrice || null,
      estimatedOptionsPrice: (input as any).estimatedOptionsPrice || null,
      estimatedBoatPrice: (input as any).estimatedBoatPrice || null,
      estimatedPrice: (input as any).estimatedPrice ?? totalAmount,
      estimatedBasePrice: (input as any).estimatedBasePrice || null,
      estimatedCalendarMultiplier: (input as any).estimatedCalendarMultiplier || null,
      estimatedExtraGuestsAmount: (input as any).estimatedExtraGuestsAmount || null,
      estimatedExtraGuestCount: (input as any).estimatedExtraGuestCount || null,
      estimatedSkipperPrice: (input as any).estimatedSkipperPrice || null,
      estimatedCleaningPrice: (input as any).estimatedCleaningPrice || null,
      proposalBoatPrice: (input as any).proposalBoatPrice || null,
      proposalSkipperPrice: (input as any).proposalSkipperPrice || null,
      proposalExtraServicesPrice: (input as any).proposalExtraServicesPrice || null,
      bookingPricePeriod: (input as any).bookingPricePeriod || '',
      bookingPricePeriodLabel: (input as any).bookingPricePeriodLabel || '',
      startTime: (input as any).startTime || input.departureTime || '',
      endTime: (input as any).endTime || input.arrivalTime || '',
      durationHours: (input as any).durationHours || null,
      requestNeedsAdminProposal: (input as any).requestNeedsAdminProposal === true,
      pricingToBeFinalizedByAdmin: (input as any).pricingToBeFinalizedByAdmin === true,
      createdByAdmin: (input as any).createdByAdmin === true,
      requestOrigin: (input as any).requestOrigin || '',
      depositRate,
      depositAmount,
      balanceAmount,
      warrantyAmount: Number(input.warrantyAmount || 500),
      warrantyPaymentChoice: input.warrantyPaymentChoice,
      tncAccepted: !!input.tncAccepted,
      tncAcceptedAt: input.tncAcceptedAt || null,
      validUntil: input.validUntil || now + 24 * 60 * 60 * 1000,
      proposalMessage: input.proposalMessage || '',
      comments: input.comments || '',
      depositStatus: input.depositStatus || 'pending',
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
    await this.writeItem(this.proposalsCollection, proposalId, proposal);
    return proposal;
  }


  async markTermsAccepted(proposalId: string): Promise<AlegriaProposal> {
    const current = await this.readItem(this.proposalsCollection, proposalId);
    if (!current) throw new Error('Proposal not found');
    if (current.validUntil && Date.now() > current.validUntil) {
      await this.patchProposal(proposalId, { status: 'expired' });
      throw new Error('Proposal expired');
    }

    const updated: AlegriaProposal = {
      ...current,
      tncAccepted: true,
      tncAcceptedAt: current.tncAcceptedAt || Date.now(),
      modifiedTS: Date.now(),
    };

    await this.writeItem(this.proposalsCollection, proposalId, updated);
    return updated;
  }

  async setWarrantyChoice(proposalId: string, warrantyPaymentChoice: WarrantyPaymentChoice): Promise<AlegriaProposal> {
    const current = await this.readItem(this.proposalsCollection, proposalId);
    if (!current) throw new Error('Proposal not found');

    const patch: Partial<AlegriaProposal> = {
      warrantyPaymentChoice,
      warrantyStatus: warrantyPaymentChoice === 'cash_on_board' ? 'cash_selected' : 'not_selected',
      warrantyRegistered: warrantyPaymentChoice === 'cash_on_board' ? true : current.warrantyRegistered === true,
      modifiedTS: Date.now(),
    };

    await this.patchProposal(proposalId, patch);
    return { ...current, ...patch } as AlegriaProposal;
  }

  async finalizeProposalWizard(proposalId: string, warrantyPaymentChoice: WarrantyPaymentChoice): Promise<{ bookingId: string }> {
    const hydrated = await this.readProposalWithPaymentState(proposalId);
    if (!hydrated) throw new Error('Proposal not found');

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

    const bookingId = hydrated.relatedBookingId || hydrated.proposalId;
    const accepted: AlegriaProposal = {
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
      paymentStatus: hydrated.paymentStatus || '',
      acceptedTS: Date.now(),
      modifiedTS: Date.now(),
    };

    await this.createBookingFromProposal(accepted);
    await this.deleteProposal(proposalId);
    return { bookingId };
  }


  private parseProposalOutingDate(value: any): number {
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

  private isOutingDateTodayOrPast(proposal: Partial<AlegriaProposal>): boolean {
    const outingTime = this.parseProposalOutingDate((proposal as any).outingDate || (proposal as any).date);
    if (!outingTime) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return outingTime <= today.getTime();
  }

  private assertProposalCanBeRenewed(proposal: Partial<AlegriaProposal>): void {
    if (this.isOutingDateTodayOrPast(proposal)) {
      throw new Error('This proposal cannot be renewed because the outing date is today or already past.');
    }
  }

  async markSent(proposal: AlegriaProposal): Promise<void> {
    this.assertProposalCanBeRenewed(proposal);
    await this.patchProposal(proposal.proposalId, {
      status: 'sent',
      validUntil: Date.now() + 24 * 60 * 60 * 1000,
    });
  }

  async acceptProposal(proposalId: string, warrantyPaymentChoice: WarrantyPaymentChoice): Promise<AlegriaProposal> {
    // Backward-compatible wrapper: in the new wizard, accepting only records T&C + warranty choice.
    const proposal = await this.markTermsAccepted(proposalId);
    return this.setWarrantyChoice(proposalId, warrantyPaymentChoice).then((updated) => ({ ...proposal, ...updated }));
  }


  async renewProposal(proposalId: string): Promise<AlegriaProposal> {
    const current = await this.readItem(this.proposalsCollection, proposalId);
    if (!current) throw new Error('Proposal not found');
    this.assertProposalCanBeRenewed(current);

    const renewed: AlegriaProposal = {
      ...current,
      status: 'sent',
      validUntil: Date.now() + 24 * 60 * 60 * 1000,
      modifiedTS: Date.now(),
    };

    await this.writeItem(this.proposalsCollection, proposalId, renewed);
    return renewed;
  }

  async deleteProposal(proposalId: string): Promise<void> {
    await this.deleteItem(this.proposalsCollection, proposalId);
  }

  async createExternalBooking(input: Partial<AlegriaProposal>): Promise<AlegriaProposal> {
    const saved = await this.saveProposal({
      ...input,
      source: input.source || 'samboat',
      status: 'accepted',
      depositStatus: 'platform',
      warrantyStatus: input.warrantyPaymentChoice === 'cash_on_board' ? 'cash_selected' : 'not_selected',
      tncAccepted: true,
      tncAcceptedAt: Date.now(),
      acceptedTS: Date.now(),
      relatedBookingId: input.relatedBookingId || input.proposalId,
    });
    await this.createBookingFromProposal(saved);
    return saved;
  }

  async attachCustomerAccount(proposalId: string, payload: { customerUid: string; customerAuthProvider: string; customerAccountCreated?: boolean; }): Promise<void> {
    await this.patchProposal(proposalId, {
      customerUid: payload.customerUid,
      customerAuthProvider: payload.customerAuthProvider,
      customerAccountCreated: payload.customerAccountCreated === true,
      customerAccountCreatedAt: Date.now(),
      customerLastLoginAt: Date.now(),
    } as any);
  }

  async patchProposal(id: string, patch: Partial<AlegriaProposal>): Promise<void> {
    const current = await this.readItem(this.proposalsCollection, id);
    if (!current) throw new Error('Proposal not found');
    await this.writeItem(this.proposalsCollection, id, { ...current, ...patch, modifiedTS: Date.now() });
  }

  createDepositCheckout(proposal: AlegriaProposal): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/pay/outing-deposit-checkout`, {
      bookingId: proposal.proposalId,
      ownerId: 'alegria',
      customerName: proposal.customerName,
      customerEmail: proposal.customerEmail,
      customerPhone: proposal.customerPhone,
      outingDate: proposal.outingDate,
      outingType: proposal.outingType,
      depositAmount: proposal.depositAmount,
      currency: 'eur',
      successUrl: `${window.location.origin}/proposal/${proposal.proposalId}?payment=success`,
      cancelUrl: `${window.location.origin}/proposal/${proposal.proposalId}?payment=cancelled`,
    }, { withCredentials: true });
  }

  createWarrantySetup(proposal: AlegriaProposal): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/pay/outing-warranty-checkout`, {
      bookingId: proposal.proposalId,
      ownerId: 'alegria',
      customerName: proposal.customerName,
      customerEmail: proposal.customerEmail,
      customerPhone: proposal.customerPhone,
      outingDate: proposal.outingDate,
      outingType: proposal.outingType,
      warrantyAmount: proposal.warrantyAmount || 500,
      currency: 'eur',
      successUrl: `${window.location.origin}/proposal/${proposal.proposalId}?warranty=success`,
      cancelUrl: `${window.location.origin}/proposal/${proposal.proposalId}?warranty=cancelled`,
    }, { withCredentials: true });
  }


  chargeWarranty(proposal: AlegriaProposal, amount: number, reason: string): Observable<any> {
    const payload = {
      bookingId: proposal.proposalId,
      ownerId: 'alegria',
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

  private async createBookingFromProposal(p: AlegriaProposal): Promise<void> {
    await this.writeItem(this.bookingsCollection, p.proposalId, {
      bookingId: p.relatedBookingId || p.proposalId,
      proposalId: p.proposalId,
      relatedBookingId: p.relatedBookingId || p.proposalId,
      source: p.source,
      customerName: p.customerName,
      email: p.customerEmail,
      phone: p.customerPhone || '',
      outingType: p.outingType,
      outingDate: p.outingDate,
      departureTime: p.departureTime || '',
      arrivalTime: p.arrivalTime || '',
      passengers: p.passengers || null,
      totalPrice: p.totalAmount,
      depositAmount: p.depositAmount,
      balanceAmount: p.balanceAmount,
      warrantyAmount: p.warrantyAmount || 500,
      depositStatus: p.depositStatus || (p.depositPaid ? 'paid' : 'pending'),
      depositPaid: p.depositPaid === true || p.depositStatus === 'paid',
      paymentStatus: '',
      warrantyStatus: p.warrantyStatus || 'not_selected',
      warrantyRegistered: p.warrantyRegistered === true,
      warrantyPaymentChoice: p.warrantyPaymentChoice || null,
      customerUid: p.customerUid || '',
      customerAuthProvider: p.customerAuthProvider || '',
      customerAccountCreated: p.customerAccountCreated === true,
      bookingStatus: (p.depositPaid === true || p.depositStatus === 'paid') && p.tncAccepted ? true : 'not_confirmed',
      proposalStatus: 'accepted',
      tncAccepted: p.tncAccepted,
      termsAccepted: p.tncAccepted,
      tncAcceptedAt: p.tncAcceptedAt,
      termsAcceptedAt: p.tncAcceptedAt,
      comments: p.comments || '',
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

        this.http.post<any>(endpoints[index++], payload, { withCredentials: true }).subscribe({
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


  private async readProposalWithPaymentState(id: string): Promise<AlegriaProposal | undefined> {
    const proposal = await this.readItem(this.proposalsCollection, id);
    if (!proposal) return undefined;

    if (proposal.status === 'accepted') {
      const existingBooking = await this.readItem(this.bookingsCollection, proposal.relatedBookingId || proposal.proposalId).catch(() => undefined);
      if (!existingBooking) {
        await this.createBookingFromProposal({ ...proposal, relatedBookingId: proposal.relatedBookingId || proposal.proposalId } as AlegriaProposal);
        await this.patchProposal(proposal.proposalId, { relatedBookingId: proposal.relatedBookingId || proposal.proposalId } as any).catch(() => undefined);
      }
    }

    const backendBooking = await this.readItem('backendbookings', id).catch(() => undefined);
    const depositPayment = backendBooking?.payments?.deposit || backendBooking?.payment || null;
    const warrantyPayment = backendBooking?.payments?.warranty || null;
    const warrantyCharge = backendBooking?.payments?.warrantyCharge || null;

    const depositPaid =
      proposal.depositPaid === true ||
      proposal.depositStatus === 'paid' ||
      proposal.paymentStatus === 'paid' ||
      backendBooking?.depositPaid === true ||
      backendBooking?.depositStatus === 'paid' ||
      backendBooking?.paymentStatus === 'paid' ||
      backendBooking?.paymentStatus === 'charge_succeeded' ||
      depositPayment?.depositPaid === true ||
      depositPayment?.paid === true ||
      depositPayment?.status === 'paid' ||
      depositPayment?.status === 'deposit_paid';

    return {
      ...proposal,
      relatedBookingId: proposal.relatedBookingId || proposal.proposalId,
      depositPaid,
      depositStatus: depositPaid ? 'paid' : (proposal.depositStatus || depositPayment?.status || 'pending'),
      paymentStatus: depositPaid ? 'paid' : (proposal.paymentStatus || backendBooking?.paymentStatus || depositPayment?.status || ''),
      stripeCheckoutSessionId: proposal.stripeCheckoutSessionId || backendBooking?.stripeCheckoutSessionId || depositPayment?.stripeCheckoutSessionId || depositPayment?.checkoutSessionId || '',
      stripePaymentIntentId: proposal.stripePaymentIntentId || backendBooking?.stripePaymentIntentId || depositPayment?.stripePaymentIntentId || depositPayment?.paymentIntentId || '',
      warrantyStatus: proposal.warrantyStatus || backendBooking?.warrantyStatus || warrantyPayment?.warrantyStatus || warrantyPayment?.status || 'not_selected',
      warrantyRegistered:
        proposal.warrantyRegistered === true ||
        backendBooking?.warrantyRegistered === true ||
        warrantyPayment?.warrantyRegistered === true ||
        warrantyPayment?.status === 'warranty_card_saved' ||
        warrantyPayment?.status === 'card_registered',
      warrantyPaymentMethodId:
        proposal.warrantyPaymentMethodId || backendBooking?.warrantyPaymentMethodId || warrantyPayment?.paymentMethodId || '',
      warrantySetupIntentId:
        proposal.warrantySetupIntentId || backendBooking?.warrantySetupIntentId || warrantyPayment?.setupIntentId || '',
      warrantyChargeAmount:
        proposal.warrantyChargeAmount || backendBooking?.warrantyChargedAmount || warrantyCharge?.warrantyChargeAmount || 0,
      warrantyChargeReason:
        proposal.warrantyChargeReason || backendBooking?.warrantyChargeReason || warrantyCharge?.warrantyChargeReason || '',
      warrantyChargeStatus:
        proposal.warrantyChargeStatus || backendBooking?.warrantyStatus || warrantyCharge?.status || '',
    };
  }

  private async readCollection(collection: string): Promise<AlegriaProposal[]> {
    const value = await this.http.get<any>(`${this.firebaseUrl}/${collection}.json`).toPromise();
    if (!value) return [];
    return Object.keys(value).map((key) => ({ ...value[key], proposalId: value[key]?.proposalId || key }));
  }

  private async readItem(collection: string, id: string): Promise<any> {
    const value = await this.http.get<any>(`${this.firebaseUrl}/${collection}/${id}.json`).toPromise();
    return value ? { ...value, proposalId: value.proposalId || id } : undefined;
  }


  private async deleteItem(collection: string, id: string): Promise<void> {
    await this.http.delete(`${this.firebaseUrl}/${collection}/${id}.json`).toPromise();
  }

  private async writeItem(collection: string, id: string, value: any): Promise<void> {
    await this.http.put(`${this.firebaseUrl}/${collection}/${id}.json`, value).toPromise();
  }
}
