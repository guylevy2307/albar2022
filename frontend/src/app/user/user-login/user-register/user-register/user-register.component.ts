import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/User';
import { AlertsServiceService } from 'src/app/services/alerts-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm!: FormGroup;

  constructor(private fb: FormBuilder,private userService:UserServiceService,private alertService:AlertsServiceService) { };
  user!: User;
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
  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value
    }

  }


    /* get methods for user*/
    get userName(){
      return this.registerationForm.get('userName') as FormControl;

    }
    get email(){
      return this.registerationForm.get('email') as FormControl;

    }
    get password(){
      return this.registerationForm.get('password') as FormControl;

    }


  onSubmit() {
    if (this.registerationForm.valid) {
    this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.alertService.success("User added successfully! ");
    }
    else {
      this.alertService.error("Unvalid details, please fix and send again ");

    }
  }

}
