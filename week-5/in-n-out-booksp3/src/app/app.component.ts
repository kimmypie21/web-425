/*
============================================
; Title: Assignment 5.4
; Author: Kimberly Pierce
; Date: August 2020
; Modified By: Kimberly Pierce
; Description: Assignment Exercise 5.4 Dialogs
;===========================================
*/



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;
  constructor () {
    this.assignment = "Exercise 5.4 Dialogs"
  }
}
