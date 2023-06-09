import { createUseInitialStateValueHook } from 'packages/state/createUseInitialStateValueHook';
import { initialStateBasedAtom } from 'packages/state/initialStateBasedAtom';

import { accountInitialStateAtom } from './accountInitialState';

const accountTypeAtom = initialStateBasedAtom(accountInitialStateAtom, {
  key: 'settings:accountTypeAtom',
  initialValue: (initialState) => initialState.type,
});

export const useAccountType = createUseInitialStateValueHook(accountTypeAtom);
