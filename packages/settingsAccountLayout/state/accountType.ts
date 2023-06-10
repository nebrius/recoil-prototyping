import { createUseInitialStateValueHook } from 'packages/state/createUseInitialStateValueHook';
import { initialStateBasedAtom } from 'packages/state/initialStateBasedAtom';

import { delay } from 'packages/utils/delay';
import { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { accountInitialStateAtom } from './accountInitialState';
import { AccountType } from '../types/accountInitialState';

const accountTypeAtom = initialStateBasedAtom(accountInitialStateAtom, {
  key: 'settings:accountTypeAtom',
  initialValue: (initialState) => initialState.type,
});

export const useAccountType = createUseInitialStateValueHook(accountTypeAtom);

type Status = 'idle' | 'updating' | 'success' | 'error';

export function useSetAccountType(): [
  { status: Status },
  (newAccountType: AccountType) => void,
] {
  const setAccountTypeAtom = useSetRecoilState(accountTypeAtom);
  const [status, setStatus] = useState<Status>('idle');

  const setAccountTypeInternal = useCallback(
    async (newAccountType: AccountType) => {
      setStatus('updating');
      await delay(2000);
      setStatus('success');
      setAccountTypeAtom(newAccountType);
    },
    [setAccountTypeAtom, setStatus],
  );

  // Do this to hide the promise, which we don't want components using
  const setAccountType = useCallback(
    (newAccountType: AccountType) => {
      void setAccountTypeInternal(newAccountType);
    },
    [setAccountTypeInternal],
  );

  return [{ status }, setAccountType];
}
