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
var index_1 = require("../services/index");
var forms_1 = require("@angular/forms");
var ng2_recaptcha_1 = require("ng2-recaptcha/ng2-recaptcha");
var RECAPTCHA_SITE_KEY = '6Ld52ywUAAAAABBVB1obaeIl6CmWi7BidW1uQb4t';
var TextmaxLength = 1000;
var ContactDialog = /** @class */ (function () {
    function ContactDialog(fb, activeModal, es) {
        this.fb = fb;
        this.activeModal = activeModal;
        this.es = es;
        // this.createForm()
    }
    ContactDialog.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
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
            name: ['', forms_1.Validators.required],
            address: ['', forms_1.Validators.required]
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
            return; //console.log('error respond: ', JSON.stringify(ret))
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
    __decorate([
        core_1.ViewChild(ng2_recaptcha_1.RecaptchaComponent),
        __metadata("design:type", ng2_recaptcha_1.RecaptchaComponent)
    ], ContactDialog.prototype, "ReCaptchaV2", void 0);
    ContactDialog = __decorate([
        core_1.Component({
            selector: 'contactus',
            templateUrl: '../../views/main_partials/contact.ejs',
            styles: ["\n    .modal-header {\n        text-align: center;\n        margin: -2rem 1rem 1rem;\n        padding: 1.5rem;\n        border: none;\n        border-radius: 3px;\n        -webkit-transform: translate(0,0);\n        -ms-transform: translate(0,0);\n        transform: translate(0,0);\n        -webkit-transition: -webkit-transform .3s ease-out;\n        transition: transform .3s ease-out;\n        transition: transform .3s ease-out,-webkit-transform .3s ease-out;\n        -webkit-transform: translate(0,-25%);\n        -ms-transform: translate(0,-25%);\n        transform: translate(0,-25%);\n        margin-top: 10%;\n    }\n    .eform {\n        min-width: 150px;\n        max-width: 500px;\n        width: 100%;\n      }\n      \n      .efull-width {\n        width: 100%;\n      }\n    \n\n    .modal.show .modal-dialog {\n        \n    }\n    .modal.fade .modal-dialog {\n        \n    }\n    .modal-dialog.cascading-modal {\n        \n    }\n    @media (min-width: 576px)\n    .modal-header {\n        max-width: 500px;\n        margin: 30px auto;\n    }\n    .modal-header {\n        position: relative;\n        width: auto;\n        margin: 10px;\n    }\n    .btn-floating, .btn-floating.btn-flat.active, .btn:active, .btn:focus, .btn:hover, .card.card-cascade.card-avatar img, .card.card-cascade.wider.reverse .card-body, .colorful-select .dropdown-content li.active span, .comments-list .badge, .dropdown .dropdown-menu .dropdown-item:active, .dropdown .dropdown-menu .dropdown-item:hover, .form-header, .md-pills .nav-link.active:hover, .media .media-left img, .modal-content, .modal-header, .nav-tabs, .picker__box .picker__table .picker--focused, .picker__box .picker__table .picker__day--selected, .picker__box .picker__table .picker__day--selected:hover, .pricing-card .header, .reply-form .badge, .z-depth-1-half, ul.instagram-photos li img {\n        -webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\n        box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\n    }\n    \n    "]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, ng_bootstrap_1.NgbActiveModal,
            index_1.EmailsService])
    ], ContactDialog);
    return ContactDialog;
}());
exports.ContactDialog = ContactDialog;
//# sourceMappingURL=contact.dialog.js.map