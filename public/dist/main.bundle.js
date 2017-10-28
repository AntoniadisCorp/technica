webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.carousel-caption {\n    height: 100%;\n    padding-top: 7rem;\n  }\n  .navbar .btn-group .dropdown-menu a:hover {\n    color: #000 !important;\n  }\n  \n  .navbar .btn-group .dropdown-menu a:active {\n    color: #fff !important;\n  }\n  \n  .navbar {\n    background-color: transparent;\n  }\n  \n  .scrolling-navbar {\n    transition: background .5s ease-in-out, padding .5s ease-in-out;\n  }\n\n  .navbar {\n    box-shadow: none; \n    /* 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) */\n  }\n  \n  .top-nav-collapse {\n    background-color: #00838f;\n    box-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);\n  }\n\n\n  \n  @media only screen and (max-width: 768px) {\n    .navbar {\n        background-color: #1C2331;\n    }\n  }\n\nmain {\n  position: relative;\n  bottom: 15px;\n}\n\n#ngb-tooltip-0 {\n  left: 60px !important;\n}\n/* Parallax video styles*/\n.video-parallax {\n  clip: rect(0, 100vw, 700px, 0); /* Change second and third value to manipulate the width and height of your video */\n  position: absolute; \n  top: 0px; \n  left: 0px; \n  width: 100%; \n  height: 100%; \n  overflow: hidden; \n  visibility: hidden; \n  z-index: -100;\n}\n\n.view video {\n  position: fixed; \n  top: 0px; \n  left: 0px; \n  right: 0px; \n  bottom: 0px; \n  min-width: 100vw; \n  min-height: 100vh; \n  max-width: none; \n  max-height: none; \n  visibility: visible; \n  z-index: -1\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <style>\n    .collapse.in {\n    display: block;\n}\n.collapse {\n  display: none;\n}\n#banner {\n  color: #fff;\n}\n#banner.fa5 {\n  background-color: #489fdf;\n  border-bottom: rgba(0,0,0,0.2);\n}\n#banner.fa5 .message-container {\n  padding: 40px 0;\n}\n#banner .message-container {\n  display: table;\n  width: auto;\n  margin: 0 auto;\n  padding: 15px 0;\n}\n#banner .tagline, #banner .action {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n#banner .tagline {\n  font-weight: 200;\n  font-size: 16px;\n  padding-right: 30px;\n}\n#banner.fa5 .tagline {\n  font-size: 24px;\n}\n\n#banner.fa5 .btn-primary {\n  font-weight: 600;\n  font-size: 22px;\n  padding: 14px 28px;\n  border-radius: 30px;\n  color: #489fdf;\n  background-color: #fff;\n  border-color: #418fc9;\n  border-bottom-width: 2px;\n  text-shadow: none;\n}\n\n#banner.fa5 .btn-primary:hover, #banner.fa5 .btn-primary:focus, #banner.fa5 .btn-primary:active, #banner.fa5 .btn-primary.active, .open>#banner.fa5 .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: rgba(0,0,0,0.2);\n  border-color: rgba(0,0,0,0.2);\n  border-bottom-color: rgba(0,0,0,0.2);\n}\n#banner.fa5 .btn-primary:active, #banner.fa5 .btn-primary.active, .open>#banner.fa5 .btn-primary.dropdown-toggle {\n  background-image: none;\n}\n</style> -->\n<!-- Banner -->\n<!-- <div class=\"hidden-print fa5 collapse in\" id=\"banner\" aria-expanded=\"true\" style=\"\">\n        <div class=\"container\">\n          <div class=\"message-container\">\n            <div class=\"tagline\">\n              <span id=\"rotating-message\">September is your last chance to get FA Pro and <strong>ALL</strong> KS rewards for just $40!</span>\n            </div>\n            <div class=\"action\">\n              <a id=\"rotating-url\" class=\"btn btn-primary btn-lg btn-block\" href=\"https://fontawesome.com/?utm_source=font_awesome_homepage&amp;utm_medium=display&amp;utm_campaign=september_last_chance&amp;utm_content=banner\" target=\"_blank\">Pre-order FA Pro! &nbsp;<i class=\"fas fas-external-link\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div> -->\n<!-- /Banner -->\n<navig *ngIf=\"pageType\"  ></navig>\n\n<div class=\"section\">\n    <router-outlet></router-outlet> \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthGuard, DeAuthGuard } from './_guards/index'
var AppComponent = (function () {
    function AppComponent() {
    }
    /**
     * ngOnInit
     */
    AppComponent.prototype.ngOnInit = function () {
        // remove style from body
        document.getElementsByTagName('body')[0].removeAttribute('style');
        this.pageType = !/admin/.test(window.location.pathname) ? true : false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-prb',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [
            // AuthenticationService,
            //   AlertService,
            //   UserService,
            //   TaskService,
            __WEBPACK_IMPORTED_MODULE_1__services__["b" /* EventsService */],
        ]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_recaptcha__ = __webpack_require__("../../../../angular2-recaptcha/angular2-recaptcha.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dialogs__ = __webpack_require__("../../../../../src/app/dialogs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__window__ = __webpack_require__("../../../../../src/app/window/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Modules */








// Routing Module

// Material Module and fonts, Fontawesome
// import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

// import { PlatformModule } from '@angular/cdk/platform'
// import { A11yModule } from '@angular/cdk/a11y'
// Google Maps API

// Google Recaptcha API
/* import { RecaptchaModule, RecaptchaLoaderService } from 'ng2-recaptcha/ng2-recaptcha';
import { RecaptchaNoFormsModule } from 'ng2-recaptcha/ng2-recaptcha.noforms'; */

// Auth Guard
// import { AuthGuard, DeAuthGuard, CanLoadGuard } from './_guards/index'
// import { AuthenticationService } from './services/index'
/* Components */

/* Dialogs */


/* Components */

var APP_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_15__components__["f" /* MenuComponent */],
    __WEBPACK_IMPORTED_MODULE_15__components__["a" /* AdminComponent */],
    __WEBPACK_IMPORTED_MODULE_15__components__["d" /* FootComponent */],
    __WEBPACK_IMPORTED_MODULE_15__components__["e" /* HomePageComponent */],
    __WEBPACK_IMPORTED_MODULE_15__components__["g" /* PageNotFoundComponent */],
    __WEBPACK_IMPORTED_MODULE_15__components__["c" /* BlogPageComponent */],
    __WEBPACK_IMPORTED_MODULE_15__components__["h" /* PolicyComponent */],
    __WEBPACK_IMPORTED_MODULE_15__components__["b" /* ArticleComponent */],
    __WEBPACK_IMPORTED_MODULE_14__window__["b" /* WindowScrollComponent */]
];
/* Services */

/* Directives */

var APP_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_14__window__["a" /* ScrollSpyDirective */],
    __WEBPACK_IMPORTED_MODULE_17__directives__["a" /* WHITEBOX_DIRECTIVES */]
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'Technical-PRB' }),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* AppRoutingModule */],
            // Angular2FontawesomeModule,
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["m" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["l" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["p" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["q" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MatSnackBarModule */],
            // BrowserAnimationsModule,
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDBzMhhrfwq7kbyqto_oHzR0vozXEZJHd0'
            }),
            __WEBPACK_IMPORTED_MODULE_11_angular2_recaptcha__["ReCaptchaModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dialogs__["a" /* ContactDialog */],
            __WEBPACK_IMPORTED_MODULE_13__dialogs__["b" /* ImageDialog */]
        ].concat(APP_COMPONENTS, APP_DIRECTIVES),
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__dialogs__["a" /* ContactDialog */],
            __WEBPACK_IMPORTED_MODULE_13__dialogs__["b" /* ImageDialog */]
        ],
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["g" /* LocationStrategy */],
                useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* HashLocationStrategy */]
            },
            /*  {
               provide: RecaptchaLoaderService,
               useFactory: PreloadedRecaptchaAPIService,
             }, */
            // PetService
            // AuthGuard,
            // DeAuthGuard,
            // AuthenticationService
            __WEBPACK_IMPORTED_MODULE_16__services__["a" /* EmailsService */],
            __WEBPACK_IMPORTED_MODULE_16__services__["c" /* WindowRef */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("../../../../../src/app/routes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router'




// import { AuthGuard }             from './_guards/index'
// import { FeatureRoutes }  from './routes/feature.router';
// Route Configuration
var AppRoutes = __WEBPACK_IMPORTED_MODULE_2__routes__["b" /* HomeRoutes */].concat(__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* AdminRoutes */], [
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__components__["g" /* PageNotFoundComponent */] }
]);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(AppRoutes)],
        providers: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/classes/Scrollspy.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scrollspy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");

var Scrollspy = (function () {
    function Scrollspy() {
        // initialize current window reference
        var _win = new __WEBPACK_IMPORTED_MODULE_0__services_index__["c" /* WindowRef */]();
        this.window = _win.nativeWindow;
    }
    Scrollspy.prototype.scrollTo = function (yPoint, duration) {
        var _this = this;
        setTimeout(function () {
            _this.window.scrollTo(0, yPoint);
        }, duration);
        return;
    };
    Scrollspy.prototype.smoothScroll = function (eID) {
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(eID) - 60;
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            this.window.scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 100);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                this.scrollTo(leapY, timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i_1 = startY; i_1 > stopY; i_1 -= step) {
            this.scrollTo(leapY, timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }
    };
    Scrollspy.prototype.currentYPosition = function () {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset)
            return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)
            return document.body.scrollTop;
        return 0;
    };
    Scrollspy.prototype.elmYPosition = function (eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent !== document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    };
    return Scrollspy;
}());

//# sourceMappingURL=Scrollspy.class.js.map

/***/ }),

