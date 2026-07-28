import { Injectable } from '@angular/core';

export interface BookingFinancialModel {
  /** Authoritative amount charged to the customer for the complete outing. */
  totalCustomerPrice: number;
  /** Amount charged through an external platform, when applicable. */
  paidOnPlatform: number;
  platformCost: number;
  platformFees: number;
  boatAmount: number;
  fuelAmount: number;
  extraServicesAmount: number;
  skipperAmount: number;
  customerTotal: number;
  /** Alegria net revenue: boat cost minus platform cost/fees. */
  alegriaRevenue: number;
  /** Amount payable to Alegria directly, excluding the skipper amount paid separately. */
  alegriaPayableRevenue: number;
  skipperRevenue: number;
  boatRentalAmount: number;
  portFeesAmount: number;
  cateringAmount: number;
  drinksAmount: number;
  waterToysAmount: number;
  tipsAmount: number;
  otherAmount: number;
  rentalCommissionAmount: number;
  serviceFeesAmount: number;
  totalCommission: number;
  totalOutingPrice: number;
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

    // Nested booking payment objects are only a fallback source when they also
    // carry explicit proof of a completed payment. A Checkout Session id with
    // status=checkout_created is not proof of payment.
    const fallback = type === 'deposit'
      ? (direct.deposit || {})
      : (type === 'alegria' || type === 'balance')
        ? (direct.alegria || direct.balance || direct.remaining || {})
        : type === 'skipper'
          ? (direct.skipper || {})
          : {};
    if (matches(fallback)) return amountOf(fallback);
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
    const explicitPlatformFees = this.n(
      booking?.platformFees, booking?.platformFeeAmount, booking?.externalPlatformFees,
      payments?.platform?.fees, payments?.platform?.feeAmount,
      booking?.raw?.platformFees, booking?.raw?.platformFeeAmount, booking?.raw?.externalPlatformFees,
      booking?.raw?.payments?.platform?.fees, booking?.raw?.payments?.platform?.feeAmount,
    );

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
    // A booking may contain a legacy totalPrice (platform-only) and a corrected
    // totalAmount / totalCustomerCost (complete customer cost). Never let the
    // first legacy field win: keep the largest explicit customer-facing total.
    const explicitCustomerTotals = [
      booking?.totalCustomerCost,
      booking?.customerTotal,
      booking?.totalCustomerPrice,
      booking?.totalAmount,
      booking?.totalPrice,
      booking?.raw?.totalCustomerCost,
      booking?.raw?.customerTotal,
      booking?.raw?.totalCustomerPrice,
      booking?.raw?.totalAmount,
      booking?.raw?.totalPrice,
    ]
      .map((value) => Number(value))
      .filter((value) => Number.isFinite(value) && value > 0);
    let customerTotal = explicitCustomerTotals.length ? Math.max(...explicitCustomerTotals) : 0;

    if (external) {
      // The platform total is only the amount charged by the marketplace. The complete
      // customer cost also includes fees collected directly (skipper, fuel, extras).
      // Keep the largest explicit total to support edited/imported bookings where a
      // legacy totalPrice still contains only the platform amount.
      const completeExternalTotal = totalCustomerOnPlatform + skipperAmount + fuel + extraServicesAmount;
      customerTotal = Math.max(customerTotal, completeExternalTotal);
      boatAmount = Math.max(0, customerTotal - skipperAmount - fuel - extraServicesAmount);
    } else {
      const onlinePayable = this.n(booking?.onlinePayableAmount, booking?.appPayableAmount);
      if (!boatAmount && onlinePayable) boatAmount = Math.max(0, onlinePayable - fuel - extraServicesAmount);
      customerTotal = boatAmount + fuel + extraServicesAmount + skipperAmount;
    }

