import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-order-single',
  templateUrl: './order-single.component.html',
  styleUrls: ['./order-single.component.scss']
})
export class OrderSingleComponent implements OnInit {
  @Input() users!: User[];

  constructor() { }

  ngOnInit(): void {
  }

  exportUsers(){
    return this.users;
  }

}
