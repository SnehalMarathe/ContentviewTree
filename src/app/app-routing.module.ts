import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from './content-view/material-details/tabs/tabs.component';
import { TreeComponent } from './content-view/material-details/tree/tree.component';

const appRoutes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'tabs', component: TabsComponent },
    { path: 'tree', component: TreeComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}