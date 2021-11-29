import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() exportUsers!: User[];
  @Output() selectUser = new EventEmitter();

  user = [];

  constructor() {}

  ngOnInit(): void {}

  userList(): User[] {
    return this.exportUsers;
  }

  viewUser(user: User) {
    this.selectUser.emit(user);
  }
}
