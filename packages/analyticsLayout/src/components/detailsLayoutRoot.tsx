'use client';

import { BootstrapRoot } from 'recoil-bootstrap';

import { Views } from './views';
import { analyticsRootAtom } from '../state/analyticsRootAtom';
import type { AnalyticsBootstrapData } from '../types/analyticsBootstrapData';

interface DetailsLayoutRootProps {
  bootstrapData: AnalyticsBootstrapData;
}

export function DetailsLayoutRoot({ bootstrapData }: DetailsLayoutRootProps) {
  return (
    <BootstrapRoot bootstrapData={bootstrapData} rootAtom={analyticsRootAtom}>
      <Views />
    </BootstrapRoot>
  );
}
