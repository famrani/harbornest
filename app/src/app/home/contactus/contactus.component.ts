import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HomeService } from '../home.service';         // adjust path to yours
import { UtilsService } from 'godigital-lib';         // adjust path to yours

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  // Change these to your real channels
  phone = '+33 6 85 26 65 10';
  whatsapp = '+33685266510'; // E.164 without spaces for wa.me
  email = 'contact@alldigitalnetwork.com';
  form: FormGroup;

  sending = false;
  sent = false;
  error?: string;

  constructor(
    private fb: FormBuilder,
    public util: UtilsService,
    public homeSvc: HomeService,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      gdprOk: [false, Validators.requiredTrue]
    });


  }

  async submit() {
    this.error = undefined;
    this.sent = false;
    if (this.form.invalid) return;

    this.sending = true;

    await this.homeSvc.localUtilsSvc.sendEmail(
      this.form.value.subject,
      this.form.value.message,
      this.form.value.name,
      this.form.value.email,
      this.form.value.phone,
    );
    this.sent = true;
    this.sending = false;
  }
}
