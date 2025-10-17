// src/app/host-wizard/host-wizard.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { BoatownerService, WizardState, ServiceKey } from '../boatowner.service';
import { StoreDbService, OBJECTNAME } from 'godigital-lib';
import { UtilsService } from 'godigital-lib';

// If you use a backend for Stripe onboarding, import your environment
// import { environment } from '../../environments/environment';

@Component({
  selector: 'app-hostwizard',
  templateUrl: './hostwizard.component.html',
  styleUrls: ['./hostwizard.component.css']
})
export class HostWizardComponent implements OnInit {
  // Steps: 1 Owner, 2 Boat, 3 Marina, 4 Services, 5 Pricing, 6 Payouts, 7 Review
  step = 1;
  saving = false;
  error = '';

  state: WizardState;

  // Replace with your authenticated user id accessor
  ownerId: string;

  // Stable ID for this listing (used for drafts & upload paths)
  listingId = String(Date.now());

  // Main backend store id (from your UtilsService)
  storeId: string;

  // Draft node name (kept separate from final boats)
  private readonly DRAFTS_NODE = 'backenddrafts';

  // Forms
  ownerForm!: FormGroup;
  boatForm!: FormGroup;
  marinaForm!: FormGroup;
  servicesForm!: FormGroup;
  pricingForm!: FormGroup;

  // Display labels for services
  serviceLabels: Record<ServiceKey, string> = {
    sunsetChampagne: 'Sunset Cruise & Champagne',
    lerinsDayEscape: 'Day Escape Lérins Islands',
    evjfEvg: 'EVJF / EVG en mer',
    afterwork: 'Afterwork en mer',
    teamBuilding: 'Team Building Challenge',
    nightOnBoard: 'Night on Board',
    businessMeetings: 'Business Meetings',
  };
  labelForService(k: string) {
    return this.serviceLabels[k as ServiceKey] || k;
  }

  // Simple marina presets (swap with your autocomplete later)
  marinas = [
    { port: 'Antibes (Port Vauban)', city: 'Antibes', country: 'France' },
    { port: 'Vieux Port', city: 'Cannes', country: 'France' },
    { port: 'Port de Nice', city: 'Nice', country: 'France' },
  ];

  constructor(
    private fb: FormBuilder,
    private boatownerSvc: BoatownerService,
    private store: StoreDbService,
    public utilSvc: UtilsService,
    private http: HttpClient // keep if you call your backend for Stripe
  ) {
    this.state = this.boatownerSvc.get();
    // Resolve IDs from your utilities/auth
    this.storeId = this.utilSvc.backendFBstoreId;
    // Replace this with your actual current user id accessor
    this.ownerId = (this.utilSvc as any).currentUserId || 'demoOwnerId';

    // Build forms with initial (possibly restored) state
    this.ownerForm = this.fb.group({
      firstName: [this.state.owner.firstName, [Validators.required, Validators.minLength(2)]],
      lastName:  [this.state.owner.lastName,  [Validators.required, Validators.minLength(2)]],
      dob:       [this.state.owner.dob,       [Validators.required]],
      phone:     [this.state.owner.phone,     [Validators.required]],
      email:     [this.state.owner.email,     [Validators.required, Validators.email]],
    });

    this.boatForm = this.fb.group({
      name: [this.state.boat.name, [Validators.required, Validators.minLength(2)]],
      type: [this.state.boat.type, Validators.required],
      make: [this.state.boat.make, Validators.required],
      year: [this.state.boat.year, [Validators.min(1950)]],
      length: [this.state.boat.length, [Validators.min(4)]],
      capacity: [this.state.boat.capacity, [Validators.min(2)]],
      cabins: [this.state.boat.cabins, [Validators.min(0)]],
      description: [this.state.boat.description, [Validators.required, Validators.minLength(10)]],
    });

    this.marinaForm = this.fb.group({
      port: [this.state.marina.port, Validators.required],
      slip: [this.state.marina.slip],
      city: [this.state.marina.city, Validators.required],
      country: [this.state.marina.country || 'France', Validators.required],
    });

    this.servicesForm = this.fb.group({
      sunsetChampagne: [this.state.services.sunsetChampagne],
      lerinsDayEscape: [this.state.services.lerinsDayEscape],
      evjfEvg: [this.state.services.evjfEvg],
      afterwork: [this.state.services.afterwork],
      teamBuilding: [this.state.services.teamBuilding],
      nightOnBoard: [this.state.services.nightOnBoard],
      businessMeetings: [this.state.services.businessMeetings],
    });

    this.pricingForm = this.fb.group({
      sunsetChampagne_price: [this.state.pricing.sunsetChampagne?.price],
      sunsetChampagne_unit: [this.state.pricing.sunsetChampagne?.unit || 'trip'],
      lerinsDayEscape_price: [this.state.pricing.lerinsDayEscape?.price],
      lerinsDayEscape_unit: [this.state.pricing.lerinsDayEscape?.unit || 'trip'],
      evjfEvg_price: [this.state.pricing.evjfEvg?.price],
      evjfEvg_unit: [this.state.pricing.evjfEvg?.unit || 'trip'],
      afterwork_price: [this.state.pricing.afterwork?.price],
      afterwork_unit: [this.state.pricing.afterwork?.unit || 'hour'],
      teamBuilding_price: [this.state.pricing.teamBuilding?.price],
      teamBuilding_unit: [this.state.pricing.teamBuilding?.unit || 'trip'],
      nightOnBoard_price: [this.state.pricing.nightOnBoard?.price],
      nightOnBoard_unit: [this.state.pricing.nightOnBoard?.unit || 'night'],
      businessMeetings_price: [this.state.pricing.businessMeetings?.price],
      businessMeetings_unit: [this.state.pricing.businessMeetings?.unit || 'hour'],
    });
  }

