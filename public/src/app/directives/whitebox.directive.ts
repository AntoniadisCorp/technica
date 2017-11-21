import { Component, Pipe,  OnInit, PipeTransform, Input } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Pipe({
    name: 'sanitizeHtml'
})
export class SanitizeHtmlDirective implements PipeTransform  {

   constructor(private _sanitizer: DomSanitizer){}  

   transform(v: string) : SafeHtml {
        // console.log(this._sanitizer.bypassSecurityTrustHtml(v))
        return this._sanitizer.bypassSecurityTrustHtml(v); 
   } 
} 

@Component({
    selector: 'whitebox',
    template: `
    <div class="wow animated fadeIn" style="position: relative;top: -15px;" data-wow-delay="0.2s">
    <div class="col-md-12">
        <div class="jumbotron" [innerHTML]="setHtml | sanitizeHtml">

        </div>
        </div>
        `
    
})
export class WhiteboxComponent implements OnInit {

    @Input() setHtml: SafeHtml;

    constructor(private _sanitizer: DomSanitizer) {}


    ngOnInit() { }
}

export const WHITEBOX_DIRECTIVES = [

    SanitizeHtmlDirective,
    WhiteboxComponent
];
