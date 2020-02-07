import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../Service/book.service';
import { Observable} from 'rxjs';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent { 
  // our angular form
  create_book_form: FormGroup;
  
  constructor(
      private bookService: BookService,
      private router: Router,
      formBuilder: FormBuilder
  ){
      // based on our html form, build our angular form
      this.create_book_form = formBuilder.group({
          name: ["", Validators.required],
          author: ["", Validators.required],
          price: ["", Validators.required],
          availability: ["", Validators.required]      
      });
  }

  createEmployee(){     
      this.bookService.createBook(this.create_book_form.value)
          .subscribe(
               book => {                  
                  console.log(book);
                  this.readBooks();
               },
               error => console.log(error)
           );
  }

  // user clicks the 'Read Employees' button
  readBooks(){
      this.router.navigate(['/readbooks']);
  }

  // what to do when this component were initialized
//   ngOnInit(){
//       // read categories from database
//       this.categoryService.readCategories()
//           .subscribe(categories => this.categories=categories['records']);
//   }
}
