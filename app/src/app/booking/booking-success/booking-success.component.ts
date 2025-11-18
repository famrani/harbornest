// src/app/components/booking-success/booking-success.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-booking-success',
    template: `
    <h2>Payment method saved ✅</h2>
    <p>We’ll notify you when the owner accepts and charges the booking.</p>
    <p *ngIf="bookingId">Booking ID: <b>{{ bookingId }}</b></p>
  `
})
export class BookingSuccessComponent {
    private bookingId: string | null;

    constructor(private route: ActivatedRoute) {
        this.bookingId = this.route.snapshot.queryParamMap.get('bookingId');
    }
}