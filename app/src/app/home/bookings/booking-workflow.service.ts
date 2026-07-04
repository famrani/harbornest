import { Injectable } from '@angular/core';
import { BookingFinancialModel } from './booking-financial.service';

export interface BookingWorkflowModel {
  termsAccepted: boolean;
  alegriaPaymentComplete: boolean;
  skipperPaymentComplete: boolean;
  warrantyComplete: boolean;
  fullyPaid: boolean;
  confirmed: boolean;
  completed: boolean;
  percent: number;
  statusKey: 'cancelled' | 'waitingForCustomer' | 'bookingConfirmed' | 'completed';
  paymentKey: 'fullyPaid' | 'paymentPending';
  warrantyKey: 'warrantyComplete' | 'warrantyPending';
}

@Injectable({ providedIn: 'root' })
export class BookingWorkflowService {
  termsAccepted(booking: any): boolean {
    const explicit = booking?.customerTermsAccepted === true ||
      booking?.terms?.accepted === true ||
      booking?.workflow?.termsAccepted === true ||
      booking?.bookingWorkflow?.termsAccepted === true ||
      booking?.documents?.termsAccepted === true ||
      booking?.termsAccepted === true ||
      booking?.acceptedTerms === true ||
      booking?.tcAccepted === true ||
      booking?.tncAccepted === true ||
      booking?.tAndCAccepted === true ||
      booking?.termsAndConditionsAccepted === true;

    const acceptedAt = booking?.terms?.acceptedAt ||
      booking?.workflow?.termsAcceptedAt ||
      booking?.bookingWorkflow?.termsAcceptedAt ||
      booking?.documents?.termsAcceptedAt ||
      booking?.termsAcceptedAt ||
      booking?.acceptedTermsAt ||
      booking?.tcAcceptedAt ||
      booking?.tncAcceptedAt ||
      booking?.termsAndConditionsAcceptedAt;

    const acceptedBy = booking?.terms?.acceptedBy ||
      booking?.workflow?.termsAcceptedBy ||
      booking?.bookingWorkflow?.termsAcceptedBy ||
      booking?.documents?.termsAcceptedBy ||
      booking?.termsAcceptedBy ||
      booking?.acceptedTermsBy ||
      booking?.tcAcceptedBy ||
      booking?.tncAcceptedBy;

    const source = String(
      booking?.terms?.source ||
      booking?.workflow?.termsAcceptedSource ||
      booking?.bookingWorkflow?.termsAcceptedSource ||
      booking?.documents?.termsAcceptedSource ||
      booking?.termsAcceptedSource ||
      booking?.tncAcceptedSource ||
      booking?.acceptedTermsSource ||
      ''
    ).toLowerCase();

    const formalCustomerMarker = booking?.customerTermsAccepted === true ||
      source.includes('customer') ||
      source.includes('client') ||
      source.includes('proposal') ||
      source.includes('portal') ||
      !!acceptedBy;

    // A booking/proposal must not become green only because an admin created/issued it.
    // Formal acceptance requires: explicit flag + timestamp + a customer-facing audit marker.
    return explicit === true && !!acceptedAt && formalCustomerMarker;
  }

  warrantyComplete(booking: any): boolean {
    const amount = Number(booking?.warrantyAmount || booking?.cautionAmount || booking?.securityDepositAmount || 0) || 0;
    if (amount <= 0) return true;
    const method = String(booking?.warrantyPaymentChoice || booking?.warrantyMethod || '').toLowerCase();
    const status = String(booking?.warrantyStatus || '').toLowerCase();
    if (method.includes('card') || method.includes('stripe')) {
      return status.includes('card_registered') || status.includes('warranty_card_saved') || !!booking?.warrantyPaymentMethodId || !!booking?.warrantySetupIntentId;
    }
    if (method.includes('cash')) return status.includes('cash_selected') || status.includes('cash_received') || booking?.warrantyCashSelected === true;
    return false;
  }

  build(booking: any, financial: BookingFinancialModel): BookingWorkflowModel {
    const termsAccepted = this.termsAccepted(booking);
    const alegriaPaymentComplete = financial.alegriaRemaining <= 0;
    const skipperPaymentComplete = financial.skipperRemaining <= 0;
    const warrantyComplete = this.warrantyComplete(booking);
    const fullyPaid = alegriaPaymentComplete && skipperPaymentComplete;
    const confirmed = termsAccepted && fullyPaid && warrantyComplete;
    const rawStatus = String(booking?.status || booking?.bookingStatus || '').toLowerCase();
    const completed = confirmed && ['completed', 'closed', 'finished'].includes(rawStatus);
    const cancelled = rawStatus.includes('cancel') || booking?.cancelled === true || booking?.canceled === true;
    const checks = [termsAccepted, alegriaPaymentComplete, skipperPaymentComplete, warrantyComplete];
    const percent = Math.round((checks.filter(Boolean).length / checks.length) * 100);
    return {
      termsAccepted,
      alegriaPaymentComplete,
      skipperPaymentComplete,
      warrantyComplete,
      fullyPaid,
      confirmed,
      completed,
      percent,
      statusKey: cancelled ? 'cancelled' : completed ? 'completed' : confirmed ? 'bookingConfirmed' : 'waitingForCustomer',
      paymentKey: fullyPaid ? 'fullyPaid' : 'paymentPending',
      warrantyKey: warrantyComplete ? 'warrantyComplete' : 'warrantyPending',
    };
  }
}
