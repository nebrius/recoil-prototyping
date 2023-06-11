'use client';

import {
  createUseInitialStateValueHook,
  initialStateBasedAtom,
} from '@rp/state';

import { initialStateAtom } from './initialState';

const analyticsViewsAtom = initialStateBasedAtom(initialStateAtom, {
  key: 'analytics:analyticsViewsAtom',
  initialValue: (initialState) => initialState.views,
});

export const useAnalyticsViews =
  createUseInitialStateValueHook(analyticsViewsAtom);
