/*
Title: Assignment 1.5
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Assignment 1.5 Components
*/


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyImageComponent } from './my-image/my-image.component';
import {MyDetailsComponent } from './my-details/my-details.component';

const routes: Routes = [
  {path: 'my-image', component: MyImageComponent},
  {path: 'my-details', component: MyDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
