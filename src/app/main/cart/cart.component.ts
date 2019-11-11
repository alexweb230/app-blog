import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../servises/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  cartItem;

  clear;

  ngOnInit() {

    this.cartItem = this.productService.getItems();

    this.clear = this.productService.claerCard();

  }

}
