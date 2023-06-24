import type { AnalyticsBootstrapData } from '@rp/analyticsLayout';
import { DetailsLayoutRoot } from '@rp/analyticsLayout';
import type { CommonBootstrapData } from '@rp/common';
import { AppRoot, Nav } from '@rp/common';
import { get } from '@rp/utils';

import styles from './styles.module.css';

interface Props {
  commonBootstrapData: CommonBootstrapData;
  analyticsBootstrapData: AnalyticsBootstrapData;
}

export async function getServerSideProps() {
  const [commonBootstrapData, analyticsBootstrapData] = await Promise.all([
    get<CommonBootstrapData>('/base'),
    get<AnalyticsBootstrapData>('/analytics'),
  ]);

  const props: Props = {
    commonBootstrapData,
    analyticsBootstrapData,
  };

  return { props };
}

export default function Analytics({
  commonBootstrapData,
  analyticsBootstrapData,
}: Props) {
  return (
    <div className={styles.app}>
      <AppRoot bootstrapData={commonBootstrapData}>
        <Nav>
          <h3 className={styles.settingsHeader}>Analytics page</h3>
          <div>
            <h4>Details</h4>
            <DetailsLayoutRoot bootstrapData={analyticsBootstrapData} />
          </div>
        </Nav>
      </AppRoot>
    </div>
  );
}
