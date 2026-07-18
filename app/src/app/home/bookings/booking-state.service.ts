import { Injectable } from '@angular/core';
import { BookingFinancialService } from './booking-financial.service';
import { BookingWorkflowService } from './booking-workflow.service';

export type CanonicalBookingStatus = 'cancelled' | 'waitingForCustomer' | 'bookingConfirmed' | 'completed';

export interface BookingStateModel {
  statusKey: CanonicalBookingStatus;
  paymentKey: 'fullyPaid' | 'paymentPending';
  warrantyKey: 'warrantyComplete' | 'warrantyPending';
  progress: number;
  termsAccepted: boolean;
  alegriaPaymentComplete: boolean;
  skipperPaymentComplete: boolean;
  warrantyComplete: boolean;
  fullyPaid: boolean;
  confirmed: boolean;
  completed: boolean;
  cancelled: boolean;
}

@Injectable({ providedIn: 'root' })
export class BookingStateService {
  constructor(
    private financialService: BookingFinancialService,
    private workflowService: BookingWorkflowService,
  ) {}

  resolve(booking: any): BookingStateModel {
    const financial = this.financialService.build(booking || {});
    const workflow = this.workflowService.build(booking || {}, financial);

    const cancelled = this.isCancelled(booking);
    const completed = !cancelled && this.isCompleted(booking);
    const termsAccepted = workflow.termsAccepted;
    const alegriaPaymentComplete = this.isAlegriaPaid(booking, financial.alegriaRemaining);
    const skipperPaymentComplete = this.isSkipperPaid(booking, financial.skipperAmount, financial.skipperRemaining);
    const warrantyComplete = workflow.warrantyComplete;
    const fullyPaid = alegriaPaymentComplete && skipperPaymentComplete;
    const confirmed = termsAccepted && fullyPaid && warrantyComplete;

    const checks = [termsAccepted, alegriaPaymentComplete, skipperPaymentComplete, warrantyComplete];
    const progress = cancelled ? 0 : completed ? 100 : Math.round((checks.filter(Boolean).length / checks.length) * 100);
    const statusKey: CanonicalBookingStatus = cancelled
      ? 'cancelled'
      : completed
        ? 'completed'
        : confirmed
          ? 'bookingConfirmed'
          : 'waitingForCustomer';

    return {
      statusKey,
      paymentKey: fullyPaid ? 'fullyPaid' : 'paymentPending',
      warrantyKey: warrantyComplete ? 'warrantyComplete' : 'warrantyPending',
      progress,
      termsAccepted,
      alegriaPaymentComplete,
      skipperPaymentComplete,
      warrantyComplete,
      fullyPaid,
      confirmed,
      completed,
      cancelled,
    };
  }

  private isCancelled(booking: any): boolean {
    const values = [
      booking?.bookingStatus,
      booking?.status,
      booking?.outingStatus,
      booking?.workflow?.status,
      booking?.bookingWorkflow?.status,
      booking?.raw?.bookingStatus,
      booking?.raw?.status,
    ].map((value) => String(value ?? '').toLowerCase().trim());
    return booking?.cancelled === true || booking?.canceled === true || values.some((value) =>
      value === 'cancelled' || value === 'canceled' || value === 'deleted'
    );
  }

  private isCompleted(booking: any): boolean {
    const values = [
      booking?.bookingStatus,
      booking?.status,
      booking?.outingStatus,
      booking?.workflow?.status,
      booking?.bookingWorkflow?.status,
      booking?.raw?.bookingStatus,
      booking?.raw?.status,
    ].map((value) => String(value ?? '').toLowerCase().trim());
    const completed = new Set(['completed', 'complete', 'closed', 'terminated', 'finished', 'done', 'outing_completed', 'booking_completed']);
    return booking?.completed === true || booking?.outingCompleted === true || booking?.workflow?.outingCompleted === true ||
      booking?.bookingWorkflow?.outingCompleted === true || values.some((value) => completed.has(value));
  }

  private isAlegriaPaid(booking: any, calculatedRemaining: number): boolean {
    if (calculatedRemaining <= 0) return true;
    const payments = booking?.payments || {};
    const values = [
      booking?.balancePaid,
      booking?.balanceStatus,
      booking?.balancePaymentStatus,
      booking?.remainingPaid,
      booking?.remainingStatus,
      booking?.remainingPaymentStatus,
      booking?.alegriaPaid,
      booking?.alegriaPaymentStatus,
      payments?.balance?.paid,
      payments?.balance?.status,
      payments?.balance?.paymentStatus,
      payments?.remaining?.paid,
      payments?.remaining?.status,
      payments?.remaining?.paymentStatus,
      payments?.alegria?.paid,
      payments?.alegria?.status,
      payments?.alegria?.paymentStatus,
    ];
    return values.some((value) => this.isPaidValue(value)) || booking?.paymentStatus === true || [
      'balance_paid', 'remaining_paid', 'full_payment_done', 'balance_payment_done', 'remaining_payment_done'
    ].includes(String(booking?.paymentStatus || '').toLowerCase().trim());
  }

  private isSkipperPaid(booking: any, skipperAmount: number, calculatedRemaining: number): boolean {
    if (skipperAmount <= 0 || calculatedRemaining <= 0) return true;
    const payments = booking?.payments || {};
    return [
      booking?.skipperPaid,
      booking?.skipperStatus,
      booking?.skipperPaymentStatus,
      payments?.skipper?.paid,
      payments?.skipper?.status,
      payments?.skipper?.paymentStatus,
      payments?.direct?.skipperPaid,
      payments?.direct?.skipperStatus,
    ].some((value) => this.isPaidValue(value));
  }

  private isPaidValue(value: any): boolean {
    if (value === true) return true;
    return ['true', 'paid', 'completed', 'complete', 'done', 'confirmed', 'succeeded', 'success', 'payment_done', 'full_payment_done', 'balance_paid', 'remaining_paid', 'cash_received']
      .includes(String(value ?? '').toLowerCase().trim());
  }
}
