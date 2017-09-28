import { Component, OnInit, ViewChild } from '@angular/core';
// import { MaterialTabsComponent } from './material-tabs/material-tabs.component';

@Component({
  selector: 'material-details',
  templateUrl: './material-details.component.html',
  styleUrls: ['./material-details.component.css'],
  host: {'style' : 'height: 100%'}
})
export class MaterialDetailsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  // @ViewChild(MaterialTabsComponent) materialTab:MaterialTabsComponent; 

  // onMaterialHChange(e:any): void {
  //    this.materialTab.checkOverflowMaterial();
  // }

}