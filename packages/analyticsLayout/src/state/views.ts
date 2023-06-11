'use client';

import { createUseInitialStateValueHook } from 'packages/state/createUseInitialStateValueHook';
import { initialStateBasedAtom } from 'packages/state/initialStateBasedAtom';

import { initialStateAtom } from './initialState';

const analyticsViewsAtom = initialStateBasedAtom(initialStateAtom, {
  key: 'analytics:analyticsViewsAtom',
  initialValue: (initialState) => initialState.views,
});

export const useAnalyticsViews =
  createUseInitialStateValueHook(analyticsViewsAtom);
