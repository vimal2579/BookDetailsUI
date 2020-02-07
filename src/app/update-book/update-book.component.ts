import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BookService } from '../Service/book.service';
import { Observable} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
  providers: [BookService]
})
export class UpdateBookComponent  {

  public bookId; 
  // our angular form
  update_book_form: FormGroup;

  constructor(
      private bookService: BookService,      
      private formBuilder: FormBuilder,
      private router : Router,
      private route: ActivatedRoute
  ){
      // build angular form
      this.update_book_form = this.formBuilder.group({
        price: [],
        availability: ["", Validators.required]
      });
  }

  book: Book;

  updateBook(){

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.bookId = id;
      this.bookService.updateBook(this.bookId, this.update_book_form.value)
      .subscribe(response => {
        response.json();
                console.log(response);
                  this.readBooks();
               },
               error => console.log(error)
           );
  }

  readBooks(){
    this.router.navigate(['/readbooks']);
}

ngOnInit(){
  // this.categoryService.readCategories()
  //     .subscribe(categories => this.categories=categories['records']);
}

//call the record when 'product_id' was changed
//   ngOnChanges(){
//       // read one product record
//       this.bookService.readOneBook(this.empreg_id)
//           .subscribe(book => {
//               // put values in the form
//               this.update_book_form.patchValue({
//                   primarySkill: this.book.primarySkill,
//                   experience: this.book.experience,
//                   noticePeriod: this.book.noticePeriod,
//                   CTC: this.book.CTC
//               });
//        
}