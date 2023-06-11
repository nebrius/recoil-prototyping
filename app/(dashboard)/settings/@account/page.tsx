import { AccountLayoutRoot } from '@rp/settingsAccountLayout';
import type { AccountInitialState } from '@rp/settingsAccountLayout';
import { get } from '@rp/utils';

export default async function Page() {
  const initialState = await get<AccountInitialState>('/settings/account');
  return <AccountLayoutRoot initialState={initialState} />;
}
