import { Component, EventEmitter, Input, Output } from '@angular/core';


import {CommonModule} from '@angular/common';
import { CarApiService } from '../../services/car-api.service';
import { ICar } from '../../interfaces/car';


@Component({
  selector: 'app-car',
  imports: [ CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

  @Input() carData?: ICar;

  @Output() carDeletedEvent = new EventEmitter<string>();

  carImageWidth: number = 300;

  constructor(private _carAPIService: CarApiService) { }

  deleteCar(carId: string) {
    this._carAPIService.delCarDetails(carId).subscribe(result => {
      this.carDeletedEvent.emit("Car got deleted");
      console.log(result);
    });

    
  }

}
