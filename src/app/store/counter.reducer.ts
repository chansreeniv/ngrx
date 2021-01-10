import * as CounterActions from './counter.actions';

export interface State {
  count: number;
}

const initialState: State = {
  count: 0
}

export function CounterReducer(
  state: State = initialState,
  action: CounterActions.CounterActions
) {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return {
        ...state,
        count: [state.count + 1]
      }
    case CounterActions.DECREMENT:
      return {
        ...state,
        count: [state.count - 1]
      }
    case CounterActions.RESET:
      return {
        state: 0,
      }
    default:
      return state;
  }
}