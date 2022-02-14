import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberComponent } from '../member/member.component';
import { Member } from '../shared/member';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables
  loginForm! : FormGroup;
  isSubmitted = false;
  errors = '';
  loginUser : any = new Member();

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authservice: AuthService) { }

  ngOnInit(): void {

    //create a reactive form model 
    this.loginForm = this.formBuilder.group(
      {
        MemberName:['',[Validators.required]],
        MemberPass:['',[Validators.required]]
      }
    );
  }

  //get controls for validation
  get formControls(){
    return this.loginForm.controls;
  }

  //login verify for credentials
  loginCredentials(){
    this.isSubmitted = true;
    console.log("submitted form for credentials");

    if(this.loginForm.valid){
      console.log("With valid");
      this.errors = "";
      this.authservice.loginVerify(this.loginForm.value)
      .subscribe(
        data =>{
          console.log(data);
          this.loginUser = data;

          //username roleid and token
          sessionStorage.setItem('JWTTOKEN', this.loginUser.token);

          //check the role based on role roleId
          if(this.loginUser.RoleId == 2){
            console.log("Admin");
            localStorage.setItem("USERNAME", this.loginUser.MemberName);
            localStorage.setItem("ACESSROLE",this.loginUser.RoleId);
            sessionStorage.setItem("USERNAME",this.loginUser.MemberName);
            this.router.navigateByUrl('/admin');
          }else if(this.loginUser.RoleId == 1){
            console.log("MEMBER");
            localStorage.setItem("USERNAME", this.loginUser.MemberName);
            localStorage.setItem("ACESSROLE",this.loginUser.RoleId);
            sessionStorage.setItem("USERNAME",this.loginUser.MemberName);
            this.router.navigateByUrl('/member');
          }else{
            this.errors = "Sorry! NOT Authenticate/authorize to access this module";
          }
        },
        errors =>{
          this.errors = "invalid username and password, try again";
        }
      );
    }
    if(this.loginForm.invalid){
      console.log("is Invalid");
    }
  }
  logout(){
    this.authservice.logout();
    this.router.navigateByUrl('login');
  }
}
