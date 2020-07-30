/*
Title: Assignment 4.2
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Exercise 4.2 - Inversion of Control and Dependency Injection
*/


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
