import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counterSubject = new BehaviorSubject<number>(0);
  public counter$ = this.counterSubject.asObservable();

  private counter: number = 0;
  default = 1;

  constructor() {}
  show() {
    if (this.counterSubject.value > 0) {
      return this.counterSubject;
    } else {
      return 'error';
    }
  }
  add(value: number = 1): number {
    this.counterSubject.next(value += this.counterSubject.value);
    return (this.counter += value);
  }
  remove(value: number = 1): number {
    this.counterSubject.next(this.counterSubject.value - value);
    return (this.counter -= value);
  }
}
