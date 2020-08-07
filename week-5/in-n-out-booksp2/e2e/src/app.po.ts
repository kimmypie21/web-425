/*
============================================
; Title: Assignment 5.3
; Author: Kimberly Pierce
; Date: August 2020
; Modified By: Kimberly Pierce
; Description: Assignment 5.3 Data Tables
;===========================================
*/


import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
