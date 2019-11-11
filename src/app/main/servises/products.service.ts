import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  items = [];

  addToCart(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  claerCard(){
    this.items = [];

    return this.items;
  }
}
