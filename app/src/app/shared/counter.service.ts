import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counterSubject = new BehaviorSubject<number>(100);
  public counter$ = this.counterSubject.asObservable();

  private counter: number = 0;
  default = 1;

  constructor() {}
  show(): Observable<number> | string {
    if (this.counterSubject.value < 0) {
      return 'error';
    } else {
      return this.counter$;
    }
  }
  add(value: number = 1): number {
    return (this.counter += value);
  }
  remove(value: number = 1): number {
    return (this.counter -= value);
  }
}
