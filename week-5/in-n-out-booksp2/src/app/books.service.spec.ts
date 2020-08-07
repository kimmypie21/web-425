/*
============================================
; Title: Assignment 5.3
; Author: Kimberly Pierce
; Date: August 2020
; Modified By: Kimberly Pierce
; Description: Assignment 5.3 Data Tables
;===========================================
*/

import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
