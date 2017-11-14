import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent {
@Input('edit') toggle: boolean = false;
 getHeight(row: any, index: number): number {
  return row.someHeight;
}
  columns = [];
  rows = [
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'None', programname: 'HD Catfish S.4', runtime: 'None'},
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: '06/26/2016', programname: 'HD Catfish S.4', runtime: 'None' },
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'None', programname: 'HD Catfish S.4', runtime: 'None'},
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: '06/26/2016', programname: 'HD Catfish S.4', runtime: 'None' },
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'None', programname: 'HD Catfish S.4', runtime: 'None' },
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: '06/26/2016', programname: 'HD Catfish S.4', runtime: 'None' },
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: 'None', programname: 'HD Catfish S.4', runtime: 'None' },
        { dsid: 'HDMC4084A', episode: '4HDSpe', title: 'Catfish special: Nev and Max 15 Craziest Catfish Moments Ever', desc: '06/26/2016', programname: 'HD Catfish S.4', runtime: 'None' },
  ];
  
  constructor() {    
     
  }


}
