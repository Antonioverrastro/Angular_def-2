import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AnimalsService {
  response: Observable<number>[] = [];

  constructor(private readonly http: HttpClient) { }

  getImages(category: string, number: number): Observable<number>{
    return this.http.get<number[]>(`https://shibe.online/${category}count=[${number}]&urls=[true]&httpsUrls=[true]`).pipe(map((res) => this.response.push(res)));
  }
}