/***/ "../../../../../src/app/classes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scrollspy_class__ = __webpack_require__("../../../../../src/app/classes/Scrollspy.class.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Scrollspy_class__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n    \n =========================================================\n * Material Dashboard - v1.1.1\n =========================================================\n \n * Product Page: http://www.creative-tim.com/product/material-dashboard\n * Copyright 2017 Creative Tim (http://www.creative-tim.com)\n * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard/blob/master/LICENSE.md)\n \n =========================================================\n \n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n \n */\n \n/* ANIMATION */\n/* SHADOWS */\n/* Shadows (from mdl http://www.getmdl.io/) */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -ms-touch-action: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n}\n\n.noUi-base {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.noUi-origin {\n  position: absolute;\n  right: 0;\n  top: 0;\n  left: 0;\n  bottom: 0;\n}\n\n.noUi-handle {\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n}\n\n.noUi-stacking .noUi-handle {\n  z-index: 10;\n}\n\n.noUi-state-tap .noUi-origin {\n  transition: left 0.3s, top 0.3s;\n}\n\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n\n.noUi-horizontal {\n  height: 10px;\n}\n\n.noUi-handle {\n  box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  left: -10px;\n  top: -6px;\n  cursor: pointer;\n  border-radius: 100%;\n  transition: all 0.2s ease-out;\n  border: 1px solid;\n  background: #FFFFFF;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.noUi-vertical .noUi-handle {\n  margin-left: 5px;\n  cursor: ns-resize;\n}\n\n.noUi-horizontal.noUi-extended {\n  padding: 0 15px;\n}\n\n.noUi-horizontal.noUi-extended .noUi-origin {\n  right: -15px;\n}\n\n.noUi-background {\n  height: 2px;\n  margin: 20px 0;\n}\n\n.noUi-origin {\n  margin: 0;\n  border-radius: 0;\n  height: 2px;\n  background: #c8c8c8;\n}\n.noUi-origin[style^=\"left: 0\"] .noUi-handle {\n  background-color: #fff;\n  border: 2px solid #c8c8c8;\n}\n.noUi-origin[style^=\"left: 0\"] .noUi-handle.noUi-active {\n  border-width: 1px;\n}\n\n.noUi-target {\n  border-radius: 3px;\n}\n\n.noUi-horizontal {\n  height: 2px;\n  margin: 15px 0;\n}\n\n.noUi-vertical {\n  height: 100%;\n  width: 2px;\n  margin: 0 15px;\n  display: inline-block;\n}\n\n.noUi-handle.noUi-active {\n  -webkit-transform: scale3d(2, 2, 1);\n          transform: scale3d(2, 2, 1);\n}\n\n[disabled].noUi-slider {\n  opacity: 0.5;\n}\n\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n\n.slider {\n  background: #c8c8c8;\n}\n\n.slider.noUi-connect {\n  background-color: #9c27b0;\n}\n.slider .noUi-handle {\n  border-color: #9c27b0;\n}\n.slider.slider-info .noUi-connect, .slider.slider-info.noUi-connect {\n  background-color: #00bcd4;\n}\n.slider.slider-info .noUi-handle {\n  border-color: #00bcd4;\n}\n.slider.slider-success .noUi-connect, .slider.slider-success.noUi-connect {\n  background-color: #4caf50;\n}\n.slider.slider-success .noUi-handle {\n  border-color: #4caf50;\n}\n.slider.slider-warning .noUi-connect, .slider.slider-warning.noUi-connect {\n  background-color: #ff9800;\n}\n.slider.slider-warning .noUi-handle {\n  border-color: #ff9800;\n}\n.slider.slider-danger .noUi-connect, .slider.slider-danger.noUi-connect {\n  background-color: #f44336;\n}\n.slider.slider-danger .noUi-handle {\n  border-color: #f44336;\n}\n\n/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\n\nCopyright (c) 2015 Daniel Eden\n*/\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n.animated.flipOutX,\n.animated.flipOutY {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\nh1, .h1 {\n  font-size: 3.8em;\n  line-height: 1.15em;\n}\n\nh2, .h2 {\n  font-size: 2.6em;\n}\n\nh3, .h3 {\n  font-size: 1.825em;\n  line-height: 1.4em;\n  margin: 20px 0 10px;\n}\n\nh4, .h4 {\n  font-size: 1.3em;\n  line-height: 1.4em;\n}\n\nh5, .h5 {\n  font-size: 1.25em;\n  line-height: 1.4em;\n  margin-bottom: 15px;\n}\n\nh6, .h6 {\n  font-size: 1em;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n/*.title,\n.card-title,\n.info-title,\n.footer-brand,\n.footer-big h5,\n.footer-big h4,\n.media .media-heading{\n    font-weight: $font-weight-extra-bold;\n    font-family: $font-family-serif;\n\n    &,\n    a{\n        color: $black-color;\n        text-decoration: none;\n    }\n}*/\nh2.title {\n  margin-bottom: 30px;\n}\n\n.description,\n.card-description,\n.footer-big p {\n  color: #999999;\n}\n\n.text-warning {\n  color: #ff9800;\n}\n\n.text-primary {\n  color: #9c27b0;\n}\n\n.text-danger {\n  color: #f44336;\n}\n\n.text-success {\n  color: #4caf50;\n}\n\n.text-info {\n  color: #00bcd4;\n}\n\n.text-rose {\n  color: #e91e63;\n}\n\n.text-gray {\n  color: #999999;\n}\n\n.wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh;\n}\n\n.sidebar,\n.off-canvas-sidebar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.sidebar .sidebar-wrapper,\n.off-canvas-sidebar .sidebar-wrapper {\n  position: relative;\n  height: calc(100vh - 75px);\n  overflow: auto;\n  width: 260px;\n  z-index: 4;\n}\n.sidebar .logo-tim,\n.off-canvas-sidebar .logo-tim {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n.sidebar .logo-tim img,\n.off-canvas-sidebar .logo-tim img {\n  width: 60px;\n  height: 60px;\n}\n.sidebar .nav,\n.off-canvas-sidebar .nav {\n  margin-top: 20px;\n}\n.sidebar .nav li > a,\n.off-canvas-sidebar .nav li > a {\n  margin: 10px 15px;\n  border-radius: 3px;\n  color: #3C4858;\n}\n.sidebar .nav li:hover > a,\n.off-canvas-sidebar .nav li:hover > a {\n  background: rgba(200, 200, 200, 0.2);\n  color: #3C4858;\n}\n.sidebar .nav li.active > a,\n.off-canvas-sidebar .nav li.active > a {\n  color: #FFFFFF;\n}\n.sidebar .nav li.active > a i,\n.off-canvas-sidebar .nav li.active > a i {\n  color: #FFFFFF;\n}\n.sidebar .nav p,\n.off-canvas-sidebar .nav p {\n  margin: 0;\n  line-height: 30px;\n  font-size: 14px;\n}\n.sidebar .nav i,\n.off-canvas-sidebar .nav i {\n  font-size: 24px;\n  float: left;\n  margin-right: 15px;\n  line-height: 30px;\n  width: 30px;\n  text-align: center;\n  color: #a9afbb;\n}\n.sidebar .sidebar-background,\n.off-canvas-sidebar .sidebar-background {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center;\n}\n.sidebar .sidebar-background:after,\n.off-canvas-sidebar .sidebar-background:after {\n  position: absolute;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  display: block;\n  background: #FFFFFF;\n  opacity: .93;\n}\n.sidebar .logo,\n.off-canvas-sidebar .logo {\n  position: relative;\n  padding: 15px 15px;\n  z-index: 4;\n}\n.sidebar .logo:after,\n.off-canvas-sidebar .logo:after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  right: 10%;\n  height: 1px;\n  width: 80%;\n  background-color: rgba(180, 180, 180, 0.3);\n}\n.sidebar .logo p,\n.off-canvas-sidebar .logo p {\n  float: left;\n  font-size: 20px;\n  margin: 10px 10px;\n  color: #FFFFFF;\n  line-height: 20px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n.sidebar .logo .simple-text,\n.off-canvas-sidebar .logo .simple-text {\n  text-transform: uppercase;\n  padding: 5px 0px;\n  display: block;\n  font-size: 18px;\n  color: #3C4858;\n  text-align: center;\n  font-weight: 400;\n  line-height: 30px;\n}\n.sidebar .logo-tim,\n.off-canvas-sidebar .logo-tim {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n.sidebar .logo-tim img,\n.off-canvas-sidebar .logo-tim img {\n  width: 60px;\n  height: 60px;\n}\n.sidebar:after, .sidebar:before,\n.off-canvas-sidebar:after,\n.off-canvas-sidebar:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.sidebar:before,\n.off-canvas-sidebar:before {\n  opacity: .33;\n}\n.sidebar:after,\n.off-canvas-sidebar:after {\n  z-index: 3;\n  opacity: 1;\n}\n.sidebar[data-image]:after, .sidebar.has-image:after,\n.off-canvas-sidebar[data-image]:after,\n.off-canvas-sidebar.has-image:after {\n  opacity: .77;\n}\n.sidebar[data-color=\"blue\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"blue\"] .nav li.active a {\n  background-color: #00bcd4;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.sidebar[data-color=\"green\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"green\"] .nav li.active a {\n  background-color: #4caf50;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.sidebar[data-color=\"orange\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"orange\"] .nav li.active a {\n  background-color: #ff9800;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.sidebar[data-color=\"red\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"red\"] .nav li.active a {\n  background-color: #f44336;\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.sidebar[data-color=\"purple\"] .nav li.active a,\n.off-canvas-sidebar[data-color=\"purple\"] .nav li.active a {\n  background-color: #9c27b0;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n\n.off-canvas-sidebar .nav > li > a,\n.off-canvas-sidebar .nav > li > a:hover {\n  color: #FFFFFF;\n}\n.off-canvas-sidebar .nav > li > a:focus {\n  background: rgba(200, 200, 200, 0.2);\n}\n\n.main-panel {\n  position: relative;\n  z-index: 2;\n  float: right;\n  overflow: auto;\n  width: calc(100% - 260px);\n  min-height: 100%;\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n  transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n.main-panel > .content {\n  margin-top: 70px;\n  padding: 30px 15px;\n  min-height: calc(100% - 123px);\n}\n.main-panel > .footer {\n  border-top: 1px solid #e7e7e7;\n}\n.main-panel > .navbar {\n  margin-bottom: 0;\n}\n\n.main-panel {\n  max-height: 100%;\n  height: 100%;\n}\n\n.sidebar,\n.main-panel {\n  transition-property: top,bottom;\n  transition-duration: .2s,.2s;\n  transition-timing-function: linear,linear;\n  -webkit-overflow-scrolling: touch;\n}\n\n.btn,\n.navbar .navbar-nav > li > a.btn {\n  border: none;\n  border-radius: 3px;\n  position: relative;\n  padding: 12px 30px;\n  margin: 10px 1px;\n  font-size: 12px;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  will-change: box-shadow, transform;\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn::-moz-focus-inner,\n.navbar .navbar-nav > li > a.btn::-moz-focus-inner {\n  border: 0;\n}\n.btn, .btn.btn-default,\n.navbar .navbar-nav > li > a.btn,\n.navbar .navbar-nav > li > a.btn.btn-default {\n  box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);\n}\n.btn, .btn:hover, .btn:focus, .btn:active, .btn.active, .btn:active:focus, .btn:active:hover, .btn.active:focus, .btn.active:hover, .open > .btn.dropdown-toggle, .open > .btn.dropdown-toggle:focus, .open > .btn.dropdown-toggle:hover, .btn.btn-default, .btn.btn-default:hover, .btn.btn-default:focus, .btn.btn-default:active, .btn.btn-default.active, .btn.btn-default:active:focus, .btn.btn-default:active:hover, .btn.btn-default.active:focus, .btn.btn-default.active:hover, .open > .btn.btn-default.dropdown-toggle, .open > .btn.btn-default.dropdown-toggle:focus, .open > .btn.btn-default.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn,\n.navbar .navbar-nav > li > a.btn:hover,\n.navbar .navbar-nav > li > a.btn:focus,\n.navbar .navbar-nav > li > a.btn:active,\n.navbar .navbar-nav > li > a.btn.active,\n.navbar .navbar-nav > li > a.btn:active:focus,\n.navbar .navbar-nav > li > a.btn:active:hover,\n.navbar .navbar-nav > li > a.btn.active:focus,\n.navbar .navbar-nav > li > a.btn.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-default,\n.navbar .navbar-nav > li > a.btn.btn-default:hover,\n.navbar .navbar-nav > li > a.btn.btn-default:focus,\n.navbar .navbar-nav > li > a.btn.btn-default:active,\n.navbar .navbar-nav > li > a.btn.btn-default.active,\n.navbar .navbar-nav > li > a.btn.btn-default:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-default:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-default.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-default.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle:hover {\n  background-color: #999999;\n  color: #FFFFFF;\n}\n.btn:focus, .btn:active, .btn:hover, .btn.btn-default:focus, .btn.btn-default:active, .btn.btn-default:hover,\n.navbar .navbar-nav > li > a.btn:focus,\n.navbar .navbar-nav > li > a.btn:active,\n.navbar .navbar-nav > li > a.btn:hover,\n.navbar .navbar-nav > li > a.btn.btn-default:focus,\n.navbar .navbar-nav > li > a.btn.btn-default:active,\n.navbar .navbar-nav > li > a.btn.btn-default:hover {\n  box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);\n}\n.btn.disabled, .btn.disabled:hover, .btn.disabled:focus, .btn.disabled.focus, .btn.disabled:active, .btn.disabled.active, .btn:disabled, .btn:disabled:hover, .btn:disabled:focus, .btn:disabled.focus, .btn:disabled:active, .btn:disabled.active, .btn[disabled], .btn[disabled]:hover, .btn[disabled]:focus, .btn[disabled].focus, .btn[disabled]:active, .btn[disabled].active, fieldset[disabled] .btn, fieldset[disabled] .btn:hover, fieldset[disabled] .btn:focus, fieldset[disabled] .btn.focus, fieldset[disabled] .btn:active, fieldset[disabled] .btn.active, .btn.btn-default.disabled, .btn.btn-default.disabled:hover, .btn.btn-default.disabled:focus, .btn.btn-default.disabled.focus, .btn.btn-default.disabled:active, .btn.btn-default.disabled.active, .btn.btn-default:disabled, .btn.btn-default:disabled:hover, .btn.btn-default:disabled:focus, .btn.btn-default:disabled.focus, .btn.btn-default:disabled:active, .btn.btn-default:disabled.active, .btn.btn-default[disabled], .btn.btn-default[disabled]:hover, .btn.btn-default[disabled]:focus, .btn.btn-default[disabled].focus, .btn.btn-default[disabled]:active, .btn.btn-default[disabled].active, fieldset[disabled] .btn.btn-default, fieldset[disabled] .btn.btn-default:hover, fieldset[disabled] .btn.btn-default:focus, fieldset[disabled] .btn.btn-default.focus, fieldset[disabled] .btn.btn-default:active, fieldset[disabled] .btn.btn-default.active,\n.navbar .navbar-nav > li > a.btn.disabled,\n.navbar .navbar-nav > li > a.btn.disabled:hover,\n.navbar .navbar-nav > li > a.btn.disabled:focus,\n.navbar .navbar-nav > li > a.btn.disabled.focus,\n.navbar .navbar-nav > li > a.btn.disabled:active,\n.navbar .navbar-nav > li > a.btn.disabled.active,\n.navbar .navbar-nav > li > a.btn:disabled,\n.navbar .navbar-nav > li > a.btn:disabled:hover,\n.navbar .navbar-nav > li > a.btn:disabled:focus,\n.navbar .navbar-nav > li > a.btn:disabled.focus,\n.navbar .navbar-nav > li > a.btn:disabled:active,\n.navbar .navbar-nav > li > a.btn:disabled.active,\n.navbar .navbar-nav > li > a.btn[disabled],\n.navbar .navbar-nav > li > a.btn[disabled]:hover,\n.navbar .navbar-nav > li > a.btn[disabled]:focus,\n.navbar .navbar-nav > li > a.btn[disabled].focus,\n.navbar .navbar-nav > li > a.btn[disabled]:active,\n.navbar .navbar-nav > li > a.btn[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.active,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-default.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-default:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled],\n.navbar .navbar-nav > li > a.btn.btn-default[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-default[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-default.active {\n  box-shadow: none;\n}\n.btn.btn-simple, .btn.btn-default.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple {\n  background-color: transparent;\n  color: #999999;\n  box-shadow: none;\n}\n.btn.btn-simple:hover, .btn.btn-simple:focus, .btn.btn-simple:active, .btn.btn-default.btn-simple:hover, .btn.btn-default.btn-simple:focus, .btn.btn-default.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-default.btn-simple:active {\n  background-color: transparent;\n  color: #999999;\n}\n.btn.btn-primary,\n.navbar .navbar-nav > li > a.btn.btn-primary {\n  box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\n}\n.btn.btn-primary, .btn.btn-primary:hover, .btn.btn-primary:focus, .btn.btn-primary:active, .btn.btn-primary.active, .btn.btn-primary:active:focus, .btn.btn-primary:active:hover, .btn.btn-primary.active:focus, .btn.btn-primary.active:hover, .open > .btn.btn-primary.dropdown-toggle, .open > .btn.btn-primary.dropdown-toggle:focus, .open > .btn.btn-primary.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary,\n.navbar .navbar-nav > li > a.btn.btn-primary:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:active,\n.navbar .navbar-nav > li > a.btn.btn-primary.active,\n.navbar .navbar-nav > li > a.btn.btn-primary:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle:hover {\n  background-color: #9c27b0;\n  color: #FFFFFF;\n}\n.btn.btn-primary:focus, .btn.btn-primary:active, .btn.btn-primary:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:active,\n.navbar .navbar-nav > li > a.btn.btn-primary:hover {\n  box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);\n}\n.btn.btn-primary.disabled, .btn.btn-primary.disabled:hover, .btn.btn-primary.disabled:focus, .btn.btn-primary.disabled.focus, .btn.btn-primary.disabled:active, .btn.btn-primary.disabled.active, .btn.btn-primary:disabled, .btn.btn-primary:disabled:hover, .btn.btn-primary:disabled:focus, .btn.btn-primary:disabled.focus, .btn.btn-primary:disabled:active, .btn.btn-primary:disabled.active, .btn.btn-primary[disabled], .btn.btn-primary[disabled]:hover, .btn.btn-primary[disabled]:focus, .btn.btn-primary[disabled].focus, .btn.btn-primary[disabled]:active, .btn.btn-primary[disabled].active, fieldset[disabled] .btn.btn-primary, fieldset[disabled] .btn.btn-primary:hover, fieldset[disabled] .btn.btn-primary:focus, fieldset[disabled] .btn.btn-primary.focus, fieldset[disabled] .btn.btn-primary:active, fieldset[disabled] .btn.btn-primary.active,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-primary.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-primary:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled],\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-primary[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-primary.active {\n  box-shadow: none;\n}\n.btn.btn-primary.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple {\n  background-color: transparent;\n  color: #9c27b0;\n  box-shadow: none;\n}\n.btn.btn-primary.btn-simple:hover, .btn.btn-primary.btn-simple:focus, .btn.btn-primary.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:active {\n  background-color: transparent;\n  color: #9c27b0;\n}\n.btn.btn-info,\n.navbar .navbar-nav > li > a.btn.btn-info {\n  box-shadow: 0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12);\n}\n.btn.btn-info, .btn.btn-info:hover, .btn.btn-info:focus, .btn.btn-info:active, .btn.btn-info.active, .btn.btn-info:active:focus, .btn.btn-info:active:hover, .btn.btn-info.active:focus, .btn.btn-info.active:hover, .open > .btn.btn-info.dropdown-toggle, .open > .btn.btn-info.dropdown-toggle:focus, .open > .btn.btn-info.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-info,\n.navbar .navbar-nav > li > a.btn.btn-info:hover,\n.navbar .navbar-nav > li > a.btn.btn-info:focus,\n.navbar .navbar-nav > li > a.btn.btn-info:active,\n.navbar .navbar-nav > li > a.btn.btn-info.active,\n.navbar .navbar-nav > li > a.btn.btn-info:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-info:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-info.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-info.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle:hover {\n  background-color: #00bcd4;\n  color: #FFFFFF;\n}\n.btn.btn-info:focus, .btn.btn-info:active, .btn.btn-info:hover,\n.navbar .navbar-nav > li > a.btn.btn-info:focus,\n.navbar .navbar-nav > li > a.btn.btn-info:active,\n.navbar .navbar-nav > li > a.btn.btn-info:hover {\n  box-shadow: 0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2);\n}\n.btn.btn-info.disabled, .btn.btn-info.disabled:hover, .btn.btn-info.disabled:focus, .btn.btn-info.disabled.focus, .btn.btn-info.disabled:active, .btn.btn-info.disabled.active, .btn.btn-info:disabled, .btn.btn-info:disabled:hover, .btn.btn-info:disabled:focus, .btn.btn-info:disabled.focus, .btn.btn-info:disabled:active, .btn.btn-info:disabled.active, .btn.btn-info[disabled], .btn.btn-info[disabled]:hover, .btn.btn-info[disabled]:focus, .btn.btn-info[disabled].focus, .btn.btn-info[disabled]:active, .btn.btn-info[disabled].active, fieldset[disabled] .btn.btn-info, fieldset[disabled] .btn.btn-info:hover, fieldset[disabled] .btn.btn-info:focus, fieldset[disabled] .btn.btn-info.focus, fieldset[disabled] .btn.btn-info:active, fieldset[disabled] .btn.btn-info.active,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-info.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-info:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled],\n.navbar .navbar-nav > li > a.btn.btn-info[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-info[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-info.active {\n  box-shadow: none;\n}\n.btn.btn-info.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple {\n  background-color: transparent;\n  color: #00bcd4;\n  box-shadow: none;\n}\n.btn.btn-info.btn-simple:hover, .btn.btn-info.btn-simple:focus, .btn.btn-info.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-info.btn-simple:active {\n  background-color: transparent;\n  color: #00bcd4;\n}\n.btn.btn-success,\n.navbar .navbar-nav > li > a.btn.btn-success {\n  box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12);\n}\n.btn.btn-success, .btn.btn-success:hover, .btn.btn-success:focus, .btn.btn-success:active, .btn.btn-success.active, .btn.btn-success:active:focus, .btn.btn-success:active:hover, .btn.btn-success.active:focus, .btn.btn-success.active:hover, .open > .btn.btn-success.dropdown-toggle, .open > .btn.btn-success.dropdown-toggle:focus, .open > .btn.btn-success.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-success,\n.navbar .navbar-nav > li > a.btn.btn-success:hover,\n.navbar .navbar-nav > li > a.btn.btn-success:focus,\n.navbar .navbar-nav > li > a.btn.btn-success:active,\n.navbar .navbar-nav > li > a.btn.btn-success.active,\n.navbar .navbar-nav > li > a.btn.btn-success:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-success:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-success.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-success.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle:hover {\n  background-color: #4caf50;\n  color: #FFFFFF;\n}\n.btn.btn-success:focus, .btn.btn-success:active, .btn.btn-success:hover,\n.navbar .navbar-nav > li > a.btn.btn-success:focus,\n.navbar .navbar-nav > li > a.btn.btn-success:active,\n.navbar .navbar-nav > li > a.btn.btn-success:hover {\n  box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2);\n}\n.btn.btn-success.disabled, .btn.btn-success.disabled:hover, .btn.btn-success.disabled:focus, .btn.btn-success.disabled.focus, .btn.btn-success.disabled:active, .btn.btn-success.disabled.active, .btn.btn-success:disabled, .btn.btn-success:disabled:hover, .btn.btn-success:disabled:focus, .btn.btn-success:disabled.focus, .btn.btn-success:disabled:active, .btn.btn-success:disabled.active, .btn.btn-success[disabled], .btn.btn-success[disabled]:hover, .btn.btn-success[disabled]:focus, .btn.btn-success[disabled].focus, .btn.btn-success[disabled]:active, .btn.btn-success[disabled].active, fieldset[disabled] .btn.btn-success, fieldset[disabled] .btn.btn-success:hover, fieldset[disabled] .btn.btn-success:focus, fieldset[disabled] .btn.btn-success.focus, fieldset[disabled] .btn.btn-success:active, fieldset[disabled] .btn.btn-success.active,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-success.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-success:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled],\n.navbar .navbar-nav > li > a.btn.btn-success[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-success[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-success.active {\n  box-shadow: none;\n}\n.btn.btn-success.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple {\n  background-color: transparent;\n  color: #4caf50;\n  box-shadow: none;\n}\n.btn.btn-success.btn-simple:hover, .btn.btn-success.btn-simple:focus, .btn.btn-success.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-success.btn-simple:active {\n  background-color: transparent;\n  color: #4caf50;\n}\n.btn.btn-warning,\n.navbar .navbar-nav > li > a.btn.btn-warning {\n  box-shadow: 0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12);\n}\n.btn.btn-warning, .btn.btn-warning:hover, .btn.btn-warning:focus, .btn.btn-warning:active, .btn.btn-warning.active, .btn.btn-warning:active:focus, .btn.btn-warning:active:hover, .btn.btn-warning.active:focus, .btn.btn-warning.active:hover, .open > .btn.btn-warning.dropdown-toggle, .open > .btn.btn-warning.dropdown-toggle:focus, .open > .btn.btn-warning.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning,\n.navbar .navbar-nav > li > a.btn.btn-warning:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:active,\n.navbar .navbar-nav > li > a.btn.btn-warning.active,\n.navbar .navbar-nav > li > a.btn.btn-warning:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle:hover {\n  background-color: #ff9800;\n  color: #FFFFFF;\n}\n.btn.btn-warning:focus, .btn.btn-warning:active, .btn.btn-warning:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:active,\n.navbar .navbar-nav > li > a.btn.btn-warning:hover {\n  box-shadow: 0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2);\n}\n.btn.btn-warning.disabled, .btn.btn-warning.disabled:hover, .btn.btn-warning.disabled:focus, .btn.btn-warning.disabled.focus, .btn.btn-warning.disabled:active, .btn.btn-warning.disabled.active, .btn.btn-warning:disabled, .btn.btn-warning:disabled:hover, .btn.btn-warning:disabled:focus, .btn.btn-warning:disabled.focus, .btn.btn-warning:disabled:active, .btn.btn-warning:disabled.active, .btn.btn-warning[disabled], .btn.btn-warning[disabled]:hover, .btn.btn-warning[disabled]:focus, .btn.btn-warning[disabled].focus, .btn.btn-warning[disabled]:active, .btn.btn-warning[disabled].active, fieldset[disabled] .btn.btn-warning, fieldset[disabled] .btn.btn-warning:hover, fieldset[disabled] .btn.btn-warning:focus, fieldset[disabled] .btn.btn-warning.focus, fieldset[disabled] .btn.btn-warning:active, fieldset[disabled] .btn.btn-warning.active,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-warning.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-warning:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled],\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-warning[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-warning.active {\n  box-shadow: none;\n}\n.btn.btn-warning.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple {\n  background-color: transparent;\n  color: #ff9800;\n  box-shadow: none;\n}\n.btn.btn-warning.btn-simple:hover, .btn.btn-warning.btn-simple:focus, .btn.btn-warning.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:active {\n  background-color: transparent;\n  color: #ff9800;\n}\n.btn.btn-danger,\n.navbar .navbar-nav > li > a.btn.btn-danger {\n  box-shadow: 0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12);\n}\n.btn.btn-danger, .btn.btn-danger:hover, .btn.btn-danger:focus, .btn.btn-danger:active, .btn.btn-danger.active, .btn.btn-danger:active:focus, .btn.btn-danger:active:hover, .btn.btn-danger.active:focus, .btn.btn-danger.active:hover, .open > .btn.btn-danger.dropdown-toggle, .open > .btn.btn-danger.dropdown-toggle:focus, .open > .btn.btn-danger.dropdown-toggle:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger,\n.navbar .navbar-nav > li > a.btn.btn-danger:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:active,\n.navbar .navbar-nav > li > a.btn.btn-danger.active,\n.navbar .navbar-nav > li > a.btn.btn-danger:active:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:active:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger.active:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger.active:hover, .open >\n.navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle, .open >\n.navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle:focus, .open >\n.navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle:hover {\n  background-color: #f44336;\n  color: #FFFFFF;\n}\n.btn.btn-danger:focus, .btn.btn-danger:active, .btn.btn-danger:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:active,\n.navbar .navbar-nav > li > a.btn.btn-danger:hover {\n  box-shadow: 0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2);\n}\n.btn.btn-danger.disabled, .btn.btn-danger.disabled:hover, .btn.btn-danger.disabled:focus, .btn.btn-danger.disabled.focus, .btn.btn-danger.disabled:active, .btn.btn-danger.disabled.active, .btn.btn-danger:disabled, .btn.btn-danger:disabled:hover, .btn.btn-danger:disabled:focus, .btn.btn-danger:disabled.focus, .btn.btn-danger:disabled:active, .btn.btn-danger:disabled.active, .btn.btn-danger[disabled], .btn.btn-danger[disabled]:hover, .btn.btn-danger[disabled]:focus, .btn.btn-danger[disabled].focus, .btn.btn-danger[disabled]:active, .btn.btn-danger[disabled].active, fieldset[disabled] .btn.btn-danger, fieldset[disabled] .btn.btn-danger:hover, fieldset[disabled] .btn.btn-danger:focus, fieldset[disabled] .btn.btn-danger.focus, fieldset[disabled] .btn.btn-danger:active, fieldset[disabled] .btn.btn-danger.active,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-danger.disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled.focus,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled:active,\n.navbar .navbar-nav > li > a.btn.btn-danger:disabled.active,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled],\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled]:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled]:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled].focus,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled]:active,\n.navbar .navbar-nav > li > a.btn.btn-danger[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.btn-danger.active {\n  box-shadow: none;\n}\n.btn.btn-danger.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple {\n  background-color: transparent;\n  color: #f44336;\n  box-shadow: none;\n}\n.btn.btn-danger.btn-simple:hover, .btn.btn-danger.btn-simple:focus, .btn.btn-danger.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:active {\n  background-color: transparent;\n  color: #f44336;\n}\n.btn.btn-white, .btn.btn-white:focus, .btn.btn-white:hover,\n.navbar .navbar-nav > li > a.btn.btn-white,\n.navbar .navbar-nav > li > a.btn.btn-white:focus,\n.navbar .navbar-nav > li > a.btn.btn-white:hover {\n  background-color: #FFFFFF;\n  color: #999999;\n}\n.btn.btn-white.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-white.btn-simple {\n  color: #FFFFFF;\n  background: transparent;\n  box-shadow: none;\n}\n.btn.btn-facebook,\n.navbar .navbar-nav > li > a.btn.btn-facebook {\n  background-color: #3b5998;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12);\n}\n.btn.btn-facebook:focus, .btn.btn-facebook:active, .btn.btn-facebook:hover,\n.navbar .navbar-nav > li > a.btn.btn-facebook:focus,\n.navbar .navbar-nav > li > a.btn.btn-facebook:active,\n.navbar .navbar-nav > li > a.btn.btn-facebook:hover {\n  background-color: #3b5998;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2);\n}\n.btn.btn-facebook.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-facebook.btn-simple {\n  color: #3b5998;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn.btn-twitter,\n.navbar .navbar-nav > li > a.btn.btn-twitter {\n  background-color: #55acee;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12);\n}\n.btn.btn-twitter:focus, .btn.btn-twitter:active, .btn.btn-twitter:hover,\n.navbar .navbar-nav > li > a.btn.btn-twitter:focus,\n.navbar .navbar-nav > li > a.btn.btn-twitter:active,\n.navbar .navbar-nav > li > a.btn.btn-twitter:hover {\n  background-color: #55acee;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2);\n}\n.btn.btn-twitter.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-twitter.btn-simple {\n  color: #55acee;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn.btn-pinterest,\n.navbar .navbar-nav > li > a.btn.btn-pinterest {\n  background-color: #cc2127;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(204, 33, 39, 0.14), 0 3px 1px -2px rgba(204, 33, 39, 0.2), 0 1px 5px 0 rgba(204, 33, 39, 0.12);\n}\n.btn.btn-pinterest:focus, .btn.btn-pinterest:active, .btn.btn-pinterest:hover,\n.navbar .navbar-nav > li > a.btn.btn-pinterest:focus,\n.navbar .navbar-nav > li > a.btn.btn-pinterest:active,\n.navbar .navbar-nav > li > a.btn.btn-pinterest:hover {\n  background-color: #cc2127;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2);\n}\n.btn.btn-pinterest.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-pinterest.btn-simple {\n  color: #cc2127;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn.btn-google,\n.navbar .navbar-nav > li > a.btn.btn-google {\n  background-color: #dd4b39;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12);\n}\n.btn.btn-google:focus, .btn.btn-google:active, .btn.btn-google:hover,\n.navbar .navbar-nav > li > a.btn.btn-google:focus,\n.navbar .navbar-nav > li > a.btn.btn-google:active,\n.navbar .navbar-nav > li > a.btn.btn-google:hover {\n  background-color: #dd4b39;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2);\n}\n.btn.btn-google.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-google.btn-simple {\n  color: #dd4b39;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn.btn-instagram,\n.navbar .navbar-nav > li > a.btn.btn-instagram {\n  background-color: #125688;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(18, 86, 136, 0.14), 0 3px 1px -2px rgba(18, 86, 136, 0.2), 0 1px 5px 0 rgba(18, 86, 136, 0.12);\n}\n.btn.btn-instagram:focus, .btn.btn-instagram:active, .btn.btn-instagram:hover,\n.navbar .navbar-nav > li > a.btn.btn-instagram:focus,\n.navbar .navbar-nav > li > a.btn.btn-instagram:active,\n.navbar .navbar-nav > li > a.btn.btn-instagram:hover {\n  background-color: #125688;\n  color: #fff;\n  box-shadow: 0 14px 26px -12px rgba(18, 86, 136, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(18, 86, 136, 0.2);\n}\n.btn.btn-instagram.btn-simple,\n.navbar .navbar-nav > li > a.btn.btn-instagram.btn-simple {\n  color: #125688;\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn:focus, .btn:active, .btn:active:focus,\n.navbar .navbar-nav > li > a.btn:focus,\n.navbar .navbar-nav > li > a.btn:active,\n.navbar .navbar-nav > li > a.btn:active:focus {\n  outline: 0;\n}\n.btn.btn-round,\n.navbar .navbar-nav > li > a.btn.btn-round {\n  border-radius: 30px;\n}\n.btn:not(.btn-just-icon):not(.btn-fab) .fa,\n.navbar .navbar-nav > li > a.btn:not(.btn-just-icon):not(.btn-fab) .fa {\n  font-size: 18px;\n  margin-top: -2px;\n  position: relative;\n  top: 2px;\n}\n.btn.btn-fab,\n.navbar .navbar-nav > li > a.btn.btn-fab {\n  border-radius: 50%;\n  font-size: 24px;\n  height: 56px;\n  margin: auto;\n  min-width: 56px;\n  width: 56px;\n  padding: 0;\n  overflow: hidden;\n  position: relative;\n  line-height: normal;\n}\n.btn.btn-fab .ripple-container,\n.navbar .navbar-nav > li > a.btn.btn-fab .ripple-container {\n  border-radius: 50%;\n}\n.btn.btn-fab.btn-fab-mini, .btn-group-sm .btn.btn-fab,\n.navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini, .btn-group-sm\n.navbar .navbar-nav > li > a.btn.btn-fab {\n  height: 40px;\n  min-width: 40px;\n  width: 40px;\n}\n.btn.btn-fab.btn-fab-mini.material-icons, .btn-group-sm .btn.btn-fab.material-icons,\n.navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini.material-icons, .btn-group-sm\n.navbar .navbar-nav > li > a.btn.btn-fab.material-icons {\n  top: -3.5px;\n  left: -3.5px;\n}\n.btn.btn-fab.btn-fab-mini .material-icons, .btn-group-sm .btn.btn-fab .material-icons,\n.navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini .material-icons, .btn-group-sm\n.navbar .navbar-nav > li > a.btn.btn-fab .material-icons {\n  font-size: 17px;\n}\n.btn.btn-fab i.material-icons,\n.navbar .navbar-nav > li > a.btn.btn-fab i.material-icons {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-12px, -12px);\n          transform: translate(-12px, -12px);\n  line-height: 24px;\n  width: 24px;\n  font-size: 24px;\n}\n.btn.btn-lg, .btn-group-lg .btn,\n.navbar .navbar-nav > li > a.btn.btn-lg, .btn-group-lg\n.navbar .navbar-nav > li > a.btn {\n  font-size: 14px;\n  padding: 18px 36px;\n}\n.btn.btn-sm, .btn-group-sm .btn,\n.navbar .navbar-nav > li > a.btn.btn-sm, .btn-group-sm\n.navbar .navbar-nav > li > a.btn {\n  padding: 5px 20px;\n  font-size: 11px;\n}\n.btn.btn-xs, .btn-group-xs .btn,\n.navbar .navbar-nav > li > a.btn.btn-xs, .btn-group-xs\n.navbar .navbar-nav > li > a.btn {\n  padding: 4px 15px;\n  font-size: 10px;\n}\n.btn.btn-just-icon,\n.navbar .navbar-nav > li > a.btn.btn-just-icon {\n  font-size: 20px;\n  padding: 12px 12px;\n  line-height: 1em;\n}\n.btn.btn-just-icon i,\n.navbar .navbar-nav > li > a.btn.btn-just-icon i {\n  width: 20px;\n}\n.btn.btn-just-icon.btn-lg,\n.navbar .navbar-nav > li > a.btn.btn-just-icon.btn-lg {\n  font-size: 22px;\n  padding: 13px 18px;\n}\n\n.btn .material-icons {\n  vertical-align: middle;\n  font-size: 17px;\n  top: -1px;\n  position: relative;\n}\n\n.navbar .navbar-nav > li > a.btn {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.navbar .navbar-nav > li > a.btn.btn-fab {\n  margin: 5px 2px;\n}\n.navbar .navbar-nav > li > a:not(.btn) .material-icons {\n  margin-top: -3px;\n  top: 0px;\n  position: relative;\n  margin-right: 3px;\n}\n.navbar .navbar-nav > li > .profile-photo {\n  margin: 5px 2px;\n}\n\n.navbar-default:not(.navbar-transparent) .navbar-nav > li > a.btn.btn-white.btn-simple {\n  color: #555555;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  margin: 10px 1px;\n}\n.btn-group.open > .dropdown-toggle.btn, .btn-group.open > .dropdown-toggle.btn.btn-default,\n.btn-group-vertical.open > .dropdown-toggle.btn,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-default {\n  background-color: #FFFFFF;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-inverse,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-inverse {\n  background-color: #212121;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-primary,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-primary {\n  background-color: #9c27b0;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-success,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-success {\n  background-color: #4caf50;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-info,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-info {\n  background-color: #00bcd4;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-warning,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-warning {\n  background-color: #ff9800;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-danger,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-danger {\n  background-color: #f44336;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-rose,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-rose {\n  background-color: #e91e63;\n}\n.btn-group .dropdown-menu,\n.btn-group-vertical .dropdown-menu {\n  border-radius: 0 0 3px 3px;\n}\n.btn-group.btn-group-raised,\n.btn-group-vertical.btn-group-raised {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.btn-group .btn + .btn,\n.btn-group .btn,\n.btn-group .btn:active,\n.btn-group .btn-group,\n.btn-group-vertical .btn + .btn,\n.btn-group-vertical .btn,\n.btn-group-vertical .btn:active,\n.btn-group-vertical .btn-group {\n  margin: 0;\n}\n\n.close {\n  font-size: inherit;\n  color: #FFFFFF;\n  opacity: .9;\n  text-shadow: none;\n}\n.close:hover, .close:focus {\n  opacity: 1;\n  color: #FFFFFF;\n}\n.close i {\n  font-size: 20px;\n}\n\nbody {\n  background-color: #EEEEEE;\n  color: #3C4858;\n}\nbody.inverse {\n  background: #333333;\n}\nbody.inverse, body.inverse .form-control {\n  color: #ffffff;\n}\nbody.inverse .modal,\nbody.inverse .modal .form-control,\nbody.inverse .panel-default,\nbody.inverse .panel-default .form-control,\nbody.inverse .card,\nbody.inverse .card .form-control {\n  background-color: initial;\n  color: initial;\n}\n\n.wrapper.wrapper-full-page {\n  height: auto;\n  min-height: 100vh;\n}\n\nblockquote p {\n  font-style: italic;\n}\n\n.life-of-material-dashboard {\n  background: #FFFFFF;\n}\n\nbody, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 300;\n  line-height: 1.5em;\n}\n\n.serif-font {\n  font-family: \"Roboto Slab\", \"Times New Roman\", serif;\n}\n\n.page-header {\n  height: 60vh;\n  background-position: center center;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\na {\n  color: #9c27b0;\n}\na:hover, a:focus {\n  color: #89229b;\n  text-decoration: none;\n}\na.text-info:hover, a.text-info:focus {\n  color: #00a5bb;\n}\na .material-icons {\n  vertical-align: middle;\n}\n\n/*           Animations              */\n.animation-transition-general, .sidebar .nav li > a,\n.off-canvas-sidebar .nav li > a {\n  transition: all 300ms linear;\n}\n\n.animation-transition-slow {\n  transition: all 370ms linear;\n}\n\n.animation-transition-fast, .navbar {\n  transition: all 150ms ease 0s;\n}\n\nlegend {\n  border-bottom: 0;\n}\n\n* {\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  -webkit-tap-highlight-color: transparent;\n}\n*:focus {\n  outline: 0;\n}\n\na:focus, a:active,\nbutton:active, button:focus, button:hover,\nbutton::-moz-focus-inner,\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\nselect::-moz-focus-inner,\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\n  outline: 0 !important;\n}\n\nlegend {\n  margin-bottom: 20px;\n  font-size: 21px;\n}\n\noutput {\n  padding-top: 8px;\n  font-size: 14px;\n  line-height: 1.42857;\n}\n\n.form-control {\n  height: 36px;\n  padding: 7px 0;\n  font-size: 14px;\n  line-height: 1.42857;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 36px;\n  }\n  input[type=\"date\"].input-sm, .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm, .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm, .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm, .input-group-sm\n  input[type=\"month\"] {\n    line-height: 24px;\n  }\n  input[type=\"date\"].input-lg, .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg, .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg, .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg, .input-group-lg\n  input[type=\"month\"] {\n    line-height: 44px;\n  }\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n}\n\n.form-control-static {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  min-height: 34px;\n}\n\n.input-sm .input-sm {\n  height: 24px;\n  padding: 3px 0;\n  font-size: 11px;\n  line-height: 1.5;\n  border-radius: 0;\n}\n.input-sm select.input-sm {\n  height: 24px;\n  line-height: 24px;\n}\n.input-sm textarea.input-sm,\n.input-sm select[multiple].input-sm {\n  height: auto;\n}\n\n.form-group-sm .form-control {\n  height: 24px;\n  padding: 3px 0;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.form-group-sm select.form-control {\n  height: 24px;\n  line-height: 24px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 24px;\n  min-height: 31px;\n  padding: 4px 0;\n  font-size: 11px;\n  line-height: 1.5;\n}\n\n.input-lg .input-lg {\n  height: 44px;\n  padding: 9px 0;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 0;\n}\n.input-lg select.input-lg {\n  height: 44px;\n  line-height: 44px;\n}\n.input-lg textarea.input-lg,\n.input-lg select[multiple].input-lg {\n  height: auto;\n}\n\n.form-group-lg .form-control {\n  height: 44px;\n  padding: 9px 0;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n.form-group-lg select.form-control {\n  height: 44px;\n  line-height: 44px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 44px;\n  min-height: 38px;\n  padding: 10px 0;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 8px;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 28px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 8px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 13.0px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 4px;\n    font-size: 11px;\n  }\n}\n\n.label {\n  border-radius: 2px;\n}\n.label, .label.label-default {\n  background-color: #FFFFFF;\n}\n.label.label-inverse {\n  background-color: #212121;\n}\n.label.label-primary {\n  background-color: #9c27b0;\n}\n.label.label-success {\n  background-color: #4caf50;\n}\n.label.label-info {\n  background-color: #00bcd4;\n}\n.label.label-warning {\n  background-color: #ff9800;\n}\n.label.label-danger {\n  background-color: #f44336;\n}\n.label.label-rose {\n  background-color: #e91e63;\n}\n\n.form-control,\n.form-group .form-control {\n  border: 0;\n  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: transparent;\n  transition: background 0s ease-out;\n  float: none;\n  box-shadow: none;\n  border-radius: 0;\n  font-weight: 400;\n}\n.form-control::-moz-placeholder,\n.form-group .form-control::-moz-placeholder {\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder,\n.form-group .form-control:-ms-input-placeholder {\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder,\n.form-group .form-control::-webkit-input-placeholder {\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control[readonly], .form-control[disabled], fieldset[disabled] .form-control,\n.form-group .form-control[readonly],\n.form-group .form-control[disabled], fieldset[disabled]\n.form-group .form-control {\n  background-color: transparent;\n}\n.form-control[disabled], fieldset[disabled] .form-control,\n.form-group .form-control[disabled], fieldset[disabled]\n.form-group .form-control {\n  background-image: none;\n  border-bottom: 1px dotted #D2D2D2;\n}\n\n.form-group {\n  position: relative;\n}\n.form-group.label-static label.control-label, .form-group.label-placeholder label.control-label, .form-group.label-floating label.control-label {\n  position: absolute;\n  pointer-events: none;\n  transition: 0.3s ease all;\n}\n.form-group.label-floating label.control-label {\n  will-change: left, top, contents;\n}\n.form-group.label-placeholder:not(.is-empty) label.control-label {\n  display: none;\n}\n.form-group .help-block {\n  position: absolute;\n  display: none;\n}\n.form-group.is-focused .form-control {\n  outline: none;\n  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 100% 2px, 100% 1px;\n  box-shadow: none;\n  transition-duration: 0.3s;\n}\n.form-group.is-focused .form-control .material-input:after {\n  background-color: #9c27b0;\n}\n.form-group.is-focused.form-info .form-control {\n  background-image: linear-gradient(#00bcd4, #00bcd4), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-success .form-control {\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-warning .form-control {\n  background-image: linear-gradient(#ff9800, #ff9800), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-danger .form-control {\n  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-rose .form-control {\n  background-image: linear-gradient(#e91e63, #e91e63), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.form-white .form-control {\n  background-image: linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.is-focused.label-placeholder label,\n.form-group.is-focused.label-placeholder label.control-label {\n  color: #AAAAAA;\n}\n.form-group.is-focused .help-block {\n  display: block;\n}\n.form-group.has-warning .form-control {\n  box-shadow: none;\n}\n.form-group.has-warning.is-focused .form-control {\n  background-image: linear-gradient(#ff9800, #ff9800), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-warning label.control-label,\n.form-group.has-warning .help-block {\n  color: #ff9800;\n}\n.form-group.has-error .form-control {\n  box-shadow: none;\n}\n.form-group.has-error.is-focused .form-control {\n  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-error label.control-label,\n.form-group.has-error .help-block {\n  color: #f44336;\n}\n.form-group.has-success .form-control {\n  box-shadow: none;\n}\n.form-group.has-success.is-focused .form-control {\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-success label.control-label,\n.form-group.has-success .help-block {\n  color: #4caf50;\n}\n.form-group.has-info .form-control {\n  box-shadow: none;\n}\n.form-group.has-info.is-focused .form-control {\n  background-image: linear-gradient(#00bcd4, #00bcd4), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-info label.control-label,\n.form-group.has-info .help-block {\n  color: #00bcd4;\n}\n.form-group textarea {\n  resize: none;\n}\n.form-group textarea ~ .form-control-highlight {\n  margin-top: -11px;\n}\n.form-group select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.form-group select ~ .material-input:after {\n  display: none;\n}\n\n.form-control {\n  margin-bottom: 7px;\n}\n.form-control::-moz-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n\n.checkbox label,\n.radio label,\nlabel {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n\nlabel.control-label {\n  font-size: 11px;\n  line-height: 1.07143;\n  color: #AAAAAA;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n\n.help-block {\n  margin-top: 0;\n  font-size: 11px;\n}\n\n.form-group {\n  padding-bottom: 7px;\n  margin: 27px 0 0 0;\n}\n.form-group .form-control {\n  margin-bottom: 7px;\n}\n.form-group .form-control::-moz-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group .form-control:-ms-input-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group .form-control::-webkit-input-placeholder {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group .checkbox label,\n.form-group .radio label,\n.form-group label {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group label.control-label {\n  font-size: 11px;\n  line-height: 1.07143;\n  color: #AAAAAA;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group .help-block {\n  margin-top: 0;\n  font-size: 11px;\n}\n.form-group.label-floating label.control-label, .form-group.label-placeholder label.control-label {\n  top: -7px;\n  font-size: 14px;\n  line-height: 1.42857;\n}\n.form-group.label-static label.control-label, .form-group.label-floating.is-focused label.control-label, .form-group.label-floating:not(.is-empty) label.control-label {\n  top: -28px;\n  left: 0;\n  font-size: 11px;\n  line-height: 1.07143;\n}\n.form-group.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -28px;\n  left: 0;\n  font-size: 11px;\n  line-height: 1.07143;\n}\n\n.form-group.form-group-sm {\n  padding-bottom: 3px;\n  margin: 21px 0 0 0;\n}\n.form-group.form-group-sm .form-control {\n  margin-bottom: 3px;\n}\n.form-group.form-group-sm .form-control::-moz-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control:-ms-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control::-webkit-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-sm .checkbox label,\n.form-group.form-group-sm .radio label,\n.form-group.form-group-sm label {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-sm label.control-label {\n  font-size: 9px;\n  line-height: 1.125;\n  color: #AAAAAA;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-sm .help-block {\n  margin-top: 0;\n  font-size: 9px;\n}\n.form-group.form-group-sm.label-floating label.control-label, .form-group.form-group-sm.label-placeholder label.control-label {\n  top: -11px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.form-group.form-group-sm.label-static label.control-label, .form-group.form-group-sm.label-floating.is-focused label.control-label, .form-group.form-group-sm.label-floating:not(.is-empty) label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n.form-group.form-group-sm.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n\n.form-group.form-group-lg {\n  padding-bottom: 9px;\n  margin: 30px 0 0 0;\n}\n.form-group.form-group-lg .form-control {\n  margin-bottom: 9px;\n}\n.form-group.form-group-lg .form-control::-moz-placeholder {\n  font-size: 18px;\n  line-height: 1.33333;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control:-ms-input-placeholder {\n  font-size: 18px;\n  line-height: 1.33333;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control::-webkit-input-placeholder {\n  font-size: 18px;\n  line-height: 1.33333;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-lg .checkbox label,\n.form-group.form-group-lg .radio label,\n.form-group.form-group-lg label {\n  font-size: 18px;\n  line-height: 1.33333;\n  color: #AAAAAA;\n  font-weight: 400;\n}\n.form-group.form-group-lg label.control-label {\n  font-size: 14px;\n  line-height: 1.0;\n  color: #AAAAAA;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-lg .help-block {\n  margin-top: 0;\n  font-size: 14px;\n}\n.form-group.form-group-lg.label-floating label.control-label, .form-group.form-group-lg.label-placeholder label.control-label {\n  top: -5px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n.form-group.form-group-lg.label-static label.control-label, .form-group.form-group-lg.label-floating.is-focused label.control-label, .form-group.form-group-lg.label-floating:not(.is-empty) label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 1.0;\n}\n.form-group.form-group-lg.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 1.0;\n}\n\nselect.form-control {\n  border: 0;\n  box-shadow: none;\n  border-radius: 0;\n}\n.form-group.is-focused select.form-control {\n  box-shadow: none;\n  border-color: #D2D2D2;\n}\nselect.form-control[multiple], .form-group.is-focused select.form-control[multiple] {\n  height: 85px;\n}\n\n.input-group-btn .btn {\n  margin: 0 0 7px 0;\n}\n\n.form-group.form-group-sm .input-group-btn .btn {\n  margin: 0 0 3px 0;\n}\n.form-group.form-group-lg .input-group-btn .btn {\n  margin: 0 0 9px 0;\n}\n\n.input-group .input-group-btn {\n  padding: 0 12px;\n}\n.input-group .input-group-addon {\n  border: 0;\n  background: transparent;\n  padding: 6px 15px 0px;\n}\n\n.form-group input[type=file] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n\n.form-control-feedback {\n  opacity: 0;\n}\n.has-success .form-control-feedback {\n  color: #4caf50;\n  opacity: 1;\n}\n.has-error .form-control-feedback {\n  color: #f44336;\n  opacity: 1;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 0;\n}\n.form-horizontal .radio {\n  margin-bottom: 10px;\n}\n.form-horizontal label {\n  text-align: right;\n}\n.form-horizontal label.control-label {\n  margin: 0;\n}\n\n.form-newsletter .input-group,\n.form-newsletter .form-group {\n  float: left;\n  width: 78%;\n  margin-right: 2%;\n  margin-top: 9px;\n}\n.form-newsletter .btn {\n  float: left;\n  width: 20%;\n  margin: 9px 0 0;\n}\n\n.alert {\n  border: 0;\n  border-radius: 0;\n  position: relative;\n  padding: 20px 15px;\n  line-height: 20px;\n}\n.alert b {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.alert, .alert.alert-default {\n  background-color: white;\n  color: #555555;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2);\n}\n.alert a, .alert .alert-link, .alert.alert-default a, .alert.alert-default .alert-link {\n  color: #555555;\n}\n.alert.alert-inverse {\n  background-color: #2e2e2e;\n  color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2);\n}\n.alert.alert-inverse a, .alert.alert-inverse .alert-link {\n  color: #fff;\n}\n.alert.alert-primary {\n  background-color: #af2cc5;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.alert.alert-primary a, .alert.alert-primary .alert-link {\n  color: #ffffff;\n}\n.alert.alert-success {\n  background-color: #5cb860;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.alert.alert-success a, .alert.alert-success .alert-link {\n  color: #ffffff;\n}\n.alert.alert-info {\n  background-color: #00d3ee;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.alert.alert-info a, .alert.alert-info .alert-link {\n  color: #ffffff;\n}\n.alert.alert-warning {\n  background-color: #ffa21a;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.alert.alert-warning a, .alert.alert-warning .alert-link {\n  color: #ffffff;\n}\n.alert.alert-danger {\n  background-color: #f55a4e;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.alert.alert-danger a, .alert.alert-danger .alert-link {\n  color: #ffffff;\n}\n.alert.alert-rose {\n  background-color: #eb3573;\n  color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);\n}\n.alert.alert-rose a, .alert.alert-rose .alert-link {\n  color: #ffffff;\n}\n.alert-info, .alert-danger, .alert-warning, .alert-success {\n  color: #ffffff;\n}\n.alert-default a, .alert-default .alert-link {\n  color: rgba(0,0,0, 0.87);\n}\n.alert i[data-notify=\"icon\"] {\n  font-size: 30px;\n  display: block;\n  left: 15px;\n  position: absolute;\n  top: 50%;\n  margin-top: -15px;\n}\n.alert span {\n  display: block;\n  max-width: 89%;\n}\n.alert .alert-icon {\n  display: block;\n  float: left;\n  margin-right: 15px;\n}\n.alert .alert-icon i {\n  margin-top: -7px;\n  top: 5px;\n  position: relative;\n}\n\n.alert.alert-with-icon {\n  padding-left: 65px;\n}\n\n.table > thead > tr > th {\n  border-bottom-width: 1px;\n  font-size: 1em;\n  font-weight: 300;\n}\n.table .radio,\n.table .checkbox {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 10px;\n  padding: 0;\n  width: 15px;\n}\n.table .radio .icons,\n.table .checkbox .icons {\n  position: relative;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 12px 8px;\n  vertical-align: middle;\n}\n.table > thead > tr > th {\n  padding-bottom: 4px;\n}\n.table .td-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.table .td-actions .btn {\n  margin: 0px;\n  padding: 5px;\n}\n.table > tbody > tr {\n  position: relative;\n}\n\n.checkbox label {\n  cursor: pointer;\n  padding-left: 0;\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .checkbox label {\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .checkbox label:hover, .form-group.is-focused .checkbox label:focus {\n  color: rgba(0,0,0, .54);\n}\nfieldset[disabled] .form-group.is-focused .checkbox label {\n  color: rgba(0,0,0, 0.26);\n}\n.checkbox input[type=checkbox] {\n  opacity: 0;\n  position: absolute;\n  margin: 0;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  left: 0;\n  pointer-events: none;\n}\n.checkbox .checkbox-material {\n  vertical-align: middle;\n  position: relative;\n  top: 3px;\n  padding-right: 5px;\n}\n.checkbox .checkbox-material:before {\n  display: block;\n  position: absolute;\n  left: 0;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.84);\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  z-index: 1;\n  opacity: 0;\n  margin: 0;\n  -webkit-transform: scale3d(2.3, 2.3, 1);\n          transform: scale3d(2.3, 2.3, 1);\n}\n.checkbox .checkbox-material .check {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 1px solid rgba(0,0,0, .54);\n  overflow: hidden;\n  z-index: 1;\n  border-radius: 3px;\n}\n.checkbox .checkbox-material .check:before {\n  position: absolute;\n  content: \"\";\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  display: block;\n  margin-top: -3px;\n  margin-left: 7px;\n  width: 0;\n  height: 0;\n  background: red;\n  box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0 inset;\n  -webkit-animation: checkbox-off 0.3s forwards;\n          animation: checkbox-off 0.3s forwards;\n}\n.checkbox input[type=checkbox]:focus + .checkbox-material .check:after {\n  opacity: 0.2;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material .check {\n  background: #9c27b0;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material .check:before {\n  color: #FFFFFF;\n  box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n  -webkit-animation: checkbox-on 0.3s forwards;\n          animation: checkbox-on 0.3s forwards;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material:before {\n  -webkit-animation: rippleOn 500ms;\n          animation: rippleOn 500ms;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material .check:after {\n  -webkit-animation: rippleOn 500ms forwards;\n          animation: rippleOn 500ms forwards;\n}\n.checkbox input[type=checkbox]:not(:checked) + .checkbox-material:before {\n  -webkit-animation: rippleOff 500ms;\n          animation: rippleOff 500ms;\n}\n.checkbox input[type=checkbox]:not(:checked) + .checkbox-material .check:after {\n  -webkit-animation: rippleOff 500ms;\n          animation: rippleOff 500ms;\n}\nfieldset[disabled] .checkbox, fieldset[disabled] .checkbox input[type=checkbox],\n.checkbox input[type=checkbox][disabled] ~ .checkbox-material .check,\n.checkbox input[type=checkbox][disabled] + .circle {\n  opacity: 0.5;\n}\n.checkbox input[type=checkbox][disabled] ~ .checkbox-material .check {\n  border-color: #000000;\n  opacity: .26;\n}\n.checkbox input[type=checkbox][disabled] + .checkbox-material .check:after {\n  background-color: rgba(0,0,0, 0.87);\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n@-webkit-keyframes checkbox-on {\n  0% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;\n  }\n  50% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;\n  }\n  100% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n  }\n}\n\n@keyframes checkbox-on {\n  0% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;\n  }\n  50% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;\n  }\n  100% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n  }\n}\n@-webkit-keyframes rippleOn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rippleOn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes rippleOff {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rippleOff {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.radio label {\n  cursor: pointer;\n  padding-left: 35px;\n  position: relative;\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .radio label {\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .radio label:hover, .form-group.is-focused .radio label:focus {\n  color: rgba(0,0,0, .54);\n}\nfieldset[disabled] .form-group.is-focused .radio label {\n  color: rgba(0,0,0, 0.26);\n}\n.radio label span {\n  display: block;\n  position: absolute;\n  left: 10px;\n  top: 2px;\n  transition-duration: 0.2s;\n}\n.radio label .circle {\n  border: 1px solid rgba(0,0,0, .54);\n  height: 15px;\n  width: 15px;\n  border-radius: 100%;\n}\n.radio label .check {\n  height: 15px;\n  width: 15px;\n  border-radius: 100%;\n  background-color: #9c27b0;\n  -webkit-transform: scale3d(0, 0, 0);\n          transform: scale3d(0, 0, 0);\n}\n.radio label .check:after {\n  display: block;\n  position: absolute;\n  content: \"\";\n  background-color: rgba(0,0,0, 0.87);\n  left: -18px;\n  top: -18px;\n  height: 50px;\n  width: 50px;\n  border-radius: 100%;\n  z-index: 1;\n  opacity: 0;\n  margin: 0;\n  -webkit-transform: scale3d(1.5, 1.5, 1);\n          transform: scale3d(1.5, 1.5, 1);\n}\n.radio label input[type=radio]:not(:checked) ~ .check:after {\n  -webkit-animation: rippleOff 500ms;\n          animation: rippleOff 500ms;\n}\n.radio label input[type=radio]:checked ~ .check:after {\n  -webkit-animation: rippleOn 500ms;\n          animation: rippleOn 500ms;\n}\n.radio input[type=radio] {\n  opacity: 0;\n  height: 0;\n  width: 0;\n  overflow: hidden;\n}\n.radio input[type=radio]:checked ~ .check, .radio input[type=radio]:checked ~ .circle {\n  opacity: 1;\n}\n.radio input[type=radio]:checked ~ .check {\n  background-color: #9c27b0;\n}\n.radio input[type=radio]:checked ~ .circle {\n  border-color: #9c27b0;\n}\n.radio input[type=radio]:checked ~ .check {\n  -webkit-transform: scale3d(0.65, 0.65, 1);\n          transform: scale3d(0.65, 0.65, 1);\n}\n.radio input[type=radio][disabled] ~ .check, .radio input[type=radio][disabled] ~ .circle {\n  opacity: 0.26;\n}\n.radio input[type=radio][disabled] ~ .check {\n  background-color: #000000;\n}\n.radio input[type=radio][disabled] ~ .circle {\n  border-color: #000000;\n}\n\n@keyframes rippleOn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rippleOff {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.togglebutton {\n  vertical-align: middle;\n}\n.togglebutton, .togglebutton label, .togglebutton input, .togglebutton .toggle {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.togglebutton label {\n  cursor: pointer;\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .togglebutton label {\n  color: rgba(0,0,0, 0.26);\n}\n.form-group.is-focused .togglebutton label:hover, .form-group.is-focused .togglebutton label:focus {\n  color: rgba(0,0,0, .54);\n}\nfieldset[disabled] .form-group.is-focused .togglebutton label {\n  color: rgba(0,0,0, 0.26);\n}\n.togglebutton label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.togglebutton label .toggle {\n  text-align: left;\n  margin-left: 5px;\n}\n.togglebutton label .toggle,\n.togglebutton label input[type=checkbox][disabled] + .toggle {\n  content: \"\";\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n  background-color: rgba(80, 80, 80, 0.7);\n  border-radius: 15px;\n  margin-right: 15px;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n}\n.togglebutton label .toggle:after {\n  content: \"\";\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-color: #FFFFFF;\n  border-radius: 20px;\n  position: relative;\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\n  left: -5px;\n  top: -3px;\n  border: 1px solid rgba(0,0,0, .54);\n  transition: left 0.3s ease, background 0.3s ease, box-shadow 0.1s ease;\n}\n.togglebutton label input[type=checkbox][disabled] + .toggle:after, .togglebutton label input[type=checkbox][disabled]:checked + .toggle:after {\n  background-color: #BDBDBD;\n}\n.togglebutton label input[type=checkbox] + .toggle:active:after, .togglebutton label input[type=checkbox][disabled] + .toggle:active:after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.1);\n}\n.togglebutton label input[type=checkbox]:checked + .toggle:after {\n  left: 15px;\n}\n.togglebutton label input[type=checkbox]:checked + .toggle {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n.togglebutton label input[type=checkbox]:checked + .toggle:after {\n  border-color: #9c27b0;\n}\n.togglebutton label input[type=checkbox]:checked + .toggle:active:after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(156, 39, 176, 0.1);\n}\n\n.withripple {\n  position: relative;\n}\n\n.ripple-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  border-radius: inherit;\n  pointer-events: none;\n}\n.disabled .ripple-container {\n  display: none;\n}\n\n.ripple {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  margin-left: -10px;\n  margin-top: -10px;\n  border-radius: 100%;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.05);\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.ripple.ripple-on {\n  transition: opacity 0.15s ease-in 0s, -webkit-transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  transition: opacity 0.15s ease-in 0s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  transition: opacity 0.15s ease-in 0s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, -webkit-transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  opacity: 0.1;\n}\n\n.ripple.ripple-out {\n  transition: opacity 0.1s linear 0s !important;\n  opacity: 0;\n}\n\n.section-dark .nav-pills > li > a, .section-image .nav-pills > li > a {\n  color: #999999;\n}\n.section-dark .nav-pills > li > a:hover,\n.section-dark .nav-pills > li > a:focus, .section-image .nav-pills > li > a:hover,\n.section-image .nav-pills > li > a:focus {\n  background-color: #EEEEEE;\n}\n.nav-pills > li > a {\n  line-height: 24px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  min-width: 100px;\n  text-align: center;\n  color: #555555;\n  transition: all .3s;\n}\n.nav-pills > li > a:hover {\n  background-color: rgba(200, 200, 200, 0.2);\n}\n.nav-pills > li i {\n  display: block;\n  font-size: 30px;\n  padding: 15px 0;\n}\n.nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover {\n  background-color: #9c27b0;\n  color: #FFFFFF;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.nav-pills:not(.nav-pills-icons) > li > a {\n  border-radius: 30px;\n}\n.nav-pills.nav-stacked > li + li {\n  margin-top: 5px;\n}\n.nav-pills.nav-pills-info > li.active > a, .nav-pills.nav-pills-info > li.active > a:focus, .nav-pills.nav-pills-info > li.active > a:hover {\n  background-color: #00bcd4;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.nav-pills.nav-pills-success > li.active > a, .nav-pills.nav-pills-success > li.active > a:focus, .nav-pills.nav-pills-success > li.active > a:hover {\n  background-color: #4caf50;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.nav-pills.nav-pills-warning > li.active > a, .nav-pills.nav-pills-warning > li.active > a:focus, .nav-pills.nav-pills-warning > li.active > a:hover {\n  background-color: #ff9800;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.nav-pills.nav-pills-danger > li.active > a, .nav-pills.nav-pills-danger > li.active > a:focus, .nav-pills.nav-pills-danger > li.active > a:hover {\n  background-color: #f44336;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n\n.tab-space {\n  padding: 20px 0 50px 0px;\n}\n\n.modal-content {\n  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);\n  border-radius: 6px;\n  border: none;\n}\n.modal-content .modal-header {\n  border-bottom: none;\n  padding-top: 24px;\n  padding-right: 24px;\n  padding-bottom: 0;\n  padding-left: 24px;\n}\n.modal-content .modal-body {\n  padding-top: 24px;\n  padding-right: 24px;\n  padding-bottom: 16px;\n  padding-left: 24px;\n}\n.modal-content .modal-footer {\n  border-top: none;\n  padding: 7px;\n}\n.modal-content .modal-footer.text-center {\n  text-align: center;\n}\n.modal-content .modal-footer button {\n  margin: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: auto;\n}\n.modal-content .modal-footer button.pull-left {\n  padding-left: 5px;\n  padding-right: 5px;\n  position: relative;\n  left: -5px;\n}\n.modal-content .modal-footer button + button {\n  margin-bottom: 16px;\n}\n.modal-content .modal-body + .modal-footer {\n  padding-top: 0;\n}\n\n.modal-backdrop {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.modal .modal-dialog {\n  margin-top: 100px;\n}\n.modal .modal-header .close {\n  color: #999999;\n}\n.modal .modal-header .close:hover, .modal .modal-header .close:focus {\n  opacity: 1;\n}\n.modal .modal-header .close i {\n  font-size: 16px;\n}\n\n.modal-notice .instruction {\n  margin-bottom: 25px;\n}\n.modal-notice .picture {\n  max-width: 150px;\n}\n.modal-notice .modal-content .btn-raised {\n  margin-bottom: 15px;\n}\n\n.modal-small {\n  width: 300px;\n}\n.modal-small .modal-body {\n  margin-top: 20px;\n}\n\n.navbar {\n  border: 0;\n  border-radius: 3px;\n  border-bottom: 1px solid #ededf3;\n  padding: 10px 0;\n}\n.navbar .navbar-brand {\n  position: relative;\n  height: 50px;\n  line-height: 30px;\n  color: inherit;\n  padding: 10px 15px;\n}\n.navbar .navbar-brand:hover, .navbar .navbar-brand:focus {\n  color: inherit;\n  background-color: transparent;\n}\n.navbar .notification {\n  position: absolute;\n  top: 5px;\n  border: 1px solid #FFF;\n  right: 10px;\n  font-size: 9px;\n  background: #f44336;\n  color: #FFFFFF;\n  min-width: 20px;\n  padding: 0px 5px;\n  height: 20px;\n  border-radius: 10px;\n  text-align: center;\n  line-height: 19px;\n  vertical-align: middle;\n  display: block;\n}\n.navbar .navbar-text {\n  color: inherit;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.navbar .navbar-nav > li > a {\n  color: inherit;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-weight: 400;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n.navbar .navbar-nav > li > a:hover, .navbar .navbar-nav > li > a:focus {\n  color: inherit;\n  background-color: transparent;\n}\n.navbar .navbar-nav > li > a .material-icons,\n.navbar .navbar-nav > li > a .fa {\n  font-size: 20px;\n}\n.navbar .navbar-nav > li > a.btn:not(.btn-just-icon) .fa {\n  position: relative;\n  top: 2px;\n  margin-top: -4px;\n  margin-right: 4px;\n}\n.navbar .navbar-nav > li > .dropdown-menu {\n  margin-top: -20px;\n}\n.navbar .navbar-nav > li.open > .dropdown-menu {\n  margin-top: 0;\n}\n.navbar .navbar-nav > .active > a, .navbar .navbar-nav > .active > a:hover, .navbar .navbar-nav > .active > a:focus {\n  color: inherit;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.navbar .navbar-nav > .disabled > a, .navbar .navbar-nav > .disabled > a:hover, .navbar .navbar-nav > .disabled > a:focus {\n  color: inherit;\n  background-color: transparent;\n  opacity: 0.9;\n}\n.navbar .navbar-nav .profile-photo {\n  padding: 0 5px 0;\n}\n.navbar .navbar-nav .profile-photo .profile-photo-small {\n  height: 40px;\n  width: 40px;\n}\n.navbar .navbar-toggle {\n  border: 0;\n}\n.navbar .navbar-toggle:hover, .navbar .navbar-toggle:focus {\n  background-color: transparent;\n}\n.navbar .navbar-toggle .icon-bar {\n  background-color: inherit;\n  border: 1px solid;\n}\n.navbar .navbar-default .navbar-toggle,\n.navbar .navbar-inverse .navbar-toggle {\n  border-color: transparent;\n}\n.navbar .navbar-collapse,\n.navbar .navbar-form {\n  border-top: none;\n  box-shadow: none;\n}\n.navbar .navbar-nav > .open > a, .navbar .navbar-nav > .open > a:hover, .navbar .navbar-nav > .open > a:focus {\n  background-color: transparent;\n  color: inherit;\n}\n@media (max-width: 767px) {\n  .navbar .navbar-nav .navbar-text {\n    color: inherit;\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border: 0;\n    color: inherit;\n  }\n  .navbar .navbar-nav .open .dropdown-menu .divider {\n    border-bottom: 1px solid;\n    opacity: 0.08;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > li > a {\n    color: inherit;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > li > a:hover, .navbar .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: inherit;\n    background-color: transparent;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > .active > a, .navbar .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: inherit;\n    background-color: transparent;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > .disabled > a, .navbar .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: inherit;\n    background-color: transparent;\n  }\n}\n.navbar.navbar-default .logo-container .brand {\n  color: #555555;\n}\n.navbar .navbar-link {\n  color: inherit;\n}\n.navbar .navbar-link:hover {\n  color: inherit;\n}\n.navbar .btn {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.navbar .btn-link {\n  color: inherit;\n}\n.navbar .btn-link:hover, .navbar .btn-link:focus {\n  color: inherit;\n}\n.navbar .btn-link[disabled]:hover, .navbar .btn-link[disabled]:focus, fieldset[disabled] .navbar .btn-link:hover, fieldset[disabled] .navbar .btn-link:focus {\n  color: inherit;\n}\n.navbar .navbar-form {\n  margin: 4px 0 0;\n}\n.navbar .navbar-form .form-group {\n  margin: 0;\n  padding: 0;\n}\n.navbar .navbar-form .form-group .material-input:before, .navbar .navbar-form .form-group.is-focused .material-input:after {\n  background-color: inherit;\n}\n.navbar .navbar-form .form-group .form-control,\n.navbar .navbar-form .form-control {\n  border-color: inherit;\n  color: inherit;\n  padding: 0;\n  margin: 0;\n  height: 28px;\n  font-size: 14px;\n  line-height: 1.42857;\n}\n.navbar, .navbar.navbar-default {\n  background-color: #FFFFFF;\n  color: #555555;\n}\n.navbar .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar .navbar-form input.form-control::-moz-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-default .navbar-form input.form-control::-moz-placeholder {\n  color: #555555;\n}\n.navbar .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar .navbar-form input.form-control:-ms-input-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-default .navbar-form input.form-control:-ms-input-placeholder {\n  color: #555555;\n}\n.navbar .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar .navbar-form input.form-control::-webkit-input-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-default .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #555555;\n}\n.navbar .dropdown-menu, .navbar.navbar-default .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar .dropdown-menu li > a:hover, .navbar .dropdown-menu li > a:focus, .navbar.navbar-default .dropdown-menu li > a:hover, .navbar.navbar-default .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #FFFFFF;\n  box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2);\n}\n.navbar .dropdown-menu .active > a, .navbar.navbar-default .dropdown-menu .active > a {\n  background-color: #FFFFFF;\n  color: #555555;\n  box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2);\n}\n.navbar .dropdown-menu .active > a:hover, .navbar .dropdown-menu .active > a:focus, .navbar.navbar-default .dropdown-menu .active > a:hover, .navbar.navbar-default .dropdown-menu .active > a:focus {\n  color: #555555;\n}\n.navbar.navbar-inverse {\n  background-color: #212121;\n  color: #fff;\n}\n.navbar.navbar-inverse .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-inverse .navbar-form input.form-control::-moz-placeholder {\n  color: #fff;\n}\n.navbar.navbar-inverse .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-inverse .navbar-form input.form-control:-ms-input-placeholder {\n  color: #fff;\n}\n.navbar.navbar-inverse .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-inverse .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #fff;\n}\n.navbar.navbar-inverse .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-inverse .dropdown-menu li > a:hover, .navbar.navbar-inverse .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #212121;\n  box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2);\n}\n.navbar.navbar-inverse .dropdown-menu .active > a {\n  background-color: #212121;\n  color: #fff;\n  box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2);\n}\n.navbar.navbar-inverse .dropdown-menu .active > a:hover, .navbar.navbar-inverse .dropdown-menu .active > a:focus {\n  color: #fff;\n}\n.navbar.navbar-primary {\n  background-color: #9c27b0;\n  color: #ffffff;\n}\n.navbar.navbar-primary .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-primary .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-primary .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-primary .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-primary .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-primary .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-primary .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-primary .dropdown-menu li > a:hover, .navbar.navbar-primary .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #9c27b0;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.navbar.navbar-primary .dropdown-menu .active > a {\n  background-color: #9c27b0;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.navbar.navbar-primary .dropdown-menu .active > a:hover, .navbar.navbar-primary .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-success {\n  background-color: #4caf50;\n  color: #ffffff;\n}\n.navbar.navbar-success .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-success .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-success .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-success .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-success .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-success .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-success .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-success .dropdown-menu li > a:hover, .navbar.navbar-success .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #4caf50;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.navbar.navbar-success .dropdown-menu .active > a {\n  background-color: #4caf50;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.navbar.navbar-success .dropdown-menu .active > a:hover, .navbar.navbar-success .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-info {\n  background-color: #00bcd4;\n  color: #ffffff;\n}\n.navbar.navbar-info .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-info .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-info .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-info .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-info .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-info .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-info .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-info .dropdown-menu li > a:hover, .navbar.navbar-info .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #00bcd4;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.navbar.navbar-info .dropdown-menu .active > a {\n  background-color: #00bcd4;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.navbar.navbar-info .dropdown-menu .active > a:hover, .navbar.navbar-info .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-warning {\n  background-color: #ff9800;\n  color: #ffffff;\n}\n.navbar.navbar-warning .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-warning .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-warning .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-warning .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-warning .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-warning .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-warning .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-warning .dropdown-menu li > a:hover, .navbar.navbar-warning .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #ff9800;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.navbar.navbar-warning .dropdown-menu .active > a {\n  background-color: #ff9800;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.navbar.navbar-warning .dropdown-menu .active > a:hover, .navbar.navbar-warning .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-danger {\n  background-color: #f44336;\n  color: #ffffff;\n}\n.navbar.navbar-danger .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-danger .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-danger .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-danger .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-danger .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-danger .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-danger .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-danger .dropdown-menu li > a:hover, .navbar.navbar-danger .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #f44336;\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.navbar.navbar-danger .dropdown-menu .active > a {\n  background-color: #f44336;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.navbar.navbar-danger .dropdown-menu .active > a:hover, .navbar.navbar-danger .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-rose {\n  background-color: #e91e63;\n  color: #ffffff;\n}\n.navbar.navbar-rose .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-rose .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-rose .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-rose .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-rose .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-rose .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-rose .dropdown-menu {\n  border-radius: 3px !important;\n}\n.navbar.navbar-rose .dropdown-menu li > a:hover, .navbar.navbar-rose .dropdown-menu li > a:focus {\n  color: #FFFFFF;\n  background-color: #e91e63;\n  box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);\n}\n.navbar.navbar-rose .dropdown-menu .active > a {\n  background-color: #e91e63;\n  color: #ffffff;\n  box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);\n}\n.navbar.navbar-rose .dropdown-menu .active > a:hover, .navbar.navbar-rose .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar-inverse {\n  background-color: #3f51b5;\n}\n.navbar.navbar-transparent {\n  background-color: transparent;\n  box-shadow: none;\n  border-bottom: 0;\n}\n.navbar.navbar-transparent .logo-container .brand {\n  color: #FFFFFF;\n}\n.navbar-fixed-top {\n  border-radius: 0;\n}\n@media (max-width: 1199px) {\n  .navbar {\n    /*\n        .navbar-form {\n          margin-top: 10px;\n        }\n    */\n  }\n  .navbar .navbar-brand {\n    height: 50px;\n    padding: 10px 15px;\n  }\n  .navbar .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar .alert {\n  border-radius: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 85px;\n  width: 100%;\n  z-index: 3;\n  transition: all 0.3s;\n}\n\n.nav-align-center {\n  text-align: center;\n}\n.nav-align-center .nav-pills {\n  display: inline-block;\n}\n\n.navbar-absolute {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  z-index: 1029;\n}\n\n.popover, .tooltip-inner {\n  color: #555555;\n  line-height: 1.5em;\n  background: #FFFFFF;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n\n.popover {\n  padding: 0;\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.popover.left > .arrow, .popover.right > .arrow, .popover.top > .arrow, .popover.bottom > .arrow {\n  border: none;\n}\n\n.popover-title {\n  background-color: #FFFFFF;\n  border: none;\n  padding: 15px 15px 5px;\n  font-size: 1.3em;\n}\n\n.popover-content {\n  padding: 10px 15px 15px;\n  line-height: 1.4;\n}\n\n.tooltip.in {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0px, 0);\n  transform: translate3d(0, 0px, 0);\n}\n\n.tooltip {\n  opacity: 0;\n  transition: opacity, -webkit-transform .2s ease;\n  transition: opacity, transform .2s ease;\n  transition: opacity, transform .2s ease, -webkit-transform .2s ease;\n  -webkit-transform: translate3d(0, 5px, 0);\n  transform: translate3d(0, 5px, 0);\n}\n.tooltip.left .tooltip-arrow {\n  border-left-color: #FFFFFF;\n}\n.tooltip.right .tooltip-arrow {\n  border-right-color: #FFFFFF;\n}\n.tooltip.top .tooltip-arrow {\n  border-top-color: #FFFFFF;\n}\n.tooltip.bottom .tooltip-arrow {\n  border-bottom-color: #FFFFFF;\n}\n\n.tooltip-inner {\n  padding: 10px 15px;\n  min-width: 130px;\n}\n\nfooter {\n  padding: 15px 0;\n}\nfooter ul {\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n}\nfooter ul li {\n  display: inline-block;\n}\nfooter ul li a {\n  color: inherit;\n  padding: 15px;\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-radius: 3px;\n  text-decoration: none;\n  position: relative;\n  display: block;\n}\nfooter ul li a:hover {\n  text-decoration: none;\n}\nfooter .copyright {\n  padding: 15px 0;\n  margin: 0;\n}\nfooter .copyright .material-icons {\n  font-size: 18px;\n  position: relative;\n  top: 3px;\n}\nfooter .btn {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.dropdown-menu {\n  border: 0;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.dropdown-menu .divider {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.dropdown-menu li > a {\n  font-size: 13px;\n  padding: 10px 20px;\n  margin: 0 5px;\n  border-radius: 2px;\n  transition: all 150ms linear;\n}\n.dropdown-menu li > a:hover, .dropdown-menu li > a:focus {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n.dropdown-menu.dropdown-with-icons li > a {\n  padding: 12px 20px 12px 12px;\n}\n.dropdown-menu.dropdown-with-icons li > a .material-icons {\n  vertical-align: middle;\n  font-size: 24px;\n  position: relative;\n  margin-top: -4px;\n  top: 1px;\n  margin-right: 12px;\n  opacity: .5;\n}\n.dropdown-menu li {\n  position: relative;\n}\n.dropdown-menu li a:hover,\n.dropdown-menu li a:focus,\n.dropdown-menu li a:active {\n  background-color: #9c27b0;\n  color: #FFFFFF;\n}\n.dropdown-menu .divider {\n  margin: 5px 0;\n}\n.navbar .dropdown-menu li a:hover,\n.navbar .dropdown-menu li a:focus,\n.navbar .dropdown-menu li a:active, .navbar.navbar-default .dropdown-menu li a:hover,\n.navbar.navbar-default .dropdown-menu li a:focus,\n.navbar.navbar-default .dropdown-menu li a:active {\n  background-color: #9c27b0;\n  color: #FFFFFF;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n\n.card {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin: 25px 0;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  color: rgba(0,0,0, 0.87);\n  background: #fff;\n}\n.card .card-height-indicator {\n  margin-top: 100%;\n}\n.card .title {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.card .card-image {\n  height: 60%;\n  position: relative;\n  overflow: hidden;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: -30px;\n  border-radius: 6px;\n}\n.card .card-image img {\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n  pointer-events: none;\n}\n.card .card-image .card-title {\n  position: absolute;\n  bottom: 15px;\n  left: 15px;\n  color: #fff;\n  font-size: 1.3em;\n  text-shadow: 0 2px 5px rgba(33, 33, 33, 0.5);\n}\n.card .category:not([class*=\"text-\"]) {\n  color: #999999;\n}\n.card .card-content {\n  padding: 15px 20px;\n}\n.card .card-content .category {\n  margin-bottom: 0;\n}\n.card .card-header {\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  margin: -20px 15px 0;\n  border-radius: 3px;\n  padding: 15px;\n  background-color: #999999;\n}\n.card .card-header .title {\n  color: #FFFFFF;\n}\n.card .card-header .category {\n  margin-bottom: 0;\n  color: rgba(255, 255, 255, 0.62);\n}\n.card .card-header.card-chart {\n  padding: 0;\n  min-height: 160px;\n}\n.card .card-header.card-chart + .content h4 {\n  margin-top: 0;\n}\n.card .card-header .ct-label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.card .card-header .ct-grid {\n  stroke: rgba(255, 255, 255, 0.2);\n}\n.card .card-header .ct-series-a .ct-point,\n.card .card-header .ct-series-a .ct-line,\n.card .card-header .ct-series-a .ct-bar,\n.card .card-header .ct-series-a .ct-slice-donut {\n  stroke: rgba(255, 255, 255, 0.8);\n}\n.card .card-header .ct-series-a .ct-slice-pie,\n.card .card-header .ct-series-a .ct-area {\n  fill: rgba(255, 255, 255, 0.4);\n}\n.card .chart-title {\n  position: absolute;\n  top: 25px;\n  width: 100%;\n  text-align: center;\n}\n.card .chart-title h3 {\n  margin: 0;\n  color: #FFFFFF;\n}\n.card .chart-title h6 {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.4);\n}\n.card .card-footer {\n  margin: 0 20px 10px;\n  padding-top: 10px;\n  border-top: 1px solid #eeeeee;\n}\n.card .card-footer .content {\n  display: block;\n}\n.card .card-footer div {\n  display: inline-block;\n}\n.card .card-footer .author {\n  color: #999999;\n}\n.card .card-footer .stats {\n  line-height: 22px;\n  color: #999999;\n  font-size: 12px;\n}\n.card .card-footer .stats .material-icons {\n  position: relative;\n  top: 4px;\n  font-size: 16px;\n}\n.card .card-footer h6 {\n  color: #999999;\n}\n.card img {\n  width: 100%;\n  height: auto;\n}\n.card .category .material-icons {\n  position: relative;\n  top: 6px;\n  line-height: 0;\n}\n.card .category-social .fa {\n  font-size: 24px;\n  position: relative;\n  margin-top: -4px;\n  top: 2px;\n  margin-right: 5px;\n}\n.card .author .avatar {\n  width: 30px;\n  height: 30px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.card .author a {\n  color: #3C4858;\n  text-decoration: none;\n}\n.card .author a .ripple-container {\n  display: none;\n}\n.card .table {\n  margin-bottom: 0;\n}\n.card .table tr:first-child td {\n  border-top: none;\n}\n.card [data-background-color=\"purple\"] {\n  background: linear-gradient(60deg, #ab47bc, #8e24aa);\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.card [data-background-color=\"blue\"] {\n  background: linear-gradient(60deg, #26c6da, #00acc1);\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.card [data-background-color=\"green\"] {\n  background: linear-gradient(60deg, #66bb6a, #43a047);\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.card [data-background-color=\"orange\"] {\n  background: linear-gradient(60deg, #ffa726, #fb8c00);\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.card [data-background-color=\"red\"] {\n  background: linear-gradient(60deg, #ef5350, #e53935);\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.card [data-background-color] {\n  color: #FFFFFF;\n}\n.card [data-background-color] a {\n  color: #FFFFFF;\n}\n\n.card-stats .title {\n  margin: 0;\n}\n.card-stats .card-header {\n  float: left;\n  text-align: center;\n}\n.card-stats .card-header i {\n  font-size: 36px;\n  line-height: 56px;\n  width: 56px;\n  height: 56px;\n}\n.card-stats .card-content {\n  text-align: right;\n  padding-top: 10px;\n}\n\n.card-nav-tabs .header-raised {\n  margin-top: -30px;\n}\n.card-nav-tabs .nav-tabs {\n  background: transparent;\n  padding: 0;\n}\n.card-nav-tabs .nav-tabs-title {\n  float: left;\n  padding: 10px 10px 10px 0;\n  line-height: 24px;\n}\n\n.card-plain {\n  background: transparent;\n  box-shadow: none;\n}\n.card-plain .card-header {\n  margin-left: 0;\n  margin-right: 0;\n}\n.card-plain .content {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.card-plain .card-image {\n  margin: 0;\n  border-radius: 3px;\n}\n.card-plain .card-image img {\n  border-radius: 3px;\n}\n\n.iframe-container {\n  margin: 0 -20px 0;\n}\n.iframe-container iframe {\n  width: 100%;\n  height: 500px;\n  border: 0;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.card-profile,\n.card-testimonial {\n  margin-top: 30px;\n  text-align: center;\n}\n.card-profile .btn-just-icon.btn-raised,\n.card-testimonial .btn-just-icon.btn-raised {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.card-profile .card-avatar,\n.card-testimonial .card-avatar {\n  max-width: 130px;\n  max-height: 130px;\n  margin: -50px auto 0;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.card-profile .card-avatar + .content,\n.card-testimonial .card-avatar + .content {\n  margin-top: 15px;\n}\n.card-profile.card-plain .card-avatar,\n.card-testimonial.card-plain .card-avatar {\n  margin-top: 0;\n}\n\n.nav-tabs {\n  background: #9c27b0;\n  border: 0;\n  border-radius: 3px;\n  padding: 0 15px;\n}\n.nav-tabs > li > a {\n  color: #FFFFFF;\n  border: 0;\n  margin: 0;\n  border-radius: 3px;\n  line-height: 24px;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.nav-tabs > li > a:hover {\n  background-color: transparent;\n  border: 0;\n}\n.nav-tabs > li > a, .nav-tabs > li > a:hover, .nav-tabs > li > a:focus {\n  background-color: transparent;\n  border: 0 !important;\n  color: #FFFFFF !important;\n  font-weight: 500;\n}\n.nav-tabs > li.disabled > a, .nav-tabs > li.disabled > a:hover {\n  color: rgba(255, 255, 255, 0.5);\n}\n.nav-tabs > li .material-icons {\n  margin: -1px 5px 0 0;\n}\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n  background-color: rgba(255, 255, 255, 0.2);\n  transition: background-color .1s .2s;\n}\n\n.ct-label {\n  fill: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 1.3rem;\n  line-height: 1;\n}\n\n.ct-chart-line .ct-label,\n.ct-chart-bar .ct-label {\n  display: block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-label.ct-vertical.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end;\n}\n\n.ct-label.ct-vertical.ct-end {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start;\n}\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: end;\n}\n\n.ct-grid {\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 1px;\n  stroke-dasharray: 2px;\n}\n\n.ct-point {\n  stroke-width: 8px;\n  stroke-linecap: round;\n}\n\n.ct-line {\n  fill: none;\n  stroke-width: 3px;\n}\n\n.ct-area {\n  stroke: none;\n  fill-opacity: 0.8;\n}\n\n.ct-bar {\n  fill: none;\n  stroke-width: 10px;\n}\n\n.ct-slice-donut {\n  fill: none;\n  stroke-width: 60px;\n}\n\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: #00bcd4;\n}\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #00bcd4;\n}\n\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: #f44336;\n}\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #f44336;\n}\n\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: #ff9800;\n}\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #ff9800;\n}\n\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: #9c27b0;\n}\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #9c27b0;\n}\n\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: #4caf50;\n}\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #4caf50;\n}\n\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: #9C9B99;\n}\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-area {\n  fill: #9C9B99;\n}\n\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: #999999;\n}\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-area {\n  fill: #999999;\n}\n\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: #dd4b39;\n}\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-area {\n  fill: #dd4b39;\n}\n\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: #35465c;\n}\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-area {\n  fill: #35465c;\n}\n\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: #e52d27;\n}\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-area {\n  fill: #e52d27;\n}\n\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: #55acee;\n}\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-area {\n  fill: #55acee;\n}\n\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: #cc2127;\n}\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-area {\n  fill: #cc2127;\n}\n\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: #1769ff;\n}\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-area {\n  fill: #1769ff;\n}\n\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: #6188e2;\n}\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-area {\n  fill: #6188e2;\n}\n\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: #a748ca;\n}\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-area {\n  fill: #a748ca;\n}\n\n.ct-square {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-square:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 100%;\n}\n.ct-square:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-square > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-second {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-second:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 93.75%;\n}\n.ct-minor-second:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-second > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-second {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-second:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 88.88889%;\n}\n.ct-major-second:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-second > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-third {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-third:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 83.33333%;\n}\n.ct-minor-third:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-third > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-third {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-third:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 80%;\n}\n.ct-major-third:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-third > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-perfect-fourth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-perfect-fourth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 75%;\n}\n.ct-perfect-fourth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-perfect-fourth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-perfect-fifth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-perfect-fifth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 66.66667%;\n}\n.ct-perfect-fifth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-perfect-fifth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-sixth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-sixth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 62.5%;\n}\n.ct-minor-sixth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-sixth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-golden-section {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-golden-section:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 61.8047%;\n}\n.ct-golden-section:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-golden-section > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-sixth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-sixth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 60%;\n}\n.ct-major-sixth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-sixth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-seventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-seventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 56.25%;\n}\n.ct-minor-seventh:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-seventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-seventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-seventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 53.33333%;\n}\n.ct-major-seventh:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-seventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-octave {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-octave:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 50%;\n}\n.ct-octave:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-octave > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-tenth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-tenth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 40%;\n}\n.ct-major-tenth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-tenth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-eleventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-eleventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 37.5%;\n}\n.ct-major-eleventh:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-eleventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-twelfth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-twelfth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 33.33333%;\n}\n.ct-major-twelfth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-twelfth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-double-octave {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-double-octave:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 25%;\n}\n.ct-double-octave:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-double-octave > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-blue {\n  stroke: #9c27b0 !important;\n}\n\n.ct-azure {\n  stroke: #00bcd4 !important;\n}\n\n.ct-green {\n  stroke: #4caf50 !important;\n}\n\n.ct-orange {\n  stroke: #ff9800 !important;\n}\n\n.ct-red {\n  stroke: #f44336 !important;\n}\n\n.ct-white {\n  stroke: #FFFFFF !important;\n}\n\n.ct-rose {\n  stroke: #e91e63 !important;\n}\n\n@media (min-width: 992px) {\n  .navbar-form {\n    margin-top: 21px;\n    margin-bottom: 21px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .navbar-nav > li > .dropdown-menu,\n  .dropdown .dropdown-menu,\n  .dropdown-menu.bootstrap-datetimepicker-widget {\n    transition: all 150ms linear;\n    margin-top: -20px;\n    visibility: hidden;\n    display: block;\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n\n  .navbar-nav > li.open > .dropdown-menu,\n  .dropdown.open .dropdown-menu,\n  .dropdown-menu.bootstrap-datetimepicker-widget.open {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    visibility: visible;\n    margin-top: 0px;\n  }\n\n  /*.navbar-nav > li > .dropdown-menu:before{\n      border-bottom: 11px solid rgba(0, 0, 0, 0.2);\n      border-left: 11px solid rgba(0, 0, 0, 0);\n      border-right: 11px solid rgba(0, 0, 0, 0);\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      left: 12px;\n      top: -11px;\n  }\n  .navbar-nav > li > .dropdown-menu:after {\n      border-bottom: 11px solid #FFFFFF;\n      border-left: 11px solid rgba(0, 0, 0, 0);\n      border-right: 11px solid rgba(0, 0, 0, 0);\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      left: 12px;\n      top: -10px;\n  }*/\n  .navbar-nav.navbar-right > li > .dropdown-menu:before {\n    left: auto;\n    right: 12px;\n  }\n\n  .navbar-nav.navbar-right > li > .dropdown-menu:after {\n    left: auto;\n    right: 12px;\n  }\n\n  .footer:not(.footer-big) nav > ul li:first-child {\n    margin-left: 0;\n  }\n\n  body > .navbar-collapse.collapse {\n    display: none !important;\n  }\n\n  .card form [class*=\"col-\"] {\n    padding: 6px;\n  }\n  .card form [class*=\"col-\"]:first-child {\n    padding-left: 15px;\n  }\n  .card form [class*=\"col-\"]:last-child {\n    padding-right: 15px;\n  }\n\n  .sidebar .navbar-form {\n    display: none !important;\n  }\n  .sidebar .nav-mobile-menu {\n    display: none;\n  }\n}\n/*          Changes for small display      */\n@media (max-width: 991px) {\n  .sidebar {\n    display: none;\n    box-shadow: none;\n  }\n  .sidebar .sidebar-wrapper {\n    padding-bottom: 60px;\n  }\n  .sidebar .nav-mobile-menu {\n    margin-top: 0;\n  }\n  .sidebar .nav-mobile-menu .notification {\n    float: left;\n    line-height: 30px;\n    margin-right: 8px;\n  }\n  .sidebar .nav-mobile-menu .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n\n  .main-panel {\n    width: 100%;\n  }\n\n  .navbar-transparent {\n    padding-top: 15px;\n    background-color: rgba(0, 0, 0, 0.45);\n  }\n\n  body {\n    position: relative;\n  }\n\n  .main-panel {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    left: 0;\n  }\n\n  .navbar .container {\n    left: 0;\n    width: 100%;\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    position: relative;\n  }\n\n  .navbar .navbar-collapse.collapse,\n  .navbar .navbar-collapse.collapse.in,\n  .navbar .navbar-collapse.collapsing {\n    display: none !important;\n  }\n\n  .navbar-nav > li {\n    float: none;\n    position: relative;\n    display: block;\n  }\n\n  .sidebar,\n  .off-canvas-sidebar {\n    position: fixed;\n    display: block;\n    top: 0;\n    height: 100vh;\n    width: 260px;\n    right: 0;\n    left: auto;\n    z-index: 1032;\n    visibility: visible;\n    background-color: #9A9A9A;\n    overflow-y: visible;\n    border-top: none;\n    text-align: left;\n    padding-right: 0px;\n    padding-left: 0;\n    -webkit-transform: translate3d(260px, 0, 0);\n    transform: translate3d(260px, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  }\n  .sidebar > ul,\n  .off-canvas-sidebar > ul {\n    position: relative;\n    z-index: 4;\n    overflow-y: scroll;\n    height: calc(100vh - 61px);\n    width: 100%;\n  }\n  .sidebar::before,\n  .off-canvas-sidebar::before {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    background-color: #282828;\n    display: block;\n    content: \"\";\n    z-index: 1;\n  }\n  .sidebar .logo,\n  .off-canvas-sidebar .logo {\n    position: relative;\n    z-index: 4;\n  }\n  .sidebar .navbar-form,\n  .off-canvas-sidebar .navbar-form {\n    margin: 10px 15px;\n    float: none !important;\n  }\n  .sidebar .navbar-form .btn,\n  .off-canvas-sidebar .navbar-form .btn {\n    position: absolute;\n    top: 25px;\n    right: 15px;\n  }\n  .sidebar .table-responsive,\n  .off-canvas-sidebar .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .nav-open .navbar-collapse {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0);\n  }\n\n  .nav-open .navbar .container {\n    left: -250px;\n  }\n\n  .nav-open .main-panel {\n    left: 0;\n    -webkit-transform: translate3d(-260px, 0, 0);\n    transform: translate3d(-260px, 0, 0);\n  }\n\n  .nav-open .sidebar {\n    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  }\n\n  .nav-open .off-canvas-sidebar,\n  .nav-open .sidebar {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  .close-layer {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: auto;\n    content: \"\";\n    z-index: 9999;\n    overflow-x: hidden;\n    transition: all 370ms ease-in;\n  }\n  .close-layer.visible {\n    opacity: 1;\n  }\n\n  .navbar-toggle .icon-bar {\n    display: block;\n    position: relative;\n    background: #fff;\n    width: 24px;\n    height: 2px;\n    border-radius: 1px;\n    margin: 0 auto;\n  }\n\n  .navbar-header .navbar-toggle {\n    margin: 10px 15px 10px 0;\n    width: 40px;\n    height: 40px;\n  }\n\n  .bar1,\n  .bar2,\n  .bar3 {\n    outline: 1px solid transparent;\n  }\n\n  @-webkit-keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  .dropdown-menu .divider {\n    background-color: rgba(229, 229, 229, 0.15);\n  }\n\n  .navbar-nav {\n    margin: 1px 0;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    padding: 15px 15px 5px 50px;\n  }\n  .navbar-nav .open .dropdown-menu > li:first-child > a {\n    padding: 5px 15px 5px 50px;\n  }\n  .navbar-nav .open .dropdown-menu > li:last-child > a {\n    padding: 15px 15px 25px 50px;\n  }\n\n  [class*=\"navbar-\"] .navbar-nav > li > a,\n  [class*=\"navbar-\"] .navbar-nav > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .active > a,\n  [class*=\"navbar-\"] .navbar-nav .active > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .active > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .navbar-nav .open .dropdown-menu > li > a:active {\n    color: white;\n  }\n  [class*=\"navbar-\"] .navbar-nav > li > a,\n  [class*=\"navbar-\"] .navbar-nav > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:focus {\n    opacity: .7;\n    background: transparent;\n  }\n  [class*=\"navbar-\"] .navbar-nav.navbar-nav .open .dropdown-menu > li > a:active {\n    opacity: 1;\n  }\n  [class*=\"navbar-\"] .navbar-nav .dropdown > a:hover .caret {\n    border-bottom-color: #777;\n    border-top-color: #777;\n  }\n  [class*=\"navbar-\"] .navbar-nav .dropdown > a:active .caret {\n    border-bottom-color: white;\n    border-top-color: white;\n  }\n\n  .dropdown-menu {\n    display: none;\n  }\n\n  .navbar-fixed-top {\n    -webkit-backface-visibility: hidden;\n  }\n\n  #bodyClick {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: auto;\n    right: 250px;\n    content: \"\";\n    z-index: 9999;\n    overflow-x: hidden;\n  }\n\n  .social-line .btn {\n    margin: 0 0 10px 0;\n  }\n\n  .subscribe-line .form-control {\n    margin: 0 0 10px 0;\n  }\n\n  .social-line.pull-right {\n    float: none;\n  }\n\n  .footer:not(.footer-big) nav > ul li {\n    float: none;\n  }\n\n  .social-area.pull-right {\n    float: none !important;\n  }\n\n  .form-control + .form-control-feedback {\n    margin-top: -8px;\n  }\n\n  .navbar-toggle:hover, .navbar-toggle:focus {\n    background-color: transparent !important;\n  }\n\n  .btn.dropdown-toggle {\n    margin-bottom: 0;\n  }\n\n  .media-post .author {\n    width: 20%;\n    float: none !important;\n    display: block;\n    margin: 0 auto 10px;\n  }\n\n  .media-post .media-body {\n    width: 100%;\n  }\n\n  .navbar-collapse.collapse {\n    height: 100% !important;\n  }\n\n  .navbar-collapse.collapse.in {\n    display: block;\n  }\n\n  .navbar-header .collapse, .navbar-toggle {\n    display: block !important;\n  }\n\n  .navbar-header {\n    float: none;\n  }\n\n  .navbar-collapse .nav p {\n    font-size: 14px;\n    margin: 0;\n  }\n  .navbar-collapse [class^=\"pe-7s-\"] {\n    float: left;\n    font-size: 20px;\n    margin-right: 10px;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .table-full-width {\n    margin-left: -20px;\n    margin-right: -20px;\n  }\n}\n\n\n/* Admin map */\n\n@media (min-width: 992px){\n    .typo-line{\n        padding-left: 140px;\n        margin-bottom: 40px;\n        position: relative;\n    }\n\n    .typo-line .category{\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%);\n        top: 50%;\n        left: 0px;\n        position: absolute;\n    }\n}\n\n#map{\n    position:relative;\n    width:100%;\n    height: calc(100% - 60px);\n    margin-top: 70px;\n}\n\n.places-buttons .btn{\n    margin-bottom: 30px\n}\n\n.space-70{\n    height: 70px;\n    display: block;\n}\n\n.sidebar .nav > li.active-pro{\n    position: absolute;\n    width: 100%;\n    bottom: 10px;\n}\n\n.tim-row{\n    margin-bottom: 20px;\n}\n\n.tim-typo{\n    padding-left: 25%;\n    margin-bottom: 40px;\n    position: relative;\n}\n.tim-typo .tim-note{\n    bottom: 10px;\n    color: #c0c1c2;\n    display: block;\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 13px;\n    left: 0;\n    margin-left: 20px;\n    position: absolute;\n    width: 260px;\n}\n.tim-row{\n    padding-top: 50px;\n}\n.tim-row h3{\n    margin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin.component.html":
/***/ (function(module, exports) {

module.exports = "  <!--  Fonts and icons     -->\n  <link type=\"text/css\" href=\"https://fonts.googleapis.com/css?family=Muli:400,300\" rel=\"stylesheet\">\n  <link type=\"text/css\" href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\">\n\n  <div class=\"wrapper\">\n        \n    <div class=\"sidebar\" data-color=\"purple\" data-image=\"../../img/assets/sidebar-1.jpg\">\n        <!--\n            Tip 1: You can change the color of the sidebar using: data-color=\"purple | blue | green | orange | red\"\n\n            Tip 2: you can also add an image using data-image tag\n        -->\n\n        <div class=\"logo\">\n            <a href=\"http://www.creative-tim.com\" class=\"simple-text\">\n                Creative Tim\n            </a>\n        </div>\n\n        <div class=\"sidebar-wrapper\">\n            <ul class=\"nav\">\n                <li class=\"active\">\n                    <a href=\"dashboard.html\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p>Dashboard</p>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"user.html\">\n                        <i class=\"material-icons\">person</i>\n                        <p>User Profile</p>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"table.html\">\n                        <i class=\"material-icons\">content_paste</i>\n                        <p>Table List</p>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"typography.html\">\n                        <i class=\"material-icons\">library_books</i>\n                        <p>Typography</p>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"icons.html\">\n                        <i class=\"material-icons\">bubble_chart</i>\n                        <p>Icons</p>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"maps.html\">\n                        <i class=\"material-icons\">location_on</i>\n                        <p>Maps</p>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"notifications.html\">\n                        <i class=\"material-icons text-gray\">notifications</i>\n                        <p>Notifications</p>\n                    </a>\n                </li>\n                <li class=\"active-pro\">\n                    <a href=\"upgrade.html\">\n                        <i class=\"material-icons\">unarchive</i>\n                        <p>Upgrade to PRO</p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"main-panel\">\n        <nav class=\"navbar navbar-transparent navbar-absolute\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"#\">Material Dashboard</a>\n                </div>\n                <div class=\"collapse navbar-collapse\">\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li>\n                            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                <i class=\"material-icons\">dashboard</i>\n                                <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                            </a>\n                        </li>\n                        <li class=\"dropdown\">\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                <i class=\"material-icons\">notifications</i>\n                                <span class=\"notification\">5</span>\n                                <p class=\"hidden-lg hidden-md\">Notifications</p>\n                            </a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Mike John responded to your email</a></li>\n                                <li><a href=\"#\">You have 5 new tasks</a></li>\n                                <li><a href=\"#\">You're now friend with Andrew</a></li>\n                                <li><a href=\"#\">Another Notification</a></li>\n                                <li><a href=\"#\">Another One</a></li>\n                            </ul>\n                        </li>\n                        <li>\n                            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                <i class=\"material-icons\">person</i>\n                                <p class=\"hidden-lg hidden-md\">Profile</p>\n                                </a>\n                        </li>\n                    </ul>\n\n                    <form class=\"navbar-form navbar-right\" role=\"search\">\n                        <div class=\"form-group  is-empty\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                            <span class=\"material-input\"></span>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                        </button>\n                    </form>\n                </div>\n            </div>\n        </nav>\n\n        <div class=\"content\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                        <div class=\"card card-stats\">\n                            <div class=\"card-header\" data-background-color=\"orange\">\n                                <i class=\"material-icons\">content_copy</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <p class=\"category\">Used Space</p>\n                                <h3 class=\"title\">49/50<small>GB</small></h3>\n                            </div>\n                            <div class=\"card-footer\">\n                                <div class=\"stats\">\n                                    <i class=\"material-icons text-danger\">warning</i> <a href=\"#pablo\">Get More Space...</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                        <div class=\"card card-stats\">\n                            <div class=\"card-header\" data-background-color=\"green\">\n                                <i class=\"material-icons\">store</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <p class=\"category\">Revenue</p>\n                                <h3 class=\"title\">$34,245</h3>\n                            </div>\n                            <div class=\"card-footer\">\n                                <div class=\"stats\">\n                                    <i class=\"material-icons\">date_range</i> Last 24 Hours\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                        <div class=\"card card-stats\">\n                            <div class=\"card-header\" data-background-color=\"red\">\n                                <i class=\"material-icons\">info_outline</i>\n                            </div>\n                            <div class=\"card-content\">\n                                <p class=\"category\">Fixed Issues</p>\n                                <h3 class=\"title\">75</h3>\n                            </div>\n                            <div class=\"card-footer\">\n                                <div class=\"stats\">\n                                    <i class=\"material-icons\">local_offer</i> Tracked from Github\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                        <div class=\"card card-stats\">\n                            <div class=\"card-header\" data-background-color=\"blue\">\n                                <i class=\"fa fa-twitter\"></i>\n                            </div>\n                            <div class=\"card-content\">\n                                <p class=\"category\">Followers</p>\n                                <h3 class=\"title\">+245</h3>\n                            </div>\n                            <div class=\"card-footer\">\n                                <div class=\"stats\">\n                                    <i class=\"material-icons\">update</i> Just Updated\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-chart\" data-background-color=\"green\">\n                                <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"title\">Daily Sales</h4>\n                                <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55%  </span> increase in today sales.</p>\n                            </div>\n                            <div class=\"card-footer\">\n                                <div class=\"stats\">\n                                    <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-chart\" data-background-color=\"orange\">\n                                <div class=\"ct-chart\" id=\"emailsSubscriptionChart\"></div>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"title\">Email Subscriptions</h4>\n                                <p class=\"category\">Last Campaign Performance</p>\n                            </div>\n                            <div class=\"card-footer\">\n                                <div class=\"stats\">\n                                    <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-chart\" data-background-color=\"red\">\n                                <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                            </div>\n                            <div class=\"card-content\">\n                                <h4 class=\"title\">Completed Tasks</h4>\n                                <p class=\"category\">Last Campaign Performance</p>\n                            </div>\n                            <div class=\"card-footer\">\n                                <div class=\"stats\">\n                                    <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-12\">\n                        <div class=\"card card-nav-tabs\">\n                            <div class=\"card-header\" data-background-color=\"purple\">\n                                <div class=\"nav-tabs-navigation\">\n                                    <div class=\"nav-tabs-wrapper\">\n                                        <span class=\"nav-tabs-title\">Tasks:</span>\n                                        <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                                            <li class=\"active\">\n                                                <a href=\"#profile\" data-toggle=\"tab\">\n                                                    <i class=\"material-icons\">bug_report</i>\n                                                    Bugs\n                                                <div class=\"ripple-container\"></div></a>\n                                            </li>\n                                            <li class=\"\">\n                                                <a href=\"#messages\" data-toggle=\"tab\">\n                                                    <i class=\"material-icons\">code</i>\n                                                    Website\n                                                <div class=\"ripple-container\"></div></a>\n                                            </li>\n                                            <li class=\"\">\n                                                <a href=\"#settings\" data-toggle=\"tab\">\n                                                    <i class=\"material-icons\">cloud</i>\n                                                    Server\n                                                <div class=\"ripple-container\"></div></a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"card-content\">\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane active\" id=\"profile\">\n                                        <table class=\"table\">\n                                            <tbody>\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"checkbox\">\n                                                            <label>\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                                    <td class=\"td-actions text-right\">\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">edit</i>\n                                                        </button>\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">close</i>\n                                                        </button>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"checkbox\">\n                                                            <label>\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                                    <td class=\"td-actions text-right\">\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">edit</i>\n                                                        </button>\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">close</i>\n                                                        </button>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"checkbox\">\n                                                            <label>\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                                    </td>\n                                                    <td class=\"td-actions text-right\">\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">edit</i>\n                                                        </button>\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">close</i>\n                                                        </button>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"checkbox\">\n                                                            <label>\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                                                    <td class=\"td-actions text-right\">\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">edit</i>\n                                                        </button>\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">close</i>\n                                                        </button>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <div class=\"tab-pane\" id=\"messages\">\n                                        <table class=\"table\">\n                                            <tbody>\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"checkbox\">\n                                                            <label>\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                                    </td>\n                                                    <td class=\"td-actions text-right\">\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">edit</i>\n                                                        </button>\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">close</i>\n                                                        </button>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"checkbox\">\n                                                            <label>\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                                    <td class=\"td-actions text-right\">\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">edit</i>\n                                                        </button>\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">close</i>\n                                                        </button>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <div class=\"tab-pane\" id=\"settings\">\n                                        <table class=\"table\">\n                                            <tbody>\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"checkbox\">\n                                                            <label>\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                                    <td class=\"td-actions text-right\">\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">edit</i>\n                                                        </button>\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">close</i>\n                                                        </button>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"checkbox\">\n                                                            <label>\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                                    </td>\n                                                    <td class=\"td-actions text-right\">\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">edit</i>\n                                                        </button>\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">close</i>\n                                                        </button>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <div class=\"checkbox\">\n                                                            <label>\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                            </label>\n                                                        </div>\n                                                    </td>\n                                                    <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                                    <td class=\"td-actions text-right\">\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">edit</i>\n                                                        </button>\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                            <i class=\"material-icons\">close</i>\n                                                        </button>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\" data-background-color=\"orange\">\n                                <h4 class=\"title\">Employees Stats</h4>\n                                <p class=\"category\">New employees on 15th September, 2016</p>\n                            </div>\n                            <div class=\"card-content table-responsive\">\n                                <table class=\"table table-hover\">\n                                    <thead class=\"text-warning\">\n                                        <th>ID</th>\n                                        <th>Name</th>\n                                        <th>Salary</th>\n                                        <th>Country</th>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>1</td>\n                                            <td>Dakota Rice</td>\n                                            <td>$36,738</td>\n                                            <td>Niger</td>\n                                        </tr>\n                                        <tr>\n                                            <td>2</td>\n                                            <td>Minerva Hooper</td>\n                                            <td>$23,789</td>\n                                            <td>Curaçao</td>\n                                        </tr>\n                                        <tr>\n                                            <td>3</td>\n                                            <td>Sage Rodriguez</td>\n                                            <td>$56,142</td>\n                                            <td>Netherlands</td>\n                                        </tr>\n                                        <tr>\n                                            <td>4</td>\n                                            <td>Philip Chaney</td>\n                                            <td>$38,735</td>\n                                            <td>Korea, South</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <footer class=\"footer\">\n            <div class=\"container-fluid\">\n                <nav class=\"pull-left\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Company\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Portfolio\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Blog\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <p class=\"copyright pull-right\">\n                    &copy; <script>document.write(new Date().getFullYear())</script> <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(route) {
        this.route = route;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.InitScripts();
        // this.sidebarimage   = this.route.url + 'img/assets/sidebar-1.jpg'
        /*
<script [src]="JSroutes.material" type="text/javascript"></script>

<!--  Charts Plugin -->
<script [src]="JSroutes.chartist"></script>

<!--  Notifications Plugin    -->
<script [src]="JSroutes.bnotify"></script>

<!--  Google Maps Plugin    -->
<!-- <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script> -->

<!-- Material Dashboard javascript methods -->
<script [src]="JSroutes.matdash"></script>

<!-- Material Dashboard technical methods, don't include it in your project! -->
<script [src]="JSroutes.technical"></script> */
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        // remove Child for each element
        for (var element in this.JSroutes)
            this.removeScripts(element['script']);
    };
    AdminComponent.prototype.InitScripts = function () {
        var host = 'https://' + window.location.hostname + ':3000/';
        this.JSroutes = [
            { material: host + 'components/material/material.min.js', script: this.appendScripts(host + 'components/material/material.min.js') },
            { chartist: host + 'components/chartist/dist/chartist.min.js', script: this.appendScripts(host + 'components/chartist/dist/chartist.min.js') },
            { bnotify: host + 'components/remarkable-bootstrap-notify/dist/bootstrap-notify.min.js', script: this.appendScripts(host + 'components/remarkable-bootstrap-notify/dist/bootstrap-notify.min.js') },
            { matdash: host + 'components/material/material-dashboard.js', script: this.appendScripts(host + 'components/material/material-dashboard.js') },
            { technical: host + 'components/material/technical.js', script: this.appendScripts(host + 'components/material/technical.js') }
        ];
    };
    /**
     *
     * @param src
     */
    AdminComponent.prototype.appendScripts = function (src) {
        // download script, add to DOM      
        var script = document.createElement('script');
        document.body.appendChild(script);
        script.src = src;
        console.log('appendChild script url: ', src);
        return script;
    };
    AdminComponent.prototype.removeScripts = function (script) {
        document.body.removeChild(script);
        console.log('removeChild script url: ', script.src);
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // selector: 'selector',
        template: __webpack_require__("../../../../../src/app/components/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<!--First row-->\n<div class=\"container\">\n    <div class=\"row wow fadeIn\" data-wow-delay=\"0.4s\">\n\n        <nav class=\"col-lg-12 breadcrumb\">\n            <a class=\"breadcrumb-item\"  [routerLink]=\"['/']\" ><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home</a>\n            <a class=\"breadcrumb-item active\"  >Article</a>\n        </nav>\n\n        <div class=\"col-md-12\">\n                \n            <!--Product-->\n            <div class=\"product-wrapper\">\n    \n                <!--Featured image-->\n                <div class=\"view overlay hm-white-light z-depth-1-half\">\n                    <img mdbRippleRadius style=\"width: 100%;height: 100%;\" [src]=\"article.image\" class=\"waves-light img-fluid \" alt=\"{{article.alt}}\">\n                    <div class=\"mask\">\n                    </div>\n                    <h3 class=\"price\"><span class=\"badge red darken-2\"> <i class=\"material-icons\">book</i></span></h3>\n                </div>\n                <!--/.Featured image-->\n    \n                <br>\n    \n                <!--Product data-->\n                <h2 class=\"h2-responsive mt-4\">{{article.title}}</h2>\n                <hr>\n                <p>{{article.text}}</p>\n                <p>{{article.subtext}}</p>\n            </div>\n            <!--Product-->\n    \n        </div>\n    </div>\n</div>\n\n<!--/.First row-->\n<foot></foot>"

/***/ }),

/***/ "../../../../../src/app/components/app-article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleComponent = (function () {
    function ArticleComponent(route) {
        this.route = route;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        var _this = this;
        this._sub = this.route.queryParams.subscribe(function (params) {
            console.log(params);
            // (+) converts string 'id' to a number
            _this.article = {
                id: +params['id'],
                alt: params['alt'],
                image: params['image'],
                title: params['title'],
                text: params['text'],
                subtext: params['subtext']
            };
            // In a real app: dispatch action to load the details here.
        });
    };
    ArticleComponent.prototype.ngOnDestroy = function () {
        this._sub.unsubscribe();
    };
    return ArticleComponent;
}());
ArticleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/components/app-article/article.component.html"),
        styles: ["\n    .price {\n        position: absolute;\n        left: 0;\n        top: 0;\n        margin-top: -2px;\n    }\n\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ArticleComponent);

var _a;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-article/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__article_component__ = __webpack_require__("../../../../../src/app/components/app-article/article.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__article_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section.blog {\n    top: 40px;\n    position: relative;\n}\n.mat-paginator {\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app-blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"blog\" id=\"blog\">\n\n\n    <div class=\"container\">\n        \n        <!--Blog-->\n        <div class=\"row\">\n             \n            <nav class=\"col-lg-12 breadcrumb\">\n                <a class=\"breadcrumb-item\"  [routerLink]=\"['/']\" ><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home</a>\n                <a class=\"breadcrumb-item active\" [routerLink]=\"['/blog']\" >Blog</a>\n            </nav>\n            \n           <!--Main column-->\n           <div class=\"col-lg-8\">\n\n               <div *ngIf=\"!Posts.length\">\n                    <h1 class=\"h1-responsive font-bold\"><small class=\"text-muted\"> Posts not found. </small></h1>\n               </div>\n\n               <div *ngFor=\"let post of Posts\" >\n\n                    <!--Post-->\n                    <div class=\"post-wrapper wow fadeIn\" data-wow-delay=\"0.2s\">\n                        <!--Post data-->\n                        <h1 class=\"h1-responsive font-bold\">{{post.title}} <small class=\"text-muted\">{{post.subtitle}}</small></h1>\n                        <h6>Written by <a href=\"\"><strong>{{post.byperson}}</strong></a>, {{post.datetime}}</h6>\n\n                        <br>\n\n                        <!--Featured image -->\n                        <div class=\"view overlay hm-white-light z-depth-1-half\">\n                            <img src=\"{{post.image}}\" class=\"img-fluid \" alt=\"\">\n                            <div class=\"mask\">\n                            </div>\n                        </div>\n\n                        <br>\n\n                        <!--Post excerpt-->\n                        <p>{{post.contain}}</p>\n\n                        <!--\"Read more\" button-->\n                        <button class=\"btn btn-info\">Read more</button>\n                    </div>\n                    <!--/.Post-->\n                    <hr>\n                </div>\n                \n\n                <!--Pagination-->\n                <nav *ngIf=\"length\">\n                        <mat-paginator class=\"wow fadeIn\" data-wow-delay=\"0.2s\" [length]=\"length\"\n                                        [pageSize]=\"pageSize\"\n                                        [pageSizeOptions]=\"pageSizeOptions\"\n                                        (page)=\"pageEvent = $event\">\n                        </mat-paginator> \n                </nav>\n                <!--/.Pagination-->\n\n            </div>\n\n            <!--Sidebar-->\n            <div class=\"col-lg-4 mt-1\">\n                                \n                \n                <div class=\"divider-new\">\n                    <h3>Featured posts</h3>\n                </div>\n                \n                <!--Featured posts-->\n                <section>\n                    \n                    <!--Grid row-->\n                    <div class=\"row\">\n                        <!--Grid column-->\n                        <div class=\"col-md-12\">\n                            \n                            <!--Carousel Wrapper-->\n                            <div id=\"carousel-example-2\" class=\"carousel slide carousel-fade z-depth-1-half\" data-ride=\"carousel\">\n                                <!--Indicators-->\n                                <ol class=\"carousel-indicators\">\n                                    <li data-target=\"#carousel-example-2\" data-slide-to=\"0\" class=\"active\"></li>\n                                    <li data-target=\"#carousel-example-2\" data-slide-to=\"1\" class=\"\"></li>\n                                    <li data-target=\"#carousel-example-2\" data-slide-to=\"2\" class=\"\"></li>\n                                </ol>\n                                <!--Indicators-->\n\n                                <!--Slides-->\n                                <div class=\"carousel-inner\" role=\"listbox\">\n                                    <!--First slide-->\n                                    <div class=\"carousel-item carousel-item-next carousel-item-left\">\n                                        <!--Mask color-->\n                                        <div class=\"view hm-black-light\">\n                                            <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(126).jpg\" class=\"img-fluid\" alt=\"\">\n                                            <a href=\"#!\">\n                                                <div class=\"mask flex-center waves-effect waves-light\"></div>\n                                            </a>\n                                        </div>\n                                        <!--Caption-->\n                                        <div class=\"carousel-caption\">\n                                            <div class=\"animated fadeInDown\">\n                                                <h3 class=\"h3-responsive\"><a href=\"#!\" class=\"white-text\">Your health</a></h3>\n                                                <p><a href=\"#!\" class=\"white-text\">Take care of a your activity.</a></p>\n                                            </div>\n                                        </div>\n                                        <!--Caption-->\n                                    </div>\n                                    <!--First slide-->\n\n                                    <!--Second slide-->\n                                    <div class=\"carousel-item\">\n                                        <!--Mask color-->\n                                        <div class=\"view hm-black-light\">\n                                            <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(128).jpg\" class=\"img-fluid\" alt=\"\">\n                                            <a href=\"#!\">\n                                                <div class=\"mask flex-center waves-effect waves-light\"></div>\n                                            </a>\n                                        </div>\n                                        <!--Caption-->\n                                        <div class=\"carousel-caption\">\n                                            <div class=\"animated fadeInDown\">\n                                                <h3 class=\"h3-responsive\"><a href=\"#!\" class=\"white-text\">Sea adventure</a></h3>\n                                                <p><a href=\"#!\" class=\"white-text\">Harry's life in Australia.</a></p>\n                                            </div>\n                                        </div>\n                                        <!--Caption-->\n                                    </div>\n                                    <!--Second slide-->\n\n                                    <!--Third slide-->\n                                    <div class=\"carousel-item active carousel-item-left\">\n                                        <!--Mask color-->\n                                        <div class=\"view hm-black-light\">\n                                            <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(133).jpg\" class=\"img-fluid\" alt=\"\">\n                                            <a href=\"#!\">\n                                                <div class=\"mask flex-center waves-effect waves-light\"></div>\n                                            </a>\n                                        </div>\n                                        <!--Caption-->\n                                        <div class=\"carousel-caption\">\n                                            <div class=\"animated fadeInDown\">\n                                                <h3 class=\"h3-responsive\"><a href=\"#!\" class=\"white-text\">Beautiful interiors</a></h3>\n                                                <p><a href=\"#!\" class=\"white-text\">Meet beautiful Italian homes.</a></p>\n                                            </div>\n                                        </div>\n                                        <!--Caption-->\n                                    </div>\n                                    <!--Third slide-->\n                                </div>\n                                <!--Slides-->\n\n                                <!--Controls-->\n                                <a class=\"carousel-control-prev\" href=\"#carousel-example-2\" role=\"button\" data-slide=\"prev\">\n                                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                                    <span class=\"sr-only\">Previous</span>\n                                </a>\n                                <a class=\"carousel-control-next\" href=\"#carousel-example-2\" role=\"button\" data-slide=\"next\">\n                                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                                    <span class=\"sr-only\">Next</span>\n                                </a>\n                                <!--.Controls-->\n                            </div>\n                            <!--Carousel Wrapper-->\n                            \n                        </div>\n                        <!--Grid column-->\n                    </div>\n                    <!--Grid row-->\n                    \n                </section>\n                <!--Featured posts-->\n                \n                 <!--Sidebar-->\n\n                <div class=\"divider-new\">\n                    <h3 class=\"font-bold\">Categories:</h3>\n                </div>\n\n                <section class=\"widget-wrapper wow fadeIn\" data-wow-delay=\"0.4s\">\n\n                        <div class=\"list-group\">\n                            <a href=\"#\" class=\"list-group-item active\">Water supply pipe installation, renewal and repair</a>\n                            <a href=\"#\" class=\"list-group-item\">Water leak detection</a>\n                            <a href=\"#\" class=\"list-group-item\">Vented and Unvented Cylinder Installation and Problem Solving</a>\n                            <a href=\"#\" class=\"list-group-item\">Toilet installation, repair and replacement</a>\n                        </div>\n                </section>\n                \n                <!--/.Sidebar-->\n            </div>\n            <!--Sidebar-->\n        </div>\n        <!--Blog-->\n        \n    </div>\n</div>\n<foot ></foot>"

/***/ }),

