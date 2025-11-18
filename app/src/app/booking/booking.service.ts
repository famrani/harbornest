// src/app/services/booking-stripe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {ServicesService, UtilsService, UsersService, Users} from 'godigital-lib';
import { LocalUtilsService } from '../services/services.service';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private api;

  constructor(
    public mainSvc: ServicesService,
    private utilsSvc: UtilsService,
    private usersSvc: UsersService,
    public localUtilsSvc: LocalUtilsService,
    public http: HttpClient,
  ) {
    this.api = this.utilsSvc.backendURL + '/api';
  }

  // --- BOOKINGS ---
  createBooking(payload: any) {
    return this.http.post<{ ok: boolean; bookingId: string }>(`${this.api}/bookings`, payload);
  }

  updateBookingStatus(bookingId: string, body: { status: 'pending'|'confirmed'|'declined', moderatorId?: string }) {
    return this.http.patch<{ ok: boolean }>(`${this.api}/bookings/${bookingId}/status`, body);
  }

  // --- OWNER CONNECT ---
  openStripeConnect(ownerId: string) {
    // backend endpoint issues a 302 redirect to Stripe OAuth
    const base = this.api.replace('/api', ''); // ensure root path
    window.location.href = `${base}/stripe/connect/authorize?ownerId=${encodeURIComponent(ownerId)}`;
  }

  // --- CHECKOUT (setup) ---
  checkoutSetup(req: {
    ownerId: string;
    bookingId: string;
    customerEmail?: string;
    successUrl: string;
    cancelUrl: string;
  }) {
    return this.http.post<{ url: string; id: string }>(`${this.api}/pay/checkout-setup`, req);
  }

  // --- ACCEPT & CHARGE (owner) ---
  acceptAndCharge(req: { ownerId: string; bookingId: string; amount: number; currency?: string }) {
    return this.http.post<{ ok: boolean; paymentIntent?: any }>(`${this.api}/pay/accept-and-charge`, req);
  }

    get wnGuest() {
      return this.localUtilsSvc.wnGuest;
    }
    set wnGuest(value: Users) {
      this.localUtilsSvc.wnGuest = value;
    }
  
    get errorMessage() {
      return this.localUtilsSvc.errorMessage;
    }
    set errorMessage(value) {
      this.localUtilsSvc.errorMessage = value;
    }
  
    get version() {
      return this.mainSvc.version;
    }
    set version(value) {
      this.mainSvc.version = value;
    }
  
}
