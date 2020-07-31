/*
Title: Assignment 4.4
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Assignment 4.4 - Async Pipe
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ComposerService {

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

  getComposers (): Observable<IComposer[]> {
    return of (this.composers);
  }

  getComposer(composerId: number){
    for (let composer of this.composers){
      if (composer.composerId === composerId){
        return composer;
      }
  }
}

  filterComposers (name: string): Observable<IComposer[]>{
    return of (this.composers).pipe(
      map(composers=>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name)> -1)))//create new array of composer names
  }

}

