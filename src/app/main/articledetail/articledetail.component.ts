import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../services/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Articlelist} from '../models/articlelist';
import {Subscription} from 'rxjs/index';

@Component({
    selector: 'app-articledetail',
    templateUrl: './articledetail.component.html',
    styleUrls: ['./articledetail.component.scss']
})
export class ArticledetailComponent implements OnInit {

    constructor(private articleService: ArticleService,
                private route: ActivatedRoute,
                private router: Router) {
    }


    public articleId: number;
    article: Articlelist;
    artticleSub$: Subscription;


    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.articleId = id;


        this.artticleSub$ = this.articleService.getArticle(this.articleId)
            .subscribe(art => this.article = art);
    }


    articleNext() {
        let count = (this.articleId + 2) - 1;
        this.articleId = count;
        this.router.navigate(['/main', this.articleId]);
        console.log(this.articleId);
    }

}
