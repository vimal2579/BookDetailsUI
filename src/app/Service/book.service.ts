import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators'
import { map } from 'rxjs/operators';
import { Book } from '../book';
 
@Injectable()
// Service for Employee data.
export class BookService { 
    // We need Http to talk to a remote server.
    constructor(private _http : Http){ } 
    // Get list of employees from remote server.
    readBooks()   
    {
        return this._http.get("http://localhost:21021/api/BookDetails/");            
    }
    
    // Send employee data to remote server to create it.
    createBook(book)
    {  
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post("http://localhost:21021/api/BookDetails/", JSON.stringify(book), options);        
    }

    // Get a employee details from remote server.
    readOneBook(bookId)
    {
        return this._http.get("http://localhost:21021/api/BookDetails/"+bookId);
    }

    // Send employee data to remote server to update it.
    updateBook(bookId,book)
    { 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.put("http://localhost:21021/api/BookDetails/"+bookId+"",JSON.stringify(book), options);
       
    }

    // Send employee ID to remote server to delete it.
    deleteBook(bookId)
    {
    
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
    
        return this._http.delete("http://localhost:21021/api/BookDetails/"+bookId, options);        
        //pipe(map((res: Response) => res.json()));
    }
       
}
