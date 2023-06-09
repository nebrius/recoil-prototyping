import { DetailsLayoutRoot } from 'packages/analyticsLayout/components/detailsLayoutRoot';
import { InitialState } from 'packages/analyticsLayout/types/initialState';
import { get } from 'packages/utils/api';

export default async function Page() {
  const initialState = await get<InitialState>('/analytics');
  return <DetailsLayoutRoot initialState={initialState} />;
}
