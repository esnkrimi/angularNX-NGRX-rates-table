import { NgModule } from '@angular/core';
import { RatesBoardComponent } from './rates-board.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { reducerCurrency } from './store/reducer';
import { CommonModule } from '@angular/common';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
@NgModule({
  declarations: [RatesBoardComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('currency', reducerCurrency.reducer, {
      metaReducers,
    }),
  ],
  exports: [RatesBoardComponent],
})
export class RatesBoardModule {}
