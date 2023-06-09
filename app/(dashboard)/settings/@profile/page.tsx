import { ProfileLayoutRoot } from 'packages/settings/components/profileLayoutRoot';
import { ProfileInitialState } from 'packages/settings/types/profileInitialState';
import { delay } from 'packages/utils/delay';

async function getInitialState() {
  await delay(4000);
  const initializeState: ProfileInitialState = {
    description: 'My account',
  };
  return initializeState;
}

export default async function Page() {
  const initialState = await getInitialState();
  return <ProfileLayoutRoot initialState={initialState} />;
}
