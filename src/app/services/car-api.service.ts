import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import {ICar} from '../interfaces/car'

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  private _siteURL = "https://localhost:5050/"

  constructor(private _http: HttpClient) { }
}
