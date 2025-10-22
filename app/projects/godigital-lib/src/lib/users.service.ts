/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StoreDbService, OBJECTNAME, AUTHSTATUS } from './firebase-service';
import { UtilsService } from './utils.service';
import { Users } from './service-service';

// ✅ compat imports for namespace + types
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
  public currentUser: any;
  public allUsers: Users[] | null = null;
  public allUsersO = new BehaviorSubject<Users[] | null>(null);
  public confirmationResult: any;
  public firebaseauth: any;
  public recaptchaVerifier: any;

  // ✅ type from compat import
  public authState$ = new BehaviorSubject<firebase.User | null>(null);

  constructor(
    public http: HttpClient,
    public storeDbSvc: StoreDbService,
    public utilSvc: UtilsService,
  ) {}

  // -----------------------
  // EMAIL/PASSWORD SIGN-IN
  // -----------------------
  authUser(email: string, password1: string, emailNotVerified?: boolean) {
    const maf = this.utilSvc.mauth; // compat auth instance
    return new Promise((resolve, reject) => {
      maf.signInWithEmailAndPassword(email.toLowerCase(), password1)
        .then((success: firebase.auth.UserCredential) => {
          const user = success.user;
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
    const maf = this.utilSvc.mauth;
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
    const user = this.utilSvc.mauth.currentUser;
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

  // ---------------
  // GOOGLE SIGN-IN
  // ---------------
  async signInWithGoogle(): Promise<firebase.User> {
    const maf = this.utilSvc.mauth;
    const provider = new firebase.auth.GoogleAuthProvider(); // ✅ namespace
    const result = await maf.signInWithPopup(provider);
    const user = result.user!;

    await this.saveUserProfile({
      userId: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
      phone: user.phoneNumber || '',
      photoURL: user.photoURL || '',
      provider: 'google',
      state: 'active',
      modifiedTS: Date.now(),
      createdTS: Date.now()
    }, true);

    return user;
  }

  // ----------
  // SIGN-OUT
  // ----------
  logout() {
    const maf = this.utilSvc.mauth;
    return new Promise((resolve, reject) => {
      maf.signOut().then(resolve).catch(reject);
    });
  }

  // ---------------------
  // PASSWORD RESET (auth)
  // ---------------------
  resetPwdUser(email: string) {
    const maf = this.utilSvc.mauth;
    return new Promise((resolve, reject) => {
      maf.sendPasswordResetEmail(email).then(() => resolve(1)).catch(reject);
    });
  }

  // ------------------------
  // CLIENT-SIDE PASSWORD CHANGE
  // ------------------------
  async changePasswordWithOldPassword(oldPassword: string, newPassword: string): Promise<void> {
    const auth = this.utilSvc.mauth;
    const user = auth.currentUser;
    if (!user || !user.email) {
      throw new Error('Not signed in or user has no email.');
    }

    // ✅ use static provider from compat namespace
    const cred = firebase.auth.EmailAuthProvider.credential(user.email, oldPassword);

    await user.reauthenticateWithCredential(cred);
    await user.updatePassword(newPassword);
  }

  async changePasswordReauthWithGoogle(newPassword: string): Promise<void> {
    const auth = this.utilSvc.mauth;
    const user = auth.currentUser;
    if (!user) throw new Error('Not signed in.');

    const provider = new firebase.auth.GoogleAuthProvider();
    await user.reauthenticateWithPopup(provider);
    await user.updatePassword(newPassword);
  }

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

  private async saveUserProfile(user: Partial<Users> & { userId: string }, merge = false): Promise<void> {
    const storeId = this.utilSvc.backendFBstoreId;
    const existing = merge
      ? await this.storeDbSvc.getObject(storeId, this.utilSvc.mdb, OBJECTNAME.bnUsers, user.userId)
      : null;
    const payload = merge && existing ? { ...existing, ...user, modifiedTS: Date.now() } : user;
    await this.storeDbSvc.updateObject(storeId, this.utilSvc.mdb, OBJECTNAME.bnUsers, payload, user.userId);
  }
}
