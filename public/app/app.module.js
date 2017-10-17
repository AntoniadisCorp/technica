"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Modules */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var angular_bootstrap_md_1 = require("angular-bootstrap-md");
// Routing Module
var app_routes_1 = require("./app.routes");
// Material Module and fonts, Fontawesome
var angular2_fontawesome_1 = require("angular2-fontawesome/angular2-fontawesome");
var material_1 = require("@angular/material");
// import { PlatformModule } from '@angular/cdk/platform'
// import { A11yModule } from '@angular/cdk/a11y'
// Google Maps API
var core_2 = require("@agm/core");
// Google Recaptcha API
var ng2_recaptcha_1 = require("ng2-recaptcha/ng2-recaptcha");
// Auth Guard
// import { AuthGuard, DeAuthGuard, CanLoadGuard } from './_guards/index'
// import { AuthenticationService } from './services/index'
/* Components */
var app_component_1 = require("./app.component");
var index_1 = require("./components/index");
/* Services */
var index_2 = require("./services/index");
/* Dialogs */
var index_3 = require("./dialogs/index");
var index_4 = require("./window/index");
/* Directives */
var index_5 = require("./directives/index");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                app_routes_1.RoutingModule,
                angular2_fontawesome_1.Angular2FontawesomeModule,
                material_1.MatRippleModule, material_1.MatButtonModule, material_1.MatCardModule, material_1.MatProgressSpinnerModule,
                material_1.MatCheckboxModule, material_1.MatChipsModule, material_1.MatDialogModule, material_1.MatGridListModule, material_1.MatInputModule, material_1.MatPaginatorModule, material_1.MatButtonToggleModule,
                material_1.MatTabsModule, material_1.MatIconModule, material_1.MatFormFieldModule, material_1.MatTooltipModule, material_1.MatSnackBarModule,
                // BrowserAnimationsModule,
                animations_1.NoopAnimationsModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDBzMhhrfwq7kbyqto_oHzR0vozXEZJHd0'
                }),
                // RecaptchaModule.forRoot(),
                common_1.CommonModule,
                angular_bootstrap_md_1.MDBBootstrapModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                index_1.PageNotFoundComponent,
                index_1.HomePageComponent,
                index_1.BlogPageComponent,
                index_1.MenuComponent,
                index_1.FootComponent,
                index_1.PolicyComponent,
                index_3.ContactDialog,
                index_3.ImageDialog,
                index_4.WindowScroll,
                index_4.ScrollSpyDirective,
                index_5.WhiteboxComponent,
                index_5.SanitizeHtml,
                index_1.AdminComponent
                /* TaskComponent,
                SocketComponent,
            
                FooterComponent,
            
                LoginComponent,
                RegisterListComponent,
                CarboardListComponent,
                AlertComponent */
            ],
            entryComponents: [
                index_5.WhiteboxComponent,
                // ScrollSpyDirective,
                index_3.ContactDialog,
                index_3.ImageDialog
            ],
            providers: [
                {
                    provide: ng2_recaptcha_1.RecaptchaLoaderService,
                    useFactory: index_2.PreloadedRecaptchaAPIService,
                },
                //PetService
                // AuthGuard,
                // DeAuthGuard,
                // AuthenticationService
                index_2.EmailsService,
                index_2.WindowRef
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map