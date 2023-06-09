import {
  createInitialStateAtom,
  createUseInitialStateValueHook,
} from 'packages/state/initalStateHelpers';

import { initialStateAtom } from './initialState';

const analyticsViewsAtom = createInitialStateAtom(initialStateAtom, {
  key: 'analytics:analyticsViewsAtom',
  initialValue: (initialState) => initialState.views,
});

export const useAnalyticsViews =
  createUseInitialStateValueHook(analyticsViewsAtom);
