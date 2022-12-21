import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
  authUser(authUser: any) {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users')!);
    }
    return UserArray.find((user: { email: any; password: any; }) => user.email === authUser.email && user.password === authUser.password);
}

}
