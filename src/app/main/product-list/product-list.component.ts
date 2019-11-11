import {Component, OnInit} from '@angular/core';
import {products} from '../models/products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    productList = products;

    share() {
        alert('hello');
    }


    test(){
        window.alert('dccL;CMLC');
    }


}
