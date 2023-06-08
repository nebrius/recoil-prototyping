import { Metadata } from 'next';

import styles from './analytics.module.css';

export const metadata: Metadata = {
  title: 'Analytics',
};

export default function AnalyticsPage(props: { children: React.ReactNode }) {
  return (
    <>
      <h3 className={styles.analyticsHeader}>Analytics page</h3>
      {props.children}
    </>
  );
}
