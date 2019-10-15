import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [ArticleListComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
