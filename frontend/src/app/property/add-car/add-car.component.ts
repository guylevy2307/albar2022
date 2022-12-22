import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { AlertsService } from 'src/app/services/alerts.service';
import { HousingService } from 'src/app/services/housing.service';
import { Car } from 'src/app/model/Car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  carTypeList!: string[];
  addCarForm!: FormGroup;
  addedCar!: Car;
  constructor(private fb: FormBuilder, private houseService: HousingService, private alertService: AlertsService, private router: Router,private carService:CarService) { }
  car!: Car;
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
  carData(): Car {
    return this.car = {
      id: 0,
      type: this.type.value,
      price: this.price.value,
      imageUrl:''
    }
  }
  get price(){
    return this.addCarForm.get('price') as FormControl;

  }
  get type(){
    return this.addCarForm.get('type') as FormControl;

  }
  onSubmit() {
    if (this.addCarForm.valid) {
      console.log(this.carData())
      this.carService.addCar(this.carData()).subscribe(
        data=>this.addedCar=data
      );
      this.addCarForm.reset();
      this.alertService.success("Car added successfully! ");
      this.router.navigate(['/'])
    }
    else {
      this.alertService.error("Unvalid details, please fix and send again ");

    }
  }
}
