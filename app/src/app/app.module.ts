import { NgModule } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { HaversineService } from 'ng2-haversine';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClientModule, } from '@angular/common/http';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { DatePipe } from '@angular/common';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';

import { environment } from '../environments/environment';

import { GodigitalbModule, UtilsService } from 'godigital-lib';
import { Page404Component } from './page404/page404.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GodigitalbModule,
    LayoutModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    IonicModule,
    LoggerModule.forRoot({
      serverLoggingUrl: environment.apiUrl,
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel,
      disableConsoleLogging: false
    }),
//    FormsModule, ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UtilsService,
    BarcodeScanner,
    DatePipe,
    Geolocation,
    NativeGeocoder,
    HaversineService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
