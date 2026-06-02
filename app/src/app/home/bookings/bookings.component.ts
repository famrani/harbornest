import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'godigital-lib';
import { BookingApiService, AlegriaBooking } from './booking-api.service';

interface BookingFieldView {
  key: string;
  value: string;
}

type BookingView = AlegriaBooking & { displayFields: BookingFieldView[] };

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookings: BookingView[] = [];
  loading = true;
  errorMessage = '';
  searchTerm = '';
  activeDateTab: 'upcoming' | 'past' = 'upcoming';
  statusFilter = 'all';
  warrantyFilter = 'all';
  sortField: 'date' | 'customer' | 'status' | 'total' | 'balance' = 'date';
  sortDirection: 'asc' | 'desc' = 'asc';
  selectedBalanceBooking?: BookingView;
  balancePaymentMethod = 'sumup';
  balancePaymentNotes = '';
  savingBalancePayment = false;
  balancePaymentMessage = '';
  balancePaymentError = '';

  loggedUser: any = null;

  constructor(
    private bookingApi: BookingApiService,
    private router: Router,
    private mainSvc: ServicesService
  ) {}

  ngOnInit(): void {
    const svc = this.mainSvc as any;
    this.loggedUser = svc.bnUser || svc.currentUser || null;
    if (!this.isAdmin) {
      this.router.navigate(['/my-bookings']);
      return;
    }
    this.loadBookings();
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
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

  resetFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.warrantyFilter = 'all';
    this.sortField = 'date';
    this.sortDirection = this.activeDateTab === 'past' ? 'desc' : 'asc';
  }

  isTermsAccepted(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking;
    return anyBooking.termsAccepted === true ||
      anyBooking.tcAccepted === true ||
      anyBooking.tAndCAccepted === true ||
      anyBooking.termsAndConditionsAccepted === true ||
      anyBooking.acceptedTerms === true ||
      anyBooking.termsStatus === 'accepted' ||
      anyBooking.tcStatus === 'accepted' ||
      anyBooking?.documents?.termsAccepted === true ||
      anyBooking?.terms?.accepted === true;
  }

  getDerivedBookingStatus(booking: AlegriaBooking): string {
    if (this.isBalancePaid(booking)) return 'payment_done';
    if (this.isDepositPaid(booking) && this.isTermsAccepted(booking)) return 'confirmed';
    return 'not_confirmed';
  }

  getStatusLabel(booking: AlegriaBooking): string {
    const status = this.getDerivedBookingStatus(booking);
    if (status === 'payment_done') return 'Payment done';
    if (status === 'confirmed') return 'Confirmed';
    return 'Not confirmed';
  }

  getWarrantyModeLabel(booking: AlegriaBooking): string {
    const choice = this.getWarrantyChoice(booking);
    if (choice === 'cash_on_board') return 'Cash selected';
    if (choice === 'stripe_card') return 'Card selected';
    return 'Not selected';
  }

  getWarrantyCardLabel(booking: AlegriaBooking): string {
    if (this.isWarrantyCardRegistered(booking)) return 'Stripe card registered';
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

  isDepositPaid(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking;
    const depositPayment = anyBooking?.payments?.deposit || {};
    const legacyPayment = anyBooking?.payment || {};

    return anyBooking.depositPaid === true ||
      anyBooking.depositStatus === 'paid' ||
      anyBooking.depositStatus === 'deposit_paid' ||
      anyBooking.paymentStatus === 'paid' ||
      anyBooking.paymentStatus === 'charge_succeeded' ||
      legacyPayment.depositPaid === true ||
      legacyPayment.paid === true ||
      legacyPayment.status === 'paid' ||
      legacyPayment.status === 'deposit_paid' ||
      depositPayment.depositPaid === true ||
      depositPayment.paid === true ||
      depositPayment.status === 'paid' ||
      depositPayment.status === 'deposit_paid';
  }

  isBookingConfirmed(booking: AlegriaBooking): boolean {
    return this.isDepositPaid(booking) && this.isTermsAccepted(booking);
  }

  isWarrantyCardRegistered(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking;
    const warrantyPayment = anyBooking?.payments?.warranty || {};

    return anyBooking.warrantyRegistered === true ||
      anyBooking.warrantyStatus === 'card_registered' ||
      anyBooking.warrantyStatus === 'warranty_card_saved' ||
      warrantyPayment.warrantyRegistered === true ||
      warrantyPayment.status === 'card_registered' ||
      warrantyPayment.status === 'warranty_card_saved';
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
    return this.isBookingConfirmed(booking) &&
      this.isDepositPaid(booking) &&
      this.isWarrantySecured(booking) &&
      !this.isBalancePaid(booking);
  }

  getBalanceBlockedReason(booking: AlegriaBooking): string {
    if (this.isBalancePaid(booking)) return 'Remaining 90% already paid.';
    if (!this.isBookingConfirmed(booking)) return 'Booking must be confirmed first.';
    if (!this.isDepositPaid(booking)) return '10% deposit must be paid first.';
    if (!this.isWarrantySecured(booking)) return 'Warranty must be selected first (cash) or card must be registered.';
    return '';
  }

  isBalancePaid(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking;
    return anyBooking.balancePaid === true ||
      anyBooking.balanceStatus === 'paid' ||
      anyBooking.balancePaymentStatus === 'paid' ||
      anyBooking?.payments?.balance?.paid === true ||
      anyBooking?.payments?.balance?.status === 'paid';
  }

  openBalancePayment(booking: BookingView, event?: Event): void {
    event?.stopPropagation();
    this.selectedBalanceBooking = booking;
    this.balancePaymentMethod = 'sumup';
    this.balancePaymentNotes = '';
    this.balancePaymentMessage = '';
    this.balancePaymentError = '';
  }

  closeBalancePayment(): void {
    this.selectedBalanceBooking = undefined;
    this.balancePaymentNotes = '';
  }

  async recordBalancePayment(): Promise<void> {
    if (!this.selectedBalanceBooking?.bookingId) return;

    if (!this.canRecordBalancePayment(this.selectedBalanceBooking)) {
      this.balancePaymentError = this.getBalanceBlockedReason(this.selectedBalanceBooking);
      return;
    }

    this.savingBalancePayment = true;
    this.balancePaymentError = '';
    this.balancePaymentMessage = '';

    const now = Date.now();
    const balanceAmount = this.getBalanceAmount(this.selectedBalanceBooking);
    const existingPayments = (this.selectedBalanceBooking as any).payments || {};

    try {
      await this.bookingApi.updateBooking(this.selectedBalanceBooking.bookingId, {
        balancePaid: true,
        balanceAmount,
        balancePaymentMethod: this.balancePaymentMethod,
        balancePaidAt: now,
        bookingStatus: 'payment_done',
        paymentStatus: 'full_payment_done',
        paidAt: now,
        payments: {
          ...existingPayments,
          balance: {
            paid: true,
            status: 'paid',
            amount: balanceAmount,
            method: this.balancePaymentMethod,
            notes: this.balancePaymentNotes || '',
            paidAt: now,
          }
        } as any,
      } as any);

      this.balancePaymentMessage = 'Remaining 90% payment recorded.';
      this.savingBalancePayment = false;
      this.closeBalancePayment();
      this.loadBookings();
    } catch (e: any) {
      this.balancePaymentError = e?.message || 'Unable to record remaining balance payment.';
      this.savingBalancePayment = false;
    }
  }

  payDeposit(booking: AlegriaBooking, event?: Event): void {
    event?.stopPropagation();

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
