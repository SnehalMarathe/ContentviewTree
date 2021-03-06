import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialDetailsComponent } from './material-details/material-details.component';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'content-view',
  templateUrl: './content-view.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['content-view.component.css']
})
export class ContentViewComponent implements OnInit {
  editMode: boolean;
  hideMode: boolean;
  constructor() { }

  ngOnInit() {
  }

  onEdit(mode) {
    this.editMode = mode;
  }
  onHide(mode) {
    this.hideMode = mode;
  }

  // @ViewChild(MaterialDetailsComponent) materialDetails:MaterialDetailsComponent;

  // onMaterialHChange(e:any): void {
  //    this.materialDetails.TabsComponent.checkOverflowMaterial();
  // }

}