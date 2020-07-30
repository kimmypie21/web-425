/*
Title: Assignment 4.2
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Exercise 4.2 - Inversion of Control and Dependency Injection
*/


import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerDetailsComponent } from './composer-details.component';

describe('ComposerDetailsComponent', () => {
  let component: ComposerDetailsComponent;
  let fixture: ComponentFixture<ComposerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
