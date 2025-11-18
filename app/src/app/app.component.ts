/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Router, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { UtilsService, } from 'godigital-lib';
import { ServicesService, UsersService, OBJECTNAME } from 'godigital-lib';
import { LocalUtilsService } from './services/services.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

declare let what3words: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private env;
  constructor(
    public router: Router,
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public mainSvc: ServicesService,
    public localUtilsSvc: LocalUtilsService,
    public usersSvc: UsersService,
    public utilSvc: UtilsService,
    public spinner: NgxSpinnerService,
    public geolocation: Geolocation,
    public fb: FormBuilder,
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  ngOnInit() {
    AOS.init();
    this.localUtilsSvc.language = this.utilSvc.getLanguage() ?? 'en';
    this.mainSvc.setLanguage(this.localUtilsSvc.language);

    this.initializeApp();
  }

  async initializeApp() {
    let value2;
    let error;
    this.utilSvc.appName = 'Harbornest';

    let platform = await this.utilSvc.getPlatformEnv();
    if (platform !== 'dev ' && platform !== 'test ' && platform !== 'prod') {
      platform = null;
    }

    this.env = { platform, storeId: 0 };
    this.platform.ready().then(async () => {
      const autoHide = true;
      if (this.platform.is('cordova')) {
        this.statusBar.hide();
      }

      this.mainSvc.readConfigFile(this.env).then(
        () => {
          this.env.platform = this.utilSvc.platform;
          this.mainSvc.initBEService(this.env).then(
            async data1 => {
              this.mainSvc.initStorageFb(this.env).then(
                async data2 => {
                  if (this.platform.is('cordova')) {
                    this.splashScreen.hide();
                  }
                  value2 = this.utilSvc.getUid();
                  try {
                    this.localUtilsSvc.processLogin(undefined, undefined, value2)
                      .then(async e => {
//                        this.router.navigate(['/home']);
                      })
                      .catch(e => {
//                        this.router.navigate(['/home']);
                      }
                      );
                  } catch (e) { }
                });
            });
        });
    });
  }
}
