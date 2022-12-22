import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-editCar',
  templateUrl: './editCar.component.html',
  styleUrls: ['./editCar.component.css']
})
export class EditCarComponent implements OnInit {
  carId!: number
  @Input()
  oldPrice!: number;
  @Input() newPrice!: number;
  constructor( private alertService: AlertsService, private router: Router,private carService:CarService,private routArgs:ActivatedRoute) { }

  ngOnInit() {
    this.carId = this.routArgs.snapshot.params['id'];
    this.carService.getCarPrice(this.carId).subscribe(data => {
      this.oldPrice = data
    } );
  }

  onSubmit() {
    this.carService.updateCarPrice(this.carId,this.newPrice).subscribe(data => {
      this.oldPrice = data
    });
    this.alertService.success("upded price!")
    this.router.navigate(['/'])
  }
}
