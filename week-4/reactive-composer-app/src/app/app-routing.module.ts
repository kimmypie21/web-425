/*
Title: Assignment 4.3
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Exercise 4.3 - Handling Events with Observables
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import nav components
import { AboutComponent} from './about/about.component';
import { ComposerListComponent} from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

//specify nav component routes
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'composer-list', component: ComposerListComponent },
  { path: 'composer-details/:composerId', component: ComposerDetailsComponent},
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
