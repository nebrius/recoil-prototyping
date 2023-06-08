import { AccountRoot } from 'package/settings/components/accountRoot';
import { delay } from 'package/utils/delay';

async function getInitialState() {
  await delay(2000);
  return {};
}

export default async function Page() {
  const initialState = await getInitialState();
  return <AccountRoot initialState={initialState} />;
}
