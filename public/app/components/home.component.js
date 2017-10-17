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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var index_1 = require("../dialogs/index");
var index_2 = require("../variables/index");
var index_3 = require("../classes/index");
var index_4 = require("../routines/index");
var material_1 = require("@angular/material");
var index_5 = require("../services/index");
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(modalService, snack, eS) {
        var _this = this;
        this.modalService = modalService;
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
        // initialize WindowRef
        this.win = new index_3.Scrollspy();
        this.greeting = {};
        this.greetEnable = true;
        this.introabout = "\n        <!--Section: Features -->\n        <section class=\"section feature-box\" id=\"Start\">\n        \n            <!--Section heading-->\n            <h1 class=\"section-heading pt-4\" style=\"text-align: center;\">Why is it so great?</h1>\n            <!--Section description-->\n            <p class=\"section-description lead grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum.</p>\n        \n            <!--Grid row-->\n            <div class=\"row features-small\">\n        \n                <!--Grid column-->\n                <div class=\"col-md-4 mb-r\">\n                    <span class=\"fixed-icon1\" >\n                            <a title=\"Safety Technical PRB Plumbing\" style=\"margin-bottom: 31px;\"></a>\n                    </span>\n                    <div class=\"col-10 col-md-9 col-lg-10 float-right\">\n                        <h4 class=\"feature-title\">Safety</h4>\n                        <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>\n                        <!-- <a class=\"btn btn-primary btn-sm ml-0 waves-light\" mdbRippleRadius>Learn more</a> -->\n                    </div>\n                </div>\n                <!--Grid column-->\n        \n                <!--Grid column-->\n                <div class=\"col-md-4 mb-r\">\n                    <span class=\"fixed-icon2\" >\n                            <a title=\"Customize Technical PRB Plumbing\" style=\"margin-bottom: 31px;\"></a>\n                    </span>\n                    <div class=\"col-10 col-md-9 col-lg-10 float-right\">\n                        <h4 class=\"feature-title\">Customization</h4>\n                        <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>\n                        <!-- <a class=\"btn btn-pink btn-sm ml-0 waves-light\" mdbRippleRadius>Learn more</a> -->\n                    </div>\n                </div>\n                <!--Grid column-->\n        \n                <!--Grid column-->\n                <div class=\"col-md-4 mb-r\">\n                    <span class=\"fixed-icon3\" >\n                            <a title=\"Support Technical PRB Plumbing\" style=\"margin-bottom: 31px;\"></a>\n                    </span>\n                    <div class=\"col-10 col-md-9 col-lg-10 float-right\">\n                        <h4 class=\"feature-title\">Support</h4>\n                        <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>\n                        <!-- <a class=\"btn btn-secondary btn-sm ml-0 waves-light\" mdbRippleRadius>Learn more</a> -->\n                    </div>\n                </div>\n                <!--Grid column-->\n        \n            </div>\n            <!--Grid row-->\n            <style>\n            span.fixed-icon1 a {\n                display: block;\n                width: 130px;\n                height: 131px;\n                background-image: url(../../img/svg/service-icons.png);\n                background-position: -632px 82%;\n                background-repeat: no-repeat;\n                float: right;\n                left: -102px;\n                cursor: pointer;\n                position: relative;\n              }\n              span.fixed-icon2 a {\n                display: block;\n                width: 137px;\n                height: 130px;\n                background-image: url(../../img/svg/service-icons.png);\n                background-position: 33.4% 82%;\n                background-repeat: no-repeat;\n                float: right;\n                left: -102px;\n                cursor: pointer;\n                position: relative;\n              }\n              span.fixed-icon3 a {\n                display: block;\n                width: 130px;\n                height: 130px;\n                background-image: url(../../img/svg/service-icons.png);\n                background-position: 57% 18%;\n                background-repeat: no-repeat;\n                float: right;\n                left: -102px;\n                cursor: pointer;\n                position: relative;\n              }</style>\n        </section>\n        <!--Section: Features v.2-->";
        this.about = "\n        <!--Section heading-->\n        <h1 class=\"section-heading pt-4\">It's all part of the service.?</h1>\n        <!--Section description-->\n        <p class=\"section-description lead grey-text\">Technical PRB are qualified and experienced plumbers and boiler engineers, offering plumbing and central heating services in London, covering areas including: Kensington - W8, Chelsea - SW3, Knightsbridge - SW7, Notting Hill - W1, West Brompton - SW10, Knightsbridge \u00AD SW1X, Kensington \u00AD W8, Mayfair (North) \u00AD W1K, Belgravia \u00AD SW1W, Chelsea, Brompton \u00AD SW3, South Kensington \u00AD SW7, Notting Hill \u00AD W11, Mayfair South \u00AD W1J, Buckingham Gate to Victoria Station - SW1E, Hanover Square & Savile Row, Westminster - SW1, West End - W1, Highgate - Haringey, Colville - Kensington and Chelsea, Hyde Park - Westminster, Vincent Square - Westminster, Belsize - Camden, Sands End - Hammersmith and Fulham, Earl's Court - Kensington and Chelsea, Highgate - Camden, Chiswick Homefields - Hounslow, Notting Barns - Kensington and Chelsea, Village - Southwark, Aldersgate - City of London, Avonmore and Brook Green - Hammersmith and Fulham, St Charles - Kensington.</p>\n        ";
        this.sl = [
            { "image": index_2.imagesPath + "img%20(14).jpg", "alt": 1, "title": "Technical support", "text": "Some quick example text to build on the card title and make up the bulk of the card's content." },
            { "image": index_2.imagesPath + "aftersale.jpg", "alt": 2, "title": "After Sales Service", "text": "Some quick example text to build on the card title and make up the bulk of the card's content." },
            { "image": index_2.imagesPath + "img%20(25).jpg", "alt": 3, "title": "Maintenance contracts", "text": "Some quick example text to build on the card title and make up the bulk of the card's content." },
            { "image": index_2.imagesPath + "img%20(37).jpg", "alt": 4, "title": "", "text": "Some quick example text to build on the card title and make up the bulk of the card's content." },
            { "image": index_2.imagesPath + "img%20(97).jpg", "alt": 5, "title": "", "text": "Some quick example text to build on the card title and make up the bulk of the card's content." },
            { "image": index_2.imagesPath + "img%20(120).jpg", "alt": 6, "title": "", "text": "Some quick example text to build on the card title and make up the bulk of the card's content." },
        ];
        this.imagePointer = 0;
        for (var index = 0; index < 9; index++) {
            this.images.push({ thumb: index_2.imagesProjectsPath + (index + 1) + index_2.jpg, description: "Image " + (index + 1) });
        }
    }
    HomePageComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        /* run mapper options */
        this.init_map();
        this.eS.broadcast('navBar', this.call.name);
        this.SwitchSlider(window.screen.width, 700);
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
    HomePageComponent.prototype.isEmpty = function (obj) { return index_4.isEmpty(obj); };
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
                // console.log(JSON.stringify(p), this.slideimages[i]); 
            }
        }
        //    console.log(this.slides.length)
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
        this.activeSlideIndex;
    };
    HomePageComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
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
    HomePageComponent.prototype.mailto = function () {
        window.location.href = "mailto:" + this.sendus.name;
    };
    // Contact Form Modal
    HomePageComponent.prototype.contactUs = function () {
        this.closeGreeting();
        // const modalRef = 
        this.openModal(index_1.ContactDialog);
        // modalRef.componentInstance.name = 'World';
    };
    HomePageComponent.prototype.OpenImageModel = function (imageSrc, images, i) {
        this.imagePointer = i;
        // console.log(`imageModalPointer: ${imageSrc.img}, ${images[i].img}, ${i+1}`);
        this.openModalWindow = true;
    };
    HomePageComponent.prototype.cancelImageModel = function () { this.openModalWindow = false; };
    __decorate([
        core_1.ViewChild('t'),
        __metadata("design:type", ng_bootstrap_1.NgbTooltip)
    ], HomePageComponent.prototype, "tooltip", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomePageComponent.prototype, "onResize", null);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], HomePageComponent.prototype, "onWindowScroll", null);
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'home-component',
            templateUrl: '../../views/main_partials/home.ejs',
            styleUrls: ['../../styles/home.css']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, material_1.MatSnackBar, index_5.EventsService])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=home.component.js.map