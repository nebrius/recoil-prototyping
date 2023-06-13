'use client';

import { BootstrapRoot } from 'recoil-bootstrap';

import { AccountType } from './accountType';
import { accountBootstrapRootAtom } from '../state/accountBootstrapRootAtom';
import type { AccountBootstrapData } from '../types/accountBootstrapData';

interface AccountLayoutRootProps {
  bootstrapData: AccountBootstrapData;
}

export function AccountLayoutRoot({ bootstrapData }: AccountLayoutRootProps) {
  return (
    <BootstrapRoot
      bootstrapData={bootstrapData}
      bootstrapRootAtom={accountBootstrapRootAtom}
    >
      <AccountType />
    </BootstrapRoot>
  );
}
