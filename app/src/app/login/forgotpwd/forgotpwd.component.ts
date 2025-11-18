import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'godigital-lib';
//import { Modal } from 'bootstrap';
declare var $: any;

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html'
})
export class ForgotPasswordComponent {
  sending = false;
  success = false;
  error?: string;
  forgotpwdForm: FormGroup;

  constructor(private fb: FormBuilder, private users: UsersService) {
    this.forgotpwdForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });


  }

  async forgotpwd() {
    if (this.forgotpwdForm.invalid) return;

    this.sending = true;
    try {
      const email = this.forgotpwdForm.value.email!;
      await this.users.resetPwdUser(email);

      // Show confirmation modal
      const modalEl = document.getElementById('resetModal');

      if (modalEl) {
        $('#resetModal').modal('show');
      }

      this.forgotpwdForm.reset();
    } catch (e: any) {
      alert('Error sending reset email: ' + (e.message || e));
    } finally {
      this.sending = false;
    }
  }

  get f() { return this.forgotpwdForm.controls; }
}
