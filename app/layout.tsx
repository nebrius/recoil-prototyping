import { AppRoot } from 'packages/common/components/appRoot';
import { CommonInitialState } from 'packages/common/types/commonInitialState';
import { delay } from 'packages/utils/delay';

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
      <body className={styles.body}>
        <AppRoot initialState={initialState}>{children}</AppRoot>
      </body>
    </html>
  );
}
