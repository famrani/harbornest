import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GodigitalbModule, UtilsService } from 'godigital-lib';
import { LayoutComponent } from './layout/layout.component';
import { LayoutnoneComponent } from './layoutnone/layoutnone.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout.router.module';



@NgModule({
  declarations: [LayoutComponent,FooterComponent,HeaderComponent, LayoutnoneComponent],
  imports: [
    LayoutComponent,FooterComponent,HeaderComponent,
    CommonModule,
    IonicModule,
    GodigitalbModule,
    FormsModule, ReactiveFormsModule,
    LayoutRoutingModule,
    NgxSpinnerModule,
  ],
  providers:[]
})
export class LayoutModule { }
