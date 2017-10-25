import { Injectable } from '@angular/core'
import { Http, Headers, Response, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class EmailsService {

    constructor(private http: Http) { }

    /**
     * sendEmail
     * @param Object
     */
    public sendEmail(customer: Object): Observable<Object> {

        const headers = new Headers(); // { 'Authorization': 'Bearer ' + currentUser.token }
        headers.append('Content-Type', 'application/json');

        return this.http.post('/task/emails', JSON.stringify(customer),
            new RequestOptions ({ headers }))
                .map((res: Response) => res.json());
    }

    /**
     * Subscribe
     * @param string
     */
    public subScribe(email: string): Observable<Object> {

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/task/subscribers', JSON.stringify({email}),
            new RequestOptions ({ headers }))
                .map((res: Response) => res.json());
    }
}
