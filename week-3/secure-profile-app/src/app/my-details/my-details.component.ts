/*
============================================
; Title: Assignment 3.3 Passing Data to Routes, Part 2
; Author: Kimberly Pierce
; Date: July 2020
; Modified By: Kimberly Pierce
; Description: Assignment 3.3 Passing Data to Routes, Part 2
;===========================================
*/

import { Component, OnInit } from '@angular/core';

//export class Person
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    '#TypeScript ' , '#2020 ' , '#CodingWithAngular ' , '#ngOmaha'
  ];
  constructor( fullName: string, favoriteFood: string, favoriteColor: string){
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString(){
    console.log(`\n  Full name: ${this.fullName} \n  Favorite food: ${this.favoriteFood} \n  Favorite color: ${this.favoriteColor} `);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

export class MyDetailsComponent implements OnInit {

  myProfile: Person;
  //create new constructor of Person class
  constructor() {
    this.myProfile = new Person ("Kimberly Pierce", "Carbs", "Purple");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
