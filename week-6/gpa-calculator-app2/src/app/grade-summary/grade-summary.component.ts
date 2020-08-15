/*
============================================
; Title: Exercise 6.4 Input Properties
; Author: Kimberly Pierce
; Date: August 2020
; Modified By: Kimberly Pierce
; Description: Exercise 6.4 Input Properties
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input()grade: string;
  @Input()course: string;
  constructor() { }

  ngOnInit(): void {
  }

}
