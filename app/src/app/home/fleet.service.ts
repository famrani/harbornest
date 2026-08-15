import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreDbService, UtilsService } from 'godigital-lib';

export interface AlegriaBoatResource {
  boatId: string;
  ownerId?: string;
  defaultSkipperId?: string;
  boatName: string;
  boatType: string;
  manufacturer?: string;
  model?: string;
  year?: number;
  registrationNumber?: string;
  defaultDepartureMarina?: string;
  clickAndBoatUrl?: string;
  clickAndBoatListingId?: string;
  samBoatUrl?: string;
  samBoatListingId?: string;
  websiteUrl?: string;
  defaultWarranty?: number;
  defaultSkipperPrice?: number;
  defaultCleaningPrice?: number;
  currency?: string;
  maxGuests?: number;
  cabins?: number;
  bathrooms?: number;
  length?: string;
  beam?: string;
  draft?: string;
  engines?: string;
  imageUrl?: string;
  extraServices?: Record<string, any>;
  active?: boolean;
  createdTS?: number;
  modifiedTS?: number;
}

@Injectable({ providedIn: 'root' })
export class FleetService {
  private readonly collectionPath = 'bnFleet';
  private readonly firebaseUrl = 'https://adn-dev-4d05d.firebaseio.com';

  constructor(
    private http: HttpClient,
    private storeDb: StoreDbService,
    private utilsSvc: UtilsService,
  ) {}

  getDefaultBoat(): AlegriaBoatResource {
    const now = Date.now();
    return {
      boatId: 'alegria',
      ownerId: 'alegria',
      defaultSkipperId: 'alegria-default',
      boatName: 'Alegria',
      boatType: 'Catamaran',
      manufacturer: 'Bali - Catana',
      model: 'Bali 4.1',
      year: 2019,
      registrationNumber: '',
      defaultDepartureMarina: 'Marina Baie des Anges',
      clickAndBoatUrl: '',
      clickAndBoatListingId: '',
      samBoatUrl: '',
      samBoatListingId: '',
      websiteUrl: 'https://alegriaboat.eu',
      defaultWarranty: 500,
      defaultSkipperPrice: 300,
      defaultCleaningPrice: 150,
      currency: 'EUR',
      maxGuests: 12,
      cabins: 4,
      bathrooms: 4,
      length: '',
      beam: '',
      draft: '',
      engines: '',
      imageUrl: '/api/media/object?path=assets%2Fimg%2Flogo-Alegria.png',
      extraServices: {},
      active: true,
      createdTS: now,
      modifiedTS: now,
    };
  }

  async listBoats(): Promise<AlegriaBoatResource[]> {
    const raw = await this.readPath(this.collectionPath).catch(() => null);
    let boats: AlegriaBoatResource[] = [];

    if (Array.isArray(raw)) {
      boats = raw.filter(Boolean);
    } else if (raw && typeof raw === 'object') {
      boats = Object.keys(raw).map((key) => ({ boatId: key, ...(raw[key] || {}) }));
    }

    if (!boats.length) {
      return [this.getDefaultBoat()];
    }

    return boats
      .filter((boat) => boat && boat.active !== false)
      .sort((a, b) => String(a.boatName || '').localeCompare(String(b.boatName || '')));
  }

  async getBoat(boatId = 'alegria'): Promise<AlegriaBoatResource> {
    const raw = await this.readPath(`${this.collectionPath}/${boatId}`).catch(() => null);
    return { ...this.getDefaultBoat(), ...(raw || {}), boatId };
  }

  async saveBoat(boat: Partial<AlegriaBoatResource>): Promise<AlegriaBoatResource> {
    const now = Date.now();
    const boatId = String(boat.boatId || boat.boatName || 'alegria').trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '') || 'alegria';
    const payload: AlegriaBoatResource = {
      ...this.getDefaultBoat(),
      ...(boat as any),
      boatId,
      defaultWarranty: Number(boat.defaultWarranty ?? 500),
      defaultSkipperPrice: Number(boat.defaultSkipperPrice ?? 300),
      defaultCleaningPrice: Number(boat.defaultCleaningPrice ?? 150),
      maxGuests: Number(boat.maxGuests ?? 12),
      cabins: Number(boat.cabins ?? 0),
      bathrooms: Number(boat.bathrooms ?? 0),
      active: boat.active !== false,
      createdTS: boat.createdTS || now,
      modifiedTS: now,
    };

    await this.writePath(`${this.collectionPath}/${boatId}`, payload);
    return payload;
  }

  private async readPath(path: string): Promise<any> {
    for (const db of this.getRealtimeDatabaseCandidates()) {
      try {
        const snap = await db.ref(path).once('value');
        return snap && typeof snap.val === 'function' ? snap.val() : null;
      } catch {}
    }

    return this.http.get<any>(`${this.firebaseUrl}/${path}.json`).toPromise();
  }

  private async writePath(path: string, payload: any): Promise<void> {
    for (const db of this.getRealtimeDatabaseCandidates()) {
      try {
        await db.ref(path).set(payload);
        return;
      } catch {}
    }

    await this.http.put(`${this.firebaseUrl}/${path}.json`, payload).toPromise();
  }

  private getRealtimeDatabaseCandidates(): any[] {
    const store: any = this.storeDb as any;
    const util: any = this.utilsSvc as any;
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
}
