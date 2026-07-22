import { Component } from '@angular/core';
import { OfferApiService, AlegriaOffer } from '../bookings/offer-api.service';

@Component({
  selector: 'app-admin-warranty-charge',
  templateUrl: './admin-warranty-charge.component.html',
  styleUrls: ['./admin-warranty-charge.component.scss']
})
export class AdminWarrantyChargeComponent {
  bookingId = '';
  amount: number | null = null;
  reason = '';
  charging = false;
  message = '';
  error = '';
  lastCharge: any = null;

  constructor(private offerApi: OfferApiService) {}

  chargeWarranty(): void {
    const amount = Number(this.amount || 0);
    const bookingId = this.bookingId.trim();
    const reason = this.reason.trim();

    this.message = '';
    this.error = '';

    if (!bookingId) {
      this.error = 'Booking / offer id is required.';
      return;
    }

    if (!amount || amount <= 0) {
      this.error = 'Please enter a valid amount.';
      return;
    }

    if (!reason) {
      this.error = 'Please describe the damage or unpaid cost.';
      return;
    }

    this.charging = true;

    const offer = {
      offerId: bookingId,
      warrantyAmount: 500,
    } as AlegriaOffer;

    this.offerApi.chargeWarranty(offer, amount, reason).subscribe({
      next: (result) => {
        this.lastCharge = result || null;
        this.message = 'Damage charge completed and saved.';
        this.charging = false;
      },
      error: (error) => {
        this.error = error?.error?.error || error?.error?.message || error?.message || 'Unable to charge warranty.';
        this.charging = false;
      }
    });
  }
}