    // Canonical outing pricing model used by view, edit and summaries.
    // Total outing price = rental + skipper + fuel + port + catering + drinks + toys + tips + other.
    // Total commission = commission on rental + service fees.
    // Alegria revenue = total outing price - total commission - skipper.
    // Skipper revenue = skipper + tips.
    const directBooking = !external || ['direct', 'alegria', 'direct alegria'].includes(String(booking?.source || booking?.bookingSource || booking?.externalPlatform || '').toLowerCase());
    const boatRentalAmount = this.n(
      booking?.pricing?.boatRentalAmount, booking?.boatRentalAmount, booking?.rentalAmount,
      booking?.proposalBoatPrice, booking?.boatPrice, booking?.estimatedBoatPrice,
      booking?.raw?.pricing?.boatRentalAmount, booking?.raw?.boatRentalAmount, booking?.raw?.proposalBoatPrice,
      totalCustomerOnPlatform
    );
    const portFeesAmount = this.n(booking?.pricing?.portFeesAmount, booking?.portFeesAmount, booking?.harborFeesAmount, booking?.raw?.pricing?.portFeesAmount, booking?.raw?.portFeesAmount);
    const cateringAmount = this.n(booking?.pricing?.cateringAmount, booking?.cateringAmount, payments?.direct?.cateringAmount, booking?.raw?.cateringAmount);
    const drinksAmount = this.n(booking?.pricing?.drinksAmount, booking?.drinksAmount, payments?.direct?.drinksAmount, booking?.raw?.drinksAmount);
    const waterToysAmount = this.n(booking?.pricing?.waterToysAmount, booking?.waterToysAmount, payments?.direct?.waterToysAmount, booking?.raw?.waterToysAmount);
    const tipsAmount = this.n(booking?.pricing?.tipsAmount, booking?.tipsAmount, booking?.tipAmount, payments?.direct?.tipsAmount, booking?.raw?.tipsAmount);
    const otherAmount = this.n(booking?.pricing?.otherAmount, booking?.otherOnboardAmount, booking?.otherAmount, payments?.direct?.otherOnboardAmount, booking?.raw?.otherOnboardAmount);
    const canonicalFuelAmount = this.n(booking?.pricing?.fuelAmount, booking?.fuelAmount, booking?.proposalFuelPrice, booking?.fuelPrice, booking?.cleaningCashAmount, booking?.raw?.fuelAmount, booking?.raw?.cleaningCashAmount);
    const rentalCommissionAmount = directBooking ? 0 : this.n(
      booking?.pricing?.rentalCommissionAmount, booking?.rentalCommissionAmount, booking?.platformCommissionAmount,
      booking?.raw?.pricing?.rentalCommissionAmount, booking?.raw?.rentalCommissionAmount,
      explicitPlatformFees, Math.max(0, boatRentalAmount - platformPaidToAlegria)
    );
    const serviceFeesAmount = directBooking ? 0 : this.n(
      booking?.pricing?.serviceFeesAmount, booking?.serviceFeesAmount, booking?.platformServiceFees,
      booking?.raw?.pricing?.serviceFeesAmount, booking?.raw?.serviceFeesAmount
    );
    const totalOutingPrice = boatRentalAmount + skipperAmount + canonicalFuelAmount + portFeesAmount + cateringAmount + drinksAmount + waterToysAmount + tipsAmount + otherAmount;
    const totalCommission = rentalCommissionAmount + serviceFeesAmount;
    customerTotal = totalOutingPrice;
    boatAmount = boatRentalAmount;
    const platformFees = totalCommission;
    const platformCost = totalCommission;
    const alegriaPayableRevenue = Math.max(0, totalOutingPrice - totalCommission - skipperAmount);
    const alegriaRevenue = alegriaPayableRevenue;
    const skipperRevenue = skipperAmount + tipsAmount;
    const depositPaid = (booking?.depositPaid === true || booking?.depositStatus === 'paid' || payments?.deposit?.paid === true || payments?.deposit?.status === 'paid')
      ? (this.paidFromStripe(booking, 'deposit') || this.n(booking?.depositPaidAmount, booking?.paidDepositAmount, booking?.depositAmount, payments?.deposit?.amount))
      : 0;
    const hasStripeRecords = Array.isArray(booking?.stripePaymentRecords) && booking.stripePaymentRecords.some((record: any) =>
      !!(record?.stripeCheckoutSessionId || record?.checkoutSessionId || record?.stripePaymentIntentId || record?.paymentIntentId)
    );
    const alegriaStripeOrLegacyPaid = this.paidFromStripe(booking, 'alegria');
    const alegriaCashPaid = this.n(booking?.alegriaCashReceivedAmount, payments?.alegria?.cashAmountPaid, payments?.balance?.cashAmountPaid);
    const alegriaBalancePaid = hasStripeRecords
      ? alegriaStripeOrLegacyPaid + alegriaCashPaid
      : Math.max(alegriaStripeOrLegacyPaid, alegriaCashPaid, this.n(booking?.alegriaPaidAmount, payments?.alegria?.amountPaid, payments?.balance?.amountPaid));
    const alegriaPaid = Math.min(alegriaPayableRevenue, external ? platformPaidToAlegria + alegriaBalancePaid : depositPaid + alegriaBalancePaid);
    const skipperStripeOrLegacyPaid = this.paidFromStripe(booking, 'skipper');
    const skipperCashPaid = this.n(booking?.skipperCashReceivedAmount, payments?.skipper?.cashAmountPaid, payments?.direct?.skipperCashPaidAmount);
    const skipperPaid = Math.min(skipperRevenue, hasStripeRecords
      ? skipperStripeOrLegacyPaid + skipperCashPaid
      : Math.max(skipperStripeOrLegacyPaid, skipperCashPaid, this.n(booking?.skipperPaidAmount, payments?.skipper?.amountPaid)));

