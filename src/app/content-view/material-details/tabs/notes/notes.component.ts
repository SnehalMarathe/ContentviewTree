import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 't-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
@Input('edit') toggle: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
