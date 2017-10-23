import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialDetailsComponent } from './material-details/material-details.component';

@Component({
  selector: 'content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // @ViewChild(MaterialDetailsComponent) materialDetails:MaterialDetailsComponent;

  // onMaterialHChange(e:any): void {
  //    this.materialDetails.TabsComponent.checkOverflowMaterial();
  // }

}