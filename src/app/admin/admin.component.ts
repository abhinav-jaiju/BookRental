import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  page: number = 1;
  filter: string;
  loggedUser : string ;
  loggedId : string;

  constructor(public bookService : BookService,
    private router: Router,
    public authService : AuthService) { }

  ngOnInit(): void {
    
    console.log("Welcome to LifeCycle Hook");
    this.bookService.getBooks();
    this.bookService.bindListFine()

    this.loggedUser = localStorage.getItem("USERNAME");
    this.loggedId = localStorage.getItem("ACESSROLE");
  }
  //update book
  updateBook(bookId : number){
    this.router.navigate(['book',bookId])
  }

  //delete Book
  deletBook(bookId : number){
    this.bookService.deleteBook(bookId).subscribe(
      response =>{
        this.bookService.bindListBook();
      },
      error =>{
        console.log(error);
      }
    );
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
