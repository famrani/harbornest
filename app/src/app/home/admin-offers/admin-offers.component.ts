
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferApiService, AlegriaOffer } from '../bookings/offer-api.service';
import { SITE_CONTENT } from '../site-content';
import { SiteContentService } from '../site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-offers',
  templateUrl: './admin-offers.component.html',
  styleUrls: ['./admin-offers.component.scss']
})
export class AdminOffersComponent implements OnInit, OnDestroy {
  offers: AlegriaOffer[] = [];
  loading = true;
  saving = false;
  searchTerm = '';
  message = '';
  error = '';
  form: Partial<AlegriaOffer> = this.emptyForm();
  whatsappDialog: { offer: Partial<AlegriaOffer>; text: string; url: string; phone: string } | null = null;
  currentLanguage: SiteLanguage = 'fr';
  pageText: any = (SITE_CONTENT as any).fr?.offerManagement || {};
  priceTitles: any = {};
  private languageSub?: Subscription;

  constructor(
    private offerApi: OfferApiService,
    private router: Router,
    private route: ActivatedRoute,
    private siteContentService: SiteContentService,
    private languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.prefillFromCalendar();
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadPageText(language);
    });
    this.loadPageText(this.currentLanguage);
    this.load();
  }

  private prefillFromCalendar(): void {
    const date = String(this.route.snapshot.queryParamMap.get('date') || '').trim();
    const create = this.route.snapshot.queryParamMap.get('create');
    if (create !== '1' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return;
    this.form = {
      ...this.emptyForm(),
      outingDate: date,
      source: 'direct',
      status: 'draft',
    };
  }

  ngOnDestroy(): void { this.languageSub?.unsubscribe(); }

  async loadPageText(language: SiteLanguage): Promise<void> {
    const fallback = (SITE_CONTENT as any)[language]?.offerManagement || (SITE_CONTENT as any).fr?.offerManagement || {};
    try {
      const content: any = await this.siteContentService.getContent();
      this.pageText = { ...fallback, ...(content?.[language]?.offerManagement || {}), ...(content?.offerManagement?.[language] || {}) };
      const languageContent = content?.[language] || {};
      this.priceTitles = {
        ...this.defaultPriceTitles(language),
        // Firebase source of truth: /siteContent/{fr|en|es}/offerPriceTitles
        ...(languageContent.offerPriceTitles || {}),
        // Backward-compatible fallbacks for older exports.
        ...(languageContent.priceTitles || {}),
        ...(languageContent.offerManagement?.priceTitles || {}),
        ...(content?.offerPriceTitles?.[language] || {}),
        ...(content?.priceTitles?.[language] || {}),
        ...(content?.offerManagement?.priceTitles?.[language] || {}),
        ...(content?.offerManagement?.[language]?.priceTitles || {})
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

  get filteredOffers(): AlegriaOffer[] {
    const term = this.normalize(this.searchTerm);
    if (!term) return this.activeOffers;
    return this.activeOffers.filter((p) =>
      this.normalize(p.customerName).includes(term) ||
      this.normalize(p.customerEmail).includes(term) ||
      this.normalize(p.outingType).includes(term)
    );
  }

  getOfferOutingTime(offer: AlegriaOffer | Partial<AlegriaOffer>): number {
    const rawDate = String((offer as any).outingDate || (offer as any).date || '').trim();
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

  isOutingDateTodayOrPast(offer: AlegriaOffer | Partial<AlegriaOffer>): boolean {
    const outingTime = this.getOfferOutingTime(offer);
    if (!outingTime) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return outingTime <= today.getTime();
  }

  canRenewOffer(offer: AlegriaOffer | Partial<AlegriaOffer>): boolean {
    return !!offer?.offerId && !this.isOutingDateTodayOrPast(offer);
  }

  getRenewBlockedReason(offer: AlegriaOffer | Partial<AlegriaOffer>): string {
    return this.isOutingDateTodayOrPast(offer)
      ? this.t('cannotRenewPast')
      : '';
  }

  isExpired(offer: AlegriaOffer | Partial<AlegriaOffer>): boolean {
    return !!offer.validUntil && Date.now() > offer.validUntil;
  }

  formatValidity(offer: AlegriaOffer | Partial<AlegriaOffer>): string {
    if (!offer.validUntil) return this.t('noValidityDate');
    const date = new Date(offer.validUntil);
    return this.isExpired(offer) ? `${this.t('expired')} ${date.toLocaleString()}` : `${this.t('validUntil')} ${date.toLocaleString()}`;
  }

  get offerLink(): string {
    return this.form.offerId ? `${window.location.origin}/offer/${this.form.offerId}` : '';
  }

  load(): void {
    this.loading = true;
    this.error = '';
    this.offerApi.getOffers().subscribe({
      next: (offers) => {
        this.offers = (offers || []).sort((a, b) => (b.createdTS || 0) - (a.createdTS || 0));
        this.loading = false;
      },
      error: () => { this.error = this.t('unableLoad'); this.loading = false; }
    });
  }

  get offerRequests(): AlegriaOffer[] {
    return this.offers.filter((offer) => offer.status === 'request' || (offer as any).requestNeedsAdminOffer === true);
  }

  get filteredOfferRequests(): AlegriaOffer[] {
    const term = this.normalize(this.searchTerm);
    const requests = this.offerRequests;
    if (!term) return requests;
    return requests.filter((request) =>
      this.normalize([
        request.offerId,
        request.customerName,
        request.customerEmail,
        request.outingType,
        request.outingDate,
        request.startMarina,
        request.destination,
      ].join(' ')).includes(term)
    );
  }

  get activeOffers(): AlegriaOffer[] {
    return this.offers.filter((offer) => offer.status !== 'request' && (offer as any).requestNeedsAdminOffer !== true);
  }
  createBookingRequestAsAdmin(): void {
    this.router.navigate(['/reserver'], { queryParams: { adminRequest: '1' } });
  }

  editOfferRequest(request: AlegriaOffer): void {
    this.form = {
      ...request,
      status: 'draft',
      source: 'request' as any,
      offerOrigin: (request as any).offerOrigin || 'customer_request',
      requestNeedsAdminOffer: false,
      pricingToBeFinalizedByAdmin: false,
      proposalBoatPrice: (request as any).proposalBoatPrice ?? (request as any).estimatedBoatPrice ?? (request as any).estimatedBasePrice ?? request.totalAmount ?? 0,
      proposalSkipperPrice: (request as any).proposalSkipperPrice ?? (request as any).estimatedSkipperPrice ?? 0,
      proposalFuelPrice: (request as any).proposalFuelPrice ?? (request as any).fuelPrice ?? (request as any).fuelAmount ?? (request as any).offerCleaningPrice ?? (request as any).estimatedCleaningPrice ?? 0,
      proposalExtraServicesPrice: (request as any).proposalExtraServicesPrice ?? (this.getRequestedOptionsTotal(request) + Number((request as any).estimatedExtraGuestsAmount || 0)),
      totalAmount:
        Number((request as any).proposalBoatPrice ?? (request as any).estimatedBoatPrice ?? (request as any).estimatedBasePrice ?? request.totalAmount ?? 0) +
        Number((request as any).proposalSkipperPrice ?? (request as any).estimatedSkipperPrice ?? 0) +
        Number((request as any).proposalFuelPrice ?? (request as any).fuelPrice ?? (request as any).fuelAmount ?? (request as any).offerCleaningPrice ?? (request as any).estimatedCleaningPrice ?? 0) +
        Number((request as any).proposalExtraServicesPrice ?? (this.getRequestedOptionsTotal(request) + Number((request as any).estimatedExtraGuestsAmount || 0))),
      offerMessage: request.offerMessage || this.t('offerFromRequestDefaultMessage'),
    } as any;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getRequestedOptionsTotal(request: AlegriaOffer | Partial<AlegriaOffer>): number {
    const options = (request as any).selectedOptions || [];
    if (!Array.isArray(options)) return 0;
    return options.reduce((sum: number, option: any) => sum + Number(option.price || option.amount || 0), 0);
  }


  getEstimatedSkipperPrice(request: AlegriaOffer | Partial<AlegriaOffer>): number {
    return Number((request as any).estimatedSkipperPrice || (request as any).proposalSkipperPrice || 0);
  }

  getEstimatedCleaningPrice(request: AlegriaOffer | Partial<AlegriaOffer>): number {
    return Number((request as any).estimatedCleaningPrice || 0);
  }


  getEstimatedOptionsPrice(request: AlegriaOffer | Partial<AlegriaOffer>): number {
    return Number((request as any).estimatedOptionsPrice || this.getRequestedOptionsTotal(request));
  }

  getEstimatedOfferRequestPrice(request: AlegriaOffer): number {
    return Number((request as any).estimatedPrice || request.totalAmount || 0);
  }

  getOfferRequestOriginLabel(request: AlegriaOffer): string {
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

  getOfferValidationErrors(): string[] {
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
    if (!this.isNonNegativeNumber(form.warrantyAmount)) errors.push(this.t('validationWarrantyAmountInvalid'));

    if (!String(form.offerMessage || '').trim()) errors.push(this.t('validationOfferMessageRequired'));

    return errors;
  }

  get isOfferFormValid(): boolean {
    return this.getOfferValidationErrors().length === 0;
  }

  private validateOfferForm(): boolean {
    const errors = this.getOfferValidationErrors();
    if (errors.length) {
      this.error = errors.join(' ');
      return false;
    }
    return true;
  }



  applyFinalPricingToForm(): void {
    const form: any = this.form || {};
    const boatPrice = Number(form.proposalBoatPrice ?? 0);
    const skipperPrice = Number(form.proposalSkipperPrice ?? 0);
    const fuelPrice = Number(form.proposalFuelPrice ?? form.fuelPrice ?? form.fuelAmount ?? form.offerCleaningPrice ?? 0);
    const extraServicesPrice = Number(form.proposalExtraServicesPrice ?? 0);
    const finalTotal = boatPrice + skipperPrice + fuelPrice + extraServicesPrice;
    const onlinePayableAmount = Math.max(0, Math.round((finalTotal - skipperPrice) * 100) / 100);
    const depositRate = Number(form.depositRate ?? 0.10);
    const depositAmount = Math.round(onlinePayableAmount * depositRate * 100) / 100;

    // Zero is a valid quoted price (for example, a complimentary outing).
    // Always replace previously persisted/default financial values, including
    // when the newly calculated total is exactly zero.
    this.form = {
      ...this.form,
      totalAmount: Math.round(finalTotal * 100) / 100,
      skipperCashAmount: skipperPrice,
      proposalFuelPrice: fuelPrice,
      fuelPrice: fuelPrice,
      fuelAmount: fuelPrice,
      onlinePayableAmount,
      appPayableAmount: onlinePayableAmount,
      depositRate,
      depositAmount,
      balanceAmount: Math.round((onlinePayableAmount - depositAmount) * 100) / 100,
    } as any;
  }

  async saveOffer(): Promise<void> {
    this.error = ''; this.message = '';
    if (!this.validateOfferForm()) return;

    this.saving = true;
    try {
      this.applyFinalPricingToForm();
      const saved = await this.offerApi.saveOffer(this.form);
      await this.offerApi.markSent(saved);
      this.form = { ...saved, status: 'sent' } as any;
      this.prepareWhatsappDialog(this.form);
      this.message = this.t('offerSavedAndSent') !== 'offerSavedAndSent' ? this.t('offerSavedAndSent') : `${this.t('offerSaved')} Email et WhatsApp préparés/envoyés au client.`;
      this.load();
    } catch (e: any) { this.error = e?.message || this.t('unableSave'); }
    this.saving = false;
  }

  async markSent(): Promise<void> {
    this.error = '';
    if (!this.validateOfferForm()) return;
    if (!this.form.offerId) return;
    if (!this.canRenewOffer(this.form)) {
      this.error = this.getRenewBlockedReason(this.form);
      return;
    }
    this.applyFinalPricingToForm();
    await this.offerApi.markSent(this.form as AlegriaOffer);
    this.prepareWhatsappDialog(this.form);
    this.message = this.t('markedSent');
    this.load();
  }


  async renewOffer(offer: AlegriaOffer | Partial<AlegriaOffer>, event?: Event): Promise<void> {
    event?.stopPropagation();
    if (!offer.offerId) return;

    this.error = '';
    this.message = '';

    if (!this.canRenewOffer(offer)) {
      this.error = this.getRenewBlockedReason(offer);
      return;
    }

    try {
      const renewed = await this.offerApi.renewOffer(offer.offerId);
      this.message = this.t('renewed');
      if (this.form.offerId === offer.offerId) {
        this.form = { ...renewed };
      }
      this.load();
    } catch (e: any) {
      this.error = e?.message || this.t('unableRenew');
    }
  }

  async deleteOffer(offer: AlegriaOffer | Partial<AlegriaOffer>, event?: Event): Promise<void> {
    event?.stopPropagation();
    if (!offer.offerId) return;

    const customer = offer.customerName || offer.customerEmail || offer.offerId;
    const confirmed = window.confirm(`${this.t('deleteConfirmPrefix')} ${customer}? ${this.t('deleteConfirmSuffix')}`);
    if (!confirmed) return;

    this.error = '';
    this.message = '';

    try {
      await this.offerApi.deleteOffer(offer.offerId);
      this.message = this.t('deleted');
      if (this.form.offerId === offer.offerId) {
        this.reset();
      }
      this.load();
    } catch (e: any) {
      this.error = e?.message || this.t('unableDelete');
    }
  }

  edit(p: AlegriaOffer): void { this.form = { ...p }; window.scrollTo({ top: 0, behavior: 'smooth' }); }
  openClientLink(p: AlegriaOffer): void { window.open(`/offer/${p.offerId}`, '_blank'); }
  copyLink(): void { if (this.offerLink) navigator.clipboard?.writeText(this.offerLink); this.message = this.t('linkCopied'); }

  sendCurrentOfferByEmail(): void {
    this.error = '';
    if (!this.validateOfferForm()) return;
    if (!this.form.offerId) return;
    this.applyFinalPricingToForm();
    this.sendOfferByEmail(this.form as AlegriaOffer);
  }

  sendOfferByEmail(offer: AlegriaOffer): void {
    const link = `${window.location.origin}/offer/${offer.offerId}`;
    const subject = `Alegria Boat offer - ${offer.outingType || 'Your outing'}`;
    const f = this.offerFinancials(offer);
    const body = [
      `Hello ${offer.customerName || ''},`,
      '',
      'Your Alegria Boat offer is ready.',
      '',
      'Financial summary',
      `Boat outing: ${this.money(f.boatPrice)}`,
      f.fuelPrice ? `Fuel: ${this.money(f.fuelPrice)}` : '',
      f.extraServicesPrice ? `Extras / services: ${this.money(f.extraServicesPrice)}` : '',
      f.skipperCashAmount ? `Skipper, paid directly: ${this.money(f.skipperCashAmount)}` : '',
      `Total customer cost: ${this.money(f.totalAmount)}`,
      '',
      'To pay to Alegria',
      `Alegria amount: ${this.money(f.onlinePayableAmount)}`,
      `10% deposit: ${this.money(f.depositAmount)}`,
      `Alegria balance: ${this.money(f.balanceAmount)}`,
      '',
      f.skipperCashAmount ? `To pay to skipper: ${this.money(f.skipperCashAmount)}` : '',
      `Warranty: ${this.money(f.warrantyAmount)}`,
      '',
      'To accept the offer, sign the Terms & Conditions, choose your warranty method, and pay the 10% deposit, please use this secure link:',
      link,
      '',
      'This offer is valid for one full day.',
      '',
      'Best regards,',
      'Alegria Boat'
    ].filter(Boolean).join('\n');

    const mailto = `mailto:${encodeURIComponent(offer.customerEmail || '')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  prepareWhatsappDialog(offer: Partial<AlegriaOffer>): void {
    if (!offer?.offerId) return;
    const phone = this.normalizeWhatsappPhone(offer.customerPhone || '');
    const text = this.buildWhatsappMessage(offer);
    this.whatsappDialog = {
      offer,
      phone,
      text,
      url: phone ? `https://wa.me/${phone}?text=${encodeURIComponent(text)}` : ''
    };
  }

  openWhatsappDialog(offer: Partial<AlegriaOffer>, event?: Event): void {
    event?.stopPropagation();
    // The editor can contain unsaved pricing changes. Recalculate the current
    // form before producing a customer-facing message so the preview and the
    // displayed total always agree, including for a free offer.
    if (offer === this.form || (!!offer.offerId && offer.offerId === this.form.offerId)) {
      this.applyFinalPricingToForm();
      this.prepareWhatsappDialog(this.form);
      return;
    }
    this.prepareWhatsappDialog(offer);
  }

  closeWhatsappDialog(): void {
    this.whatsappDialog = null;
  }

  openWhatsappWindow(): void {
    if (!this.whatsappDialog?.url) return;
    window.open(this.whatsappDialog.url, '_blank');
  }

  copyWhatsappText(): void {
    if (!this.whatsappDialog?.text) return;
    navigator.clipboard?.writeText(this.whatsappDialog.text);
    this.message = 'Message WhatsApp copié.';
  }

  private buildWhatsappMessage(offer: Partial<AlegriaOffer>): string {
    const f = this.offerFinancials(offer);
    const link = `${window.location.origin}/offer/${offer.offerId}`;
    return [
      `Bonjour ${offer.customerName || ''} 👋`,
      `Votre offre Alegria Boat pour ${offer.outingType || 'votre sortie'}${offer.outingDate ? ` le ${offer.outingDate}` : ''} est prête.`,
      '',
      `💙 À payer à Alegria : ${this.money(f.onlinePayableAmount)}`,
      `• Acompte 10 % : ${this.money(f.depositAmount)}`,
      `• Solde Alegria : ${this.money(f.balanceAmount)}`,
      f.skipperCashAmount ? `👨‍✈️ À payer au skipper : ${this.money(f.skipperCashAmount)}` : '',
      `🛡 Garantie : ${this.money(f.warrantyAmount)}`,
      '',
      `Coût total client : ${this.money(f.totalAmount)}`,
      '',
      `Consulter et accepter la offre : ${link}`
    ].filter(Boolean).join('\n');
  }

  private offerFinancials(offer: Partial<AlegriaOffer>): any {
    const boatPrice = Number((offer as any).proposalBoatPrice ?? (offer as any).estimatedBoatPrice ?? 0) || 0;
    const fuelPrice = Number((offer as any).proposalFuelPrice ?? (offer as any).fuelPrice ?? (offer as any).fuelAmount ?? 0) || 0;
    const extraServicesPrice = Number((offer as any).proposalExtraServicesPrice ?? 0) || 0;
    const skipperCashAmount = Number((offer as any).skipperCashAmount ?? (offer as any).proposalSkipperPrice ?? 0) || 0;
    const totalAmount = Number((offer as any).totalAmount ?? (boatPrice + fuelPrice + extraServicesPrice + skipperCashAmount)) || 0;
    const onlinePayableAmount = Number((offer as any).onlinePayableAmount ?? (offer as any).appPayableAmount ?? Math.max(0, totalAmount - skipperCashAmount)) || 0;
    const depositAmount = Number((offer as any).depositAmount ?? Math.round(onlinePayableAmount * 0.10 * 100) / 100) || 0;
    const balanceAmount = Number((offer as any).balanceAmount ?? Math.max(0, Math.round((onlinePayableAmount - depositAmount) * 100) / 100)) || 0;
    const warrantyAmount = Number((offer as any).warrantyAmount || 500) || 0;
    return { boatPrice, fuelPrice, extraServicesPrice, skipperCashAmount, totalAmount, onlinePayableAmount, depositAmount, balanceAmount, warrantyAmount };
  }

  private money(value: any): string {
    return `${(Number(value || 0)).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
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


  getOfferOriginLabel(offer: AlegriaOffer | Partial<AlegriaOffer>): string {
    const origin = String((offer as any).offerOrigin || offer.source || '').toLowerCase();
    if (origin === 'customer_request' || offer.source === 'request') return this.t('fromCustomerRequest');
    if (origin === 'email_request') return this.t('fromEmailRequest');
    return this.t('fromAdminDirect');
  }

  isAcceptedOffer(offer: AlegriaOffer | Partial<AlegriaOffer>): boolean {
    return String(offer?.status || '').toLowerCase() === 'accepted';
  }

  createSimilarOffer(offer: AlegriaOffer | Partial<AlegriaOffer>, event?: Event): void {
    event?.stopPropagation();

    const now = Date.now();
    this.form = {
      customerName: offer.customerName || '',
      customerEmail: offer.customerEmail || '',
      customerPhone: offer.customerPhone || '',
      outingType: offer.outingType || '',
      outingDate: offer.outingDate || '',
      departureTime: offer.departureTime || '',
      arrivalTime: offer.arrivalTime || '',
      passengers: offer.passengers || 1,
      totalAmount: offer.totalAmount || 0,
      depositAmount: offer.depositAmount || Math.round(Number(offer.totalAmount || 0) * 0.1 * 100) / 100,
      balanceAmount: offer.balanceAmount || Math.round(Number(offer.totalAmount || 0) * 0.9 * 100) / 100,
      warrantyAmount: offer.warrantyAmount || 500,
      offerMessage: offer.offerMessage || '',
      comments: offer.comments || '',
      status: 'draft',
      source: offer.source || 'direct',
      validUntil: now + 24 * 60 * 60 * 1000,
      createdTS: now,
      modifiedTS: now,
    };
    this.message = this.t('similarCopied');
    this.error = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  hasRelatedBooking(offer: AlegriaOffer | Partial<AlegriaOffer>): boolean {
    return offer?.status === 'accepted' ||
      !!(offer as any)?.relatedBookingId ||
      offer?.depositPaid === true ||
      offer?.depositStatus === 'paid';
  }

  openRelatedBooking(offer: AlegriaOffer | Partial<AlegriaOffer>, event?: Event): void {
    event?.stopPropagation();
    const bookingId = (offer as any)?.relatedBookingId || offer?.offerId;
    if (!bookingId) return;
    this.router.navigate(['/admin/bookings', bookingId]);
  }

  reset(): void { this.form = this.emptyForm(); this.message = ''; this.error = ''; }

  private emptyForm(): Partial<AlegriaOffer> {
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
      totalAmount: 0,
      warrantyAmount: 500,
      offerMessage: '',
      comments: '',
    };
  }

  private normalize(value: any): string {
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }
}
