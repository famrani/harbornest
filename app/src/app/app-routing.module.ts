import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutnoneComponent } from './layout/layoutnone/layoutnone.component';
import { Page404Component } from './page404/page404.component';
import { externalUrlProvider } from './services/services.service';

const routes: Routes = [
  {
    path: '',
    component: LayoutnoneComponent,
    children: [
      { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./mockup/mockup.module').then(m => m.MockupModule) },
      { path: '', loadChildren: () => import('./partners/partners.module').then(m => m.PartnersModule) },
      { path: '', loadChildren: () => import('./experiences/experiences.module').then(m => m.ExperiencesModule) },
      { path: '', loadChildren: () => import('./boatowner/boatowner.module').then(m => m.BoatownerModule) },
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
