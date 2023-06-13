'use client';

import { bootstrapRootAtom } from 'recoil-bootstrap';

import type { CommonBootstrapData } from '../types/commonBootstrapData';

export const commonBootstrapRootAtom = bootstrapRootAtom<CommonBootstrapData>(
  'commonBootstrapRootAtom',
);
