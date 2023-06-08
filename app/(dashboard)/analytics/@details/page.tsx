import { AnalyticsRoot } from 'package/analytics/components/analyticsRoot';
import { delay } from 'package/utils/delay';

async function getInitialState() {
  await delay(4000);
  return {};
}

export default async function Page() {
  const initialState = await getInitialState();
  return <AnalyticsRoot initialState={initialState} />;
}
