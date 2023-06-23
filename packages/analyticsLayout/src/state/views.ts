'use client';

import { bootstrappedAtom, bootstrappedAtomValueHook } from 'recoil-bootstrap';

import { analyticsRootAtom } from './analyticsRootAtom';

const analyticsViewsAtom = bootstrappedAtom(analyticsRootAtom, {
  key: 'analytics:analyticsViewsAtom',
  initialValue: ({ views }) => views,
});

export const useAnalyticsViews = bootstrappedAtomValueHook(analyticsViewsAtom);