/***/ "../../../../../src/app/components/app-blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogPageComponent = (function () {
    function BlogPageComponent() {
        // MdPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.Posts = [
            { title: 'Post title', subtitle: 'Secondary text', byperson: 'John Doe', datetime: '30.04.2016', image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(126).jpg', contain: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, officia omnis. Vero nihil neque dignissimos\n            hic voluptas quisquam amet porro, similique libero ullam veritatis tempora cumque voluptates\n            harum. Repellendus, impedit." },
            { title: 'Post title', subtitle: 'Secondary text', byperson: 'John Doe', datetime: '30.04.2016', image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(127).jpg', contain: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, officia omnis. Vero nihil neque dignissimos\n            hic voluptas quisquam amet porro, similique libero ullam veritatis tempora cumque voluptates\n            harum. Repellendus, impedit." },
            { title: 'Post title', subtitle: 'Secondary text', byperson: 'John Doe', datetime: '30.04.2016', image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(128).jpg', contain: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, officia omnis. Vero nihil neque dignissimos\n            hic voluptas quisquam amet porro, similique libero ullam veritatis tempora cumque voluptates\n            harum. Repellendus, impedit." },
        ];
    }
    BlogPageComponent.prototype.ngOnInit = function () {
        this.length = this.Posts.length;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    };
    BlogPageComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    return BlogPageComponent;
}());
BlogPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // selector: 'blog',
        template: __webpack_require__("../../../../../src/app/components/app-blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app-blog/blog.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BlogPageComponent);

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-blog/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blog_component__ = __webpack_require__("../../../../../src/app/components/app-blog/blog.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__blog_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-foot/foot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer.page-footer {\n    background-color: #1C2331;\n    margin-top: 0;\n    border-top: 4px solid #4285F4;\n}\ndiv ul.list-group {\n    padding-left: 27px !important;\n}\ndiv ul.list-group li {\n    padding-top: 2px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app-foot/foot.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer class=\"page-footer center-on-small-only\" *ngIf=\"pageType\" >\n        \n    <!--Footer Links-->\n    <!-- <div class=\"container-fluid\">\n        <div class=\"row\"> -->\n\n            <!--First column-->\n            <!-- <div class=\"col-md-3 offset-md-1 wow animated fadeIn\" data-wow-delay=\"0.6s\">\n                <h5 class=\"title\">Footer Content </h5>\n                <p>Here you can use rows and columns here to organize your footer content.</p>\n            </div> -->\n            <!--/.First column-->\n\n            <!-- <hr class=\"hidden-md-up\"> -->\n\n            <!--Second column-->\n            <!-- <div class=\"col-md-2 offset-md-1 wow animated fadeIn\" data-wow-delay=\"0.6s\">\n                <h5 class=\"title\">Links</h5>\n                <ul>\n                    <li><a href=\"#!\">Link 1</a></li>\n                    <li><a href=\"#!\">Link 2</a></li>\n                    <li><a href=\"#!\">Link 3</a></li>\n                    <li><a href=\"#!\">Link 4</a></li>\n                </ul>\n            </div> -->\n            <!--/.Second column-->\n\n            <!-- <hr class=\"hidden-md-up\"> -->\n\n            <!--Third column-->\n            <!-- <div class=\"col-md-2 wow animated fadeIn\" data-wow-delay=\"0.6s\">\n                <h5 class=\"title\">Links</h5>\n                <ul>\n                    <li><a href=\"#!\">Link 1</a></li>\n                    <li><a href=\"#!\">Link 2</a></li>\n                    <li><a href=\"#!\">Link 3</a></li>\n                    <li><a href=\"#!\">Link 4</a></li>\n                </ul>\n            </div> -->\n            <!--/.Third column-->\n\n            <!-- <hr class=\"hidden-md-up\"> -->\n\n            <!--Fourth column-->\n            <!-- <div class=\"col-md-2 wow animated fadeIn\" data-wow-delay=\"0.6s\"> -->\n                <!-- <h5 class=\"title\">Links</h5> -->\n                <!-- <ul> -->\n                    <!-- <li><a href=\"#!\">Link 1</a></li> -->\n                    <!-- <li><a href=\"#!\">Link 2</a></li> -->\n                    <!-- <li><a href=\"#!\">Link 3</a></li> -->\n                    <!-- <li><a href=\"#!\">Link 4</a></li> -->\n                <!-- </ul> -->\n            <!-- </div> -->\n            <!--/.Fourth column-->\n<!-- \n        </div>\n    </div> -->\n    <!--/.Footer Links-->\n\n    <hr>\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!--First column-->\n            <div class=\"col-md-3 offset-md-1 wow animated fadeIn\" data-wow-delay=\"0.6s\">\n                <h5 class=\"title\"><span style=\"font-size: 6%;\" class=\"badge badge-primary badge-pill\"><mat-icon class=\"mat-18\">link</mat-icon></span> WHAT WE DO </h5>\n               \n                    <ul style=\"list-style-type: initial;\" class=\"list-group\">\n                        <li class=\"\">\n                            <!-- <i  style=\"font-size: 85%;\" class=\"mat-18 material-icons\">hearing</i> -->\n                            All kinds of plumbing works are \n                            undertaken by qualified and licensed \n                            plumbers throughout London.\n                        </li>\n                        <li class=\"\">\n                            <!-- <i  style=\"font-size: 85%;\" class=\"mat-18 material-icons\">hearing</i> -->\n                            We give solution in your needs at water and heating sector.\n                        </li>\n                        <li class=\"\">\n                            <!-- <i  style=\"font-size: 85%;\" class=\"mat-18 material-icons\">hearing</i> -->\n                            Our goal is to serve you direct.\n                        </li>\n                        <li>\n                            For further information please <a style=\"text-decoration: underline;\" (click)=\"routerLink('contact')\" >contact</a> us.\n                        </li>\n                    </ul>\n            </div>\n            <!--/.First column-->\n\n            <hr class=\"hidden-md-up\">\n            <!--Call to action-->\n\n            <!--Second column-->\n            <div class=\"col-md-6 call-to-action wow animated fadeIn\" data-wow-delay=\"0.6s\">\n                <ul>\n                    <li >\n                       \n                        <!-- Search form -->\n                        <form  matTooltip=\"Type an email like: mail@example.com\" [matTooltipPosition]=\"'above'\" #subScribe=\"ngForm\" class=\"form-inline waves-light\" mdbRippleRadius novalidate>\n                                <input [attr.disabled]=\"emailicon.disabled? true : null\" [ngStyle]=\"toolTipError\" (ngmouseout)=\"emailChange('none')\" (ngModelChange)=\"emailChange()\"\n                                [(ngModel)]=\"emailicon.status\" type=\"email\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                                 name=\"email\" #email=\"ngModel\" class=\"form-control form-control mr-sm-2\"\n                                 placeholder=\"stay connected with us..\" aria-label=\"stay connected with us..\">\n                                \n                        </form>\n                    </li>\n                    <li><a mat-button (click)=\"subscribe()\" class=\"btn btn-danger\">Subscribe!</a></li>\n                    <li *ngIf=\"emailicon.used\" ><mat-icon class=\"mat-24\" style=\"border-radius: 50%;\" [ngStyle]=\"{'color': emailicon.color }\">{{emailicon.response}}</mat-icon></li>\n                </ul>\n            </div>\n            <!--/Second column-->\n        </div>\n    </div>\n    <!--/.Call to action-->\n\n    <hr>\n\n    <!--Social buttons-->\n    <div class=\"text-center mb-3 wow animated fadeIn\" data-wow-delay=\"0.6s\">\n\n        <a mdbRippleRadius class=\"btn-floating btn-small btn-fb waves-light\"><i class=\"fa fa-facebook\"> </i></a>\n        <a mdbRippleRadius class=\"btn-floating btn-small btn-tw  waves-light\"><i class=\"fa fa-twitter\"> </i></a>\n        <a mdbRippleRadius class=\"btn-floating btn-small btn-gplus  waves-light\"><i class=\"fa fa-google-plus\"> </i></a>\n        <a mdbRippleRadius class=\"btn-floating btn-small btn-li waves-light\"><i class=\"fa fa-linkedin\"> </i></a>\n        <!-- <a mdbRippleRadius class=\"btn-floating btn-small btn-git  waves-light\"><i class=\"fa fa-github\"> </i></a>\n        <a mdbRippleRadius class=\"btn-floating btn-small btn-pin  waves-light\"><i class=\"fa fa-pinterest\"> </i></a>\n        <a mdbRippleRadius class=\"btn-floating btn-small btn-ins waves-light\"><i class=\"fa fa-instagram\"> </i></a> -->\n\n    </div>\n    <!--/.Social buttons-->\n\n\n    <!-- \n        <div class=\"col-md-4 col-md-4\">\n                    \n        Title\n        <h5 class=\"title\">Opening hours</h5>\n        \n                            Opening hours table\n                            <table class=\"table\">\n                                <tbody>\n                                <tr>\n                                    <td>Mon - Thu:</td>\n                                    <td>8am - 9pm</td>\n                                </tr>\n                                <tr>\n                                    <td>Fri - Sat:</td>\n                                    <td>8am - 1am</td>\n                                </tr>\n                                <tr>\n                                    <td>Sunday:</td>\n                                    <td>9am - 10pm</td>\n                                </tr>\n                                </tbody>\n                            </table>\n        \n                        </div>\n     -->\n    <!--Copyright-->\n    <div class=\"footer-copyright\" data-wow-delay=\"0.6s\">\n        <div class=\"container-fluid\">\n                <i class=\"fa fa-copyright\" aria-hidden=\"true\"></i> 2017 Copyright: <a routerLink='/' > Technicalprb.com Ltd.</a> | \n                <a (click)=\"routerLink('privacy')\">Privacy Policy</a>\n        </div>\n    </div>\n    <!--/.Copyright-->\n\n</footer>\n\n<go-top-button [html]=\"'<i style=\\'line-height: 52px;\\' class=\\'fa fa-chevron-up\\' aria-hidden=\\'true\\'></i>'\"\n    [animate]=\"true\"\n    [speed]=\"50\"\n    [acceleration]=\"2\"\n    [scrollDistance]=\"500\"\n    [styles]=\"{\n        'bottom': '45px',\n        'right': '24px'\n    }\">\n</go-top-button>\n<!--/.Footer-->"

/***/ }),

