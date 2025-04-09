import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {CommonModule} from '@angular/common';
import { CarApiService } from './services/car-api.service';


import { ICar } from './interfaces/car';
import { RouterLink} from '@angular/router';
import { RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
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
    this._carAPIService.getCarDetails().subscribe(carsData =>
      { this.carsData = carsData
    });
  }

}
