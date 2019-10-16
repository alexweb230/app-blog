import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../services/article.service';
import {ActivatedRoute} from '@angular/router';
import {Articlelist} from '../models/articlelist';
import {Subscription} from 'rxjs/index';

@Component({
    selector: 'app-articledetail',
    templateUrl: './articledetail.component.html',
    styleUrls: ['./articledetail.component.scss']
})
export class ArticledetailComponent implements OnInit {

    constructor(private articleService: ArticleService, private route: ActivatedRoute) {
    }


    id: number;
    article: Articlelist;
    artticleSub$: Subscription;

    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');

        this.artticleSub$ = this.articleService.getArticle(this.id)
            .subscribe(art => {
                this.article = art;
                console.log(this.article);
            });
    }

}
