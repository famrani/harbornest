
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProposalApiService, AlegriaProposal } from '../bookings/proposal-api.service';
import { SITE_CONTENT } from '../site-content';
import { SiteContentService } from '../site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-proposals',
  templateUrl: './admin-proposals.component.html',
  styleUrls: ['./admin-proposals.component.scss']
})
export class AdminProposalsComponent implements OnInit, OnDestroy {
  proposals: AlegriaProposal[] = [];
  loading = true;
  saving = false;
  searchTerm = '';
  message = '';
  error = '';
  form: Partial<AlegriaProposal> = this.emptyForm();
  currentLanguage: SiteLanguage = 'fr';
  pageText: any = (SITE_CONTENT as any).fr?.proposalManagement || {};
  priceTitles: any = {};
  private languageSub?: Subscription;

  constructor(
    private proposalApi: ProposalApiService,
    private router: Router,
    private siteContentService: SiteContentService,
    private languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadPageText(language);
    });
    this.loadPageText(this.currentLanguage);
    this.load();
  }

  ngOnDestroy(): void { this.languageSub?.unsubscribe(); }

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

  get filteredProposals(): AlegriaProposal[] {
    const term = this.normalize(this.searchTerm);
    if (!term) return this.activeProposals;
    return this.activeProposals.filter((p) =>
      this.normalize(p.customerName).includes(term) ||
      this.normalize(p.customerEmail).includes(term) ||
      this.normalize(p.outingType).includes(term)
    );
  }

  getProposalOutingTime(proposal: AlegriaProposal | Partial<AlegriaProposal>): number {
    const rawDate = String((proposal as any).outingDate || (proposal as any).date || '').trim();
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

  isOutingDateTodayOrPast(proposal: AlegriaProposal | Partial<AlegriaProposal>): boolean {
    const outingTime = this.getProposalOutingTime(proposal);
    if (!outingTime) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return outingTime <= today.getTime();
  }

  canRenewProposal(proposal: AlegriaProposal | Partial<AlegriaProposal>): boolean {
    return !!proposal?.proposalId && !this.isOutingDateTodayOrPast(proposal);
  }

  getRenewBlockedReason(proposal: AlegriaProposal | Partial<AlegriaProposal>): string {
    return this.isOutingDateTodayOrPast(proposal)
      ? this.t('cannotRenewPast')
      : '';
  }

  isExpired(proposal: AlegriaProposal | Partial<AlegriaProposal>): boolean {
    return !!proposal.validUntil && Date.now() > proposal.validUntil;
  }

  formatValidity(proposal: AlegriaProposal | Partial<AlegriaProposal>): string {
    if (!proposal.validUntil) return this.t('noValidityDate');
    const date = new Date(proposal.validUntil);
    return this.isExpired(proposal) ? `${this.t('expired')} ${date.toLocaleString()}` : `${this.t('validUntil')} ${date.toLocaleString()}`;
  }

  get proposalLink(): string {
    return this.form.proposalId ? `${window.location.origin}/proposal/${this.form.proposalId}` : '';
  }

  load(): void {
    this.loading = true;
    this.error = '';
    this.proposalApi.getProposals().subscribe({
      next: (proposals) => {
        this.proposals = (proposals || []).sort((a, b) => (b.createdTS || 0) - (a.createdTS || 0));
        this.loading = false;
      },
      error: () => { this.error = this.t('unableLoad'); this.loading = false; }
    });
  }

  get proposalRequests(): AlegriaProposal[] {
    return this.proposals.filter((proposal) => proposal.status === 'request' || (proposal as any).requestNeedsAdminProposal === true);
  }

  get filteredProposalRequests(): AlegriaProposal[] {
    const term = this.normalize(this.searchTerm);
    const requests = this.proposalRequests;
    if (!term) return requests;
    return requests.filter((request) =>
      this.normalize([
        request.proposalId,
        request.customerName,
        request.customerEmail,
        request.outingType,
        request.outingDate,
        request.startMarina,
        request.destination,
      ].join(' ')).includes(term)
    );
  }

  get activeProposals(): AlegriaProposal[] {
    return this.proposals.filter((proposal) => proposal.status !== 'request' && (proposal as any).requestNeedsAdminProposal !== true);
  }
  createBookingRequestAsAdmin(): void {
    this.router.navigate(['/reserver'], { queryParams: { adminRequest: '1' } });
  }

  editProposalRequest(request: AlegriaProposal): void {
    this.form = {
      ...request,
      status: 'draft',
      source: 'request' as any,
      proposalOrigin: (request as any).proposalOrigin || 'customer_request',
      requestNeedsAdminProposal: false,
      pricingToBeFinalizedByAdmin: false,
      proposalBoatPrice: (request as any).proposalBoatPrice ?? (request as any).estimatedBoatPrice ?? (request as any).estimatedBasePrice ?? request.totalAmount ?? 0,
      proposalSkipperPrice: (request as any).proposalSkipperPrice ?? (request as any).estimatedSkipperPrice ?? 0,
      proposalCleaningPrice: (request as any).proposalCleaningPrice ?? (request as any).estimatedCleaningPrice ?? 0,
      proposalExtraServicesPrice: (request as any).proposalExtraServicesPrice ?? (this.getRequestedOptionsTotal(request) + Number((request as any).estimatedExtraGuestsAmount || 0)),
      totalAmount:
        Number((request as any).proposalBoatPrice ?? (request as any).estimatedBoatPrice ?? (request as any).estimatedBasePrice ?? request.totalAmount ?? 0) +
        Number((request as any).proposalSkipperPrice ?? (request as any).estimatedSkipperPrice ?? 0) +
        Number((request as any).proposalCleaningPrice ?? (request as any).estimatedCleaningPrice ?? 0) +
        Number((request as any).proposalExtraServicesPrice ?? (this.getRequestedOptionsTotal(request) + Number((request as any).estimatedExtraGuestsAmount || 0))),
      proposalMessage: request.proposalMessage || this.t('proposalFromRequestDefaultMessage'),
    } as any;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getRequestedOptionsTotal(request: AlegriaProposal | Partial<AlegriaProposal>): number {
    const options = (request as any).selectedOptions || [];
    if (!Array.isArray(options)) return 0;
    return options.reduce((sum: number, option: any) => sum + Number(option.price || option.amount || 0), 0);
  }


  getEstimatedSkipperPrice(request: AlegriaProposal | Partial<AlegriaProposal>): number {
    return Number((request as any).estimatedSkipperPrice || (request as any).proposalSkipperPrice || 0);
  }

  getEstimatedCleaningPrice(request: AlegriaProposal | Partial<AlegriaProposal>): number {
    return Number((request as any).estimatedCleaningPrice || 0);
  }


  getEstimatedOptionsPrice(request: AlegriaProposal | Partial<AlegriaProposal>): number {
    return Number((request as any).estimatedOptionsPrice || this.getRequestedOptionsTotal(request));
  }

  getEstimatedProposalRequestPrice(request: AlegriaProposal): number {
    return Number((request as any).estimatedPrice || request.totalAmount || 0);
  }

  getProposalRequestOriginLabel(request: AlegriaProposal): string {
    return (request as any).createdByAdmin ? this.t('createdByAdmin') : this.t('createdByCustomer');
  }

  private isValidEmail(value: string | undefined | null): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(String(value || '').trim());
  }

  private isValidPhone(value: string | undefined | null): boolean {
    const raw = String(value || '').trim();
    if (!raw) return false;
    const digits = raw.replace(/[^\d]/g, '');
    return digits.length >= 8 && digits.length <= 15 && /^[+()\d\s.-]+$/.test(raw);
  }

  private isValidDate(value: string | undefined | null): boolean {
    if (!value) return false;
    const timestamp = Date.parse(String(value));
    return !Number.isNaN(timestamp);
  }

  private isPositiveNumber(value: any): boolean {
    return Number(value) > 0;
  }

  private isNonNegativeNumber(value: any): boolean {
    return Number(value) >= 0;
  }

  getProposalValidationErrors(): string[] {
    const errors: string[] = [];
    const form: any = this.form || {};

    if (!String(form.customerName || '').trim()) errors.push(this.t('validationCustomerNameRequired'));
    if (!String(form.customerEmail || '').trim()) errors.push(this.t('validationCustomerEmailRequired'));
    else if (!this.isValidEmail(form.customerEmail)) errors.push(this.t('validationCustomerEmailInvalid'));

    if (!String(form.customerPhone || '').trim()) errors.push(this.t('validationPhoneRequired'));
    else if (!this.isValidPhone(form.customerPhone)) errors.push(this.t('validationPhoneInvalid'));

    if (!String(form.outingType || '').trim()) errors.push(this.t('validationOutingTypeRequired'));

    if (!String(form.outingDate || '').trim()) errors.push(this.t('validationOutingDateRequired'));
    else if (!this.isValidDate(form.outingDate)) errors.push(this.t('validationOutingDateInvalid'));

    if (!String(form.departureTime || '').trim()) errors.push(this.t('validationDepartureTimeRequired'));
    if (!String(form.arrivalTime || '').trim()) errors.push(this.t('validationArrivalTimeRequired'));

    if (!this.isPositiveNumber(form.passengers)) errors.push(this.t('validationPassengersInvalid'));
    if (!this.isPositiveNumber(form.totalAmount)) errors.push(this.t('validationTotalAmountInvalid'));
    if (!this.isNonNegativeNumber(form.warrantyAmount)) errors.push(this.t('validationWarrantyAmountInvalid'));

    if (!String(form.proposalMessage || '').trim()) errors.push(this.t('validationProposalMessageRequired'));

    return errors;
  }

  get isProposalFormValid(): boolean {
    return this.getProposalValidationErrors().length === 0;
  }

  private validateProposalForm(): boolean {
    const errors = this.getProposalValidationErrors();
    if (errors.length) {
      this.error = errors.join(' ');
      return false;
    }
    return true;
  }



  applyFinalPricingToForm(): void {
    const form: any = this.form || {};
    const boatPrice = Number(form.proposalBoatPrice || 0);
    const skipperPrice = Number(form.proposalSkipperPrice || 0);
    const cleaningPrice = Number(form.proposalCleaningPrice || 0);
    const extraServicesPrice = Number(form.proposalExtraServicesPrice || 0);
    const finalTotal = boatPrice + skipperPrice + cleaningPrice + extraServicesPrice;

    if (finalTotal > 0) {
      const depositRate = Number(form.depositRate || 0.10);
      const depositAmount = Math.round(finalTotal * depositRate * 100) / 100;
      this.form = {
        ...this.form,
        totalAmount: Math.round(finalTotal * 100) / 100,
        depositRate,
        depositAmount,
        balanceAmount: Math.round((finalTotal - depositAmount) * 100) / 100,
      } as any;
    }
  }

  async saveProposal(): Promise<void> {
    this.error = ''; this.message = '';
    if (!this.validateProposalForm()) return;

    this.saving = true;
    try {
      this.applyFinalPricingToForm();
      const saved = await this.proposalApi.saveProposal(this.form);
      this.form = { ...saved };
      this.message = this.t('proposalSaved');
      this.load();
    } catch (e: any) { this.error = e?.message || this.t('unableSave'); }
    this.saving = false;
  }

  async markSent(): Promise<void> {
    this.error = '';
    if (!this.validateProposalForm()) return;
    if (!this.form.proposalId) return;
    if (!this.canRenewProposal(this.form)) {
      this.error = this.getRenewBlockedReason(this.form);
      return;
    }
    this.applyFinalPricingToForm();
    await this.proposalApi.markSent(this.form as AlegriaProposal);
    this.message = this.t('markedSent');
    this.load();
  }


  async renewProposal(proposal: AlegriaProposal | Partial<AlegriaProposal>, event?: Event): Promise<void> {
    event?.stopPropagation();
    if (!proposal.proposalId) return;

    this.error = '';
    this.message = '';

    if (!this.canRenewProposal(proposal)) {
      this.error = this.getRenewBlockedReason(proposal);
      return;
    }

    try {
      const renewed = await this.proposalApi.renewProposal(proposal.proposalId);
      this.message = this.t('renewed');
      if (this.form.proposalId === proposal.proposalId) {
        this.form = { ...renewed };
      }
      this.load();
    } catch (e: any) {
      this.error = e?.message || this.t('unableRenew');
    }
  }

  async deleteProposal(proposal: AlegriaProposal | Partial<AlegriaProposal>, event?: Event): Promise<void> {
    event?.stopPropagation();
    if (!proposal.proposalId) return;

    const customer = proposal.customerName || proposal.customerEmail || proposal.proposalId;
    const confirmed = window.confirm(`${this.t('deleteConfirmPrefix')} ${customer}? ${this.t('deleteConfirmSuffix')}`);
    if (!confirmed) return;

    this.error = '';
    this.message = '';

    try {
      await this.proposalApi.deleteProposal(proposal.proposalId);
      this.message = this.t('deleted');
      if (this.form.proposalId === proposal.proposalId) {
        this.reset();
      }
      this.load();
    } catch (e: any) {
      this.error = e?.message || this.t('unableDelete');
    }
  }

  edit(p: AlegriaProposal): void { this.form = { ...p }; window.scrollTo({ top: 0, behavior: 'smooth' }); }
  openClientLink(p: AlegriaProposal): void { window.open(`/proposal/${p.proposalId}`, '_blank'); }
  copyLink(): void { if (this.proposalLink) navigator.clipboard?.writeText(this.proposalLink); this.message = this.t('linkCopied'); }

  sendCurrentProposalByEmail(): void {
    this.error = '';
    if (!this.validateProposalForm()) return;
    if (!this.form.proposalId) return;
    this.sendProposalByEmail(this.form as AlegriaProposal);
  }

  sendProposalByEmail(proposal: AlegriaProposal): void {
    const link = `${window.location.origin}/proposal/${proposal.proposalId}`;
    const subject = `Alegria Boat proposal - ${proposal.outingType || 'Your outing'}`;
    const body = [
      `Hello ${proposal.customerName || ''},`,
      '',
      'Thank you for your request.',
      '',
      'Please find below your Alegria Boat proposal:',
      '',
      `Outing: ${proposal.outingType || ''}`,
      `Date: ${proposal.outingDate || ''}`,
      `Time: ${proposal.departureTime || ''} - ${proposal.arrivalTime || ''}`,
      `Total price: €${proposal.totalAmount || 0}`,
      `10% booking deposit: €${proposal.depositAmount || 0}`,
      `Remaining balance to pay onboard: €${proposal.balanceAmount || 0}`,
      `Security deposit: €${proposal.warrantyAmount || 500}`,
      '',
      'To accept the proposal, sign the Terms & Conditions, choose your warranty method, and pay the 10% deposit, please use this secure link:',
      link,
      '',
      'This proposal is valid for one full day.',
      '',
      'Best regards,',
      'Alegria Boat'
    ].join('\n');

    const mailto = `mailto:${encodeURIComponent(proposal.customerEmail || '')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }


  getProposalOriginLabel(proposal: AlegriaProposal | Partial<AlegriaProposal>): string {
    const origin = String((proposal as any).proposalOrigin || proposal.source || '').toLowerCase();
    if (origin === 'customer_request' || proposal.source === 'request') return this.t('fromCustomerRequest');
    if (origin === 'email_request') return this.t('fromEmailRequest');
    return this.t('fromAdminDirect');
  }

  isAcceptedProposal(proposal: AlegriaProposal | Partial<AlegriaProposal>): boolean {
    return String(proposal?.status || '').toLowerCase() === 'accepted';
  }

  createSimilarProposal(proposal: AlegriaProposal | Partial<AlegriaProposal>, event?: Event): void {
    event?.stopPropagation();

    const now = Date.now();
    this.form = {
      customerName: proposal.customerName || '',
      customerEmail: proposal.customerEmail || '',
      customerPhone: proposal.customerPhone || '',
      outingType: proposal.outingType || '',
      outingDate: proposal.outingDate || '',
      departureTime: proposal.departureTime || '',
      arrivalTime: proposal.arrivalTime || '',
      passengers: proposal.passengers || 1,
      totalAmount: proposal.totalAmount || 0,
      depositAmount: proposal.depositAmount || Math.round(Number(proposal.totalAmount || 0) * 0.1 * 100) / 100,
      balanceAmount: proposal.balanceAmount || Math.round(Number(proposal.totalAmount || 0) * 0.9 * 100) / 100,
      warrantyAmount: proposal.warrantyAmount || 500,
      proposalMessage: proposal.proposalMessage || '',
      comments: proposal.comments || '',
      status: 'draft',
      source: proposal.source || 'direct',
      validUntil: now + 24 * 60 * 60 * 1000,
      createdTS: now,
      modifiedTS: now,
    };
    this.message = this.t('similarCopied');
    this.error = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  hasRelatedBooking(proposal: AlegriaProposal | Partial<AlegriaProposal>): boolean {
    return proposal?.status === 'accepted' ||
      !!(proposal as any)?.relatedBookingId ||
      proposal?.depositPaid === true ||
      proposal?.depositStatus === 'paid';
  }

  openRelatedBooking(proposal: AlegriaProposal | Partial<AlegriaProposal>, event?: Event): void {
    event?.stopPropagation();
    const bookingId = (proposal as any)?.relatedBookingId || proposal?.proposalId;
    if (!bookingId) return;
    this.router.navigate(['/admin/bookings', bookingId]);
  }

  reset(): void { this.form = this.emptyForm(); this.message = ''; this.error = ''; }

  private emptyForm(): Partial<AlegriaProposal> {
    return {
      source: 'direct',
      status: 'draft',
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      outingType: 'Journée en mer',
      outingDate: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
      departureTime: '10:00',
      arrivalTime: '18:00',
      passengers: 2,
      totalAmount: 1000,
      warrantyAmount: 500,
      proposalMessage: '',
      comments: '',
    };
  }

  private normalize(value: any): string {
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }
}
