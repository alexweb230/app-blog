import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductdetailComponent} from './productdetail/productdetail.component';

const routes: Routes = [
    {
      path: '',
      component: ProductListComponent
    },
    {
        path: 'product/:id',
        component: ProductdetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
