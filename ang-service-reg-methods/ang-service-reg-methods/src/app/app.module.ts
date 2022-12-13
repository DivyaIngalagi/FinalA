import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { CowComponent } from './cow/cow.component';
import { ComputerComponent } from './computer/computer.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalDetailsComponent,
    CowComponent,
    ComputerComponent,
    BookComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
