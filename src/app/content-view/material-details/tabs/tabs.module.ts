import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// UI Interactions
import { MatTabsModule, MatExpansionModule, MatCheckboxModule, MatTableModule, MatMenuModule, MatButtonModule, MatSlideToggleModule } from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// App Components
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
       // Angular -
        FormsModule,
        // UI Interactions
        MatTabsModule, 
        MatExpansionModule,
        PerfectScrollbarModule,
        MatTableModule,
        MatButtonModule,
        MatMenuModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        NgxDatatableModule
    ],
    exports: [
        TabsComponent
    ]
})

export class TabsModule { }