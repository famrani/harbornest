/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */

import { Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpEvent, HttpEventType, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { StoreDbService, OBJECTNAME, AUTHSTATUS } from './firebase-service';
import { UtilsService, dayInMilliseconds } from './utils.service';
import { UsersService } from './users.service';

import { NgxSpinnerService } from 'ngx-spinner';
import { NGXLogger } from 'ngx-logger';
import { ScriptLoadingService } from './script-loading.service';

import { saveAs } from 'file-saver';

export const externalUrlProvider = new InjectionToken(
  'externalUrlRedirectResolver'
);

export enum EDITSLIDE {
  CREATIONSLIDE = 0,
  EDITIONSLIDE = 1
}

export enum BOOKINGSTATUS {
  CREATION = 'creation',
  REQUESTED = 'requested',
  PENDINGREQUEST = 'pending request',
  APPROVED = 'approved',
  PENDINGCANCEL = 'pending cancel',
  CANCELLED = 'cancelled',
}

export enum USERROLE {
  OWNER = 'owner',
  CUSTOMER = 'customer',
  ADMIN = 'admin',
  PROVIDER = 'provider',
}

// -----------------------------------------------------------------------------
// SHARED MODELS (grouped here as requested)
// -----------------------------------------------------------------------------

export interface Users {
  userId: string;
  firstname?: string;
  lastname?: string;
  country?: string;
  email: string;
  phone?: string;
  role: USERROLE.CUSTOMER | USERROLE.OWNER | USERROLE.PROVIDER | USERROLE.ADMIN;
  photos?: string[];
  socialnetwork?: { label: string; url: string }[];
  emailverified?: boolean;
  state?: 'active' | 'disabled' | 'banned' | 'pending_review';
  displayName?: string;
  createdTS?: number;
  modifiedTS?: number;
  photoURL?: string;
  provider?: string;

  webhookSecret?: string;
}

export interface Payment {
  mode: 'setup_then_charge',
  stripe_user_id: string,
  customerId?: string,
  setupIntentId?: string,
  paymentMethodId?: string,
  paymentIntentId?: string,
  status: 'init' | 'pm_saved' | 'requires_action' | 'charge_succeeded' | 'charge_failed' | 'canceled',
  lastError?: string | null
}

export interface Bookings {
  bookingId: string;
  userId: string;
  guestId: string;
  boatId: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  price: number;
  status: string;
  services: string[];
  payment: Payment;
}

export interface Locations {
  locId: string;
  locTitle: string;
  loc_description: string;
  address: string;
  city: string;
}

export interface Boats {
  boatId: string;
  boatTitle: string;
  boatDescription: string;
  boatAddress: string;
  boatMaxpeople: number;
  boatServices: string[];
  boatdOwner: string;
}

export interface StripeStandard {
  stripe_user_id: string;
  access_token: string;     // secret: should not be in frontend in production
  refresh_token: string;
  livemode: boolean;
  scope: string;
  token_type: string;
  connectedAt: number;
}

export interface Skippers {
  ownId: string;
  ownerName: string;
  ownerExperience: string;
  ownerPhotos: string[];
  ownerInsta: number;
  ownerFacebook: string[];
  stripeStandard: StripeStandard;
}

export interface Partners {
  partId: string;
  partnerTitle: string;
  partnerDescription: string;
  partnerAddress: string;
  partnerWebsite: number;
  partnerFacebook: string;
  partnerInsta: string;
}

export interface Feedbacks {
  feedbackId: string;
  userId: string;
  bookingId: string;
  rate: number;
  description: string;
}

export interface Events {
  eventId: string;
  eventTitle: string;
  eventDescription: string;
  eventPhotos: string[];
  eventPricing: number;
}

export interface Availability {
  availId: string;
  boatId: string;
  periodStart: string;
  periodEnd: boolean;
  weekdays: boolean;
  weekends: boolean;
  daysoff: boolean;
}

// Owner tours
export interface OwnerTourCard {
  title: string;
  desc: string;
  duration?: string;
  img?: string;
}

export interface OwnerTourInclusion {
  icon: string;
  title: string;
  note?: string;
}

export interface OwnerTourAddon {
  title: string;
  desc: string;
  priceLabel?: string;
}

export interface OwnerTour {
  id?: string;
  ownerId: string;
  slug: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  location?: string;
  durationLabel?: string;
  capacity?: number;
  priceFrom?: number;
  currency?: string;
  coverImage: string;
  heroImage: string;

  tags?: string[];
  cards?: OwnerTourCard[];
  inclusions?: OwnerTourInclusion[];
  addons?: OwnerTourAddon[];

  published: boolean;
  createdAt: number;
  updatedAt: number;
}

// -----------------------------------------------------------------------------
// SERVICES SERVICE (simplified)
// -----------------------------------------------------------------------------

@Injectable({ providedIn: 'root' })
export class ServicesService {
  public config: any;
  public version: string | undefined;

  /** Objects you want to subscribe to in RTDB */
  public backendFbObjects = [
    OBJECTNAME.bnBoats,
    OBJECTNAME.bnUsers,
    OBJECTNAME.bnMessages,
    OBJECTNAME.bnBookings,
    OBJECTNAME.bnFeedbacks,
    OBJECTNAME.bnEvents,
    OBJECTNAME.bnSkippers,
  ];

  /** State */
  public bnGuest: Users | null = null;

  public bnUser: Users | null = null;
  public bnUserO = new BehaviorSubject<Users | null>(null);

  public bnOwner: Skippers[] | null = null;
  public bnOwnerO = new BehaviorSubject<Skippers[] | null>(null);

  public bnBookings: Bookings[] | null = null;
  public bnBookingsO = new BehaviorSubject<Bookings[] | null>(null);

  public bnBoats: Boats[] | null = null;
  public bnBoatsO = new BehaviorSubject<Boats[] | null>(null);

  public bnFeedbacks: Feedbacks[] | null = null;
  public bnFeedbacksO = new BehaviorSubject<Feedbacks[] | null>(null);

  public bnEvents: Events[] | null = null;
  public bnEventsO = new BehaviorSubject<Events[] | null>(null);

  public bnAvailability: Availability[] | null = null;
  public bnAvailabilityO = new BehaviorSubject<Availability[] | null>(null);

  public languageO = new BehaviorSubject<string | null>(null);

  public errorMessage = { title: '', description: '', details: '' };
  public currentPosition = { lat: 0, lng: 0 };
  public progress = 0;

  /** unsubscribe handles */
  private unsubscribers: Array<() => void> = [];

  constructor(
    public http: HttpClient,
    public router: Router,
    public storeDbSvc: StoreDbService,
    public utilSvc: UtilsService,
    public usersSvc: UsersService,
    public spinner: NgxSpinnerService,
    public scriptLoadingSvc: ScriptLoadingService,
    public logger: NGXLogger,
  ) {}

  // ---------------------------------------------------------------------------
  // BOOTSTRAP (config + firebase init)
  // ---------------------------------------------------------------------------

  async bootstrap(envPlatform?: string): Promise<void> {
    // Load config
    this.config = await this.utilSvc.readConfig('./assets/config/adf.json');

    const platform = envPlatform || this.config.application?.platform || 'test';
    this.utilSvc.platform = platform;

    // optional version
    if (this.config.application?.release) {
      this.version = `${this.config.application.release}`;
    }

    // backend URL
    this.utilSvc.backendWSURL = this.config[platform]?.backendWSUrl;
    this.utilSvc.backendURL = this.config[platform]?.backendURL;

    // language defaults
    if (!this.utilSvc.language) this.utilSvc.language = 'fr';
    this.languageO.next(this.utilSvc.language);

    // ✅ init firebase ONCE
    const firebaseConfig = this.config[platform]?.firebaseMasterConfig;
    if (!firebaseConfig) {
      throw new Error(`Missing firebaseMasterConfig in config for platform "${platform}"`);
    }
    this.storeDbSvc.init(firebaseConfig);

    // Optional: you can auto-subscribe here
    this.startSubscriptions();
  }

  // ---------------------------------------------------------------------------
  // SUBSCRIPTIONS (simple)
  // ---------------------------------------------------------------------------

  startSubscriptions(): void {
    this.stopSubscriptions();

    // Users
    this.unsubscribers.push(
      this.storeDbSvc.subscribeObject<any>(
        OBJECTNAME.bnUsers,
        (val) => {
          const arr = val ? this.utilSvc.objectToArray(val) : null;
          this.setUsers(arr);
        }
      )
    );

    // Boats
    this.unsubscribers.push(
      this.storeDbSvc.subscribeObject<any>(
        OBJECTNAME.bnBoats,
        (val) => {
          const arr = val ? this.utilSvc.objectToArray(val) : null;
          this.setBoats(arr);
        }
      )
    );

    // Bookings
    this.unsubscribers.push(
      this.storeDbSvc.subscribeObject<any>(
        OBJECTNAME.bnBookings,
        (val) => {
          const arr = val ? this.utilSvc.objectToArray(val) : null;
          this.setBookings(arr);
        }
      )
    );

    // Feedbacks
    this.unsubscribers.push(
      this.storeDbSvc.subscribeObject<any>(
        OBJECTNAME.bnFeedbacks,
        (val) => {
          const arr = val ? this.utilSvc.objectToArray(val) : null;
          this.setFeedbacks(arr);
        }
      )
    );

    // Events
    this.unsubscribers.push(
      this.storeDbSvc.subscribeObject<any>(
        OBJECTNAME.bnEvents,
        (val) => {
          const arr = val ? this.utilSvc.objectToArray(val) : null;
          this.setEvents(arr);
        }
      )
    );

    // Skippers
    this.unsubscribers.push(
      this.storeDbSvc.subscribeObject<any>(
        OBJECTNAME.bnSkippers,
        (val) => {
          const arr = val ? this.utilSvc.objectToArray(val) : null;
          this.setSkippers(arr);
        }
      )
    );
  }

  stopSubscriptions(): void {
    this.unsubscribers.forEach(u => {
      try { u(); } catch {}
    });
    this.unsubscribers = [];
  }

  // ---------------------------------------------------------------------------
  // USERS
  // ---------------------------------------------------------------------------

  public getUser(): Observable<Users | null> {
    return this.bnUserO.asObservable();
  }

  public async setLoggedUser(value: Users | undefined) {
    if (value) {
      this.utilSvc.setUid(value.userId);
      this.bnUser = value;
      this.bnUserO.next(value);
    } else {
      this.utilSvc.clearUid();
      this.bnUser = null;
      this.bnUserO.next(null);
    }
  }

  public getUsers(): Observable<Users[] | null> {
    return this.usersSvc.allUsersO.asObservable();
  }

  public setUsers(value: Users[] | null) {
    this.usersSvc.allUsers = value;
    this.usersSvc.allUsersO.next(value);
  }

  // ---------------------------------------------------------------------------
  // LOGIN / VALIDATE
  // ---------------------------------------------------------------------------

  async loginOrValidateUser(
    email?: string,
    password?: string,
    firebaseUid?: string,
    verifyEmail: boolean = true
  ): Promise<any> {

    const auth = this.storeDbSvc.auth;

    if (email && password) {
      try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;

        if ((user && user.emailVerified && verifyEmail) || !verifyEmail) {
          const userf = await this.storeDbSvc.getObject<Users>(
            OBJECTNAME.bnUsers,
            user!.uid
          );

          if (userf) {
            await this.setLoggedUser(userf);
            return [AUTHSTATUS.SUCCESS, userf];
          }

          await this.setLoggedUser(undefined);
          throw [AUTHSTATUS.UNKNOWNERROR, new Error('User not found in RTDB.')];
        } else {
          throw [AUTHSTATUS.EMAILNOTVERIFIED, ''];
        }
      } catch (err) {
        await this.setLoggedUser(undefined);
        throw [AUTHSTATUS.UNKNOWNERROR, err];
      }
    }

    if (firebaseUid) {
      try {
        const userf = await this.storeDbSvc.getObject<Users>(
          OBJECTNAME.bnUsers,
          firebaseUid
        );

        if (userf) {
          await this.setLoggedUser(userf);
          return [AUTHSTATUS.SUCCESS, userf];
        }

        await this.setLoggedUser(undefined);
        throw [AUTHSTATUS.UNKNOWNERROR, new Error('User not found in RTDB.')];
      } catch (err) {
        await this.setLoggedUser(undefined);
        throw [AUTHSTATUS.UNKNOWNERROR, err];
      }
    }

    await this.setLoggedUser(undefined);
    throw [AUTHSTATUS.UNKNOWNERROR, new Error('Provide email/password or firebaseUid.')];
  }

  disconnectingUser(userId: string) {
    if (userId) {
      this.setLoggedUser(undefined);
      this.usersSvc.logout();
    }
  }

  // ---------------------------------------------------------------------------
  // BOOKINGS / BOATS / FEEDBACKS / EVENTS / SKIPPERS
  // ---------------------------------------------------------------------------

  public getBookings(): Observable<Bookings[] | null> { return this.bnBookingsO.asObservable(); }
  public setBookings(value: Bookings[] | null) { this.bnBookings = value; this.bnBookingsO.next(value); }

  public getBoats(): Observable<Boats[] | null> { return this.bnBoatsO.asObservable(); }
  public setBoats(value: Boats[] | null) { this.bnBoats = value; this.bnBoatsO.next(value); }

  public getFeedbacks(): Observable<Feedbacks[] | null> { return this.bnFeedbacksO.asObservable(); }
  public setFeedbacks(value: Feedbacks[] | null) { this.bnFeedbacks = value; this.bnFeedbacksO.next(value); }

  public getEvents(): Observable<Events[] | null> { return this.bnEventsO.asObservable(); }
  public setEvents(value: Events[] | null) { this.bnEvents = value; this.bnEventsO.next(value); }

  public getSkippers(): Observable<Skippers[] | null> { return this.bnOwnerO.asObservable(); }
  public setSkippers(value: Skippers[] | null) { this.bnOwner = value; this.bnOwnerO.next(value); }

  // ---------------------------------------------------------------------------
  // LANGUAGE
  // ---------------------------------------------------------------------------

  public getLanguage(): Observable<string | null> {
    return this.languageO.asObservable();
  }

  public setLanguage(lang: string) {
    localStorage.setItem('language', lang);
    this.utilSvc.language = lang;
    this.languageO.next(lang);
  }

  // ---------------------------------------------------------------------------
  // EXPORT
  // ---------------------------------------------------------------------------

  public exportObjects(objects: any, objectName: string) {
    const json = JSON.stringify(objects);
    const blob = new Blob([json], { type: 'application/json' });
    saveAs(blob, objectName + '.json');
  }

  public exportString(strings: any, objectName: string) {
    const blob = new Blob([strings], { type: 'application/json' });
    saveAs(blob, objectName + '.csv');
  }

  // ---------------------------------------------------------------------------
  // UPLOAD THUMB (kept as-is but now independent of old multi-store logic)
  // ---------------------------------------------------------------------------

  uploadThumb(event1: any, source: string, url: string, directory: string) {
    return new Promise(async (resolve, reject) => {
      this.spinner.show();

      if (source === 'url') {
        if (url && url.length > 0) {
          const params = new HttpParams().set('url', url).set('dir', 'assets/' + directory);

          this.http.get(this.utilSvc.backendURL + 'store/downloadUrl',
            { params, reportProgress: true, observe: 'events' }
          ).subscribe(
            (data: HttpEvent<any>) => {
              switch (data.type) {
                case HttpEventType.DownloadProgress:
                  if (data.total) this.progress = Math.round(data.loaded / data.total * 100);
                  break;
                case HttpEventType.Response:
                  setTimeout(() => { this.progress = 0; }, 1500);
                  this.spinner.hide();
                  resolve(data.body);
                  break;
              }
            },
            err => {
              this.spinner.hide();
              reject(err);
            }
          );
        } else {
          this.spinner.hide();
          resolve(null);
        }
        return;
      }

      // source === 'file'
      try {
        // If you still upload to firebase storage, you can do it here.
        // For now we keep your backend approach.
        const file = event1?.target?.files?.[0];
        if (!file) {
          this.spinner.hide();
          resolve(null);
          return;
        }

        // If you want: upload to Firebase Storage directly:
        // const storagePath = `${directory}/${file.name}`;
        // const ref = this.storeDbSvc.storage.ref(storagePath);
        // await ref.put(file);
        // const downloadURL = await ref.getDownloadURL();

        // But since your current flow expects backend downloadUrl:
        // you can implement it with your existing endpoints as needed.

        this.spinner.hide();
        resolve(null);
      } catch (e) {
        this.spinner.hide();
        reject(e);
      }
    });
  }
}
