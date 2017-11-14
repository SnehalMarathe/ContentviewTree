import { Component, OnInit, Input } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 't-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})

export class AttachmentsComponent {
@Input('edit') toggle: boolean = false;
 getHeight(row: any, index: number): number {
  return row.someHeight;
}
  columns = [];
  rows = [
        { description: 'Baton', filename: 'PTS_LF_XSP054A_ALL_411 1_20170418092236PRD_2.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2017', status: 'Completed' },
        { description: 'FFProbe', filename: '81e9fcbe-97eb-46fd-8e92-5cc75824aad0.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2016', status: 'Completed' },
        { description: 'Baton', filename: '79923005-42bb-43c3-b134-dafb7491ec9a.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2016', status: 'Completed' },
        { description: 'FFProbe', filename: '81e9fcbe-97eb-46fd-8e92-5cc75824aad0.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2016', status: 'Completed' },
        { description: 'Baton', filename: 'PTS_LF_XSP054A_ALL_411 1_20170418092236PRD_2.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2017', status: 'Completed' },
        { description: 'FFProbe', filename: '81e9fcbe-97eb-46fd-8e92-5cc75824aad0.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2016', status: 'Completed' },
        { description: 'Baton', filename: '79923005-42bb-43c3-b134-dafb7491ec9a.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2016', status: 'Completed' },
        { description: 'FFProbe', filename: '81e9fcbe-97eb-46fd-8e92-5cc75824aad0.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2016', status: 'Completed' },
        { description: 'Baton', filename: 'PTS_LF_XSP054A_ALL_411 1_20170418092236PRD_2.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2017', status: 'Completed' },
        { description: 'FFProbe', filename: '81e9fcbe-97eb-46fd-8e92-5cc75824aad0.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2016', status: 'Completed' },
        { description: 'Baton', filename: '79923005-42bb-43c3-b134-dafb7491ec9a.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2016', status: 'Completed' },
        { description: 'FFProbe', filename: '81e9fcbe-97eb-46fd-8e92-5cc75824aad0.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2016', status: 'Completed' },
        { description: 'Baton', filename: 'PTS_LF_XSP054A_ALL_411 1_20170418092236PRD_2.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2017', status: 'Completed' },
        { description: 'FFProbe', filename: '81e9fcbe-97eb-46fd-8e92-5cc75824aad0.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2016', status: 'Completed' },
        { description: 'Baton', filename: '79923005-42bb-43c3-b134-dafb7491ec9a.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2016', status: 'Completed' },
        { description: 'FFProbe', filename: '81e9fcbe-97eb-46fd-8e92-5cc75824aad0.xml', addedby: 'Media Services Workflow Service', addedon: '06/26/2016', status: 'Completed' }
  ];
  
  constructor() {    
     
  }


}
