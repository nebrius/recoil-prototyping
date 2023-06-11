import { ProfileLayoutRoot } from '@rp/settingsProfileLayout';
import type { ProfileInitialState } from '@rp/settingsProfileLayout';
import { get } from '@rp/utils';

export default async function Page() {
  const initialState = await get<ProfileInitialState>('/settings/profile');
  return <ProfileLayoutRoot initialState={initialState} />;
}
