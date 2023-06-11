import { DetailsLayoutRoot } from 'packages/analyticsLayout';
import type { InitialState } from 'packages/analyticsLayout';
import { get } from 'packages/utils/api';

export default async function Page() {
  const initialState = await get<InitialState>('/analytics');
  return <DetailsLayoutRoot initialState={initialState} />;
}
