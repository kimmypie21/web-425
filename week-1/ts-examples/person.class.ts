/*
; Title:  Assignment 1.4
; Author: Professor Krasso
; Date: July 2020
; Modified By: Kimberly Pierce
; Description: TypeScript
*/

//import IPerson interface from person-interface.ts
import { IPerson } from "./person-interface";

//create Person class
class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//create new Person 
let myName = new Person ("Kimberly", "Pierce");
console.log (`My name is ${myName.firstName} ${myName.lastName}`);