import { RouterReducerState } from '@ngrx/router-store';
import { IConfigState, initialConfigState } from './config.state';

import { initialUserState, IUserState } from './user.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
