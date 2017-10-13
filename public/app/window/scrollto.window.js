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
var animations_1 = require("@angular/animations");
var platform_browser_1 = require("@angular/platform-browser");
var WindowScroll = /** @class */ (function () {
    function WindowScroll(_sanitizer) {
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
    WindowScroll.prototype.ngOnInit = function () {
        this.validateInputs();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], WindowScroll.prototype, "scrollDistance", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], WindowScroll.prototype, "html", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], WindowScroll.prototype, "styles", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WindowScroll.prototype, "animate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], WindowScroll.prototype, "speed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], WindowScroll.prototype, "acceleration", void 0);
    __decorate([
        core_1.HostListener('window:scroll', []),
        __metadata("design:type", Object)
    ], WindowScroll.prototype, "onWindowScroll", void 0);
    WindowScroll = __decorate([
        core_1.Component({
            selector: 'go-top-button',
            template: "<div data-wow-delay=\"0.6s\" class=\"fixed-action-btn animated zoomInRight smooth-scroll\"\n                        [@appearInOut]=\"animationState\"\n                        (click)=\"scrollTop($event)\"\n                        [ngStyle]=\"getStyle()\">\n                    <a class=\"btn-floating red\" mat-fab routerLink=\".\" *ngIf=\"html\" [innerHtml]=\"html | sanitizeHtml\" >\n                    </a>\n                </div>\n                ",
            styles: [
                ".go-top-button {\n            position: fixed;\n            cursor: pointer;\n            outline: none;\n        }\n        btn-floating i {\n            line-height:52px;\n        }\n        .go-top-button:hover, .go-top-button:focus {\n            background-color: rgba(0, 0, 0, 0.6);\n            text-decoration: none;\n            color: white;\n        }"
            ],
            animations: [
                animations_1.trigger('appearInOut', [
                    animations_1.state('in', animations_1.style({
                        'display': 'block',
                        'opacity': '0.85'
                    })),
                    animations_1.state('out', animations_1.style({
                        'display': 'none',
                        'opacity': '0'
                    })),
                    animations_1.transition('in => out', animations_1.animate('400ms ease-in-out')),
                    animations_1.transition('out => in', animations_1.animate('400ms ease-in-out'))
                ]),
            ],
        })
        /**
         * Component for adding a go-to-top button to scrollable browser content
         */
        ,
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], WindowScroll);
    return WindowScroll;
}());
exports.WindowScroll = WindowScroll;
//# sourceMappingURL=scrollto.window.js.map