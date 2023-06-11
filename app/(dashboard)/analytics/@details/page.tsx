import { DetailsLayoutRoot } from '@rp/analyticsLayout';
import type { InitialState } from '@rp/analyticsLayout';
import { get } from '@rp/utils';

export default async function Page() {
  const initialState = await get<InitialState>('/analytics');
  return <DetailsLayoutRoot initialState={initialState} />;
}
