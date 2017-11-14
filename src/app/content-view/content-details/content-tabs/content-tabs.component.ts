import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'content-tabs',
  templateUrl: './content-tabs.component.html',
  styleUrls: ['./content-tabs.component.css']
})
export class ContentTabsComponent implements OnInit {

  
  @Input('edit') editMode: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
