'use client';

import { bootstrappedAtom, bootstrappedAtomValueHook } from 'recoil-bootstrap';

import { profileBootstrapRootAtom } from './profileBootstrapRootAtom';

const profileDescriptionAtom = bootstrappedAtom(profileBootstrapRootAtom, {
  key: 'settings:profileDescriptionAtom',
  initialValue: (initialState) => initialState.description,
});

export const useProfileDescription = bootstrappedAtomValueHook(
  profileDescriptionAtom,
);
