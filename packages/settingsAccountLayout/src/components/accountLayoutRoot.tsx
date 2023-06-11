'use client';

import { LayoutStateRoot } from '@rp/state';

import { AccountType } from './accountType';
import { accountInitialStateAtom } from '../state/accountInitialState';
import type { AccountInitialState } from '../types/accountInitialState';

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
