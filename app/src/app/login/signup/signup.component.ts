import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'godigital-lib';          // adjust path
import { StoreDbService, OBJECTNAME } from 'godigital-lib'; // adjust path
import { UtilsService } from 'godigital-lib';

type SocialLink = { label: string; url: string };

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  sending = false;
  success = false;
  error?: string;
  form: FormGroup

  // Keep uploaded photo URLs here
  photoUrls: string[] = [];

  // Reactive form for metadata
  constructor(
    private fb: FormBuilder,
    private users: UsersService,
    private storeDb: StoreDbService,
    public utilSvc: UtilsService,
    private router: Router
  ) {
    this.form = this.fb.group({
      // auth
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // profile
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      displayName: [''],
      phone: [''],
      country: [''],
      role: ['customer', [Validators.required]],   // client can only pick "customer"
      socialnetwork: this.fb.array<ReturnType<typeof this.newSocial>>([]),
      // optional photo upload handled separately
      acceptTerms: [false, Validators.requiredTrue],
    });


  }

  // Helpers
  get f() { return this.form.controls; }
  get socials() { return this.form.get('socialnetwork') as FormArray; }
  newSocial() { return this.fb.group({ label: [''], url: [''] }); }

  addSocial() { this.socials.push(this.newSocial()); }
  removeSocial(i: number) { this.socials.removeAt(i); }

  /**
   * Upload photos to Firebase Storage using your StoreDbService.
   * Saves resulting download URLs to `photoUrls`.
   */
  async onPhotosSelected(files: FileList | null) {
    if (!files?.length) return;
    const storeId = this.utilSvc.backendFBstoreId;                 // your default storage bucket
    const dir = `users/${Date.now()}`;                             // or users/{uid} (if uid is known)
    this.sending = true;
    try {
      for (const file of Array.from(files)) {
        const url = await this.storeDb.uploadObjects1(storeId, file, dir) as string;
        this.photoUrls.push(url);
      }
    } catch (e: any) {
      this.error = e?.message || 'Photo upload failed';
    } finally {
      this.sending = false;
    }
  }

  /**
   * Email/password sign-up:
   * 1) create Firebase user + send verification
   * 2) build metadata profile
   * 3) store in RTDB at backendusers/{uid}
   */
  async signupWithEmail() {
    this.error = undefined;
    this.success = false;
    if (this.form.invalid) return;

    this.sending = true;
    try {
      const v = this.form.value;

      // Derive displayName if empty
      const displayName = v.displayName?.trim()
        || `${(v.firstname || '').toString().trim()} ${(v.lastname || '').toString().trim()}`.trim();

      // Create Firebase Auth user (sends verification email)
      const { uid } = await this.users.registerWithEmail(v.email!, v.password!, displayName);

      // Build the profile document (no password)
      const now = Date.now();
      const profile = {
        userId: uid,
        firstname: v.firstname,
        lastname: v.lastname,
        country: v.country || '',
        stripeAccountId: '',             // later
        stripeAccountStatus: '',         // later
        email: v.email,
        phone: v.phone || '',
        role: 'customer',                // force safe role; let backend elevate to admin if needed
        photos: this.photoUrls,
        socialnetwork: (v.socialnetwork || []).map((s: any) => ({ label: s.label || '', url: s.url || '' })) as SocialLink[],
        emailverified: false,            // reflects Firebase user; will become true after verification
        state: 'active',                 // or 'pending_review' if you want moderation
        displayName: displayName,
        createdTS: now,
        modifiedTS: now,
        photoURL: this.photoUrls[0] || '',   // optional primary
        provider: 'firebase'                 // or 'google' in Google flow
      };

      // Save to Realtime Database: /backendusers/{uid}
      await this.storeDb.updateObject(
        this.utilSvc.backendFBstoreId,
        this.utilSvc.mdb,
        OBJECTNAME.bnUsers,
        profile,
        uid
      );

      this.success = true;  // show “check your inbox”
      this.form.reset({ role: 'customer', acceptTerms: false });
      // Optionally redirect:
      // this.router.navigateByUrl('/check-inbox');
    } catch (e: any) {
      this.error = e?.message || 'Sign-up failed.';
    } finally {
      this.sending = false;
    }
  }

  /**
   * Google sign-in (popup) and profile upsert.
   * After Google, ask the user to complete missing metadata if needed.
   */
  async signupWithGoogle() {
    this.error = undefined;
    this.sending = true;
    try {
      const user = await this.users.signInWithGoogle();
      const uid = user.uid;
      const now = Date.now();

      // Try to populate from form (user may have filled it first),
      // otherwise fallback to Google profile.
      const v = this.form.value;
      const displayName = v.displayName?.trim() || user.displayName || '';
      const firstname = v.firstname || (displayName.split(' ')[0] || '');
      const lastname = v.lastname || (displayName.split(' ').slice(1).join(' ') || '');

      const profile = {
        userId: uid,
        firstname,
        lastname,
        country: v.country || '',
        stripeAccountId: '',
        stripeAccountStatus: '',
        email: user.email || v.email || '',
        phone: v.phone || user.phoneNumber || '',
        role: 'customer',
        photos: this.photoUrls.length ? this.photoUrls : (user.photoURL ? [user.photoURL] : []),
        socialnetwork: (v.socialnetwork || []).map((s: any) => ({ label: s.label || '', url: s.url || '' })) as SocialLink[],
        emailverified: !!user.emailVerified,
        state: 'active',
        displayName,
        createdTS: now,
        modifiedTS: now,
        photoURL: (this.photoUrls[0] || user.photoURL || ''),
        provider: 'google'
      };

      await this.storeDb.updateObject(
        this.utilSvc.backendFBstoreId,
        this.utilSvc.mdb,
        OBJECTNAME.bnUsers,
        profile,
        uid
      );

      // Decide where to go (e.g., profile-completion page if critical fields missing)
      // this.router.navigateByUrl('/account');
    } catch (e: any) {
      this.error = e?.message || 'Google sign-in failed.';
    } finally {
      this.sending = false;
    }
  }
}
