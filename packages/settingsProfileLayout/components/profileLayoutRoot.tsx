'use client';

import { LayoutStateRoot } from 'packages/state/layoutStateRoot';

import { ProfileDescription } from './profileDescription';
import { profileInitialStateAtom } from '../state/profileInitialState';
import { ProfileInitialState } from '../types/profileInitialState';

interface ProfileLayoutRootProps {
  initialState: ProfileInitialState;
}

export function ProfileLayoutRoot({ initialState }: ProfileLayoutRootProps) {
  return (
    <LayoutStateRoot
      initialState={initialState}
      initialStateAtom={profileInitialStateAtom}
    >
      <ProfileDescription />
    </LayoutStateRoot>
  );
}
