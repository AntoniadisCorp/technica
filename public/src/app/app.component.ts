import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { /* AuthenticationService, TaskService,
  AlertService, UserService, */
   EventsService } from './services';
// import { AuthGuard, DeAuthGuard } from './_guards/index'

@Component({

  selector    : 'app-prb',
  templateUrl : 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls   : [ 'app.component.css'],
  providers   : [ EventsService ]
})

export class AppComponent implements OnInit {

    public pageType: boolean;

    constructor () {}

    /**
     * ngOnInit
     */
    public ngOnInit() {
        // remove style from body
        document.getElementsByTagName('body')[0].removeAttribute('style');

        this.pageType = !/admin/.test(window.location.pathname) ?  true : false;
    }
}
