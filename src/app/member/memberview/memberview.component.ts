import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-memberview',
  templateUrl: './memberview.component.html',
  styleUrls: ['./memberview.component.scss']
})
export class MemberviewComponent implements OnInit {
  page: number = 1;
  filter: string;
  loggedUser : string ;


  constructor(public bookService : BookService,
    private router: Router,
    public authService : AuthService) { }

  ngOnInit(): void {
    
    console.log("Welcome to LifeCycle Hook");
    this.bookService.getBooks();

    this.loggedUser = localStorage.getItem("USERNAME");
    this.loggedUser = localStorage.getItem("ACESSROLE");
  }


  logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
