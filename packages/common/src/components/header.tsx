'use client';

import styles from './styles.module.css';
import { useCurrentUser } from '../state/currentUser';

export function AppHeader() {
  const currentUser = useCurrentUser();
  return (
    <header className={styles.appHeader}>
      <h2>
        <a href="/">Recoil Prototyping</a>
      </h2>
      <span>{currentUser.name}</span>
    </header>
  );
}
