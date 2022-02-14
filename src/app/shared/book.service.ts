import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './book';
import { Department } from './department';
import { Genre } from './genre';
import { Author } from './author';
import { Publication } from './publication';
import { Rentdetails } from './rentdetails';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books : Book[];
  departments : Department[];
  genre : Genre[];
  author: Author[];
  publication : Publication[];
  fine : Rentdetails[];
  formData : Book = new Book();


  constructor(private httpClient: HttpClient) { }

  bindListBook(){
    this.httpClient.get(environment.apiUrl+'/api/booktable')
    .toPromise().then(
      response =>{
        console.log("from Service");
        console.log(response);
        this.books = response as Book[];
      }
    );
  }

  //get all department for binding
  bindListDepartment(){
    this.httpClient.get(environment.apiUrl+'/api/role')
    .toPromise().then(
      response =>{
        console.log("from Service");
        console.log(response);
        this.departments = response as Department[];
      }
    )
  }

  //get all genre for binding
  bindListgenre(){
    this.httpClient.get(environment.apiUrl+'/api/genre')
    .toPromise().then(
      response =>{
        console.log("from Service");
        console.log(response);
        this.genre = response as Genre[];
      }
    )
  }

  //get all author for binding
  bindListAuthor(){
    this.httpClient.get(environment.apiUrl+'/api/authortable')
    .toPromise().then(
      response =>{
        console.log("from Service");
        console.log(response);
        this.author = response as Author[];
      }
    )
  }

  //get all publication for binding
  bindListPublication(){
    this.httpClient.get(environment.apiUrl+'/api/publication')
    .toPromise().then(
      response =>{
        console.log("from Service");
        console.log(response);
        this.publication = response as Publication[];
      }
    )
  }

  //get all Fine
  bindListFine(){
    this.httpClient.get(environment.apiUrl+'/api/renttable/finedetails')
    .toPromise().then(
      response =>{
        console.log("from Service");
        console.log(response);
        this.fine = response as Rentdetails[];
      }
    )
  }
  //get Books by id
  getBooksById(id:number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/booktable'+id);
  }

  //insert book
  insertBook(books : Book): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/booktable',books);
  }

  //update book
  updateBookById(books : Book): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/booktable',books);
  }

  //deleteBook by Id 
  deleteBook(id : number): Observable<any>{
    return this.httpClient.delete(environment.apiUrl+'/api/booktable'+id);
  }

  getBooks(){
    this.httpClient.get(environment.apiUrl+'/api/booktable/bookdetails')
    .toPromise().then(
      response =>{
        console.log("from Service");
        console.log(response);
        this.books = response as Book[];
      }
    );
  }
}
