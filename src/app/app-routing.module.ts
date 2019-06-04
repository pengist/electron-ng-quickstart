import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, UserComponent } from './page-component';

const routes: Routes = [
    { path: '',     pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component:  HomeComponent },
    { path: 'user', component:  UserComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
