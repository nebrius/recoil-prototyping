'use client';

import { rootAtom } from 'recoil-bootstrap';

import type { ProfileBootstrapData } from '../types/profileBootstrapData';

export const profileRootAtom = rootAtom<ProfileBootstrapData>(
  'settings:profileRootAtom',
);
