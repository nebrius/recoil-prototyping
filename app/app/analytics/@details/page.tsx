import { DetailsLayoutRoot } from '@rp/analyticsLayout';
import type { AnalyticsBootstrapData } from '@rp/analyticsLayout';
import { get } from '@rp/utils';

export default async function Page() {
  const bootstrapData = await get<AnalyticsBootstrapData>('/analytics');
  return <DetailsLayoutRoot bootstrapData={bootstrapData} />;
}
