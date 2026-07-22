import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Users, UsersService } from 'godigital-lib';               // adjust path if needed
import { StoreDbService, OBJECTNAME, AUTHSTATUS } from 'godigital-lib'; // adjust path if needed
import { UtilsService } from 'godigital-lib';
import { LoginService } from '../login.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  sending = false;
  showPassword = false;

  // modal
  showErrorModal = false;
  errorModalTitle = 'Authentication failed';
  errorModalMessage = 'Please try again.';

  // forgot password mini-UI
  showReset = false;
  resetEmail = '';
  resetSending = false;
  resetSent = false;
  accountCreatedMessage = '';

  // redirection
  private redirectTo: string | null = null;

  constructor(
    private fb: FormBuilder,
    private users: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    public utilSvc: UtilsService,
    private storeDb: StoreDbService,
    private loginSvc: LoginService
  ) {
    this.loginForm = this.fb.group({
      email: [localStorage.getItem('rememberEmail') || '', [Validators.required, Validators.email]],
      password: [localStorage.getItem('rememberPassword') || '', [Validators.required]],
      rememberme: [localStorage.getItem('rememberLogin') === 'true' || !!localStorage.getItem('rememberEmail')],
    });

    this.redirectTo = this.route.snapshot.queryParamMap.get('returnUrl')
      || this.route.snapshot.queryParamMap.get('redirect')
      || localStorage.getItem('redirectAfterLogin')
      || sessionStorage.getItem('redirectAfterLogin');
    if (this.route.snapshot.queryParamMap.get('created') === 'true') {
      this.accountCreatedMessage = 'Account created successfully. Please check your inbox and your Junk/Spam folder for the password setup/reset email before signing in.';
    }
  }

  get f() { return this.loginForm.controls; }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  private openError(message: string, title = 'Authentication failed') {
    this.errorModalTitle = title;
    this.errorModalMessage = message || 'Please try again.';
    this.showErrorModal = true;
  }
  closeError() { this.showErrorModal = false; }

  private withTimeout<T>(promise: Promise<T>, timeoutMs = 20000, message = 'Login is taking too long. Please try again.'): Promise<T> {
    let timer: any;
    const timeoutPromise = new Promise<T>((_, reject) => {
      timer = setTimeout(() => reject(new Error(message)), timeoutMs);
    });

    return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timer));
  }

  private normalizeAuthError(error: any): string {
    const code = error?.code || error?.[0] || error?.message || '';
    const rawMessage = error?.message || '';

    if (String(code).includes('EMAILNOTVERIFIED')) {
      return 'EMAIL_NOT_VERIFIED';
    }
    if (String(code).includes('auth/invalid-credential') || String(code).includes('auth/wrong-password') || String(code).includes('auth/user-not-found')) {
      return 'The email or password is incorrect.';
    }
    if (String(code).includes('auth/too-many-requests')) {
      return 'Too many attempts. Please wait a moment and try again.';
    }
    return rawMessage || 'Authentication failed. Please try again.';
  }

  private postLoginRedirect() {
    const target = this.redirectTo && this.redirectTo.startsWith('/') ? this.redirectTo : '/';
    try {
      localStorage.removeItem('redirectAfterLogin');
      sessionStorage.removeItem('redirectAfterLogin');
    } catch {}
    this.router.navigateByUrl(target);
  }

  async loginWithEmail() {
    let status, user;
    if (this.loginForm.invalid) return;
    this.sending = true;
    try {
      const v = this.loginForm.value;

      const rememberMe = !!v.rememberme;

      // Remember me: keep credentials available for the next visit when selected.
      // This is intentionally explicit because the user wants the password restored too.
      if (rememberMe) {
        localStorage.setItem('rememberLogin', 'true');
        localStorage.setItem('rememberEmail', v.email || '');
        localStorage.setItem('rememberPassword', v.password || '');
      } else {
        localStorage.removeItem('rememberLogin');
        localStorage.removeItem('rememberEmail');
        localStorage.removeItem('rememberPassword');
        localStorage.removeItem('loggedUser');
      }

      [status, user] = await this.withTimeout(
        this.loginSvc.localUtilsSvc.processLogin(v.email, v.password, undefined) as Promise<any>,
        20000,
        'Login is taking too long. Please check your connection and try again.'
      ) as any;

      if (!user) {
        throw new Error('Authentication failed. Please try again.');
      }

      this.loginSvc.wnGuest = user;
      this.loginSvc.mainSvc.setLoggedUser(user);
      try {
        sessionStorage.setItem('loggedUser', JSON.stringify(user));
        if (rememberMe) {
          localStorage.setItem('loggedUser', JSON.stringify(user));
        } else {
          localStorage.removeItem('loggedUser');
        }
      } catch {}


      // OPTION: you can fetch the user profile here if you need local state
      // const profile = await this.users.loadProfile(); // depends on your lib

      this.postLoginRedirect();
    } catch (e: any) {
      const message = this.normalizeAuthError(e);
      if (message === 'EMAIL_NOT_VERIFIED') {
        $('#emailNotVerifiedModal').modal('show');
      } else {
        this.openError(message, 'Connexion impossible');
      }
    } finally {
      this.sending = false;
    }
  }

  async loginWithGoogle() {
    this.sending = true;
    try {
      const user = await this.withTimeout(
        this.users.signInWithGoogleAndLoadProfile(),
        20000,
        'Google sign-in is taking too long. Please try again.'
      );

      // (Optional) ensure we have an RTDB profile doc (in case first-time Google login)
      // If your UsersService already upserts, you can remove this block:
      try {
        const uid = user.userId;
        if (uid) {
          const now = Date.now();
          const patch = {
            userId: uid,
            email: user.email || '',
            displayName: user.displayName || '',
            photoURL: user.photoURL || '',
            emailverified: !!user.emailverified,
            modifiedTS: now,
          };

          await this.storeDb.partialUpdateObject(
            this.utilSvc.backendFBstoreId,
            this.utilSvc.mdb,
            OBJECTNAME.bnUsers,
            patch,
            uid
          );

          // reload full profile if needed
          const full = await this.storeDb.getObject(
            this.utilSvc.backendFBstoreId,
            this.utilSvc.mdb,
            OBJECTNAME.bnUsers,
            uid
          ) as Users;

          this.loginSvc.wnGuest = full;
          this.loginSvc.mainSvc.setLoggedUser(full);
        }
      } catch { /* best effort upsert */ }

      this.postLoginRedirect();
    } catch (e: any) {
      this.openError(e?.message || 'Google sign-in failed.');
    } finally {
      this.sending = false;
    }
  }

  toggleReset() {
    this.showReset = !this.showReset;
    this.resetSent = false;
    if (!this.resetEmail) this.resetEmail = this.f.email.value || '';
  }

  async sendReset() {
    if (!this.resetEmail || !/.+@.+\..+/.test(this.resetEmail)) {
      this.openError('Enter a valid email to receive a reset link.', 'Password reset');
      return;
    }
    this.resetSending = true;
    try {
      await this.users.resetPwdUser(this.resetEmail);
      this.resetSent = true;
    } catch (e: any) {
      this.openError(e?.message || 'Failed to send reset email.', 'Password reset');
    } finally {
      this.resetSending = false;
    }
  }
}
