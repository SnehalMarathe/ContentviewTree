import { Component, OnInit, Input } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
  selector: 't-techAttr',
  templateUrl: './tech-attr.component.html',
  styleUrls: ['./tech-attr.component.css']
})
export class TechAttrComponent {
@Input('edit') toggle: boolean = false;
 getHeight(row: any, index: number): number {
  return row.someHeight;
}
  columns = [];
  rows = [
  { attribute: 'Anamorphic', value: '0.000', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Audio Channel Count', value: '4', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Audio Start PTS', value: '0', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Audio Start Time', value: '0', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Bits per Sample', value: '24', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Color Sampling', value: '4:2:2', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'CRC32', value: '9d9e0491', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Drop Frame', value: 'True', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Duration', value: '00:02:49;28', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'End Timecode', value: '00:02:49;28', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Anamorphic', value: '0.000', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Audio Channel Count', value: '4', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Audio Start PTS', value: '0', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Audio Start Time', value: '0', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Bits per Sample', value: '24', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Color Sampling', value: '4:2:2', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'CRC32', value: '9d9e0491', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Drop Frame', value: 'True', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'Duration', value: '00:02:49;28', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'End Timecode', value: '00:02:49;28', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' },
        { attribute: 'File Format', value: 'mxf', updated: {date: '09/08/2016', time: '4:23:27 AM'}, by: 'Workflow Service' }
  ];
  
  constructor() {    
     
  }


}
