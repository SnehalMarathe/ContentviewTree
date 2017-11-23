import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'material-details',
  templateUrl: './material-details.component.html',
  styleUrls: ['./material-details.component.css'],
  host: { 'style': 'height: 100%' }
})
export class MaterialDetailsComponent implements OnInit {
  @Input('edit') editMode: boolean = false;
  @Input('collapse') collapseMode: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  // @ViewChild(TabsComponent) materialTab:TabsComponent; 

  // onMaterialHChange(e:any): void {
  //    this.materialTab.checkOverflowMaterial();
  // }

}