  async ngOnInit() {
    // Optional: restore an existing draft for this listingId if it exists
    try {
      const draft: any = await this.store.getObject(
        this.storeId,
        this.utilSvc.sdb[this.storeId],
        this.DRAFTS_NODE,
        this.listingId
      );
      if (draft) {
        if (draft.owner) this.ownerForm.patchValue(draft.owner);
        if (draft.boat) {
          // patch form fields
          const { photos, ...boatFields } = draft.boat || {};
          this.boatForm.patchValue(boatFields);
          // patch gallery in state
          if (photos?.length) {
            const updated = { ...this.state.boat, photos };
            this.boatownerSvc.setDeep('boat', updated);
          }
        }
        if (draft.marina) this.marinaForm.patchValue(draft.marina);
        if (draft.services) this.servicesForm.patchValue(draft.services);
        if (draft.pricing) {
          this.pricingForm.patchValue({
            sunsetChampagne_price: draft.pricing.sunsetChampagne?.price,
            sunsetChampagne_unit:  draft.pricing.sunsetChampagne?.unit || 'trip',
            lerinsDayEscape_price: draft.pricing.lerinsDayEscape?.price,
            lerinsDayEscape_unit:  draft.pricing.lerinsDayEscape?.unit || 'trip',
            evjfEvg_price: draft.pricing.evjfEvg?.price,
            evjfEvg_unit:  draft.pricing.evjfEvg?.unit || 'trip',
            afterwork_price: draft.pricing.afterwork?.price,
            afterwork_unit:  draft.pricing.afterwork?.unit || 'hour',
            teamBuilding_price: draft.pricing.teamBuilding?.price,
            teamBuilding_unit:  draft.pricing.teamBuilding?.unit || 'trip',
            nightOnBoard_price: draft.pricing.nightOnBoard?.price,
            nightOnBoard_unit:  draft.pricing.nightOnBoard?.unit || 'night',
            businessMeetings_price: draft.pricing.businessMeetings?.price,
            businessMeetings_unit:  draft.pricing.businessMeetings?.unit || 'hour',
          });
        }
        if (draft.servicePhotos) {
          this.boatownerSvc.setDeep('servicePhotos', draft.servicePhotos);
        }
        this.state = this.boatownerSvc.get();
      }
    } catch {
      // ignore if draft not found
    }
  }

  // ---------- Nav ----------
  next() { this.step = Math.min(this.step + 1, 7); }
  back() { this.step = Math.max(this.step - 1, 1); }
  goto(n: number) { this.step = n; }

  // ---------- Draft helper ----------
  private async saveDraft(patch: any) {
    const draft = {
      listingId: this.listingId,
      ownerId: this.ownerId,
      ...patch,
      updatedAt: Date.now()
    };
    await this.store.updateObject(
      this.storeId,
      this.utilSvc.sdb[this.storeId],
      this.DRAFTS_NODE,
      draft,
      this.listingId
    );
  }

  // ---------- Save steps ----------
  async saveOwner() {
    if (this.ownerForm.invalid) { this.ownerForm.markAllAsTouched(); return; }
    this.boatownerSvc.setDeep('owner', this.ownerForm.value);
    this.state = this.boatownerSvc.get();
    await this.saveDraft({ owner: this.state.owner });
    this.next();
  }

  async saveBoat() {
    if (this.boatForm.invalid) { this.boatForm.markAllAsTouched(); return; }
    const boat = { ...this.boatForm.value, photos: this.state.boat.photos };
    this.boatownerSvc.setDeep('boat', boat);
    this.state = this.boatownerSvc.get();
    await this.saveDraft({ boat });
    this.next();
  }

  async saveMarina() {
    if (this.marinaForm.invalid) { this.marinaForm.markAllAsTouched(); return; }
    this.boatownerSvc.setDeep('marina', this.marinaForm.value);
    this.state = this.boatownerSvc.get();
    await this.saveDraft({ marina: this.state.marina });
    this.next();
  }

  async saveServices() {
    this.boatownerSvc.setDeep('services', this.servicesForm.value);
    this.state = this.boatownerSvc.get();
    await this.saveDraft({ services: this.state.services });
    this.next();
  }

