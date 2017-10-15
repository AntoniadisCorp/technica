import { Component, OnInit, Input, HostListener, Renderer2, Inject, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons, NgbTooltip } from '@ng-bootstrap/ng-bootstrap'
import { ContactDialog } from '../dialogs/index'
import { imagesPath, imagesProjectsPath, jpg } from '../variables/index'
import { Scrollspy }      from '../classes/index'
import { isEmpty } from '../routines/index'
import { DOCUMENT } from '@angular/platform-browser'
import { MatSnackBar } from '@angular/material'


@Component({
    selector: 'home-component',
    templateUrl: '../../views/main_partials/home.ejs',
    styleUrls: ['../../styles/home.css']
})


export class HomePageComponent implements OnInit {

    // Image Modal Window Variables
    openModalWindow:boolean=false;
    imagePointer:number;
    images: Array <Object> = []


    // map variables
    lat: number
    lng: number
    zoom: number
    fullscreenControl: boolean
    marker_title: string
    marker_label: string
    rotateControl: boolean

    // chip material color
    chip_color: string

    // About
    introabout: string // intro about
    about: string // Real about
    
    // contact us form variables
    location = { name: 'London, NY 10012, USA', color: 'primary' }
    call = { name: '+447 490 40 6531', color: 'accent' }
    sendus = { name: 'info@technicalprb.com', color: 'warn' }

    public myInterval: number = 3000;
    public activeSlideIndex: number = 0;
    public noWrapSlides: boolean = false;

    private closeResult: string;
    private greeting: Object;
    private greetEnable: boolean;

    public slides: Array<Object>
    public slideimages: Object
    private sl: Array<Object>
    private win: Scrollspy

    @ViewChild('t') public tooltip: NgbTooltip;
    
    constructor(private modalService: NgbModal, private snack: MatSnackBar) {

        // initialize WindowRef
        this.win = new Scrollspy()
        
        this.greeting = {}
        this.greetEnable = true
        this.introabout = `
        <!--Section: Features -->
        <section class="section feature-box" id="Start">
        
            <!--Section heading-->
            <h1 class="section-heading pt-4" style="text-align: center;">Why is it so great?</h1>
            <!--Section description-->
            <p class="section-description lead grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum.</p>
        
            <!--Grid row-->
            <div class="row features-small">
        
                <!--Grid column-->
                <div class="col-md-4 mb-r">
                    <span class="fixed-icon1" >
                            <a title="Safety Technical PRB Plumbing" style="margin-bottom: 31px;"></a>
                    </span>
                    <div class="col-10 col-md-9 col-lg-10 float-right">
                        <h4 class="feature-title">Safety</h4>
                        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>
                        <!-- <a class="btn btn-primary btn-sm ml-0 waves-light" mdbRippleRadius>Learn more</a> -->
                    </div>
                </div>
                <!--Grid column-->
        
                <!--Grid column-->
                <div class="col-md-4 mb-r">
                    <span class="fixed-icon2" >
                            <a title="Customize Technical PRB Plumbing" style="margin-bottom: 31px;"></a>
                    </span>
                    <div class="col-10 col-md-9 col-lg-10 float-right">
                        <h4 class="feature-title">Customization</h4>
                        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>
                        <!-- <a class="btn btn-pink btn-sm ml-0 waves-light" mdbRippleRadius>Learn more</a> -->
                    </div>
                </div>
                <!--Grid column-->
        
                <!--Grid column-->
                <div class="col-md-4 mb-r">
                    <span class="fixed-icon3" >
                            <a title="Support Technical PRB Plumbing" style="margin-bottom: 31px;"></a>
                    </span>
                    <div class="col-10 col-md-9 col-lg-10 float-right">
                        <h4 class="feature-title">Support</h4>
                        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>
                        <!-- <a class="btn btn-secondary btn-sm ml-0 waves-light" mdbRippleRadius>Learn more</a> -->
                    </div>
                </div>
                <!--Grid column-->
        
            </div>
            <!--Grid row-->
            <style>
            span.fixed-icon1 a {
                display: block;
                width: 130px;
                height: 131px;
                background-image: url(../../img/svg/service-icons.png);
                background-position: -632px 82%;
                background-repeat: no-repeat;
                float: right;
                left: -102px;
                cursor: pointer;
                position: relative;
              }
              span.fixed-icon2 a {
                display: block;
                width: 137px;
                height: 130px;
                background-image: url(../../img/svg/service-icons.png);
                background-position: 33.4% 82%;
                background-repeat: no-repeat;
                float: right;
                left: -102px;
                cursor: pointer;
                position: relative;
              }
              span.fixed-icon3 a {
                display: block;
                width: 130px;
                height: 130px;
                background-image: url(../../img/svg/service-icons.png);
                background-position: 57% 18%;
                background-repeat: no-repeat;
                float: right;
                left: -102px;
                cursor: pointer;
                position: relative;
              }</style>
        </section>
        <!--Section: Features v.2-->`


        this.about = `
        <!--Section heading-->
        <h1 class="section-heading pt-4">It's all part of the service.?</h1>
        <!--Section description-->
        <p class="section-description lead grey-text">Technical PRB are qualified and experienced plumbers and boiler engineers, offering plumbing and central heating services in London, covering areas including: Kensington - W8, Chelsea - SW3, Knightsbridge - SW7, Notting Hill - W1, West Brompton - SW10, Knightsbridge ­ SW1X, Kensington ­ W8, Mayfair (North) ­ W1K, Belgravia ­ SW1W, Chelsea, Brompton ­ SW3, South Kensington ­ SW7, Notting Hill ­ W11, Mayfair South ­ W1J, Buckingham Gate to Victoria Station - SW1E, Hanover Square & Savile Row, Westminster - SW1, West End - W1, Highgate - Haringey, Colville - Kensington and Chelsea, Hyde Park - Westminster, Vincent Square - Westminster, Belsize - Camden, Sands End - Hammersmith and Fulham, Earl's Court - Kensington and Chelsea, Highgate - Camden, Chiswick Homefields - Hounslow, Notting Barns - Kensington and Chelsea, Village - Southwark, Aldersgate - City of London, Avonmore and Brook Green - Hammersmith and Fulham, St Charles - Kensington.</p>
        `

        this.sl = [
            {"image": imagesPath + "img%20(14).jpg", "alt": 1, "title":"Technical support", "text":"Some quick example text to build on the card title and make up the bulk of the card's content."},
            {"image": imagesPath + "aftersale.jpg", "alt": 2, "title":"After Sales Service", "text":"Some quick example text to build on the card title and make up the bulk of the card's content." },
            {"image": imagesPath + "img%20(25).jpg", "alt": 3, "title":"Maintenance contracts", "text":"Some quick example text to build on the card title and make up the bulk of the card's content."},
            {"image": imagesPath + "img%20(37).jpg", "alt": 4, "title":"", "text":"Some quick example text to build on the card title and make up the bulk of the card's content."},
            {"image": imagesPath + "img%20(97).jpg", "alt": 5, "title":"", "text":"Some quick example text to build on the card title and make up the bulk of the card's content."},
            {"image": imagesPath + "img%20(120).jpg", "alt": 6, "title":"", "text":"Some quick example text to build on the card title and make up the bulk of the card's content."},
        ] 

        this.imagePointer = 0


        for (var index = 0; index < 9; index++) {
            this.images.push( { thumb: imagesProjectsPath + (index+1) + jpg , description: `Image ${index+1}` }) ;
        }

       
    }

