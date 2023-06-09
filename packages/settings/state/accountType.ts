import {
  initialStateBasedAtom,
  createUseInitialStateValueHook,
} from 'packages/state/initalStateHelpers';

import { accountInitialStateAtom } from './accountInitialState';

const accountTypeAtom = initialStateBasedAtom(accountInitialStateAtom, {
  key: 'settings:accountTypeAtom',
  initialValue: (initialState) => initialState.type,
});

export const useAccountType = createUseInitialStateValueHook(accountTypeAtom);
