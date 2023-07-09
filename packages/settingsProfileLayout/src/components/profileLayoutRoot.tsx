'use client';

import { ProfileDescription } from './profileDescription';
import { ProfileBootstrapRoot } from '../state/profileBootstrapRoot';
import type { ProfileBootstrapData } from '../types/profileBootstrapData';

interface ProfileLayoutRootProps {
  bootstrapData: ProfileBootstrapData;
}

export function ProfileLayoutRoot({ bootstrapData }: ProfileLayoutRootProps) {
  return (
    <ProfileBootstrapRoot.Provider bootstrapData={bootstrapData}>
      <ProfileDescription />
    </ProfileBootstrapRoot.Provider>
  );
}
