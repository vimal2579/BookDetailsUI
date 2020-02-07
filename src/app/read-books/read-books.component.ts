import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../Service/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable} from 'rxjs';
import { Book } from '../book';
import { Router } from '@angular/router';
 
@Component({
    selector: 'app-read-books',
    templateUrl: './read-books.component.html',
    styleUrls: ['./read-books.component.css'],
    providers: [BookService]
})
 
export class ReadBooksComponent implements OnInit {
 
    // store list of books
    books : Book[];
 
    constructor(private _bookService: BookService,
    private router : Router){}
    
   // when user clicks the 'Read' button
readOneBook(id){
    this.router.navigate(['/readonebook', id]);
    };
    
    // when user clicks the 'Edit' button
updateBook(id){
    this.router.navigate(['/editbook', id]);
};
    // when user clicks the 'Delete' button
deleteBook(id){
    this.router.navigate(['/deletebook', id]);
}
 
    // Read Books from API.
    ngOnInit(){
        this._bookService.readBooks()
        .subscribe(response =>
        this.books=response.json());            
    }
}