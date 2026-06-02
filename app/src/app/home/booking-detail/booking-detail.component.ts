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
  termsRead = false;
  termsAccepted = false;
  warrantyChoice = '';
  warrantySaving = false;
  warrantyMessage = '';
  warrantyError = '';
  cardDamageAmount: number | null = null;
  cardDamageReason = '';
  cardDamageMessage = '';
  cardDamageError = '';
  savingCardDamage = false;
  editMode = false;
  savingCustomerUpdate = false;
  customerUpdateMessage = '';
  customerUpdateError = '';

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
    this.editMode = this.route.snapshot.queryParamMap.get('edit') === 'true';
    this.bookingApi.getBooking(bookingId).subscribe((booking) => {
      this.booking = booking;
      this.termsAccepted = this.isTermsAccepted();
      this.warrantyChoice = this.getWarrantyChoice();
      this.loading = false;
      this.syncConfirmedStatusIfReady();
    });
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
  }

  getDerivedBookingStatus(): string {
    if (this.isBalancePaid()) return 'payment_done';
    if (this.isDepositPaid() && this.isTermsAccepted()) return 'confirmed';
    return 'not_confirmed';
  }

  getStatusLabel(): string {
    const status = this.getDerivedBookingStatus();
    if (status === 'payment_done') return 'Payment done';
    if (status === 'confirmed') return 'Confirmed';
    return 'Not confirmed';
  }

  getDepositStatusLabel(): string {
    return this.isDepositPaid() ? `Paid (€${this.getDepositAmount()})` : `Pending (€${this.getDepositAmount()})`;
  }

  getTermsStatusLabel(): string {
    const b: any = this.booking || {};
    if (this.isTermsAccepted()) {
      return b.termsAcceptedAt ? `Accepted (${new Date(Number(b.termsAcceptedAt)).toLocaleString()})` : 'Accepted';
    }
    return 'Not accepted';
  }

  getWarrantyModeLabel(): string {
    const choice = this.getWarrantyChoice();
    if (choice === 'cash_on_board') return 'Cash €500 selected';
    if (choice === 'stripe_card') return 'Stripe card selected';
    return 'Not selected';
  }

  getWarrantyCardLabel(): string {
    if (this.isWarrantyCardRegistered()) return 'Registered in Stripe';
    if (this.getWarrantyChoice() === 'stripe_card') return 'Selected, card not registered yet';
    if (this.getWarrantyChoice() === 'cash_on_board') return 'Not required — cash warranty selected';
    return 'Not registered';
  }

  getBalanceStatusLabel(): string {
    return this.isBalancePaid() ? `Paid (€${this.getBalanceAmount()})` : `Pending (€${this.getBalanceAmount()})`;
  }

  getDamageStatusLabel(): string {
    const b: any = this.booking || {};
    const amount = b.warrantyChargedAmount || b.warrantyCashDamageAmount || b?.payments?.warrantyCharge?.warrantyChargeAmount || b?.payments?.warrantyCashDamage?.amount || 0;
    if (b.damageReported === true || b.damageCharged === true || amount) {
      const euros = Number(amount) > 999 ? Math.round(Number(amount)) / 100 : Number(amount);
      return `Damage recorded${euros ? ` (€${euros})` : ''}`;
    }
    return this.isBalancePaid() ? 'No damage recorded yet' : 'Available after full payment';
  }

  canOpenDamageManagement(): boolean {
    return this.getDerivedBookingStatus() === 'payment_done';
  }

  getBookingWorkflowState(): string {
    if (!this.isDepositPaid() || !this.isTermsAccepted()) return 'deposit_required';
    if (!this.isWarrantySelected()) return 'warranty_choice_required';
    if (this.getWarrantyChoice() === 'stripe_card' && !this.isWarrantyCardRegistered()) return 'warranty_card_required';
    if (!this.isBalancePaid()) return 'balance_required';
    return 'payment_done';
  }

  getWorkflowTitle(): string {
    const state = this.getBookingWorkflowState();
    if (state === 'deposit_required') return '1. Confirm booking: T&C, warranty choice and 10% deposit';
    if (state === 'warranty_choice_required') return '2. Select warranty method';
    if (state === 'warranty_card_required') return '2. Register warranty card';
    if (state === 'balance_required') return '3. Pay remaining 90%';
    return '4. Payment done — damage management';
  }

  isTermsAccepted(): boolean {
    const b: any = this.booking || {};
    return this.termsAccepted === true ||
      b.termsAccepted === true ||
      b.tcAccepted === true ||
      b.tAndCAccepted === true ||
      b.termsAndConditionsAccepted === true ||
      b.acceptedTerms === true ||
      b.termsStatus === 'accepted' ||
      b.tcStatus === 'accepted' ||
      b?.documents?.termsAccepted === true ||
      b?.terms?.accepted === true;
  }

  getWarrantyChoice(): string {
    const b: any = this.booking || {};
    const w = b?.payments?.warranty || {};
    if (b.warrantyPaymentChoice) return b.warrantyPaymentChoice;
    if (b.warrantyMethod === 'cash' || b.warrantyStatus === 'cash_selected' || b.warrantyCashSelected === true) return 'cash_on_board';
    if (b.warrantyMethod === 'card' || b.warrantyMethod === 'stripe_card' || this.isWarrantyCardRegistered() || w.method === 'card') return 'stripe_card';
    return '';
  }

  isWarrantySelected(): boolean {
    return this.getWarrantyChoice() === 'cash_on_board' || this.getWarrantyChoice() === 'stripe_card' || this.isWarrantyCardRegistered();
  }

  canPayDeposit(): boolean {
    return !!this.booking?.bookingId &&
      !this.isDepositPaid() &&
      this.termsRead &&
      this.termsAccepted &&
      !!this.warrantyChoice;
  }

  getDepositBlockedReason(): string {
    if (this.isDepositPaid()) return 'Deposit already paid.';
    if (!this.termsRead) return 'Please read the Terms & Conditions to the end first.';
    if (!this.termsAccepted) return 'Please accept the Terms & Conditions first.';
    if (!this.warrantyChoice) return 'Please select a warranty method first.';
    return '';
  }

  onTermsScroll(event: Event): void {
    const el = event.target as HTMLElement;
    if (!el) return;
    const reachedBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 12;
    if (reachedBottom) this.termsRead = true;
  }

  async saveTermsAndWarrantyChoice(status = 'awaiting_deposit'): Promise<void> {
    if (!this.booking?.bookingId) return;

    const now = Date.now();
    const existingPayments = (this.booking as any).payments || {};
    const warrantyChoice = this.warrantyChoice || this.getWarrantyChoice();

    const payload: any = {
      termsAccepted: this.termsAccepted,
      tcAccepted: this.termsAccepted,
      tAndCAccepted: this.termsAccepted,
      termsAndConditionsAccepted: this.termsAccepted,
      acceptedTerms: this.termsAccepted,
      termsAcceptedAt: this.termsAccepted ? now : null,
      termsStatus: this.termsAccepted ? 'accepted' : 'pending',
      tcStatus: this.termsAccepted ? 'accepted' : 'pending',
      warrantyPaymentChoice: warrantyChoice,
      warrantySelected: !!warrantyChoice,
      warrantySelectedAt: warrantyChoice ? now : null,
      bookingStatus: this.isBookingConfirmed() ? ((this.booking as any).bookingStatus || 'confirmed') : status,
      payments: {
        ...existingPayments,
        warranty: {
          ...(existingPayments.warranty || {}),
          method: warrantyChoice === 'cash_on_board' ? 'cash' : (warrantyChoice === 'stripe_card' ? 'card' : ''),
          status: warrantyChoice === 'cash_on_board' ? 'cash_selected' : (warrantyChoice === 'stripe_card' ? 'card_selected' : 'not_selected'),
          selectedAt: warrantyChoice ? now : null,
        }
      } as any,
    };

    if (warrantyChoice === 'cash_on_board') {
      payload.warrantyMethod = 'cash';
      payload.warrantyStatus = 'cash_selected';
      payload.warrantyCashSelected = true;
      payload.warrantyAmount = (this.booking as any).warrantyAmount || 500;
    }

    if (warrantyChoice === 'stripe_card') {
      payload.warrantyMethod = 'card';
      payload.warrantyStatus = this.isWarrantyCardRegistered() ? 'card_registered' : 'card_selected';
    }

    await this.bookingApi.updateBooking(this.booking.bookingId, payload);
    this.booking = { ...this.booking, ...payload } as any;
    await this.syncConfirmedStatusIfReady();
  }

  async selectWarrantyCash(): Promise<void> {
    this.warrantyChoice = 'cash_on_board';
    this.warrantySaving = true;
    this.warrantyError = '';
    this.warrantyMessage = '';
    try {
      await this.saveTermsAndWarrantyChoice(this.isBookingConfirmed() ? 'confirmed' : 'awaiting_deposit');
      this.warrantyMessage = 'Cash warranty selected. The €500 cash envelope will be handled before departure.';
    } catch (e: any) {
      this.warrantyError = e?.message || 'Unable to save warranty choice.';
    }
    this.warrantySaving = false;
  }

  async selectWarrantyCard(): Promise<void> {
    this.warrantyChoice = 'stripe_card';
    this.warrantySaving = true;
    this.warrantyError = '';
    this.warrantyMessage = '';
    try {
      await this.saveTermsAndWarrantyChoice(this.isBookingConfirmed() ? 'confirmed' : 'awaiting_deposit');
      this.warrantyMessage = 'Card warranty selected. You can now register the card with Stripe.';
    } catch (e: any) {
      this.warrantyError = e?.message || 'Unable to save warranty choice.';
    }
    this.warrantySaving = false;
  }

  async syncConfirmedStatusIfReady(): Promise<void> {
    if (!this.booking?.bookingId) return;
    if (!this.isDepositPaid() || !this.isTermsAccepted()) return;

    const currentStatus = String((this.booking as any).bookingStatus || '').toLowerCase();
    if (currentStatus === 'confirmed' || currentStatus === 'payment_done') return;

    const now = Date.now();
    const payload: any = {
      bookingStatus: 'confirmed',
      paymentStatus: 'deposit_paid',
      confirmedAt: (this.booking as any).confirmedAt || now,
      modifiedTS: now,
    };

    try {
      await this.bookingApi.updateBooking(this.booking.bookingId, payload);
      this.booking = {
        ...this.booking,
        ...payload,
      } as any;
    } catch {
      // UI still derives the correct status from deposit + T&C even if Firebase update is delayed.
    }
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
    return this.isDepositPaid() && this.isTermsAccepted();
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
    return this.isWarrantyCardRegistered() || this.getWarrantyChoice() === 'cash_on_board';
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
    if (!this.isWarrantySecured()) return 'Warranty must be selected first (cash) or card must be registered.';
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

  async payDeposit(): Promise<void> {
    if (!this.booking?.bookingId || this.isDepositPaid()) return;
    if (!this.canPayDeposit()) {
      this.balancePaymentError = this.getDepositBlockedReason();
      return;
    }

    await this.saveTermsAndWarrantyChoice('awaiting_deposit');

    const currentUrl = window.location.href;
    const depositAmount = this.getDepositAmount();
    const payload = {
      bookingId: this.booking.bookingId,
      proposalId: this.booking.bookingId,
      ownerId: this.booking.ownerId || 'alegria',
      amount: depositAmount,
      depositAmount,
      totalAmount: Number(this.booking.totalPrice || 0),
      currency: 'eur',
      paymentType: 'deposit',
      customerEmail: this.booking.email || '',
      customerName: this.booking.customerName || '',
      customerPhone: (this.booking as any).customerPhone || this.booking.phone || '',
      outingType: this.booking.outingType || '',
      outingDate: this.booking.outingDate || '',
      successUrl: currentUrl.includes('?') ? `${currentUrl}&payment=success&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=deposit` : `${currentUrl}?payment=success&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=deposit`,
      cancelUrl: currentUrl.includes('?') ? `${currentUrl}&payment=cancelled&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=deposit` : `${currentUrl}?payment=cancelled&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=deposit`,
    };

    this.bookingApi.createDepositCheckout(payload).subscribe({
      next: (response: any) => {
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) {
          window.location.href = url;
          return;
        }
        this.balancePaymentError = 'Unable to open Stripe deposit checkout.';
      },
      error: (error: any) => {
        this.balancePaymentError = error?.error?.error || error?.error?.message || error?.message || 'Unable to create deposit checkout.';
      }
    });
  }

  async registerWarrantyCard(): Promise<void> {
    if (!this.booking?.bookingId) return;
    this.balancePaymentError = '';
    this.balancePaymentMessage = '';

    if (this.getWarrantyChoice() !== 'stripe_card') {
      await this.selectWarrantyCard();
    }

    const currentUrl = window.location.href;
    const warrantyAmount = Number((this.booking as any).warrantyAmount || 500);
    const payload = {
      bookingId: this.booking.bookingId,
      ownerId: this.booking.ownerId || 'alegria',
      warrantyAmount,
      currency: 'eur',
      customerEmail: this.booking.email || '',
      customerName: this.booking.customerName || '',
      customerPhone: (this.booking as any).customerPhone || this.booking.phone || '',
      outingType: this.booking.outingType || '',
      outingDate: this.booking.outingDate || '',
      successUrl: currentUrl.includes('?') ? `${currentUrl}&payment=success&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=warranty` : `${currentUrl}?payment=success&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=warranty`,
      cancelUrl: currentUrl.includes('?') ? `${currentUrl}&payment=cancelled&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=warranty` : `${currentUrl}?payment=cancelled&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=warranty`,
    };

    this.bookingApi.createWarrantySetup(payload).subscribe({
      next: (response: any) => {
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) {
          window.location.href = url;
          return;
        }
        this.balancePaymentError = 'Unable to open Stripe warranty setup.';
      },
      error: (error: any) => {
        this.balancePaymentError = error?.error?.error || error?.error?.message || error?.message || 'Unable to create warranty setup.';
      }
    });
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

  async recordCardWarrantyDamage(): Promise<void> {
    if (!this.booking?.bookingId) return;
    const amount = Number(this.cardDamageAmount || 0);
    const reason = String(this.cardDamageReason || '').trim();

    this.cardDamageError = '';
    this.cardDamageMessage = '';

    if (!this.isWarrantyCardRegistered()) {
      this.cardDamageError = 'No registered warranty card for this booking.';
      return;
    }

    if (!amount || amount <= 0) {
      this.cardDamageError = 'Please enter a valid damage amount.';
      return;
    }

    const maxWarranty = Number((this.booking as any).warrantyAmount || 500);
    if (amount > maxWarranty) {
      this.cardDamageError = `Amount cannot exceed warranty maximum (€${maxWarranty}).`;
      return;
    }

    if (!reason) {
      this.cardDamageError = 'Please describe the damage.';
      return;
    }

    this.savingCardDamage = true;
    this.bookingApi.chargeWarranty(this.booking.bookingId, amount, reason, this.booking.ownerId || 'alegria').subscribe({
      next: async () => {
        this.cardDamageMessage = 'Damage charged successfully to the registered card.';
        this.cardDamageAmount = null;
        this.cardDamageReason = '';
        this.savingCardDamage = false;
        const now = Date.now();
        this.booking = {
          ...this.booking,
          damageReported: true,
          damageCharged: true,
          warrantyStatus: 'charged',
          warrantyChargedAmount: amount,
          warrantyChargeReason: reason,
          warrantyChargeRecordedAt: now,
        } as any;
      },
      error: (error: any) => {
        this.cardDamageError = error?.error?.error || error?.error?.message || error?.message || 'Unable to charge warranty card.';
        this.savingCardDamage = false;
      }
    });
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
      this.booking = {
        ...this.booking,
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
        }
      } as any;
    } catch (e: any) {
      this.balancePaymentError = e?.message || 'Unable to record remaining balance payment.';
    }

    this.savingBalancePayment = false;
  }

  canCustomerUpdateBooking(): boolean {
    return !this.isAdmin && !!this.booking?.bookingId && this.getDerivedBookingStatus() !== 'payment_done';
  }

  canCustomerPayDeposit(): boolean {
    return !this.isAdmin && this.getBookingWorkflowState() === 'deposit_required' && !this.isDepositPaid();
  }

  canCustomerPayBalance(): boolean {
    return !this.isAdmin && this.getBookingWorkflowState() === 'balance_required';
  }

  shouldShowCustomerPaymentButton(): boolean {
    return this.canCustomerPayDeposit() || this.canCustomerPayBalance();
  }

  get customerPaymentButtonLabel(): string {
    if (this.canCustomerPayDeposit()) return 'Pay 10% deposit';
    if (this.canCustomerPayBalance()) return `Pay remaining 90% (€${this.getBalanceAmount()})`;
    return 'Payment';
  }

  updateCustomerBooking(): void {
    this.editMode = true;
    this.customerUpdateMessage = '';
    this.customerUpdateError = '';
  }

  cancelCustomerUpdate(): void {
    this.editMode = false;
    this.customerUpdateMessage = '';
    this.customerUpdateError = '';
  }

  async saveCustomerUpdate(): Promise<void> {
    if (!this.booking?.bookingId) return;

    this.savingCustomerUpdate = true;
    this.customerUpdateMessage = '';
    this.customerUpdateError = '';

    try {
      const payload: any = {
        customerName: this.booking.customerName || '',
        email: this.booking.email || '',
        phone: this.booking.phone || '',
        passengers: this.booking.passengers || null,
        pickupLocation: (this.booking as any).pickupLocation || '',
        comments: this.booking.comments || '',
        modifiedTS: Date.now(),
      };

      await this.bookingApi.updateBooking(this.booking.bookingId, payload);

      this.booking = {
        ...this.booking,
        ...payload,
      } as any;

      this.customerUpdateMessage = 'Booking information updated.';
      this.editMode = false;
    } catch (e: any) {
      this.customerUpdateError = e?.message || 'Unable to update booking information.';
    }

    this.savingCustomerUpdate = false;
  }

  customerPayment(): void {
    if (!this.booking?.bookingId) return;

    if (this.canCustomerPayDeposit()) {
      this.payDeposit();
      return;
    }

    if (this.canCustomerPayBalance()) {
      this.router.navigate(['/payment', this.booking.bookingId], {
        queryParams: { mode: 'balance' }
      });
    }
  }

  canAdminOpenDamagePage(): boolean {
    return this.isAdmin && this.getDerivedBookingStatus() === 'payment_done';
  }

  openAdminDamagePage(): void {
    if (!this.booking?.bookingId) return;
    this.router.navigate(['/payment', this.booking.bookingId], {
      queryParams: { mode: 'warranty' }
    });
  }
}
