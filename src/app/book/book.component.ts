import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  //declare variable 
  bookId : number;

  constructor(public bookService : BookService,
    private route : ActivatedRoute,
    private toastr: ToastrService,
    public authService : AuthService,
    private router: Router) { }

  ngOnInit(): void {
    //get departments
    this.bookService.bindListDepartment();
    this.bookService.bindListgenre();
    this.bookService.bindListAuthor();
    this.bookService.bindListPublication();

    //get bookid from activate route
    this.bookId = this.route.snapshot.params['bookId'];

    //getBookId
    if(this.bookId!=0 || this.bookId != null){
      //get employee
      this.bookService.getBooksById(this.bookId).subscribe(
        result =>{
          console.log(result);
          
          //assign this result to bookservice
          this.bookService.formData = Object.assign({},result);
        },
        error =>{
          console.log(error);
        }
      );
    }
  }
  //submit form
  onSubmit(form :NgForm){
    console.log(form.value);
    let addId = this.bookService.formData.BookId;

    //insert of update 
    if(addId == 0 || addId == null){
      this.insertBookRecord(form);
    }else{
      this.updateBookRecord(form);
    }
  }

  //insert method
  insertBookRecord(form?:NgForm){
    console.log("Inserting record..");
    this.bookService.insertBook(form.value).subscribe(
      result =>{
        console.log(result);
        //calling reset form for clear the contents
        this.resetForm(form);
        this.toastr.success("New Book has been inserted","Abhinav's BookRentals ");
      },
      error =>{
        console.log(error);
      }
    )
  }
  updateBookRecord(form ?:NgForm){
    console.log("Updating Book ");
    this.bookService.updateBookById(form.value).subscribe(
      result =>{
        console.log(result);
        this.resetForm(form);
        this.toastr.success("New Book has been inserted","Abhinav's BookRentals ");
      },
      error =>{
        console.log(error);
      }
    )
  }


  //clear all contents after submit --reinitialize 
  resetForm(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
  }
  //logout
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}


