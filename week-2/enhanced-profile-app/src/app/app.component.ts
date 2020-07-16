/*
============================================
; Title: Assignment 2.3
; Author: Kimberly Pierce
; Date: July 2020
; Modified By: Kimberly Pierce
; Description: Assignment 2.3 Data Binding
;===========================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;//value to bind to html
  assignment : string = "Assignment 2.3 - Data Binding";
}
