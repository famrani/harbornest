// src/app/components/owner-charge/owner-charge.component.ts
import { Component } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-owner-charge',
  template: `
    <h3>Owner Accept & Charge</h3>
    <label>Owner ID <input [(ngModel)]="ownerId"></label>
    <label>Booking ID <input [(ngModel)]="bookingId"></label>
    <label>Amount (EUR) <input [(ngModel)]="amount" type="number"></label>
    <button (click)="accept()">Accept & Charge</button>
    <p *ngIf="msg">{{ msg }}</p>
  `
})
export class OwnerChargeComponent {
  ownerId = '';
  bookingId = '';
  amount = 100;
  msg = '';

  constructor(private api: BookingService) {}

  async accept() {
    this.msg = '';
    const cents = Math.round(this.amount * 100);
    try {
      const r = await this.api.acceptAndCharge({
        ownerId: this.ownerId,
        bookingId: this.bookingId,
        amount: cents,
        currency: 'eur'
      }).toPromise();
      this.msg = r?.ok ? 'Charge started (check webhooks)…' : 'Failed to start charge';
    } catch (e: any) {
      this.msg = e?.error?.error || e?.message || 'Charge failed';
    }
  }
}
