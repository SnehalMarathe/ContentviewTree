import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from './material-details/tabs/tabs.component';
import { TreeComponent } from './material-details/tree/tree.component';

const appRoutes = [
    { path: '', redirectTo: '/tabs', pathMatch: 'full' },
    { path: 'tabs', component: TabsComponent },
    { path: 'tree', component: TreeComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}