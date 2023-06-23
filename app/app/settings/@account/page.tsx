import { AccountLayoutRoot } from '@rp/settingsAccountLayout';
import type { AccountBootstrapData } from '@rp/settingsAccountLayout';
import { get } from '@rp/utils';

export default async function Page() {
  const bootstrapData = await get<AccountBootstrapData>('/settings/account');
  return <AccountLayoutRoot bootstrapData={bootstrapData} />;
}
