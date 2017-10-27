import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 't-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  @Input('edit') toggle: boolean = false;

  constructor() { }



  ngOnInit() {
  }

}
