import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { Book } from '../book';
import { BookService } from 'services/book.service';
import { PREFERRED_BOOKS, preferredBooksFactory } from 'services/preferred-books';

const JAVA_BOOK = new Book('Thinking in Java', 'Java');

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [ 
    BookService,
    { provide: Book, useValue: JAVA_BOOK },
    { provide: PREFERRED_BOOKS, useFactory: preferredBooksFactory(3), deps: [Book, BookService] }
  ]
})
export class BooksComponent implements OnInit {

  constructor(@Inject(PREFERRED_BOOKS) public preferredBooks: string) { }
	
	ngOnInit() {
	}

}
