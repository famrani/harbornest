import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {
  booking?: AlegriaBooking;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingApi: BookingApiService
  ) {}

  ngOnInit(): void {
    const bookingId = this.route.snapshot.paramMap.get('bookingId') || '';
    this.bookingApi.getBooking(bookingId).subscribe((booking) => {
      this.booking = booking;
      this.loading = false;
    });
  }

  goToPayment(): void {
    if (this.booking?.bookingId) {
      this.router.navigate(['/payment', this.booking.bookingId]);
    }
  }
}
