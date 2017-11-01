import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audio-program',
  templateUrl: './audio-program.component.html',
  styleUrls: ['./audio-program.component.css']
})
export class AudioProgramComponent implements OnInit {
@Input('edit') toggle: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
