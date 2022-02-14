import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookService } from './shared/book.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooklistComponent } from './book/booklist/booklist.component';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { MemberviewComponent } from './member/memberview/memberview.component';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './shared/auth.guard'
import { HTTP_INTERCEPTORS,HttpClientModule  } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { FineComponent } from './admin/fine/fine.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooklistComponent,
    AdminComponent,
    MemberComponent,
    MemberviewComponent,
    LoginComponent,
    FineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [BookService,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
