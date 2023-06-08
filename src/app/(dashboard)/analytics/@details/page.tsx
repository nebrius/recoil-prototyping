import { AnalyticsRoot } from '../../../../package/analytics/components/analyticsRoot';

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <AnalyticsRoot />;
}
