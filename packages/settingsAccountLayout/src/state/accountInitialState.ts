'use client';

import { atom } from 'recoil';

import type { AccountInitialState } from '../types/accountInitialState';

export const accountInitialStateAtom = atom<AccountInitialState>({
  key: 'settings:accountInitialStateAtom',
});
