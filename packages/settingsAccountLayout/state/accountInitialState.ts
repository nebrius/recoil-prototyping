import { atom } from 'recoil';

import { AccountInitialState } from '../types/accountInitialState';

export const accountInitialStateAtom = atom<AccountInitialState>({
  key: 'settings:accountInitialStateAtom',
});
