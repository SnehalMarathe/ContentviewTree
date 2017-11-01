import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 't-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.css']
})
export class ClipsComponent implements OnInit {
  
  @Input('edit') toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
