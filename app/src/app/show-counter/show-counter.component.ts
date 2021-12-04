import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.scss']
})
export class ShowCounterComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  showTs(){
    return this.counterService.show();
  }
}
