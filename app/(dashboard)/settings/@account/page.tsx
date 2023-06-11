import { AccountLayoutRoot } from 'packages/settingsAccountLayout';
import type { AccountInitialState } from 'packages/settingsAccountLayout';
import { get } from 'packages/utils/api';

export default async function Page() {
  const initialState = await get<AccountInitialState>('/settings/account');
  return <AccountLayoutRoot initialState={initialState} />;
}
