'use client';

import { bootstrappedAtom, bootstrappedAtomValueHook } from 'recoil-bootstrap';

import { AnalyticsBootstrapRoot } from './analyticsBootstrapRoot';

const analyticsViewsAtom = bootstrappedAtom(AnalyticsBootstrapRoot, {
  key: 'analytics:analyticsViewsAtom',
  initialValue: ({ views }) => views,
});

export const useAnalyticsViews = bootstrappedAtomValueHook(analyticsViewsAtom);
