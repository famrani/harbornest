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
    const anyBooking: any = booking;
    const warrantyPayment = anyBooking?.payments?.warranty || {};
    return anyBooking.warrantyRegistered === true ||
      anyBooking.warrantyStatus === 'card_registered' ||
      anyBooking.warrantyStatus === 'warranty_card_saved' ||
      warrantyPayment.warrantyRegistered === true ||
      warrantyPayment.status === 'card_registered' ||
      warrantyPayment.status === 'warranty_card_saved';
  }

  getWarrantyCardLabel(booking: AlegriaBooking): string {
    if (this.isWarrantyCardRegistered(booking)) return 'Stripe card registered';
    if (this.getWarrantyChoice(booking) === 'stripe_card') return 'Card selected, not registered';
    if (this.getWarrantyChoice(booking) === 'cash_on_board') return 'Not required';
    return 'Not registered';
  }

  isBalancePaid(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking;
    return anyBooking.balancePaid === true ||
      anyBooking.balanceStatus === 'paid' ||
      anyBooking.balancePaymentStatus === 'paid' ||
      anyBooking?.payments?.balance?.paid === true ||
      anyBooking?.payments?.balance?.status === 'paid';
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

  openBooking(booking: AlegriaBooking): void {
    this.router.navigate(['/bookings', booking.bookingId]);
  }

  payBooking(booking: AlegriaBooking): void {
    if (!this.shouldShowPaymentButton(booking)) return;

    const mode = this.canPayDeposit(booking) ? 'deposit' : 'balance';
    this.router.navigate(['/payment', booking.bookingId], { queryParams: { mode } });
  }
}
