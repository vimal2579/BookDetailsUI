import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ReadBooksComponent } from '../read-books/read-books.component';
import { AuthguardService }  from '../Service/authguard.service';
import { CreateBookComponent } from '../create-book/create-book.component';
import { ReadOneBookComponent } from '../read-one-book/read-one-book.component';
import { UpdateBookComponent } from '../update-book/update-book.component';
import { DeleteBookComponent } from '../delete-book/delete-book.component';
 
const routes: Routes = [
   {path: '', redirectTo: '/readbooks', pathMatch: 'full'},
   {path: 'readbooks', component: ReadBooksComponent},
   {path: 'createbook', component: CreateBookComponent},
   {path: 'readonebook/:id', component: ReadOneBookComponent},
   {path: 'editbook/:id', component: UpdateBookComponent},
   {path: 'deletebook/:id', component: DeleteBookComponent}
];
 
//export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ReadBooksComponent,ReadOneBookComponent,CreateBookComponent,UpdateBookComponent,DeleteBookComponent]