/***/ "../../../../../src/app/components/app-foot/foot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FootComponent = (function () {
    function FootComponent(eS, emailServ) {
        this.eS = eS;
        this.emailServ = emailServ;
    }
    FootComponent.prototype.ngOnInit = function () {
        this.pageType = !/admin/.test(window.location.pathname) ? true : false;
        this.EmailIconInit();
    };
    FootComponent.prototype.emailStatus = function () {
        /* this.subScribe.control.get('email').valueChanges.subscribe( a => {
            console.log(a)
        }) */
    };
    /**
     * routerLink
     */
    FootComponent.prototype.routerLink = function (link) {
        this.eS.broadcast('routerLink', link);
    };
    /**
     * emailStyle
     */
    FootComponent.prototype.emailStyle = function (s) {
        var p = {};
        switch (s) {
            case 'error':
                p = {
                    'border-bottom': '1px solid #f44336',
                    'box-shadow': '0 1px 0 0 #f44336'
                };
                break;
            case 'valid':
                p = {
                    'border-bottom': '1px solid #4285F4',
                    'box-shadow': '0 1px 0 0 #4285F4'
                };
                break;
            default:
                p = {
                    'border-bottom': '1px solid #bdbdbd',
                    'box-shadow': 'none'
                };
                break;
        }
        return p;
    };
    /**
     * emailChange
     */
    FootComponent.prototype.emailChange = function (s) {
        if (!this.subScribe.valid) {
            this.toolTipError = this.emailStyle('error');
        }
        else if (s === 'none') {
            this.toolTipError = this.emailStyle(s);
        }
        else {
            this.toolTipError = this.emailStyle('valid');
        }
    };
    /**
     * Emal subscribe button
     */
    FootComponent.prototype.subscribe = function () {
        var _this = this;
        if (this.subScribe.valid) {
            // disable input
            this.emailicon.disabled = !0;
            this.emailServ.subScribe(this.subScribe.controls.email.value).subscribe(function (res) {
                console.log(res);
                _this.setEmailIcon('done', 'green', true);
                setTimeout(function () { _this.EmailIconInit(); }, 3000);
            }, function (error) {
                console.log(error);
                _this.setEmailIcon('error_outline', 'red', true);
                setTimeout(function () { _this.EmailIconInit(); }, 3000);
            });
        }
    };
    FootComponent.prototype.setEmailIcon = function (res, color, used) {
        this.emailicon.used = used;
        this.emailicon.response = res;
        this.emailicon.color = color;
    };
    FootComponent.prototype.EmailIconInit = function () { this.emailicon = { status: '', response: '', color: '', used: false, disabled: false }; };
    return FootComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('subScribe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"]) === "function" && _a || Object)
], FootComponent.prototype, "subScribe", void 0);
FootComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'foot',
        template: __webpack_require__("../../../../../src/app/components/app-foot/foot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app-foot/foot.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* EventsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* EmailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* EmailsService */]) === "function" && _c || Object])
], FootComponent);

