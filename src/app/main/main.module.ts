import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {PageComponent} from './page/page.component';
import {MaterialModule} from '../material/material.module';


@NgModule({
    declarations: [PageComponent],
    imports: [
        CommonModule,
        MainRoutingModule,
        MaterialModule

    ]
})
export class MainModule {
}
