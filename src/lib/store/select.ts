import { createSelector } from '@ngrx/store';
import { reducerCurrency } from './reducer';

export const { selectCurrency } = reducerCurrency;
