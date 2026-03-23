import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomelayoutComponent } from './home/homelayout/homelayout.component';
import { HomeheaderComponent } from './home/homeheader/homeheader.component';
import { HomefooterComponent } from './home/homefooter/homefooter.component';

@NgModule({
  declarations: [
    HomelayoutComponent,
    HomeheaderComponent,
    HomefooterComponent,
  ],
  imports: [
    HomelayoutComponent,
    HomeheaderComponent,
    HomefooterComponent,
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  exports: [
    HomelayoutComponent,
    HomeheaderComponent,
    HomefooterComponent,
  ],
})
export class LayoutModule {}
