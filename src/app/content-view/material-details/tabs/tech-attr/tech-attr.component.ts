import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 't-techAttr',
  templateUrl: './tech-attr.component.html',
  styleUrls: ['./tech-attr.component.css']
})
export class TechAttrComponent implements OnInit {
@Input('edit') toggle: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
