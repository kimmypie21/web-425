/*
Title: Assignment 2.4
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Assignment 2.4 Routing in Action
*/

import { Component, OnInit } from '@angular/core';

//export class Composer
export default class Composer {
  fullName: string;
  genre: string;

  constructor ( fullName: string, genre: string){
    this.fullName = fullName;
    this.genre = genre;
  }

  toString(){
    console.log (`Full name: ${this.fullName} \n Genre: ${this.genre}`);
  }
}



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})



export class ComposerListComponent implements OnInit {
//create composers array to populate composers list
  composers: Array<Composer>;

  constructor() {
    this.composers=[
     new Composer ("Wolfgang Amadeus Mozart", "classical"),
     new Composer ("Johann Sebastian Bach", "classical"),
     new Composer ("Frederic Chopin", "classical"),
     new Composer ("Ludwig van Beethoven", "classical"),
     new Composer ("Igor Stravinsky", "classical"),
    ]
   }

  ngOnInit(): void {
  }

}
