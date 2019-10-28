import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../services/article.service';
import {Observable} from 'rxjs/index';
import {Articlelist} from '../models/articlelist';
import {HeaderService} from '../../header/header.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss'],
    animations: [
        trigger('listLoad', [
            transition('* <=> *', [
                query(':enter', [
                    style({opacity: 0, transform: 'translateY(-50px)'}),
                    stagger('50ms',
                        animate('500ms ease-in',
                            style({opacity: 1, transform: 'translateY(0px)'})
                        )
                    )
                ], {optional: true}),


                query(':leave', [
                    animate('500ms ease-in',
                        style({
                            opacity: 0,
                            transform: 'rotate(90deg)'
                        })
                    )
                ], {optional: true})
            ])
        ])
    ]
})
export class ArticleListComponent implements OnInit {

    articles$: Observable<Articlelist[]>;

    loadArticle: Array<Number>;


    constructor(private articleService: ArticleService, private headerServise: HeaderService) {
    }

    ngOnInit() {

        this.articles$ = this.articleService.getArticleHttp();

        this.headerServise.title.next('Welcome Ladies & Gents to Calm Website.');

        this.loadArticle = new Array(13).fill(0).map((n, ind) => ind);
    }

}
