import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  serverUrl="http://localhost:5049/api/user"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
   };
   public getToken(): any {
    return localStorage.getItem('token');
   }
   public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }
login(loginUser: UserLogin): Observable<any>{

   return this.http.post(this.serverUrl+"/login", loginUser, this.httpOptions);
}


}
function tokenNotExpired(arg0: null, token: any): boolean {
  throw new Error('Function not implemented.');
}

