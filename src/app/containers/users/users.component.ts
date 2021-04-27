import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectUserList } from '../../store/selectors/user.selector';

import { IAppState } from '../../store/state/app.state';
import { GetUsers } from '../../store/actions/user.actions';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$ = this.store.pipe(select(selectUserList));

  constructor(private store: Store<IAppState>, private router: Router) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetUsers());
  }

  navigateToUser(id: number): void {
    this.router.navigate(['user', id]);
  }
}
