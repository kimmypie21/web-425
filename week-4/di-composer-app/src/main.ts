/*
Title: Assignment 4.2
Author: Kimberly Pierce
Date: July 2020
Modified By: Kimberly Pierce
Description: Exercise 4.2 - Inversion of Control and Dependency Injection
*/


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
