import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../Service/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';
import { Book } from '../book';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css'],
  providers: [BookService]
})
export class DeleteBookComponent {  
  //@Input() empreg_id;
  public bookId;
  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router){}
  
  deleteBook(empreg_id){
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.bookId = id;
      this.bookService.deleteBook(this.bookId)
          .subscribe(response => {
                      response.json();

                  this.readBooks();
               },
               error => console.log(error)
           );
  }

  readBooks(){
    this.router.navigate(['/readbooks']);
  }

}
