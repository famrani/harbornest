// src/app/components/booking/booking.component.ts
import { Component } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  // minimal fields – adapt to your form
  ownerId = '';          // REQUIRED: must be an owner who completed OAuth
  eventType = 'sunset';
  date = '';
  time = '';
  people = 2;

  firstName = '';
  lastName = '';
  email = '';
  phone = '';

  bookingId?: string;
  busy = false;
  error?: string;

  constructor(private api: BookingService) {}

  async createBooking() {
    this.error = undefined;
    this.busy = true;
    try {
      const payload = {
        ownerId: this.ownerId,
        eventType: this.eventType,
        date: this.date,
        time: this.time,
        people: this.people,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone
      };
      const res = await this.api.createBooking(payload).toPromise();
      this.bookingId = res?.bookingId;
    } catch (e: any) {
      this.error = e?.error?.error || e?.message || 'Failed to create booking';
    } finally {
      this.busy = false;
    }
  }

  async saveCard() {
    if (!this.ownerId || !this.bookingId) return;

    this.error = undefined;
    this.busy = true;
    try {
      const successUrl = `${window.location.origin}/booking-success`;
      const cancelUrl  = `${window.location.origin}/booking-cancel`;
      const r = await this.api.checkoutSetup({
        ownerId: this.ownerId,
        bookingId: this.bookingId,
        customerEmail: this.email,
        successUrl,
        cancelUrl
      }).toPromise();

      if (r?.url) {
        // Go to Stripe Checkout (mode: 'setup')
        window.location.href = r.url;
      } else {
        this.error = 'No checkout URL returned';
      }
    } catch (e: any) {
      this.error = e?.error?.error || e?.message || 'Failed to start checkout';
    } finally {
      this.busy = false;
    }
  }
}
