/*
============================================
; Title: Assignment 5.2
; Author: Kimberly Pierce
; Date: August 2020
; Modified By: Kimberly Pierce
; Description: Assignment 5.2 Navigation & Layout
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
    this.assignment = "Exercise 5.3 Navigation and Layout"
  }
}
