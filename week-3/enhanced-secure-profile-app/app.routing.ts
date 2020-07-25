/*
============================================
; Title: Assignment 3.4 Guarding Routes
; Author: Kimberly Pierce
; Date: July 2020
; Modified By: Kimberly Pierce
; Description: Assignment 3.4 Guarding Routes
;===========================================
*/


import { Routes } from '@angular/router';
import { SignInComponent } from './src/app/sign-in/sign-in.component';
import { HomeComponent } from './src/app/home/home.component';
import { SignInGuard } from './src/app/sign-in.guard';

export const AppRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'home', component: HomeComponent, canActivate: [SignInGuard] },
]
