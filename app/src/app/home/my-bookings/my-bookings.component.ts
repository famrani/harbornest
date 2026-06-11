import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from 'godigital-lib';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit, OnDestroy {
  bookings: AlegriaBooking[] = [];
  loading = true;
  searchTerm = '';
  activeDateTab: 'upcoming' | 'past' = 'upcoming';
  statusFilter = 'all';
  warrantyFilter = 'all';
  sortField: 'date' | 'customer' | 'status' | 'total' | 'balance' = 'date';
  sortDirection: 'asc' | 'desc' = 'asc';
  loggedUser: any = null;
  selectedStatusBooking: AlegriaBooking | null = null;
  private userSub?: Subscription;

  constructor(
    private bookingApi: BookingApiService,
    private mainSvc: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const svc = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || svc.bnUser || svc.currentUser || null;
        this.loadForCurrentMode();
      });
    } else {
      this.loggedUser = svc.bnUser || svc.currentUser || null;
      this.loadForCurrentMode();
    }
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
  }

  private loadForCurrentMode(): void {
    if (this.isAdmin) {
      this.router.navigate(['/admin/bookings']);
      return;
    }

    const email = this.loggedUser?.email || '';
    this.bookingApi.getBookings(email).subscribe((bookings) => {
      this.bookings = bookings;
      this.loading = false;
    });
  }

  get filteredBookings(): AlegriaBooking[] {
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

  setDateTab(tab: 'upcoming' | 'past'): void {
    this.activeDateTab = tab;
    if (this.sortField === 'date') {
      this.sortDirection = tab === 'past' ? 'desc' : 'asc';
    }
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.warrantyFilter = 'all';
    this.sortField = 'date';
    this.sortDirection = this.activeDateTab === 'past' ? 'desc' : 'asc';
  }

  normalizeSearch(value: any): string {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
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

  sortBookings(bookings: AlegriaBooking[]): AlegriaBooking[] {
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

  isCancelledBooking(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking || {};
    const rawStatus = anyBooking.bookingStatus ?? anyBooking.status;
    return rawStatus === false ||
      rawStatus === 'false' ||
      rawStatus === 'cancelled' ||
      rawStatus === 'canceled' ||
      rawStatus === 'deleted' ||
      anyBooking.cancelled === true ||
      anyBooking.canceled === true;
  }

  getDerivedBookingStatus(booking: AlegriaBooking): string {
    const anyBooking: any = booking || {};
    const rawStatus = anyBooking.bookingStatus ?? anyBooking.status;

    if (this.isCancelledBooking(booking)) return 'cancelled';

    // Remaining 90% has its own status. A top-level paymentStatus === true means the remaining payment is completed.
    if (this.isBalancePaid(booking)) return 'payment_done';

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

  getWarrantyChoice(booking: AlegriaBooking): string {
    const anyBooking: any = booking;
    const warrantyPayment = anyBooking?.payments?.warranty || {};
    if (anyBooking.warrantyPaymentChoice) return anyBooking.warrantyPaymentChoice;
    if (anyBooking.warrantyMethod === 'cash' || anyBooking.warrantyStatus === 'cash_selected' || anyBooking.warrantyCashSelected === true || warrantyPayment.method === 'cash') return 'cash_on_board';
    if (anyBooking.warrantyMethod === 'card' || anyBooking.warrantyMethod === 'stripe_card' || this.isWarrantyCardRegistered(booking) || warrantyPayment.method === 'card') return 'stripe_card';
    return '';
  }

  getWarrantyModeLabel(booking: AlegriaBooking): string {
    const choice = this.getWarrantyChoice(booking);
    if (choice === 'cash_on_board') return 'Cash selected';
    if (choice === 'stripe_card') return 'Card selected';
    return 'Not selected';
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

  getWarrantyCardLabel(booking: AlegriaBooking): string {
    if (this.isWarrantyCardRegistered(booking)) return 'Completed';
    if (this.getWarrantyChoice(booking) === 'stripe_card') return 'Card selected, not registered';
    if (this.getWarrantyChoice(booking) === 'cash_on_board') return 'Not required';
    return 'Not registered';
  }

  isBalancePaid(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking || {};
    const balancePayment = anyBooking?.payments?.balance || {};
    const remainingPayment = anyBooking?.payments?.remaining || {};

    return this.isBalanceCompletedStatusValue(anyBooking.paymentStatus) ||
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

  getDepositAmount(booking: AlegriaBooking): number {
    const total = Number(booking.totalPrice || 0);
    return Number(booking.depositAmount || (total ? Math.round(total * 0.1 * 100) / 100 : 0));
  }

  getBalanceAmount(booking: AlegriaBooking): number {
    const total = Number(booking.totalPrice || 0);
    return Number((booking as any).balanceAmount || Math.max(0, Math.round((total - this.getDepositAmount(booking)) * 100) / 100));
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

  getDepositLabel(booking: AlegriaBooking): string {
    return this.isDepositPaid(booking) ? 'Acompte payé' : 'Acompte à payer';
  }

  isWarrantySecured(booking: AlegriaBooking): boolean {
    return this.isWarrantyCardRegistered(booking) || this.getWarrantyChoice(booking) === 'cash_on_board';
  }

  canPayDeposit(booking: AlegriaBooking): boolean {
    return !this.isDepositPaid(booking);
  }

  canPayBalance(booking: AlegriaBooking): boolean {
    return this.isDepositPaid(booking) &&
      this.isTermsAccepted(booking) &&
      this.isWarrantySecured(booking) &&
      !this.isBalancePaid(booking);
  }

  shouldShowPaymentButton(booking: AlegriaBooking): boolean {
    return this.canPayDeposit(booking) || this.canPayBalance(booking);
  }

  getPaymentButtonLabel(booking: AlegriaBooking): string {
    if (this.canPayDeposit(booking)) return 'Pay 10% deposit';
    if (this.canPayBalance(booking)) return `Pay remaining 90% (€${this.getBalanceAmount(booking)})`;
    return 'Payment';
  }

  openStatusModal(booking: AlegriaBooking, event?: Event): void {
    event?.stopPropagation();
    this.selectedStatusBooking = booking;
  }

  closeStatusModal(): void {
    this.selectedStatusBooking = null;
  }

  getStatusStepClass(done: boolean): string {
    return done ? 'done' : 'pending';
  }

  getStatusSummaryText(booking: AlegriaBooking): string {
    const status = this.getDerivedBookingStatus(booking);
    if (status === 'payment_done') return 'Booking confirmed, warranty secured and full payment recorded.';
    if (status === 'confirmed') return 'Booking confirmed. Warranty and/or remaining payment may still be pending.';
    return 'Booking not confirmed yet. Deposit and T&C acceptance are required.';
  }

  getDamageStatusLabel(booking: AlegriaBooking): string {
    const anyBooking: any = booking;
    const amount = anyBooking.warrantyChargedAmount || anyBooking.warrantyCashDamageAmount || anyBooking?.payments?.warrantyCharge?.warrantyChargeAmount || anyBooking?.payments?.warrantyCashDamage?.amount || 0;
    if (anyBooking.damageReported === true || anyBooking.damageCharged === true || amount) {
      const euros = Number(amount) > 999 ? Math.round(Number(amount)) / 100 : Number(amount);
      return `Damage recorded${euros ? ` (€${euros})` : ''}`;
    }
    return this.isBalancePaid(booking) ? 'No damage recorded' : 'Available after full payment';
  }

  openBooking(booking: AlegriaBooking): void {
    this.router.navigate(['/bookings', booking.bookingId]);
  }

  payBooking(booking: AlegriaBooking): void {
    if (!this.shouldShowPaymentButton(booking)) return;

    const mode = this.canPayDeposit(booking) ? 'deposit' : 'balance';
    this.router.navigate(['/payment', booking.bookingId], { queryParams: { mode } });
  }
}
