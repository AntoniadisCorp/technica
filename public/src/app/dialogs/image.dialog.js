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
var ImageDialog = /** @class */ (function () {
    function ImageDialog(element) {
        this.element = element;
        this.opened = false;
        this.loading = false;
        this.showRepeat = false;
        this.hover = false;
        this.cancelEvent = new core_1.EventEmitter();
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
    __decorate([
        core_1.Input('modalImages'),
        __metadata("design:type", Object)
    ], ImageDialog.prototype, "modalImages", void 0);
    __decorate([
        core_1.Input('imagePointer'),
        __metadata("design:type", Number)
    ], ImageDialog.prototype, "imagePointer", void 0);
    __decorate([
        core_1.Output('cancelEvent'),
        __metadata("design:type", Object)
    ], ImageDialog.prototype, "cancelEvent", void 0);
    ImageDialog = __decorate([
        core_1.Component({
            selector: 'ImageModal',
            template: "\n    <!-- Portfolio Modals -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n       <div class=\"modal-dialog\" role=\"document\">\n         <div class=\"modal-content\">\n           <div class=\"close-modal\" (click)=\"closeGallery()\" data-dismiss=\"modal\">\n             <div class=\"lr\">\n               <div class=\"rl\"></div>\n             </div>\n           </div>\n           <div class=\"container\">\n             <div class=\"row\">\n               <a class=\"col-lg-2 mx-auto nav-left\" (mouseover)=\"hover=true\" (mouseout)=\"hover=!hover\" [ngStyle]=\"{'opacity': hover? '0.3' : 'initial' }\" *ngIf=\"modalImages.length >1\" (click)=\"prevImage()\">\n               <div class=\"next-modal\" >\n                  <div class=\"up\"></div>\n                  <div class=\"down\"></div>\n                </div></a>\n               <div class=\"col-lg-8 mx-auto\">\n                 <div class=\"modal-body\">\n                   <h2>Project Title</h2>\n                   <hr class=\"star-primary\">\n\n                    <div class=\"waves-light\" mdbRippleRadius>\n                    <img *ngIf=\"!loading\"  style=\"max-height: 469px !important;\" class=\"img-fluid img-centered\" src=\"{{modalImages[imagePointer].thumb}}\" (click)=\"nextImage()\" />\n                    </div>\n                   \n                    <p>Use this area of the page to describe your project. The icon above is part of a free icon set by\n\n                   <a href=\"https://sellfy.com/p/8Q9P/jV3VZ/\">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>\n                   <ul class=\"list-inline item-details\">\n                     <li>Client:\n                       <strong>\n                         <a href=\"http://startbootstrap.com\">Start Bootstrap</a>\n                       </strong>\n                     </li>\n                     <li>Date:\n                       <strong>\n                         <a href=\"http://startbootstrap.com\">April 2014</a>\n                       </strong>\n                     </li>\n                     <li>Service:\n                       <strong>\n                         <a href=\"http://startbootstrap.com\">Web Development</a>\n                       </strong>\n                     </li>\n                   </ul>\n                   <button (click)=\"closeGallery()\" md-button class=\"btn btn-success\" data-dismiss=\"modal\">\n                     <i class=\"fa fa-times\"></i>\n                     Close</button>\n                 </div>\n               </div>\n               <a class=\"col-lg-2 mx-auto nav-right\" style=\":hover {opacity:0.3}\" *ngIf=\"modalImages.length >1\" (click)=\"nextImage()\">\n                  <div class=\"prev-modal\" >\n                  <div class=\"up\"></div>\n                  <div class=\"down\"></div>\n                </div></a>\n             </div>\n           </div>\n         </div>\n       </div>\n     </div>\n    ",
            styleUrls: ['../../styles/home.css']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ImageDialog);
    return ImageDialog;
}());
exports.ImageDialog = ImageDialog;
//# sourceMappingURL=image.dialog.js.map