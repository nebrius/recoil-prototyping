import { useAnalyticsViews } from '../state/views';

export function Views() {
  const views = useAnalyticsViews();
  return <div>Views: {views}</div>;
}
