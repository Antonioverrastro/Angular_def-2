import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Beer, Type } from '../models/beer';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  beers: Beer[] = [
    { id: 1, type: Type.small, name: 'peroni', price: 1 },
    { id: 2, type: Type.medium, name: 'peroni', price: 1.5 },
    { id: 3, type: Type.small, name: 'nastro', price: 1.5 },
    { id: 4, type: Type.medium, name: 'nastro', price: 2 },
    { id: 5, type: Type.small, name: 'heineken', price: 2 },
    { id: 6, type: Type.medium, name: 'heineken', price: 2.5 },
    { id: 7, type: Type.small, name: 'moretti', price: 1.2 },
    { id: 8, type: Type.medium, name: 'moretti', price: 1.5 },
    { id: 9, type: Type.small, name: 'ichnusa', price: 1.4 },
    { id: 10, type: Type.medium, name: 'ichnusa', price: 1.9 },
  ];

  beerSubject = new BehaviorSubject<Beer[]>(this.beers);

  constructor() {}

  getAll() {
    return this.beerSubject;
  }
  getBeer(b: Beer) {
    this.beerSubject.next(this.beers.filter((beer)=> beer.id == b.id))
  }
}
