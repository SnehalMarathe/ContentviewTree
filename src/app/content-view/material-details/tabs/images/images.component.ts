import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 't-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
@Input('edit') toggle: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
