import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from 'godigital-lib';

import { SITE_CONTENT, SiteContent } from '../site-content';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { SiteContentService } from '../site-content-service/site-content.service';
import { BookingApiService, AlegriaPricingModel } from '../bookings/booking-api.service';
import { OfferApiService } from '../bookings/offer-api.service';

interface OnlineBookingOption {
  id: string;
  label: string;
  description?: string;
  price?: number;
}

interface OnlineBookingForm {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  outingDate: string;
  startTime: string;
  endTime: string;
  passengers: number | null;
  startMarina: string;
  destination: string;
  pricePeriod: 'day' | 'halfDay' | 'sunset' | 'evening' | '';
  selectedOptionIds: string[];
  comments: string;
  totalPrice: number | null;
}

@Component({
  selector: 'app-online-booking',
  templateUrl: './online-booking.component.html',
  styleUrls: ['./online-booking.component.scss'],
})
export class OnlineBookingComponent implements OnInit, OnDestroy {
  content: SiteContent = SITE_CONTENT.fr;
  currentLanguage: SiteLanguage = 'fr';
  private allSiteContent = SITE_CONTENT;
  private languageSub?: Subscription;

  readonly maxStep = 3;
  currentStep = 1;
  saving = false;
  error = '';
  message = '';
  createdBookingId = '';

  pricingModel: AlegriaPricingModel = {
    day: 1200,
    halfDay: 900,
    sunset: 600,
    evening: 900,
    skipperPrice: 450,
    cleaningPrice: 150,
    nominalGuests: 8,
    extraGuestPrice: 60,
    minGuests: 1,
    maxGuests: 12,
    seasonalMultipliers: [],
    specialDates: [],
  };

  form: OnlineBookingForm = {
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    outingDate: '',
    startTime: '',
    endTime: '',
    passengers: null,
    startMarina: '',
    destination: '',
    pricePeriod: '',
    selectedOptionIds: [],
    comments: '',
    totalPrice: null,
  };

  constructor(
    private router: Router,
    private mainSvc: ServicesService,
    private siteContentService: SiteContentService,
    private languageService: LanguageService,
    private bookingApi: BookingApiService,
    private offerApi: OfferApiService,
  ) {}

