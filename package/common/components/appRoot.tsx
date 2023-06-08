'use client';

import { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

import { AppHeader } from './header';
import styles from './styles.module.css';
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
      initializeState={({ set }) => set(initialStateAtom, initialState)}
    >
      <AppHeader />
      <div className={styles.appContent}>{children}</div>
      <footer className={styles.appFooter}>Footer content</footer>
    </RecoilRoot>
  );
}
