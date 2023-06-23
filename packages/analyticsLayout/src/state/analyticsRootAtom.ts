'use client';

import { rootAtom } from 'recoil-bootstrap';

import type { AnalyticsBootstrapData } from '../types/analyticsBootstrapData';

export const analyticsRootAtom = rootAtom<AnalyticsBootstrapData>(
  'analytics:analyticsRootAtom',
);
