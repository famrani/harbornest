import { Injectable } from '@angular/core';

export interface BookingFinancialModel {
  boatAmount: number;
  fuelAmount: number;
  extraServicesAmount: number;
  skipperAmount: number;
  customerTotal: number;
  alegriaRevenue: number;
  skipperRevenue: number;
  alegriaPaid: number;
  skipperPaid: number;
  alegriaRemaining: number;
  skipperRemaining: number;
  fullyPaid: boolean;
}

@Injectable({ providedIn: 'root' })
export class BookingFinancialService {
  private n(...values: any[]): number {
    for (const value of values) {
      if (value === undefined || value === null || value === '') continue;
      const parsed = Number(value);
      if (Number.isFinite(parsed)) return parsed;
    }
    return 0;
  }

  private paidFromStripe(booking: any, type: 'deposit' | 'balance' | 'alegria' | 'skipper'): number {
    const records = Array.isArray(booking?.stripePaymentRecords) ? booking.stripePaymentRecords : [];
    const direct = booking?.payments || {};

    const textOf = (record: any): string => [
      record?.paymentType,
      record?.type,
      record?.checkoutType,
      record?.paymentPurpose,
      record?.extraServiceId,
      record?.title,
      record?.name,
      record?.description,
      record?.metadata?.paymentType,
      record?.metadata?.checkoutType,
      record?.metadata?.extraServiceId,
      record?.metadata?.title,
    ].filter(Boolean).join(' ').toLowerCase();

    const matches = (record: any) => {
      const status = String(record?.status || record?.paymentStatus || record?.stripePaymentStatus || '').toLowerCase();
      const paid = record?.paid === true || ['paid', 'succeeded', 'success', 'complete', 'completed', 'checkout_paid', 'checkout_completed', 'payment_succeeded'].includes(status);
      if (!paid) return false;

      const text = textOf(record);
      if (type === 'alegria' || type === 'balance') {
        return text.includes('balance')
          || text.includes('remaining')
          || text.includes('alegria')
          || text.includes('extra_service') && text.includes('balance_')
          || text.includes('remaining 90');
      }
      if (type === 'skipper') return text.includes('skipper') || text.includes('skipper_');
      return text.includes(type);
    };

    const amountOf = (record: any) => {
      // Stripe always returns amount_total / amount_received in cents. Prefer those
      // unambiguous fields so a €9 balance stored as 900 is never interpreted as €900.
      const cents = this.n(record?.amount_total, record?.amountTotal, record?.amount_received, record?.amountReceived);
      if (cents > 0) return cents / 100;

      const amount = this.n(
        record?.amount,
        record?.balanceAmount,
        record?.remainingAmount,
        record?.extraServiceAmount,
        record?.skipperAmount,
        record?.depositAmount,
        record?.total,
        record?.metadata?.amount,
        record?.metadata?.balanceAmount,
      );
      const stripeBacked = !!(record?.stripeCheckoutSessionId || record?.checkoutSessionId || record?.stripePaymentIntentId || record?.paymentIntentId)
        || String(record?.method || record?.source || '').toLowerCase().includes('stripe');
      return stripeBacked && amount > 0 ? amount / 100 : amount;
    };

    const sum = records.filter(matches).reduce((total: number, record: any) => total + amountOf(record), 0);
    if (sum > 0) return sum;
    if (type === 'deposit') return amountOf(direct.deposit || {});
    if (type === 'alegria' || type === 'balance') return amountOf(direct.balance || direct.remaining || direct.alegria || {});
    if (type === 'skipper') return amountOf(direct.skipper || {});
    return 0;
  }

  isExternalBooking(booking: any): boolean {
    const source = String(booking?.source || booking?.bookingSource || booking?.externalPlatform || '').toLowerCase();
    return !!source && !['direct', 'alegria', 'direct alegria'].includes(source);
  }

