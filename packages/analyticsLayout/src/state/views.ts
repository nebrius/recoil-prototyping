'use client';

import { bootstrappedAtom, bootstrappedAtomValueHook } from 'recoil-bootstrap';

import { analyticsBootstrapRootAtom } from './analyticsBootstrapRootAtom';

const analyticsViewsAtom = bootstrappedAtom(analyticsBootstrapRootAtom, {
  key: 'analytics:analyticsViewsAtom',
  initialValue: ({ views }) => views,
});

export const useAnalyticsViews = bootstrappedAtomValueHook(analyticsViewsAtom);
