import { ProfileLayoutRoot } from 'packages/settingsProfileLayout/components/profileLayoutRoot';
import { ProfileInitialState } from 'packages/settingsProfileLayout/types/profileInitialState';
import { get } from 'packages/utils/api';

export default async function Page() {
  const initialState = await get<ProfileInitialState>('/settings/profile');
  return <ProfileLayoutRoot initialState={initialState} />;
}
