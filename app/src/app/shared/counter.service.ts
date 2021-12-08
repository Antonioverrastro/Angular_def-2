import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counterSubject = new BehaviorSubject<number>(0);
  public counter$= this.counterSubject.asObservable();


  private counter: number = 0;
  default = 1;

  constructor() {}
  show() {
    console.log(this.counter);
    if (this.counter >= 0) {
      return this.counter;
    } else {
      this.counter = 0;
      return 'error';
    }
  }
  add(value: number = 1): number {
    return (this.counter += value);
  }
  remove(value: number = 1): number {
    return (this.counter -= value);
  }
}
