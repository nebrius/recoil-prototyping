'use client';

import { LocalizedState } from 'packages/state/components/localizedState';

import { ProfileDescription } from './profileDescription';
import { profileInitialStateAtom } from '../state/profileInitialState';
import { ProfileInitialState } from '../types/profileInitialState';

interface ProfileRootProps {
  initialState: ProfileInitialState;
}

export function ProfileRoot({ initialState }: ProfileRootProps) {
  return (
    <LocalizedState
      initialState={initialState}
      initialStateAtom={profileInitialStateAtom}
    >
      <ProfileDescription />
    </LocalizedState>
  );
}
