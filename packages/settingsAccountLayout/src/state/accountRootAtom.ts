'use client';

import { rootAtom } from 'recoil-bootstrap';

import type { AccountBootstrapData } from '../types/accountBootstrapData';

export const accountRootAtom = rootAtom<AccountBootstrapData>(
  'settings:accountRootAtom',
);
