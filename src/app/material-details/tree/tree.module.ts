import { NgModule } from '@angular/core';
import { TreeviewModule } from 'ngx-treeview';
import { TreeComponent } from './tree.component'
import {MdExpansionModule } from '@angular/material';
@NgModule({
    declarations: [
        TreeComponent
    ],
    imports: [TreeviewModule.forRoot(), MdExpansionModule],
    exports: [
        TreeComponent
    ]
})

export class TreeModule { }