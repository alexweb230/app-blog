import {Injectable} from '@angular/core';
import {of} from 'rxjs/index';
import {Articlelist, list} from '../models/articlelist';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor(private http: HttpClient) {
    }

    private URL_ROOT = 'http://localhost:3000/articles';

    getArticleHttp(){
        return this.http.get<Articlelist[]>(this.URL_ROOT);
    }

    // getArticleList() {
    //     return of(list);
    // }

    getArticle(id: number) {
       return of(
           list.find(art => +art.id === +id)
       );

    }
}
