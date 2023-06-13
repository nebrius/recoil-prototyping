'use client';

import { bootstrappedAtom, bootstrappedAtomValueHook } from 'recoil-bootstrap';

import { commonBootstrapRootAtom } from './commonBootstrapRootAtom';

const currentUserAtom = bootstrappedAtom(commonBootstrapRootAtom, {
  key: 'currentUserAtom',
  initialValue: ({ currentUser }) => currentUser,
});

export const useCurrentUser = bootstrappedAtomValueHook(currentUserAtom);
