"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeListComponent = (function () {
    function HomeListComponent() {
    }
    HomeListComponent = __decorate([
        core_1.Component({
            template: "\n        <h1> MyTaskList</h1>\n        <hr>\n        <div class=\"app-content\">\n  <md-card>\n    <button md-button>FLAT</button>\n    <button md-raised-button>RAISED</button>\n  </md-card>\n  <md-card>\n    <button md-icon-button>\n      <md-icon class=\"md-24\">favorite</md-icon>\n    </button>\n    <button md-fab>\n      <md-icon class=\"md-24\">add</md-icon>\n    </button>\n    <button md-mini-fab>\n      <md-icon class=\"md-24\">add</md-icon>\n    </button>\n  </md-card>\n  <md-card>\n    <button md-raised-button color=\"primary\">PRIMARY</button>\n    <button md-raised-button color=\"accent\">ACCENT</button>\n    <button md-raised-button color=\"warn\">WARN</button>\n  </md-card>\n  <md-card>\n    <button md-button disabled>OFF</button>\n    <button md-raised-button disabled>OFF</button>\n    <button md-mini-fab disabled><md-icon>check</md-icon></button>\n  </md-card>\n</div>\n      "
        })
    ], HomeListComponent);
    return HomeListComponent;
}());
exports.HomeListComponent = HomeListComponent;
//# sourceMappingURL=home.component.js.map