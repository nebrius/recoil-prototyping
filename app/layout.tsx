import { AppRoot } from '@rp/common';
import type { CommonInitialState } from '@rp/common';
import { get } from '@rp/utils';

import styles from './app.module.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = await get<CommonInitialState>('/base');
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        <AppRoot initialState={initialState}>{children}</AppRoot>
      </body>
    </html>
  );
}
