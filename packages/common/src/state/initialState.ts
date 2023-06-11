'use client';

import { atom } from 'recoil';

import type { CommonInitialState } from '../types/commonInitialState';

export const initialStateAtom = atom<CommonInitialState>({
  key: 'commonInitialStateAtom',
});
