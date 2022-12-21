import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @ViewChild('Form') addCarForm: NgForm | undefined;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.addCarForm)
  console.log("add car")
 }
}
