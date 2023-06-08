import { atom, selector, useRecoilValue } from 'recoil';

import { initialStateAtom } from './initialState';

const analyticsViewsAtom = atom({
  key: 'analytics:analyticsViewsAtom',

  // We set the default to a selector so that we can grab the initial value
  // from the initial value atom, which is set during first render in the
  // Recoil root in AppRoot
  default: selector({
    key: 'analytics:analyticsViewsAtomInitializer',
    get: ({ get }) => get(initialStateAtom).views,
  }),
});

export function useAnalyticsViews() {
  // TODO: add error checking
  return useRecoilValue(analyticsViewsAtom);
}
