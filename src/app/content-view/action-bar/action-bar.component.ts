import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'action-bar',
  templateUrl: './action-bar.component.html',
   encapsulation: ViewEncapsulation.None,
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
