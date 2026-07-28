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
    const candidates = [
      booking,
      booking?.raw,
      booking?.raw?.raw,
      booking?.offer,
      booking?.raw?.offer,
      booking?.sourceOffer,
    ].filter(Boolean);

    const explicit = (obj: any): boolean => obj?.customerTermsAccepted === true ||
      obj?.terms?.accepted === true ||
      obj?.workflow?.termsAccepted === true ||
      obj?.bookingWorkflow?.termsAccepted === true ||
      obj?.documents?.termsAccepted === true ||
      obj?.termsAccepted === true ||
      obj?.acceptedTerms === true ||
      obj?.tcAccepted === true ||
      obj?.tncAccepted === true ||
      obj?.tAndCAccepted === true ||
      obj?.termsAndConditionsAccepted === true ||
      obj?.termsAcceptedStatus === 'accepted' ||
      obj?.termsStatus === 'accepted' ||
      obj?.termsAndConditionsStatus === 'accepted';

    if (candidates.some(explicit)) return true;

    const audit = (obj: any): boolean => !!(
      obj?.terms?.acceptedAt ||
      obj?.workflow?.termsAcceptedAt ||
      obj?.bookingWorkflow?.termsAcceptedAt ||
      obj?.documents?.termsAcceptedAt ||
      obj?.termsAcceptedAt ||
      obj?.acceptedTermsAt ||
      obj?.tcAcceptedAt ||
      obj?.tncAcceptedAt ||
      obj?.termsAndConditionsAcceptedAt ||
      obj?.terms?.acceptedBy ||
      obj?.workflow?.termsAcceptedBy ||
      obj?.bookingWorkflow?.termsAcceptedBy ||
      obj?.documents?.termsAcceptedBy ||
      obj?.termsAcceptedBy ||
      obj?.acceptedTermsBy ||
      obj?.tcAcceptedBy ||
      obj?.tncAcceptedBy ||
      obj?.offerAcceptedAt ||
      obj?.acceptedAt ||
      obj?.confirmedAt ||
      obj?.bookingCreatedAt
    );

    if (candidates.some(audit)) return true;

    const statusText = candidates.map((obj: any) => [
      obj?.status,
      obj?.offerStatus,
      obj?.bookingStatus,
      obj?.bookingRequestStatus,
      obj?.customerStatus,
    ].filter(Boolean).join(' ')).join(' ').toLowerCase();

    if (statusText.includes('accepted') || statusText.includes('confirmed') || statusText.includes('booking_created') || statusText.includes('paid') || statusText.includes('validated')) return true;

    const bookingIdText = String(booking?.bookingId || booking?.id || booking?.raw?.bookingId || '').toLowerCase();
    return (bookingIdText.startsWith('booking_') && !statusText.includes('cancel') && !statusText.includes('deleted'))
      || !!(booking?.offerId || booking?.relatedBookingId || booking?.raw?.offerId);
  }


  warrantyComplete(booking: any): boolean {
    const amount = Number(booking?.warrantyAmount || booking?.cautionAmount || booking?.securityDepositAmount || 0) || 0;
    if (amount <= 0) return true;
    const method = String(booking?.warrantyPaymentChoice || booking?.warrantyMethod || '').toLowerCase();
    const status = String(booking?.warrantyStatus || '').toLowerCase();
    if (method.includes('card') || method.includes('stripe')) {
      const warrantyPayment = booking?.payments?.warranty || {};
      const paymentMethodId = booking?.warrantyPaymentMethodId || booking?.paymentMethodId || warrantyPayment?.paymentMethodId || warrantyPayment?.warrantyPaymentMethodId;
      const setupIntentId = booking?.warrantySetupIntentId || booking?.setupIntentId || warrantyPayment?.setupIntentId || warrantyPayment?.warrantySetupIntentId;
      const proofStatus = String(warrantyPayment?.status || '').toLowerCase();
      return !!paymentMethodId && (
        !!setupIntentId ||
        proofStatus.includes('card_registered') ||
        proofStatus.includes('warranty_card_saved') ||
        proofStatus.includes('setup_succeeded')
      );
    }
    // For a cash warranty, the booking step represents the customer's choice of
    // warranty method. The cash itself is received later on board, but selecting
    // and saving that method is enough to complete the booking workflow step.
    if (method.includes('cash')) return true;
    if (status.includes('cash_selected') || status.includes('cash_received')) return true;
    if (booking?.warrantyCashSelected === true) return true;
    if (booking?.warrantyCashReceived === true || booking?.warrantyCashConfirmed === true) return true;
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
