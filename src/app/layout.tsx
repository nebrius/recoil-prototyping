import styles from './app.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
