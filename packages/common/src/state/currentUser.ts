'use client';

import { bootstrappedAtom, bootstrappedAtomValueHook } from 'recoil-bootstrap';

import { commonRootAtom } from './commonRootAtom';

const currentUserAtom = bootstrappedAtom(commonRootAtom, {
  key: 'currentUserAtom',
  initialValue: ({ currentUser }) => currentUser,
});

export const useCurrentUser = bootstrappedAtomValueHook(currentUserAtom);
