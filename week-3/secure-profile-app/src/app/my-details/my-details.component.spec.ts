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

import { MyDetailsComponent } from './my-details.component';

describe('MyDetailsComponent', () => {
  let component: MyDetailsComponent;
  let fixture: ComponentFixture<MyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
