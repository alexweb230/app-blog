import {Injectable} from '@angular/core';
import {of} from 'rxjs/index';
import {list} from '../models/articlelist';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor() {
    }

    getArticleList() {
        return of(list);
    }

    getArticle(id: number) {
       return of(
           list.find(art => +art.id === +id)
       );

    }
}