    public ngOnInit(): void {
        
       //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
       //Add 'implements OnInit' to the class.
       

       /* run mapper options */ 
       this.init_map()
       
       this.SwitchSlider(window.screen.width, 700)
    }

    private closeGreeting(): void {

        this.tooltip.close()
        this.greetEnable = false
    } 
    public changeGreeting(greeting: any): void {

        const isOpen = this.tooltip.isOpen();
        this.tooltip.close();
        if (greeting !== this.greeting || !isOpen) {
          this.greeting = greeting;
          this.tooltip.open(greeting);
        }
      }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      
        this.SwitchSlider(event.target.innerWidth, 700)      
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event) {
        
        if (this.greetEnable)
            this.changeGreeting({greeting: 'Contact us'}), this.greetEnable = !this.greetEnable
    }

    public isEmpty (obj): boolean { return isEmpty(obj) } 

    private SwitchSlider(screen: number, maxlimit: number): void {

        this.slides = [], this.slideimages = {}

        if ( screen < maxlimit ) {
            this.slides = this.sl
        } else {
            let len = this.sl.length, p;

            for (let i=0; i<len/3+len%3; i++) {

                this.slides.push(0)
                p = []
                for (let j=i*3; j<3*(i+1); j++) p.push(this.sl[j])

                this.slideimages[i] = p
                // console.log(JSON.stringify(p), this.slideimages[i]); 
            }
        }
    //    console.log(this.slides.length)
    }

    private openModal(content): void {

        this.modalService.open(content).result.then( result => {
            this.closeResult = `Closed with: ${result}`
            this.openSnackBar(result + '', `Sended Successfully`)

        }, reason => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        })
    }

    public activeSlideChange(): void {

        this.activeSlideIndex
    }
    
    private getDismissReason(reason: any): string {

        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    /**
     * @private openSnackBar
     * @param message 
     * @param action 
     */
    private openSnackBar(message: string, action: string) {

        this.snack.open(message, action, {duration: 3500,})
    }
    

    /**
     * mailto
     */
    public mailto (): void {
        window.location.href = `mailto:${this.sendus.name}`
    }

    // Contact Form Modal
    public contactUs(): void {

        this.closeGreeting()
        // const modalRef = 
        this.openModal(ContactDialog)
        // modalRef.componentInstance.name = 'World';
    }

    public OpenImageModel(imageSrc, images, i): void {

        this.imagePointer  = i;
        // console.log(`imageModalPointer: ${imageSrc.img}, ${images[i].img}, ${i+1}`);
        this.openModalWindow = true;
    }

    cancelImageModel() { this.openModalWindow = false; }

    
    private init_map = () => {
        
        this.lat = 51.678418
        this.lng = 7.809007
        this.zoom = 14
        this.rotateControl = true
        this.fullscreenControl = true
        this.marker_title = 'London'
        this.marker_label = 'Our Offices'
    }
        
                
}