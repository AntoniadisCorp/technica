import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorStateMatcher } from '@angular/material';
import { EmailsService } from '../services/index';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ReCaptchaComponent } from 'angular2-recaptcha';

const RECAPTCHA_SITE_KEY = '6Ld52ywUAAAAABBVB1obaeIl6CmWi7BidW1uQb4t';
const TextmaxLength:  number = 1000


interface Captcha {

    captcha?: string,
    captchaKey?: string,
    validbut?: boolean,
    RespondError?: string,
    submited?: boolean
}

interface Customer {

    name?: string,
    email?: string,
    subject?: string,
    message?: string
}

interface Validator {
    
    patterName?: string,
    patterEmail?: string,
    patterSubject?: string,
    patterText?: string,
    TextmaxLength?: number
}

@Component({
    selector: 'contactus',
    templateUrl: 'contact.component.html',
    styles : [`
    .modal-header {
        text-align: center;
        margin: -2rem 1rem 1rem;
        padding: 1.5rem;
        border: none;
        border-radius: 3px;
        -webkit-transform: translate(0,0);
        -ms-transform: translate(0,0);
        transform: translate(0,0);
        -webkit-transition: -webkit-transform .3s ease-out;
        transition: transform .3s ease-out;
        transition: transform .3s ease-out,-webkit-transform .3s ease-out;
        -webkit-transform: translate(0,-25%);
        -ms-transform: translate(0,-25%);
        transform: translate(0,-25%);
        margin-top: 10%;
    }
    .eform {
        min-width: 150px;
        max-width: 500px;
        width: 100%;
      }
      
      .efull-width {
        width: 100%;
      }
    

    .modal.show .modal-dialog {
        
    }
    .modal.fade .modal-dialog {
        
    }
    .modal-dialog.cascading-modal {
        
    }
    @media (min-width: 576px)
    .modal-header {
        max-width: 500px;
        margin: 30px auto;
    }
    .modal-header {
        position: relative;
        width: auto;
        margin: 10px;
    }
    .btn-floating, .btn-floating.btn-flat.active, .btn:active, .btn:focus, .btn:hover, .card.card-cascade.card-avatar img, .card.card-cascade.wider.reverse .card-body, .colorful-select .dropdown-content li.active span, .comments-list .badge, .dropdown .dropdown-menu .dropdown-item:active, .dropdown .dropdown-menu .dropdown-item:hover, .form-header, .md-pills .nav-link.active:hover, .media .media-left img, .modal-content, .modal-header, .nav-tabs, .picker__box .picker__table .picker--focused, .picker__box .picker__table .picker__day--selected, .picker__box .picker__table .picker__day--selected:hover, .pricing-card .header, .reply-form .badge, .z-depth-1-half, ul.instagram-photos li img {
        -webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);
        box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);
    }
    
    `]
})


export class ContactDialog implements OnInit {

    
    public captchaModel: Captcha

    public customer: Customer
    
    public cValidator: Validator

    public angForm: FormGroup

    @ViewChild(ReCaptchaComponent) ReCaptchaV2: ReCaptchaComponent;

    constructor(private fb: FormBuilder, private activeModal: NgbActiveModal, 
        private es: EmailsService) {
            // this.createForm()
        }

    ngOnInit() {
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
            patterText: `^[A-Za-z0-9,!@%#. ]{5,${TextmaxLength}}\.[A-Za-z0-9,!@%#. ]{5,${TextmaxLength}}$`,
            TextmaxLength: TextmaxLength
        };

        this.customer = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };

    }

    public createForm() {

        this.angForm = this.fb.group({
           name: ['', Validators.required ],
           address: ['', Validators.required ]
        });
      }

    public onSubmit(): void {

        this.captchaModel['validbut'] = false;
        this.captchaModel['submited'] = !this.captchaModel['validbut']

        this.es.sendEmail(this.customer).subscribe( success => {


                const ret = success;

                if (ret && ret['info']) { // console.log('success respond: ', JSON.stringify(ret))

                    this.captchaModel['validbut'] = true, this.activeModal.close('Email')
                }

                this.resetCaptchaModel(3500)
                return;
                // console.log('error respond: ', JSON.stringify(ret))

            }, error => {

                    this.captchaModel['validbut'] = false;

                    this.resetCaptchaModel(3500);
                    console.log(`TypeError: ${error}`, );
            });

    }
    
    private resetCaptchaModel(delay: number):void {
        
        this.captchaModel['RespondError'] = 'Email Delivery Failure, try again'
        this.ReCaptchaV2.reset()
        setTimeout(() => {
            this.captchaModel['validbut'] = true
            this.captchaModel['submited'] = false 
            this.captchaModel['RespondError']= 'check the captcha'
        }, delay)
    }

    public onDismissed(): void {

        this.activeModal.dismiss('Cross click')
    }

    /**
     * onTextChange
     * @param event
     */
    public onChange(event: any): void {

        this.captchaModel['validbut'] = true
    }

    public resolved(captchaResponse: string): void {
        // console.log(`Resolved captcha with response ${captchaResponse}:`);
    }
}
