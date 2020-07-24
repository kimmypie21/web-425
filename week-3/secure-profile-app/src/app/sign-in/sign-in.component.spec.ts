/*
============================================
; Title: Assignment 3.3 Passing Data to Routes, Part 2
; Author: Kimberly Pierce
; Date: July 2020
; Modified By: Kimberly Pierce
; Description: Assignment 3.3 Passing Data to Routes, Part 2
;===========================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
