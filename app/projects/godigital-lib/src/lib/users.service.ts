/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StoreDbService, OBJECTNAME, AUTHSTATUS } from './firebase-service';
import { UtilsService } from './utils.service';
import { Users } from './service-service';

// ✅ Firebase compat namespace
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// IMPORTANT: fix spelling (storageBucket)
export const firebaseConfig = {
  apiKey: 'AIzaSyAFIiBNkBda_tNdkppBmdzCzZhizmFOgKc',
  authDomain: 'backend-prod-e4d4e.firebaseapp.com',
  databaseURL: 'https://backend-prod-e4d4e.firebaseio.com',
  projectId: 'backend-prod-e4d4e',
  storageBucket: 'backend-prod-e4d4e.appspot.com',
  messagingSenderId: '981006637106'
};

@Injectable({ providedIn: 'root' })
export class UsersService {
  public userInfo!: Users;

  public allUsers: Users[] | null = null;
  public allUsersO = new BehaviorSubject<Users[] | null>(null);

  public confirmationResult: any;
  public recaptchaVerifier: any;

  constructor(
    public http: HttpClient,
    public storeDbSvc: StoreDbService,
    public utilSvc: UtilsService,
  ) {
  }

  // -----------------------
  // EMAIL/PASSWORD SIGN-IN
  // -----------------------
  authUser(email: string, password1: string, emailNotVerified?: boolean) {
    const maf = this.storeDbSvc.firebaseauth!;
    return new Promise((resolve, reject) => {
      maf.signInWithEmailAndPassword(email.toLowerCase(), password1)
        .then((cred: firebase.auth.UserCredential) => {
          const user = cred.user;
          if (user?.emailVerified || emailNotVerified) {
            resolve([AUTHSTATUS.SUCCESS, user]);
          } else {
            reject([AUTHSTATUS.EMAILNOTVERIFIED, 'Login Failed! email not verified']);
          }
        })
        .catch((error: any) => reject([AUTHSTATUS.UNKNOWNERROR, error]));
    });
  }

  // -----------------------
  // EMAIL/PASSWORD SIGN-UP
  // -----------------------
  registerWithEmail(email: string, password: string, displayName?: string): Promise<{ uid: string }> {
    const maf = this.storeDbSvc.firebaseauth!;
    return new Promise(async (resolve, reject) => {
      try {
        const cred = await maf.createUserWithEmailAndPassword(email.toLowerCase(), password);
        const user = cred.user!;
        if (displayName) {
          await user.updateProfile({ displayName });
        }
        await user.sendEmailVerification({
          url: this.utilSvc.backendURL ? `${this.utilSvc.backendURL}/home` : window.location.origin + '/home',
          handleCodeInApp: true
        });

        // Persist a sanitized profile in your RTDB/Firestore (no password)
        await this.saveUserProfile({
          userId: user.uid,
          email: user.email!,
          displayName: user.displayName || displayName || '',
          phone: '',
          state: 'active',
          createdTS: Date.now(),
          modifiedTS: Date.now()
        });

        resolve({ uid: user.uid });
      } catch (e) {
        reject(e);
      }
    });
  }

