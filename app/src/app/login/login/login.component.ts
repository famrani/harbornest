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
      password: ['', [Validators.required]],
      rememberme: [!!localStorage.getItem('rememberEmail')],
    });

    this.redirectTo = this.route.snapshot.queryParamMap.get('redirect');
    if (this.route.snapshot.queryParamMap.get('created') === 'true') {
      this.accountCreatedMessage = 'Account created successfully. Please check your inbox and your Junk/Spam folder for the password setup/reset email before signing in.';
    }
  }

  get f() { return this.loginForm.controls; }

  private openError(message: string, title = 'Authentication failed') {
    this.errorModalTitle = title;
    this.errorModalMessage = message || 'Please try again.';
    this.showErrorModal = true;
  }
  closeError() { this.showErrorModal = false; }

  private postLoginRedirect() {
    const target = this.redirectTo && this.redirectTo.startsWith('/') ? this.redirectTo : '/';
    this.router.navigateByUrl(target);
  }

  async loginWithEmail() {
    let status, user;
    if (this.loginForm.invalid) return;
    this.sending = true;
    try {
      const v = this.loginForm.value;

      // remember me
      if (v.remember) {
        localStorage.setItem('rememberEmail', v.email);
      } else {
        localStorage.removeItem('rememberEmail');
      }

      [status, user] = await this.loginSvc.localUtilsSvc.processLogin(v.email, v.password, undefined) as any;
      this.loginSvc.wnGuest = user;
      this.loginSvc.mainSvc.setLoggedUser(user);


      // OPTION: you can fetch the user profile here if you need local state
      // const profile = await this.users.loadProfile(); // depends on your lib

      this.postLoginRedirect();
    } catch (e: any) {
      status = e ? e[0] : AUTHSTATUS.UNKNOWNERROR;
      if (status === AUTHSTATUS.EMAILNOTVERIFIED) {
        $('#emailNotVerifiedModal').modal('show');
      } else if (status === AUTHSTATUS.UNKNOWNERROR) {
        $('#loginErrorModal').modal('show');
      }
    } finally {
      this.sending = false;
    }
  }

  async loginWithGoogle() {
    this.sending = true;
    try {
      const user = await this.users.signInWithGoogleAndLoadProfile();

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
