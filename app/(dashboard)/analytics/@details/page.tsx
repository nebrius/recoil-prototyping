import { AnalyticsRoot } from 'package/analytics/components/analyticsRoot';
import { delay } from 'package/utils/delay';

export default async function Page() {
  await delay(2000);
  return <AnalyticsRoot />;
}
