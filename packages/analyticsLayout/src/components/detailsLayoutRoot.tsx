'use client';

import { Views } from './views';
import { AnalyticsBootstrapRoot } from '../state/analyticsBootstrapRoot';
import type { AnalyticsBootstrapData } from '../types/analyticsBootstrapData';

interface DetailsLayoutRootProps {
  bootstrapData: AnalyticsBootstrapData;
}

export function DetailsLayoutRoot({ bootstrapData }: DetailsLayoutRootProps) {
  return (
    <AnalyticsBootstrapRoot.Provider bootstrapData={bootstrapData}>
      <Views />
    </AnalyticsBootstrapRoot.Provider>
  );
}
