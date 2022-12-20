import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  PropertyList:Array<any> =[{
    "Id":1,
    "Type":"Jeep",
    "Price":"3000"
  },
  {
    "Id":2,
    "Type":"Toyota",
    "Price":"2000"
  },{
    "Id":3,
    "Type":"family car",
    "Price":"1500"
  },{
    "Id":4,
    "Type":"Mercedes",
    "Price":"4500"
  }


]

}
