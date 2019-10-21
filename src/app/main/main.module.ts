import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [ArticleListComponent, ArticledetailComponent, ArticleComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
