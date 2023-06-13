'use client';

import { bootstrapRootAtom } from 'recoil-bootstrap';

import type { AnalyticsBootstrapData } from '../types/initialState';

export const analyticsBootstrapRootAtom =
  bootstrapRootAtom<AnalyticsBootstrapData>('analytics:initialStateAtom');
