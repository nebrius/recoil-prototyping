'use client';

import { useProfileDescription } from '../state/profileDescription';

export function ProfileDescription() {
  const profileDescription = useProfileDescription();
  return <div>Description: {profileDescription}</div>;
}
