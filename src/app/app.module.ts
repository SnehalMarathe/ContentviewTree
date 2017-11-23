// Angular -
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule,  MatSidenavModule, MatSelectModule, MatExpansionModule, MatCheckboxModule, MatTableModule, MatMenuModule, MatButtonModule, MatSlideToggleModule } from '@angular/material';
// UI Interactions
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SplitPaneModule } from 'ng2-split-pane/lib/ng2-split-pane';
// App Components
import { AppComponent } from './app.component';
import { TabsModule } from './content-view/material-details/tabs/tabs.module';
import { ContentTabsModule } from './content-view/content-details/content-tabs/content-tabs.module';
import { MatTreeModule } from './content-view/material-details/tree/tree.module';
import { ContentViewComponent } from './content-view/content-view.component';
import { ContentVideoComponent } from './content-view/content-details/content-video/content-video.component';
import { MaterialDetailsComponent } from './content-view/material-details/material-details.component';
import { ContentDetailsComponent } from './content-view/content-details/content-details.component';
import { ContentTitleComponent } from './content-view/content-details/content-title/content-title.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
    exports: [        
        MatMenuModule,
        MatCheckboxModule,
        MatButtonModule,
        MatSelectModule,
         MatSidenavModule
        ],
    })
export class MaterialModule { }
@NgModule({
  declarations: [
    AppComponent,
    MaterialDetailsComponent,
    ContentDetailsComponent,
    ContentViewComponent,
    ContentTitleComponent, 
    ContentVideoComponent, 
       
  ],
  imports: [
    // Angular -
    BrowserModule, BrowserAnimationsModule, FormsModule,
    // UI Interactions -
    MaterialModule, PerfectScrollbarModule, SplitPaneModule, 
    // App Components -
    ContentTabsModule, TabsModule, MatTreeModule, AppRoutingModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
