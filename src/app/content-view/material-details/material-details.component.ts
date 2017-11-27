import { Component, OnInit, ViewChild, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'material-details',
  templateUrl: './material-details.component.html',
  styleUrls: ['./material-details.component.css'],
  host: { 'style': 'height: 100%' }
})
export class MaterialDetailsComponent implements OnInit {
  toggle: boolean;
  @Input('edit') editMode: boolean = false;

  @Input('hide') hideMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }
}
