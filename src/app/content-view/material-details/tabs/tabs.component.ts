import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input('edit') editMode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
