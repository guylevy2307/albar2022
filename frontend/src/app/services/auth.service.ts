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
  serverUrl="http://localhost:5049/api/user/"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
   };
  authUser(authUser: any) {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users')!);
    }
    return UserArray.find((user: { email: any; password: any; }) => user.email === authUser.email && user.password === authUser.password);
}
login(loginUser: UserLogin): Observable<any>{

  return this.http.post(this.serverUrl+"/login", loginUser, this.httpOptions);
}

}
