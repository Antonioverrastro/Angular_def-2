import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter: number = 0;
  default: number = 1;

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
  add(value: number): number {
    return this.counter += value;
  }
  remove(value: number): number {
    return this.counter -= value;
  }
}
