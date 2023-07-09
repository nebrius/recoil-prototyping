'use client';

import { bootstrappedAtom, bootstrappedAtomValueHook } from 'recoil-bootstrap';

import { ProfileBootstrapRoot } from './profileBootstrapRoot';

const profileDescriptionAtom = bootstrappedAtom(ProfileBootstrapRoot, {
  key: 'settings:profileDescriptionAtom',
  initialValue: ({ description }) => description,
});

export const useProfileDescription = bootstrappedAtomValueHook(
  profileDescriptionAtom,
);
