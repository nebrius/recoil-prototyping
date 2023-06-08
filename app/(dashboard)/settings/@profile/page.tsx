import { ProfileRoot } from 'package/settings/components/profileRoot';
import { delay } from 'package/utils/delay';

async function getInitialState() {
  await delay(4000);
  return {};
}

export default async function Page() {
  const initialState = await getInitialState();
  return <ProfileRoot initialState={initialState} />;
}
