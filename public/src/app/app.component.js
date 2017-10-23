"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./services/index");
// import { AuthGuard, DeAuthGuard } from './_guards/index'
var AppComponent = /** @class */ (function () {
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
    AppComponent = __decorate([
        core_1.Component({
            selector: 'prb',
            templateUrl: "../views/main_partials/app.ejs",
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../styles/app.css'],
            providers: [
                // AuthenticationService,
                //   AlertService, 
                //   UserService, 
                //   TaskService,
                index_1.EventsService,
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map