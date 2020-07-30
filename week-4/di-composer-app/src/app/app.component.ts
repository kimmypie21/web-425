/*
Title: Assignment 4.2
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Exercise 4.2 - Inversion of Control and Dependency Injection
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 4.2 - Inversion of Control and Dependency Injection';
}
