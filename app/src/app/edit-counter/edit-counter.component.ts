import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/counter.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.scss']
})
export class EditCounterComponent implements OnInit {
  default!: number;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.default = this.counterService.default;
  }

  addTs(value?: number){
    this.counterService.add(this.default);
  }

  removeTs(value?: number){
    this.counterService.remove(this.default);
  }
}
