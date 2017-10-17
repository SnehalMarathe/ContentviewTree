import { NgModule } from '@angular/core';
import { MatTabsModule, MatExpansionModule } from '@angular/material';

import { TabsComponent } from './tabs.component';
import { GeneralComponent } from './general/general.component';
import { ClipsComponent } from './clips/clips.component';
import { ImagesComponent } from './images/images.component';
import { SegmentsComponent } from './segments/segments.component';
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
        SegmentsComponent, 
        AttachmentsComponent, 
        TechAttrComponent, 
        HistoryComponent, 
        NotesComponent
    ],
    imports: [
        MatTabsModule, 
        MatExpansionModule
    ],
    exports: [
        TabsComponent
    ]
})

export class TabsModule { }