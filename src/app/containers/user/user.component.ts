import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { GetUser } from '../../store/actions/user.actions';
import { selectSelectedUser } from '../../store/selectors/user.selector';

import { IAppState } from '../../store/state/app.state';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user$ = this.store.pipe(select(selectSelectedUser));

  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetUser(this.route.snapshot.params.id));
  }
}
