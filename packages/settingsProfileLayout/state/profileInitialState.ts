import { atom } from 'recoil';

import type { ProfileInitialState } from '../types/profileInitialState';

export const profileInitialStateAtom = atom<ProfileInitialState>({
  key: 'settings:profileInitialStateAtom',
});
