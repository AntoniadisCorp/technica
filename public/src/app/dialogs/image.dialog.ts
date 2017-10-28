import { Component, Input, Output, ElementRef, EventEmitter,OnInit } from '@angular/core';

@Component({
    selector: 'ImageModal',
    template: `
    <!-- Portfolio Modals -->
    <div class="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="true">
       <div class="modal-dialog" role="document">
         <div class="modal-content">
           <div class="close-modal"style="z-index: 100;" (click)="closeGallery()" data-dismiss="modal">
             <div class="lr">
               <div class="rl"></div>
             </div>
           </div>
           <div class="">
             <div class="row">
               <a class="col-lg-2 mx-auto nav-left" (mouseover)="hover=true" (mouseout)="hover=!hover" [ngStyle]="{'opacity': hover? '0.3' : 'initial' }" *ngIf="modalImages.length >1" (click)="prevImage()">
               <div class="next-modal" >
                  <div class="up"></div>
                  <div class="down"></div>
                </div></a>
               <div class="col-lg-8 mx-auto">
                 <div class="modal-body">
                   <h3>Project Title</h3>
                   <hr class="star-primary">

                    <div class="waves-light" mdbRippleRadius>
                    <img *ngIf="!loading"  style="max-height: 469px !important;width: 100%;" class="img-fluid img-centered" src="{{modalImages[imagePointer].image}}" (click)="nextImage()" />
                    </div>
                   
                    <p>Use this area of the page to describe your project. The icon above is part of a free icon set by

                   <a >Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                   <ul class="list-inline item-details">
                     <li>Client:
                       <strong>
                         <a >Empty</a>
                       </strong>
                     </li>
                     <li>Date:
                       <strong>
                         <a >Empty</a>
                       </strong>
                     </li>
                     <li>Service:
                       <strong>
                         <a > Empty</a>
                       </strong>
                     </li>
                   </ul>
                   <button (click)="closeGallery()" md-button class="btn btn-success" data-dismiss="modal">
                     <i class="fa fa-times"></i>
                     Close</button>
                 </div>
               </div>
               <a class="col-lg-2 mx-auto nav-right" style=":hover {opacity:0.3}" *ngIf="modalImages.length >1" (click)="nextImage()">
                  <div class="prev-modal" >
                  <div class="up"></div>
                  <div class="down"></div>
                </div></a>
             </div>
           </div>
         </div>
       </div>
     </div>
    `,
    styleUrls: ['../components/app-home/home.component.css']
})
export class ImageDialog implements OnInit {



    public _element:any;
    public opened:boolean = false;
    public imgSrc:string;
    public currentImageIndex:number;
    public loading:boolean= false;
    public showRepeat:boolean= false;
    private hover = false;

   @Input('modalImages') public modalImages:any;
   @Input('imagePointer') public imagePointer:number;
   @Output('cancelEvent') cancelEvent = new EventEmitter<any>();

    constructor(public element: ElementRef) {
      this._element = this.element.nativeElement;
    }

   ngOnInit() {
     
       this.loading = true;
       if(this.imagePointer >= 0) {
       this.showRepeat = false;
       this.openGallery(this.imagePointer);
     } else {
       this.showRepeat = true;
     }
     
   }

   closeGallery() {
     this.opened = false;
     this.cancelEvent.emit(null);
   }

   prevImage() {
     this.loading = true;
     this.currentImageIndex--;
     if(this.currentImageIndex < 0) {
       this.currentImageIndex = this.modalImages.length-1  ;
     }
     this.openGallery(this.currentImageIndex);
   }

   nextImage() {
     this.loading = true;
     this.currentImageIndex++;
     if(this.modalImages.length === this.currentImageIndex) {
       this.currentImageIndex = 0;
     }
     this.openGallery(this.currentImageIndex);
 
   }
   
   openGallery(index:number) {

     if(!index) { this.currentImageIndex = 1;}

     this.currentImageIndex = index;
     this.opened = true;
     this.imagePointer = this.currentImageIndex
     this.loading = false;
   }
}