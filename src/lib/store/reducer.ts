import { createFeature, createReducer, on } from '@ngrx/store';
import { actions } from './actions';
import { initialState } from './state';

export const reducerCurrency = createFeature({
  name: 'currency',
  reducer: createReducer(
    initialState,
    on(actions.fetchAction, (state, action) => ({
      ...state,
      currency: action.savedData,
    }))
  ),
});
