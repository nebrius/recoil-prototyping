import type { Metadata } from 'next';

import styles from './settings.module.css';

export const metadata: Metadata = {
  title: 'Settings',
};

export default function SettingsPage(props: { children: React.ReactNode }) {
  return (
    <>
      <h3 className={styles.settingsHeader}>Settings page</h3>
      {props.children}
    </>
  );
}
