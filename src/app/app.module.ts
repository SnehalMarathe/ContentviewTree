// Angular -
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// UI Interactions
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MaterialDetailsComponent } from './material-details/material-details.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// App Components
import { AppComponent } from './app.component';
import { TabsModule } from './material-details/tabs/tabs.module';
import { MatTreeModule } from './material-details/tree/tree.module';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    MaterialDetailsComponent
  ],
  imports: [
    // Angular -
    BrowserModule, BrowserAnimationsModule,
    // UI Interactions -
    MdButtonModule, MdCheckboxModule, PerfectScrollbarModule,
    // App Components -
    TabsModule, MatTreeModule, AppRoutingModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }