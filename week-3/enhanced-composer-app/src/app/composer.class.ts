/*
Title: Assignment 3.2
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Assignment 3.2 Passing Data to Routes, Part 1
*/

import { IComposer} from "./composer.interface";

export class Composer {
  composers: Array<IComposer>;

  constructor ( ){
    this.composers=[
      {
        composerId: 100, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 90, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 80, fullName: "Frederic Chopin", genre: "Classical"
      },
      {
        composerId: 70, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 60, fullName: "Igor Stravinsky", genre: "Classical"
      }
     ]
  }

  getComposers () {
    return this.composers;
  }

  getComposer(composerId: number){
    for (let composer of this.composers)
      if (composer.composerId === composerId){
        return composer;
      }
  }

}
