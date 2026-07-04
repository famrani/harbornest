import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'godigital-lib';
import { BookingApiService, AlegriaBooking } from './booking-api.service';
import { SITE_CONTENT } from '../site-content';
import { SiteContentService } from '../site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { Subscription } from 'rxjs';

interface BookingFieldView {
  key: string;
  value: string;
}

type BookingView = AlegriaBooking & { displayFields: BookingFieldView[] };

const BOOKING_AUTO_TEXT: Record<string, string> = {
  "auto.home.bookings.bookings.component.upcoming": "Upcoming",
  "auto.home.bookings.bookings.component.past": "Past",
  "auto.home.bookings.bookings.component.platform": "Platform",
  "auto.home.bookings.bookings.component.all_platforms": "All platforms",
  "auto.home.bookings.bookings.component.direct_alegria": "Direct Alegria",
  "auto.home.bookings.bookings.component.click_boat": "Click&Boat",
  "auto.home.bookings.bookings.component.samboat": "Samboat",
  "auto.home.bookings.bookings.component.other": "Other",
  "auto.home.bookings.bookings.component.status": "Status",
  "auto.home.bookings.bookings.component.new_reservation": "New reservation",
  "auto.home.bookings.bookings.component.reservation_cockpit": "Reservation cockpit",
  "auto.home.bookings.bookings.component.new_reservation_bb6c90": "New reservation",
  "auto.home.bookings.bookings.component.create_a_direct_click_boat_samboat_or_other_platfo": "Create a direct, Click&Boat, Samboat or other platform reservation.",
  "auto.home.bookings.bookings.component.open_reservation_form": "Open reservation form",
  "auto.home.bookings.bookings.component.close": "Close",
  "auto.home.bookings.bookings.component.if_the_embedded_form_is_not_visible_on_your_browse": "If the embedded form is not visible on your browser, ",
  "auto.home.bookings.bookings.component.bnbookings": "bnBookings",
  "auto.home.bookings.bookings.component.sumup_card": "SumUp card"
};

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit, OnDestroy {
  bookings: BookingView[] = [];
  loading = true;
  errorMessage = '';
  searchTerm = '';
  activeDateTab: 'upcoming' | 'past' = 'upcoming';
  statusFilter = 'all';
  warrantyFilter = 'all';
  platformFilter = 'all';
  sortField: 'date' | 'customer' | 'status' | 'total' | 'balance' = 'date';
  sortDirection: 'asc' | 'desc' = 'asc';
  selectedBalanceBooking?: BookingView;
  selectedStatusBooking: BookingView | null = null;
  balancePaymentMethod = 'sumup';
  balancePaymentNotes = '';
  savingBalancePayment = false;
  balancePaymentMessage = '';
  balancePaymentError = '';
  showCreateReservation = false;
  createReservationMessage = '';

  loggedUser: any = null;
  currentLanguage: SiteLanguage = 'fr';
  pageText: any = (SITE_CONTENT as any).fr?.bookingManagement || {};
  private languageSub?: Subscription;

  constructor(
    private bookingApi: BookingApiService,
    private router: Router,
    private mainSvc: ServicesService,
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
    this.loggedUser = svc.bnUser || svc.currentUser || null;
    if (!this.isAdmin) {
      this.router.navigate(['/my-bookings']);
      return;
    }
    this.loadBookings();
  }


  async loadPageText(language: SiteLanguage): Promise<void> {
    const fallback = (SITE_CONTENT as any)[language]?.bookingManagement || (SITE_CONTENT as any).fr?.bookingManagement || {};
    try {
      const content: any = await this.siteContentService.getContent();
      this.pageText = {
        ...fallback,
        ...(content?.[language]?.bookingManagement || {}),
        ...(content?.bookingManagement?.[language] || {}),
      };
    } catch {
      this.pageText = fallback;
    }
  }

  t(key: string): string {
    return this.pageText?.[key] || BOOKING_AUTO_TEXT[key] || key;
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
  }


  getPlatformKey(booking: AlegriaBooking): string {
    const raw: any = (booking as any) || {};
    const value = String(
      raw.source ||
      raw.externalPlatform ||
      raw.externalPlatformName ||
      raw.bookingSource ||
      raw.raw?.source ||
      raw.raw?.externalPlatform ||
      ''
    ).toLowerCase().trim();

    if (value.includes('click') || value.includes('c&b') || value.includes('clickandboat')) return 'clickandboat';
    if (value.includes('samboat')) return 'samboat';
    if (value === 'direct' || value === 'alegria' || value === 'direct alegria') return 'direct';
    if (raw.bookingSource === 'direct' || raw.raw?.bookingSource === 'direct') return 'direct';
    if (!value) return 'direct';
    return 'other';
  }

  getPlatformLabel(booking: AlegriaBooking): string {
    const key = this.getPlatformKey(booking);
    if (key === 'clickandboat') return 'Click&Boat';
    if (key === 'samboat') return 'SamBoat';
    if (key === 'direct') return 'Direct Alegria';

    const raw: any = booking || {};
    return String(raw.externalPlatformName || raw.externalPlatform || raw.source || raw.raw?.externalPlatformName || raw.raw?.externalPlatform || 'Other');
  }

  getPlatformReference(booking: AlegriaBooking): string {
    const raw: any = booking || {};
    return String(raw.externalPlatformBookingRef || raw.platformBookingReference || raw.platformReservationNumber || raw.raw?.externalPlatformBookingRef || raw.raw?.platformBookingReference || '');
  }

  get filteredBookings(): BookingView[] {
    const term = this.normalizeSearch(this.searchTerm);

    const filtered = this.bookings.filter((booking) => {
      if (this.activeDateTab === 'upcoming' && !this.isUpcomingBooking(booking)) return false;
      if (this.activeDateTab === 'past' && !this.isPastBooking(booking)) return false;

      if (this.statusFilter !== 'all' && this.getDerivedBookingStatus(booking) !== this.statusFilter) return false;

      if (this.warrantyFilter === 'not_selected' && this.getWarrantyChoice(booking)) return false;
      if (this.warrantyFilter === 'cash' && this.getWarrantyChoice(booking) !== 'cash_on_board') return false;
      if (this.warrantyFilter === 'card_selected' && this.getWarrantyChoice(booking) !== 'stripe_card') return false;
      if (this.warrantyFilter === 'card_registered' && !this.isWarrantyCardRegistered(booking)) return false;

      if (this.platformFilter !== 'all' && this.getPlatformKey(booking) !== this.platformFilter) return false;

      if (term) {
        const haystack = [
          booking.customerName,
          booking.email,
          booking.phone,
          booking.outingType,
          booking.outingDate,
          (booking as any).bookingId,
          this.getStatusLabel(booking),
          this.getWarrantyModeLabel(booking),
          this.getPlatformLabel(booking),
          this.getPlatformReference(booking),
        ].map((value) => this.normalizeSearch(value)).join(' ');

        if (!haystack.includes(term)) return false;
      }

      return true;
    });

    return this.sortBookings(filtered);
  }

  get upcomingBookingsCount(): number {
    return this.bookings.filter((booking) => this.isUpcomingBooking(booking)).length;
  }

  get pastBookingsCount(): number {
    return this.bookings.filter((booking) => this.isPastBooking(booking)).length;
  }

  get activeTabBookingsCount(): number {
    return this.filteredBookings.length;
  }

  setDateTab(tab: 'upcoming' | 'past'): void {
    this.activeDateTab = tab;
    if (this.sortField === 'date') {
      this.sortDirection = tab === 'past' ? 'desc' : 'asc';
    }
  }

  isUpcomingBooking(booking: AlegriaBooking): boolean {
    const time = this.getBookingTime(booking);
    if (!time) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return time >= today.getTime();
  }

  isPastBooking(booking: AlegriaBooking): boolean {
    const time = this.getBookingTime(booking);
    if (!time) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return time < today.getTime();
  }

  getBookingTime(booking: AlegriaBooking): number {
    const rawDate = String((booking as any).outingDate || (booking as any).date || (booking as any).bookingDate || '').trim();
    if (!rawDate) return 0;

    let normalized = rawDate;
    const frenchDate = rawDate.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
    if (frenchDate) {
      const day = frenchDate[1].padStart(2, '0');
      const month = frenchDate[2].padStart(2, '0');
      const year = frenchDate[3].length === 2 ? `20${frenchDate[3]}` : frenchDate[3];
      normalized = `${year}-${month}-${day}`;
    }

    const departureTime = String((booking as any).departureTime || '').trim();
    const timestamp = Date.parse(departureTime ? `${normalized}T${departureTime}` : normalized);
    return Number.isNaN(timestamp) ? 0 : timestamp;
  }

  sortBookings(bookings: BookingView[]): BookingView[] {
    const direction = this.sortDirection === 'asc' ? 1 : -1;

    return [...bookings].sort((a, b) => {
      let left: any;
      let right: any;

      switch (this.sortField) {
        case 'customer':
          left = String(a.customerName || '').toLowerCase();
          right = String(b.customerName || '').toLowerCase();
          break;
        case 'status':
          left = this.getStatusLabel(a);
          right = this.getStatusLabel(b);
          break;
        case 'total':
          left = Number(a.totalPrice || 0);
          right = Number(b.totalPrice || 0);
          break;
        case 'balance':
          left = this.getBalanceAmount(a);
          right = this.getBalanceAmount(b);
          break;
        case 'date':
        default:
          left = this.getBookingTime(a);
          right = this.getBookingTime(b);
          break;
      }

      if (typeof left === 'number' && typeof right === 'number') {
        return (left - right) * direction;
      }

      return String(left || '').localeCompare(String(right || '')) * direction;
    });
  }


  openCreateReservation(): void {
    this.showCreateReservation = true;
    this.createReservationMessage = '';
    setTimeout(() => {
      try {
        document.getElementById('create-reservation-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch {}
    }, 0);
  }

  closeCreateReservation(): void {
    this.showCreateReservation = false;
  }

  onReservationCreated(bookingId: string): void {
    this.createReservationMessage = bookingId ? `Reservation created: ${bookingId}` : 'Reservation created.';
    this.showCreateReservation = false;
    this.loadBookings();
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.warrantyFilter = 'all';
    this.platformFilter = 'all';
    this.sortField = 'date';
    this.sortDirection = this.activeDateTab === 'past' ? 'desc' : 'asc';
  }

  isTermsAccepted(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking || {};
    const explicitAccepted = anyBooking.customerTermsAccepted === true ||
      anyBooking.termsAccepted === true ||
      anyBooking.tncAccepted === true ||
      anyBooking.tcAccepted === true ||
      anyBooking.tAndCAccepted === true ||
      anyBooking.termsAndConditionsAccepted === true ||
      anyBooking.acceptedTerms === true ||
      anyBooking.workflow?.termsAccepted === true ||
      anyBooking.bookingWorkflow?.termsAccepted === true ||
      anyBooking?.documents?.termsAccepted === true ||
      anyBooking?.terms?.accepted === true;

    const explicitTimestamp = anyBooking.termsAcceptedAt ||
      anyBooking.tncAcceptedAt ||
      anyBooking.tcAcceptedAt ||
      anyBooking.acceptedTermsAt ||
      anyBooking.termsAndConditionsAcceptedAt ||
      anyBooking.workflow?.termsAcceptedAt ||
      anyBooking.bookingWorkflow?.termsAcceptedAt ||
      anyBooking?.documents?.termsAcceptedAt ||
      anyBooking?.terms?.acceptedAt;

    const acceptedBy = anyBooking.termsAcceptedBy ||
      anyBooking.tncAcceptedBy ||
      anyBooking.acceptedTermsBy ||
      anyBooking.workflow?.termsAcceptedBy ||
      anyBooking.bookingWorkflow?.termsAcceptedBy ||
      anyBooking?.documents?.termsAcceptedBy ||
      anyBooking?.terms?.acceptedBy;

    const source = String(
      anyBooking.termsAcceptedSource ||
      anyBooking.tncAcceptedSource ||
      anyBooking.acceptedTermsSource ||
      anyBooking.workflow?.termsAcceptedSource ||
      anyBooking.bookingWorkflow?.termsAcceptedSource ||
      anyBooking?.documents?.termsAcceptedSource ||
      anyBooking?.terms?.source ||
      ''
    ).toLowerCase();

    const formalCustomerMarker = anyBooking.customerTermsAccepted === true ||
      source.includes('customer') ||
      source.includes('client') ||
      source.includes('proposal') ||
      source.includes('portal') ||
      !!acceptedBy;

    return explicitAccepted === true && !!explicitTimestamp && formalCustomerMarker;
  }

  getBookingOutingTime(booking: AlegriaBooking): number {
    const rawDate = String((booking as any)?.outingDate || (booking as any)?.date || (booking as any)?.bookingDate || '').trim();
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

  isBookingDatePastOrToday(booking: AlegriaBooking): boolean {
    const outingTime = this.getBookingOutingTime(booking);
    if (!outingTime) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return outingTime <= today.getTime();
  }

  isBookingCancelledByDate(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking || {};
    const bookingStatus = anyBooking.bookingStatus;
    const status = String(anyBooking.status || '').toLowerCase().trim();
    const requestStatus = String(anyBooking.bookingRequestStatus || '').toLowerCase().trim();

    // Legacy Firebase records use bookingStatus: true to mean confirmed/executed.
    // A past date must never turn those bookings into cancelled bookings.
    if (bookingStatus === true || bookingStatus === 'true' || status === 'confirmed' || requestStatus === 'confirmed') return false;
    if (this.isBalancePaid(booking)) return false;
    return this.isBookingDatePastOrToday(booking) && !this.isBalancePaid(booking);
  }

  isCancelledBooking(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking || {};
    const rawStatus = anyBooking.bookingStatus ?? anyBooking.status;
    const normalizedStatus = String(rawStatus).toLowerCase().trim();
    return rawStatus === false || normalizedStatus === 'false' || normalizedStatus === 'cancelled' || normalizedStatus === 'canceled' || anyBooking.cancelled === true || anyBooking.canceled === true;
  }

  getDerivedBookingStatus(booking: AlegriaBooking): string {
    const anyBooking: any = booking || {};
    const rawStatus = anyBooking.bookingStatus ?? anyBooking.status;

    // Read Firebase status first. bookingStatus: true means confirmed/executed in legacy bnBookings.
    if (this.isBalancePaid(booking)) return 'payment_done';
    if (this.isCancelledBooking(booking)) return 'cancelled';

    if (
      rawStatus === 'payment_done' ||
      rawStatus === 'full_payment_done' ||
      rawStatus === 'paid' ||
      rawStatus === 'completed'
    ) {
      return 'payment_done';
    }

    if (
      rawStatus === true ||
      rawStatus === 'true' ||
      rawStatus === 'confirmed' ||
      anyBooking.confirmed === true ||
      anyBooking.bookingConfirmed === true
    ) {
      return 'confirmed';
    }

    if (this.isDepositPaid(booking) && this.isTermsAccepted(booking)) return 'confirmed';
    return 'not_confirmed';
  }

  getStatusLabel(booking: AlegriaBooking): string {
    const status = this.getDerivedBookingStatus(booking);
    if (status === 'cancelled') return 'Cancelled';
    if (status === 'payment_done') return 'Payment done';
    if (status === 'confirmed') return 'Confirmed';
    return 'Not confirmed';
  }

  getWarrantyModeLabel(booking: AlegriaBooking): string {
    const choice = this.getWarrantyChoice(booking);
    if (choice === 'cash_on_board') return 'Cash selected';
    if (choice === 'stripe_card') return 'Card selected';
    if (this.isWarrantyCardRegistered(booking)) return 'Card selected';
    return 'Not selected';
  }

  getWarrantyCardLabel(booking: AlegriaBooking): string {
    if (this.isWarrantyCardRegistered(booking)) return 'Completed';
    if (this.getWarrantyChoice(booking) === 'stripe_card') return 'Card selected, not registered';
    if (this.getWarrantyChoice(booking) === 'cash_on_board') return 'Not required';
    return 'Not registered';
  }

  getDamageStatusLabel(booking: AlegriaBooking): string {
    const anyBooking: any = booking;
    const amount = anyBooking.warrantyChargedAmount || anyBooking.warrantyCashDamageAmount || anyBooking?.payments?.warrantyCharge?.warrantyChargeAmount || anyBooking?.payments?.warrantyCashDamage?.amount || 0;
    if (anyBooking.damageReported === true || anyBooking.damageCharged === true || amount) {
      const euros = Number(amount) > 999 ? Math.round(Number(amount)) / 100 : Number(amount);
      return `Damage recorded${euros ? ` (€${euros})` : ''}`;
    }
    return this.isBalancePaid(booking) ? 'No damage recorded' : 'After full payment';
  }

  clearSearch(): void {
    this.searchTerm = '';
  }


  loadBookings(): void {
    this.loading = true;
    this.errorMessage = '';

    this.bookingApi.getBookings().subscribe({
      next: (bookings) => {
        this.bookings = (bookings || []).map((booking) => ({
          ...booking,
          displayFields: this.buildBookingFields(booking)
        }));
        this.loading = false;
      },
      error: () => {
        this.bookings = [];
        this.loading = false;
        this.errorMessage = 'Unable to load bookings from Firebase.';
      }
    });
  }

  openBooking(booking: AlegriaBooking): void {
    this.router.navigate(['/admin/bookings', booking.bookingId]);
  }

  getDepositAmount(booking: AlegriaBooking): number {
    const total = Number(booking.totalPrice || 0);
    return Number(booking.depositAmount || (total ? Math.round(total * 0.1 * 100) / 100 : 0));
  }

  getBalanceAmount(booking: AlegriaBooking): number {
    const total = Number(booking.totalPrice || 0);
    const deposit = this.getDepositAmount(booking);
    return Number((booking as any).balanceAmount || Math.max(0, Math.round((total - deposit) * 100) / 100));
  }


  isCompletedStatusValue(value: any): boolean {
    if (value === true) return true;
    const normalized = String(value || '').toLowerCase().trim();
    return [
      'true',
      'paid',
      'completed',
      'complete',
      'done',
      'confirmed',
      'charge_succeeded',
      'deposit_paid',
      'balance_paid',
      'payment_done',
      'full_payment_done',
      'card_registered',
      'warranty_card_saved',
      'warranty_card_registered',
      'warranty_charged',
      'cash_received'
    ].includes(normalized);
  }

  isBalanceCompletedStatusValue(value: any): boolean {
    if (value === true) return true;
    const normalized = String(value || '').toLowerCase().trim();
    return [
      'true',
      'paid',
      'completed',
      'complete',
      'done',
      'balance_paid',
      'remaining_paid',
      'payment_done',
      'full_payment_done'
    ].includes(normalized);
  }

  getCompletedLabel(done: boolean): string {
    return done ? 'Completed' : 'Pending';
  }

  isDepositPaid(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking || {};
    const depositPayment = anyBooking?.payments?.deposit || {};
    const legacyPayment = anyBooking?.payment || {};

    return this.isCompletedStatusValue(anyBooking.depositStatus) ||
      this.isCompletedStatusValue(anyBooking.depositPaid) ||
      this.isCompletedStatusValue(anyBooking.paymentStatus) ||
      this.isCompletedStatusValue(legacyPayment.depositStatus) ||
      this.isCompletedStatusValue(legacyPayment.depositPaid) ||
      this.isCompletedStatusValue(legacyPayment.paid) ||
      this.isCompletedStatusValue(legacyPayment.status) ||
      this.isCompletedStatusValue(depositPayment.depositStatus) ||
      this.isCompletedStatusValue(depositPayment.depositPaid) ||
      this.isCompletedStatusValue(depositPayment.paid) ||
      this.isCompletedStatusValue(depositPayment.status);
  }

  isBookingConfirmed(booking: AlegriaBooking): boolean {
    return this.isDepositPaid(booking) && this.isTermsAccepted(booking);
  }

  isWarrantyCardRegistered(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking || {};
    const warrantyPayment = anyBooking?.payments?.warranty || {};
    const legacyPayment = anyBooking?.payment || {};

    return this.isCompletedStatusValue(anyBooking.warrantyStatus) ||
      this.isCompletedStatusValue(anyBooking.warrantyRegistered) ||
      this.isCompletedStatusValue(legacyPayment.warrantyStatus) ||
      this.isCompletedStatusValue(legacyPayment.warrantyRegistered) ||
      this.isCompletedStatusValue(warrantyPayment.warrantyStatus) ||
      this.isCompletedStatusValue(warrantyPayment.warrantyRegistered) ||
      this.isCompletedStatusValue(warrantyPayment.status);
  }


  isWarrantySecured(booking: AlegriaBooking): boolean {
    return this.isWarrantyCardRegistered(booking) || this.getWarrantyChoice(booking) === 'cash_on_board';
  }

  getWarrantyChoice(booking: AlegriaBooking): string {
    const anyBooking: any = booking;
    const warrantyPayment = anyBooking?.payments?.warranty || {};
    if (anyBooking.warrantyPaymentChoice) return anyBooking.warrantyPaymentChoice;
    if (anyBooking.warrantyMethod === 'cash' || anyBooking.warrantyStatus === 'cash_selected' || anyBooking.warrantyCashSelected === true || warrantyPayment.method === 'cash') return 'cash_on_board';
    if (anyBooking.warrantyMethod === 'card' || this.isWarrantyCardRegistered(booking)) return 'stripe_card';
    return '';
  }

  canRecordBalancePayment(booking: AlegriaBooking): boolean {
    return false && !this.isBookingDatePastOrToday(booking) &&
      this.isBookingConfirmed(booking) &&
      this.isDepositPaid(booking) &&
      this.isWarrantySecured(booking) &&
      !this.isBalancePaid(booking);
  }

  getBalanceBlockedReason(booking: AlegriaBooking): string {
    if (this.isBalancePaid(booking)) return 'Remaining 90% already paid.';
    if (this.isBookingDatePastOrToday(booking)) return 'The outing date is today or already past. The remaining 90% cannot be collected and the booking is cancelled.';
    if (!this.isBookingConfirmed(booking)) return 'Booking must be confirmed first.';
    if (!this.isDepositPaid(booking)) return '10% deposit must be paid first.';
    if (!this.isWarrantySecured(booking)) return 'Warranty must be selected first (cash) or card must be registered.';
    return '';
  }

  isBalancePaid(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking || {};
    const balancePayment = anyBooking?.payments?.balance || {};
    const remainingPayment = anyBooking?.payments?.remaining || {};

    const topLevelPaymentStatus = String(anyBooking.paymentStatus || '').toLowerCase().trim();
    const topLevelMeansBalancePaid = anyBooking.paymentStatus === true || [
      'balance_paid',
      'remaining_paid',
      'full_payment_done',
      'balance_payment_done',
      'remaining_payment_done'
    ].includes(topLevelPaymentStatus);

    // Do not treat generic paymentStatus='paid' as the 90% balance.
    // In older bookings it only means the 10% deposit has been paid.
    return topLevelMeansBalancePaid ||
      this.isBalanceCompletedStatusValue(anyBooking.balancePaid) ||
      this.isBalanceCompletedStatusValue(anyBooking.balanceStatus) ||
      this.isBalanceCompletedStatusValue(anyBooking.balancePaymentStatus) ||
      this.isBalanceCompletedStatusValue(anyBooking.remainingPaid) ||
      this.isBalanceCompletedStatusValue(anyBooking.remainingStatus) ||
      this.isBalanceCompletedStatusValue(anyBooking.remainingPaymentStatus) ||
      this.isBalanceCompletedStatusValue(balancePayment.paid) ||
      this.isBalanceCompletedStatusValue(balancePayment.status) ||
      this.isBalanceCompletedStatusValue(balancePayment.paymentStatus) ||
      this.isBalanceCompletedStatusValue(remainingPayment.paid) ||
      this.isBalanceCompletedStatusValue(remainingPayment.status) ||
      this.isBalanceCompletedStatusValue(remainingPayment.paymentStatus);
  }

  openStatusModal(booking: BookingView, event?: Event): void {
    event?.stopPropagation();
    this.selectedStatusBooking = booking;
  }

  closeStatusModal(): void {
    this.selectedStatusBooking = null;
  }

  getStatusStepClass(done: boolean): string {
    return done ? 'done' : 'pending';
  }

  getStatusSummaryText(booking: BookingView): string {
    const status = this.getDerivedBookingStatus(booking);
    if (status === 'payment_done') return 'Booking confirmed, warranty secured and full payment recorded.';
    if (status === 'confirmed') return 'Booking confirmed. Warranty and/or remaining payment may still be pending.';
    return 'Booking not confirmed yet. Deposit and T&C acceptance are required.';
  }

  openBalancePayment(booking: BookingView, event?: Event): void {
    event?.stopPropagation();
    // Admin users do not open a remaining-balance payment modal.
  }

  closeBalancePayment(): void {
    this.selectedBalanceBooking = undefined;
    this.balancePaymentNotes = '';
  }

  async recordBalancePayment(): Promise<void> {
    // Admin users do not pay or record remaining 90% from the booking list.
    // Remaining balance must be paid by the customer through Stripe.
    return Promise.resolve();
  }

  openDetail(booking: BookingView): void {
    if (!booking?.bookingId) return;
    this.router.navigate(['/admin/bookings', booking.bookingId]);
  }

  payDeposit(booking: AlegriaBooking, event?: Event): void {
    event?.stopPropagation();
    return;

    if (!booking?.bookingId || this.isDepositPaid(booking)) return;

    const currentUrl = window.location.href;
    const payload = {
      bookingId: booking.bookingId,
      ownerId: booking.ownerId || 'alegria',
      depositAmount: this.getDepositAmount(booking),
      currency: 'eur',
      customerEmail: booking.email || '',
      customerName: booking.customerName || '',
      customerPhone: (booking as any).customerPhone || booking.phone || '',
      outingType: booking.outingType || '',
      outingDate: booking.outingDate || '',
      successUrl: currentUrl.includes('?') ? `${currentUrl}&payment=success` : `${currentUrl}?payment=success`,
      cancelUrl: currentUrl.includes('?') ? `${currentUrl}&payment=cancelled` : `${currentUrl}?payment=cancelled`,
    };

    this.bookingApi.createDepositCheckout(payload).subscribe({
      next: (response: any) => {
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) {
          window.location.href = url;
          return;
        }
        this.errorMessage = 'Unable to open Stripe deposit checkout.';
      },
      error: (error: any) => {
        this.errorMessage = error?.error?.error || error?.error?.message || error?.message || 'Unable to create deposit checkout.';
      }
    });
  }

  payment(booking: AlegriaBooking): void {
    this.router.navigate(['/payment', booking.bookingId], { queryParams: { mode: 'warranty' } });
  }

  trackByBookingId(index: number, booking: BookingView): string {
    return booking.bookingId || String(index);
  }

  trackByFieldKey(index: number, field: BookingFieldView): string {
    return field.key || String(index);
  }

  private normalizeSearch(value: any): string {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  private buildBookingFields(booking: AlegriaBooking): BookingFieldView[] {
    const raw = (booking as any).raw && typeof (booking as any).raw === 'object'
      ? { ...(booking as any).raw }
      : { ...(booking as any) };

    delete raw.raw;
    delete raw.displayFields;

    if (booking.bookingId && !raw.bookingId) {
      raw.bookingId = booking.bookingId;
    }

    const priority = [
      'bookingId',
      'bookingStatus',
      'customerName',
      'email',
      'phone',
      'outingType',
      'outingDate',
      'departureTime',
      'arrivalTime',
      'passengers',
      'totalPrice',
      'depositAmount',
      'depositStatus',
      'warrantyAmount',
      'warrantyStatus',
      'comments'
    ];

    const keys = Object.keys(raw || {});
    const orderedKeys = [
      ...priority.filter((key) => keys.includes(key)),
      ...keys.filter((key) => !priority.includes(key)).sort((a, b) => a.localeCompare(b))
    ];

    return orderedKeys.map((key) => ({ key, value: this.formatFieldValue(raw[key]) }));
  }

  private formatFieldValue(value: any): string {
    if (value === null || value === undefined || value === '') return '-';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (typeof value === 'number') return String(value);
    if (typeof value === 'string') return value;
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return String(value);
    }
  }
}
