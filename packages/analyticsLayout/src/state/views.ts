'use client';

import { analyticsBootstrapRoot } from './analyticsBootstrapRoot';

export const useAnalyticsViews = analyticsBootstrapRoot.bootstrappedValueHook({
  key: 'analytics:analyticsViewsAtom',
  initialValue: ({ views }) => views,
});
