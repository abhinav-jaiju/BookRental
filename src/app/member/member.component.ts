import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  //declare variable 
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

    this.loggedUser = localStorage.getItem("USERNAME");
    this.loggedId = localStorage.getItem("ACESSROLE");
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
  

}
