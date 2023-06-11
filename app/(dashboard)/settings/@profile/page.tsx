import { ProfileLayoutRoot } from 'packages/settingsProfileLayout';
import type { ProfileInitialState } from 'packages/settingsProfileLayout';
import { get } from 'packages/utils';

export default async function Page() {
  const initialState = await get<ProfileInitialState>('/settings/profile');
  return <ProfileLayoutRoot initialState={initialState} />;
}
