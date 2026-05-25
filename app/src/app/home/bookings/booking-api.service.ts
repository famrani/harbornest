import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StoreDbService, UtilsService } from 'godigital-lib';

export interface AlegriaBooking {
  bookingId: string;
  customerName: string;
  email: string;
  phone?: string;
  outingType: string;
  outingDate: string;
  departureTime?: string;
  arrivalTime?: string;
  passengers?: number;
  totalPrice: number;
  depositAmount?: number;
  warrantyAmount?: number;
  depositStatus?: string | boolean;
  warrantyStatus?: string | boolean;
  bookingStatus?: string;
  comments?: string;
  raw?: any;
}

@Injectable({ providedIn: 'root' })
export class BookingApiService {
  private readonly collectionName = 'bnBookings';

  private readonly restDatabaseUrls = [
    'https://adn-dev-4d05d-default-rtdb.europe-west1.firebasedatabase.app',
    'https://adn-dev-4d05d-default-rtdb.firebaseio.com',
    'https://adn-dev-4d05d.firebaseio.com',
  ];

  private fallbackBookings: AlegriaBooking[] = [];

  constructor(
    private http: HttpClient,
    private utilsSvc: UtilsService,
    private storeDb: StoreDbService
  ) {}

  getBookings(email?: string): Observable<AlegriaBooking[]> {
    return from(this.getBookingsFromFirebase(email)).pipe(
      catchError(() => this.getBookingsFromBackend(email)),
      catchError(() => of(this.fallbackBookings))
    );
  }

  getBooking(bookingId: string): Observable<AlegriaBooking | undefined> {
    return from(this.getBookingFromFirebase(bookingId)).pipe(
      catchError(() => this.getBookingFromBackend(bookingId)),
      catchError(() => of(undefined))
    );
  }

