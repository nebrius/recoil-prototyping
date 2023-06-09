import { atom } from 'recoil';

import { ProfileInitialState } from '../types/profileInitialState';

export const profileInitialStateAtom = atom<ProfileInitialState>({
  key: 'settings:profileInitialStateAtom',
});
