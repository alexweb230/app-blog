import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../services/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Articlelist} from '../models/articlelist';
import {Subscription} from 'rxjs/index';
import {HeaderService} from "../../header/header.service";

@Component({
    selector: 'app-articledetail',
    templateUrl: './articledetail.component.html',
    styleUrls: ['./articledetail.component.scss']
})
export class ArticledetailComponent implements OnInit {

    constructor(private articleService: ArticleService,
                private route: ActivatedRoute,
                private headerServise: HeaderService,
                private router: Router) {
    }


    public articleId: number;
    article: Articlelist;
    artticleSub$: Subscription;


    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.articleId = id;
        console.log(this.articleId);

        this.artticleSub$ = this.articleService.getArticle(this.articleId)
            .subscribe(art => {
                this.article = art;
                this.headerServise.title.next(this.article.title);
            });



    }



}
