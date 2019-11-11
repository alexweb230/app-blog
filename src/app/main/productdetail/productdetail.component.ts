import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {products} from '../models/products';
import {ProductsService} from '../servises/products.service';



@Component({
    selector: 'app-productdetail',
    templateUrl: './productdetail.component.html',
    styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

    constructor(private router: ActivatedRoute, private productService: ProductsService) {
    }

    productDetail;

    ngOnInit() {
         this.router.paramMap.subscribe(par => {
             this.productDetail = products[+par.get('id')];
         });
    }


    addToCart(p){
        window.alert('Your product has been added to the cart!');
        this.productService.addToCart(p);
    }

}
