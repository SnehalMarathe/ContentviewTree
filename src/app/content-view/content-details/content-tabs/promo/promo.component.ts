import { Component, OnInit, Input } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
  selector: 'promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent {
@Input('edit') toggle: boolean = false;
 getRowHeight(row) {
    if(!row) return 75;
    if(row.height === undefined) return 75;
    return row.height;
  }
  columns = [];
  rows = [
        { reel: 'N8563', cutposition: '1', seq:'0', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'Seg 1 Open', programname: 'HD Catfish S.4', runtime: '00:01:05'},
        { reel: 'N8563', cutposition: '10', seq:'0', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'Seg 10 Daily challenge', programname: 'HD Catfish S.4', runtime: '00:01:05' },
        { reel: 'N8563', cutposition: '10', seq:'0', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'Seg 1 Open', programname: 'HD Catfish S.4', runtime: '00:01:05'},
        { reel: 'N8563', cutposition: '12', seq:'0', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'Seg 10 Daily challenge', programname: 'HD Catfish S.4', runtime: '00:01:05' },
        { reel: 'N8563', cutposition: '11', seq:'0', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'Seg 1 Open', programname: 'HD Catfish S.4', runtime: '00:01:05' },
        { reel: 'N8563', cutposition: '1', seq:'0', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'Seg 1 Open', programname: 'HD Catfish S.4', runtime: '00:01:05' },
        { reel: 'N8563', cutposition: '14', seq:'0', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'Seg 1 Open', programname: 'HD Catfish S.4', runtime: '00:01:05' },
        { reel: 'N8563', cutposition: '1', seq:'0', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'Seg 10 Daily challenge Open', programname: 'HD Catfish S.4', runtime: '00:01:05' },
  ];
  
  constructor() {    
     
  }


}