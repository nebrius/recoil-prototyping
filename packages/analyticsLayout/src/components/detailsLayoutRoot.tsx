'use client';

import { LayoutStateRoot } from '@rp/state';

import { Views } from './views';
import { initialStateAtom } from '../state/initialState';
import type { InitialState } from '../types/initialState';

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