var _a, _b, _c;
//# sourceMappingURL=foot.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-foot/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foot_component__ = __webpack_require__("../../../../../src/app/components/app-foot/foot.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__foot_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Caption*/\n\n.flex-center {\n    color: #fff;\n}\n/* AGM Google Map  */\nagm-map {\n    height: 300px;\n}\n\n\n\nmat-chip {\n    max-width: 200px;\n  }\n\n  .ta-heading p {\n     margin: 13px 0px 40px !important;\n  }\n  .ta-heading .ta-heading-inner {\n    padding: 0 !important;\n  }\n  hr.star-light {\n    border-color: #18bc9c !important;\n  }\n  hr.star-light, hr.star-primary {\n    max-width: 250px;\n    margin: 25px auto 30px;\n    padding: 0;\n    text-align: center;\n    border: none;\n    border-top: solid 5px;\n  }\n  \n  hr.star-light:after {\n    color: #fff;\n    background-color: #18bc9c;\n  }\n  \n  hr.star-light:after, hr.star-primary:after {\n    font-family: FontAwesome;\n    font-size: 2em;\n    position: relative;\n    top: -.8em;\n    display: inline-block;\n    padding: 0 .25em;\n    content: '\\F2B5';\n  }\n  .carousel-item.active {\n\n    overflow: inherit !important;\n}\n  \n.ta-heading p {\n    font-size: 11px;\n    letter-spacing: 0.1em;\n    margin: -10px 0 40px;\n    opacity: 0.9;\n    text-align: center;\n    text-transform: uppercase;\n}\n\nh1 span, h2 span, h3 span, h4 span, h5 span, h6 span {\n    color: #f44336;\n}\n\n\n.ta-heading .ta-heading-inner {\n    position: relative;\n    display: inline-block;\n    margin-bottom: 0;\n    padding: 0 0 18px;\n    line-height: 40px;\n    text-transform: capitalize;\n    width: auto;\n}\n\n.ta-heading h2, .ta-heading h2 a {\n    color: #212121;\n}\n\n.ta-heading {\n    margin-bottom: -17px;\n    text-align: center;\n}\n\n.ta-heading h1, .ta-heading h2 {\n    font-size: 36px;\n    font-weight: 600;\n    letter-spacing: -0.05em;\n    line-height: normal;\n    margin: 0 0 15px;\n    overflow-wrap: break-word;\n    text-align: center;\n}\n\nimg {\n    display: block;\n  }\n  \n  .gallery {\n    position: relative;\n    z-index: 2;\n    padding: 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row wrap;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    transition: all .5s ease-in-out;\n  }\n  .gallery.pop {\n    -webkit-filter: blur(10px);\n            filter: blur(10px);\n  }\n  .gallery figure {\n    -ms-flex-preferred-size: 33.333%;\n        flex-basis: 33.333%;\n    padding: 10px;\n    overflow: hidden;\n    border-radius: 10px;\n    cursor: pointer;\n  }\n  .gallery figure img {\n    width: 100%;\n    border-radius: 10px;\n    transition: all .3s ease-in-out;\n  }\n  .gallery figure figcaption {\n    display: none;\n  }\n  \n  .popup {\n    position: fixed;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(255, 255, 255, 0.75);\n    opacity: 0;\n    transition: opacity .5s ease-in-out .2s;\n  }\n  .popup.pop {\n    opacity: 1;\n    transition: opacity .2s ease-in-out 0s;\n  }\n  .popup.pop figure {\n    margin-top: 0;\n    opacity: 1;\n  }\n  .popup figure {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    margin-top: 30px;\n    opacity: 0;\n    -webkit-animation: poppy 500ms linear both;\n            animation: poppy 500ms linear both;\n  }\n  .popup figure img {\n    position: relative;\n    z-index: 2;\n    border-radius: 15px;\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 6px 30px rgba(0, 0, 0, 0.4);\n  }\n  .popup figure figcaption {\n    position: absolute;\n    bottom: 50px;\n    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.78));\n    z-index: 2;\n    width: 100%;\n    border-radius: 0 0 15px 15px;\n    padding: 100px 20px 20px 20px;\n    color: #fff;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 32px;\n  }\n  .popup figure figcaption small {\n    font-size: 11px;\n    display: block;\n    text-transform: uppercase;\n    margin-top: 12px;\n    text-indent: 3px;\n    opacity: .7;\n    letter-spacing: 1px;\n  }\n  .popup figure .shadow {\n    position: relative;\n    z-index: 1;\n    top: -15px;\n    margin: 0 auto;\n    background-position: center bottom;\n    background-repeat: no-repeat;\n    width: 98%;\n    height: 50px;\n    opacity: .6;\n    -webkit-filter: blur(15px) contrast(2);\n            filter: blur(15px) contrast(2);\n  }\n  .popup .close {\n    position: absolute;\n    z-index: 3;\n    top: 10px;\n    right: 10px;\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n    background: url(#close);\n    border-radius: 25px;\n    background: rgba(0, 0, 0, 0.1);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n  }\n  .popup .close svg {\n    width: 100%;\n    height: 100%;\n  }\n  \n  @-webkit-keyframes poppy {\n    0% {\n      -webkit-transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n              transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    }\n    3.4% {\n      -webkit-transform: matrix3d(0.316, 0, 0, 0, 0, 0.407, 0, 0, 0, 0, 1, 0, -94.672, -91.573, 0, 1);\n              transform: matrix3d(0.316, 0, 0, 0, 0, 0.407, 0, 0, 0, 0, 1, 0, -94.672, -91.573, 0, 1);\n    }\n    4.3% {\n      -webkit-transform: matrix3d(0.408, 0, 0, 0, 0, 0.54, 0, 0, 0, 0, 1, 0, -122.527, -121.509, 0, 1);\n              transform: matrix3d(0.408, 0, 0, 0, 0, 0.54, 0, 0, 0, 0, 1, 0, -122.527, -121.509, 0, 1);\n    }\n    4.7% {\n      -webkit-transform: matrix3d(0.45, 0, 0, 0, 0, 0.599, 0, 0, 0, 0, 1, 0, -134.908, -134.843, 0, 1);\n              transform: matrix3d(0.45, 0, 0, 0, 0, 0.599, 0, 0, 0, 0, 1, 0, -134.908, -134.843, 0, 1);\n    }\n    6.81% {\n      -webkit-transform: matrix3d(0.659, 0, 0, 0, 0, 0.893, 0, 0, 0, 0, 1, 0, -197.77, -200.879, 0, 1);\n              transform: matrix3d(0.659, 0, 0, 0, 0, 0.893, 0, 0, 0, 0, 1, 0, -197.77, -200.879, 0, 1);\n    }\n    8.61% {\n      -webkit-transform: matrix3d(0.82, 0, 0, 0, 0, 1.097, 0, 0, 0, 0, 1, 0, -245.972, -246.757, 0, 1);\n              transform: matrix3d(0.82, 0, 0, 0, 0, 1.097, 0, 0, 0, 0, 1, 0, -245.972, -246.757, 0, 1);\n    }\n    9.41% {\n      -webkit-transform: matrix3d(0.883, 0, 0, 0, 0, 1.168, 0, 0, 0, 0, 1, 0, -265.038, -262.804, 0, 1);\n              transform: matrix3d(0.883, 0, 0, 0, 0, 1.168, 0, 0, 0, 0, 1, 0, -265.038, -262.804, 0, 1);\n    }\n    10.21% {\n      -webkit-transform: matrix3d(0.942, 0, 0, 0, 0, 1.226, 0, 0, 0, 0, 1, 0, -282.462, -275.93, 0, 1);\n              transform: matrix3d(0.942, 0, 0, 0, 0, 1.226, 0, 0, 0, 0, 1, 0, -282.462, -275.93, 0, 1);\n    }\n    12.91% {\n      -webkit-transform: matrix3d(1.094, 0, 0, 0, 0, 1.328, 0, 0, 0, 0, 1, 0, -328.332, -298.813, 0, 1);\n              transform: matrix3d(1.094, 0, 0, 0, 0, 1.328, 0, 0, 0, 0, 1, 0, -328.332, -298.813, 0, 1);\n    }\n    13.61% {\n      -webkit-transform: matrix3d(1.123, 0, 0, 0, 0, 1.332, 0, 0, 0, 0, 1, 0, -336.934, -299.783, 0, 1);\n              transform: matrix3d(1.123, 0, 0, 0, 0, 1.332, 0, 0, 0, 0, 1, 0, -336.934, -299.783, 0, 1);\n    }\n    14.11% {\n      -webkit-transform: matrix3d(1.141, 0, 0, 0, 0, 1.331, 0, 0, 0, 0, 1, 0, -342.273, -299.395, 0, 1);\n              transform: matrix3d(1.141, 0, 0, 0, 0, 1.331, 0, 0, 0, 0, 1, 0, -342.273, -299.395, 0, 1);\n    }\n    17.22% {\n      -webkit-transform: matrix3d(1.205, 0, 0, 0, 0, 1.252, 0, 0, 0, 0, 1, 0, -361.606, -281.592, 0, 1);\n              transform: matrix3d(1.205, 0, 0, 0, 0, 1.252, 0, 0, 0, 0, 1, 0, -361.606, -281.592, 0, 1);\n    }\n    17.52% {\n      -webkit-transform: matrix3d(1.208, 0, 0, 0, 0, 1.239, 0, 0, 0, 0, 1, 0, -362.348, -278.88, 0, 1);\n              transform: matrix3d(1.208, 0, 0, 0, 0, 1.239, 0, 0, 0, 0, 1, 0, -362.348, -278.88, 0, 1);\n    }\n    18.72% {\n      -webkit-transform: matrix3d(1.212, 0, 0, 0, 0, 1.187, 0, 0, 0, 0, 1, 0, -363.633, -267.15, 0, 1);\n              transform: matrix3d(1.212, 0, 0, 0, 0, 1.187, 0, 0, 0, 0, 1, 0, -363.633, -267.15, 0, 1);\n    }\n    21.32% {\n      -webkit-transform: matrix3d(1.196, 0, 0, 0, 0, 1.069, 0, 0, 0, 0, 1, 0, -358.864, -240.617, 0, 1);\n              transform: matrix3d(1.196, 0, 0, 0, 0, 1.069, 0, 0, 0, 0, 1, 0, -358.864, -240.617, 0, 1);\n    }\n    24.32% {\n      -webkit-transform: matrix3d(1.151, 0, 0, 0, 0, 0.96, 0, 0, 0, 0, 1, 0, -345.164, -216.073, 0, 1);\n              transform: matrix3d(1.151, 0, 0, 0, 0, 0.96, 0, 0, 0, 0, 1, 0, -345.164, -216.073, 0, 1);\n    }\n    25.23% {\n      -webkit-transform: matrix3d(1.134, 0, 0, 0, 0, 0.938, 0, 0, 0, 0, 1, 0, -340.193, -210.948, 0, 1);\n              transform: matrix3d(1.134, 0, 0, 0, 0, 0.938, 0, 0, 0, 0, 1, 0, -340.193, -210.948, 0, 1);\n    }\n    28.33% {\n      -webkit-transform: matrix3d(1.075, 0, 0, 0, 0, 0.898, 0, 0, 0, 0, 1, 0, -322.647, -202.048, 0, 1);\n              transform: matrix3d(1.075, 0, 0, 0, 0, 0.898, 0, 0, 0, 0, 1, 0, -322.647, -202.048, 0, 1);\n    }\n    29.03% {\n      -webkit-transform: matrix3d(1.063, 0, 0, 0, 0, 0.897, 0, 0, 0, 0, 1, 0, -318.884, -201.771, 0, 1);\n              transform: matrix3d(1.063, 0, 0, 0, 0, 0.897, 0, 0, 0, 0, 1, 0, -318.884, -201.771, 0, 1);\n    }\n    29.93% {\n      -webkit-transform: matrix3d(1.048, 0, 0, 0, 0, 0.899, 0, 0, 0, 0, 1, 0, -314.277, -202.202, 0, 1);\n              transform: matrix3d(1.048, 0, 0, 0, 0, 0.899, 0, 0, 0, 0, 1, 0, -314.277, -202.202, 0, 1);\n    }\n    35.54% {\n      -webkit-transform: matrix3d(0.979, 0, 0, 0, 0, 0.962, 0, 0, 0, 0, 1, 0, -293.828, -216.499, 0, 1);\n              transform: matrix3d(0.979, 0, 0, 0, 0, 0.962, 0, 0, 0, 0, 1, 0, -293.828, -216.499, 0, 1);\n    }\n    36.74% {\n      -webkit-transform: matrix3d(0.972, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, -291.489, -220.242, 0, 1);\n              transform: matrix3d(0.972, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, -291.489, -220.242, 0, 1);\n    }\n    39.44% {\n      -webkit-transform: matrix3d(0.962, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1, 0, -288.62, -227.228, 0, 1);\n              transform: matrix3d(0.962, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1, 0, -288.62, -227.228, 0, 1);\n    }\n    41.04% {\n      -webkit-transform: matrix3d(0.961, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, -288.247, -229.999, 0, 1);\n              transform: matrix3d(0.961, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, -288.247, -229.999, 0, 1);\n    }\n    44.44% {\n      -webkit-transform: matrix3d(0.966, 0, 0, 0, 0, 1.032, 0, 0, 0, 0, 1, 0, -289.763, -232.215, 0, 1);\n              transform: matrix3d(0.966, 0, 0, 0, 0, 1.032, 0, 0, 0, 0, 1, 0, -289.763, -232.215, 0, 1);\n    }\n    52.15% {\n      -webkit-transform: matrix3d(0.991, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, -297.363, -226.449, 0, 1);\n              transform: matrix3d(0.991, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, -297.363, -226.449, 0, 1);\n    }\n    59.86% {\n      -webkit-transform: matrix3d(1.006, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, -301.813, -222.759, 0, 1);\n              transform: matrix3d(1.006, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, -301.813, -222.759, 0, 1);\n    }\n    61.66% {\n      -webkit-transform: matrix3d(1.007, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, -302.102, -222.926, 0, 1);\n              transform: matrix3d(1.007, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, -302.102, -222.926, 0, 1);\n    }\n    63.26% {\n      -webkit-transform: matrix3d(1.007, 0, 0, 0, 0, 0.992, 0, 0, 0, 0, 1, 0, -302.171, -223.276, 0, 1);\n              transform: matrix3d(1.007, 0, 0, 0, 0, 0.992, 0, 0, 0, 0, 1, 0, -302.171, -223.276, 0, 1);\n    }\n    75.28% {\n      -webkit-transform: matrix3d(1.001, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, -300.341, -225.696, 0, 1);\n              transform: matrix3d(1.001, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, -300.341, -225.696, 0, 1);\n    }\n    83.98% {\n      -webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -299.61, -225.049, 0, 1);\n              transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -299.61, -225.049, 0, 1);\n    }\n    85.49% {\n      -webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -299.599, -224.94, 0, 1);\n              transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -299.599, -224.94, 0, 1);\n    }\n    90.69% {\n      -webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, -299.705, -224.784, 0, 1);\n              transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, -299.705, -224.784, 0, 1);\n    }\n    100% {\n      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -300, -225, 0, 1);\n              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -300, -225, 0, 1);\n    }\n  }\n  \n  @keyframes poppy {\n    0% {\n      -webkit-transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n              transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    }\n    3.4% {\n      -webkit-transform: matrix3d(0.316, 0, 0, 0, 0, 0.407, 0, 0, 0, 0, 1, 0, -94.672, -91.573, 0, 1);\n              transform: matrix3d(0.316, 0, 0, 0, 0, 0.407, 0, 0, 0, 0, 1, 0, -94.672, -91.573, 0, 1);\n    }\n    4.3% {\n      -webkit-transform: matrix3d(0.408, 0, 0, 0, 0, 0.54, 0, 0, 0, 0, 1, 0, -122.527, -121.509, 0, 1);\n              transform: matrix3d(0.408, 0, 0, 0, 0, 0.54, 0, 0, 0, 0, 1, 0, -122.527, -121.509, 0, 1);\n    }\n    4.7% {\n      -webkit-transform: matrix3d(0.45, 0, 0, 0, 0, 0.599, 0, 0, 0, 0, 1, 0, -134.908, -134.843, 0, 1);\n              transform: matrix3d(0.45, 0, 0, 0, 0, 0.599, 0, 0, 0, 0, 1, 0, -134.908, -134.843, 0, 1);\n    }\n    6.81% {\n      -webkit-transform: matrix3d(0.659, 0, 0, 0, 0, 0.893, 0, 0, 0, 0, 1, 0, -197.77, -200.879, 0, 1);\n              transform: matrix3d(0.659, 0, 0, 0, 0, 0.893, 0, 0, 0, 0, 1, 0, -197.77, -200.879, 0, 1);\n    }\n    8.61% {\n      -webkit-transform: matrix3d(0.82, 0, 0, 0, 0, 1.097, 0, 0, 0, 0, 1, 0, -245.972, -246.757, 0, 1);\n              transform: matrix3d(0.82, 0, 0, 0, 0, 1.097, 0, 0, 0, 0, 1, 0, -245.972, -246.757, 0, 1);\n    }\n    9.41% {\n      -webkit-transform: matrix3d(0.883, 0, 0, 0, 0, 1.168, 0, 0, 0, 0, 1, 0, -265.038, -262.804, 0, 1);\n              transform: matrix3d(0.883, 0, 0, 0, 0, 1.168, 0, 0, 0, 0, 1, 0, -265.038, -262.804, 0, 1);\n    }\n    10.21% {\n      -webkit-transform: matrix3d(0.942, 0, 0, 0, 0, 1.226, 0, 0, 0, 0, 1, 0, -282.462, -275.93, 0, 1);\n              transform: matrix3d(0.942, 0, 0, 0, 0, 1.226, 0, 0, 0, 0, 1, 0, -282.462, -275.93, 0, 1);\n    }\n    12.91% {\n      -webkit-transform: matrix3d(1.094, 0, 0, 0, 0, 1.328, 0, 0, 0, 0, 1, 0, -328.332, -298.813, 0, 1);\n              transform: matrix3d(1.094, 0, 0, 0, 0, 1.328, 0, 0, 0, 0, 1, 0, -328.332, -298.813, 0, 1);\n    }\n    13.61% {\n      -webkit-transform: matrix3d(1.123, 0, 0, 0, 0, 1.332, 0, 0, 0, 0, 1, 0, -336.934, -299.783, 0, 1);\n              transform: matrix3d(1.123, 0, 0, 0, 0, 1.332, 0, 0, 0, 0, 1, 0, -336.934, -299.783, 0, 1);\n    }\n    14.11% {\n      -webkit-transform: matrix3d(1.141, 0, 0, 0, 0, 1.331, 0, 0, 0, 0, 1, 0, -342.273, -299.395, 0, 1);\n              transform: matrix3d(1.141, 0, 0, 0, 0, 1.331, 0, 0, 0, 0, 1, 0, -342.273, -299.395, 0, 1);\n    }\n    17.22% {\n      -webkit-transform: matrix3d(1.205, 0, 0, 0, 0, 1.252, 0, 0, 0, 0, 1, 0, -361.606, -281.592, 0, 1);\n              transform: matrix3d(1.205, 0, 0, 0, 0, 1.252, 0, 0, 0, 0, 1, 0, -361.606, -281.592, 0, 1);\n    }\n    17.52% {\n      -webkit-transform: matrix3d(1.208, 0, 0, 0, 0, 1.239, 0, 0, 0, 0, 1, 0, -362.348, -278.88, 0, 1);\n              transform: matrix3d(1.208, 0, 0, 0, 0, 1.239, 0, 0, 0, 0, 1, 0, -362.348, -278.88, 0, 1);\n    }\n    18.72% {\n      -webkit-transform: matrix3d(1.212, 0, 0, 0, 0, 1.187, 0, 0, 0, 0, 1, 0, -363.633, -267.15, 0, 1);\n              transform: matrix3d(1.212, 0, 0, 0, 0, 1.187, 0, 0, 0, 0, 1, 0, -363.633, -267.15, 0, 1);\n    }\n    21.32% {\n      -webkit-transform: matrix3d(1.196, 0, 0, 0, 0, 1.069, 0, 0, 0, 0, 1, 0, -358.864, -240.617, 0, 1);\n              transform: matrix3d(1.196, 0, 0, 0, 0, 1.069, 0, 0, 0, 0, 1, 0, -358.864, -240.617, 0, 1);\n    }\n    24.32% {\n      -webkit-transform: matrix3d(1.151, 0, 0, 0, 0, 0.96, 0, 0, 0, 0, 1, 0, -345.164, -216.073, 0, 1);\n              transform: matrix3d(1.151, 0, 0, 0, 0, 0.96, 0, 0, 0, 0, 1, 0, -345.164, -216.073, 0, 1);\n    }\n    25.23% {\n      -webkit-transform: matrix3d(1.134, 0, 0, 0, 0, 0.938, 0, 0, 0, 0, 1, 0, -340.193, -210.948, 0, 1);\n              transform: matrix3d(1.134, 0, 0, 0, 0, 0.938, 0, 0, 0, 0, 1, 0, -340.193, -210.948, 0, 1);\n    }\n    28.33% {\n      -webkit-transform: matrix3d(1.075, 0, 0, 0, 0, 0.898, 0, 0, 0, 0, 1, 0, -322.647, -202.048, 0, 1);\n              transform: matrix3d(1.075, 0, 0, 0, 0, 0.898, 0, 0, 0, 0, 1, 0, -322.647, -202.048, 0, 1);\n    }\n    29.03% {\n      -webkit-transform: matrix3d(1.063, 0, 0, 0, 0, 0.897, 0, 0, 0, 0, 1, 0, -318.884, -201.771, 0, 1);\n              transform: matrix3d(1.063, 0, 0, 0, 0, 0.897, 0, 0, 0, 0, 1, 0, -318.884, -201.771, 0, 1);\n    }\n    29.93% {\n      -webkit-transform: matrix3d(1.048, 0, 0, 0, 0, 0.899, 0, 0, 0, 0, 1, 0, -314.277, -202.202, 0, 1);\n              transform: matrix3d(1.048, 0, 0, 0, 0, 0.899, 0, 0, 0, 0, 1, 0, -314.277, -202.202, 0, 1);\n    }\n    35.54% {\n      -webkit-transform: matrix3d(0.979, 0, 0, 0, 0, 0.962, 0, 0, 0, 0, 1, 0, -293.828, -216.499, 0, 1);\n              transform: matrix3d(0.979, 0, 0, 0, 0, 0.962, 0, 0, 0, 0, 1, 0, -293.828, -216.499, 0, 1);\n    }\n    36.74% {\n      -webkit-transform: matrix3d(0.972, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, -291.489, -220.242, 0, 1);\n              transform: matrix3d(0.972, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, -291.489, -220.242, 0, 1);\n    }\n    39.44% {\n      -webkit-transform: matrix3d(0.962, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1, 0, -288.62, -227.228, 0, 1);\n              transform: matrix3d(0.962, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1, 0, -288.62, -227.228, 0, 1);\n    }\n    41.04% {\n      -webkit-transform: matrix3d(0.961, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, -288.247, -229.999, 0, 1);\n              transform: matrix3d(0.961, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, -288.247, -229.999, 0, 1);\n    }\n    44.44% {\n      -webkit-transform: matrix3d(0.966, 0, 0, 0, 0, 1.032, 0, 0, 0, 0, 1, 0, -289.763, -232.215, 0, 1);\n              transform: matrix3d(0.966, 0, 0, 0, 0, 1.032, 0, 0, 0, 0, 1, 0, -289.763, -232.215, 0, 1);\n    }\n    52.15% {\n      -webkit-transform: matrix3d(0.991, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, -297.363, -226.449, 0, 1);\n              transform: matrix3d(0.991, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, -297.363, -226.449, 0, 1);\n    }\n    59.86% {\n      -webkit-transform: matrix3d(1.006, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, -301.813, -222.759, 0, 1);\n              transform: matrix3d(1.006, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, -301.813, -222.759, 0, 1);\n    }\n    61.66% {\n      -webkit-transform: matrix3d(1.007, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, -302.102, -222.926, 0, 1);\n              transform: matrix3d(1.007, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, -302.102, -222.926, 0, 1);\n    }\n    63.26% {\n      -webkit-transform: matrix3d(1.007, 0, 0, 0, 0, 0.992, 0, 0, 0, 0, 1, 0, -302.171, -223.276, 0, 1);\n              transform: matrix3d(1.007, 0, 0, 0, 0, 0.992, 0, 0, 0, 0, 1, 0, -302.171, -223.276, 0, 1);\n    }\n    75.28% {\n      -webkit-transform: matrix3d(1.001, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, -300.341, -225.696, 0, 1);\n              transform: matrix3d(1.001, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, -300.341, -225.696, 0, 1);\n    }\n    83.98% {\n      -webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -299.61, -225.049, 0, 1);\n              transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -299.61, -225.049, 0, 1);\n    }\n    85.49% {\n      -webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -299.599, -224.94, 0, 1);\n              transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -299.599, -224.94, 0, 1);\n    }\n    90.69% {\n      -webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, -299.705, -224.784, 0, 1);\n              transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, -299.705, -224.784, 0, 1);\n    }\n    100% {\n      -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -300, -225, 0, 1);\n              transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -300, -225, 0, 1);\n    }\n  }\n\n  p {\n    font-size: 20px; }\n  \n  p.small {\n    font-size: 16px; }\n  \n  a,\n  a.active,\n  a:active,\n  a:focus,\n  a:hover {\n    color: #18BC9C;\n    outline: none; }\n  \n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    text-transform: uppercase; }\n  \n  hr.star-light,\n  hr.star-primary {\n    max-width: 250px;\n    margin: 25px auto 30px;\n    padding: 0;\n    text-align: center;\n    border: none;\n    border-top: solid 5px; }\n  \n  hr.star-light:after,\n  hr.star-primary:after {\n    font-family: FontAwesome;\n    font-size: 2em;\n    position: relative;\n    top: -.8em;\n    display: inline-block;\n    padding: 0 0.25em;\n    content: '\\F005'; }\n  \n  hr.star-light {\n    border-color: white; }\n  \n  hr.star-light:after {\n    color: white;\n    background-color: #18BC9C; }\n  \n  hr.star-primary {\n    border-color: #2C3E50; }\n  \n  hr.star-primary:after {\n    color: #2C3E50;\n    background-color: white; }\n  \n  .img-centered {\n    margin: 0 auto; }\n  \n  /* section {\n    padding: 100px 0; \n  } */\n    section h2 {\n      font-size: 3em;\n      margin: 0; }\n  \n  section.success {\n    color: white;\n    background: #18BC9C; }\n  \n  @media (max-width: 768px) {\n\n#grid1 .view.intro {\n  min-height: 1000px;\n}\n\n    \n    section.first {\n      padding-top: 75px; } }\n  \n  .scroll-top {\n    position: fixed;\n    z-index: 1049;\n    right: 2%;\n    bottom: 2%;\n    width: 50px;\n    height: 50px; }\n    .scroll-top .btn {\n      font-size: 16px;\n      line-height: 28px;\n      width: 50px;\n      height: 50px;\n      text-align: center;\n      border-radius: 100%; }\n      .scroll-top .btn:focus {\n        outline: none; }\n  \n  #mainNav {\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    text-transform: uppercase;\n    border: none;\n    background: #2C3E50; }\n    #mainNav a:focus {\n      outline: none; }\n    #mainNav .navbar-brand {\n      font-size: 1.1rem;\n      color: white; }\n      #mainNav .navbar-brand.active, #mainNav .navbar-brand:active, #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\n        color: white; }\n    #mainNav .navbar-nav {\n      letter-spacing: 1px; }\n      #mainNav .navbar-nav li.nav-item a.nav-link {\n        color: white; }\n        #mainNav .navbar-nav li.nav-item a.nav-link:hover {\n          color: #18BC9C;\n          outline: none; }\n        #mainNav .navbar-nav li.nav-item a.nav-link:active, #mainNav .navbar-nav li.nav-item a.nav-link:focus {\n          color: white; }\n    #mainNav .navbar-toggler {\n      font-size: 14px;\n      padding: 11px;\n      text-transform: uppercase;\n      color: white;\n      border-color: white; }\n      #mainNav .navbar-toggler:focus, #mainNav .navbar-toggler:hover {\n        color: white;\n        border-color: #18BC9C;\n        background-color: #18BC9C; }\n  \n  @media (min-width: 992px) {\n    #mainNav {\n      padding-top: 25px;\n      padding-bottom: 25px;\n      transition: padding-top 0.3s, padding-bottom 0.3s; }\n      #mainNav .navbar-brand {\n        font-size: 2em;\n        transition: all 0.3s; }\n      #mainNav .navbar-nav > li.nav-item > a.nav-link.active {\n        color: white;\n        border-radius: 3px;\n        background: #18BC9C; }\n        #mainNav .navbar-nav > li.nav-item > a.nav-link.active:active, #mainNav .navbar-nav > li.nav-item > a.nav-link.active:focus, #mainNav .navbar-nav > li.nav-item > a.nav-link.active:hover {\n          color: white;\n          background: #18BC9C; }\n    #mainNav.navbar-shrink {\n      padding-top: 10px;\n      padding-bottom: 10px; }\n      #mainNav.navbar-shrink .navbar-brand {\n        font-size: 1.5em; } }\n  \n  header.masthead {\n    padding-top: 100px;\n    padding-bottom: 50px;\n    text-align: center;\n    color: white;\n    background: #18BC9C; }\n    header.masthead img {\n      display: block;\n      margin: 0 auto 20px; }\n    header.masthead .intro-text .name {\n      font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n      font-size: 2em;\n      font-weight: 700;\n      display: block;\n      text-transform: uppercase; }\n    header.masthead .intro-text .skills {\n      font-size: 1.25em;\n      font-weight: 300; }\n  \n  @media (min-width: 768px) {\n    header.masthead {\n      padding-top: 200px;\n      padding-bottom: 100px; }\n      header.masthead .intro-text .name {\n        font-size: 4.75em; }\n      header.masthead .intro-text .skills {\n        font-size: 1.75em; } }\n  \n  #portfolio .portfolio-item {\n    right: 0;\n    margin: 0 0 15px; }\n    #portfolio .portfolio-item .portfolio-link {\n      position: relative;\n      display: block;\n      max-width: 400px;\n      margin: 0 auto;\n      cursor: pointer; }\n      #portfolio .portfolio-item .portfolio-link .caption {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        transition: all ease 0.5s;\n        opacity: 0;\n        background: rgba(24, 188, 156, 0.9); }\n        #portfolio .portfolio-item .portfolio-link .caption:hover {\n          opacity: 1; }\n        #portfolio .portfolio-item .portfolio-link .caption .caption-content {\n          font-size: 20px;\n          position: absolute;\n          top: 50%;\n          width: 100%;\n          height: 20px;\n          margin-top: -12px;\n          text-align: center;\n          color: white; }\n          #portfolio .portfolio-item .portfolio-link .caption .caption-content i {\n            margin-top: -12px; }\n          #portfolio .portfolio-item .portfolio-link .caption .caption-content h3,\n          #portfolio .portfolio-item .portfolio-link .caption .caption-content h4 {\n            margin: 0; }\n  \n  #portfolio * {\n    z-index: 0; }\n  \n  @media (min-width: 767px) {\n    \n#grid1 .view.intro {\n  min-height: 500px;\n}\n    #portfolio .portfolio-item {\n      margin: 0 0 30px; } }\n  \n  .portfolio-modal .modal-dialog {\n    max-width: 100%;\n    min-height: 100%;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n    border: none;\n    border-radius: 0;\n    background-clip: border-box;\n    box-shadow: none; }\n    .portfolio-modal .modal-dialog .modal-content {\n      padding: 20px 0;\n      border: 0;\n      border-radius: 0; }\n      .portfolio-modal .modal-dialog .modal-content h2 {\n        font-size: 3em;\n        margin: 0; }\n      .portfolio-modal .modal-dialog .modal-content img {\n        margin-bottom: 30px; cursor: pointer; }\n      .portfolio-modal .modal-dialog .modal-content .item-details {\n        margin: 30px 0; }\n  \n  .portfolio-modal .close-modal {\n    position: absolute;\n    top: 25px;\n    right: 25px;\n    width: 75px;\n    height: 75px;\n    cursor: pointer;\n    background-color: transparent; }\n    .portfolio-modal .next-modal, .portfolio-modal .prev-modal {\n      position: absolute;\n      top: 198px;\n      right: 87px;\n      width: 75px;\n      height: 75px;\n      cursor: pointer;\n      background-color: transparent; \n    }\n    \n    .nav-right:hover, .nav-left:hover .portfolio-modal .close-modal:hover {\n      opacity: 0.3; }\n\n    .portfolio-modal .close-modal .lr {\n      /* Safari and Chrome */\n      z-index: 1051;\n      width: 1px;\n      height: 75px;\n      margin-left: 35px;\n      /* IE 9 */\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      background-color: #2C3E50; }\n      .portfolio-modal .close-modal .lr .rl {\n        /* Safari and Chrome */\n        z-index: 1052;\n        width: 1px;\n        height: 75px;\n        /* IE 9 */\n        -webkit-transform: rotate(90deg);\n        transform: rotate(90deg);\n        background-color: #2C3E50; }\n        .portfolio-modal .next-modal .up {\n          /* Safari and Chrome */\n          z-index: 1051;\n          width: 1px;\n          height: 75px;\n          margin-left: 35px;\n          -webkit-transform: rotate(45deg) translate(91px, -10px);\n          transform: rotate(45deg) translate(91px, -10px);\n          background-color: #2C3E50; }\n\n          .portfolio-modal .prev-modal .up {\n          /* Safari and Chrome */\n          z-index: 1051;\n          width: 1px;\n          height: 75px;\n          margin-left: 35px;\n          -webkit-transform: rotate(-45deg) translate(-42px, 41px);\n          transform: rotate(-45deg) translate(-42px, 41px);\n          background-color: #2C3E50;}\n\n          .portfolio-modal .next-modal .down {\n            /* Safari and Chrome */\n            z-index: 1052;\n            width: 1px;\n            height: 75px;\n            /* IE 9 */\n            -webkit-transform: rotate(-45deg) translate(50px, 100px);\n            transform: rotate(-45deg) translate(50px, 100px);\n            background-color: #2C3E50; }\n\n            .portfolio-modal .prev-modal .down {\n              /* Safari and Chrome */\n              z-index: 1052;\n              width: 1px;\n              height: 75px;\n              /* IE 9 */\n              -webkit-transform: rotate(45deg) translate(50px, 2px);\n              transform: rotate(45deg) translate(50px, 2px);\n              background-color: #2C3E50; }\n  \n  .portfolio-modal .modal-backdrop {\n    display: none;\n    opacity: 0; }\n\n#grid1 {\n  padding-top: 60px;\n}\n#grid2 {\n    top: 63px;\n    position: relative;\n}\n\n.carousel-item {\n  height: 500px;\n}\n\n.overlay {\n  max-height: 200px;\n}\n\ndiv > ul > li > p > span.badge {\n  top: -27px;\n  position: relative;\n  cursor: pointer;\n} \n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app-home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<whitebox [setHtml]=\"introabout\"></whitebox>\n    \n\n<!--Projects Grid section v.3-->\n<section id=\"grid1\" class=\"section extra-margins\" style=\"\nmargin-left: 10px;\n\">\n        \n    <!-- Third Grid -->\n\n    <div class=\"view \">\n\n        <div class=\"\">\n\n            <div class=\"d-flex align-items-center d-flex justify-content-center\" >\n                \n                <!--Grid row-->\n                <div class=\"row wow animated fadeIn mb-3\">\n            \n                    <!--Grid column-->\n                    <div class=\"col-lg-6 col-xl-5 pr-lg-5 pb-5\">\n            \n                        <!--Image-->\n                        <img  src=\"../../img/Photos/technicalmarket.png\" alt=\"technical prb plumbing benefits\" class=\"wow animated fadeInLeft img-fluid z-depth-2 \">\n            \n                    </div>\n                    <!--Grid column-->\n            \n                    <!--Grid column-->\n                    <div class=\"col-lg-6 col-xl-7 pl-lg-5 pb-4\">\n                        <!--Grid row-->\n                        <div class=\"row wow animated fadeInRight mb-3\">\n                            <div class=\"col-1 mr-1\">\n                                <i class=\"fa fa-bank fa-lg cyan-text\"></i>\n                            </div>\n                            <div class=\"col-10\">\n                                <h5 class=\"feature-title light-blue-text  font-bold\">Safety</h5>\n                                <p align=\"justify\" class=\"grey-text\">Great service is really about being ‘Easy to do business with’. That’s how we see it. It’s about removing headaches and hassles. Doing the simple things well and being prepared to go even further than the competition.</p>\n                            </div>\n                        </div>\n                        <!--Grid row-->\n            \n                        <!--Grid row-->\n                        <div class=\"row wow animated fadeInRight mb-3\">\n                            <div class=\"col-1 mr-1\">\n                                <i class=\"fa fa-code fa-lg red-text\"></i>\n                            </div>\n                            <div class=\"col-10 \">\n                                <h5 class=\"feature-title light-blue-text  font-bold\">Technology</h5>\n                                <p align=\"justify\" class=\"grey-text\">You can manage your account, search products, request quotes and pay invoices online at. Text messages notify you when your stock is ready for pick up to help you with time management.</p>\n                            </div>\n                        </div>\n                        <!--Grid row-->\n            \n                        <!--Third row-->\n                        <div class=\"row wow animated fadeInRight mb-3\">\n                            <div class=\"col-1 mr-1\">\n                                <i class=\"fa fa-money fa-lg brown-text\"></i>\n                            </div>\n                            <div class=\"col-10\">\n                                <h5 class=\"feature-title light-blue-text  font-bold\">Finance</h5>\n                                <p align=\"justify\" class=\"grey-text\"> We can source non stock or standard products specific to the customers’ requirements.</p>\n                            </div>\n                        </div>\n                        <!--/Third row-->\n            \n                    </div>\n                    <!--Grid column-->\n            \n                </div>\n                <!--Grid row-->\n            </div>\n            <hr>\n            \n\n        </div>\n    </div>\n    <!--Grid row-->\n    <div class=\"view row \" style=\"padding-top: 100px\">\n            \n        <!--Grid column-->\n        <div class=\"col-lg-6 col-xl-7 mb-3\">\n\n            <!--Grid row-->\n            <div class=\"row wow animated fadeInLeft mb-3\">\n                <div class=\"col-1 mr-1\">\n                    <i class=\"fa fa-eye fa-lg light-green-text\"></i>\n                </div>\n                <div class=\"col-10\">\n                    <h5 class=\"feature-title light-blue-text  font-bold\">We love our job</h5>\n                    <p align=\"justify\" class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda voluptate velit.</p>\n                </div>\n            </div>\n            <!--Grid row-->\n\n            <!--Grid row-->\n            <div class=\"row wow animated fadeInLeft mb-3\">\n                <div class=\"col-1 mr-1\">\n                    <i class=\"fa fa-heart-o fa-lg pink-text\"></i>\n                </div>\n                <div class=\"col-10\">\n                    <h5 class=\"feature-title light-blue-text  font-bold\">Entertainment History</h5>\n                    <p align=\"justify\" class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda voluptate velit.</p>\n                </div>\n            </div>\n            <!--Grid row-->\n\n            <!--Third row-->\n            <div class=\"row wow animated fadeInLeft mb-3\">\n                <div class=\"col-1 mr-1\">\n                    <i class=\"fa fa-smile-o fa-lg amber-text\"></i>\n                </div>\n                <div class=\"col-10\">\n                    <h5 class=\"feature-title light-blue-text  font-bold\">Partner with us</h5>\n                    <p align=\"justify\" class=\"grey-text\">Some of the world's best brands can only be found at Reece. This is a reflection of Reece's international reputation for professionalism, quality and marketing ability. Reece has achieved outstanding results with a range of exclusive products in the retail, trade and specialised markets.</p>\n                </div>\n            </div>\n            <!--/Third row-->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-6 col-xl-5 mb-3 waves-light\" mdbRippleRadius>\n            <!--Image-->\n            <img  src=\"../../img/Photos/plumbingrepair.jpg\" alt=\"Technical Plumbing Repair\" class=\"wow animated fadeInRight img-fluid z-depth-2 \">\n        </div>\n        <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n  \n\n</section>\n\n\n\n<section id=\"grid1\">\n    <!-- Third Grid -->\n        <div class=\"view intro hm-purple-slight\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Others/background.jpg); background-attachment: fixed; min-height: 700px; border-top: 2px solid #e5e5e5;\">\n            <div class=\"full-bg-img\">\n                <div class=\"container\">\n                    <div class=\"d-flex align-items-center d-flex justify-content-center\" style=\"height: 700px\">\n                        <div class=\"row mt-5\">\n                            <div class=\"col-md-12 wow fadeIn mb-3\">\n                                <div class=\"intro-info-content text-center\">\n                                    <h2 class=\"display-1 white-text mb-2 wow fadeInDown\" data-wow-delay=\"0.3s\">Technical PRB Team!</h2>\n                                    <h4 class=\"mb-3 mt-1 white-text font-bold wow fadeIn\" data-wow-delay=\"0.4s\">recognized for quality workmanship, service on all makes and models, sales of top-of-the line equipment, and more.</h4>\n                                    <a class=\"btn btn-pink wow fadeIn waves-light\" mdbRippleRadius data-wow-delay=\"0.4s\">Our services include</a> \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n    </section>\n\n    <!--Section: Services-->\n    <div  id=\"Services\" class=\"pt-5\">\n        \n        <div class=\"ta-heading\"> \n        <h2 class=\"h2-responsive wow animated fadeIn ta-heading-inner\" data-wow-delay=\"0.2s\">Serv<span>ices</span></h2>        \n        <hr class=\"star-light\">\n        <p > We Work for you </p>\n        </div>\n    </div>\n\n    \n    \n    <!--Carousel Setvices Wrapper-->     \n    <div class=\"fixed-sn row\">\n        <div class=\"col-lg-12 ml-auto mr-auto\">\n            \n            <mdb-carousel  class=\"carousel-multi-item multi-animation\" [type]=\"'carousel-multi-item'\" [animation]=\"'slide'\" [interval]=\"myInterval\" [noWrap]=\"noWrapSlides\" [(activeSlide)]=\"activeSlideIndex\" (activeSlideChange)=\"activeSlideChange()\">\n                <mdb-slide *ngFor=\"let slide of slides; let in=index\">\n                    <div class=\"col-md-{{isEmpty(slideimages) && slide.image? 12 + '' : 4 + '' }}\" *ngFor=\"let img of (isEmpty(slideimages)? ['none'] : slideimages[in]); let ind=index;\" >\n                        <!--Card-->\n                        <div class=\"card card-cascade wider hoverable\" >\n                            <!--Card image-->\n\n                            <div class=\"overlay hm-white-slight waves-light\" style=\"overflow: unset;\" mdbRippleRadius>\n                                <img  [src]=\"isEmpty(slideimages)? slide.image : img.image\" class=\"img-fluid\" alt=\"Card image with a tree in a middle of a lake.\">\n                                <a>\n                                    <div class=\"mask\"></div>\n                                </a>\n                            </div>\n\n                            <!--Button-->\n                            <a class=\"activator btn-floating btn-action waves-light\" mdbRippleRadius \n                            style=\"background-color: #d33147;\"><i class=\"fa fa-share-alt white-text\"></i></a>\n                            \n                            <!--Card content-->\n                            <div class=\"card-body\">\n                                <!--Title-->\n                                <h4 class=\"card-title text-center\">{{isEmpty(slideimages)? slide.title : img.title}}</h4>\n                                <hr>\n                                <!--Text-->\n                                <p class=\"card-text\">{{isEmpty(slideimages)? slide.text.split('.')[0]+'.'+slide.text.split('.')[1]+'.' : img.text.split('.')[0]+'.'+img.text.split('.')[1]+'.' }}</p>\n                                <a mat-button (click)=\"goToProductDetails(isEmpty(slideimages)? slide : img)\"  class=\"btn btn-info\">Read more</a>\n                            </div>\n        \n                        </div>\n                    <!--/.Card-->\n                </div>\n                    \n                </mdb-slide>\n                \n            </mdb-carousel>\n           \n        </div>\n    </div> <!--/.Carousel Wrapper-->\n    <!--/.Section: Services -->\n\n    \n<section id=\"grid2\">\n             <!-- Second Grid -->\n    <div class=\"view intro hm-pink-slight\" style=\"background-image: url(../../img/Photos/plumbtool.jpg); background-attachment: fixed; background-size: cover; z-index: 0; min-height: 700px;\">\n        <div class=\"full-bg-img\">\n            <div class=\"container flex-center\">\n                <div class=\"row mt-5 py-5\">\n                    <div class=\"col-md-12 wow fadeIn mb-3\" style=\"animation-name: none; visibility: visible;\">\n                        <div class=\"text-center\">\n                            <h1 class=\"display-2 mb-2 wow fadeInDown\" data-wow-delay=\"0.3s\">Our Goal<a class=\"white-text font-bold\"> is to provide</a></h1>\n                            <h5 class=\"font-up mb-3 mt-1 font-bold wow fadeInDown\" data-wow-delay=\"0.4s\">efficiently and promptly customer service</h5>\n                          <!--   <a class=\"btn btn-elegant btn-lg wow fadeInDown waves-effect waves-light\" mdbRippleRadius data-wow-delay=\"0.4s\">portfolio</a> \n                            <a class=\"btn btn-outline-white btn-lg wow fadeInDown waves-effect waves-light\" mdbRippleRadius data-wow-delay=\"0.4s\">About me</a> \n                        --> </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n                    <!-- <div class=\"video-parallax\"><video src=\"../../img/Videos/Lines.mp4\" frameborder=\"0\" autoplay=\"\" loop=\"\"></video>\n                    </div> -->\n    </div>\n            \n</section>\n        \n        \n\n    <!-- Section: Recent Works-->\n    <div  id=\"RecentWorks\" class=\" pt-5\" style=\"padding-top: 7rem !important;\">\n        \n        <div class=\" ta-heading\"> \n        <h2 class=\"h2-responsive wow animated fadeIn ta-heading-inner\">Recent <span>Projects</span></h2>        \n        <hr class=\"star-light\">\n        <p >checkout our latest projects </p>\n        </div>\n    </div>\n\n    <!--Section: image features Modal-->                \n    <section id=\"portfolio\" >\n        <div class=\"row\">\n            <!-- <mdb-image-modal [modalImages]=\"images\" type=\"margin\"></mdb-image-modal>  -->\n            <div class=\"col-md-4 portfolio-item wow animated bounceInUp\"  *ngFor=\"let img of images; let i=index\">\n                <div (click)=\"OpenImagesModel(i)\" [attr.href]=\"'#' + 'portfolioModal'\"  class=\" waves-effect waves-light portfolio-link\" data-toggle=\"modal\">\n                    <div class=\"caption\">\n                        <div class=\"caption-content\">\n                            <i class=\"fa fa-search-plus fa-3x\"></i>\n                        </div>\n                    </div>\n                    <img  class=\"img-fluid\"  style=\"min-width: 400px !important; max-height: 300px !important;\" src=\"{{img.image}}\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"col-md-12 text-center portfolio-item\">\n                    <a target=\"_blank\" mdbRippleRadius href=\"https://mdbootstrap.com/bootstrap-tutorial/\" class=\"btn btn-info btn-lg waves-light\" rel=\"nofollow\">View more</a>\n            </div>\n        </div>\n    </section>    \n    <!--/Section: image features Modal-->\n\n    <div *ngIf=\"openModalWindow\">\n        <ImageModal id=\"ds1\" [modalImages]=\"images\" [imagePointer] = \"imagePointer\" (cancelEvent) =\"cancelImageModel()\"></ImageModal>\n    </div>\n    \n    <!--Section: About-->\n    <div id=\"About\" >\n        \n        <div class=\"ta-heading\"> \n        <h2 class=\"h2-responsive wow animated fadeIn ta-heading-inner\" data-wow-delay=\"0.2s\">About <span>us</span></h2>        \n        \n        <hr class=\"star-light\">\n        <p > Who we are and what we do </p>\n        </div>\n    </div>\n\n    \n\n    <!--Section: About-->\n    <section data-wow-delay=\"0.2s\" class=\"text-center wow animated fadeIn section feature-box team-section\">\n\n        <whitebox [setHtml]=\"about\"> </whitebox>\n\n<!--         Grid row\n        <div class=\"row text-center\">\n    \n            Grid column\n            <div class=\"col-md-4 mb-r\">\n                \n\n                    Avatar\n                    <div mdbRippleRadius class=\"avatar waves-light\">\n                        <img  style=\"display: initial;\" src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" class=\"rounded-circle z-depth-1 img-fluid\">\n                    </div>\n                    \n                    Content\n                    <h4 class=\"mb-3\">Anna Deynah</h4>\n                    <h6 class=\"mb-3 font-bold grey-text\">Web Designer</h6>\n                    <p><i class=\"fa fa-quote-left\"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>\n    \n                    Review\n                    <div class=\"orange-text\">\n                        <i class=\"fa fa-star\"> </i>\n                        <i class=\"fa fa-star\"> </i>\n                        <i class=\"fa fa-star\"> </i>\n                        <i class=\"fa fa-star\"> </i>\n                        <i class=\"fa fa-star-half-full\"> </i>\n                    </div>\n\n                    Email\n                    <a  class=\"btn-floating btn-small btn-email waves-light\" mdbRippleRadius><i class=\"fa fa-envelope\"></i></a>\n                    Facebook\n                    <a  class=\"btn-floating btn-small btn-fb waves-light\" mdbRippleRadius><i class=\"fa fa-facebook\"></i></a>\n                    Linkedin\n                    <a  class=\"btn-floating btn-small btn-li waves-light\" mdbRippleRadius><i class=\"fa fa-linkedin \"></i></a>\n\n\n            </div>\n            Grid column\n    \n            Grid column\n            <div class=\"col-md-4 mb-r\">\n\n                    Avatar\n                    <div mdbRippleRadius class=\"avatar waves-light\">\n                        <img  style=\"display: initial;\" src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg\" class=\"rounded-circle z-depth-1 img-fluid\">\n                    </div>\n    \n                    Content\n                    <h4 class=\"mb-3\">John Doe</h4>\n                    <h6 class=\"mb-3 font-bold grey-text\">Web Developer</h6>\n                    <p><i class=\"fa fa-quote-left\"></i> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>\n    \n                    Review\n                    <div class=\"orange-text\">\n                        <i class=\"fa fa-star\"> </i>\n                        <i class=\"fa fa-star\"> </i>\n                        <i class=\"fa fa-star\"> </i>\n                        <i class=\"fa fa-star\"> </i>\n                        <i class=\"fa fa-star\"> </i>\n                    </div>\n\n                    Email\n                    <a  class=\"btn-floating btn-small btn-email waves-light\" mdbRippleRadius><i class=\"fa fa-envelope\"></i></a>\n                    Facebook\n                    <a class=\"btn-floating btn-small btn-fb waves-light\" mdbRippleRadius><i class=\"fa fa-facebook\"></i></a>\n                    Linkedin\n                    <a  class=\"btn-floating btn-small btn-li waves-light\" mdbRippleRadius><i class=\"fa fa-linkedin \"></i></a>\n\n            </div>\n            Grid column\n    \n            Grid column\n            <div class=\"col-md-4 mb-r\">\n                \n                    Avatar\n                    <div mdbRippleRadius class=\"avatar waves-light\">\n                        <img  style=\"display: initial;\" src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg\" class=\"rounded-circle z-depth-1 img-fluid\">\n                    </div>\n                    Content\n                    <h4 class=\"mb-3\">Maria Kate</h4>\n                    <h6 class=\"mb-3 font-bold grey-text\">Photographer</h6>\n                    <p><i class=\"fa fa-quote-left\"></i> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>\n    \n                    Review\n                    <div class=\"orange-text\">\n                        <i class=\"fa fa-star\"> </i>\n                        <i class=\"fa fa-star\"> </i>\n                        <i class=\"fa fa-star\"> </i>\n                        <i class=\"fa fa-star\"> </i>\n                        <i class=\"fa fa-star-o\"> </i>\n                    </div>\n                     Email\n                     <a  class=\"btn-floating btn-small btn-email waves-light\" mdbRippleRadius><i class=\"fa fa-envelope\"></i></a>\n                     Facebook\n                     <a  class=\"btn-floating btn-small btn-fb waves-light\" mdbRippleRadius><i class=\"fa fa-facebook\"></i></a>\n                     Linkedin\n                     <a class=\"btn-floating btn-small btn-li waves-light\" mdbRippleRadius><i class=\"fa fa-linkedin \"></i></a>\n\n            </div>\n            Grid column\n            \n        </div>\n        Grid row\n    </section> -->\n    <!--/Section: End of About-->\n\n\n    <!--Section: Contact-->\n    <div id=\"contact\" class=\" pt-5\">\n            \n        <div class=\" ta-heading\"> \n        <h2  class=\"h2-responsive wow animated fadeIn ta-heading-inner\">Get In <span>Touch</span></h2>        \n            <hr class=\"star-light\">\n        <p > Contact Us and stick together </p>\n        </div>\n    </div>\n\n\n    <section id=\"grid1\">\n        <!-- Third Grid -->\n            <div class=\"view intro hm-purple-slight\" style=\"background-image: url(../../img/Photos/contact.jpg); background-attachment: fixed; border-top: 2px solid #e5e5e5;\">\n                <div class=\"full-bg-img\">\n                    <div class=\"\">\n                        <div  style=\"height: 700px\">\n                            <div class=\" mt-5\">\n                                <div class=\"col-md-12 wow fadeIn mb-3\">\n                                    <div class=\"intro-info-content text-center\">\n                                            \n                                        <section id=\"contact pb-5\">\n                                            <div class=\"row\">\n                                                <!--First column-->\n                                                <div class=\"col-md-8 mb-5\" >\n                                                    <div id=\"map-container\" class=\"z-depth-1 wow fadeIn\" style=\"height: 300px\">\n                                                        <!-- this creates a google map on the page with the given lat/lng from -->\n                                                        <!-- the component as the initial center of the map: -->\n                                                        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [rotateControl]=\"[rotateControl]\" [fullscreenControl]=\"fullscreenControl\" >\n                                                            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [title]=\"marker_title\" [label]=\"marker_label\" ></agm-marker>\n                                                        </agm-map>\n                                                    </div>\n                                                </div>\n                                                <!--/First column-->\n                                            \n                                                <!--Second column-->\n                                                <div class=\"col-md-4\">\n                                                    <ul class=\"text-center list-unstyled\">\n                                                        <li class=\"wow animated fadeIn\" >\n                                                            <!-- <a mdbRippleRadius class=\"btn-floating btn-lg waves-light light-red lighten-2\"><i class=\"fa  fa-map-marker deep-orange-text fa-lg\" aria-hidden=\"true\"></i></a> -->\n                                                            <p >\n\n                                                                <a mdbRippleRadius (click)=\"openMobMaps()\" style=\"background-color: #66CCB3;\" class=\"btn-floating waves-light light-gray lighten-2\"><i class=\"fa fa-map-marker deep-orange-text fa-lg\"></i></a>   \n                                                                <span class=\"badge badge-pill badge-light\">&nbsp; {{location.name}} </span>  \n                                                                    \n                                                            </p>\n                                                        </li>\n\n                                                        <li class=\"wow animated fadeIn pt-2\" >\n                                                                                        \n                                                        <!-- mdbRippleRadius class=\"btn btn-primary waves-light\" -->\n                                                            <p > \n                                                                <a mdbRippleRadius href=\"tel:{{call.name}}\" style=\"background-color: #66cc7d;\" class=\"btn-floating waves-light light-gray lighten-2\"><i class=\"fa fa-phone fa-lg\"></i></a>   \n                                                                <span class=\"badge badge-pill badge-light\">&nbsp; {{call.name}} </span>                              \n                                                            </p>\n                                                        </li>\n                                                    \n                                                        <ng-template id=\"Tooltip\" #tipContent let-greeting=\"greeting\">{{greeting}}, <b>here</b>!</ng-template> \n                                                        <li [ngbTooltip]=\"tipContent\" #t=\"ngbTooltip\" triggers=\"manual\" data-wow-duration=\".2s\" data-wow-iteration=\"4\" class=\"wow animated bounce mt-5 pt-2\" >\n                                                            \n                                                            <p style=\"text-transform: initial;\">\n                                                                    <a   (click)=\"contactUs()\" mdbRippleRadius style=\"background-color: rgb(211, 49, 71);\" class=\"btn-floating waves-light light-gray lighten-2\"><i style=\"\n                                                                        color: #FFFFFF;\n                                                                    \" class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>   \n                                                                    <span (click)=\"mailto()\" class=\"badge badge-pill badge-info\">&nbsp; {{sendus.name}} </span>      \n                                                                \n                                                            </p>\n\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                                <!--/Second column-->\n                                            </div>\n                                        </section>\n                                    </div>\n                                    <div style=\"color: #5b5165;\n                                    font-weight: bold;\n                                    float: right;\n                                    font-size: 23px;\" class=\"payment payment-wrapper\">\n                                            <header class=\"info-header\">\n                                            <h5><strong><i class=\"fa fa-money\"></i> Payment Methods</strong></h5>\n                                            </header>\n                                            <div class=\"info-body\">\n                                            <div class=\"payment\">\n                                                Cash / Check\n                                                <div class=\"credit-cards\">\n                                                <i class=\"fa fa-cc-mastercard\" title=\"Mastercard\"></i>\n                                                <i class=\"fa fa-cc-visa\" title=\"Visa\"></i>\n                                                <i class=\"fa fa-cc-discover\" title=\"Discover\"></i>\n                                                <i class=\"fa fa-cc-amex\" title=\"Amex\"></i>\n                                                </div>\n                                            </div>\n                                            </div>\n                                        </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n        </section>\n\n    <!--Section: End of Contact *ngIf=\"pageType\"-->\n\n    <foot ></foot>"

