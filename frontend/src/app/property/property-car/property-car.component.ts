import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-car',
  templateUrl: './property-car.component.html',
  styleUrls: ['./property-car.component.css']
})
export class PropertyCarComponent  {
  Property:any ={
    "Id":1,
    "Type":"mazda",
    "Price":"1500"
  }

}
