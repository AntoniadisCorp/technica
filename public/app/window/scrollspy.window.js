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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var index_1 = require("../services/index");
var ScrollSpyDirective = /** @class */ (function () {
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
            var top_1 = elem.destination.getBoundingClientRect().top;
            // console.log('top destination: ', top)
            if (top_1 > -100 && top_1 < 100) {
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
    __decorate([
        core_1.HostListener("window:scroll", ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ScrollSpyDirective.prototype, "onWindowScroll", null);
    ScrollSpyDirective = __decorate([
        core_1.Directive({
            selector: '[scroll-spy]'
        }),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [Object, core_1.ElementRef,
            core_1.Renderer2, index_1.EventsService])
    ], ScrollSpyDirective);
    return ScrollSpyDirective;
}());
exports.ScrollSpyDirective = ScrollSpyDirective;
//# sourceMappingURL=scrollspy.window.js.map