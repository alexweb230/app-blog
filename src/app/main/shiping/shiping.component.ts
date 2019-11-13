import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../servises/products.service';

@Component({
  selector: 'app-shiping',
  templateUrl: './shiping.component.html',
  styleUrls: ['./shiping.component.scss']
})
export class ShipingComponent implements OnInit {

  constructor(private productServide: ProductsService) { }

    shippingCosts;

  ngOnInit() {

      this.shippingCosts = this.productServide.getShipingPrices()

  }

}
