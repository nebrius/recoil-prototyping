'use client';

import { bootstrapRootAtom } from 'recoil-bootstrap';

import type { AnalyticsBootstrapData } from '../types/analyticsBootstrapData';

export const analyticsBootstrapRootAtom =
  bootstrapRootAtom<AnalyticsBootstrapData>(
    'analytics:analyticsBootstrapRootAtom',
  );
