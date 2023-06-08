import { delay } from 'package/utils/delay';

import styles from './app.module.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await delay(1000);
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.app}>
        <header className={styles.appHeader}>
          <h2>Example Testing App</h2>
          <span>current user</span>
        </header>
        <div className={styles.appContent}>{children}</div>
        <footer className={styles.appFooter}>Footer content</footer>
      </body>
    </html>
  );
}
