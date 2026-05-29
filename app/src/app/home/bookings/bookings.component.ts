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
    if (!term) return this.bookings;

    return this.bookings.filter((booking) => {
      const customerName = this.normalizeSearch(booking.customerName);
      const email = this.normalizeSearch(booking.email);
      const phone = this.normalizeSearch(booking.phone);
      return customerName.includes(term) || email.includes(term) || phone.includes(term);
    });
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
    const status = String((booking as any).bookingStatus || (booking as any).status || '').toLowerCase();
    return status === 'confirmed' || status === 'accepted' || status === 'paid';
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
    const anyBooking: any = booking;
    const warrantyPayment = anyBooking?.payments?.warranty || {};

    return this.isWarrantyCardRegistered(booking) ||
      anyBooking.warrantyMethod === 'cash' ||
      anyBooking.warrantyStatus === 'cash_received' ||
      anyBooking.warrantyCashReceived === true ||
      warrantyPayment.cashReceived === true;
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
    if (!this.isWarrantySecured(booking)) return 'Warranty must be secured first (Stripe card or €500 cash deposit).';
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
