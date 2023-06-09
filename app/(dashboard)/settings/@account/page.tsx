import { AccountLayoutRoot } from 'packages/settingsAccountLayout/components/accountLayoutRoot';
import { AccountInitialState } from 'packages/settingsAccountLayout/types/accountInitialState';
import { delay } from 'packages/utils/delay';

async function getInitialState() {
  await delay(2000);
  const initialState: AccountInitialState = {
    type: 'pro',
  };
  return initialState;
}

export default async function Page() {
  const initialState = await getInitialState();
  return <AccountLayoutRoot initialState={initialState} />;
}
