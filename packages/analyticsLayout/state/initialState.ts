import { atom } from 'recoil';

import { InitialState } from '../types/initialState';

export const initialStateAtom = atom<InitialState>({
  key: 'analytics:initialStateAtom',
});
