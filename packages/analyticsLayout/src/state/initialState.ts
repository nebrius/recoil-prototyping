'use client';

import { atom } from 'recoil';

import type { InitialState } from '../types/initialState';

export const initialStateAtom = atom<InitialState>({
  key: 'analytics:initialStateAtom',
});