  resendVerificationEmail(): Promise<void> {
    const user = this.storeDbSvc.firebaseauth!.currentUser;
    return new Promise(async (resolve, reject) => {
      if (!user) return reject(new Error('Not signed in'));
      try {
        await user.sendEmailVerification({
          url: this.utilSvc.backendURL ? `${this.utilSvc.backendURL}/home` : window.location.origin + '/home',
          handleCodeInApp: true
        });
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  private async getUserProfile(uid: string): Promise<Users | null> {
    const storeId = this.utilSvc.backendFBstoreId;
    const data = await this.storeDbSvc.getObject(storeId, this.utilSvc.mdb, OBJECTNAME.bnUsers, uid);
    return (data as Users) || null;
  }

  /**
   * Sign in with Google, upsert RTDB profile, then return RTDB user.
   */
async signInWithGoogleAndLoadProfile(): Promise<Users> {
  const maf = this.utilSvc.mauth;
  const provider = new firebase.auth.GoogleAuthProvider();

  // Popup (you can also support redirect similarly)
  const result = await maf.signInWithPopup(provider);
  const user = result.user!;
  const info = result.additionalUserInfo;

  // 1) Extract names from Google profile (best source)
  let first = '';
  let last = '';

  const prof: any = info?.profile || {};
  first = prof.given_name || prof.first_name || '';
  last  = prof.family_name || prof.last_name || '';

  // 2) Fallback: split Firebase displayName
  if ((!first || !last) && user.displayName) {
    const parts = user.displayName.trim().split(/\s+/);
    if (parts.length === 1) {
      first = first || parts[0];
    } else if (parts.length >= 2) {
      first = first || parts[0];
      last  = last  || parts.slice(1).join(' ');
    }
  }

  // 3) Upsert profile in RTDB (keeps your schema consistent)
  await this.saveUserProfile({
    userId: user.uid,
    email: user.email || '',
    displayName: user.displayName || `${first} ${last}`.trim(),
    firstname: first,
    lastname: last,
    phone: user.phoneNumber || '',
    photoURL: user.photoURL || '',
    provider: 'google',
    state: 'active',
    emailverified: !!user.emailVerified,
    modifiedTS: Date.now(),
    createdTS: Date.now()
  }, /* merge */ true);

  // 4) Return the RTDB profile
  const profile = await this.getUserProfile(user.uid);
  if (profile) return profile;

  // very rare fallback
  return {
    userId: user.uid,
    firstname: first,
    lastname: last,
    country: '',
    stripeAccountId: '',
    stripeAccountStatus: false as any,
    email: user.email || '',
    phone: user.phoneNumber || '',
    role: 'customer',
    photos: '',
    socialnetwork: '',
    emailverified: !!user.emailVerified,
    state: 'active',
    displayName: user.displayName || `${first} ${last}`.trim(),
    createdTS: Date.now(),
    modifiedTS: Date.now(),
    photoURL: user.photoURL || '',
    provider: 'google'
  } as unknown as Users;
}
  // ----------
  // SIGN-OUT
  // ----------
  logout() {
    return this.storeDbSvc.firebaseauth!.signOut();
  }

  // ---------------------
  // PASSWORD RESET (auth)
  // ---------------------
  resetPwdUser(email: string) {
    return this.storeDbSvc.firebaseauth!.sendPasswordResetEmail(email);
  }

  // ------------------------
  // CLIENT-SIDE PASSWORD CHANGE
  // ------------------------
  async changePasswordWithOldPassword(oldPassword: string, newPassword: string): Promise<void> {
    const auth = this.storeDbSvc.firebaseauth!;
    const user = auth.currentUser;
    if (!user || !user.email) {
      throw new Error('Not signed in or user has no email.');
    }

    const cred = firebase.auth.EmailAuthProvider.credential(user.email, oldPassword);
    await user.reauthenticateWithCredential(cred);
    await user.updatePassword(newPassword);
  }

  async changePasswordReauthWithGoogle(newPassword: string): Promise<void> {
    const auth = this.storeDbSvc.firebaseauth!;
    const user = auth.currentUser;
    if (!user) throw new Error('Not signed in.');
    const provider = new firebase.auth.GoogleAuthProvider();
    await (user as any).reauthenticateWithPopup?.(provider)  // compat has this on User
      .catch(async (e: any) => {
        if (e?.code === 'auth/popup-blocked') {
          await auth.signInWithRedirect(provider);
          await auth.getRedirectResult();
        } else {
          throw e;
        }
      });
    await user.updatePassword(newPassword);
  }

  // ------------------------
  // Update user profile in your DB
  // ------------------------
  updateUser(wnUser: Users) {
    return new Promise((resolve, reject) => {
      if (wnUser && wnUser.userId) {
        this.storeDbSvc
          .updateObject(this.utilSvc.backendFBstoreId, this.utilSvc.mdb, OBJECTNAME.bnUsers, wnUser, wnUser.userId)
          .then(resolve, reject);
      } else {
        reject('user undefined');
      }
    });
  }

  // ------------------------------------
  // INTERNAL: save/upsert user profile
  // ------------------------------------
  private async saveUserProfile(user: Partial<Users> & { userId: string }, merge = false): Promise<void> {
    const storeId = this.utilSvc.backendFBstoreId;
    const existing = merge
      ? await this.storeDbSvc.getObject(storeId, this.utilSvc.mdb, OBJECTNAME.bnUsers, user.userId)
      : null;
    const payload = merge && existing ? { ...existing, ...user, modifiedTS: Date.now() } : user;
    await this.storeDbSvc.updateObject(storeId, this.utilSvc.mdb, OBJECTNAME.bnUsers, payload, user.userId);
  }
}
