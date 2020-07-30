/*
Title: Assignment 4.3
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Exercise 4.3 - Handling Events with Observables
*/


import { Component, OnInit } from '@angular/core';
import { IComposer} from '../composer.interface';
import { ComposerService} from '../composer.service';
import { FormControl } from '@angular/forms';//import form controls
import { debounceTime } from 'rxjs/operators';//import debounce time

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {
//create composers array to populate composers list
  txtSearchControl = new FormControl('');
  composers: Array <IComposer>;
  constructor(private composerService: ComposerService) {
    this.composers = composerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val=>this.filterComposers(val));//add form control function and debounce time
   }

   filterComposers(name: string){//filter composers function
     alert(name);
   }


  ngOnInit(): void {
  }

}
