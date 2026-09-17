import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomelayoutComponent } from './layout/home/homelayout/homelayout.component';
import { Page404Component } from './page404/page404.component';
import { LegacyRouteRedirectComponent } from './legacy-route-redirect/legacy-route-redirect.component';
import { ResourceDashboardComponent } from './resource-dashboard/resource-dashboard.component';
import { ResourceListComponent } from './resource-list/resource-list.component';

const legacy = ['home','sorties','bateau','galerie','reserver','book-online','contact','crew','terms','safety','deposit','booking-process','sea-toys','faq','how-it-works','my-bookings','calendar','my-offers','my-proposals','my-payments','my-profile','my-feedbacks','leave-feedback','my-external-bookings','signup','login','forgotpwd'];

const routes: Routes = [
  { path: '', component: ResourceDashboardComponent, pathMatch: 'full' },

  // Legacy unscoped URLs MUST be checked before the generic resource route.
  // Otherwise URLs such as /admin/reservations are incorrectly interpreted as
  // resourceType=admin/resourceId=reservations.
  ...legacy.map(path => ({ path, component: LegacyRouteRedirectComponent })),
  { path: 'sorties/:slug', component: LegacyRouteRedirectComponent },
  { path: 'bateau/:page', component: LegacyRouteRedirectComponent },
  { path: 'bookings/:bookingId', component: LegacyRouteRedirectComponent },
  { path: 'bookings/:bookingId/invoice', component: LegacyRouteRedirectComponent },
  { path: 'payment/:bookingId', component: LegacyRouteRedirectComponent },
  { path: 'admin/:page', component: LegacyRouteRedirectComponent },
  { path: 'admin/:page/:id', component: LegacyRouteRedirectComponent },
  { path: 'admin/:page/:id/invoice', component: LegacyRouteRedirectComponent },
  { path: 'offer/:offerId', component: LegacyRouteRedirectComponent },
  { path: 'proposal/:proposalId', component: LegacyRouteRedirectComponent },

  // Generic HarborNest resource-type index (/boat, /place, /car, /pool).
  { path: ':assetType', component: ResourceListComponent, pathMatch: 'full' },

  { path: ':assetType/:assetId', component: HomelayoutComponent, children: [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
  ]},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
