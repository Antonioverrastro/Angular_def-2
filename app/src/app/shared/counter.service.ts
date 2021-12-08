import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
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
    return this.counter += value;
  }
  remove(value: number= 1): number {
    return this.counter -= value;
  }
}
