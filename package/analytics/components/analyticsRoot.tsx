'use client';

import { LocalizedState } from 'package/state/components/localizedState';

import { Views } from './views';
import { initialStateAtom } from '../state/initialState';
import { InitialState } from '../types/initialState';

interface AnalyticsRootProps {
  initialState: InitialState;
}

export function AnalyticsRoot({ initialState }: AnalyticsRootProps) {
  return (
    <LocalizedState
      initialState={initialState}
      initialStateAtom={initialStateAtom}
    >
      <Views />
    </LocalizedState>
  );
}
