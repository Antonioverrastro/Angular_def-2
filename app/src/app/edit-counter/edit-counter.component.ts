import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.scss']
})
export class EditCounterComponent implements OnInit {
  defaultTS!:number;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  addTs(){
    this.counterService.add(this.defaultTS);
  }

  removeTs(){
    this.counterService.remove(this.defaultTS);
  }
}
