import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country } from '../models/esapi';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }
  getLeng() {}

  getAllNames() {
    this.http.get<Country>('https://api.covid19api.com/');
  }
}
