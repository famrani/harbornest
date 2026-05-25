import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingApiService, AlegriaBooking } from './booking-api.service';

interface BookingFieldView {
  key: string;
  value: string;
}

type BookingView = AlegriaBooking & { displayFields: BookingFieldView[] };

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookings: BookingView[] = [];
  loading = true;
  errorMessage = '';

  constructor(private bookingApi: BookingApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.loading = true;
    this.errorMessage = '';

    this.bookingApi.getBookings().subscribe({
      next: (bookings) => {
        this.bookings = (bookings || []).map((booking) => ({
          ...booking,
          displayFields: this.buildBookingFields(booking)
        }));
        this.loading = false;
      },
      error: () => {
        this.bookings = [];
        this.loading = false;
        this.errorMessage = 'Unable to load bookings from Firebase.';
      }
    });
  }

  openBooking(booking: AlegriaBooking): void {
    this.router.navigate(['/admin/bookings', booking.bookingId]);
  }

  payment(booking: AlegriaBooking): void {
    this.router.navigate(['/payment', booking.bookingId]);
  }

  trackByBookingId(index: number, booking: BookingView): string {
    return booking.bookingId || String(index);
  }

  trackByFieldKey(index: number, field: BookingFieldView): string {
    return field.key || String(index);
  }

  private buildBookingFields(booking: AlegriaBooking): BookingFieldView[] {
    const raw = (booking as any).raw && typeof (booking as any).raw === 'object'
      ? { ...(booking as any).raw }
      : { ...(booking as any) };

    delete raw.raw;
    delete raw.displayFields;

    if (booking.bookingId && !raw.bookingId) {
      raw.bookingId = booking.bookingId;
    }

    const priority = [
      'bookingId',
      'bookingStatus',
      'customerName',
      'email',
      'phone',
      'outingType',
      'outingDate',
      'departureTime',
      'arrivalTime',
      'passengers',
      'totalPrice',
      'depositAmount',
      'depositStatus',
      'warrantyAmount',
      'warrantyStatus',
      'comments'
    ];

    const keys = Object.keys(raw || {});
    const orderedKeys = [
      ...priority.filter((key) => keys.includes(key)),
      ...keys.filter((key) => !priority.includes(key)).sort((a, b) => a.localeCompare(b))
    ];

    return orderedKeys.map((key) => ({ key, value: this.formatFieldValue(raw[key]) }));
  }

  private formatFieldValue(value: any): string {
    if (value === null || value === undefined || value === '') return '-';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (typeof value === 'number') return String(value);
    if (typeof value === 'string') return value;
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return String(value);
    }
  }
}
