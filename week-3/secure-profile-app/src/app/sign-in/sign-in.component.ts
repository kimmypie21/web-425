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
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin(){
    this.isLoggedIn = true;

    this.router.navigate(['/home'], { queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
