/*
============================================
; Title: Exercise 6.3 Layouts
; Author: Kimberly Pierce
; Date: August 2020
; Modified By: Kimberly Pierce
; Description: Exercise 6.3 Layouts
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor() {
    this.assignment="Exercise 6.3 Layouts"
   }

  ngOnInit(): void {
  }

}
