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
  objectsCovid!: string[];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.get().subscribe((data) => {
      return (
        (this.numberCovid = Object.keys(data).length),
        (this.countries = Object.keys(data)),
        (this.objectsCovid = Object.values(data).map((data) => data.Path))
      );
    });
  }
}