/***/ }),

/***/ "../../../../../src/app/components/app-home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_index__ = __webpack_require__("../../../../../src/app/dialogs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables_index__ = __webpack_require__("../../../../../src/app/variables/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_index__ = __webpack_require__("../../../../../src/app/classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routines_index__ = __webpack_require__("../../../../../src/app/routines/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePageComponent = (function () {
    function HomePageComponent(modalService, router, snack, eS, meta, title) {
        // //#region
        var _this = this;
        this.modalService = modalService;
        this.router = router;
        this.snack = snack;
        this.eS = eS;
        // Image Modal Window Variables
        this.openModalWindow = false;
        this.images = [];
        // contact us form variables
        this.location = { name: 'London, NY 10012, USA', color: 'primary' };
        this.call = { name: '+447 490 40 6531', color: 'accent' };
        this.sendus = { name: 'info@technicalprb.com', color: 'warn' };
        this.myInterval = 3000;
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        this.init_map = function () {
            _this.lat = 51.678418;
            _this.lng = 7.809007;
            _this.zoom = 14;
            _this.rotateControl = true;
            _this.fullscreenControl = true;
            _this.marker_title = 'London';
            _this.marker_label = 'Our Offices';
        };
        /* SEO HOME PAGE */
        title.setTitle('Technical PR Plumbing and Heating Services in London');
        meta.addTags([
            {
                name: 'author', content: 'technicalprb.com'
            },
            {
                name: 'keywords', content: 'Plumbing Technology, Water Supply, firefighting installation'
            },
            {
                name: 'description', content: 'Efficiently, robustness AND Promptly Customer Service in Heating sector'
            },
        ]);
        // //#endregion
        // initialize WindowRef
        this.win = new __WEBPACK_IMPORTED_MODULE_4__classes_index__["a" /* Scrollspy */]();
        this.greeting = {};
        this.greetEnable = true;
        this.introabout = "\n        <!--Section: Features -->\n        <section class=\"section feature-box\" id=\"Start\">\n        \n            <!--Section heading-->\n            <h1 class=\"section-heading pt-4\" style=\"text-align: center;\">Why is it so great?</h1>\n            <!--Section description-->\n            <p class=\"section-description lead grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum.</p>\n        \n            <!--Grid row-->\n            <div class=\"row features-small\">\n        \n                <!--Grid column-->\n                <div class=\"col-md-4 mb-r\">\n                    <span class=\"fixed-icon1\" >\n                            <a title=\"Safety Technical PRB Plumbing\" style=\"margin-bottom: 31px;\"></a>\n                    </span>\n                    <div class=\"col-10 col-md-9 col-lg-10 float-right\">\n                        <h4 class=\"feature-title\">Safety</h4>\n                        <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>\n                        <!-- <a class=\"btn btn-primary btn-sm ml-0 waves-light\" mdbRippleRadius>Learn more</a> -->\n                    </div>\n                </div>\n                <!--Grid column-->\n        \n                <!--Grid column-->\n                <div class=\"col-md-4 mb-r\">\n                    <span class=\"fixed-icon2\" >\n                            <a title=\"Customize Technical PRB Plumbing\" style=\"margin-bottom: 31px;\"></a>\n                    </span>\n                    <div class=\"col-10 col-md-9 col-lg-10 float-right\">\n                        <h4 class=\"feature-title\">Customization</h4>\n                        <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>\n                        <!-- <a class=\"btn btn-pink btn-sm ml-0 waves-light\" mdbRippleRadius>Learn more</a> -->\n                    </div>\n                </div>\n                <!--Grid column-->\n        \n                <!--Grid column-->\n                <div class=\"col-md-4 mb-r\">\n                    <span class=\"fixed-icon3\" >\n                            <a title=\"Support Technical PRB Plumbing\" style=\"margin-bottom: 31px;\"></a>\n                    </span>\n                    <div class=\"col-10 col-md-9 col-lg-10 float-right\">\n                        <h4 class=\"feature-title\">Support</h4>\n                        <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>\n                        <!-- <a class=\"btn btn-secondary btn-sm ml-0 waves-light\" mdbRippleRadius>Learn more</a> -->\n                    </div>\n                </div>\n                <!--Grid column-->\n        \n            </div>\n            <!--Grid row-->\n            <style>\n            span.fixed-icon1 a {\n                display: block;\n                width: 130px;\n                height: 131px;\n                background-image: url(../../img/svg/service-icons.png);\n                background-position: -632px 82%;\n                background-repeat: no-repeat;\n                float: right;\n                left: -102px;\n                cursor: pointer;\n                position: relative;\n              }\n              span.fixed-icon2 a {\n                display: block;\n                width: 137px;\n                height: 130px;\n                background-image: url(../../img/svg/service-icons.png);\n                background-position: 33.4% 82%;\n                background-repeat: no-repeat;\n                float: right;\n                left: -102px;\n                cursor: pointer;\n                position: relative;\n              }\n              span.fixed-icon3 a {\n                display: block;\n                width: 130px;\n                height: 130px;\n                background-image: url(../../img/svg/service-icons.png);\n                background-position: 57% 18%;\n                background-repeat: no-repeat;\n                float: right;\n                left: -102px;\n                cursor: pointer;\n                position: relative;\n              }</style>\n        </section>\n        <!--Section: Features v.2-->";
        this.about = "\n        <!--Section heading-->\n        <h1 class=\"section-heading pt-4\">It's all part of the service.?</h1>\n        <!--Section description-->\n        <p class=\"section-description lead grey-text\">Technical PRB are qualified and\n        experienced plumbers and boiler engineers, offering plumbing and central heating\n        services in London, covering areas including: Kensington - W8,\n        Chelsea - SW3, Knightsbridge - SW7, Notting Hill - W1, West Brompton -\n        SW10, Knightsbridge \u00AD SW1X, Kensington \u00AD W8, Mayfair (North) \u00AD W1K, Belgravia \u00AD\n        SW1W, Chelsea, Brompton \u00AD SW3, South Kensington \u00AD SW7,\n        Notting Hill \u00AD W11, Mayfair South \u00AD W1J, Buckingham Gate to Victoria Station -\n         SW1E, Hanover Square & Savile Row, Westminster - SW1, West End - W1, Highgate\n          - Haringey, Colville - Kensington and Chelsea, Hyde Park - Westminster, Vincent Square -\n           Westminster, Belsize - Camden, Sands End - Hammersmith and Fulham, Earl's Court\n            - Kensington and Chelsea, Highgate - Camden,\n             Chiswick Homefields - Hounslow, Notting Barns\n              - Kensington and Chelsea, Village - Southwark,\n               Aldersgate - City of London, Avonmore and Brook Green - Hammersmith and Fulham, St Charles - Kensington.</p>\n        ";
        this.sl = [
            { id: 1, 'image': __WEBPACK_IMPORTED_MODULE_3__variables_index__["a" /* imagesPath */] + 'water-supply.jpg', subtext: '', alt: 1, title: 'Water supply', 'text': "By plumbing\n            we mean the construction of pipeline networks for water transport." },
            { id: 2, 'image': __WEBPACK_IMPORTED_MODULE_3__variables_index__["a" /* imagesPath */] + 'sewerage' + '.png', subtext: '', alt: 2, title: 'Sewerage networks', text: "Some quick\n            example text to build on the card title and make up the bulk of the card's content." },
            { id: 3, 'image': __WEBPACK_IMPORTED_MODULE_3__variables_index__["a" /* imagesPath */] + 'heating' + __WEBPACK_IMPORTED_MODULE_3__variables_index__["c" /* jpg */], subtext: '', alt: 3,
                title: 'Heating', 'text': "Heating is a necessity.\n            It is the need for a comfortable living within the living or working environment.\n            According to the new technological developments in the field of heating we can heat our\n            premises qualitatively and economically. We can still evolve old heating systems in modern ways\n            by adding hydraulic components and automation systems to reduce the cost of use.\n            Our company has to propose modern heating methods according to the needs of each space." },
            { id: 4, 'image': __WEBPACK_IMPORTED_MODULE_3__variables_index__["a" /* imagesPath */] + 'airconditioner' + __WEBPACK_IMPORTED_MODULE_3__variables_index__["c" /* jpg */], subtext: '', "alt": 4, title: 'Αir Conditioning System', "text": "Some quick example text to build on the card title and make up the bulk of the card's content." },
            { id: 5, 'image': __WEBPACK_IMPORTED_MODULE_3__variables_index__["a" /* imagesPath */] + 'irrigation' + __WEBPACK_IMPORTED_MODULE_3__variables_index__["c" /* jpg */], subtext: '', "alt": 5, title: 'Irrigation', "text": "Some quick example text to build on the card title and make up the bulk of the card's content." },
            { id: 6, 'image': __WEBPACK_IMPORTED_MODULE_3__variables_index__["a" /* imagesPath */] + 'firefighting' + '.png', subtext: '', "alt": 6, title: 'Firefighting installation', "text": "Some quick example text to build on the card title and make up the bulk of the card's content." },
        ];
        this.imagePointer = 0;
        /* sewers and sewer netwrok - design construction and maintenance */
        for (var index = 0; index < 9; index++) {
            this.images.push({ image: __WEBPACK_IMPORTED_MODULE_3__variables_index__["b" /* imagesProjectsPath */] + (index + 1) + __WEBPACK_IMPORTED_MODULE_3__variables_index__["c" /* jpg */], description: "Image " + (index + 1) });
        }
    }
    HomePageComponent.prototype.ngOnInit = function () {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        /* run mapper options */
        this.init_map();
        this.eS.broadcast('navBar', this.call.name);
        this.SwitchSlider(window.screen.width, 700);
    };
    HomePageComponent.prototype.goToProductDetails = function (params) {
        console.log(params);
        this.router.navigate(['/article'], { queryParams: params, queryParamsHandling: 'merge' });
    };
    HomePageComponent.prototype.closeGreeting = function () {
        this.tooltip.close();
        this.greetEnable = false;
    };
    HomePageComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.tooltip.isOpen();
        this.tooltip.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.tooltip.open(greeting);
        }
    };
    HomePageComponent.prototype.onResize = function (event) {
        this.SwitchSlider(event.target.innerWidth, 700);
    };
    HomePageComponent.prototype.onWindowScroll = function (event) {
        if (this.greetEnable)
            this.changeGreeting({ greeting: 'Contact us' }), this.greetEnable = !this.greetEnable;
    };
    HomePageComponent.prototype.isEmpty = function (obj) { return Object(__WEBPACK_IMPORTED_MODULE_5__routines_index__["b" /* isEmpty */])(obj); };
    HomePageComponent.prototype.SwitchSlider = function (screen, maxlimit) {
        this.slides = [], this.slideimages = {};
        if (screen < maxlimit) {
            this.slides = this.sl;
        }
        else {
            var len = this.sl.length, p = void 0;
            for (var i = 0; i < len / 3 + len % 3; i++) {
                this.slides.push(0);
                p = [];
                for (var j = i * 3; j < 3 * (i + 1); j++)
                    p.push(this.sl[j]);
                this.slideimages[i] = p;
            }
        }
    };
    HomePageComponent.prototype.openModal = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            _this.openSnackBar(result + '', "Sended Successfully");
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    HomePageComponent.prototype.activeSlideChange = function () {
        // this.activeSlideIndex;
    };
    HomePageComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    /**
     * @private openSnackBar
     * @param message
     * @param action
     */
    HomePageComponent.prototype.openSnackBar = function (message, action) {
        this.snack.open(message, action, { duration: 3500, });
    };
    /**
     * mailto
     */
    HomePageComponent.prototype.mailto = function () { window.location.href = "mailto:" + this.sendus.name; };
    // Contact Form Modal
    HomePageComponent.prototype.contactUs = function () {
        this.closeGreeting();
        this.openModal(__WEBPACK_IMPORTED_MODULE_2__dialogs_index__["a" /* ContactDialog */]);
        // modalRef.componentInstance.name = 'World';
    };
    HomePageComponent.prototype.OpenImagesModel = function (i) {
        this.imagePointer = i;
        this.openModalWindow = true;
    };
    HomePageComponent.prototype.cancelImageModel = function () { this.openModalWindow = false; };
    HomePageComponent.prototype.openMobMaps = function () {
        // If it's an iPhone..
        if ((navigator.platform.indexOf('iPhone') != -1)
            || (navigator.platform.indexOf('iPod') != -1)
            || (navigator.platform.indexOf('iPad') != -1))
            window.open("maps://maps.google.com/maps?daddr=" + this.lat + "," + this.lng + "&amp;ll=");
        else
            window.open("http://maps.google.com/maps?daddr=" + this.lat + "," + this.lng + "&amp;ll=");
    };
    return HomePageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('t'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbTooltip */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbTooltip */]) === "function" && _a || Object)
], HomePageComponent.prototype, "tooltip", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HomePageComponent.prototype, "onResize", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HomePageComponent.prototype, "onWindowScroll", null);
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/components/app-home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app-home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_index__["b" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_index__["b" /* EventsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["f" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["f" /* Meta */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["h" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["h" /* Title */]) === "function" && _g || Object])
], HomePageComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/components/app-home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-nav/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_component__ = __webpack_require__("../../../../../src/app/components/app-nav/nav.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__nav_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.classic-tabs.tabs-cyan li a.active {\n    border-color: #fff;\n\n}\n.classic-tabs li a.active {\n    border-bottom: 2px solid;\n    color: #fff;\n}\n\n\n\n.classic-tabs li a.active:hover {\n    border-bottom: 2px solid #ff4081;\n    color: #fff;\n\n}\n  \n  .box {\n    cursor: pointer;   \n  }\n  \n  .box:hover, .classic-tabs li.box2:hover {\n    border-bottom: 2px solid #ff4081;\n    color: #fff;\n  }\n  \n  .box::before, .classic-tabs li.box2::before, .box::after, .classic-tabs li.box2::after {\n    width: 100%;\n    height:100%;\n    /* z-index: 3; */\n    content:'';\n    /* position: relative; */\n    top:0;\n    left:0;\n    box-sizing: border-box;\n    transform: scale(0);\n    -webkit-transform: scale(0);\n    transition: 0.5s;\n  }\n  \n  ul#carouselhint > li > h1 {\n    color: #fff;\n    background-color: rgba(80, 80, 80, 0.8);\n    padding: 0.5em;\n    font-weight: bold;\n  }\n  \n  .curmudgeon::before, .classic-tabs li.curmudgeon2::before {\n    border-bottom: 3px solid #FFF !important;\n    border-left: 0 !important;\n    transform-origin: 0% 100% !important;\n    -webkit-transform-origin: 0% 100% !important;\n  }\n  \n  .curmudgeon::after, .classic-tabs li.curmudgeon2::after {\n    border-top: 0 !important;\n    border-right: 0 !important;\n    transform-origin: 50% 50% !important;\n    -webkit-transform-origin: 50% 50% !important;\n  }\n  \n  .box:hover::after, .classic-tabs li.box2:hover::after, .box:hover::before, .classic-tabs li.box2:hover::before {\n    transform: scale(1) !important;\n    -webkit-transform: scale(1) !important;\n  }\n\n  .carousel-caption {     display: block;     padding-top: 15rem; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app-nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"pageType\" >\n\n\n    <header >\n\n            <nav [ngClass]=\"topnavcollapse\"  class=\"navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar\" [containerInside]=\"false\">\n                <a routerLink=\"/\" mdbRippleRadius class=\"logo navbar-brand waves-light\"><img data-wow-iteration=\"10\" class=\"wow bounce \" src=\"../../img/pl.png\" width=\"42\" height=\"42\" alt=\"Technical PRB\"><strong>PRB</strong></a>\n\n                <button class=\"navbar-toggler\" (click)=\"navcollapse = !navcollapse\" mat-icon-button matTooltip=\"Menu\" [matTooltipPosition]=\"'below'\" type=\"button\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <mat-icon class=\"md-18\">more_vert</mat-icon>\n                </button>\n\n                <div [ngClass]=\"{'show': navcollapse}\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <!-- Links -->\n                    <ul class=\"nav navbar-nav mr-auto menu classic-tabs tabs-cyan\" role=\"tablist\" scroll-spy style=\"margin-top: -2px\">\n                            \n                        <li class=\"nav-item \">\n                            <a (click)=\"routerLink('Start')\" ref=\"Start\" mdbRippleRadius class=\"nav-link box curmudgeon waves-light {{navclass.Start}}\"><i class=\"fa fa-play-circle fa-fw\" aria-hidden=\"true\"></i> Start <span class=\"sr-only\">(current)</span></a>\n                        </li>\n            \n                        <li class=\"nav-item\">\n                            <a (click)=\"routerLink('Services')\" ref=\"Services\" class=\"box curmudgeon nav-link  waves-light {{navclass.Services}}\" mdbRippleRadius ><i class=\"fa fa-shower fa-fw\" aria-hidden=\"true\"></i> Services</a>\n                        </li>\n                        <li class=\"nav-item \">\n                            <a (click)=\"routerLink('RecentWorks')\" ref=\"RecentWorks\" class=\"nav-link box curmudgeon   waves-light {{navclass.RecentWorks}}\"  mdbRippleRadius ><i class=\"fa fa-cog fa-fw fa-spin\"></i>\n                                <span class=\"sr-only\">Loading...</span> Projects</a>\n                        </li>\n                        \n            \n                        <!-- Dropdown Blog -->\n                        <li class=\"nav-item dropdown \" dropdown>\n            \n                            <a mdbRippleRadius dropdownToggle class=\" box curmudgeon  nav-link  waves-light {{navclass.news}}\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i>news <i class=\"fa fa-sort-down wow bounce infinite\" aria-hidden=\"true\"></i></a>\n                            \n                            <div class=\"dropdown-menu dropdown-primary\" aria-labelledby=\"navbarDropdownMenuLink\">\n                                <a class=\"dropdown-item waves-light {{navclass.blog}}\" (click)=\"routerLink('blog')\" mdbRippleRadius dropdownToggle > Blog</a>\n                                <!-- <a  class=\"dropdown-item waves-light {{navclass.action2}}\"mdbRippleRadius  routerLink=\".\">Another action</a> -->\n                                <!-- <div class=\"divider dropdown-divider\"></div> -->\n                                <!-- <a class=\"dropdown-item waves-light {{navclass.action3}}\" mdbRippleRadius  routerLink=\".\">Something else here</a> -->\n                            </div>\n                        </li>\n            \n                        <li class=\"nav-item \">\n                            <a (click)=\"routerLink('About')\" ref=\"About\"  mdbRippleRadius class=\"nav-link box curmudgeon waves-light {{navclass.About}}\"><i class=\"fa fa-info-circle fa-fw\" aria-hidden=\"true\"></i> About <span class=\"sr-only\">(current)</span></a>\n                        </li>\n                        <li class=\"nav-item \">\n                            <a (click)=\"routerLink('contact')\" ref=\"contact\" class=\"nav-link box curmudgeon  waves-light {{navclass.contact}}\" mdbRippleRadius ><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>Contact</a>\n                        </li>\n            \n                    </ul>\n\n                    <span class=\"form-inline white-text contact-info pull-right \">\n                            <ul class=\"nav-flex-icons navbar-nav\" >\n                \n                                <!--Facebook-->\n                                <li class=\"nav-item\">\n                                    <a mdbRippleRadius class=\"nav-link waves-light\"><i class=\"fa fa-facebook\"> </i></a>\n                                </li>\n                \n                                <!--Linkedin-->\n                                <li class=\"nav-item\">\n                                    <a mdbRippleRadius class=\"nav-link waves-light\"><i class=\"fa fa-linkedin\"></i></a>\n                                </li>\n                                <!--Twitter-->\n                                <li class=\"nav-item\">\n                                    <a mdbRippleRadius class=\"nav-link waves-light\"><i class=\"fa fa-twitter\"></i></a>\n                                </li>\n                            </ul>\n                            <!-- Call us Telephone -->\n                            \n                            <i class=\"fa fa-mobile-phone fa-lg fa-fw\" aria-hidden=\"true\"></i>Call us on &nbsp; \n                           \n                           <style>\n                            .mat-chip:not(.mat-basic-chip) {\n                  background-color: #3c474e;\n                  color: rgba(185, 51, 51, 0.87);cursor: pointer;\n                }\n                .mat-chip:not(.mat-basic-chip):focus {\n                  box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);\n                  outline: 0;\n                }</style>\n                 <style>.mat-chip-list-wrapper {\n                    display: initial;\n                    flex-direction: row;\n                    flex-wrap: wrap;\n                    align-items: baseline;\n                }</style>\n                \n                <mat-chip-list>\n                   \n                \n                </mat-chip-list>\n                                        <a style=\"color:#ff4081\" class=\"mat-chip mat-primary\" [attr.href]=\"'tel:'+call.name\"> <i class=\"fa fa-phone light-green-text fa-lg\"></i>  {{call.name}}\n                                        </a>\n                \n                        </span>\n                </div>\n            </nav>\n        \n        </header>\n        <!--Main Navigation-->\n\n    <!--Navbar-->\n\n\n    <!--/.Navbar-->\n\n    <!--Carousel Wrapper-->\n    <mdb-carousel *ngIf=\"!pagerouteError\"  class=\"carousel carousel-slide white-text\" [interval]=\"5000\"  [animation]=\"'slide'\">\n\n    <!--First slide-->\n    <mdb-slide *ngFor=\"let slideImage of SlideCollection\" >\n        <img class=\"d-block w-100\" [src]=\"slideImage.img\" alt=\"First slide\">\n        <!-- <div class=\"view intro hm-black-strong\" [ngStyle]=\"getImageStyle(slideImage.img)\" ></div> -->\n        \n            <!-- Caption -->\n        <div class=\"carousel-caption full-bg-img flex-center white-text\">\n            <ul  id=\"carouselhint\" class=\"wow animated fadeInRight col-md-12\" style=\"height: 400px\">\n                <li>\n                    <h1 id=\"carouselhint\" class=\"h1-responsive\">{{slideImage.headText}} </h1>\n                </li>\n                <hr class=\"extra-margins\">\n                <li>\n                    <h2>{{slideImage.extraText}}</h2>\n                </li>\n                <li>\n                    <div class=\"col-md-12\">\n                            <a target=\"_blank\" mdbRippleRadius  (click)=\"routerLink('Start')\" class=\"wow animated fadeInUp btn btn-info btn-lg waves-light\" rel=\"nofollow\">Read more</a>\n                    </div>\n                    \n                    <ul class=\"wow animated slideOutDown infinite \"><a style=\"color: #f8f9fa\" (click)=\"routerLink('Start')\" > <i class=\"fa fa-angle-double-down fa-2x fa-fw\" aria-hidden=\"true\"></i></a></ul>\n                </li>\n            </ul>\n        </div>\n        <!-- /.Caption -->\n    </mdb-slide>\n    <!--/First slide-->\n    \n    <!-- Second slide - Video -->\n   <!--  <mdb-slide> -->\n        \n        <!--Video source-->\n        <!-- <div class=\"view intro hm-indigo-light\" style=\"min-height: 700px;\">\n            \n            <video class=\"video-fluid\" autoplay loop style=\"width: unset; height: unset; min-height:700px;\n            min-width:1286px;\">\n                <source src=\"../../img/Videos/forest.mp4\" type=\"video/mp4\" />\n            </video>\n            <div class=\"mask waves-light\" mdbRippleRadius></div>\n        </div> -->\n        \n        <!-- Caption -->\n        <!-- <div class=\"carousel-caption full-bg-img flex-center white-text\">\n            <ul class=\"wow animated fadeInRight col-md-12\" style=\"height: 400px\">\n                <li>\n                    <h1 class=\"h1-responsive\">Ready to learn more about us? </h1>\n                </li>\n                <hr class=\"extra-margins\">\n                <li>\n                    \n                    <p>Feel free to look around!</p>\n                </li>\n                <li>\n                    <div class=\"col-md-12\">\n                            <a target=\"_blank\" mdbRippleRadius href=\"https://mdbootstrap.com/bootstrap-tutorial/\" class=\"btn btn-info btn-lg waves-light\" rel=\"nofollow\">Read more</a>\n                    </div>\n                    \n                    <ul class=\"wow animated slideOutDown infinite \"><a style=\"color: #f8f9fa\" (click)=\"routerLink('Start')\" > <i class=\"fa fa-angle-double-down fa-2x fa-fw\" aria-hidden=\"true\"></i></a></ul>\n                </li>\n            </ul>\n        </div> -->\n   <!--  </mdb-slide> -->\n    <!--/.Second slide - Video -->\n    \n    </mdb-carousel>\n    <!--/.Carousel Wrapper-->\n\n</div>\n<!-- <hr class=\"extra-margins\"> -->"

/***/ }),

