'use client';

import type { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

import { AppHeader } from './header';
import styles from './styles.module.css';
import { commonBootstrapRoot } from '../state/commonBootstrapRoot';
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
      <commonBootstrapRoot.Provider bootstrapData={bootstrapData}>
        <AppHeader />
        <div className={styles.appContent}>{children}</div>
        <footer className={styles.appFooter}>Footer content</footer>
      </commonBootstrapRoot.Provider>
    </RecoilRoot>
  );
}
