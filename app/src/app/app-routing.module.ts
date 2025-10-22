import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutnoneComponent } from './layout/layoutnone/layoutnone.component';
import { Page404Component } from './page404/page404.component';
import { externalUrlProvider } from './services/services.service';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: '', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
      { path: '', loadChildren: () => import('./tours/tourhome.module').then(m => m.TourhomeModule) },
      { path: '', loadChildren: () => import('./partners/partners.module').then(m => m.PartnersModule) },
      { path: '', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
    ]
  },
  {
    path: '',
    component: LayoutnoneComponent,
    children: [
      { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    ]
  },
  { path: 'externalRedirect', resolve: { url: externalUrlProvider, }, component: LayoutComponent, },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload', })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