  ngOnInit(): void {
    this.restoreWizardState();
    this.watchLoggedUser();
    this.loadSiteContent();
    this.loadPricingModel();

    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = this.normalizeContent(this.allSiteContent[language] || SITE_CONTENT[language], language);
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  private get wizardStorageKey(): string {
    return 'alegriaOnlineBookingWizardRequestState';
  }

  private persistWizardState(): void {
    try {
      sessionStorage.setItem(this.wizardStorageKey, JSON.stringify({
        form: this.form,
        currentStep: this.currentStep,
        createdBookingId: this.createdBookingId,
        savedAt: Date.now(),
      }));
    } catch {}
  }

  private restoreWizardState(): void {
    try {
      const raw = sessionStorage.getItem(this.wizardStorageKey);
      if (!raw) return;

      const state = JSON.parse(raw);
      if (!state?.savedAt) return;

      if (Date.now() - Number(state.savedAt) > 24 * 60 * 60 * 1000) {
        sessionStorage.removeItem(this.wizardStorageKey);
        return;
      }

      this.form = { ...this.form, ...(state.form || {}) };
      this.currentStep = Math.min(this.maxStep, Math.max(1, Number(state.currentStep || 1)));
      this.createdBookingId = state.createdBookingId || '';
    } catch {}
  }

  private watchLoggedUser(): void {
    const svc: any = this.mainSvc as any;
    const user = svc.bnUser || svc.currentUser || svc.loggedUser || svc.user || null;
    if (user) this.applyUserToForm(user);

    const candidates = [
      svc.bnUser$,
      svc.currentUser$,
      svc.loggedUser$,
      svc.user$,
      svc.userObservable,
      svc.account$,
    ];

    for (const candidate of candidates) {
      if (candidate?.subscribe) {
        candidate.subscribe((value: any) => this.applyUserToForm(value));
        break;
      }
    }
  }

  private applyUserToForm(user: any): void {
    if (!user) return;
    const name = user.displayName || user.name || user.fullName || `${user.firstName || ''} ${user.lastName || ''}`.trim();
    const email = user.email || user.mail || '';

    this.form = {
      ...this.form,
      customerName: this.form.customerName || name || '',
      customerEmail: this.form.customerEmail || email || '',
      customerPhone: this.form.customerPhone || user.phone || user.phoneNumber || user.mobile || '',
    };
  }



  get currentUser(): any {
    const svc: any = this.mainSvc as any;
    return svc.bnUser || svc.currentUser || svc.loggedUser || svc.user || null;
  }

  get isAdminUser(): boolean {
    const user = this.currentUser;
    const role = String(user?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || user?.isAdmin === true;
  }

  get isAdminRequestMode(): boolean {
    return false;
  }

  get isLoggedIn(): boolean {
    const svc: any = this.mainSvc as any;
    return !!(svc.bnUser || svc.currentUser || svc.loggedUser || svc.user);
  }

  private async loadSiteContent(): Promise<void> {
    try {
      this.allSiteContent = await this.siteContentService.getContent();
      this.content = this.normalizeContent(this.allSiteContent[this.currentLanguage] || SITE_CONTENT[this.currentLanguage], this.currentLanguage);
    } catch {
      this.content = this.normalizeContent(SITE_CONTENT[this.currentLanguage], this.currentLanguage);
    }
  }

  private async loadPricingModel(): Promise<void> {
    try {
      this.pricingModel = await this.bookingApi.getPricingModel();
    } catch {
      this.pricingModel = this.bookingApi.getDefaultPricingModel();
    }
  }

  private normalizeContent(content: SiteContent | any, language: SiteLanguage): SiteContent {
    const fallback = SITE_CONTENT[language] || SITE_CONTENT.fr;
    const fallbackBooking = (fallback as any).onlineBooking || {};
    const providedBooking = content?.onlineBooking || {};

    return {
      ...fallback,
      ...(content || {}),
      onlineBooking: {
        ...fallbackBooking,
        ...providedBooking,
      },
    } as SiteContent;
  }

  get bookingText(): any {
    return (this.content as any).onlineBooking || {};
  }

  get pricePeriods(): Array<{ id: 'day' | 'halfDay' | 'sunset' | 'evening'; label: string }> {
    return this.bookingText?.pricePeriods || [
      { id: 'day', label: this.currentLanguage === 'fr' ? 'Journée' : this.currentLanguage === 'es' ? 'Día completo' : 'Day' },
      { id: 'halfDay', label: this.currentLanguage === 'fr' ? 'Demi-journée' : this.currentLanguage === 'es' ? 'Medio día' : 'Half day' },
      { id: 'sunset', label: this.currentLanguage === 'fr' ? 'Coucher de soleil' : this.currentLanguage === 'es' ? 'Puesta de sol' : 'Sunset' },
      { id: 'evening', label: this.currentLanguage === 'fr' ? 'Soirée' : this.currentLanguage === 'es' ? 'Noche' : 'Evening' },
    ];
  }

  get stepLabels(): string[] {
    const configured = this.bookingText?.requestWizardSteps || this.bookingText?.wizardSteps || [];
    if (configured.length) return configured.slice(0, 3);

    if (this.currentLanguage === 'fr') return ['Détails', 'Options', 'Compte'];
    if (this.currentLanguage === 'es') return ['Detalles', 'Opciones', 'Cuenta'];
    return ['Details', 'Options', 'Account'];
  }


  get marinas(): string[] {
    return this.bookingText?.marinas || [];
  }

  get destinations(): string[] {
    return this.bookingText?.destinations || [];
  }

  get options(): OnlineBookingOption[] {
    const rawOptions = (this.bookingText as any)?.options;

    if (Array.isArray(rawOptions)) {
      return rawOptions.filter(Boolean);
    }

    // Firebase RTDB may return list-like data as an object/map instead of an array.
    // Keep the UI safe by normalizing it before using array methods such as filter().
    if (rawOptions && typeof rawOptions === 'object') {
      return Object.entries(rawOptions)
        .map(([key, value]: [string, any]) => ({
          id: value?.id || key,
          label: value?.label || key,
          description: value?.description || '',
          price: Number(value?.price || 0),
        }))
        .filter((option) => !!option.id && !!option.label);
    }

    return [];
  }



  formatAmount(amount: number | null | undefined): string {
    const value = Number(amount || 0);
    try {
      return new Intl.NumberFormat(this.currentLanguage || 'fr', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
      }).format(value);
    } catch {
      return `€${Math.round(value)}`;
    }
  }

  get shouldShowEstimatedPrice(): boolean {
    return !!this.form.pricePeriod;
  }

  get formattedBookingTotal(): string {
    return this.formatAmount(this.bookingTotal);
  }

  get selectedPeriodLabel(): string {
    return this.pricePeriods.find((item) => item.id === this.form.pricePeriod)?.label || '-';
  }

  get boatCustomerTotalAmount(): number {
    return Math.round((
      this.estimatedBoatPriceAmount +
      this.cleaningPriceAmount +
      this.extraGuestsAmount +
      this.selectedOptionsTotal
    ) * 100) / 100;
  }

  get skipperCustomerTotalAmount(): number {
    return Math.round(this.skipperPriceAmount * 100) / 100;
  }

  get totalCustomerPayableAmount(): number {
    return Math.round((this.boatCustomerTotalAmount + this.skipperCustomerTotalAmount) * 100) / 100;
  }

  get formattedBoatCustomerTotal(): string {
    return this.formatAmount(this.boatCustomerTotalAmount);
  }

  get formattedSkipperCustomerTotal(): string {
    return this.formatAmount(this.skipperCustomerTotalAmount);
  }

  get formattedTotalCustomerPayable(): string {
    return this.formatAmount(this.totalCustomerPayableAmount);
  }

  get optionsSummary(): string {
    if (!this.selectedOptions.length) return this.bookingText?.noOptions || '-';
    return this.selectedOptions.map((option) => option.label).join(', ');
  }

  get pricingSummaryTitle(): string {
    return this.bookingText?.pricingSummaryTitle || this.bookingText?.estimatedPriceTitle || 'Estimated pricing';
  }

  get boatTotalLabel(): string {
    return this.bookingText?.boatTotalLabel || this.bookingText?.boatPrice || 'Boat total';
  }

  get skipperTotalLabel(): string {
    return this.bookingText?.skipperTotalLabel || this.bookingText?.skipperPrice || 'Skipper total';
  }

  get customerTotalLabel(): string {
    return this.bookingText?.customerTotalLabel || this.bookingText?.totalPrice || 'Total to pay';
  }

  get pricingClarityNotice(): string {
    return this.bookingText?.pricingClarityNotice || this.bookingText?.estimatedPriceNote || '';
  }

  get selectedOptionsTotal(): number {
    return this.selectedOptions.reduce((sum, option) => sum + Number(option.price || 0), 0);
  }

  get estimatedBoatPriceAmount(): number {
    const date = this.form.outingDate;
    const special = date ? (this.pricingModel.specialDates || []).find((item) => item.date === date) : null;
    if (special?.price) return Number(special.price);
    return Math.round(this.basePrice * this.calendarMultiplier * 100) / 100;
  }

  get selectedOptions(): OnlineBookingOption[] {
    const ids = new Set(this.form.selectedOptionIds || []);
    return this.options.filter((option) => ids.has(option.id));
  }

  isOptionSelected(id: string): boolean {
    return (this.form.selectedOptionIds || []).includes(id);
  }

  toggleOption(id: string, checked: boolean): void {
    const current = new Set(this.form.selectedOptionIds || []);
    checked ? current.add(id) : current.delete(id);
    this.form.selectedOptionIds = Array.from(current);
    this.persistWizardState();
  }


  private normalizePricePeriodKey(value: string | undefined | null): 'day' | 'halfDay' | 'sunset' | 'evening' {
    const raw = String(value || '').trim();
    const normalized = raw
      .toLowerCase()
      .replace(/[\s_-]+/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    if (['halfday', 'half', 'demijournee', 'demijournée', 'medi日ia', 'mediodia'].includes(normalized)) {
      return 'halfDay';
    }

    if (['sunset', 'coucherdesoleil', 'puestadesol'].includes(normalized)) {
      return 'sunset';
    }

    if (['evening', 'soiree', 'soirée', 'noche'].includes(normalized)) {
      return 'evening';
    }

    return 'day';
  }

  get basePrice(): number {
    const periodKey = this.normalizePricePeriodKey(this.form.pricePeriod);
    const model: any = this.pricingModel || {};

    const candidateKeys: Record<string, string[]> = {
      day: ['day', 'fullDay', 'full_day', 'journee', 'journée', 'dia', 'dayPrice'],
      halfDay: ['halfDay', 'half_day', 'halfday', 'demiJournee', 'demi_journee', 'demiJournée', 'halfDayPrice'],
      sunset: ['sunset', 'sunsetPrice', 'coucherSoleil', 'coucher_de_soleil'],
      evening: ['evening', 'eveningPrice', 'soiree', 'soirée', 'noche'],
    };

    for (const key of candidateKeys[periodKey]) {
      const value = Number(model[key]);
      if (!Number.isNaN(value) && value > 0) return value;
    }

    return Number(model.day || 0);
  }

  get calendarMultiplier(): number {
    const date = this.form.outingDate;
    if (!date) return 1;

    const special = (this.pricingModel.specialDates || []).find((item) => item.date === date);
    if (special?.price) return 1;
    if (special?.multiplier) return Number(special.multiplier || 1);

    const season = (this.pricingModel.seasonalMultipliers || []).find((item) =>
      item.startDate && item.endDate && date >= item.startDate && date <= item.endDate
    );

    return Number(season?.multiplier || 1);
  }

  get extraGuestCount(): number {
    const guests = Number(this.form.passengers || 0);
    const nominal = Number(this.pricingModel.nominalGuests || 0);
    return Math.max(0, guests - nominal);
  }

  get extraGuestsAmount(): number {
    return this.extraGuestCount * Number(this.pricingModel.extraGuestPrice || 0);
  }


  get skipperPriceAmount(): number {
    return Number((this.pricingModel as any)?.skipperPrice || (this.pricingModel as any)?.skipper || 0);
  }

  get cleaningPriceAmount(): number {
    return Number((this.pricingModel as any)?.cleaningPrice || (this.pricingModel as any)?.cleaning || 0);
  }

  get estimatedServicesAmount(): number {
    return this.skipperPriceAmount + this.cleaningPriceAmount;
  }


  get displayedBasePrice(): number {
    return Number(this.estimatedBoatPriceAmount || this.basePrice || 0);
  }

  get bookingTotal(): number {
    return Math.round((
      this.estimatedBoatPriceAmount +
      this.skipperPriceAmount +
      this.cleaningPriceAmount +
      this.extraGuestsAmount +
      this.selectedOptionsTotal
    ) * 100) / 100;
  }


  private parseTimeToMinutes(value: string | undefined | null): number | null {
    const match = String(value || '').match(/^(\d{2}):(\d{2})$/);
    if (!match) return null;

    const hours = Number(match[1]);
    const minutes = Number(match[2]);

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      return null;
    }

    return hours * 60 + minutes;
  }

  get durationMinutes(): number {
    const start = this.parseTimeToMinutes(this.form.startTime);
    const end = this.parseTimeToMinutes(this.form.endTime);

    if (start === null || end === null || end <= start) {
      return 0;
    }

    return end - start;
  }

  get durationHours(): number {
    return Math.round((this.durationMinutes / 60) * 100) / 100;
  }

  get maxDurationHours(): number {
    const model: any = this.pricingModel || {};
    const period = this.normalizePricePeriodKey(this.form.pricePeriod);

    if (period === 'halfDay') return Number(model.halfDayMaxHours || model.halfDayMaximumHours || 5);
    if (period === 'day') return Number(model.dayMaxHours || model.dayMaximumHours || 8);
    if (period === 'sunset') return Number(model.sunsetMaxHours || model.sunsetMaximumHours || 3);
    if (period === 'evening') return Number(model.eveningMaxHours || model.eveningMaximumHours || 4);

    return 0;
  }

  get isDurationValidForFormula(): boolean {
    return this.durationHours > 0 && (!this.maxDurationHours || this.durationHours <= this.maxDurationHours);
  }



  private parseDateOnly(value: string | undefined | null): Date | null {
    if (!value) {
      return null;
    }

    const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) {
      return null;
    }

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const date = new Date(year, month - 1, day);

    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return null;
    }

