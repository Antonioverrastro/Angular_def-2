import { Injectable} from '@angular/core';
import { Beer, Type } from '../models/beer';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  beers: Beer[] = [
    { id: 1, type: Type.small, name: 'Peroni', price: 1 },
    { id: 2, type: Type.medium, name: 'Peroni', price: 1.5 },
    { id: 3, type: Type.small, name: 'Nastro Azzurro', price: 1.5 },
    { id: 4, type: Type.medium, name: 'Nastro Azzurro', price: 2 },
    { id: 5, type: Type.small, name: 'Heineken', price: 2 },
    { id: 6, type: Type.medium, name: 'Heineken', price: 2.5 },
    { id: 7, type: Type.small, name: 'Moretti', price: 1.2 },
    { id: 8, type: Type.medium, name: 'Moretti', price: 1.5 },
    { id: 9, type: Type.small, name: 'Ichnusa', price: 1.4 },
    { id: 10, type: Type.medium, name: 'Ichnusa', price: 1.9 }
  ];

  constructor() {}
}
