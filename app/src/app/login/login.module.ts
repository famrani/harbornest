/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgotpwd/forgotpwd.component';
import { SignupComponent } from './signup/signup.component';

import { GodigitalbModule } from 'godigital-lib';

import { LoginRoutingModule } from './login.router.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotComponent],
  imports: [
    CommonModule,
    IonicModule,
    LoginRoutingModule,
    FormsModule, ReactiveFormsModule,
    CookieModule.forRoot(),
    GodigitalbModule,
  ],
  providers:[]
})
export class LoginModule { }
