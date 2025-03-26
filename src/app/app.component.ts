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


}
