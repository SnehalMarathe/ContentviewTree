import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'content-title',
  templateUrl: './content-title.component.html',
  styleUrls: ['./content-title.component.css']
})
export class ContentTitleComponent implements OnInit {
  toggle: boolean;

  @Output() edit: EventEmitter<boolean> = new EventEmitter(false);

  constructor() { }


  toggleEdit(e) {
    this.edit.emit(this.toggle = !this.toggle);
  }
     

  ngOnInit() {
  }

}
