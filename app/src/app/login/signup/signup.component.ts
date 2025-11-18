import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from 'godigital-lib';               // adjust path if needed
import { StoreDbService, OBJECTNAME } from 'godigital-lib'; // adjust path if needed
import { UtilsService } from 'godigital-lib';

type SocialLink = { label: string; url: string };

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  sending = false;
  success = false;                // shown only for email/password flow
  error?: string;                 // non-modal errors (rare)
  // --- modal state ---
  showErrorModal = false;
  errorModalTitle = 'Authentication failed';
  errorModalMessage = 'Something went wrong. Please try again.';

  form: FormGroup;
  photoUrls: string[] = [];

  /** If true & role is owner/provider, redirect to Stripe Connect after signup */
  connectStripeNow = false;

  constructor(
    private fb: FormBuilder,
    private users: UsersService,
    private storeDb: StoreDbService,
    public utilSvc: UtilsService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      displayName: [''],
      phone: [''],
      country: [''],

      role: ['guest', [Validators.required]],

      socialnetwork: this.fb.array<ReturnType<typeof this.newSocial>>([]),

      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  // ---------- helpers
  get f() { return this.form.controls; }
  get socials() { return this.form.get('socialnetwork') as FormArray; }
  newSocial() { return this.fb.group({ label: [''], url: [''] }); }

  addSocial() { this.socials.push(this.newSocial()); }
  removeSocial(i: number) { this.socials.removeAt(i); }

  private isOwnerOrProvider(role: string | null | undefined) {
    return role === 'boatOwner' || role === 'serviceProvider';
  }

  private buildStripeAuthorizeUrl(ownerId: string, role: string) {
    const base = '/stripe/connect/authorize';
    const url = new URL(base, window.location.origin);
    url.searchParams.set('ownerId', ownerId);
    url.searchParams.set('accountType', role);
    return url.toString();
  }

  // ---------- modal controls
  openErrorModal(message: string, title = 'Authentication failed') {
    this.errorModalTitle = title;
    this.errorModalMessage = message || 'Something went wrong. Please try again.';
    this.showErrorModal = true;
  }
  closeErrorModal() {
    this.showErrorModal = false;
  }

  // ---------- uploads
  async onPhotosSelected(files: FileList | null) {
    if (!files?.length) return;
    const storeId = this.utilSvc.backendFBstoreId;
    const dir = `users/${Date.now()}`;

    this.sending = true;
    try {
      for (const file of Array.from(files)) {
        const url = await this.storeDb.uploadObjects1(storeId, file, dir) as string;
        this.photoUrls.push(url);
      }
    } catch (e: any) {
      this.openErrorModal(e?.message || 'Photo upload failed', 'Upload failed');
    } finally {
      this.sending = false;
    }
  }

  // ---------- email/password signup
  async signupWithEmail() {
    this.error = undefined;
    this.success = false;
    if (this.form.invalid) return;

    this.sending = true;
    try {
      const v = this.form.value;

      const displayName =
        (v.displayName || '').trim() ||
        `${(v.firstname || '').toString().trim()} ${(v.lastname || '').toString().trim()}`.trim();

      // 1) create auth user
      const { uid } = await this.users.registerWithEmail(v.email!, v.password!, displayName);

      // 2) profile
      const now = Date.now();
      const profile = {
        userId: uid,
        firstname: v.firstname,
        lastname: v.lastname,
        country: v.country || '',
        stripeAccountId: '',
        stripeAccountStatus: '',
        email: v.email,
        phone: v.phone || '',
        role: v.role || 'guest',
        photos: this.photoUrls,
        socialnetwork: (v.socialnetwork || []).map((s: any) => ({
          label: s.label || '',
          url: s.url || '',
        })) as SocialLink[],
        emailverified: false,
        state: 'active',
        displayName: displayName,
        createdTS: now,
        modifiedTS: now,
        photoURL: this.photoUrls[0] || '',
        provider: 'firebase',
      };

      // 3) save to RTDB
      await this.storeDb.updateObject(
        this.utilSvc.backendFBstoreId,
        this.utilSvc.mdb,
        OBJECTNAME.bnUsers,
        profile,
        uid
      );

      // 4) Either redirect to Stripe immediately, or show the success banner (as before)
      if (this.connectStripeNow && this.isOwnerOrProvider(profile.role)) {
        window.location.href = this.buildStripeAuthorizeUrl(uid, profile.role);
        return;
      }

      this.success = true;                    // keep banner for email flow
      this.form.reset({ role: 'guest', acceptTerms: false });
      this.photoUrls = [];
    } catch (e: any) {
      this.openErrorModal(e?.message || 'Sign-up failed.');
    } finally {
      this.sending = false;
    }
  }

  // ---------- Google signup (IMMEDIATE REDIRECT TO HOME)
  async signupWithGoogle() {
    this.error = undefined;
    this.sending = true;

    try {
      const user = await this.users.signInWithGoogleAndLoadProfile();
      const uid = user.userId;
      const now = Date.now();

      const v = this.form.value;
      const displayName = (v.displayName || user.displayName || '').trim();
      const firstname = v.firstname || (displayName.split(' ')[0] || '');
      const lastname = v.lastname || (displayName.split(' ').slice(1).join(' ') || '');
      const role = v.role || 'guest';

      const profile = {
        userId: uid,
        firstname,
        lastname,
        country: v.country || '',
        stripeAccountId: '',
        stripeAccountStatus: '',
        email: user.email || v.email || '',
        phone: v.phone || user.phone || '',
        role,
        photos: this.photoUrls.length ? this.photoUrls : (user.photoURL ? [user.photoURL] : []),
        socialnetwork: (v.socialnetwork || []).map((s: any) => ({
          label: s.label || '',
          url: s.url || '',
        })) as SocialLink[],
        emailverified: !!user.emailverified,
        state: 'active',
        displayName,
        createdTS: now,
        modifiedTS: now,
        photoURL: (this.photoUrls[0] || user.photoURL || ''),
        provider: 'google',
      };

      await this.storeDb.updateObject(
        this.utilSvc.backendFBstoreId,
        this.utilSvc.mdb,
        OBJECTNAME.bnUsers,
        profile,
        uid
      );

      // IMMEDIATE redirect to home (no “user created” banner)
      // If you want to auto-open Stripe right after Google for owners/providers, uncomment below:
      // if (this.isOwnerOrProvider(role) && this.connectStripeNow) {
      //   window.location.href = this.buildStripeAuthorizeUrl(uid, role);
      //   return;
      // }
      this.router.navigateByUrl('/');
    } catch (e: any) {
      this.openErrorModal(e?.message || 'Google sign-in failed.');
    } finally {
      this.sending = false;
    }
  }
}
