'use client';

import { RecoilRoot } from 'recoil';

import { Views } from './views';
import { initialStateAtom } from '../state/initialState';
import { InitialState } from '../types/initialState';

interface AnalyticsRootProps {
  initialState: InitialState;
}

export function AnalyticsRoot({ initialState }: AnalyticsRootProps) {
  return (
    <RecoilRoot
      initializeState={({ set }) => set(initialStateAtom, initialState)}
    >
      <Views />
    </RecoilRoot>
  );
}
