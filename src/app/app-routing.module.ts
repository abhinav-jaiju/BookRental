import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FineComponent } from './admin/fine/fine.component';
import { BookComponent } from './book/book.component';
import { BooklistComponent } from './book/booklist/booklist.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { MemberviewComponent } from './member/memberview/memberview.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  //navigate routes
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'member',component:MemberComponent},
  {path:'book',component:BookComponent},
  {path:'booklist',component:BooklistComponent , canActivate:[AuthGuard] , data:{role:'2'}},
  {path:'memberview',component:MemberviewComponent},
  {path:'fine' , component:FineComponent},
  {path:'member',component:MemberComponent, canActivate:[AuthGuard], data:{role : '1'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