/***/ "../../../../../src/app/components/app-nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes__ = __webpack_require__("../../../../../src/app/classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("../../../../../src/app/variables/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routines__ = __webpack_require__("../../../../../src/app/routines/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuComponent = (function () {
    function MenuComponent(router, eventListener) {
        var _this = this;
        this.router = router;
        this.eventListener = eventListener;
        this.navclass = {};
        this.onWindowScroll = function () {
            if (_this.isBrowser()) {
                _this.topnavcollapse['top-nav-collapse'] = _this.getCurrentScrollTop() > 100 ? true : false;
            }
        };
        /**
         * Get current Y scroll position
         * @returns {any|((event:any)=>undefined)}
         */
        this.getCurrentScrollTop = function () {
            if (typeof window.scrollY != 'undefined') {
                return window.scrollY;
            }
            if (typeof window.pageYOffset != 'undefined') {
                return window.pageYOffset;
            }
            if (typeof document.body.scrollTop != 'undefined') {
                return document.body.scrollTop;
            }
            if (typeof document.documentElement.scrollTop != 'undefined') {
                return document.documentElement.scrollTop;
            }
            return 0;
        };
        /**
         * This check will prevent 'window' logic to be executed
         * while executing the server rendering
         * @returns {boolean}
         */
        this.isBrowser = function () {
            return typeof (window) !== 'undefined';
        };
        this.call = {
            name: '+447 490 40 6531'
        };
        this.pageType = !/admin/.test(window.location.pathname) ? true : false;
        // initialize WindowRef
        this.win = new __WEBPACK_IMPORTED_MODULE_2__classes__["a" /* Scrollspy */]();
        // init statement
        this.navcollapse = false;
        this.navclass = {
            Start: '',
            About: '',
            Services: '',
            RecentWorks: '',
            news: '',
            contact: '',
            blog: '',
            action2: '',
            action3: ''
        };
        this.topnavcollapse = {
            'top-nav-collapse': false
        };
        this.SlideCollection = [
            { img: __WEBPACK_IMPORTED_MODULE_3__variables__["a" /* imagesPath */] + 'slide1' + __WEBPACK_IMPORTED_MODULE_3__variables__["c" /* jpg */], headText: 'All kinds of plumbing work are undertaken', extraText: 'by specialized and licensed plumbers!' },
            { img: __WEBPACK_IMPORTED_MODULE_3__variables__["a" /* imagesPath */] + 'slide4' + __WEBPACK_IMPORTED_MODULE_3__variables__["c" /* jpg */], headText: 'We Make Plumbing Simple', extraText: 'in the water and heating sector!' },
            { img: __WEBPACK_IMPORTED_MODULE_3__variables__["a" /* imagesPath */] + 'firs' + __WEBPACK_IMPORTED_MODULE_3__variables__["c" /* jpg */], headText: 'Giving Solutions', extraText: 'for your immediate convenience!' }
        ];
    }
    MenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        // Window properties, like Scrollspy
        // events broadcast service
        this.eventListener.on('routerLink', function (a) {
            _this.routerLink(a);
            // console.log('a: ', a)
        });
        this.eventListener.on('pageError', function (a) {
            _this.pagerouteError = a;
        });
        /* this.eventListener.on('navBar', a => {
            
            this.call['name'] = a
            // console.log('a: ', a)
        }) */
    };
    MenuComponent.prototype.controllHostListener = function (cntr) {
        this.eventListener.broadcast('WindowScroll', cntr); // set host listener to false via broadcast
    };
    MenuComponent.prototype.getImageStyle = function (image) {
        // carouse image background image and style
        // console.log(image)
        var imagestyle = {
            'background-image': "url(" + image + ")",
            'background-attachment': 'fixed',
            'min-height': '700px',
            'min-width': '1286px',
            'height': 'auto',
            'width': 'auto',
            'display': 'block',
            'opacity': 0.812621,
            'background-position': "0px"
        };
        return imagestyle;
    };
    MenuComponent.prototype.routerLink = function (RouterPage) {
        var _this = this;
        var dropdown = (RouterPage == 'blog' || RouterPage == 'privacy');
        // close nav collapse
        this.navcollapse = false;
        this.router.navigateByUrl('/' + (dropdown ? RouterPage : '')); // navigate and scroll to id
        Object(__WEBPACK_IMPORTED_MODULE_4__routines__["a" /* initNavClass */])(this.navclass, RouterPage, undefined); // set active nav bar
        setTimeout(function () { return _this.win.smoothScroll(RouterPage); }, 100); // set 100 ms
    };
    return MenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", []),
    __metadata("design:type", Object)
], MenuComponent.prototype, "onWindowScroll", void 0);
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navig',
        styles: [__webpack_require__("../../../../../src/app/components/app-nav/nav.component.css")],
        template: __webpack_require__("../../../../../src/app/components/app-nav/nav.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services__["b" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["b" /* EventsService */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-policy/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__policy_component__ = __webpack_require__("../../../../../src/app/components/app-policy/policy.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__policy_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-policy/policy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <!--Blog-->\n    <div class=\"row\">\n\n        <nav class=\"col-lg-12 breadcrumb\">\n        <a class=\"breadcrumb-item\"  [routerLink]=\"['/']\" ><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home</a>\n        <a class=\"breadcrumb-item active\" [routerLink]=\"['/Privacy']\" >Privacy Policy</a>\n        </nav>\n        <whitebox [setHtml]=\"PrivacyArticle.article\"></whitebox>\n\n        \n    </div>\n</div>\n<foot ></foot>"

/***/ }),

/***/ "../../../../../src/app/components/app-policy/policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PolicyComponent = (function () {
    function PolicyComponent() {
    }
    PolicyComponent.prototype.ngOnInit = function () {
        this.PrivacyArticle = {
            article: "\n            Privacy Policy\n            \n            General\n            \n                Technical PRB Public Company Ltd respects the privacy of every individual who visits our websites.This Privacy Policy outlines the information Technical PRB Bros may collect and how we may use that information.\n            \n            Personal Data\n            \n                When you do provide us with personal data, we may use that information in the following ways, unless stated otherwise: we may store and process that information to better understand your needs and how we can improve our products and services; we (or a fulfilment house or other third party on our behalf in connection with a promotion) may use that information to contact you; and/or we may provide other third parties with aggregate - but not individual - information about visitors to or users of our sites.. We do not, neither now nor in future, intend to sell, rent or market personal data about you to third parties.\n            \n                Technical PRB will provide to you all information available on your present enquiry, but will not collect any personal - identifiable information about you (e.g. name, address, telephone number or e-mail address, \"personal data\" through the website) and use it for the above purposes, unless you indicate your consent by signing the box space below.\n            \n            Additional Information Collected Automatically\n            \n                In some cases, we may automatically (i.e., not via registration) collect technical information when you connect to our site that is not personally-identifiable. Examples of this type of information include the type of Internet Browser you are using, the type of computer operating system you are using and the domain name of the website from which you linked to our site.\n            \n            Information Places Automatically on Your Computer - Cookies\n            \n                When you view one of our websites, we may store some information on your computer. This information will be in the form of a \"Cookie\" or similar file and can help us in many ways. For example, Cookies allow us to tailor a website to better match your interest and preferences. With most Internet Browser, you can erase Cookies from your computer hard drive, block all Cookies or receive a warming before a Cookie is stored. Please refer to your Browser instructions or help screen to learn more about these functions.\n            \n            Copyright \u00A9 Technical PRB Ltd. All rights reserved\n            "
        };
    };
    return PolicyComponent;
}());
PolicyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // selector: '',
        template: __webpack_require__("../../../../../src/app/components/app-policy/policy.component.html")
    }),
    __metadata("design:paramtypes", [])
], PolicyComponent);

