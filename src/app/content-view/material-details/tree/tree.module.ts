import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { TreeComponent } from './tree.component'
import { TreeModule } from 'angular-tree-component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@NgModule({
    exports: [
        MatButtonModule,
       MatSidenavModule,
        MatCheckboxModule],       
})

export class MaterialModule { }

@NgModule({
    declarations: [
        TreeComponent
    ],
    imports: [TreeModule, MaterialModule, PerfectScrollbarModule],
    exports: [
        TreeComponent
    ]
})


export class MatTreeModule { }