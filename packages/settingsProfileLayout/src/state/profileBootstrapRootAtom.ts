'use client';

import { bootstrapRootAtom } from 'recoil-bootstrap';

import type { ProfileBootstrapData } from '../types/profileBootstrapData';

export const profileBootstrapRootAtom = bootstrapRootAtom<ProfileBootstrapData>(
  'settings:profileBootstrapRootAtom',
);
