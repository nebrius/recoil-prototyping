import { ProfileRoot } from 'package/settings/components/profileRoot';
import { delay } from 'package/utils/delay';

export default async function Page() {
  await delay(4000);
  return <ProfileRoot />;
}
