import { atom, selector, useRecoilValue } from 'recoil';

import { accountInitialStateAtom } from './accountInitialState';

const accountTypeAtom = atom({
  key: 'settings:accountTypeAtom',

  // We set the default to a selector so that we can grab the initial value
  // from the initial value atom, which is set during first render in the
  // Recoil root in AppRoot
  default: selector({
    key: 'settings:accountTypeAtomInitializer',
    get: ({ get }) => get(accountInitialStateAtom).type,
  }),
});

export function useAccountType() {
  // TODO: add error checking
  return useRecoilValue(accountTypeAtom);
}
