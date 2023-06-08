import { ProfileRoot } from '../../../../package/settings/components/profileRoot';

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <ProfileRoot />;
}
