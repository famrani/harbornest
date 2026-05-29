import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'godigital-lib';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {
  booking?: AlegriaBooking;
  loading = true;
  loggedUser: any = null;
  balancePaymentMethod = 'sumup';
  balancePaymentNotes = '';
  savingBalancePayment = false;
  balancePaymentMessage = '';
  balancePaymentError = '';
  cashDamageAmount: number | null = null;
  cashDamageReason = '';
  cashDamageMessage = '';
  cashDamageError = '';
  savingCashDamage = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingApi: BookingApiService,
    private mainSvc: ServicesService
  ) {}

  ngOnInit(): void {
    const svc = this.mainSvc as any;
    this.loggedUser = svc.bnUser || svc.currentUser || null;
    const bookingId = this.route.snapshot.paramMap.get('bookingId') || '';
    this.bookingApi.getBooking(bookingId).subscribe((booking) => {
      this.booking = booking;
      this.loading = false;
    });
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
  }

  getDepositAmount(): number {
    const total = Number(this.booking?.totalPrice || 0);
    return Number(this.booking?.depositAmount || (total ? Math.round(total * 0.1 * 100) / 100 : 0));
  }

  getBalanceAmount(): number {
    const total = Number(this.booking?.totalPrice || 0);
    const deposit = this.getDepositAmount();
    return Number((this.booking as any)?.balanceAmount || Math.max(0, Math.round((total - deposit) * 100) / 100));
  }

  isDepositPaid(): boolean {
    const anyBooking: any = this.booking || {};
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

  isBookingConfirmed(): boolean {
    const status = String((this.booking as any)?.bookingStatus || (this.booking as any)?.status || '').toLowerCase();
    return status === 'confirmed' || status === 'accepted' || status === 'paid';
  }

  isWarrantyCardRegistered(): boolean {
    const anyBooking: any = this.booking || {};
    const warrantyPayment = anyBooking?.payments?.warranty || {};

    return anyBooking.warrantyRegistered === true ||
      anyBooking.warrantyStatus === 'card_registered' ||
      anyBooking.warrantyStatus === 'warranty_card_saved' ||
      warrantyPayment.warrantyRegistered === true ||
      warrantyPayment.status === 'card_registered' ||
      warrantyPayment.status === 'warranty_card_saved';
  }


  isCashWarranty(): boolean {
    const anyBooking: any = this.booking || {};
    const warrantyPayment = anyBooking?.payments?.warranty || {};

    return anyBooking.warrantyMethod === 'cash' ||
      anyBooking.warrantyStatus === 'cash_received' ||
      anyBooking.warrantyCashReceived === true ||
      warrantyPayment.method === 'cash' ||
      warrantyPayment.cashReceived === true ||
      warrantyPayment.status === 'cash_received';
  }

  getCashWarrantyAmount(): number {
    const anyBooking: any = this.booking || {};
    const warrantyPayment = anyBooking?.payments?.warranty || {};
    return Number(anyBooking.warrantyCashAmount || warrantyPayment.amount || anyBooking.warrantyAmount || 500);
  }

  getCashWarrantyDamagesTaken(): number {
    const anyBooking: any = this.booking || {};
    const cashDamage = anyBooking?.payments?.warrantyCashDamage || {};
    return Number(anyBooking.warrantyCashDamageAmount || cashDamage.amount || 0);
  }

  getCashWarrantyRemaining(): number {
    return Math.max(0, this.getCashWarrantyAmount() - this.getCashWarrantyDamagesTaken());
  }

  isWarrantySecured(): boolean {
    const anyBooking: any = this.booking || {};
    const warrantyPayment = anyBooking?.payments?.warranty || {};

    return this.isWarrantyCardRegistered() ||
      anyBooking.warrantyMethod === 'cash' ||
      anyBooking.warrantyStatus === 'cash_received' ||
      anyBooking.warrantyCashReceived === true ||
      warrantyPayment.cashReceived === true;
  }

  canRecordBalancePayment(): boolean {
    return this.isBookingConfirmed() &&
      this.isDepositPaid() &&
      this.isWarrantySecured() &&
      !this.isBalancePaid();
  }

  getBalanceBlockedReason(): string {
    if (this.isBalancePaid()) return 'Remaining 90% already paid.';
    if (!this.isBookingConfirmed()) return 'Booking must be confirmed first.';
    if (!this.isDepositPaid()) return '10% deposit must be paid first.';
    if (!this.isWarrantySecured()) return 'Warranty must be secured first (Stripe card or €500 cash deposit).';
    return '';
  }

  isBalancePaid(): boolean {
    const anyBooking: any = this.booking || {};
    return anyBooking.balancePaid === true ||
      anyBooking.balanceStatus === 'paid' ||
      anyBooking.balancePaymentStatus === 'paid' ||
      anyBooking?.payments?.balance?.paid === true ||
      anyBooking?.payments?.balance?.status === 'paid';
  }

  async recordCashWarrantyDamage(): Promise<void> {
    if (!this.booking?.bookingId) return;

    const amount = Number(this.cashDamageAmount || 0);
    const reason = String(this.cashDamageReason || '').trim();

    this.cashDamageError = '';
    this.cashDamageMessage = '';

    if (!this.isCashWarranty()) {
      this.cashDamageError = 'Cash warranty is not registered for this booking.';
      return;
    }

    if (!amount || amount <= 0) {
      this.cashDamageError = 'Please enter a valid damage amount.';
      return;
    }

    if (amount > this.getCashWarrantyRemaining()) {
      this.cashDamageError = `Amount cannot exceed remaining cash warranty (€${this.getCashWarrantyRemaining()}).`;
      return;
    }

    if (!reason) {
      this.cashDamageError = 'Please describe the damage or cost.';
      return;
    }

    this.savingCashDamage = true;
    const now = Date.now();
    const existingPayments = (this.booking as any).payments || {};
    const previousDamage = this.getCashWarrantyDamagesTaken();
    const totalDamageTaken = Math.round((previousDamage + amount) * 100) / 100;
    const warrantyAmount = this.getCashWarrantyAmount();
    const remaining = Math.max(0, Math.round((warrantyAmount - totalDamageTaken) * 100) / 100);

    try {
      await this.bookingApi.updateBooking(this.booking.bookingId, {
        warrantyMethod: 'cash',
        warrantyStatus: remaining > 0 ? 'cash_partially_used' : 'cash_fully_used',
        warrantyCashReceived: true,
        warrantyCashAmount: warrantyAmount,
        warrantyCashDamageAmount: totalDamageTaken,
        warrantyCashRemainingAmount: remaining,
        warrantyCashDamageReason: reason,
        warrantyCashDamageRecordedAt: now,
        payments: {
          ...existingPayments,
          warranty: {
            ...(existingPayments.warranty || {}),
            method: 'cash',
            cashReceived: true,
            amount: warrantyAmount,
            status: remaining > 0 ? 'cash_partially_used' : 'cash_fully_used',
          },
          warrantyCashDamage: {
            amount: totalDamageTaken,
            lastAmount: amount,
            reason,
            remaining,
            recordedAt: now,
            status: 'recorded',
          }
        } as any,
      } as any);

      this.booking = {
        ...this.booking,
        warrantyMethod: 'cash',
        warrantyStatus: remaining > 0 ? 'cash_partially_used' : 'cash_fully_used',
        warrantyCashReceived: true,
        warrantyCashAmount: warrantyAmount,
        warrantyCashDamageAmount: totalDamageTaken,
        warrantyCashRemainingAmount: remaining,
        warrantyCashDamageReason: reason,
        warrantyCashDamageRecordedAt: now,
        payments: {
          ...existingPayments,
          warranty: {
            ...(existingPayments.warranty || {}),
            method: 'cash',
            cashReceived: true,
            amount: warrantyAmount,
            status: remaining > 0 ? 'cash_partially_used' : 'cash_fully_used',
          },
          warrantyCashDamage: {
            amount: totalDamageTaken,
            lastAmount: amount,
            reason,
            remaining,
            recordedAt: now,
            status: 'recorded',
          }
        }
      } as any;

      this.cashDamageAmount = null;
      this.cashDamageReason = '';
      this.cashDamageMessage = `Cash warranty damage recorded. Remaining cash to return: €${remaining}.`;
    } catch (e: any) {
      this.cashDamageError = e?.message || 'Unable to record cash warranty damage.';
    } finally {
      this.savingCashDamage = false;
    }
  }

  async markCashWarrantyReceived(): Promise<void> {
    if (!this.booking?.bookingId) return;

    this.balancePaymentError = '';
    this.balancePaymentMessage = '';

    const now = Date.now();
    const existingPayments = (this.booking as any).payments || {};

    try {
      await this.bookingApi.updateBooking(this.booking.bookingId, {
        warrantyMethod: 'cash',
        warrantyStatus: 'cash_received',
        warrantyCashReceived: true,
        warrantyCashAmount: 500,
        warrantyCashReceivedAt: now,
        payments: {
          ...existingPayments,
          warranty: {
            ...(existingPayments.warranty || {}),
            method: 'cash',
            status: 'cash_received',
            cashReceived: true,
            amount: 500,
            receivedAt: now,
          }
        } as any,
      } as any);

      this.booking = {
        ...this.booking,
        warrantyMethod: 'cash',
        warrantyStatus: 'cash_received',
        warrantyCashReceived: true,
        warrantyCashAmount: 500,
        warrantyCashReceivedAt: now,
        payments: {
          ...existingPayments,
          warranty: {
            ...(existingPayments.warranty || {}),
            method: 'cash',
            status: 'cash_received',
            cashReceived: true,
            amount: 500,
            receivedAt: now,
          }
        }
      } as any;

      this.balancePaymentMessage = 'Cash warranty received and recorded.';
    } catch (e: any) {
      this.balancePaymentError = e?.message || 'Unable to record cash warranty.';
    }
  }

  async recordBalancePayment(): Promise<void> {
    if (!this.booking?.bookingId) return;

    if (!this.canRecordBalancePayment()) {
      this.balancePaymentError = this.getBalanceBlockedReason();
      return;
    }

    this.savingBalancePayment = true;
    this.balancePaymentError = '';
    this.balancePaymentMessage = '';

    const now = Date.now();
    const balanceAmount = this.getBalanceAmount();
    const existingPayments = (this.booking as any).payments || {};

    try {
      await this.bookingApi.updateBooking(this.booking.bookingId, {
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
      this.booking = {
        ...this.booking,
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
        }
      } as any;
    } catch (e: any) {
      this.balancePaymentError = e?.message || 'Unable to record remaining balance payment.';
    }

    this.savingBalancePayment = false;
  }

  get paymentButtonLabel(): string {
    return this.isAdmin ? 'Open warranty / damage page' : 'Open payment page';
  }

  goToPayment(): void {
    if (this.booking?.bookingId) {
      this.router.navigate(['/payment', this.booking.bookingId], {
        queryParams: this.isAdmin ? { mode: 'warranty' } : {}
      });
    }
  }
}
