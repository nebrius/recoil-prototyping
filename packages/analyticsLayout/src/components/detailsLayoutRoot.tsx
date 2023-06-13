'use client';

import { BootstrapRoot } from 'recoil-bootstrap';

import { Views } from './views';
import { analyticsBootstrapRootAtom } from '../state/analyticsBootstrapRootAtom';
import type { AnalyticsBootstrapData } from '../types/initialState';

interface DetailsLayoutRootProps {
  bootstrapData: AnalyticsBootstrapData;
}

export function DetailsLayoutRoot({ bootstrapData }: DetailsLayoutRootProps) {
  return (
    <BootstrapRoot
      bootstrapData={bootstrapData}
      bootstrapRootAtom={analyticsBootstrapRootAtom}
    >
      <Views />
    </BootstrapRoot>
  );
}
