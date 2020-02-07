import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { BookService } from '../Service/book.service';
import { Observable} from 'rxjs';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-read-one-book',
  templateUrl: './read-one-book.component.html',
  styleUrls: ['./read-one-book.component.css'],
  providers: [BookService]
})
export class ReadOneBookComponent implements OnInit {
 
// @Input means it will accept value from parent component (AppComponent)
//@Input() empreg_id;

public bookId;
book: Book;

constructor(private bookService: BookService,
private route : ActivatedRoute,
private router: Router){}

   // user clicks the 'Read Books' button
   readBooks(){
    this.router.navigate(['/readbooks']);
   }

   ngOnInit() {
     let id = parseInt(this.route.snapshot.paramMap.get('id'));
     this.bookId = id;
     this.bookService.readOneBook(this.bookId)
           .subscribe(response =>
            this.book=response.json()); 
   }
}
