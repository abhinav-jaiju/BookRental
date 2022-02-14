import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

   //declare variable 
   page: number = 1;
   filter: string;
 

  constructor(public bookService : BookService,
    private router: Router,
    public authService : AuthService) { }

  ngOnInit(): void {
    console.log("Welcome to LifeCycle Hook");
    this.getBooks();

  }
  getBooks(){
    this.bookService.getBooks();
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
