'use client';

import { ProfileInitialState } from '../types/profileInitialState';

interface ProfileRootProps {
  initialState: ProfileInitialState;
}

export function ProfileRoot({ initialState }: ProfileRootProps) {
  // TODO: set up Recoil
  console.log(initialState);
  return <div>Profile settings content</div>;
}
