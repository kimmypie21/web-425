/*
============================================
; Title: Exercise 7.2 - Reactive Forms
; Author: Kimberly Pierce
; Date: August 2020
; Modified By: Kimberly Pierce
; Description: Exercise 7.2 - Reactive Forms
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SignInService} from '../sign-in.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {

   }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ''
    })
  }
  onSubmit(){
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);
    if (this.signinService.validate(studentId)){
      this.cookieService.set('session_user', studentId.toString(), 1 )
      this.router.navigate([ '/'])
    }else{
      this.errorMessage = 'The student ID you entered is invalid. Please try again.';
    }
  }
}
