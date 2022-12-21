import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm!: FormGroup;
  constructor(private fb: FormBuilder) { };
  user: any = {};
  ngOnInit() {
    this.createRegisterationForm();
  }
  createRegisterationForm() {
    this.registerationForm = this.fb.group({
      userName:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]]
    })
  }
  onSubmit() {

    console.log(this.registerationForm)
    this.user = Object.assign(this.user, this.registerationForm.value);
    this.addUser(this.user);
  }
  addUser(user: any) {
    let users= [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users')!);
      users = [user, ...users];
    } else {
      users = [user];
}
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
