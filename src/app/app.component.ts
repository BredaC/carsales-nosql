import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {CommonModule} from '@angular/common';
import { CarApiService } from './services/car-api.service';
import { CarlistComponent } from './components/carlist/carlist.component';

import { ICar } from './interfaces/car';
import { NewCar } from './interfaces/car';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CarlistComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carsales-nosql';
  carsData: ICar | any;


  constructor(private _carAPIService: CarApiService) { }

  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this._carAPIService.getCarDetails().subscribe(carsData => {
      this.carsData = carsData
    });
  }

  addCar(make: string, model: string, year: string, imageUrl: string): boolean {
    let addCar: ICar;
    addCar = new NewCar(make, model, year, imageUrl);
    this._carAPIService.addCarDetails(addCar).subscribe(carsData => { this.carsData = carsData }
    );

    return false;
  }
}
