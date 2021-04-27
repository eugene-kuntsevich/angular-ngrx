import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @Input()
  users: IUser[];
  @Output()
  userSelected: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  navigateToUser(id: number): void {
    this.userSelected.emit(id);
  }
}
