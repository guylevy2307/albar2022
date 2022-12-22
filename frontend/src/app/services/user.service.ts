import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
   };
constructor(private http: HttpClient) { }
serverUrl="http://localhost:5049/api/user/"
  addUser(addedUser: User): Observable<any>{

  return this.http.post(this.serverUrl+"/register", addedUser, this.httpOptions);
}


}
