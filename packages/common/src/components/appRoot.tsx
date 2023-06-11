'use client';

import { LayoutStateRoot } from 'packages/state';
import type { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

import { AppHeader } from './header';
import styles from './styles.module.css';
import { initialStateAtom } from '../state/initialState';
import type { CommonInitialState } from '../types/commonInitialState';

interface AppRoot {
  initialState: CommonInitialState;
}

export function AppRoot({
  children,
  initialState,
}: PropsWithChildren<AppRoot>) {
  return (
    <RecoilRoot>
      <LayoutStateRoot
        initialState={initialState}
        initialStateAtom={initialStateAtom}
      >
        <AppHeader />
        <div className={styles.appContent}>{children}</div>
        <footer className={styles.appFooter}>Footer content</footer>
      </LayoutStateRoot>
    </RecoilRoot>
  );
}
