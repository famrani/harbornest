/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Users } from 'godigital-lib';
import { LocalUtilsService, chatElement } from '../services/services.service';
import { ServicesService,  } from 'godigital-lib';


@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public activeTab = 0;
  public mactiveTab = 0;
  public businessVerticals;

  constructor(
    public mainSvc: ServicesService,
    public localUtilsSvc: LocalUtilsService,
    public router: Router,
  ) { }

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

  get currentUrl() {
    return this.localUtilsSvc.currentUrl;
  }
  set currentUrl(value) {
    this.localUtilsSvc.currentUrl = value;
  }

  get version() {
    return this.mainSvc.version;
  }
  set version(value) {
    this.mainSvc.version = value;
  }

  get mode() {
    return this.localUtilsSvc.mode;
  }
  set mode(value) {
    this.localUtilsSvc.mode = value;
  }

  get language() {
    return this.localUtilsSvc.language;
  }
  set language(value) {
    this.localUtilsSvc.language= value;
  }

  goHome(){
    this.router.navigate(['/home']);
  }

logout() {
  this.localUtilsSvc.logout();
}

}
