import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-fine',
  templateUrl: './fine.component.html',
  styleUrls: ['./fine.component.scss']
})
export class FineComponent implements OnInit {
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

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
