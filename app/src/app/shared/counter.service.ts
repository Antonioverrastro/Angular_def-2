import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter = 0;

  constructor() {}

  balance(){
    console.log(this.counter)
  }
  add(){
    this.counter + 1
    console.log(this.counter)
  }
  remove(){
    this.counter -1
    if (this.counter < 0){
      console.log('Errore, il counter non può essere minore di 0')
    }else
    console.log(this.counter)
  }
}
