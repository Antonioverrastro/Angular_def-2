import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators'

import { Beer} from '../models/beer';
import { beerList } from './data';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private beers: Beer[] = beerList;

  private beerSubject = new BehaviorSubject<Beer[]>(this.beers);
  beer$ = this.beerSubject.asObservable();

  constructor() {}

  getAll(): Observable<Beer[]> {
    return this.beer$;
  }
  getBeerById(id: number) {
    return this.beer$.pipe(
      map((data) => data.find(beer => beer.id === id))
    )
  }
  getBeer(name: string, type: string) {
    return this.beerSubject.value.find(
      (beer) => beer.name === name && beer.type === type
    );
  }
}
