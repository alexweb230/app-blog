import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {Articlelist} from '../models/articlelist';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    private URL_ROOT = 'http://localhost:3000/articles';

    constructor(private http: HttpClient) {
    }


    getArticleHttp() {
        return this.http.get<Articlelist[]>(this.URL_ROOT).pipe(delay(1000));
    }

    getArticle(id: number) {
        return this.http.get<Articlelist>(`${this.URL_ROOT}/${id}`);
    }




    // addDelay(obs: Observable<any>){
    //     return obs.pipe(delay(1000));
    // }

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
