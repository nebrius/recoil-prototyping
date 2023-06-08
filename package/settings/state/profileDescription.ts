import { atom, selector, useRecoilValue } from 'recoil';

import { profileInitialStateAtom } from './profileInitialState';

const profileDescriptionAtom = atom({
  key: 'settings:profileDescriptionAtom',

  // We set the default to a selector so that we can grab the initial value
  // from the initial value atom, which is set during first render in the
  // Recoil root in AppRoot
  default: selector({
    key: 'settings:profileDescriptionAtomInitializer',
    get: ({ get }) => get(profileInitialStateAtom).description,
  }),
});

export function useProfileDescription() {
  // TODO: add error checking
  return useRecoilValue(profileDescriptionAtom);
}
