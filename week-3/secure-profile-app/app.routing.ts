/*
============================================
; Title: Assignment 3.3 Passing Data to Routes, Part 2
; Author: Kimberly Pierce
; Date: July 2020
; Modified By: Kimberly Pierce
; Description: Assignment 3.3 Passing Data to Routes, Part 2
;===========================================
*/

import { Routes } from '@angular/router';
import { SignInComponent } from './src/app/sign-in/sign-in.component';
import { HomeComponent } from './src/app/home/home.component';

export const AppRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'home', component: HomeComponent},
]
