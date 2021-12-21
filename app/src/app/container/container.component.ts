import { Component, OnInit } from '@angular/core';

import { CountryService } from '../shared/country.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  countries!: string[];
  numberCovid!: number;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService
      .getLength()
      .subscribe((data) => (this.numberCovid = data));
    this.countryService
      .getAllNames()
      .subscribe((data) => (this.countries = data));
  }
}
