import { Component, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'content-tabs',
  templateUrl: './content-tabs.component.html',
  styleUrls: ['./content-tabs.component.css']
})
export class ContentTabsComponent implements AfterViewInit {

  constructor() { }

  selectedTab: number = 0;
  overflownTabs:any = [];
  overflownBeforelength: number = 0;
  overflownTabslength: number = 0;

  index: number = 0;

  openTab(m) {
    this.index = m
  }

  openNext() {
    this.index = (this.index === 7) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index === 0) ? 7 : this.index - 1;
  }

  change() {
    if (this.selectedTab < 7) this.selectedTab += 1
    else this.selectedTab = 0
  }

  ngAfterViewInit() {


  }
}
