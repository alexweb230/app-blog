import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {Observable} from 'rxjs/index';
import {Articlelist} from '../models/articlelist';
import {HeaderService} from '../../header/header.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles$: Observable<Articlelist[]>;

  loadArticle: Array<Number>;




  constructor(private articleService: ArticleService, private headerServise: HeaderService) { }

  ngOnInit() {

    this.articles$ = this.articleService.getArticleHttp();

    this.headerServise.title.next('Welcome Ladies & Gents to Calm Website.');

     this.loadArticle = new Array(13).fill(0).map((n, ind) => ind);



  }

}
