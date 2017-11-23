import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent implements OnInit {
  
@Input('edit') editMode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
