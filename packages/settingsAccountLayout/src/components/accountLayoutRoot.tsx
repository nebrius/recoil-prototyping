'use client';

import { AccountType } from './accountType';
import { AccountBootstrapRoot } from '../state/accountBootstrapRoot';
import type { AccountBootstrapData } from '../types/accountBootstrapData';

interface AccountLayoutRootProps {
  bootstrapData: AccountBootstrapData;
}

export function AccountLayoutRoot({ bootstrapData }: AccountLayoutRootProps) {
  return (
    <AccountBootstrapRoot.Provider bootstrapData={bootstrapData}>
      <AccountType />
    </AccountBootstrapRoot.Provider>
  );
}
