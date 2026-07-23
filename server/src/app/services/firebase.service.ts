import { Injectable } from '@nestjs/common'; // if using NestJS
import { BehaviorSubject } from 'rxjs';
import * as admin from 'firebase-admin';   // ✅ Correct way
import * as fs from 'fs';
import { UtilsService } from './utils.service';

export enum OBJECTNAME {
  bnLocations = 'backendlocations',
  bnBoats = 'backendboats',
  bnUsers = 'backendusers',
  bnMessages = 'backendmessages',
  bnBookings = 'bnBookings',
  bnProposals = 'bnProposals',
  bnFleet = 'bnFleet',
  bnSkippers = 'bnSkippers',
  bnOutings = 'bnOutings',
  bnPricingModel = 'bnPricingModel',
  bnFeedbacks = 'backendfeedbacks',
  bnPartners = 'backendpartners',
  bnEvents = 'backendevents',
  bnAvailability = 'backendavailability',
  bnBoatServices = 'backendservices',
  bnOwners = 'backendowners',
  backendcalendar = 'backendcalendar',
  guestInfo = 'guestInfo',
  siteContent = 'siteContent',
}

export enum USERROLE {
    OWNER = 'owner',
    CUSTOMER = 'customer',
    ADMIN = 'admin',
    PROVIDER = 'provider',
}

export interface Users {
    userId: string;                     // UID from Firebase Auth
    email: string;
    firstname: string;
    lastname: string;
    displayName: string;
    phone?: string;
    country?: string;

    role: USERROLE.CUSTOMER | USERROLE.OWNER | USERROLE.PROVIDER | USERROLE.ADMIN;                 // Fixed role

    // --- Stripe Standard OAuth connection ---
    stripeStandard?: {
        stripe_user_id: string;          // e.g. acct_1Pxabc...
        access_token: string;            // secret ! do NOT expose to frontend
        refresh_token: string;
        livemode: boolean;
        scope: string;                   // "read_write"
        token_type: string;
        connectedAt: number;             // timestamp
    };

    // --- Stripe Webhook secret for this owner’s account ---
    webhookSecret?: string;            // created by Owner in Stripe Dashboard → Webhooks

    // --- App profile ---
    photos: string[];                  // optional uploaded photos
    photoURL?: string;                 // primary profile picture
    socialnetwork?: { label: string; url: string }[];

    // --- Provider info ---
    emailverified: boolean;
    provider: 'firebase' | 'google';

    // --- Timestamps ---
    createdTS: number;
    modifiedTS: number;

    // --- App state ---
    state: 'active' | 'suspended' | 'pending_review';
}

export interface Bookings {
  bookingId: string;
  hostId: string | undefined;
  guestId: string | undefined;
  locationId: string | undefined;
  start: string;
  end: string;
  daybooking: boolean;
  price: number,
  status: string
}

export interface Locations {
  locationId: string;
  title: string;
  description: string;
  photos: string[];
  equipments: string[];
  priceperhour: number;
  priceperday: number;
  address: string;
  city: string;
  lat: number;
  lng: number;
  type: string;
  owner: string
}
export interface Locationtypes {
  locationtypeId: string;
  title: string;
  description: string;
}

export interface Feedbacks {
  feedbackId: string;
  userId: string;
  bookingId: string;
  rate: number;
  description: string;
}

export interface Messages {
  messageId: string;
  sender: string;
  receiver: string;
  timestamp: number;
  message: string;
}

export interface Equipments {
  equipmentId: string;
  title: string;
  description: string;
}

@Injectable()
export class StoreDbService {
  public db;
  public bucket;
  public auth;

  public firebaseBSS: any = {};
  public firebaseData: any = {};

  constructor(private utilSvc: UtilsService) {
  }

  initFirebase() {
    let currentDir = process.cwd();
    const serviceAccount = JSON.parse(
      fs.readFileSync(currentDir + '/dist2/config/adn-dev-4d05d-firebase-adminsdk-gzmds-f0f734a54c.json', 'utf8')
    );

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: this.utilSvc.databaseURL,
      storageBucket: this.utilSvc.storageBucket,
    });

    this.db = admin.database();
    this.auth = admin.auth();
    this.bucket = admin.storage().bucket();
    const toto = this.bucket;
  }

  async getObject(refPath: string) {
    const snapshot = await this.db.ref(refPath).once('value');
    return snapshot.val();
  }

  async setObject(refPath: string, data: any) {
    await this.db.ref(refPath).set(data);
  }

  async removeObject(refPath: string) {
    await this.db.ref(refPath).remove();
  }

  subscribe(refPath: string, storeKey: string) {
    if (!this.firebaseBSS[storeKey]) {
      this.firebaseBSS[storeKey] = new BehaviorSubject(null);
    }

    this.db.ref(refPath).on('value', snapshot => {
      const value = snapshot.val();
      this.firebaseBSS[storeKey].next(value);
    });
  }

  unsubscribe(refPath: string) {
    this.db.ref(refPath).off();
  }

  async uploadFile(localFilePath: string, destinationPath: string) {
    await this.bucket.upload(localFilePath, {
      destination: destinationPath,
      metadata: {
        cacheControl: 'public,max-age=31536000',
      },
    });
  }

  async deleteFile(destinationPath: string) {
    await this.bucket.file(destinationPath).delete();
  }

  createUser(email: string, password: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const userRecord = await admin.auth().createUser({
          email,
          password,
        });
        resolve(userRecord);
      } catch (e) {
        reject(e);
      }
    });
  }

  getUserIdByEmail(email: string) {
    const maf = admin.auth();

    return new Promise((resolve, reject) => {
      maf.getUserByEmail(email.toLowerCase()).then(
        (success) => {
          const userid = success.uid;
          resolve(userid);
        },
        error => {
          reject(error);
        });
    });
  }

  // --- Add inside StoreDbService ---

  /** Create a push key under a path and set value */
  async pushObject(path: string, data: any): Promise<{ key: string }> {
    const ref = this.db.ref(path).push();
    const key = ref.key as string;
    await ref.set(data);
    return { key };
  }

  /** Shallow update (merge) */
  async updateObject(path: string, data: Partial<any>): Promise<void> {
    await this.db.ref(path).update(data);
  }

}
