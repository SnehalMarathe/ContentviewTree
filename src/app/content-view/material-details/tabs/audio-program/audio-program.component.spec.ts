import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioProgramComponent } from './audio-program.component';

describe('AudioProgramComponent', () => {
  let component: AudioProgramComponent;
  let fixture: ComponentFixture<AudioProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
