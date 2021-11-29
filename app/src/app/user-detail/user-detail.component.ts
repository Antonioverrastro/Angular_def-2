import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  @Input() users!: User[];
  @Output() closeWindow = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close(users: User[]){
    this.closeWindow.emit(this.users)
  }
}
