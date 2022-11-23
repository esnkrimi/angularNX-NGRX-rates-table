import { createActionGroup, props, emptyProps } from '@ngrx/store';

export const actions = createActionGroup({
  source: 'currency',
  events: {
    'fetch action': props<{ savedData: any }>(),
  },
});