    const round = (value: number) => Math.max(0, Math.round(value * 100) / 100);
    const alegriaRemaining = round(alegriaPayableRevenue - alegriaPaid);
    const skipperRemaining = round(skipperRevenue - skipperPaid);

    const totalCustomerPrice = round(customerTotal);

    // Development-time guard: all screens should consume this same value.
    const legacyDisplayedTotal = this.n(booking?.totalPrice, booking?.raw?.totalPrice);
    if (legacyDisplayedTotal > 0 && Math.abs(legacyDisplayedTotal - totalCustomerPrice) > 0.009) {
      console.warn('[BookingFinancialService] Financial inconsistency detected', {
        bookingId: booking?.bookingId || booking?.raw?.bookingId,
        canonicalCustomerTotal: totalCustomerPrice,
        legacyTotalPrice: legacyDisplayedTotal,
      });
    }

    return {
      totalCustomerPrice,
      paidOnPlatform: round(totalCustomerOnPlatform),
      platformCost: round(platformCost),
      platformFees: round(platformFees),
      boatAmount: round(boatAmount),
      fuelAmount: round(canonicalFuelAmount),
      extraServicesAmount: round(portFeesAmount + cateringAmount + drinksAmount + waterToysAmount + tipsAmount + otherAmount),
      skipperAmount,
      customerTotal: totalCustomerPrice,
      alegriaRevenue: round(alegriaRevenue),
      alegriaPayableRevenue: round(alegriaPayableRevenue),
      skipperRevenue: round(skipperRevenue),
      boatRentalAmount: round(boatRentalAmount),
      portFeesAmount: round(portFeesAmount),
      cateringAmount: round(cateringAmount),
      drinksAmount: round(drinksAmount),
      waterToysAmount: round(waterToysAmount),
      tipsAmount: round(tipsAmount),
      otherAmount: round(otherAmount),
      rentalCommissionAmount: round(rentalCommissionAmount),
      serviceFeesAmount: round(serviceFeesAmount),
      totalCommission: round(totalCommission),
      totalOutingPrice: round(totalOutingPrice),
      alegriaPaid,
      skipperPaid,
      alegriaRemaining,
      skipperRemaining,
      fullyPaid: alegriaRemaining <= 0 && skipperRemaining <= 0,
    };
  }
}
