import { Component, OnInit } from '@angular/core';
import { NgForm,FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AlertsService } from 'src/app/services/alerts.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserLogin } from 'src/app/model/userLogin';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private userService:UserService,private alertService:AlertsService,private router: Router) { };
  loginForm!: FormGroup;
  userLogin!: UserLogin;
  ngOnInit() {
    this.createLoginForm();
  }
   createLoginForm() {
    this.loginForm = this.fb.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]]
    })
   }
   get email(){
    return this.loginForm.get('email') as FormControl;

  }
  get password(){
    return this.loginForm.get('password') as FormControl;

  }

   userData(): UserLogin {
    return this.userLogin = {
      email: this.email.value,
      password: this.password.value
    }

  }
  onLogin() {
    this.router.navigate(['/']);
    /*const token = this.authService.authUser(loginForm.value);
    if (token) {
      this.alerts.success("login");
      localStorage.setItem('token', token.userName);
      loginForm.reset();
      this.router.navigate(['/']);

    } else {
      this.alerts.error("failed to login");
    }
    */
  }

}
