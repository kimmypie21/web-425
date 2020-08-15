/*
============================================
; Title: Exercise 6.4 Input Properties
; Author: Kimberly Pierce
; Date: August 2020
; Modified By: Kimberly Pierce
; Description: Exercise 6.4 Input Properties
;===========================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaComponent } from './gpa.component';

describe('GpaComponent', () => {
  let component: GpaComponent;
  let fixture: ComponentFixture<GpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
