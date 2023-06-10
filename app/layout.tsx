import { AppRoot } from 'packages/common/components/appRoot';
import { CommonInitialState } from 'packages/common/types/commonInitialState';
import { get } from 'packages/utils/api';

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
