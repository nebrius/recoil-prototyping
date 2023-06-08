'use client';

import { RecoilRoot } from 'recoil';

import { ProfileDescription } from './profileDescription';
import { profileInitialStateAtom } from '../state/profileInitialState';
import { ProfileInitialState } from '../types/profileInitialState';

interface ProfileRootProps {
  initialState: ProfileInitialState;
}

export function ProfileRoot({ initialState }: ProfileRootProps) {
  return (
    <RecoilRoot
      initializeState={({ set }) => set(profileInitialStateAtom, initialState)}
    >
      <ProfileDescription />
    </RecoilRoot>
  );
}
