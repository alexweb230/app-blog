import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

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


  getShipingPrices(){
    return this.http.get('/assets/db.json');
  }
}