    date.setHours(0, 0, 0, 0);
    return date;
  }

  private getTomorrowStart(): Date {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
  }

  private isDateTomorrowOrLater(value: string | undefined | null): boolean {
    const date = this.parseDateOnly(value);
    if (!date) {
      return false;
    }

    return date.getTime() >= this.getTomorrowStart().getTime();
  }

  get step1ValidationErrors(): string[] {
    const errors: string[] = [];

    if (!this.form.pricePeriod) {
      errors.push(this.bookingText?.missingPeriod || '');
    }

    if (!this.form.outingDate) {
      errors.push(this.bookingText?.missingDate || '');
    } else if (!this.parseDateOnly(this.form.outingDate)) {
      errors.push(this.bookingText?.invalidDate || '');
    } else if (!this.isDateTomorrowOrLater(this.form.outingDate)) {
      errors.push(this.bookingText?.dateMustBeFuture || '');
    }

    if (!this.form.startTime) {
      errors.push(this.bookingText?.missingStartTime || '');
    }

    if (!this.form.endTime) {
      errors.push(this.bookingText?.missingEndTime || '');
    }

    if (this.form.startTime && this.form.endTime) {
      const start = this.parseTimeToMinutes(this.form.startTime);
      const end = this.parseTimeToMinutes(this.form.endTime);

      if (start === null || end === null) {
        errors.push(this.bookingText?.invalidTime || '');
      } else if (end <= start) {
        errors.push(this.bookingText?.endTimeAfterStartTime || '');
      } else if (!this.isDurationValidForFormula) {
        errors.push(String(this.bookingText?.durationTooLong || '').replace('{hours}', String(this.maxDurationHours)));
      }
    }

    if (!this.form.passengers || Number(this.form.passengers) <= 0) {
      errors.push(this.bookingText?.missingPassengers || '');
    } else if (!Number.isInteger(Number(this.form.passengers))) {
      errors.push(this.bookingText?.passengersMustBeInteger || '');
    } else if (this.pricingModel.minGuests && Number(this.form.passengers) < Number(this.pricingModel.minGuests)) {
      errors.push(`${this.bookingText?.minPassengersWarning || ''} ${this.pricingModel.minGuests}`.trim());
    } else if (this.pricingModel.maxGuests && Number(this.form.passengers) > Number(this.pricingModel.maxGuests)) {
      errors.push(`${this.bookingText?.maxPassengersWarning || ''} ${this.pricingModel.maxGuests}`.trim());
    }

    if (!this.form.startMarina) {
      errors.push(this.bookingText?.missingMarina || '');
    }

    if (!this.form.destination) {
      errors.push(this.bookingText?.missingDestination || '');
    }

    if (this.form.startMarina && this.form.destination && this.form.startMarina === this.form.destination) {
      errors.push(this.bookingText?.destinationMustDiffer || '');
    }

    return errors.filter(Boolean);
  }

  get isStep1Valid(): boolean {
    return this.step1ValidationErrors.length === 0;
  }

  get step1MissingReason(): string {
    if (this.currentStep !== 1 || this.isStep1Valid) return '';
    return this.step1ValidationErrors[0] || '';
  }

  canGoToStep(step: number): boolean {
    if (step <= this.currentStep) return true;
    if (step === 2) return this.isStep1Valid;
    if (step === 3) return this.isStep1Valid;
    return false;
  }

  private isValidRequestEmail(value: string | undefined | null): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(String(value || '').trim());
  }

  private isValidRequestPhone(value: string | undefined | null): boolean {
    const raw = String(value || '').trim();
    if (!raw) return false;
    const digits = raw.replace(/[^\d]/g, '');
    return digits.length >= 8 && digits.length <= 15 && /^[+()\d\s.-]+$/.test(raw);
  }

  get requestValidationErrors(): string[] {
    const errors: string[] = [];

    if (!this.isStep1Valid) {
      errors.push(this.step1MissingReason || this.bookingText?.requestValidationStep1 || this.bookingText?.requestMissingData || '');
    }

    if (this.isAdminUser) {
      errors.push(this.bookingText?.adminCannotBookOnline || 'Admin users cannot submit client offer requests from this page.');
    }

    if (!this.isLoggedIn) {
      errors.push(this.bookingText?.requestValidationLogin || '');
    }

    if (!String(this.form.customerName || '').trim()) {
      errors.push(this.bookingText?.requestValidationName || '');
    }

    if (!String(this.form.customerEmail || '').trim()) {
      errors.push(this.bookingText?.requestValidationEmailRequired || '');
    } else if (!this.isValidRequestEmail(this.form.customerEmail)) {
      errors.push(this.bookingText?.requestValidationEmailInvalid || '');
    }

    if (!String(this.form.customerPhone || '').trim()) {
      errors.push(this.bookingText?.requestValidationPhoneRequired || '');
    } else if (!this.isValidRequestPhone(this.form.customerPhone)) {
      errors.push(this.bookingText?.requestValidationPhoneInvalid || '');
    }

    return errors.filter(Boolean);
  }

  get firstRequestValidationError(): string {
    return this.requestValidationErrors[0] || '';
  }

  get canSubmitRequest(): boolean {
    return this.requestValidationErrors.length === 0;
  }

  goToLogin(): void {
    this.persistWizardState();
    this.router.navigate(['/login'], { queryParams: { redirect: '/reserver' } });
  }

  nextStep(): void {
    if (this.currentStep < this.maxStep && this.canGoToStep(this.currentStep + 1)) {
      this.currentStep += 1;
      this.error = '';
      this.message = '';
      this.persistWizardState();
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep -= 1;
      this.error = '';
      this.message = '';
      this.persistWizardState();
    }
  }

  async ensureBookingCreated(): Promise<string> {
    if (this.createdBookingId) return this.createdBookingId;

    if (!this.canSubmitRequest) {
      throw new Error(this.firstRequestValidationError || this.bookingText?.requestMissingData || '');
    }

    const selectedOptions = this.selectedOptions.map((option) => ({
      id: option.id,
      label: option.label,
      description: option.description || '',
      price: option.price || 0,
      status: 'requested',
    }));

    const periodLabel = this.pricePeriods.find((item) => item.id === this.form.pricePeriod)?.label || this.form.pricePeriod || 'Online offer request';
    const now = Date.now();

    const offerRequest = await this.offerApi.saveOffer({
      source: 'request' as any,
      status: 'request' as any,
      offerOrigin: this.isAdminRequestMode ? 'admin_request' : 'customer_request',
      offerSentAfter: this.isAdminRequestMode ? 'admin_created_request' : 'customer_request',
      requestSubmittedAt: now,
      customerName: this.form.customerName,
      customerEmail: this.form.customerEmail,
      customerPhone: this.form.customerPhone,
      outingType: periodLabel,
      bookingPricePeriod: this.normalizePricePeriodKey(this.form.pricePeriod),
      bookingPricePeriodLabel: periodLabel,
      outingDate: this.form.outingDate,
      departureTime: this.form.startTime,
      arrivalTime: this.form.endTime,
      startTime: this.form.startTime,
      endTime: this.form.endTime,
      durationHours: this.durationHours,
      timePeriod: `${this.form.startTime} - ${this.form.endTime}`,
      passengers: Number(this.form.passengers || 0),
      startMarina: this.form.startMarina,
      destination: this.form.destination,
      selectedOptions,
      estimatedPrice: this.bookingTotal,
      estimatedBoatPrice: this.estimatedBoatPriceAmount,
      estimatedBasePrice: this.displayedBasePrice,
      estimatedCalendarMultiplier: this.calendarMultiplier,
      estimatedExtraGuestsAmount: this.extraGuestsAmount,
      estimatedExtraGuestCount: this.extraGuestCount,
      estimatedSkipperPrice: this.skipperPriceAmount,
      estimatedCleaningPrice: this.cleaningPriceAmount,
      estimatedOptionsPrice: this.selectedOptionsTotal,
      proposalBoatPrice: this.estimatedBoatPriceAmount,
      proposalSkipperPrice: this.skipperPriceAmount,
      offerCleaningPrice: this.cleaningPriceAmount,
      proposalExtraServicesPrice: this.selectedOptionsTotal + this.extraGuestsAmount,
      totalAmount: this.bookingTotal,
      skipperCashAmount: this.skipperPriceAmount,
      onlinePayableAmount: Math.max(0, Math.round((this.bookingTotal - this.skipperPriceAmount) * 100) / 100),
      appPayableAmount: Math.max(0, Math.round((this.bookingTotal - this.skipperPriceAmount) * 100) / 100),
      depositAmount: Math.round(Math.max(0, this.bookingTotal - this.skipperPriceAmount) * 0.10 * 100) / 100,
      balanceAmount: Math.max(0, Math.round((Math.max(0, this.bookingTotal - this.skipperPriceAmount) - Math.round(Math.max(0, this.bookingTotal - this.skipperPriceAmount) * 0.10 * 100) / 100) * 100) / 100),
      warrantyAmount: 500,
      bookingRequestStatus: 'offer_request_to_finalize',
      requestNeedsAdminOffer: true,
      pricingToBeFinalizedByAdmin: true,
      createdByAdmin: this.isAdminRequestMode,
      requestOrigin: this.isAdminRequestMode ? 'admin_created_request' : 'customer_request',
      offerMessage: 'Offer request created online. Admin must finalize pricing before sending offer.',
      comments: [
        'Offer request - no payment yet',
        'Admin must finalize boat price, skipper price and extra services, then send the offer to the client.',
        `Requested period: ${periodLabel}`,
        `Requested time: ${this.form.startTime} - ${this.form.endTime}`,
        `Duration: ${this.durationHours}h`,
        `Estimated price: €${this.bookingTotal}`,
        `Skipper price: €${this.skipperPriceAmount}`,
        `Cleaning price: €${this.cleaningPriceAmount}`,
        `Options price: €${this.selectedOptionsTotal}`,
        `Extra guests price: €${this.extraGuestsAmount}`,
        `Start marina: ${this.form.startMarina}`,
        `Destination: ${this.form.destination}`,
        `Options: ${selectedOptions.map((item) => item.label).join(', ') || 'none'}`,
        this.form.comments ? `Customer comments: ${this.form.comments}` : '',
      ].filter(Boolean).join('\n'),
    } as any);

    this.createdBookingId = offerRequest.offerId;
    this.persistWizardState();
    return offerRequest.offerId;
  }

  async finalSubmit(): Promise<void> {
    this.error = '';
    this.message = '';

    if (this.isAdminUser) {
      this.error = this.bookingText?.adminCannotBookOnline || 'Admin users cannot submit client offer requests from this page.';
      return;
    }

    const validationErrors = this.requestValidationErrors;
    if (validationErrors.length) {
      this.error = validationErrors.join(' ');
      return;
    }

    this.saving = true;

    try {
      const offerId = await this.ensureBookingCreated();

      await this.offerApi.notifyBookingRequestCreated(offerId, {
        language: this.currentLanguage,
        source: 'online_booking_request',
      }).toPromise().catch((mailError) => {
        console.warn('Offer request email notification failed', mailError);
      });

      this.message = this.bookingText?.requestSubmittedMessage || this.bookingText?.finalMessage || '';
      try {
        sessionStorage.removeItem(this.wizardStorageKey);
      } catch {}
      setTimeout(() => this.router.navigate(['/my-offers']), 1200);
    } catch (e: any) {
      this.error = e?.message || this.bookingText?.requestSubmitError || '';
    } finally {
      this.saving = false;
    }
  }
}
