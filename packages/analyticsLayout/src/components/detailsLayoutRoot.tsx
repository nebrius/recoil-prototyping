'use client';

import { Views } from './views';
import { analyticsBootstrapRoot } from '../state/analyticsBootstrapRoot';
import type { AnalyticsBootstrapData } from '../types/analyticsBootstrapData';

interface DetailsLayoutRootProps {
  bootstrapData: AnalyticsBootstrapData;
}

export function DetailsLayoutRoot({ bootstrapData }: DetailsLayoutRootProps) {
  return (
    <analyticsBootstrapRoot.Provider bootstrapData={bootstrapData}>
      <Views />
    </analyticsBootstrapRoot.Provider>
  );
}
