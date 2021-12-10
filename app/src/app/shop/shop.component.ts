import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';

import { Beer } from '../models/beer';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  beers!: Beer[];
  beerId?: Beer;
  id: number = 0;
  name?: string;
  type?: string;
  selectedBeer?: Beer;

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.beerService.getAll().subscribe((data: Beer[]) => (this.beers = data));
  }

  searchBeer(name: string, type: string): Beer | undefined {
    return (this.selectedBeer = this.beerService.getBeer(name, type));
  }

  searchId(id: number){
    this.beerService.getBeerById(id).subscribe(
      (data) => this.beerId = data).unsubscribe
  }
}
