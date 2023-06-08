'use client';

import { InitialState } from '../types/initialState';

interface AnalyticsRootProps {
  initialState: InitialState;
}

export function AnalyticsRoot({ initialState }: AnalyticsRootProps) {
  // TODO: set up Recoil
  console.log(initialState);
  return <div>Analytics content</div>;
}
