import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from 'godigital-lib';
import { ProposalApiService, AlegriaProposal } from '../bookings/proposal-api.service';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';
import { SITE_CONTENT } from '../site-content';
import { SiteContentService } from '../site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';

type ProposalTab = 'requests' | 'pending' | 'accepted' | 'declined' | 'expired';

@Component({
  selector: 'app-my-proposals',
  templateUrl: './my-proposals.component.html',
  styleUrls: ['./my-proposals.component.scss']
})
export class MyProposalsComponent implements OnInit, OnDestroy {
  proposals: AlegriaProposal[] = [];
  requests: AlegriaBooking[] = [];
  loading = true;
  error = '';
  loggedUser: any = null;
  activeTab: ProposalTab = 'requests';
  searchTerm = '';
  private userSub?: Subscription;
  private languageSub?: Subscription;
  currentLanguage: SiteLanguage = 'fr';
  pageText: any = (SITE_CONTENT as any).fr?.proposalManagement || {};
  priceTitles: any = {};

  constructor(
    private proposalApi: ProposalApiService,
    private bookingApi: BookingApiService,
    private mainSvc: ServicesService,
    private router: Router,
    private siteContentService: SiteContentService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadPageText(language);
    });
    this.loadPageText(this.currentLanguage);

    const svc = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || svc.bnUser || svc.currentUser || null;
        this.loadProposals();
      });
    } else {
      this.loggedUser = svc.bnUser || svc.currentUser || null;
      this.loadProposals();
    }
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
    this.languageSub?.unsubscribe();
  }

  async loadPageText(language: SiteLanguage): Promise<void> {
    const fallback = (SITE_CONTENT as any)[language]?.proposalManagement || (SITE_CONTENT as any).fr?.proposalManagement || {};
    try {
      const content: any = await this.siteContentService.getContent();
      this.pageText = { ...fallback, ...(content?.[language]?.proposalManagement || {}), ...(content?.proposalManagement?.[language] || {}) };
      const languageContent = content?.[language] || {};
      this.priceTitles = {
        ...this.defaultPriceTitles(language),
        // Firebase source of truth: /siteContent/{fr|en|es}/proposalPriceTitles
        ...(languageContent.proposalPriceTitles || {}),
        // Backward-compatible fallbacks for older exports.
        ...(languageContent.priceTitles || {}),
        ...(languageContent.proposalManagement?.priceTitles || {}),
        ...(content?.proposalPriceTitles?.[language] || {}),
        ...(content?.priceTitles?.[language] || {}),
        ...(content?.proposalManagement?.priceTitles?.[language] || {}),
        ...(content?.proposalManagement?.[language]?.priceTitles || {})
      };
    } catch {
      this.pageText = fallback;
      this.priceTitles = this.defaultPriceTitles(language);
    }
  }

  private defaultPriceTitles(language: SiteLanguage): any {
    const defaults: any = {
      fr: { boatPrice: 'Prix bateau', skipperPrice: 'Prix skipper', cleaningPrice: 'Prix carburant', extraServicesPrice: 'Extras / services', totalAmount: 'Montant total', totalPrice: 'Prix total', deposit10: 'Acompte 10 %', deposit: 'Acompte 10 %', remaining90: 'Solde 90 %', remaining: 'Solde 90 %', warrantyAmount: 'Caution', warranty: 'Caution' },
      en: { boatPrice: 'Boat price', skipperPrice: 'Skipper price', cleaningPrice: 'Fuel price', extraServicesPrice: 'Extras / services', totalAmount: 'Total amount', totalPrice: 'Total price', deposit10: 'Deposit 10%', deposit: 'Deposit 10%', remaining90: 'Balance 90%', remaining: 'Balance 90%', warrantyAmount: 'Warranty', warranty: 'Warranty' },
      es: { boatPrice: 'Precio barco', skipperPrice: 'Precio skipper', cleaningPrice: 'Precio combustible', extraServicesPrice: 'Extras / servicios', totalAmount: 'Importe total', totalPrice: 'Precio total', deposit10: 'Depósito 10%', deposit: 'Depósito 10%', remaining90: 'Saldo 90%', remaining: 'Saldo 90%', warrantyAmount: 'Garantía', warranty: 'Garantía' }
    };
    return defaults[language] || defaults.fr;
  }

  priceTitle(key: string): string {
    return this.priceTitles?.[key] || this.t(key) || key;
  }

  t(key: string): string { return this.pageText?.[key] || key; }

  loadProposals(): void {
    const email = String(this.loggedUser?.email || '').trim().toLowerCase();
    if (!email) {
      this.proposals = [];
      this.requests = [];
      this.loading = false;
      return;
    }

    this.loading = true;
    this.error = '';

    this.proposalApi.getProposals().subscribe({
      next: (items) => {
        this.proposals = (items || [])
          .filter((proposal) => String(proposal.customerEmail || '').trim().toLowerCase() === email)
          .sort((a, b) => (b.modifiedTS || b.createdTS || 0) - (a.modifiedTS || a.createdTS || 0));

        this.bookingApi.getBookings(email).subscribe({
          next: (bookings) => {
            this.requests = (bookings || [])
              .filter((booking) => this.bookingApi.isRequestBooking(booking))
              .sort((a: any, b: any) => (b.modifiedTS || b.requestSubmittedAt || b.createdTS || 0) - (a.modifiedTS || a.requestSubmittedAt || a.createdTS || 0));
            this.loading = false;
          },
          error: () => {
            this.requests = [];
            this.loading = false;
          }
        });
      },
      error: () => {
        this.error = this.t('unableLoadMy');
        this.proposals = [];
        this.requests = [];
        this.loading = false;
      }
    });
  }


  get proposalRequests(): AlegriaProposal[] {
    return this.proposals.filter((proposal: any) => proposal.status === 'request' || proposal.requestNeedsAdminProposal === true);
  }

  get filteredRequests(): AlegriaBooking[] {
    const term = this.normalize(this.searchTerm);
    return this.requests.filter((request) => {
      if (this.activeTab !== 'requests') return false;
      if (!term) return true;
      const haystack = [
        request.bookingId,
        request.outingType,
        request.outingDate,
        request.customerName,
        request.email,
        request.startMarina,
        request.destination,
      ].join(' ');
      return this.normalize(haystack).includes(term);
    });
  }


  get filteredProposalRequests(): AlegriaProposal[] {
    const term = this.normalize(this.searchTerm);
    return this.proposalRequests.filter((proposal: any) => {
      if (this.activeTab !== 'requests') return false;
      if (!term) return true;
      const haystack = [
        proposal.proposalId,
        proposal.outingType,
        proposal.outingDate,
        proposal.customerName,
        proposal.customerEmail,
        proposal.startMarina,
        proposal.destination,
      ].join(' ');
      return this.normalize(haystack).includes(term);
    });
  }

  get filteredProposals(): AlegriaProposal[] {
    const term = this.normalize(this.searchTerm);
    return this.proposals.filter((proposal) => {
      if (this.getProposalTab(proposal) !== this.activeTab) return false;

      if (!term) return true;
      const haystack = [
        proposal.proposalId,
        proposal.outingType,
        proposal.outingDate,
        proposal.customerName,
        proposal.customerEmail,
        proposal.status,
        this.getStatusLabel(proposal),
      ].map((value) => this.normalize(value)).join(' ');

      return haystack.includes(term);
    });
  }


  get requestsCount(): number { return this.requests.length + this.proposalRequests.length; }

  get pendingCount(): number {
    return this.proposals.filter((proposal) => this.getProposalTab(proposal) === 'pending').length;
  }

  get acceptedCount(): number {
    return this.proposals.filter((proposal) => this.getProposalTab(proposal) === 'accepted').length;
  }

  get declinedCount(): number {
    return this.proposals.filter((proposal) => this.getProposalTab(proposal) === 'declined').length;
  }

  get expiredCount(): number {
    return this.proposals.filter((proposal) => this.getProposalTab(proposal) === 'expired').length;
  }

  setTab(tab: ProposalTab): void {
    this.activeTab = tab;
  }


  openRequest(request: AlegriaBooking): void {
    this.router.navigate(['/bookings', request.bookingId]);
  }

  getRequestStatusLabel(request: AlegriaBooking): string {
    return this.t('requestSubmittedStatus');
  }



  getEstimatedOptionsPrice(proposal: AlegriaProposal | Partial<AlegriaProposal>): number {
    const fromField = Number((proposal as any).estimatedOptionsPrice || (proposal as any).proposalExtraServicesPrice || 0);
    if (fromField) return fromField;
    const options = (proposal as any).selectedOptions || [];
    if (!Array.isArray(options)) return 0;
    return options.reduce((sum: number, option: any) => sum + Number(option.price || option.amount || 0), 0);
  }

  getEstimatedSkipperPrice(proposal: AlegriaProposal | Partial<AlegriaProposal>): number {
    return Number((proposal as any).estimatedSkipperPrice || (proposal as any).proposalSkipperPrice || 0);
  }

  getEstimatedCleaningPrice(proposal: AlegriaProposal | Partial<AlegriaProposal>): number {
    return Number((proposal as any).estimatedCleaningPrice || 0);
  }

  getProposalOriginLabel(proposal: AlegriaProposal): string {
    const origin = String((proposal as any).proposalOrigin || proposal.source || '').toLowerCase();
    if (origin === 'customer_request' || proposal.source === 'request') return this.t('fromCustomerRequest');
    if (origin === 'email_request') return this.t('fromEmailRequest');
    return this.t('fromAdminDirect');
  }


  openProposal(proposal: AlegriaProposal): void {
    this.router.navigate(['/proposal', proposal.proposalId]);
  }

  openRelatedBooking(proposal: AlegriaProposal, event?: Event): void {
    event?.stopPropagation();
    this.router.navigate(['/bookings', proposal.relatedBookingId || proposal.proposalId]);
  }

  getProposalTab(proposal: AlegriaProposal): ProposalTab {
    const status = String(proposal.status || '').toLowerCase();

    if (status === 'accepted') return 'accepted';
    if (status === 'cancelled' || status === 'declined' || status === 'rejected') return 'declined';
    if (status === 'expired' || this.isExpired(proposal)) return 'expired';
    return 'pending';
  }

  isExpired(proposal: AlegriaProposal): boolean {
    return !!proposal.validUntil && Date.now() > proposal.validUntil && proposal.status !== 'accepted';
  }

  getStatusLabel(proposal: AlegriaProposal): string {
    const tab = this.getProposalTab(proposal);
    if (tab === 'accepted') return this.t('statusAccepted');
    if (tab === 'declined') return this.t('statusDeclined');
    if (tab === 'expired') return this.t('statusExpired');
    return this.t('statusPending');
  }

  getStatusClass(proposal: AlegriaProposal): string {
    return `status-${this.getProposalTab(proposal)}`;
  }

  getValidityLabel(proposal: AlegriaProposal): string {
    if (!proposal.validUntil) return this.t('noValidityDate');
    const date = new Date(proposal.validUntil);
    if (Number.isNaN(date.getTime())) return this.t('noValidityDate');
    return this.isExpired(proposal) ? `${this.t('expiredOn')} ${date.toLocaleDateString()}` : `${this.t('validUntil')} ${date.toLocaleDateString()}`;
  }

  getDepositAmount(proposal: AlegriaProposal): number {
    return Number(proposal.depositAmount || Math.round(Number(proposal.totalAmount || 0) * 0.1 * 100) / 100);
  }

  getBalanceAmount(proposal: AlegriaProposal): number {
    return Number(proposal.balanceAmount || Math.max(0, Math.round((Number(proposal.totalAmount || 0) - this.getDepositAmount(proposal)) * 100) / 100));
  }

  hasRelatedBooking(proposal: AlegriaProposal): boolean {
    return proposal.status === 'accepted' || !!proposal.relatedBookingId || proposal.depositPaid === true || proposal.depositStatus === 'paid';
  }

  private normalize(value: any): string {
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }
}
