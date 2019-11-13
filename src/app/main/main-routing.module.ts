import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {CartComponent} from './cart/cart.component';
import {ShipingComponent} from './shiping/shiping.component';

const routes: Routes = [
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: 'product/:id',
        component: ProductdetailComponent
    },

    {
        path: 'cart',
        component: CartComponent,
        // children: [
        //     {
        //         path: 'child',
        //         component: ShipingComponent
        //     }
        // ]
    },
    {
        path: 'cart/shiping',
        component: ShipingComponent
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
