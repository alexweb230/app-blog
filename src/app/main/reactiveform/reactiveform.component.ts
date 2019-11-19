import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

    name = new FormControl('');

    updateName(){
      this.name.setValue('alex');
    }


  constructor() { }

  ngOnInit() {
  }



}
