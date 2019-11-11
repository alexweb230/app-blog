import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [ProductListComponent, ProductAlertsComponent, ProductdetailComponent, CartComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
