/*
Title: Assignment 4.2
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Exercise 4.2 - Inversion of Control and Dependency Injection
*/


import { Component, OnInit } from '@angular/core';
import { IComposer} from '../composer.interface';
import { ComposerService} from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {
//create composers array to populate composers list

  composers: Array <IComposer>;
  constructor(private composerService: ComposerService) {
    this.composers = composerService.getComposers();
   }

  ngOnInit(): void {
  }

}
