// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes, AdminRoutes } from './routes';
import { PageNotFoundComponent } from './components';
// import { AuthGuard }             from './_guards/index'
// import { FeatureRoutes }  from './routes/feature.router';

// Route Configuration
export const AppRoutes: Routes = [
  // Add routes form a different file
  ...HomeRoutes,
  ...AdminRoutes,
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(AppRoutes) ],
  providers: [ ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
