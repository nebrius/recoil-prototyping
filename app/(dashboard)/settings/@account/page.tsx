import { AccountLayoutRoot } from 'packages/settings/components/accountLayoutRoot';
import { AccountInitialState } from 'packages/settings/types/accountInitialState';
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
