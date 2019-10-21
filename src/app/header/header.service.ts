import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

   title: BehaviorSubject<string>;



  constructor() {

    this.title = new BehaviorSubject('Welcome Ladies & Gents to Calm Website.');
  }
}
