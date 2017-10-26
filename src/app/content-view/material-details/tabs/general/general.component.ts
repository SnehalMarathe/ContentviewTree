import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
toggle: boolean = true;
  constructor() { }

  toggleEdit() {
    this.toggle = !this.toggle;
  }

  ngOnInit() {
  }

}
