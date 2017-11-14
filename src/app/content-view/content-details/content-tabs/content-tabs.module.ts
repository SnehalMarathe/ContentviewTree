import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// UI Interactions
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTabsModule, MatChipsModule, MatExpansionModule, MatCheckboxModule, MatTableModule, MatMenuModule, MatButtonModule, MatSlideToggleModule } from '@angular/material';
// App Components
import { ContentTabsComponent } from './content-tabs.component';
import { GeneralComponent } from './general/general.component';
import { AudioProgramComponent } from './audio-program/audio-program.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { TechAttrComponent } from './tech-attr/tech-attr.component';

import { NotesComponent } from './notes/notes.component';
import { EpisodeComponent } from './episode/episode.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { DetailsComponent } from './details/details.component';
import { SecurityComponent } from './security/security.component';
@NgModule({
    exports: [
        MatTabsModule,
        MatExpansionModule,
        MatChipsModule,
        MatTableModule,
        MatButtonModule,
        MatMenuModule,
        MatCheckboxModule,
        MatSlideToggleModule],
    
})
export class MaterialModule { }
@NgModule({
    declarations: [
        ContentTabsComponent,
        GeneralComponent,
        AudioProgramComponent,
        AttachmentsComponent,
        TechAttrComponent,
        NotesComponent,
        EpisodeComponent, ContributorsComponent, KeywordsComponent, DetailsComponent, SecurityComponent
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
        ContentTabsComponent
    ]
})

export class ContentTabsModule { }