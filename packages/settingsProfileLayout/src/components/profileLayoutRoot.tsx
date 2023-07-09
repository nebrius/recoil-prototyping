'use client';

import { ProfileDescription } from './profileDescription';
import { profileBootstrapRoot } from '../state/profileBootstrapRoot';
import type { ProfileBootstrapData } from '../types/profileBootstrapData';

interface ProfileLayoutRootProps {
  bootstrapData: ProfileBootstrapData;
}

export function ProfileLayoutRoot({ bootstrapData }: ProfileLayoutRootProps) {
  return (
    <profileBootstrapRoot.Provider bootstrapData={bootstrapData}>
      <ProfileDescription />
    </profileBootstrapRoot.Provider>
  );
}
