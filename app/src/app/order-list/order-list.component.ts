import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @Input() users!: User[];

  constructor() { }

  ngOnInit(): void {
  }

  exportUsers(){
    return this.users;
  }

}
