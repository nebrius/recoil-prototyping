'use client';

import { BootstrapRoot } from 'recoil-bootstrap';

import { ProfileDescription } from './profileDescription';
import { profileBootstrapRootAtom } from '../state/profileBootstrapRootAtom';
import type { ProfileBootstrapData } from '../types/profileBootstrapData';

interface ProfileLayoutRootProps {
  initialState: ProfileBootstrapData;
}

export function ProfileLayoutRoot({ initialState }: ProfileLayoutRootProps) {
  return (
    <BootstrapRoot
      bootstrapData={initialState}
      bootstrapRootAtom={profileBootstrapRootAtom}
    >
      <ProfileDescription />
    </BootstrapRoot>
  );
}
