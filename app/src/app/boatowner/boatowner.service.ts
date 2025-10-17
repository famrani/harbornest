// src/app/host-wizard/host-wizard.service.ts
import { Injectable } from '@angular/core';
import { UtilsService } from 'godigital-lib';
import { Router, } from '@angular/router';
import { LocalUtilsService } from '../services/services.service';
import { ServicesService } from 'godigital-lib';

export type ServiceKey =
  | 'sunsetChampagne' | 'lerinsDayEscape' | 'evjfEvg' | 'afterwork'
  | 'teamBuilding' | 'nightOnBoard' | 'businessMeetings';

export interface OwnerInfo {
  firstName: string;
  lastName: string;
  dob: string; // yyyy-mm-dd
  phone: string;
  email: string;
}

export interface WizardState {
  owner: OwnerInfo;
  boat: {
    name: string;
    type: 'Sail' | 'Motor' | 'Catamaran' | '';
    make: string;
    year: number | null;
    length: number | null;
    capacity: number | null;
    cabins: number | null;
    photos: string[]; // Firebase URLs
    description: string;
  };
  marina: {
    port: string;
    slip?: string;
    city: string;
    country: string;
    lat?: number | null;
    lng?: number | null;
  };
  services: Record<ServiceKey, boolean>;
  servicePhotos: Partial<Record<ServiceKey, string[]>>;
  pricing: Partial<Record<ServiceKey, { price: number; unit: 'trip'|'hour'|'night'; notes?: string }>>;
  payouts: { stripeConnected: boolean; stripeAccountId?: string };
  reviewAccepted: boolean;
}

const EMPTY: WizardState = {
  owner: { firstName:'', lastName:'', dob:'', phone:'', email:'' },
  boat: { name:'', type:'', make:'', year:null, length:null, capacity:null, cabins:null, photos:[], description:'' },
  marina: { port:'', city:'', country:'France' },
  services: {
    sunsetChampagne:false, lerinsDayEscape:false, evjfEvg:false, afterwork:false,
    teamBuilding:false, nightOnBoard:false, businessMeetings:false,
  },
  servicePhotos: {},
  pricing: {},
  payouts: { stripeConnected:false },
  reviewAccepted: false,
};

const KEY = 'hn_wizard_draft';

@Injectable({ providedIn: 'root' })
export class BoatownerService {
  private state: WizardState = this.load() || EMPTY;

    constructor(
    public mainSvc: ServicesService,
    public localUtilsSvc: LocalUtilsService,
    public router: Router,
    public utilsSvc: UtilsService,
  ) { }

  get(): WizardState { return this.state; }

  set(patch: Partial<WizardState>) {
    this.state = { ...this.state, ...patch };
    localStorage.setItem(KEY, JSON.stringify(this.state));
  }

  setDeep<K extends keyof WizardState>(key: K, value: WizardState[K]) {
    this.state = { ...this.state, [key]: value };
    localStorage.setItem(KEY, JSON.stringify(this.state));
  }

  reset() {
    this.state = EMPTY;
    localStorage.removeItem(KEY);
  }

  private load(): WizardState | null {
    try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { return null; }
  }
}
