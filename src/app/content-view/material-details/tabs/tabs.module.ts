import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewEncapsulation } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// UI Interactions
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTabsModule, MatSelectModule, MatExpansionModule, MatCheckboxModule, MatTableModule, MatMenuModule, MatButtonModule, MatSlideToggleModule } from '@angular/material';
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
import { ActionBarComponent } from 'C:/Users/10610283/ContentviewTree/src/app/content-view/action-bar/action-bar.component';

@NgModule({
    exports: [
        MatTabsModule,
        MatExpansionModule,
        MatTableModule,
        MatButtonModule,
        MatMenuModule,
        MatCheckboxModule,
        MatSelectModule,
        MatSlideToggleModule],
})
export class MaterialModule { }
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
        NotesComponent,
        ActionBarComponent
    ],
    imports: [
        // Angular -
        FormsModule,
        // UI Interactions 
        MaterialModule,           
        PerfectScrollbarModule,        
        NgxDatatableModule
    ],
    exports: [
        TabsComponent
    ]
})

export class TabsModule { }