import { DetailsLayoutRoot } from 'packages/analyticsLayout/components/detailsLayoutRoot';
import { InitialState } from 'packages/analyticsLayout/types/initialState';
import { delay } from 'packages/utils/delay';

async function getInitialState() {
  await delay(4000);
  const initialState: InitialState = {
    views: 10,
  };
  return initialState;
}

export default async function Page() {
  const initialState = await getInitialState();
  return <DetailsLayoutRoot initialState={initialState} />;
}
