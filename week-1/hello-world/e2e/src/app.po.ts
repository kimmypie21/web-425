/*
============================================
; Title:  Assignment 1.3
; Author: Professor Krasso
; Date: July 2020
; Modified By: Kimberly Pierce
; Description: Angular CLI
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
