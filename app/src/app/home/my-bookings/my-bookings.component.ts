import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'godigital-lib';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {
  bookings: AlegriaBooking[] = [];
  loading = true;

  constructor(
    private bookingApi: BookingApiService,
    private mainSvc: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = (this.mainSvc as any).bnUser || (this.mainSvc as any).currentUser || {};
    const email = user?.email || '';
    this.bookingApi.getBookings(email).subscribe((bookings) => {
      this.bookings = bookings;
      this.loading = false;
    });
  }

  openBooking(booking: AlegriaBooking): void {
    this.router.navigate(['/bookings', booking.bookingId]);
  }

  payBooking(booking: AlegriaBooking): void {
    this.router.navigate(['/payment', booking.bookingId]);
  }
}
