'use client';

import { AccountType } from './accountType';
import { accountBootstrapRoot } from '../state/accountBootstrapRoot';
import type { AccountBootstrapData } from '../types/accountBootstrapData';

interface AccountLayoutRootProps {
  bootstrapData: AccountBootstrapData;
}

export function AccountLayoutRoot({ bootstrapData }: AccountLayoutRootProps) {
  return (
    <accountBootstrapRoot.Provider bootstrapData={bootstrapData}>
      <AccountType />
    </accountBootstrapRoot.Provider>
  );
}
