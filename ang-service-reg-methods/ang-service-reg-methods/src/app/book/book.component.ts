import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { Book } from '../book';

const JAVA_BOOK = new Book('Learning Java', 'Java');
const HELLO_MESSAGE = new InjectionToken<string>('Hello!'); 


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [ 
    { provide: Book, useValue: JAVA_BOOK },
    { provide: HELLO_MESSAGE, useValue: 'Hello World!' }
  ]   
})


export class BookComponent implements OnInit {
  
  constructor(public book: Book, 
    @Inject(HELLO_MESSAGE) public message: string) { }

  ngOnInit() {
  }

}
