import { Action } from '@ngrx/store';

export const INCREMENT = '[Count Counter] Increment';
export const DECREMENT = '[Count Counter] Decrement';
export const RESET = '[Count Counter] Reset';

export class Increment implements Action {
  readonly type = INCREMENT;
}

export class Decrement implements Action {
  readonly type = DECREMENT;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type CounterActions = Increment | Decrement | Reset;
