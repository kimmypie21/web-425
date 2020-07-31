/*
Title: Assignment 4.4
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Assignment 4.4 - Async Pipe
*/


import { Component, OnInit } from '@angular/core';
import { IComposer} from '../composer.interface';
import { ComposerService} from '../composer.service';
import { FormControl } from '@angular/forms';//import form controls
import { debounceTime } from 'rxjs/operators';//import debounce time
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {
//create composers array to populate composers list
  txtSearchControl = new FormControl('');
  composers: Observable <IComposer[]>;//make composers an observable array
  constructor(private composerService: ComposerService) {
    this.composers = composerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val=>this.filterComposers(val));//add form control function and debounce time
   }

   filterComposers(name: string){//filter composers list by name function
     this.composers = this.composerService.filterComposers(name);
   }


  ngOnInit(): void {
  }

}
