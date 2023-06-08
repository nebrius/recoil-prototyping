import { AppRoot } from 'package/common/components/appRoot';
import { AppHeader } from 'package/common/components/header';
import { CommonInitialState } from 'package/common/types/commonInitialState';
import { delay } from 'package/utils/delay';

import styles from './app.module.css';

async function getInitialState(): Promise<CommonInitialState> {
  await delay(1000);
  return {
    currentUser: {
      id: '12345',
      name: 'Fry',
      email: 'fry@planetexpress.com',
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = await getInitialState();
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.app}>
        <AppRoot initialState={initialState}>
          <AppHeader />
          <div className={styles.appContent}>{children}</div>
          <footer className={styles.appFooter}>Footer content</footer>
        </AppRoot>
      </body>
    </html>
  );
}
