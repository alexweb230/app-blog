import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {Observable} from 'rxjs/index';
import {Articlelist} from '../models/articlelist';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles$: Observable<Articlelist[]>;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {

    this.articles$ = this.articleService.getArticleList();
  }

}
