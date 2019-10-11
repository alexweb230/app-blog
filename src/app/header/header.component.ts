import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    navItem = [
        'Home',
        'ABOUT',
        'PORTFOLIO',
        'SUPPORT',
        'SUPPORT'
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
