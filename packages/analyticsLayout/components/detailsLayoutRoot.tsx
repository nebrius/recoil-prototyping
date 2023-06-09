'use client';

import { LayoutStateRoot } from 'packages/state/layoutStateRoot';

import { Views } from './views';
import { initialStateAtom } from '../state/initialState';
import { InitialState } from '../types/initialState';

interface DetailsLayoutRootProps {
  initialState: InitialState;
}

export function DetailsLayoutRoot({ initialState }: DetailsLayoutRootProps) {
  return (
    <LayoutStateRoot
      initialState={initialState}
      initialStateAtom={initialStateAtom}
    >
      <Views />
    </LayoutStateRoot>
  );
}
