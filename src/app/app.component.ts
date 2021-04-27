import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetConfig } from './store/actions/config.actions';
import { selectConfig } from './store/selectors/config.selector';

import { IAppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';
  config$ = this.store.pipe(select(selectConfig));

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetConfig());
  }
}
