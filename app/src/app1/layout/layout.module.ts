import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HomelayoutComponent } from './home/homelayout/homelayout.component';
import { HomeheaderComponent } from './home/homeheader/homeheader.component';
import { HomefooterComponent } from './home/homefooter/homefooter.component';
import { LayoutRoutingModule } from './layout.router.module';
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component';

@NgModule({
  declarations: [
    HomelayoutComponent,
    HomeheaderComponent,
    HomefooterComponent,
    CookieConsentComponent,
  ],
  imports: [
    HomelayoutComponent,
    HomeheaderComponent,
    HomefooterComponent,
    CookieConsentComponent,
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    LayoutRoutingModule,
  ],
  exports: [HomelayoutComponent],
})
export class LayoutModule {}
