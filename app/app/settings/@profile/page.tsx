import { ProfileLayoutRoot } from '@rp/settingsProfileLayout';
import type { ProfileBootstrapData } from '@rp/settingsProfileLayout';
import { get } from '@rp/utils';

export default async function Page() {
  const bootstrapData = await get<ProfileBootstrapData>('/settings/profile');
  return <ProfileLayoutRoot bootstrapData={bootstrapData} />;
}
