'use client';

import { bootstrappedAtom, bootstrappedAtomValueHook } from 'recoil-bootstrap';

import { CommonBootstrapRoot } from './commonBootstrapRoot';

const currentUserAtom = bootstrappedAtom(CommonBootstrapRoot, {
  key: 'currentUserAtom',
  initialValue: ({ currentUser }) => currentUser,
});

export const useCurrentUser = bootstrappedAtomValueHook(currentUserAtom);
