import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../servises/products.service';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    constructor(private productService: ProductsService, private formBuilder: FormBuilder) {

        this.productForm = this.formBuilder.group({
            name: '',
            address: ''
        });
    }

    cartItem;

    productForm;


    onSubmit(data) {
        console.log(data);
        this.productService.claerCard();
        this.productForm.reset();
    }


    ngOnInit() {

        this.cartItem = this.productService.getItems();

        console.log(this.productForm );


    }

}
