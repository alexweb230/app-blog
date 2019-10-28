import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleService} from '../services/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Articlelist} from '../models/articlelist';
import {Subscription} from 'rxjs/index';
import {HeaderService} from '../../header/header.service';


@Component({
    selector: 'app-articledetail',
    templateUrl: './articledetail.component.html',
    styleUrls: ['./articledetail.component.scss'],
})
export class ArticledetailComponent implements OnInit, OnDestroy {

    constructor(private articleService: ArticleService,
                private route: ActivatedRoute,
                private headerServise: HeaderService,
                private router: Router) {
    }


    articleId: number;
    article: Articlelist;
    articleSub$: Subscription;


    ngOnInit() {
        this.articleId = +this.route.snapshot.paramMap.get('id');


        this.articleSub$ = this.articleService.getArticle(this.articleId).subscribe(data => {
            this.article = data;
            this.headerServise.title.next(this.article.title);
        });


        //
        // this.artticleSub$ = this.articleService.getArticle(this.articleId)
        //     .subscribe(art => {
        //         this.article = art;
        //         this.headerServise.title.next(this.article.title);
        //     });


    }

    ngOnDestroy(): void {
        this.articleSub$.unsubscribe();
    }


}
