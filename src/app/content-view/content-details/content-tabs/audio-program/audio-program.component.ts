import { Component, OnInit, Input } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
  selector: 'app-audio-program',
  templateUrl: './audio-program.component.html',
  styleUrls: ['./audio-program.component.css']
})
export class AudioProgramComponent {
@Input('edit') toggle: boolean = false;
 getHeight(row: any, index: number): number {
  return row.someHeight;
}
  columns = [];
  rows = [
  {startchannel: '1', layout: 'Stereo', language: 'English (United States)', censored: 'None', dubbed: 'None', music: 'None', effects: 'None', dvs: 'Yes', containsdialog: 'None', mos: 'None', active: 'None'},
  {startchannel: '3', layout: 'Mono', language: 'English (United States)', censored: 'None', dubbed: 'None', music: 'None', effects: 'None', dvs: 'Yes', containsdialog: 'None', mos: 'None', active: 'None'},
  {startchannel: '4', layout: 'Stereo', language: 'English (United States)', censored: 'None', dubbed: 'None', music: 'None', effects: 'None', dvs: 'Yes', containsdialog: 'None', mos: 'None', active: 'None'},
  {startchannel: '2', layout: 'Stereo', language: 'English (United States)', censored: 'None', dubbed: 'None', music: 'None', effects: 'None', dvs: 'Yes', containsdialog: 'None', mos: 'None', active: 'None'},
  {startchannel: '1', layout: 'Mono', language: 'English (United States)', censored: 'None', dubbed: 'None', music: 'None', effects: 'None', dvs: 'Yes', containsdialog: 'None', mos: 'None', active: 'None'},
  {startchannel: '3', layout: 'Stereo', language: 'English (United States)', censored: 'None', dubbed: 'None', music: 'None', effects: 'None', dvs: 'Yes', containsdialog: 'None', mos: 'None', active: 'None'},
  {startchannel: '4', layout: 'Stereo', language: 'English (United States)', censored: 'None', dubbed: 'None', music: 'None', effects: 'None', dvs: 'Yes', containsdialog: 'None', mos: 'None', active: 'None'},
  {startchannel: '2', layout: 'Mono', language: 'English (United States)', censored: 'None', dubbed: 'None', music: 'None', effects: 'None', dvs: 'Yes', containsdialog: 'None', mos: 'None', active: 'None'},
  {startchannel: '1', layout: 'Stereo', language: 'English (United States)', censored: 'None', dubbed: 'None', music: 'None', effects: 'None', dvs: 'Yes', containsdialog: 'None', mos: 'None', active: 'None'},
  {startchannel: '3', layout: 'Stereo', language: 'English (United States)', censored: 'None', dubbed: 'None', music: 'None', effects: 'None', dvs: 'Yes', containsdialog: 'None', mos: 'None', active: 'None'},
  {startchannel: '1', layout: 'Stereo', language: 'English (United States)', censored: 'None', dubbed: 'None', music: 'None', effects: 'None', dvs: 'Yes', containsdialog: 'None', mos: 'None', active: 'None'}
  
  ];
  
  constructor() {    
     
  }


}
