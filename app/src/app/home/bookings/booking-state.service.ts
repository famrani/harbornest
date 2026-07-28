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
    // Completion of the outing must not hide unpaid financial steps.
    // A completed/closed outing can still have outstanding Alegria or skipper fees.
    const progress = cancelled ? 0 : Math.round((checks.filter(Boolean).length / checks.length) * 100);
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
    if (booking?.completed === true || booking?.outingCompleted === true ||
      booking?.workflow?.outingCompleted === true || booking?.bookingWorkflow?.outingCompleted === true) {
      return true;
    }

    // An explicit outing status can complete the outing independently of the
    // booking workflow status.
    const outingValues = [
      booking?.outingStatus,
      booking?.workflow?.outingStatus,
      booking?.bookingWorkflow?.outingStatus,
      booking?.raw?.outingStatus,
    ].map((value) => String(value ?? '').toLowerCase().trim());
    const completed = new Set(['completed', 'complete', 'closed', 'terminated', 'finished', 'done', 'outing_completed', 'booking_completed']);
    if (outingValues.some((value) => completed.has(value))) return true;

    // Legacy bookingStatus="completed" often means that booking creation was
    // completed, not that the boat outing has happened. Never show a future
    // reservation as a completed outing because of that legacy value.
    const genericValues = [
      booking?.bookingStatus,
      booking?.status,
      booking?.workflow?.status,
      booking?.bookingWorkflow?.status,
      booking?.raw?.bookingStatus,
      booking?.raw?.status,
    ].map((value) => String(value ?? '').toLowerCase().trim());
    if (!genericValues.some((value) => completed.has(value))) return false;

    const rawDate = booking?.outingDate || booking?.date || booking?.bookingDate || booking?.raw?.outingDate;
    const outingTime = rawDate ? Date.parse(String(rawDate)) : Number.NaN;
    if (!Number.isFinite(outingTime)) return false;
    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);
    return outingTime <= endOfToday.getTime();
  }

  private isAlegriaPaid(_booking: any, calculatedRemaining: number): boolean {
    // The banner must reflect the canonical financial balance, not historical/imported
    // booleans such as balancePaid or paymentStatus. Mixed cash/card payments are already
    // included by BookingFinancialService in alegriaRemaining.
    return calculatedRemaining <= 0.009;
  }

  private isSkipperPaid(_booking: any, skipperAmount: number, calculatedRemaining: number): boolean {
    // Same rule as Alegria: paid only when the canonical skipper balance is zero.
    return skipperAmount <= 0.009 || calculatedRemaining <= 0.009;
  }

  private isPaidValue(value: any): boolean {
    if (value === true) return true;
    return ['true', 'paid', 'completed', 'complete', 'done', 'confirmed', 'succeeded', 'success', 'payment_done', 'full_payment_done', 'balance_paid', 'remaining_paid', 'cash_received']
      .includes(String(value ?? '').toLowerCase().trim());
  }
}
