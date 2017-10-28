/* Modules */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { /* BrowserAnimationsModule */ NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Hammer Module
import * as Hammer from 'hammerjs';

// Routing Module
import { AppRoutingModule } from './app.routes';

// Material Module and fonts, Fontawesome
// import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { MatRippleModule,
MatButtonModule, MatCardModule, MatProgressSpinnerModule,
MatCheckboxModule, MatChipsModule, MatDialogModule, MatGridListModule, MatInputModule, MatPaginatorModule, MatButtonToggleModule,
MatTabsModule, MatIconModule, MatFormFieldModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';
// import { PlatformModule } from '@angular/cdk/platform'
// import { A11yModule } from '@angular/cdk/a11y'

// Google Maps API
import { AgmCoreModule } from '@agm/core';

// Google Recaptcha API
/* import { RecaptchaModule, RecaptchaLoaderService } from 'ng2-recaptcha/ng2-recaptcha';
import { RecaptchaNoFormsModule } from 'ng2-recaptcha/ng2-recaptcha.noforms'; */
import { ReCaptchaModule } from 'angular2-recaptcha';
// Auth Guard
// import { AuthGuard, DeAuthGuard, CanLoadGuard } from './_guards/index'
// import { AuthenticationService } from './services/index'

/* Components */
import { AppComponent } from './app.component';

/* Dialogs */
import { ContactDialog, ImageDialog } from './dialogs';
import { WindowScrollComponent, ScrollSpyDirective } from './window';

/* Components */
import {
        MenuComponent,
        AdminComponent,
        FootComponent,
        HomePageComponent,
        PageNotFoundComponent,
        BlogPageComponent,
        PolicyComponent,
        ArticleComponent
     } from './components';

const APP_COMPONENTS = [

  MenuComponent,
  AdminComponent,
  FootComponent,
  HomePageComponent,
  PageNotFoundComponent,
  BlogPageComponent,
  PolicyComponent,
  ArticleComponent,
  WindowScrollComponent
];

/* Services */
import { WindowRef, EmailsService } from './services';



/* Directives */
import { WHITEBOX_DIRECTIVES, WhiteboxComponent } from './directives';


const APP_DIRECTIVES = [

  ScrollSpyDirective,
  WHITEBOX_DIRECTIVES
];

@NgModule({

  imports: [

        BrowserModule.withServerTransition({appId: 'Technical-PRB'}),
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule.forRoot(),
        AppRoutingModule,
        // Angular2FontawesomeModule,
        MatRippleModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule,
        MatCheckboxModule, MatChipsModule, MatDialogModule, MatGridListModule, MatInputModule, MatPaginatorModule, MatButtonToggleModule,
        MatTabsModule, MatIconModule, MatFormFieldModule, MatTooltipModule, MatSnackBarModule,
        // BrowserAnimationsModule,
        NoopAnimationsModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDBzMhhrfwq7kbyqto_oHzR0vozXEZJHd0'
        }),
        ReCaptchaModule,
        CommonModule,
        MDBBootstrapModule.forRoot()
    ],

  declarations: [

    AppComponent,

    ContactDialog,
    ImageDialog,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES
    ],
  entryComponents: [

    ContactDialog,
    ImageDialog
  ],


  providers: [{
      provide: LocationStrategy,
      useClass: HashLocationStrategy },

   /*  {
      provide: RecaptchaLoaderService,
      useFactory: PreloadedRecaptchaAPIService,
    }, */

    // PetService
    // AuthGuard,
    // DeAuthGuard,
    // AuthenticationService
    EmailsService,
    WindowRef
  ],


  bootstrap:    [ AppComponent ],

  schemas: [ NO_ERRORS_SCHEMA ]
})

export class AppModule {}
