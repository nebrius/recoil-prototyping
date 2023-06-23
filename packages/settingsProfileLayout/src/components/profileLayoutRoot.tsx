'use client';

import { BootstrapRoot } from 'recoil-bootstrap';

import { ProfileDescription } from './profileDescription';
import { profileRootAtom } from '../state/profileRootAtom';
import type { ProfileBootstrapData } from '../types/profileBootstrapData';

interface ProfileLayoutRootProps {
  bootstrapData: ProfileBootstrapData;
}

export function ProfileLayoutRoot({ bootstrapData }: ProfileLayoutRootProps) {
  return (
    <BootstrapRoot bootstrapData={bootstrapData} rootAtom={profileRootAtom}>
      <ProfileDescription />
    </BootstrapRoot>
  );
}