//# sourceMappingURL=policy.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_home__ = __webpack_require__("../../../../../src/app/components/app-home/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__app_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_nav__ = __webpack_require__("../../../../../src/app/components/app-nav/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__app_nav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_foot__ = __webpack_require__("../../../../../src/app/components/app-foot/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__app_foot__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__not_found_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_blog__ = __webpack_require__("../../../../../src/app/components/app-blog/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__app_blog__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_component__ = __webpack_require__("../../../../../src/app/components/admin.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__admin_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_policy__ = __webpack_require__("../../../../../src/app/components/app-policy/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__app_policy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_article__ = __webpack_require__("../../../../../src/app/components/app-article/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__app_article__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(eS) {
        this.eS = eS;
        this.eS.broadcast('pageError', true);
    }
    PageNotFoundComponent.prototype.ngOnDestroy = function () {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.eS.broadcast('pageError', false);
    };
    PageNotFoundComponent.prototype.goHome = function () {
        this.eS.broadcast('routerLink', '/');
    };
    PageNotFoundComponent.prototype.goContact = function () {
        this.eS.broadcast('routerLink', 'contact');
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n        <div _ngcontent-c9=\"\" class=\"view intro hm-purple-slight\" style=\"background-image: url(../../img/Photos/404-er.jpg);background-attachment: fixed;min-height: 700px;border-top: 2px solid #e5e5e5;background-position: center;\">\n            <div _ngcontent-c9=\"\" class=\"full-bg-img\">\n                <div _ngcontent-c9=\"\" class=\"container\">\n                    <div _ngcontent-c9=\"\" class=\"d-flex align-items-center d-flex justify-content-center\" style=\"height: 700px\">\n                        <div _ngcontent-c9=\"\" class=\"row mt-5\">\n                            <div _ngcontent-c9=\"\" class=\"col-md-12 wow fadeIn mb-3\">\n                                <div _ngcontent-c9=\"\" class=\"intro-info-content text-center\">\n                                    <div class=\"error-template\">\n                                        <h1 style=\"color: #e54040;\"  class=\"display-1 white-text mb-2 wow fadeInDown\" data-wow-delay=\"0.3s\">\n                                            Oops!</h1>\n                                        <br>\n                                        <div class=\"mb-3 mt-1 white-text error-details font-bold wow fadeIn\" data-wow-delay=\"0.4s\">\n                                            Sorry, an error has occured, Requested page not found!\n                                        </div>\n                                        <div class=\"error-actions\">\n                                            <a (click)=\"goHome()\" class=\"btn btn-primary btn-lg\"><span class=\"glyphicon glyphicon-home\"></span>\n                                                Take Me Home </a><a (click)=\"goContact()\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-envelope\"></span> Contact Us </a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n          \n        <foot></foot>",
        styles: ["body { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);}\n.error-template {padding: 40px 15px;text-align: center;\n    }\n.error-actions {margin-top:15px;margin-bottom:15px;}\n.error-actions .btn { margin-right:10px; }\n.error-details {\n    font-family: \"Century Gothic\";\n    font-size: 2em;\n    color: #666;\n    text-align: center;\n}"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* EventsService */]) === "function" && _a || Object])
], PageNotFoundComponent);

var _a;
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/dialogs/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Modal: Contact form-->\n\n<!--Content-->\n<div class=\"modal-content\">\n         <style>\n                    .fa-li {\n                        position: absolute;\n                        left: -1.142857em;\n                        width: 2.142857em;\n                        top: 1.142857em;\n                        text-align: center;\n                    } \n                    /* .ng-valid[required], .ng-valid.required  {\n                        border-left: 2px solid #42A948; green\n                    }\n                \n                input.ng-invalid:not(form), textarea.ng-invalid:not(form),  */\n                recaptcha.ng-invalid:not(form) {\n                    border-left: 2px solid #a94442; /* red */\n                }\n                recaptcha.ng-valid[required], recaptcha.ng-valid.required  {\n                        border-left: 2px solid #42A948; /* green */\n                    }\n                    .chip mat-icon {\n                float: left;\n                margin: 4px 8px 0 -12px;\n                height: 32px;\n                width: 32px;\n                border-radius: 50%;\n            }\n            .chip {\n                display: inline-block;\n                line-height: 32px;\n                height: 32px;\n                font-size: 13px;\n                font-weight: 500;\n                color: rgb(220, 24, 24);\n                padding: 0 12px;\n                border-radius: 16px;\n                background-color: #eceff1;\n                margin-bottom: 1rem;\n                margin-left: 1rem;\n                margin-top: 1rem;\n            }\n            #spinner {\n                            width: 0px !important;\n                         height: 0px !important\n                        }\n        </style>\n            <!--Header-->\n            <div class=\"modal-header light-blue darken-3 white-text\">\n                <h4 class=\"title\"><i class=\"fa fa-pencil\"></i> Contact Us</h4>\n                <button class=\"close\" aria-label=\"Close\" (click)=\"onDismissed()\" aria-label=\"Close\" mat-mini-fab class=\"waves-effect waves-light\">\n                    <mat-icon class=\"mat-36\">close</mat-icon>\n                </button>\n            </div>\n\n            <!--Body-->\n            <form class=\"modal-body eform mb-0\" name=\"form\" (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\" validate>\n                \n                <ul class=\"fa-ul\">\n                    <li>\n                        <i class=\"fa-li fa fa-user-circle\" aria-hidden=\"true\"></i>\n                        <mat-form-field style=\"padding-left: 30px;\" class=\"efull-width\">\n                            \n                            <input matInput required [(ngModel)]=\"customer.name\" (ngModelChange)=\"onChange($event)\"\n                            [pattern]=\"cValidator.patterName\" name=\"name\" #name=\"ngModel\" placeholder=\"Your name\">\n                            <mat-error>Name is invalid</mat-error>\n                        </mat-form-field>\n                    </li>\n                </ul>\n\n                <ul class=\"fa-ul\">\n                    <li>\n                        \n                        <i class=\"fa-li fa fa-envelope fa-lg\"></i>\n                        <mat-form-field style=\"padding-left: 30px;\" class=\"efull-width\">\n                            <input matInput required name=\"email\" #email=\"ngModel\"  (ngModelChange)=\"onChange($event)\"\n                            pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                            [(ngModel)]=\"customer.email\" placeholder=\"Your email\">\n                            <mat-error>Email is invalid</mat-error>\n                        </mat-form-field>\n                    </li>\n                </ul>\n\n                <ul class=\"fa-ul\">\n                    <li>\n                        <i class=\"fa-li fa fa-tag\"></i>\n                        <mat-form-field style=\"padding-left: 30px;\" class=\"\">\n                            <input matInput required name=\"subject\" #subject=\"ngModel\"\n                            [pattern]=\"cValidator.patterSubject\" (ngModelChange)=\"onChange($event)\"\n                             [(ngModel)]=\"customer.subject\" placeholder=\"Subject\">\n                            <mat-error>Subject is invalid</mat-error>\n                        </mat-form-field>\n                    </li>\n                </ul>\n\n                <ul class=\"fa-ul\">\n                    <li>\n                        <i class=\"fa-li fa fa-pencil\"></i>\n                        <mat-form-field style=\"padding-left: 30px;\" class=\"efull-width\">\n\n                            <textarea matInput required name=\"message\" #message=\"ngModel\" \n                            [pattern]=\"cValidator.patterText\" (ngModelChange)=\"onChange($event)\"\n                            [(ngModel)]=\"customer.message\" #templateVariable [maxLength]=\"cValidator.TextmaxLength\" placeholder=\"Your Message\"></textarea>\n                            <md-hint align=\"end\">{{templateVariable.value.length}} / {{cValidator.TextmaxLength}}</md-hint>\n                            <mat-error>Message is invalid</mat-error>\n                        </mat-form-field>\n                    </li>\n                </ul>\n\n                <div class=\"text-center mt-1-half\">\n                  \n                        <button [disabled]=\"!heroForm.form.valid || !captchaModel.validbut\" type=\"submit\" mat-button class=\"btn btn-info mb-2 waves-effect waves-light\">Send <i class=\"fa fa-send ml-1\"></i></button>\n                       \n                          <re-captcha style=\"float: right;\"\n                        [(ngModel)]=\"captchaModel.captcha\" (captchaResponse)=\"resolved($event)\"\n                        required #captcha=\"ngModel\"  name=\"captcha\" site_key=\"{{captchaModel.captchaKey}}\"></re-captcha>\n                         <mat-spinner *ngIf=\"this.captchaModel['submited']\" mode=\"indeterminate\" style=\"position: relative; bottom: -12px;right: -112px;\" \n                         id=\"spinner\" diameter=\"30\" value=\"50\"  color=\"warn\" [strokeWidth]=\"2\"></mat-spinner>\n                        <div class=\"chip\" [hidden]=\"captcha.valid || captchaModel.RespondError !== 'Email Delivery Failure, try again'\"><mat-icon class=\"mat-18\">error</mat-icon>{{captchaModel.RespondError}}</div>\n               \n                </div>\n                <!-- (change)=\"captchablur($event)\" -->\n                <!-- name=\"captcha\"  (resolved)=\"resolved($event)\"-->\n            </form>\n        </div>\n        <!--/.Content-->\n<!--Modal: Contact form-->\n                "

/***/ }),

/***/ "../../../../../src/app/dialogs/contact.dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_recaptcha__ = __webpack_require__("../../../../angular2-recaptcha/angular2-recaptcha.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_recaptcha__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RECAPTCHA_SITE_KEY = '6Ld52ywUAAAAABBVB1obaeIl6CmWi7BidW1uQb4t';
var TextmaxLength = 1000;
var ContactDialog = (function () {
    function ContactDialog(fb, activeModal, es) {
        this.fb = fb;
        this.activeModal = activeModal;
        this.es = es;
        // this.createForm()
    }
    ContactDialog.prototype.ngOnInit = function () {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        this.captchaModel = {
            captcha: '',
            captchaKey: RECAPTCHA_SITE_KEY,
            validbut: true,
            RespondError: 'check the captcha',
            submited: false
        };
        this.cValidator = {
            patterName: '[a-zA-Z ]*',
            patterEmail: '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$',
            patterSubject: '[A-Za-z0-9 ]{4,50}\.[A-Za-z0-9 ]{4,50}',
            patterText: "^[A-Za-z0-9,!@%#. ]{5," + TextmaxLength + "}.[A-Za-z0-9,!@%#. ]{5," + TextmaxLength + "}$",
            TextmaxLength: TextmaxLength
        };
        this.customer = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    };
    ContactDialog.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    };
    ContactDialog.prototype.onSubmit = function () {
        var _this = this;
        this.captchaModel['validbut'] = false;
        this.captchaModel['submited'] = !this.captchaModel['validbut'];
        this.es.sendEmail(this.customer).subscribe(function (success) {
            var ret = success;
            if (ret && ret['info']) {
                _this.captchaModel['validbut'] = true, _this.activeModal.close('Email');
            }
            _this.resetCaptchaModel(3500);
            return;
            // console.log('error respond: ', JSON.stringify(ret))
        }, function (error) {
            _this.captchaModel['validbut'] = false;
            _this.resetCaptchaModel(3500);
            console.log("TypeError: " + error);
        });
    };
    ContactDialog.prototype.resetCaptchaModel = function (delay) {
        var _this = this;
        this.captchaModel['RespondError'] = 'Email Delivery Failure, try again';
        this.ReCaptchaV2.reset();
        setTimeout(function () {
            _this.captchaModel['validbut'] = true;
            _this.captchaModel['submited'] = false;
            _this.captchaModel['RespondError'] = 'check the captcha';
        }, delay);
    };
    ContactDialog.prototype.onDismissed = function () {
        this.activeModal.dismiss('Cross click');
    };
    /**
     * onTextChange
     * @param event
     */
    ContactDialog.prototype.onChange = function (event) {
        this.captchaModel['validbut'] = true;
    };
    ContactDialog.prototype.resolved = function (captchaResponse) {
        // console.log(`Resolved captcha with response ${captchaResponse}:`);
    };
    return ContactDialog;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_angular2_recaptcha__["ReCaptchaComponent"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_recaptcha__["ReCaptchaComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_recaptcha__["ReCaptchaComponent"]) === "function" && _a || Object)
], ContactDialog.prototype, "ReCaptchaV2", void 0);
ContactDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contactus',
        template: __webpack_require__("../../../../../src/app/dialogs/contact.component.html"),
        styles: ["\n    .modal-header {\n        text-align: center;\n        margin: -2rem 1rem 1rem;\n        padding: 1.5rem;\n        border: none;\n        border-radius: 3px;\n        -webkit-transform: translate(0,0);\n        -ms-transform: translate(0,0);\n        transform: translate(0,0);\n        -webkit-transition: -webkit-transform .3s ease-out;\n        transition: transform .3s ease-out;\n        transition: transform .3s ease-out,-webkit-transform .3s ease-out;\n        -webkit-transform: translate(0,-25%);\n        -ms-transform: translate(0,-25%);\n        transform: translate(0,-25%);\n        margin-top: 10%;\n    }\n    .eform {\n        min-width: 150px;\n        max-width: 500px;\n        width: 100%;\n      }\n      \n      .efull-width {\n        width: 100%;\n      }\n    \n\n    .modal.show .modal-dialog {\n        \n    }\n    .modal.fade .modal-dialog {\n        \n    }\n    .modal-dialog.cascading-modal {\n        \n    }\n    @media (min-width: 576px)\n    .modal-header {\n        max-width: 500px;\n        margin: 30px auto;\n    }\n    .modal-header {\n        position: relative;\n        width: auto;\n        margin: 10px;\n    }\n    .btn-floating, .btn-floating.btn-flat.active, .btn:active, .btn:focus, .btn:hover, .card.card-cascade.card-avatar img, .card.card-cascade.wider.reverse .card-body, .colorful-select .dropdown-content li.active span, .comments-list .badge, .dropdown .dropdown-menu .dropdown-item:active, .dropdown .dropdown-menu .dropdown-item:hover, .form-header, .md-pills .nav-link.active:hover, .media .media-left img, .modal-content, .modal-header, .nav-tabs, .picker__box .picker__table .picker--focused, .picker__box .picker__table .picker__day--selected, .picker__box .picker__table .picker__day--selected:hover, .pricing-card .header, .reply-form .badge, .z-depth-1-half, ul.instagram-photos li img {\n        -webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\n        box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\n    }\n    \n    "]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* EmailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* EmailsService */]) === "function" && _d || Object])
], ContactDialog);

var _a, _b, _c, _d;
//# sourceMappingURL=contact.dialog.js.map

/***/ }),

/***/ "../../../../../src/app/dialogs/image.dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageDialog = (function () {
    function ImageDialog(element) {
        this.element = element;
        this.opened = false;
        this.loading = false;
        this.showRepeat = false;
        this.hover = false;
        this.cancelEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._element = this.element.nativeElement;
    }
    ImageDialog.prototype.ngOnInit = function () {
        this.loading = true;
        if (this.imagePointer >= 0) {
            this.showRepeat = false;
            this.openGallery(this.imagePointer);
        }
        else {
            this.showRepeat = true;
        }
    };
    ImageDialog.prototype.closeGallery = function () {
        this.opened = false;
        this.cancelEvent.emit(null);
    };
    ImageDialog.prototype.prevImage = function () {
        this.loading = true;
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.modalImages.length - 1;
        }
        this.openGallery(this.currentImageIndex);
    };
    ImageDialog.prototype.nextImage = function () {
        this.loading = true;
        this.currentImageIndex++;
        if (this.modalImages.length === this.currentImageIndex) {
            this.currentImageIndex = 0;
        }
        this.openGallery(this.currentImageIndex);
    };
    ImageDialog.prototype.openGallery = function (index) {
        if (!index) {
            this.currentImageIndex = 1;
        }
        this.currentImageIndex = index;
        this.opened = true;
        this.imagePointer = this.currentImageIndex;
        this.loading = false;
    };
    return ImageDialog;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('modalImages'),
    __metadata("design:type", Object)
], ImageDialog.prototype, "modalImages", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('imagePointer'),
    __metadata("design:type", Number)
], ImageDialog.prototype, "imagePointer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('cancelEvent'),
    __metadata("design:type", Object)
], ImageDialog.prototype, "cancelEvent", void 0);
ImageDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ImageModal',
        template: "\n    <!-- Portfolio Modals -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n       <div class=\"modal-dialog\" role=\"document\">\n         <div class=\"modal-content\">\n           <div class=\"close-modal\"style=\"z-index: 100;\" (click)=\"closeGallery()\" data-dismiss=\"modal\">\n             <div class=\"lr\">\n               <div class=\"rl\"></div>\n             </div>\n           </div>\n           <div class=\"\">\n             <div class=\"row\">\n               <a class=\"col-lg-2 mx-auto nav-left\" (mouseover)=\"hover=true\" (mouseout)=\"hover=!hover\" [ngStyle]=\"{'opacity': hover? '0.3' : 'initial' }\" *ngIf=\"modalImages.length >1\" (click)=\"prevImage()\">\n               <div class=\"next-modal\" >\n                  <div class=\"up\"></div>\n                  <div class=\"down\"></div>\n                </div></a>\n               <div class=\"col-lg-8 mx-auto\">\n                 <div class=\"modal-body\">\n                   <h3>Project Title</h3>\n                   <hr class=\"star-primary\">\n\n                    <div class=\"waves-light\" mdbRippleRadius>\n                    <img *ngIf=\"!loading\"  style=\"max-height: 469px !important;width: 100%;\" class=\"img-fluid img-centered\" src=\"{{modalImages[imagePointer].image}}\" (click)=\"nextImage()\" />\n                    </div>\n                   \n                    <p>Use this area of the page to describe your project. The icon above is part of a free icon set by\n\n                   <a >Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>\n                   <ul class=\"list-inline item-details\">\n                     <li>Client:\n                       <strong>\n                         <a >Empty</a>\n                       </strong>\n                     </li>\n                     <li>Date:\n                       <strong>\n                         <a >Empty</a>\n                       </strong>\n                     </li>\n                     <li>Service:\n                       <strong>\n                         <a > Empty</a>\n                       </strong>\n                     </li>\n                   </ul>\n                   <button (click)=\"closeGallery()\" md-button class=\"btn btn-success\" data-dismiss=\"modal\">\n                     <i class=\"fa fa-times\"></i>\n                     Close</button>\n                 </div>\n               </div>\n               <a class=\"col-lg-2 mx-auto nav-right\" style=\":hover {opacity:0.3}\" *ngIf=\"modalImages.length >1\" (click)=\"nextImage()\">\n                  <div class=\"prev-modal\" >\n                  <div class=\"up\"></div>\n                  <div class=\"down\"></div>\n                </div></a>\n             </div>\n           </div>\n         </div>\n       </div>\n     </div>\n    ",
        styles: [__webpack_require__("../../../../../src/app/components/app-home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ImageDialog);

var _a;
//# sourceMappingURL=image.dialog.js.map

/***/ }),

/***/ "../../../../../src/app/dialogs/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_dialog__ = __webpack_require__("../../../../../src/app/dialogs/contact.dialog.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_dialog__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_dialog__ = __webpack_require__("../../../../../src/app/dialogs/image.dialog.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__image_dialog__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__whitebox_directive__ = __webpack_require__("../../../../../src/app/directives/whitebox.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__whitebox_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/directives/whitebox.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SanitizeHtmlDirective */
/* unused harmony export WhiteboxComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WHITEBOX_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeHtmlDirective = (function () {
    function SanitizeHtmlDirective(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlDirective.prototype.transform = function (v) {
        // console.log(this._sanitizer.bypassSecurityTrustHtml(v))
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    return SanitizeHtmlDirective;
}());
SanitizeHtmlDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sanitizeHtml'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SanitizeHtmlDirective);

var WhiteboxComponent = (function () {
    function WhiteboxComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    WhiteboxComponent.prototype.ngOnInit = function () { };
    return WhiteboxComponent;
}());
WhiteboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'whitebox',
        template: "\n    <div class=\"wow animated fadeIn\" style=\"position: relative;top: -15px;\" data-wow-delay=\"0.2s\">\n    <div class=\"col-md-12\">\n        <div class=\"jumbotron\" [innerHTML]=\"setHtml | sanitizeHtml\">\n\n        </div>\n        </div>\n        ",
        inputs: ['setHtml']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], WhiteboxComponent);

var WHITEBOX_DIRECTIVES = [
    SanitizeHtmlDirective,
    WhiteboxComponent
];
var _a, _b;
//# sourceMappingURL=whitebox.directive.js.map

/***/ }),

/***/ "../../../../../src/app/routes/admin.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__("../../../../../src/app/components/index.ts");

var AdminRoutes = [
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_0__components__["a" /* AdminComponent */] }
];
//# sourceMappingURL=admin.route.js.map

/***/ }),

/***/ "../../../../../src/app/routes/home.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
// import { AuthGuard, DeAuthGuard, CanLoadGuard }             from '../_guards/index'

// Route Configuration
var HomeRoutes = [
    { path: '',
        // redirectTo: '/',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_0__components__["e" /* HomePageComponent */],
    },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_0__components__["c" /* BlogPageComponent */], data: { title: 'Blog' } },
    { path: 'privacy', component: __WEBPACK_IMPORTED_MODULE_0__components__["h" /* PolicyComponent */] },
    { path: 'article', component: __WEBPACK_IMPORTED_MODULE_0__components__["b" /* ArticleComponent */] }
];
//# sourceMappingURL=home.route.js.map

/***/ }),

/***/ "../../../../../src/app/routes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_route__ = __webpack_require__("../../../../../src/app/routes/home.route.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__home_route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_route__ = __webpack_require__("../../../../../src/app/routes/admin.route.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__admin_route__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/routines/convert.routine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export convertNumberToPx */
/* unused harmony export convertPxToNumber */
/**
 * Append the 'px' suffix to the input value.
 * @param {number} value
 * @returns {string}
 */
/**
 * Append the 'px' suffix to the input value.
 * @param {number} value
 * @returns {string}
 */ function convertNumberToPx(value) {
    return value + 'px';
}
/**
 * Remove the 'px' suffix from the input value.
 * @param {string} value
 * @returns {number}
 */
function convertPxToNumber(value) {
    if (!value)
        return 0;
    return Number.parseInt(value.replace('px', ''));
}
//# sourceMappingURL=convert.routine.js.map

/***/ }),

/***/ "../../../../../src/app/routines/html-util.routine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export extractElementPosition */
/**
 * Calculate the top left position of the targetElement
 * @param {Document} document
 * @param {HTMLElement} targetElement
 * @returns {{top: number, left: number}}
 */
/**
 * Calculate the top left position of the targetElement
 * @param {Document} document
 * @param {HTMLElement} targetElement
 * @returns {{top: number, left: number}}
 */ function extractElementPosition(document, targetElement) {
    var body = document.body;
    var docEl = document.documentElement;
    var windowPageYOffset = document.defaultView && document.defaultView.pageYOffset || undefined;
    var windowPageXOffset = document.defaultView && document.defaultView.pageXOffset || undefined;
    var scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    if (!targetElement) {
        // No element found, so return the current position to not cause any change in scroll position
        return { top: scrollTop, left: scrollLeft };
    }
    var box = targetElement.getBoundingClientRect();
    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return { top: Math.round(top), left: Math.round(left) };
}
//# sourceMappingURL=html-util.routine.js.map

/***/ }),

/***/ "../../../../../src/app/routines/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__convert_routine__ = __webpack_require__("../../../../../src/app/routines/convert.routine.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__html_util_routine__ = __webpack_require__("../../../../../src/app/routines/html-util.routine.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_routine__ = __webpack_require__("../../../../../src/app/routines/public.routine.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__public_routine__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__public_routine__["b"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/routines/public.routine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isEmpty;
/* harmony export (immutable) */ __webpack_exports__["a"] = initNavClass;
function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
}
// Initialize active navbar tabs
function initNavClass(obj, query, exceptof) {
    for (var key in obj) {
        var value = obj[key];
        if (typeof obj === 'object') {
            if (key == query ||
                query == 'blog' && key == 'news')
                obj[key] = 'active';
            else if (exceptof)
                obj[key] = 'active';
            else
                obj[key] = '';
        }
    }
}
//# sourceMappingURL=public.routine.js.map

/***/ }),

/***/ "../../../../../src/app/services/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailsService = (function () {
    function EmailsService(http) {
        this.http = http;
    }
    /**
     * sendEmail
     * @param Object
     */
    EmailsService.prototype.sendEmail = function (customer) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](); // { 'Authorization': 'Bearer ' + currentUser.token }
        headers.append('Content-Type', 'application/json');
        return this.http.post('/task/emails', JSON.stringify(customer), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .map(function (res) { return res.json(); });
    };
    /**
     * Subscribe
     * @param string
     */
    EmailsService.prototype.subScribe = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/task/subscribers', JSON.stringify({ email: email }), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .map(function (res) { return res.json(); });
    };
    return EmailsService;
}());
EmailsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EmailsService);

var _a;
//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsService = (function () {
    function EventsService() {
        var _this = this;
        this.listeners = {};
        this.eventsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.events = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].from(this.eventsSubject);
        this.events.subscribe(function (_a) {
            var name = _a.name, args = _a.args;
            if (_this.listeners[name]) {
                for (var _i = 0, _b = _this.listeners[name]; _i < _b.length; _i++) {
                    var listener = _b[_i];
                    listener.apply(void 0, args);
                }
            }
        });
    }
    EventsService.prototype.on = function (name, listener) {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }
        this.listeners[name].push(listener);
    };
    EventsService.prototype.broadcast = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.eventsSubject.next({
            name: name,
            args: args
        });
    };
    return EventsService;
}());
EventsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], EventsService);

//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__window_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__event_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_service__ = __webpack_require__("../../../../../src/app/services/email.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__email_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recaptcha_service__ = __webpack_require__("../../../../../src/app/services/recaptcha.service.ts");
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/services/recaptcha.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PreloadedRecaptchaAPIService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreloadedRecaptchaAPIService = (function () {
    function PreloadedRecaptchaAPIService() {
        var readySubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](grecaptcha);
        this.ready = readySubject.asObservable();
    }
    return PreloadedRecaptchaAPIService;
}());
PreloadedRecaptchaAPIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PreloadedRecaptchaAPIService);

//# sourceMappingURL=recaptcha.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], WindowRef);

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ "../../../../../src/app/variables/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__("../../../../../src/app/variables/main.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__main__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__main__["c"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/variables/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return imagesPath; });
/* unused harmony export videosPath */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return imagesProjectsPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return jpg; });
var imagesPath = '../../img/Photos/';
var videosPath = '../../img/Videos/';
var imagesProjectsPath = '../../img/Projects/';
var jpg = '.jpg';
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/app/window/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scrollto_window__ = __webpack_require__("../../../../../src/app/window/scrollto.window.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__scrollto_window__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scrollspy_window__ = __webpack_require__("../../../../../src/app/window/scrollspy.window.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__scrollspy_window__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/window/scrollspy.window.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollSpyDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ScrollSpyDirective = (function () {
    // Window properties, like Scrollspy
    // public win: Scrollspy
    // TODO: Change the any type to Document when fix https://github.com/angular/angular/issues/15640
    function ScrollSpyDirective(document, el, renderer, eventsService) {
        this.document = document;
        this.el = el;
        this.renderer = renderer;
        this.eventsService = eventsService;
        this.elements = [];
        this.directNavigation = false;
        // initialize WindowRef
        // this.win = new Scrollspy()
    }
    ScrollSpyDirective.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.collectIds();
        // console.log('ScrollSpyDirective started..')
    };
    ScrollSpyDirective.prototype.collectIds = function () {
        this.elements = [];
        var elements = this.el.nativeElement.querySelectorAll('a');
        for (var i = 0; i < elements.length; i++) {
            var elem = elements.item(i);
            var id = this.getId(elem);
            // console.log(`collecting ids: ${JSON.stringify(id)}`)
            if (!id)
                continue;
            var destination = this._getPeerElement(id);
            // console.log(` destination: ${JSON.stringify(destination)} for id: ${id}`)
            if (!destination)
                continue;
            // elem.addEventListener('click', this._onLinkClicked.bind(this));
            this.elements.push({
                id: id,
                link: elem,
                destination: destination
            });
        }
    };
    ScrollSpyDirective.prototype._onLinkClicked = function (event) {
        event.preventDefault();
        var target = event.currentTarget, id = this.getId(target);
        // setTimeout(() => this.win.smoothScroll(id+''), 100) // set 100 ms
        var destination = this._getPeerElement(id);
        this.directNavigation = true;
        // let position = extractElementPosition(this.document, destination)
        //window.scrollTo({top: position.top - 25, left: 0}) // , behavior: 'smooth'
        this._cleanCurrentLink();
        this._setCurrentLink(target);
        this.directNavigation = false;
    };
    ScrollSpyDirective.prototype._getPeerElement = function (id) {
        var destination = this.document.getElementById(id);
        if (!destination)
            return null;
        return destination;
    };
    ScrollSpyDirective.prototype.getId = function (elem) {
        var href = elem.getAttribute('ref');
        if (!href)
            return null;
        // console.log('href: ', href)
        return href.replace('#', '');
    };
    ScrollSpyDirective.prototype.onWindowScroll = function (event) {
        // console.log('directNavigation: ', this.directNavigation)
        if (this.directNavigation)
            return;
        this.collectIds();
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var elem = _a[_i];
            var top = elem.destination.getBoundingClientRect().top;
            // console.log('top destination: ', top)
            if (top > -100 && top < 100) {
                // console.log('set currnet link')
                this._cleanCurrentLink();
                this._setCurrentLink(elem.link);
                break;
            }
        }
    };
    ScrollSpyDirective.prototype._cleanCurrentLink = function () {
        if (!this.currentActiveLink)
            return;
        // console.log( '_cleanCurrentLink: ', this.currentActiveLink)
        this.renderer.removeClass(this.currentActiveLink, 'active');
    };
    ScrollSpyDirective.prototype._setCurrentLink = function (elem) {
        this.currentActiveLink = elem;
        // console.log( '_setCurrentLink: ', elem)
        this.renderer.addClass(this.currentActiveLink, 'active');
    };
    return ScrollSpyDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ScrollSpyDirective.prototype, "onWindowScroll", null);
ScrollSpyDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[scroll-spy]'
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* EventsService */]) === "function" && _c || Object])
], ScrollSpyDirective);

var _a, _b, _c;
//# sourceMappingURL=scrollspy.window.js.map

/***/ }),

/***/ "../../../../../src/app/window/scrollto.window.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowScrollComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WindowScrollComponent = (function () {
    function WindowScrollComponent(_sanitizer) {
        var _this = this;
        this._sanitizer = _sanitizer;
        this.animationState = 'out';
        /**
         * Default button styles
         * @type {{position: string;
         * top: string;
         * bottom: string;
         * right: string;
         * width: string;
         * height: string;
         * line-height: string;
         * text-decoration: string;
         * color: string;
         * background: string;
         * border: string;
         * border-radius: string}}
         */
        this.defaultStyles = {};
        /**
         * Go top button will appear when user scrolls Y to this position
         * @type {number}
         */
        this.scrollDistance = 200;
        /**
         * Button inner html
         * @type {string}
         */
        this.html = '';
        /**
         * User styles config object
         * @type {{}}
         */
        this.styles = {};
        /**
         * If true scrolling to top will be animated
         * @type {boolean}
         */
        this.animate = false;
        /**
         * Animated scrolling speed
         */
        this.speed = 80;
        /**
         * Acceleration coefficient, added to speed when using animated scroll
         * @type {number}
         */
        this.acceleration = 0;
        this.validateInputs = function () {
            var errorMessagePrefix = 'GoTopButton component input validation error: ';
            if (_this.scrollDistance < 0) {
                throw Error(errorMessagePrefix + "'scrollDistance' parameter must be greater or equal to 0");
            }
            if (_this.speed < 1) {
                throw Error(errorMessagePrefix + "'speed' parameter must be a positive number");
            }
            if (_this.acceleration < 0) {
                throw Error(errorMessagePrefix + "'acceleration' parameter must be greater or equal to 0");
            }
        };
        /**
         * Listens to window scroll and animates the button
         */
        this.onWindowScroll = function () {
            if (_this.isBrowser()) {
                _this.animationState = _this.getCurrentScrollTop() > _this.scrollDistance ? 'in' : 'out';
            }
        };
        /**
         * Scrolls window to top
         * @param event
         */
        this.scrollTop = function (event) {
            if (!_this.isBrowser()) {
                return;
            }
            event.preventDefault();
            if (_this.animate) {
                _this.animateScrollTop();
            }
            else {
                window.scrollTo(0, 0);
            }
        };
        /**
         * Performs the animated scroll to top
         */
        this.animateScrollTop = function () {
            var initialSpeed = _this.speed;
            var timerID = setInterval(function () {
                window.scrollBy(0, -initialSpeed);
                initialSpeed = initialSpeed + _this.acceleration;
                if (_this.getCurrentScrollTop() == 0)
                    clearInterval(timerID);
            }, 15);
        };
        /**
         * Get current Y scroll position
         * @returns {any|((event:any)=>undefined)}
         */
        this.getCurrentScrollTop = function () {
            if (typeof window.scrollY != 'undefined') {
                return window.scrollY;
            }
            if (typeof window.pageYOffset != 'undefined') {
                return window.pageYOffset;
            }
            if (typeof document.body.scrollTop != 'undefined') {
                return document.body.scrollTop;
            }
            if (typeof document.documentElement.scrollTop != 'undefined') {
                return document.documentElement.scrollTop;
            }
            return 0;
        };
        /**
         * Get button style
         * @returns {{}&U&V}
         */
        this.getStyle = function () {
            return Object.assign({}, _this.defaultStyles, _this.styles);
        };
        /**
         * This check will prevent 'window' logic to be executed
         * while executing the server rendering
         * @returns {boolean}
         */
        this.isBrowser = function () {
            return typeof (window) !== 'undefined';
        };
    }
    WindowScrollComponent.prototype.ngOnInit = function () {
        this.validateInputs();
    };
    return WindowScrollComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], WindowScrollComponent.prototype, "scrollDistance", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["SafeHtml"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["SafeHtml"]) === "function" && _a || Object)
], WindowScrollComponent.prototype, "html", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WindowScrollComponent.prototype, "styles", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WindowScrollComponent.prototype, "animate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], WindowScrollComponent.prototype, "speed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], WindowScrollComponent.prototype, "acceleration", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', []),
    __metadata("design:type", Object)
], WindowScrollComponent.prototype, "onWindowScroll", void 0);
WindowScrollComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'go-top-button',
        template: "<div data-wow-delay=\"0.6s\" class=\"fixed-action-btn animated zoomInRight smooth-scroll\"\n                        [@appearInOut]=\"animationState\"\n                        (click)=\"scrollTop($event)\"\n                        [ngStyle]=\"getStyle()\">\n                    <a class=\"btn-floating red\" mat-fab routerLink=\".\" *ngIf=\"html\" [innerHtml]=\"html | sanitizeHtml\" >\n                    </a>\n                </div>\n                ",
        styles: [
            ".go-top-button {\n            position: fixed;\n            cursor: pointer;\n            outline: none;\n        }\n        btn-floating i {\n            line-height:52px;\n        }\n        .go-top-button:hover, .go-top-button:focus {\n            background-color: rgba(0, 0, 0, 0.6);\n            text-decoration: none;\n            color: white;\n        }"
        ],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('appearInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                    'display': 'block',
                    'opacity': '0.85'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                    'display': 'none',
                    'opacity': '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out'))
            ]),
        ],
    })
    /**
     * Component for adding a go-to-top button to scrollable browser content
     */
    ,
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], WindowScrollComponent);

var _a, _b;
//# sourceMappingURL=scrollto.window.js.map

/***/ }),

/***/ "../../../../../src/environments/environments.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environments.prod.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environments_prod__ = __webpack_require__("../../../../../src/environments/environments.prod.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environments_prod__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map