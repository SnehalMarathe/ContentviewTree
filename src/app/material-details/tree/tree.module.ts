import { NgModule } from '@angular/core';
import { MdCheckboxModule } from '@angular/material';
import { TreeComponent } from './tree.component'
import { TreeModule } from 'angular-tree-component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@NgModule({
    declarations: [
        TreeComponent
    ],
    imports: [TreeModule, MdCheckboxModule, PerfectScrollbarModule],
    exports: [
        TreeComponent
    ]
})


export class MatTreeModule { }