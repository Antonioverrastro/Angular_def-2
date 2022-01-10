import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {}

  getImages() {
    this.http.get('http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]').pipe(map((res) => console.log(res)));
  }
}
