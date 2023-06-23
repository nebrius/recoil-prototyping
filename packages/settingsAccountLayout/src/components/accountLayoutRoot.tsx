'use client';

import { BootstrapRoot } from 'recoil-bootstrap';

import { AccountType } from './accountType';
import { accountRootAtom } from '../state/accountRootAtom';
import type { AccountBootstrapData } from '../types/accountBootstrapData';

interface AccountLayoutRootProps {
  bootstrapData: AccountBootstrapData;
}

export function AccountLayoutRoot({ bootstrapData }: AccountLayoutRootProps) {
  return (
    <BootstrapRoot bootstrapData={bootstrapData} rootAtom={accountRootAtom}>
      <AccountType />
    </BootstrapRoot>
  );
}
