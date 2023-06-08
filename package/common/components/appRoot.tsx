'use client';

import { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

import { initialStateAtom } from '../state/initialState';
import { CommonInitialState } from '../types/commonInitialState';

interface AppRoot {
  initialState: CommonInitialState;
}

export function AppRoot({
  children,
  initialState,
}: PropsWithChildren<AppRoot>) {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(initialStateAtom, initialState);
      }}
    >
      {children}
    </RecoilRoot>
  );
}
