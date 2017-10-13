import { OnInit, AfterViewInit, Directive, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser'
// import { Scrollspy} from '../classes/index'
import { extractElementPosition } from '../routines/index'
import { EventsService } from '../services/index'

@Directive({
  selector: '[scroll-spy]'
})
export class ScrollSpyDirective implements AfterViewInit {

  private elements = [];
  private currentActiveLink;
  private directNavigation: boolean = false;

  // Window properties, like Scrollspy
  // public win: Scrollspy

  // TODO: Change the any type to Document when fix https://github.com/angular/angular/issues/15640
  constructor(@Inject(DOCUMENT) private document: any, private el: ElementRef,
              private renderer: Renderer2, private eventsService: EventsService) {
              // initialize WindowRef
              // this.win = new Scrollspy()
  }

  public ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.collectIds()
    // console.log('ScrollSpyDirective started..')
  }

  private collectIds() {

    this.elements = [];

    let elements = this.el.nativeElement.querySelectorAll('a');

    for (let i = 0; i < elements.length; i++) {
      let elem = elements.item(i);

      let id = this.getId(elem);
      // console.log(`collecting ids: ${JSON.stringify(id)}`)

      if (!id)
        continue;

      let destination = this._getPeerElement(id)
      
      // console.log(` destination: ${JSON.stringify(destination)} for id: ${id}`)

      if (!destination)
        continue;
      

      // elem.addEventListener('click', this._onLinkClicked.bind(this));

      this.elements.push({
        id,
        link: elem,
        destination
      })

    }
  }

  private _onLinkClicked(event: Event) {

    event.preventDefault()
    let target = event.currentTarget
    , id = this.getId(target);

    
    // setTimeout(() => this.win.smoothScroll(id+''), 100) // set 100 ms
    
    let destination = this._getPeerElement(id)

    this.directNavigation = true


    // let position = extractElementPosition(this.document, destination)

    //window.scrollTo({top: position.top - 25, left: 0}) // , behavior: 'smooth'

    this._cleanCurrentLink();
    this._setCurrentLink(target);
    this.directNavigation = false;
  }

  private _getPeerElement(id) {

    let destination = this.document.getElementById(id)

    if (!destination) return null

    return destination;
  }

  private getId(elem) {

    let href = elem.getAttribute('ref');

    if (!href) return null

    // console.log('href: ', href)
    return href.replace('#', '');
  }


  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event: Event) {

    // events broadcast service
    /* this.eventsService.on('WindowScroll', a => {

      this.directNavigation = !a
      // console.log('a: ', !a)
    }) */

    // console.log('directNavigation: ', this.directNavigation)

    if (this.directNavigation) 
      return

    this.collectIds()

    for (let elem of this.elements) {

      let top = elem.destination.getBoundingClientRect().top;
      // console.log('top destination: ', top)
      if (top > -100 && top < 100) {

        // console.log('set currnet link')
        this._cleanCurrentLink()
        this._setCurrentLink(elem.link)
        break
      }
    }
  }

  private _cleanCurrentLink(): void {

    if (!this.currentActiveLink)
      return;
      // console.log( '_cleanCurrentLink: ', this.currentActiveLink)
    this.renderer.removeClass(this.currentActiveLink, 'active');
  }

  private _setCurrentLink(elem) {

    this.currentActiveLink = elem;

    // console.log( '_setCurrentLink: ', elem)
    this.renderer.addClass(this.currentActiveLink, 'active');
  }
}
