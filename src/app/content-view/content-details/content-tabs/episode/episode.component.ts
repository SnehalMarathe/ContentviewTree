import { Component, OnInit, Input } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
  selector: 'episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent {
@Input('edit') toggle: boolean = false;
getRowHeight(row) {
    if(!row) return 75;
    if(row.height === undefined) return 75;
    return row.height;
  }
  columns = [];
  rows = [
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'Seg 1 Open', programname: 'HD Catfish S.4', runtime: 'None'},
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever',desc: 'Seg 10 Daily challenge', programname: 'HD Catfish S.4', runtime: 'None' },
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'Seg 1 Open', programname: 'HD Catfish S.4', runtime: 'None'},
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever',desc: 'Seg 10 Daily challenge', programname: 'HD Catfish S.4', runtime: 'None' },
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'Seg 1 Open', programname: 'HD Catfish S.4', runtime: 'None' },
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever',desc: 'Seg 10 Daily challenge', programname: 'HD Catfish S.4', runtime: 'None' },
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'Seg 1 Open', programname: 'HD Catfish S.4', runtime: 'None' },
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever',desc: 'Seg 10 Daily challenge', programname: 'HD Catfish S.4', runtime: 'None' },
  ];
  
  constructor() {    
     
  }


}
