import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 't-clips',
  templateUrl: './clips.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./clips.component.css']
})
export class ClipsComponent implements OnInit {
  
  @Input('edit') toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
