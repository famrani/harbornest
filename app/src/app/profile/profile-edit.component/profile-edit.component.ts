import { Component, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StoreDbService, OBJECTNAME } from 'godigital-lib';
import { UsersService } from 'godigital-lib';
import { UtilsService } from 'godigital-lib';

type ProfileDoc = {
    userId: string;
    firstname?: string;
    lastname?: string;
    country?: string;
    stripeAccountId?: string;
    stripeAccountStatus?: string;
    email: string;
    phone?: string;
    role: 'customer' | 'admin';
    photos?: string[];
    socialnetwork?: { label: string; url: string }[];
    emailverified?: boolean;
    state?: 'active' | 'disabled' | 'banned' | 'pending_review';
    displayName?: string;
    createdTS?: number;
    modifiedTS?: number;
    photoURL?: string;
    provider?: string;
};

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
    profile?: ProfileDoc;
    sub?: Subscription;

    photoUrls: string[] = [];

    constructor(
        private fb: FormBuilder,
        private users: UsersService,
        private storeDb: StoreDbService,
        public utilSvc: UtilsService
    ) {
        this.sub = this.users.authState$.subscribe(async u => {
            this.uid = u?.uid || undefined;
            if (!this.uid) {
                this.loading = false;
                return;
            }
            await this.loadProfile();
        });
        this.form = this.fb.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            displayName: [''],
            phone: [''],
            country: [''],
            // role is shown but locked to customer here for security
            role: [{ value: 'customer', disabled: true }],
            state: ['active'], // optional to show; backend should enforce final state
            socialnetwork: this.fb.array([] as any),
        });


    }

    ngOnDestroy(): void { this.sub?.unsubscribe(); }

    get socials() { return this.form.get('socialnetwork') as FormArray; }
    newSocial(label = '', url = '') { return this.fb.group({ label: [label], url: [url] }); }

    private async loadProfile() {
        this.loading = true;
        this.error = undefined;
        try {
            const doc = await this.storeDb.getObject(
                this.utilSvc.backendFBstoreId,
                this.utilSvc.mdb,
                OBJECTNAME.bnUsers,
                this.uid
            ) as ProfileDoc | null;

            this.profile = doc || undefined;

            this.form.reset({
                firstname: doc?.firstname || '',
                lastname: doc?.lastname || '',
                displayName: doc?.displayName || '',
                phone: doc?.phone || '',
                country: doc?.country || '',
                role: 'customer',
                state: doc?.state || 'active'
            });

            // socials
            this.socials.clear();
            (doc?.socialnetwork || []).forEach(s => this.socials.push(this.newSocial(s.label, s.url)));

            // photos
            this.photoUrls = (doc?.photos || []).slice();

            this.loading = false;
        } catch (e: any) {
            this.error = e?.message || 'Failed to load profile';
            this.loading = false;
        }
    }

    addSocial() { this.socials.push(this.newSocial()); }
    removeSocial(i: number) { this.socials.removeAt(i); }

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

    async save() {
        this.error = undefined;
        this.success = false;
        if (!this.uid) return;

        this.saving = true;
        try {
            const v = this.form.value;
            const now = Date.now();

            // Preserve immutable/sensitive fields from existing doc
            const base: Partial<ProfileDoc> = this.profile || { userId: this.uid, email: '' } as any;

            const payload: ProfileDoc = {
                userId: this.uid,
                email: base.email || '',

                firstname: v.firstname || '',
                lastname: v.lastname || '',
                displayName: v.displayName || '',
                phone: v.phone || '',
                country: v.country || '',

                // keep customer role client-side; admin must be server-side only
                role: 'customer',

                photos: this.photoUrls,
                photoURL: this.photoUrls[0] || base.photoURL || '',

                socialnetwork: (v.socialnetwork || []).map((s: any) => ({ label: s.label || '', url: s.url || '' })),

                // leave verification and provider as previously stored
                emailverified: base.emailverified ?? false,
                provider: base.provider || 'firebase',

                // allow user to set a visible "state" if you want, but enforce on server with rules
                state: (v.state as any) || base.state || 'active',

                // stripe fields preserved
                stripeAccountId: base.stripeAccountId || '',
                stripeAccountStatus: base.stripeAccountStatus || '',

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
        } catch (e: any) {
            this.error = e?.message || 'Failed to save profile';
        } finally {
            this.saving = false;
        }
    }
}
