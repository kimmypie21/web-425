/*
============================================
; Title:  Assignment 1.3
; Author: Professor Krasso
; Date: July 2020
; Modified By: Kimberly Pierce
; Description: Angular CLI
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//variable to use in HTML for alert message
export class AppComponent {
  myWorld = "You are now in Kim's world!"

}
