import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  constructor(private http: HttpClient) {}
  getLeng() {}

  getAllNames() {
    return this.http.get('https://api.covid19api.com/').pipe(
      map((data) => Object.keys(data)
        )
    );
  }

  getLength() {
    return this.http
      .get<number>('https://api.covid19api.com/')
      .pipe(map((data) => Object.keys(data).length));
  }
}
