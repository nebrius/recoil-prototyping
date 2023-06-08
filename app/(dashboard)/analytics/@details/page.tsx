import { AnalyticsRoot } from 'package/analytics/components/analyticsRoot';
import { InitialState } from 'package/analytics/types/initialState';
import { delay } from 'package/utils/delay';

async function getInitialState() {
  await delay(4000);
  const initialState: InitialState = {
    views: 10,
  };
  return initialState;
}

export default async function Page() {
  const initialState = await getInitialState();
  return <AnalyticsRoot initialState={initialState} />;
}
