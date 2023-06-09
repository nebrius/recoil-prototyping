import { AccountLayoutRoot } from 'packages/settingsAccountLayout/components/accountLayoutRoot';
import { AccountInitialState } from 'packages/settingsAccountLayout/types/accountInitialState';
import { get } from 'packages/utils/api';

export default async function Page() {
  const initialState = await get<AccountInitialState>('/settings/account');
  return <AccountLayoutRoot initialState={initialState} />;
}
