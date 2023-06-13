'use client';

import { BootstrapRoot } from 'recoil-bootstrap';

import { ProfileDescription } from './profileDescription';
import { profileBootstrapRootAtom } from '../state/profileBootstrapRootAtom';
import type { ProfileBootstrapData } from '../types/profileBootstrapData';

interface ProfileLayoutRootProps {
  bootstrapData: ProfileBootstrapData;
}

export function ProfileLayoutRoot({ bootstrapData }: ProfileLayoutRootProps) {
  return (
    <BootstrapRoot
      bootstrapData={bootstrapData}
      bootstrapRootAtom={profileBootstrapRootAtom}
    >
      <ProfileDescription />
    </BootstrapRoot>
  );
}
