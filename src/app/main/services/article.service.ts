import {Injectable} from '@angular/core';
import {of} from 'rxjs/index';
import {Articlelist} from '../models/articlelist';
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

    getArticle(id: number){
        return this.http.get<Articlelist>(`${this.URL_ROOT}/${id}`);
    }

    // getArticleList() {
    //     return of(list);
    // }

    // getArticle(id: number) {
    //    return of(
    //        list.find(art => +art.id === +id)
    //    );
    //
    // }
}
