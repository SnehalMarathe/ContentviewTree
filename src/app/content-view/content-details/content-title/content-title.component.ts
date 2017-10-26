import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'content-title',
  templateUrl: './content-title.component.html',
  styleUrls: ['./content-title.component.css']
})
export class ContentTitleComponent implements OnInit {
  toggle: boolean = true;
  constructor() { }
  toggleEdit() {
    this.toggle = !this.toggle;
  }
  ngOnInit() {
  }

}
