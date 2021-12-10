import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country } from '../models/esapi';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  countries: Country[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getLeng() {}

  getAllNames() {
    this.http.get<Country>('https://api.covid19api.com/');
  }
}
