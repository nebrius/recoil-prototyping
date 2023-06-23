'use client';

import { createUseAsyncUpdateStateHook } from '@rp/state';
import { delay } from '@rp/utils';

import { bootstrappedAtom, bootstrappedAtomValueHook } from 'recoil-bootstrap';

import { accountRootAtom } from './accountRootAtom';

const accountTypeAtom = bootstrappedAtom(accountRootAtom, {
  key: 'settings:accountTypeAtom',
  initialValue: ({ type }) => type,
});

export const useAccountType = bootstrappedAtomValueHook(accountTypeAtom);

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
