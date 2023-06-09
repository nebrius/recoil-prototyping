import {
  createInitialStateAtom,
  createUseInitialStateValueHook,
} from 'packages/state/initalStateHelpers';

import { accountInitialStateAtom } from './accountInitialState';

const accountTypeAtom = createInitialStateAtom(accountInitialStateAtom, {
  key: 'settings:accountTypeAtom',
  initialValue: (initialState) => initialState.type,
});

export const useAccountType = createUseInitialStateValueHook(accountTypeAtom);
