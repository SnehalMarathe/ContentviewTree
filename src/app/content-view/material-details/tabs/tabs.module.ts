import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule, MatExpansionModule, MatTableModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TabsComponent } from './tabs.component';
import { GeneralComponent } from './general/general.component';
import { ClipsComponent } from './clips/clips.component';
import { ImagesComponent } from './images/images.component';
import { AudioProgramComponent } from './audio-program/audio-program.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { TechAttrComponent } from './tech-attr/tech-attr.component';
import { HistoryComponent } from './history/history.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
    declarations: [
        TabsComponent, 
        GeneralComponent, 
        ClipsComponent, 
        ImagesComponent, 
        AudioProgramComponent, 
        AttachmentsComponent, 
        TechAttrComponent, 
        HistoryComponent, 
        NotesComponent
    ],
    imports: [
        FormsModule,
        MatTabsModule, 
        MatExpansionModule,
        PerfectScrollbarModule,
        MatTableModule,
        MatButtonModule,
        MatMenuModule
    ],
    exports: [
        TabsComponent
    ]
})

export class TabsModule { }