import { atom, selector } from 'recoil';

import { initialCommonStateSelector } from './initialState';

export const currentUserAtom = atom({
  key: 'currentUserAtom',

  // We set the default to a selector so that we can grab the initial value
  // from the initial value atom, which is set during first render in the
  // Recoil root in _app.tsx
  default: selector({
    key: 'currentUserAtomInitializer',
    get: ({ get }) => get(initialCommonStateSelector).currentUser,
  }),
});
