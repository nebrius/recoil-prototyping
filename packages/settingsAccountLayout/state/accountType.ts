import { createUseAsyncUpdateStateHook } from 'packages/state/createUseAsyncUpdateStateHook';
import { createUseInitialStateValueHook } from 'packages/state/createUseInitialStateValueHook';
import { initialStateBasedAtom } from 'packages/state/initialStateBasedAtom';

import { delay } from 'packages/utils/delay';

import { accountInitialStateAtom } from './accountInitialState';

const accountTypeAtom = initialStateBasedAtom(accountInitialStateAtom, {
  key: 'settings:accountTypeAtom',
  initialValue: (initialState) => initialState.type,
});

export const useAccountType = createUseInitialStateValueHook(accountTypeAtom);

export const useSetAccountType = createUseAsyncUpdateStateHook(
  accountTypeAtom,
  async (newAccountType, setStatus, setAccountTypeAtom) => {
    // Optimistically set
    setAccountTypeAtom(newAccountType);
    setStatus('updating');
    await delay(2000);
    setStatus('success');
  },
);
