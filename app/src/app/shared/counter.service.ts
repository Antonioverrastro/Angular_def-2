import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter: number = 0;
  default: number = 1;

  constructor() {}
  show(): number {
    console.log(this.counter);
    return this.counter;
  }
  add(value?: number): number {
    if (value == null) {
      this.counter += this.default;
    } else {
      this.counter += value;
    }
    console.log(this.counter);
    return this.counter;
  }
  remove(value?: number): number {
    if (typeof value == 'undefined' && this.counter > 0) {
      this.counter -= 1;
    } else if (typeof value == 'number' && this.counter > 0) {
      this.counter -= value;
    } else {
      console.log('Errore');
    }
    if (this.counter < 0) {
      this.counter = 0;
    }
    return this.counter;
  }
}
