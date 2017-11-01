import { Component, Input } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
  selector: 't-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
 @Input('edit') toggle: boolean = false;
 getHeight(row: any, index: number): number {
  return row.someHeight;
}
  columns = [];
  rows = [
    {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Completed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Completed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'In', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Completed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'In', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Failed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Completed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Completed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'In', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Completed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Completed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Failed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Failed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Waiting for file', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Completed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Failed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Completed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Completed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Completed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  {submittedon: {date: '09/08/2016', time: '4:23:27 AM' }, workorder: '8264227', status: 'Failed', submittedby: 'Process Manager', workflow: 'Moving cached materials to trash', task: '74786499'},
  ];
  
  constructor() {    
     
  }


}


