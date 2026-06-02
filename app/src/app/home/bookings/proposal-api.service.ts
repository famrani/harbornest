
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilsService } from 'godigital-lib';

export type WarrantyPaymentChoice = 'stripe_card' | 'cash_on_board';
export type ProposalStatus = 'draft' | 'sent' | 'accepted' | 'expired' | 'cancelled';
export type BookingSource = 'direct' | 'samboat' | 'clickandboat' | 'other';

export interface AlegriaProposal {
  proposalId: string;
  source: BookingSource;
  status: ProposalStatus;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  outingType: string;
  outingDate: string;
  departureTime?: string;
  arrivalTime?: string;
  passengers?: number;
  totalAmount: number;
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

  async saveProposal(input: Partial<AlegriaProposal>): Promise<AlegriaProposal> {
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
      passengers: Number(input.passengers || 0) || undefined,
      totalAmount,
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
      raw: input.raw || input,
    };
    await this.writeItem(this.proposalsCollection, proposalId, proposal);
    return proposal;
  }

  async markSent(proposal: AlegriaProposal): Promise<void> {
    await this.patchProposal(proposal.proposalId, {
      status: 'sent',
      validUntil: Date.now() + 24 * 60 * 60 * 1000,
    });
  }

  async acceptProposal(proposalId: string, warrantyPaymentChoice: WarrantyPaymentChoice): Promise<AlegriaProposal> {
    const current = await this.readItem(this.proposalsCollection, proposalId);
    if (!current) throw new Error('Proposal not found');
    if (current.validUntil && Date.now() > current.validUntil) {
      await this.patchProposal(proposalId, { status: 'expired' });
      throw new Error('Proposal expired');
    }
    const accepted = {
      ...current,
      status: 'accepted' as ProposalStatus,
      warrantyPaymentChoice,
      warrantyStatus: warrantyPaymentChoice === 'cash_on_board' ? 'cash_selected' : 'not_selected',
      tncAccepted: true,
      tncAcceptedAt: Date.now(),
      acceptedTS: Date.now(),
      modifiedTS: Date.now(),
    };
    await this.writeItem(this.proposalsCollection, proposalId, accepted);
    await this.createBookingFromProposal(accepted);
    return accepted;
  }


  async renewProposal(proposalId: string): Promise<AlegriaProposal> {
    const current = await this.readItem(this.proposalsCollection, proposalId);
    if (!current) throw new Error('Proposal not found');

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
    });
    await this.createBookingFromProposal(saved);
    return saved;
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
      bookingId: p.proposalId,
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
      depositStatus: p.depositStatus || 'pending',
      warrantyStatus: p.warrantyStatus || 'not_selected',
      warrantyPaymentChoice: p.warrantyPaymentChoice || null,
      bookingStatus: 'confirmed',
      tncAccepted: p.tncAccepted,
      tncAcceptedAt: p.tncAcceptedAt,
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
