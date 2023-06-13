'use client';

import type { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

import { BootstrapRoot } from 'recoil-bootstrap';

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
      <BootstrapRoot
        bootstrapData={initialState}
        bootstrapRootAtom={initialStateAtom}
      >
        <AppHeader />
        <div className={styles.appContent}>{children}</div>
        <footer className={styles.appFooter}>Footer content</footer>
      </BootstrapRoot>
    </RecoilRoot>
  );
}
