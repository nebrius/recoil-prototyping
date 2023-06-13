'use client';

import { bootstrapRootAtom } from 'recoil-bootstrap';

import type { AccountBootstrapData } from '../types/accountBootstrapData';

export const accountBootstrapRootAtom = bootstrapRootAtom<AccountBootstrapData>(
  'settings:accountBootstrapRootAtom',
);
