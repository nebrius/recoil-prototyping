import type { CommonBootstrapData } from '@rp/common';
import { AppRoot, Nav } from '@rp/common';
import type { AccountBootstrapData } from '@rp/settingsAccountLayout';
import { AccountLayoutRoot } from '@rp/settingsAccountLayout';
import type { ProfileBootstrapData } from '@rp/settingsProfileLayout';
import { ProfileLayoutRoot } from '@rp/settingsProfileLayout';
import { get } from '@rp/utils';

import styles from './styles.module.css';

interface Props {
  commonBootstrapData: CommonBootstrapData;
  profileBootstrapData: ProfileBootstrapData;
  accountBootstrapData: AccountBootstrapData;
}

export async function getServerSideProps() {
  const [commonBootstrapData, profileBootstrapData, accountBootstrapData] =
    await Promise.all([
      get<CommonBootstrapData>('/base'),
      get<ProfileBootstrapData>('/settings/profile'),
      get<AccountBootstrapData>('/settings/account'),
    ]);

  const props: Props = {
    commonBootstrapData,
    profileBootstrapData,
    accountBootstrapData,
  };

  return { props };
}

export default function Analytics({
  commonBootstrapData,
  profileBootstrapData,
  accountBootstrapData,
}: Props) {
  return (
    <div className={styles.app}>
      <AppRoot bootstrapData={commonBootstrapData}>
        <Nav>
          <h3 className={styles.settingsHeader}>Settings page</h3>
          <div>
            <h4>Account</h4>
            <AccountLayoutRoot bootstrapData={accountBootstrapData} />
          </div>
          <div>
            <h4>Profile</h4>
            <ProfileLayoutRoot bootstrapData={profileBootstrapData} />
          </div>
        </Nav>
      </AppRoot>
    </div>
  );
}
