import { Component, OnInit, Input } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
  selector: 'contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent {
@Input('edit') toggle: boolean = false;
   getHeight(row: any, index: number): number {
  return row.someHeight;
}
  columns = [];
  rows = [
  { artists: 'Indie', role: 'Label', },
  { artists: 'Sir mix a lot', role: 'Artist', },
  { artists: 'Video-Crop Button (Pixels)', role: 'Label', },
  { artists: 'Indie', role: 'Artist', },
  { artists: 'Sir mix a lot', role: 'Label', },
  { artists: 'Video-Crop Button (Pixels)', role: 'Artist', },
  { artists: 'Sir mix a lot', role: 'Label', },
  { artists: 'Video-Crop Button (Pixels)', role: 'Artist', },
 
  ];
  
  constructor() {    
     
  }


}

