import { AccountRoot } from 'package/settings/components/accountRoot';
import { AccountInitialState } from 'package/settings/types/accountInitialState';
import { delay } from 'package/utils/delay';

async function getInitialState() {
  await delay(2000);
  const initialState: AccountInitialState = {
    type: 'pro',
  };
  return initialState;
}

export default async function Page() {
  const initialState = await getInitialState();
  return <AccountRoot initialState={initialState} />;
}
