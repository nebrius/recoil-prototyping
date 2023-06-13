'use client';

import { BootstrapRoot } from 'recoil-bootstrap';

import { AccountType } from './accountType';
import { accountInitialStateAtom } from '../state/accountInitialState';
import type { AccountInitialState } from '../types/accountInitialState';

interface AccountLayoutRootProps {
  initialState: AccountInitialState;
}

export function AccountLayoutRoot({ initialState }: AccountLayoutRootProps) {
  return (
    <BootstrapRoot
      bootstrapData={initialState}
      bootstrapRootAtom={accountInitialStateAtom}
    >
      <AccountType />
    </BootstrapRoot>
  );
}
