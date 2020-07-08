/*
============================================
; Title:  Assignment 1.3
; Author: Professor Krasso
; Date: July 2020
; Modified By: Kimberly Pierce
; Description: Angular CLI
;===========================================
*/


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
