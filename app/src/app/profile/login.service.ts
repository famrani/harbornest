/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { UsersService, Users, regexEmail, regexMobileNo } from 'godigital-lib';
import { Router, } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { UtilsService, EDITSLIDE } from 'godigital-lib';
import { LocalUtilsService } from '../services/services.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServicesService } from 'godigital-lib';
import { chatElement } from '../services/services.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public signinForm: FormGroup;
  public address;
  public currentPlaceId;
  constructor(
    private router: Router,
    public mainSvc: ServicesService,
    private utilsSvc: UtilsService,
    private usersSvc: UsersService,
    public localUtilsSvc: LocalUtilsService,
    public fb: FormBuilder,
    public http: HttpClient,
    public spinner: NgxSpinnerService,
  ) { }

  getGoogleMetadata(gmid: string) {
    return new Promise((resolve, reject) => {
      const params = new HttpParams()
        .set('placeId', gmid);
      // tslint:disable-next-line: deprecation
      this.http.get(this.utilsSvc.backendURL + 'utils/getGoogleMetadata', { params }).subscribe(
        data => {
          resolve(data);
        },
        error => {
          console.log('error=', error);
          reject(error);
        }
      );

    });
  }

  updateBackendUser(adnUser) {
    return new Promise((resolve, reject) => {
      this.usersSvc.updateUser(adnUser).then(
        data => resolve(data), error => reject(error)
      );
    });
  }

  forgotPwd(emailPwdRecovery) {
    this.usersSvc.resetPwdUser(emailPwdRecovery).then(
      () => {
        this.localUtilsSvc.showModalNoButton('password reset',
          'An email for recovering your password has been sent to this email adress.');
        this.router.navigate(['/login']);
      },
      error => {
        this.localUtilsSvc.showModalNoButton('password reset',
          'no account exists under this email. please check again.');
        this.router.navigate(['/login']);
      }
    );
  }

  get wnGuest() {
    return this.localUtilsSvc.wnGuest;
  }
  set wnGuest(value: Users) {
    this.localUtilsSvc.wnGuest = value;
  }

  get errorMessage() {
    return this.localUtilsSvc.errorMessage;
  }
  set errorMessage(value) {
    this.localUtilsSvc.errorMessage = value;
  }

  get version() {
    return this.mainSvc.version;
  }
  set version(value) {
    this.mainSvc.version = value;
  }
}
