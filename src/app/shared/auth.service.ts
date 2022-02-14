import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (private httpClient : HttpClient) { }

  public loginVerify(member : Member){
    console.log(member.MemberName);
    return this.httpClient.get(environment.apiUrl+"/api/member/login/"+member.MemberName+'&'+member.MemberPass);
  }

  //logout
  public logout(){
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("ACESSROLE");
    sessionStorage.removeItem("USERNAME");
  }
}
