import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { AlertsService } from 'src/app/services/alerts.service';
import { HousingService } from 'src/app/services/housing.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  carTypeList!: string[];
  addCarForm!: FormGroup;

  constructor(private fb: FormBuilder, private houseService: HousingService, private alertService: AlertsService, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.houseService.getAllType().subscribe(data => {
      this.carTypeList = data;
    }
    )
  }
  createForm() {
    this.addCarForm = this.fb.group({
      type:[null,[Validators.required]],
      price:[null,[Validators.required]]
    })
  }

  onSubmit() {
    if (this.addCarForm.valid) {
    //this.carService.addUser(this.userData());
      this.addCarForm.reset();
      this.alertService.success("Car added successfully! ");
      this.router.navigate(['/'])
    }
    else {
      this.alertService.error("Unvalid details, please fix and send again ");

    }
  }
}
