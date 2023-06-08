import { AccountRoot } from 'package/settings/components/accountRoot';
import { delay } from 'package/utils/delay';

export default async function Page() {
  await delay(2000);
  return <AccountRoot />;
}
