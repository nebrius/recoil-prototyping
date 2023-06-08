'use client';

import { RecoilRoot } from 'recoil';

import { AccountType } from './accountType';
import { accountInitialStateAtom } from '../state/accountInitialState';
import { AccountInitialState } from '../types/accountInitialState';

interface AccountRootProps {
  initialState: AccountInitialState;
}

export function AccountRoot({ initialState }: AccountRootProps) {
  return (
    <RecoilRoot
      initializeState={({ set }) => set(accountInitialStateAtom, initialState)}
    >
      <AccountType />
    </RecoilRoot>
  );
}
