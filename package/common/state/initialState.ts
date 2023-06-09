import { atom } from 'recoil';

import { CommonInitialState } from '../types/commonInitialState';

export const initialStateAtom = atom<CommonInitialState>({
  key: 'commonInitialStateAtom',
});
