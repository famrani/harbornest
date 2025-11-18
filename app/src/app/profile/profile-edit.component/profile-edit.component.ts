import { Component, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StoreDbService, OBJECTNAME, USERROLE } from 'godigital-lib';
import { UtilsService, Users } from 'godigital-lib';

interface OwnerStripeStatus {
    connected: boolean;
    stripe_user_id: string | null;
    livemode: boolean;
    connectedAt: number | null;
}

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html'
})
export class ProfileEditComponent implements OnDestroy {
    loading = true;
    saving = false;
    error?: string;
    success = false;
    form: FormGroup;

    uid?: string;
    profile?: Users;
    sub?: Subscription;

    photoUrls: string[] = [];

    // Stripe-related UI state (coming from owners/providers records via API)
    stripeActionRunning = false;
    stripeStatus?: OwnerStripeStatus;
    stripeStatusError?: string;

    constructor(
        private fb: FormBuilder,
        private storeDb: StoreDbService,
        public utilSvc: UtilsService
    ) {
        this.sub = this.storeDb.authState$.subscribe(async u => {
            this.uid = u?.uid || undefined;
            if (!this.uid) {
                this.loading = false;
                return;
            }
            await this.loadProfile();
        });

        // role is now editable (guest -> owner / provider)
        this.form = this.fb.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            displayName: [''],
            phone: [''],
            country: [''],
            role: [USERROLE.CUSTOMER],
            state: ['active'],
            socialnetwork: this.fb.array([] as any),
        });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }

    get socials() { return this.form.get('socialnetwork') as FormArray; }
    newSocial(label = '', url = '') { return this.fb.group({ label: [label], url: [url] }); }

    // --- Role / Stripe helpers -------------------------------------------------

    get currentRole(): USERROLE.CUSTOMER | USERROLE.OWNER | USERROLE.PROVIDER | USERROLE.ADMIN {
        return (this.form.get('role')?.value as any) || USERROLE.CUSTOMER;
    }

    get isOwnerOrProvider(): boolean {
        return this.currentRole === USERROLE.OWNER || this.currentRole === USERROLE.PROVIDER;
    }

    get stripeConnected(): boolean {
        return !!this.stripeStatus?.connected;
    }

    get stripeStatusLabel(): string {
        if (!this.isOwnerOrProvider) {
            return 'Not applicable for this role';
        }

        if (!this.stripeStatus) {
            // No owner/provider record yet, or never connected
            return 'Not connected';
        }

        if (!this.stripeStatus.connected) {
            return 'Not connected';
        }

        if (this.stripeStatus.connected && !this.stripeStatus.livemode) {
            return this.stripeStatus.stripe_user_id
                ? `Connected (test: ${this.stripeStatus.stripe_user_id})`
                : 'Connected (test mode)';
        }

        return this.stripeStatus.stripe_user_id
            ? `Connected (${this.stripeStatus.stripe_user_id})`
            : 'Connected';
    }

    // --- Load profile (Users) --------------------------------------------------

    private async loadProfile() {
        this.loading = true;
        this.error = undefined;
        this.stripeStatusError = undefined;

        try {
            const doc = await this.storeDb.getObject(
                this.utilSvc.backendFBstoreId,
                this.utilSvc.mdb,
                OBJECTNAME.bnUsers,
                this.uid
            ) as Users | null;

            this.profile = doc || undefined;

            const role = doc?.role ?? USERROLE.CUSTOMER;

            this.form.reset({
                firstname: doc?.firstname || '',
                lastname: doc?.lastname || '',
                displayName: doc?.displayName || '',
                phone: doc?.phone || '',
                country: doc?.country || '',
                role,
                state: doc?.state || 'active'
            });

            // socials
            this.socials.clear();
            (doc?.socialnetwork || []).forEach(s => this.socials.push(this.newSocial(s.label, s.url)));

            // photos
            this.photoUrls = (doc?.photos || []).slice();

            // Load Stripe status only for owner / provider
            if (this.isOwnerOrProvider) {
                await this.loadStripeStatus();
            } else {
                this.stripeStatus = undefined;
            }

            this.loading = false;
        } catch (e: any) {
            this.error = e?.message || 'Failed to load profile';
            this.loading = false;
        }
    }

    // --- Load Stripe status (from owners/providers side) ----------------------

    private async loadStripeStatus() {
        if (!this.uid) return;

        this.stripeStatus = undefined;
        this.stripeStatusError = undefined;

        try {
            // Currently using the owner endpoint. If you add a dedicated provider
            // endpoint later, you can branch here based on this.currentRole.
            const url = `${this.utilSvc.backendURL}/owner/stripe/status?ownerId=${encodeURIComponent(this.uid)}`;
            const res = await fetch(url);

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || 'Failed to load Stripe status');
            }

            const data = await res.json() as OwnerStripeStatus;
            this.stripeStatus = data;
        } catch (e: any) {
            console.error('Stripe status error', e);
            this.stripeStatusError = e?.message || 'Stripe status unavailable';
        }
    }

    // --- Photos ---------------------------------------------------------------

    async onPhotosSelected(files: FileList | null) {
        if (!files?.length) return;
        if (!this.uid) return;
        this.saving = true;
        try {
            const dir = `users/${this.uid}`;
            for (const file of Array.from(files)) {
                const url = await this.storeDb.uploadObjects1(this.utilSvc.backendFBstoreId, file, dir) as string;
                this.photoUrls.push(url);
            }
        } catch (e: any) {
            this.error = e?.message || 'Photo upload failed';
        } finally {
            this.saving = false;
        }
    }

    // --- Stripe connect / disconnect -----------------------------------------

    /** Stripe connect: redirect to backend OAuth authorize endpoint */
    async connectStripe() {
        if (!this.uid) return;
        if (!this.isOwnerOrProvider) {
            this.error = 'Choose "Boat owner" or "Provider" role before connecting Stripe.';
            return;
        }

        // 1) Save profile first so the new role (owner/provider) is persisted
        if (!this.saving) {
            await this.save();     // save() is already async
            if (this.error) {
                // If save failed, do NOT continue to Stripe
                return;
            }
        }

        this.stripeActionRunning = true;

        // 2) Backend expects 'owner' | 'provider' strings
        const accountType = this.currentRole === USERROLE.PROVIDER ? 'provider' : 'owner';

        // 3) Remember where to come back after Stripe
        const returnUrl = window.location.href; // current Profile Edit page

        const params = new URLSearchParams({
            ownerId: this.uid,
            accountType,
            returnUrl,
        });

        window.location.href =
            this.utilSvc.backendURL + `/stripe/connect/authorize?${params.toString()}`;
    }
    /** Stripe disconnect: call /stripe/connect/deauthorize on backend */
    async disconnectStripe() {
        if (!this.uid) return;
        this.stripeActionRunning = true;
        this.error = undefined;

        try {
            const res = await fetch(this.utilSvc.backendURL + '/stripe/connect/deauthorize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ownerId: this.uid })
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || 'Failed to disconnect Stripe');
            }

            // Clear local Stripe status
            this.stripeStatus = undefined;
        } catch (e: any) {
            this.error = e?.message || 'Failed to disconnect Stripe';
        } finally {
            this.stripeActionRunning = false;
        }
    }

    // --- Save profile (Users) -------------------------------------------------

    async save() {
        this.error = undefined;
        this.success = false;
        if (!this.uid) return;

        this.saving = true;
        try {
            const v = this.form.value;
            const now = Date.now();

            const base: Partial<Users> = this.profile || { userId: this.uid, email: '' } as any;

            // Compute next role: admin cannot self-downgrade/upgrade
            let nextRole = USERROLE.CUSTOMER;
            if (base.role === USERROLE.ADMIN) {
                nextRole = USERROLE.ADMIN;
            } else if (
                v.role === USERROLE.OWNER ||
                v.role === USERROLE.PROVIDER ||
                v.role === USERROLE.CUSTOMER
            ) {
                nextRole = v.role;
            }

            const payload: Users = {
                userId: this.uid,
                email: base.email || '',

                firstname: v.firstname || '',
                lastname: v.lastname || '',
                displayName: v.displayName || '',
                phone: v.phone || '',
                country: v.country || '',

                role: nextRole,

                photos: this.photoUrls,
                photoURL: this.photoUrls[0] || base.photoURL || '',

                socialnetwork: (v.socialnetwork || []).map((s: any) => ({
                    label: s.label || '',
                    url: s.url || ''
                })),

                emailverified: base.emailverified ?? false,
                provider: base.provider || 'firebase',

                state: (v.state as any) || base.state || 'active',

                // All Stripe connection data lives in owners/providers collections,
                // so we do NOT put stripestandard fields in Users documents.

                createdTS: base.createdTS || now,
                modifiedTS: now
            };

            await this.storeDb.updateObject(
                this.utilSvc.backendFBstoreId,
                this.utilSvc.mdb,
                OBJECTNAME.bnUsers,
                payload,
                this.uid
            );

            this.profile = payload;
            this.success = true;

            // If role changed to owner/provider, refresh Stripe status
            if (this.isOwnerOrProvider) {
                await this.loadStripeStatus();
            } else {
                this.stripeStatus = undefined;
            }
        } catch (e: any) {
            this.error = e?.message || 'Failed to save profile';
        } finally {
            this.saving = false;
        }
    }
}
