import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss'],
})
export class UserSingleComponent implements OnInit {
  @Input() exportUsers!: User[];
  @Output() selectUser = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  viewUser(user: User) {
    this.selectUser.emit(user);
  }
}