  async savePricing() {
    const s = this.servicesForm.value;
    const f = this.pricingForm.value;
    const p: any = {};
    const add = (k: ServiceKey, price: any, unit: any) => {
      if (s[k] && price != null && price !== '') p[k] = { price: Number(price), unit: unit || 'trip' };
    };
    add('sunsetChampagne', f.sunsetChampagne_price, f.sunsetChampagne_unit);
    add('lerinsDayEscape', f.lerinsDayEscape_price, f.lerinsDayEscape_unit);
    add('evjfEvg', f.evjfEvg_price, f.evjfEvg_unit);
    add('afterwork', f.afterwork_price, f.afterwork_unit);
    add('teamBuilding', f.teamBuilding_price, f.teamBuilding_unit);
    add('nightOnBoard', f.nightOnBoard_price, f.nightOnBoard_unit);
    add('businessMeetings', f.businessMeetings_price, f.businessMeetings_unit);

    this.boatownerSvc.setDeep('pricing', p);
    this.state = this.boatownerSvc.get();
    await this.saveDraft({ pricing: this.state.pricing });
    this.next();
  }

  // ---------- Uploads via your StoreDbService ----------
  async uploadBoatPhotos(files: FileList | null) {
    if (!files?.length) return;

    const urls: string[] = [];
    for (const file of Array.from(files)) {
      const directory = `boatPhotos/${this.ownerId}/${this.listingId}`;
      const url = await this.store.uploadMedia1(this.storeId, file, directory) as string;
      urls.push(url);
    }
    const updated = { ...this.state.boat, photos: [...(this.state.boat.photos || []), ...urls] };
    this.boatownerSvc.setDeep('boat', updated);
    this.state = this.boatownerSvc.get();
    await this.saveDraft({ boat: updated });
  }

  async uploadServicePhotos(files: FileList | null, serviceKey: ServiceKey) {
    if (!files?.length) return;

    const urls: string[] = [];
    for (const file of Array.from(files)) {
      const directory = `servicePhotos/${this.ownerId}/${this.listingId}/${serviceKey}`;
      const url = await this.store.uploadMedia1(this.storeId, file, directory) as string;
      urls.push(url);
    }
    const cur = this.state.servicePhotos[serviceKey] || [];
    const servicePhotos = { ...this.state.servicePhotos, [serviceKey]: [...cur, ...urls] };
    this.boatownerSvc.setDeep('servicePhotos', servicePhotos);
    this.state = this.boatownerSvc.get();
    await this.saveDraft({ servicePhotos });
  }

  // ---------- Stripe onboarding (optional backend call) ----------
  async connectStripe() {
    this.error = '';
    try {
      // If you have a backend endpoint, uncomment and configure:
      // const { url } = await this.http.post<{ url: string }>(`${environment.apiBaseUrl}/stripe/create-account-link`, {}).toPromise();
      // window.location.href = url;

      // Placeholder behavior:
      alert('Stripe onboarding: connect your backend endpoint then redirect to the returned URL.');
    } catch (e: any) {
      this.error = e?.error?.message || 'Could not start Stripe onboarding.';
    }
  }

  // ---------- Publish to backendboats + indexes ----------
  async publish() {
    this.saving = true;
    this.error = '';
    try {
      const data = this.boatownerSvc.get();

      const listing = {
        listingId: this.listingId,
        ownerId: this.ownerId,
        owner: data.owner,
        boat: data.boat,
        marina: data.marina,
        services: data.services,
        servicePhotos: data.servicePhotos || {},
        pricing: data.pricing,
        payouts: data.payouts,
        status: 'pending_review',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      // 1) Main boat record: /backendboats/<listingId>
      await this.store.updateObject(
        this.storeId,
        this.utilSvc.sdb[this.storeId],
        OBJECTNAME.bnBoats,      // 'backendboats'
        listing,
        this.listingId
      );

      // 2) Owner index: /backendowners/<ownerId>/listings/<listingId> = {active:true}
      await this.store.updateObject(
        this.storeId,
        this.utilSvc.sdb[this.storeId],
        `${OBJECTNAME.bnOwners}/${this.ownerId}/listings`,
        { active: true },
        this.listingId
      );

      // 3) Service indexes: /backendservices/<serviceKey>/<listingId> = {active:true}
      for (const [key, val] of Object.entries(data.services)) {
        if (val) {
          await this.store.updateObject(
            this.storeId,
            this.utilSvc.sdb[this.storeId],
            `${OBJECTNAME.bnBoatServices}/${key}`, // 'backendservices/<key>'
            { active: true },
            this.listingId
          );
        }
      }

      // 4) Remove draft: /backenddrafts/<listingId>
      await this.store.removeObject(
        this.storeId,
        this.utilSvc.sdb[this.storeId],
        this.DRAFTS_NODE,
        this.listingId
      );

      this.boatownerSvc.reset();
      alert('Your boat was submitted! We’ll review it shortly.');
    } catch (e: any) {
      this.error = 'Failed to submit listing.';
    } finally {
      this.saving = false;
    }
  }
}
