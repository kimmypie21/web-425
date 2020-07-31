/*
Title: Assignment 4.4
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Assignment 4.4 - Async Pipe
*/


import { Component, OnInit } from '@angular/core';
import { IComposer } from "../composer.interface";
import { ActivatedRoute } from '@angular/router';
import { ComposerService} from '../composer.service';


@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})


export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  //import activated route to access composerId
  constructor( private route: ActivatedRoute, private composerService:ComposerService) {
    this.composerId = parseInt ( this.route.snapshot.paramMap.get('composerId'), 10);
    if (this.composerId) {
      this.composer =  this.composerService.getComposer(this.composerId)
    }
   }

  ngOnInit(): void {
  }

}


