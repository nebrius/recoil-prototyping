'use client';

import { LayoutStateRoot } from 'packages/state/components/layoutStateRoot';

import { AccountType } from './accountType';
import { accountInitialStateAtom } from '../state/accountInitialState';
import { AccountInitialState } from '../types/accountInitialState';

interface AccountLayoutRootProps {
  initialState: AccountInitialState;
}

export function AccountLayoutRoot({ initialState }: AccountLayoutRootProps) {
  return (
    <LayoutStateRoot
      initialState={initialState}
      initialStateAtom={accountInitialStateAtom}
    >
      <AccountType />
    </LayoutStateRoot>
  );
}
