import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Book Inventory Details';
  imgUrl = 'https://media-assets.bookbub.com/wp-content/uploads/2016/04/Tattered-Cover-Book-Store-in-Denver-Colorado.jpg';
  isDisabled = true;
}
