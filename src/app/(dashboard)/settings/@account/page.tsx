import { AccountRoot } from '../../../../package/settings/components/accountRoot';

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <AccountRoot />;
}
