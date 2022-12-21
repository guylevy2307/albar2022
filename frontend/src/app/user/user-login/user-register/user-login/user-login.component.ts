import { Component, OnInit } from '@angular/core';
import { NgForm,FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AlertsService } from 'src/app/services/alerts.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService,private alerts:AlertsService,private router: Router) { }

  ngOnInit() {
  }
  onLogin(loginForm: NgForm) {
    const token = this.authService.authUser(loginForm.value);
    if (token) {
      this.alerts.success("login");
      localStorage.setItem('token', token.userName);
      loginForm.reset();
      this.router.navigate(['/']);

    } else {
      this.alerts.error("failed to login");
    }
  }
}
