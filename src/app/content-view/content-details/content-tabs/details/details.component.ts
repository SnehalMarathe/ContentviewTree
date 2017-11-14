import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'details-tab',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  @Input('edit') toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
