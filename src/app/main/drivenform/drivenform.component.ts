import {Component, OnInit} from '@angular/core';
import {Hero} from '../models/hero';

@Component({
    selector: 'app-drivenform',
    templateUrl: './drivenform.component.html',
    styleUrls: ['./drivenform.component.scss']
})
export class DrivenformComponent implements OnInit {

    constructor() {
    }


    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];



    mod = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');


    submited = false;

    onSubmit() {
        this.submited = true;
    }

    get diagnostic(){
        return JSON.stringify(this.mod);
    }

    ngOnInit() {

    }

}
