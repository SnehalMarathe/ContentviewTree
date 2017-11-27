import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'material-details',
  templateUrl: './material-details.component.html',
  styleUrls: ['./material-details.component.css'],
  host: { 'style': 'height: 100%' }
})
export class MaterialDetailsComponent implements OnInit {

  @Input('edit') editMode: boolean = false;

  toggleMaterialDetails: boolean = false;

  constructor() { }

  onClick(e: any) {
    this.toggleMaterialDetails = e;
  }


  ngOnInit() {
  }
}
