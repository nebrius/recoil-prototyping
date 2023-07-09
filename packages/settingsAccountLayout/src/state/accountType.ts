'use client';

import { createUseAsyncUpdateStateHook } from '@rp/state';
import { delay } from '@rp/utils';

import { accountBootstrapRoot } from './accountBootstrapRoot';

const [accountTypeAtom, useAccountType] = accountBootstrapRoot.bootstrappedAtom(
  {
    key: 'settings:accountTypeAtom',
    initialValue: ({ type }) => type,
  },
);

export { useAccountType };

export const useSetAccountType = createUseAsyncUpdateStateHook(
  accountTypeAtom,
  async (newAccountType, setStatus, setAccountTypeAtom) => {
    // Optimistically set
    setAccountTypeAtom(newAccountType);
    setStatus('updating');
    await delay(2000);
    setStatus('success');
  },
);
