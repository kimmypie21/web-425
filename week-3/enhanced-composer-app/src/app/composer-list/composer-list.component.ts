/*
Title: Assignment 3.2
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Assignment 3.2 Passing Data to Routes, Part 1
*/

import { Component, OnInit } from '@angular/core';
import { IComposer} from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {
//create composers array to populate composers list

  composers: Array <IComposer>;
  constructor() {
    this.composers = new Composer().getComposers();
   }

  ngOnInit(): void {
  }

}
