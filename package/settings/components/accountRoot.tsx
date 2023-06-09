'use client';

import { LocalizedState } from 'package/state/components/localizedState';

import { AccountType } from './accountType';
import { accountInitialStateAtom } from '../state/accountInitialState';
import { AccountInitialState } from '../types/accountInitialState';

interface AccountRootProps {
  initialState: AccountInitialState;
}

export function AccountRoot({ initialState }: AccountRootProps) {
  return (
    <LocalizedState
      initialState={initialState}
      initialStateAtom={accountInitialStateAtom}
    >
      <AccountType />
    </LocalizedState>
  );
}
