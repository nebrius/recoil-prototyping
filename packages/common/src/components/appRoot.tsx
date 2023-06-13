'use client';

import type { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

import { BootstrapRoot } from 'recoil-bootstrap';

import { AppHeader } from './header';
import styles from './styles.module.css';
import { commonBootstrapRootAtom } from '../state/commonBootstrapRootAtom';
import type { CommonBootstrapData } from '../types/commonBootstrapData';

interface AppRoot {
  bootstrapData: CommonBootstrapData;
}

export function AppRoot({
  children,
  bootstrapData,
}: PropsWithChildren<AppRoot>) {
  return (
    <RecoilRoot>
      <BootstrapRoot
        bootstrapData={bootstrapData}
        bootstrapRootAtom={commonBootstrapRootAtom}
      >
        <AppHeader />
        <div className={styles.appContent}>{children}</div>
        <footer className={styles.appFooter}>Footer content</footer>
      </BootstrapRoot>
    </RecoilRoot>
  );
}