  createDepositCheckout(bookingId: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/stripe/deposit-checkout`, { bookingId }, { withCredentials: true });
  }

  createWarrantySetup(bookingId: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/stripe/warranty-setup`, { bookingId }, { withCredentials: true });
  }

  chargeWarranty(bookingId: string, amount: number, reason: string): Observable<any> {
    const payload = { bookingId, amount, warrantyAmount: amount, reason };
    const endpoints = [
      `${this.baseUrl}/stripe/warranty-charge`,
      `${this.baseUrl}/api/payments/charge-warranty`,
      `${this.baseUrl}/api/stripe/warranty-charge`,
    ];

    return new Observable((observer) => {
      let index = 0;
      const tryNext = () => {
        if (index >= endpoints.length) {
          observer.error(new Error('Unable to charge warranty.'));
          return;
        }
        this.http.post<any>(endpoints[index++], payload, { withCredentials: true }).subscribe({
          next: (response) => { observer.next(response); observer.complete(); },
          error: () => tryNext(),
        });
      };
      tryNext();
    });
  }

  async updateBooking(bookingId: string, payload: Partial<AlegriaBooking>): Promise<void> {
    const store: any = this.storeDb as any;
    const util: any = this.utilsSvc as any;
    const existing = await this.getBookingFromFirebase(bookingId).catch(() => undefined);
    const merged = { ...(existing?.raw || existing || {}), ...payload, bookingId, modifiedTS: Date.now() };

    // Prefer real RTDB handles when available.
    for (const db of this.getRealtimeDatabaseCandidates(store, util)) {
      try {
        await db.ref(`${this.collectionName}/${bookingId}`).set(merged);
        return;
      } catch {}
    }

    // REST fallback to root /bnBookings/{bookingId}.
    for (const baseUrl of this.restDatabaseUrls) {
      try {
        await this.http.put(`${baseUrl.replace(/\/+$/, '')}/${this.collectionName}/${bookingId}.json`, merged).toPromise();
        return;
      } catch {}
    }

    if (typeof store.updateObject !== 'function') {
      throw new Error('Firebase updateObject is not available.');
    }

    try {
      await store.updateObject(this.collectionName, merged, bookingId);
      return;
    } catch {}

    try {
      await store.updateObject(this.collectionName, bookingId, merged);
      return;
    } catch {}

    await store.updateObject(util.backendFBstoreId, util.mdb, this.collectionName, merged, bookingId);
  }

  private get baseUrl(): string {
    return (this.utilsSvc as any)?.backendURL || '';
  }

  private getBookingsFromBackend(email?: string): Observable<AlegriaBooking[]> {
    const suffix = email ? `?email=${encodeURIComponent(email)}` : '';
    return this.http.get<any>(`${this.baseUrl}/bookings${suffix}`, { withCredentials: true }).pipe(
      map((response) => this.normalizeBookings(response))
    );
  }

  private getBookingFromBackend(bookingId: string): Observable<AlegriaBooking | undefined> {
    return this.http.get<any>(`${this.baseUrl}/bookings/${bookingId}`, { withCredentials: true }).pipe(
      map((response) => this.normalizeBooking(response?.booking || response))
    );
  }

  private async getBookingsFromFirebase(email?: string): Promise<AlegriaBooking[]> {
    const raw = await this.readBookingsRaw();
    const bookings = this.normalizeBookings(raw)
      .filter((booking) => booking.bookingStatus !== 'deleted')
      .sort((a, b) => String(b.outingDate || '').localeCompare(String(a.outingDate || '')) || String(b.departureTime || '').localeCompare(String(a.departureTime || '')));

    if (!email) return bookings;
    const expected = String(email).trim().toLowerCase();
    return bookings.filter((booking) => String(booking.email || '').trim().toLowerCase() === expected);
  }

  private async getBookingFromFirebase(bookingId: string): Promise<AlegriaBooking | undefined> {
    const bookings = await this.getBookingsFromFirebase();
    return bookings.find((booking) => booking.bookingId === bookingId);
  }

  private async readBookingsRaw(): Promise<any> {
    const store: any = this.storeDb as any;
    const util: any = this.utilsSvc as any;

    // Current Firebase structure from your export:
    // /bnBookings/{bookingId}
    // Example: /bnBookings/202606071
    const restValue = await this.readBookingsViaRest();
    const extractedRest = this.extractBookings(restValue);
    if (this.hasBookings(extractedRest)) return extractedRest;

    for (const db of this.getRealtimeDatabaseCandidates(store, util)) {
      const rootValue = await this.readDatabasePath(db, this.collectionName);
      const extractedRoot = this.extractBookings(rootValue);
      if (this.hasBookings(extractedRoot)) return extractedRoot;

      if (util.backendFBstoreId) {
        const scopedValue = await this.readDatabasePath(db, `${util.backendFBstoreId}/${this.collectionName}`);
        const extractedScoped = this.extractBookings(scopedValue);
        if (this.hasBookings(extractedScoped)) return extractedScoped;
      }
    }

    const candidates: Array<() => Promise<any>> = [];
    if (typeof store.getObject === 'function') {
      candidates.push(() => store.getObject(this.collectionName));
      candidates.push(() => store.getObject(`/${this.collectionName}`));
      candidates.push(() => store.getObject(this.collectionName, -1));
      candidates.push(() => store.getObject(undefined, util.mdb, this.collectionName, -1));
      candidates.push(() => store.getObject(null, util.mdb, this.collectionName, -1));
      candidates.push(() => store.getObject(util.backendFBstoreId, util.mdb, this.collectionName, -1));
      candidates.push(() => store.getObject(util.backendFBstoreId, util.mdb, this.collectionName));
      candidates.push(() => store.getObject(`${util.backendFBstoreId}/${this.collectionName}`));
      candidates.push(() => store.getObject('1000', util.mdb, this.collectionName, -1));
      candidates.push(() => store.getObject('1000', util.mdb, this.collectionName));
    }

    for (const candidate of candidates) {
      try {
        const value = await candidate();
        const extracted = this.extractBookings(value);
        if (this.hasBookings(extracted)) return extracted;
      } catch {}
    }

    const memoryCandidates = [
      store.firebaseBSSdata?.[this.collectionName],
      store.firebaseBSSdata?.['1000']?.[this.collectionName],
      store.firebaseBSSdata?.[util.backendFBstoreId]?.[this.collectionName],
      store.firebaseBSSdata?.[util.backendFBstoreId],
      store.firebaseBSSdata,
      store[this.collectionName],
      store?.data?.[this.collectionName],
      store?.data?.['1000']?.[this.collectionName],
    ];

    for (const value of memoryCandidates) {
      const extracted = this.extractBookings(value);
      if (this.hasBookings(extracted)) return extracted;
    }

    return [];
  }

  private async readBookingsViaRest(): Promise<any> {
    const paths = [
      this.collectionName,
      `1000/${this.collectionName}`,
    ];

    for (const baseUrl of this.restDatabaseUrls) {
      for (const path of paths) {
        try {
          const value = await this.http.get<any>(`${baseUrl.replace(/\/+$/, '')}/${path}.json`).toPromise();
          const extracted = this.extractBookings(value);
          if (this.hasBookings(extracted)) return extracted;
        } catch {}
      }
    }

    // Last chance: fetch root export and extract /bnBookings from it.
    for (const baseUrl of this.restDatabaseUrls) {
      try {
        const value = await this.http.get<any>(`${baseUrl.replace(/\/+$/, '')}/.json`).toPromise();
        const extracted = this.extractBookings(value);
        if (this.hasBookings(extracted)) return extracted;
      } catch {}
    }

    return null;
  }

  private getRealtimeDatabaseCandidates(store: any, util: any): any[] {
    const candidates = [
      util?.mdb,
      store?.backendFbRef?.database,
      store?.backendFbRef?.['database'],
      store?.firebaseBSSdata?.database,
    ];

    return candidates.filter((db, index, array) =>
      db && typeof db.ref === 'function' && array.indexOf(db) === index
    );
  }

  private async readDatabasePath(db: any, path: string): Promise<any> {
    try {
      const cleanPath = path.replace(/^\/+/, '');
      const snapshot = await db.ref(cleanPath).once('value');
      return snapshot && typeof snapshot.val === 'function' ? snapshot.val() : null;
    } catch {
      return null;
    }
  }

  private hasBookings(value: any): boolean {
    if (!value) return false;
    if (Array.isArray(value)) return value.filter(Boolean).length > 0;
    if (typeof value === 'object') return Object.keys(value).length > 0;
    return false;
  }

  private extractBookings(value: any): any {
    if (!value) return null;

    if (Array.isArray(value)) {
      return value.filter((item) => !!item);
    }

    if (typeof value !== 'object') return null;

    // Direct root export: { bnBookings: { bookingId: {...} } }
    if (value[this.collectionName]) return value[this.collectionName];

    // Store-scoped export: { 1000: { bnBookings: {...} } }
    const storeId = (this.utilsSvc as any)?.backendFBstoreId || '1000';
    if (value[storeId]?.[this.collectionName]) return value[storeId][this.collectionName];
    if (value['1000']?.[this.collectionName]) return value['1000'][this.collectionName];

    // Already inside the collection: { 202606071: { bookingId: '202606071', ... } }
    const keys = Object.keys(value);
    if (keys.some((key) => value[key]?.bookingId || value[key]?.customerName || value[key]?.customer?.email || value[key]?.email || value[key]?.outingType)) {
      return value;
    }

    // Last resort: recursively search for a bnBookings object inside a bigger Firebase export.
    for (const key of keys) {
      const child = value[key];
      if (child && typeof child === 'object') {
        if (child[this.collectionName]) return child[this.collectionName];
        if (child['1000']?.[this.collectionName]) return child['1000'][this.collectionName];
      }
    }

    return null;
  }

  private normalizeBookings(response: any): AlegriaBooking[] {
    const raw = Array.isArray(response)
      ? response
      : Array.isArray(response?.bookings)
        ? response.bookings
        : response && typeof response === 'object'
          ? Object.keys(response).map((key) => ({ ...response[key], bookingId: response[key]?.bookingId || key }))
          : [];

    return raw.map((item: any) => this.normalizeBooking(item)).filter((booking: AlegriaBooking) => !!booking.bookingId);
  }

  private normalizeBooking(item: any): AlegriaBooking {
    if (!item) {
      return { bookingId: '', customerName: '', email: '', outingType: '', outingDate: '', totalPrice: 0 };
    }

    const customer = item?.customer || {};
    const time = item?.time || {};
    const party = item?.party || {};
    const start = time.startAt || item.startAt || item.departureAt || '';
    const end = time.endAt || item.endAt || item.arrivalAt || '';
    const totalPrice = Number(item.totalPrice ?? item.total ?? item.amount ?? item.price ?? 0);
    const depositAmount = Number(item.depositAmount ?? item.deposit ?? (totalPrice ? Math.round(totalPrice * 0.3 * 100) / 100 : 0));
    const warrantyAmount = Number(item.warrantyAmount ?? item.warranty ?? item.cautionAmount ?? item.securityDepositAmount ?? 0);

    return {
      bookingId: item.bookingId || item.id || item.reference || '',
      customerName: item.customerName || customer.fullName || item.name || `${customer.firstname || ''} ${customer.lastname || ''}`.trim() || '',
      email: item.email || customer.email || '',
      phone: item.phone || customer.phone || '',
      outingType: item.outingType || item.outing || item.type || item.category || '',
      outingDate: item.outingDate || item.date || (start ? String(start).slice(0, 10) : ''),
      departureTime: item.departureTime || (start ? String(start).slice(11, 16) : ''),
      arrivalTime: item.arrivalTime || (end ? String(end).slice(11, 16) : ''),
      passengers: Number(item.passengers || party.total || item.guests || 0) || undefined,
      totalPrice,
      depositAmount,
      warrantyAmount,
      depositStatus: item.depositStatus ?? item.depositPaid ?? false,
      warrantyStatus: item.warrantyStatus ?? item.warrantyRegistered ?? false,
      bookingStatus: item.bookingStatus || item.status || 'requested',
      comments: item.comments || item.notes?.customerNote || item.comment || '',
      raw: item,
    };
  }
}
