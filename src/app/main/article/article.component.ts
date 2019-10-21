import {Component, Input, OnInit} from '@angular/core';
import {Articlelist} from '../models/articlelist';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() { }


  @Input() ArticleDetail: Articlelist;

  ngOnInit() {
  }

}
