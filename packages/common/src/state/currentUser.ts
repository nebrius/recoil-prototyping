'use client';

import { atom, selector, useRecoilValue } from 'recoil';

import { initialStateAtom } from './initialState';

const currentUserAtom = atom({
  key: 'currentUserAtom',

  // We set the default to a selector so that we can grab the initial value
  // from the initial value atom, which is set during first render in the
  // Recoil root in AppRoot
  default: selector({
    key: 'currentUserAtomInitializer',
    get: ({ get }) => get(initialStateAtom).currentUser,
  }),
});

export function useCurrentUser() {
  return useRecoilValue(currentUserAtom);
}
