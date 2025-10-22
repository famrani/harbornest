import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsersService } from 'godigital-lib';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html'
})
export class ChangepwdComponent implements OnDestroy {
  sending = false;
  success = false;
  error?: string;
  form: FormGroup;

  private sub?: Subscription;
  private uid?: string;
  private email?: string;

  constructor(private fb: FormBuilder, private users: UsersService) {
    // Track current user
    this.sub = this.users.authState$.subscribe(u => {
      this.uid = u?.uid || undefined;
      this.email = u?.email || undefined;
    });
    this.form = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required]]
    });


  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }

  async submit() {
    this.error = undefined;
    this.success = false;
    if (this.form.invalid) return;

    const { oldPassword, newPassword, confirm } = this.form.value;
    if (newPassword !== confirm) {
      this.error = 'New passwords do not match.';
      return;
    }
    if (!this.uid || !this.email) {
      this.error = 'You must be signed in to change your password.';
      return;
    }

    // Minimal Users stub for updatePwd
    const wnUser = { userId: this.uid, email: this.email } as any;

    this.sending = true;
    try {
      await this.users.changePasswordWithOldPassword(oldPassword!, newPassword!);
      this.success = true;
      this.form.reset();
    } catch (e: any) {
      this.error = e?.message || 'Could not update password.';
    } finally {
      this.sending = false;
    }
  }

  get f() { return this.form.controls; }
}
