/*
Title: Assignment 3.2
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Assignment 3.2 Passing Data to Routes, Part 1
*/


import { Component, OnInit } from '@angular/core';
import { IComposer } from "../composer.interface";
import { Composer } from "../composer.class";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})


export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  //import activated route to access composerId
  constructor( private route: ActivatedRoute) {
    this.composerId = parseInt ( this.route.snapshot.paramMap.get('composerId'), 10);
    if (this.composerId) {
      this.composer = new Composer(). getComposer (this.composerId);
    }
   }

  ngOnInit(): void {
  }

}


