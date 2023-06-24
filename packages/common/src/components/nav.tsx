import Link from 'next/link';

import styles from './styles.module.css';

export function Nav({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <Link href="./analytics">Analytics</Link>
        <Link href="./settings">Settings</Link>
      </nav>
      <div className={styles.navContent}>{children}</div>
    </div>
  );
}
