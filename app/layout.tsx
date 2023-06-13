import { AppRoot } from '@rp/common';
import type { CommonBootstrapData } from '@rp/common';
import { get } from '@rp/utils';

import styles from './app.module.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bootstrapData = await get<CommonBootstrapData>('/base');
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        <AppRoot bootstrapData={bootstrapData}>{children}</AppRoot>
      </body>
    </html>
  );
}