  build(booking: any): BookingFinancialModel {
    const payments = booking?.payments || {};
    const external = this.isExternalBooking(booking) || String(booking?.raw?.entryMode || '').toLowerCase() === 'historical';

    const platformPaidToAlegria = this.n(booking?.externalPlatformPaidAmount, payments?.platform?.paidAmount, booking?.raw?.externalPlatformPaidAmount, booking?.raw?.payments?.platform?.paidAmount);
    const totalCustomerOnPlatform = this.n(booking?.externalPlatformTotalClientAmount, payments?.platform?.totalClientAmount, booking?.raw?.externalPlatformTotalClientAmount, booking?.raw?.payments?.platform?.totalClientAmount);

    const skipperAmount = this.n(booking?.skipperCashAmount, booking?.proposalSkipperPrice, payments?.direct?.skipperCashAmount, booking?.raw?.skipperCashAmount, booking?.raw?.proposalSkipperPrice);
    const catering = this.n(booking?.cateringAmount, payments?.direct?.cateringAmount, booking?.raw?.cateringAmount);
    const tips = this.n(booking?.tipsAmount, booking?.tipAmount, payments?.direct?.tipsAmount, payments?.direct?.tipAmount, booking?.raw?.tipsAmount, booking?.raw?.tipAmount);
    const fuel = external
      ? this.n(booking?.cleaningCashAmount, payments?.direct?.cleaningCashAmount, booking?.raw?.cleaningCashAmount)
      : this.n(booking?.proposalFuelPrice, booking?.fuelPrice, booking?.fuelAmount, booking?.offerCleaningPrice, booking?.estimatedCleaningPrice);
    const drinks = this.n(booking?.drinksAmount, payments?.direct?.drinksAmount, booking?.raw?.drinksAmount);
    const waterToys = this.n(booking?.waterToysAmount, payments?.direct?.waterToysAmount, booking?.raw?.waterToysAmount);
    const other = this.n(booking?.otherOnboardAmount, payments?.direct?.otherOnboardAmount, booking?.raw?.otherOnboardAmount);
    const explicitExtras = this.n(booking?.proposalExtraServicesPrice, booking?.extraServicesPrice, booking?.extrasAmount, booking?.extraServicesAmount, booking?.raw?.proposalExtraServicesPrice);
    const extraServicesAmount = external ? catering + tips + drinks + waterToys + other : explicitExtras;

    let boatAmount = this.n(booking?.proposalBoatPrice, booking?.boatPrice, booking?.estimatedBoatPrice, booking?.raw?.proposalBoatPrice, booking?.raw?.boatPrice);
    let customerTotal = this.n(booking?.totalAmount, booking?.totalPrice, booking?.totalCustomerCost, booking?.customerTotal, booking?.raw?.totalAmount, booking?.raw?.totalPrice);

    if (external) {
      customerTotal = customerTotal || totalCustomerOnPlatform + skipperAmount + fuel + extraServicesAmount;
      boatAmount = Math.max(0, customerTotal - skipperAmount - fuel - extraServicesAmount);
    } else {
      const onlinePayable = this.n(booking?.onlinePayableAmount, booking?.appPayableAmount);
      if (!boatAmount && onlinePayable) boatAmount = Math.max(0, onlinePayable - fuel - extraServicesAmount);
      customerTotal = boatAmount + fuel + extraServicesAmount + skipperAmount;
    }

    const alegriaRevenue = external
      ? platformPaidToAlegria + fuel + extraServicesAmount
      : boatAmount + fuel + extraServicesAmount;
    const skipperRevenue = skipperAmount;
    const depositPaid = (booking?.depositPaid === true || booking?.depositStatus === 'paid' || payments?.deposit?.paid === true || payments?.deposit?.status === 'paid')
      ? (this.paidFromStripe(booking, 'deposit') || this.n(booking?.depositPaidAmount, booking?.paidDepositAmount, booking?.depositAmount, payments?.deposit?.amount))
      : 0;
    const alegriaBalancePaid = this.paidFromStripe(booking, 'alegria') || this.n(booking?.alegriaPaidAmount, payments?.alegria?.amount, payments?.balance?.amount);
    const alegriaPaid = Math.min(alegriaRevenue, external ? platformPaidToAlegria + alegriaBalancePaid : depositPaid + alegriaBalancePaid);
    const skipperStripePaid = this.paidFromStripe(booking, 'skipper');
    const skipperPaid = (booking?.skipperPaid === true || booking?.skipperStatus === 'paid' || booking?.skipperPaymentStatus === 'paid' || payments?.skipper?.paid === true || payments?.skipper?.status === 'paid' || payments?.direct?.skipperPaid === true)
      ? (skipperStripePaid || this.n(booking?.skipperPaidAmount, payments?.skipper?.amount, skipperAmount))
      : skipperStripePaid;

    const round = (value: number) => Math.max(0, Math.round(value * 100) / 100);
    const alegriaRemaining = round(alegriaRevenue - alegriaPaid);
    const skipperRemaining = round(skipperRevenue - skipperPaid);

    return {
      boatAmount,
      fuelAmount: fuel,
      extraServicesAmount,
      skipperAmount,
      customerTotal,
      alegriaRevenue,
      skipperRevenue,
      alegriaPaid,
      skipperPaid,
      alegriaRemaining,
      skipperRemaining,
      fullyPaid: alegriaRemaining <= 0 && skipperRemaining <= 0,
    };
  }
}
