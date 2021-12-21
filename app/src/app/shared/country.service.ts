import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {Covid, ICovid} from '../models/covid.model'

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  constructor(private http: HttpClient) {}

  get(): Observable<Covid> {
    return this.http.get<ICovid>('https://api.covid19api.com/')
    .pipe(
      map(data => Covid.Build(data))
    )
  }
}
