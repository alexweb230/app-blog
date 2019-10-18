import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticledetailComponent} from './articledetail/articledetail.component';

const routes: Routes = [

    // {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // },

    {
        path: '',
        component: ArticleListComponent,
    },

    {
        path: ':id',
        component: ArticledetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
