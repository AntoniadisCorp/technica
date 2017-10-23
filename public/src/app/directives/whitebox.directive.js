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
var platform_browser_1 = require("@angular/platform-browser");
var SanitizeHtml = /** @class */ (function () {
    function SanitizeHtml(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtml.prototype.transform = function (v) {
        // console.log(this._sanitizer.bypassSecurityTrustHtml(v))
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtml = __decorate([
        core_1.Pipe({
            name: 'sanitizeHtml'
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], SanitizeHtml);
    return SanitizeHtml;
}());
exports.SanitizeHtml = SanitizeHtml;
var WhiteboxComponent = /** @class */ (function () {
    function WhiteboxComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    WhiteboxComponent.prototype.ngOnInit = function () { };
    WhiteboxComponent = __decorate([
        core_1.Component({
            selector: 'whitebox',
            template: "\n    <div class=\"wow animated fadeIn\" style=\"position: relative;top: -15px;\" data-wow-delay=\"0.2s\">\n    <div class=\"col-md-12\">\n        <div class=\"jumbotron\" [innerHTML]=\"setHtml | sanitizeHtml\">\n            \n        </div>\n        </div>\n        ",
            inputs: ['setHtml']
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], WhiteboxComponent);
    return WhiteboxComponent;
}());
exports.WhiteboxComponent = WhiteboxComponent;
//# sourceMappingURL=whitebox.directive.js.map