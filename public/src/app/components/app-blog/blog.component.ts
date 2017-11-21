import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
    // selector: 'blog',
    templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.css']
})
export class BlogPageComponent implements OnInit {

    public Posts: Array<Object>
    // MdPaginator Inputs
    public length: number = 100;
    public pageSize: number = 10;
    public pageSizeOptions: Array<number>;

    // MdPaginator Output
    pageEvent: PageEvent;

    constructor() {

        this.Posts = [

            {title: 'Post title',subtitle: 'Secondary text', byperson: 'John Doe',datetime: '30.04.2016', image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(126).jpg', contain:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, officia omnis. Vero nihil neque dignissimos
            hic voluptas quisquam amet porro, similique libero ullam veritatis tempora cumque voluptates
            harum. Repellendus, impedit.`},
            {title: 'Post title',subtitle: 'Secondary text', byperson: 'John Doe',datetime: '30.04.2016', image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(127).jpg', contain:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, officia omnis. Vero nihil neque dignissimos
            hic voluptas quisquam amet porro, similique libero ullam veritatis tempora cumque voluptates
            harum. Repellendus, impedit.`},
            {title: 'Post title',subtitle: 'Secondary text', byperson: 'John Doe',datetime: '30.04.2016', image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(128).jpg', contain: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, officia omnis. Vero nihil neque dignissimos
            hic voluptas quisquam amet porro, similique libero ullam veritatis tempora cumque voluptates
            harum. Repellendus, impedit.`},
        ]
    }

    ngOnInit() {

        this.length = this.Posts.length;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100]
    }

    setPageSizeOptions(setPageSizeOptionsInput: string) {
        
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }


}