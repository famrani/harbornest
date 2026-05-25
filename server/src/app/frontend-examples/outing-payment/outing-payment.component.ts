import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface OutingPaymentInput {
  ownerId: string;
  bookingId: string;
  customerEmail?: string;
  customerName?: string;
  customerPhone?: string;
  outingType?: string;
  outingDate?: string;
  depositAmount: number;   // euros, e.g. 500
  warrantyAmount: number;  // euros, e.g. 1500
}

@Component({
  selector: 'app-outing-payment',
  templateUrl: './outing-payment.component.html',
  styleUrls: ['./outing-payment.component.scss'],
})
export class OutingPaymentComponent {
  @Input() payment!: OutingPaymentInput;

  loadingDeposit = false;
  loadingWarranty = false;
  error = '';

  constructor(private http: HttpClient) {}

  get canPay(): boolean {
    return !!this.payment?.ownerId && !!this.payment?.bookingId;
  }

  async payDeposit(): Promise<void> {
    this.error = '';
    if (!this.canPay) {
      this.error = 'Missing ownerId or bookingId.';
      return;
    }

    this.loadingDeposit = true;
    try {
      const origin = window.location.origin;
      const response: any = await this.http.post('/pay/outing-deposit-checkout', {
        ...this.payment,
        successUrl: `${origin}/payment-success`,
        cancelUrl: `${origin}/payment-cancel`,
      }).toPromise();

      if (response?.url) {
        window.location.href = response.url;
      } else {
        this.error = 'Stripe did not return a checkout URL.';
      }
    } catch (err: any) {
      this.error = err?.error?.error || err?.message || 'Unable to start deposit payment.';
    } finally {
      this.loadingDeposit = false;
    }
  }

  async registerWarranty(): Promise<void> {
    this.error = '';
    if (!this.canPay) {
      this.error = 'Missing ownerId or bookingId.';
      return;
    }

    this.loadingWarranty = true;
    try {
      const origin = window.location.origin;
      const response: any = await this.http.post('/pay/outing-warranty-checkout', {
        ...this.payment,
        successUrl: `${origin}/payment-success`,
        cancelUrl: `${origin}/payment-cancel`,
      }).toPromise();

      if (response?.url) {
        window.location.href = response.url;
      } else {
        this.error = 'Stripe did not return a checkout URL.';
      }
    } catch (err: any) {
      this.error = err?.error?.error || err?.message || 'Unable to register warranty card.';
    } finally {
      this.loadingWarranty = false;
    }
  }
}
