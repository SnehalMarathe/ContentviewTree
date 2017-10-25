import { Component } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
  selector: 't-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  displayedColumns = ['submittedon', 'workorder', 'status', 'submittedby', 'workflow', 'task'];
  dataSource = new ExampleDataSource();
  constructor() { }


}

export interface Element {
  }

const data: Element[] = [
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

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. 'In' our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}
