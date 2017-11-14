import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent {
@Input('edit') toggle: boolean = false;
 
  constructor() {    
     
  }


}

