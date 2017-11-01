import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 't-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent implements OnInit {
@Input('edit') toggle: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
