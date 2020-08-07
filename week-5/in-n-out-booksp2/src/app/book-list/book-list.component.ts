/*
============================================
; Title: Assignment 5.3
; Author: Kimberly Pierce
; Date: August 2020
; Modified By: Kimberly Pierce
; Description: Assignment 5.3 Data Tables
;===========================================
*/


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book-interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books:Observable<IBook[]>;
  header: Array<string>=['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor( private booksService: BooksService ) {
    this.books = this.booksService.getBooks();
   }

  ngOnInit(): void {
  }

  showBookDetails(isbn:string){
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }

}
