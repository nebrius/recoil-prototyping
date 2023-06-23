'use client';

import { bootstrappedAtom, bootstrappedAtomValueHook } from 'recoil-bootstrap';

import { profileRootAtom } from './profileRootAtom';

const profileDescriptionAtom = bootstrappedAtom(profileRootAtom, {
  key: 'settings:profileDescriptionAtom',
  initialValue: ({ description }) => description,
});

export const useProfileDescription = bootstrappedAtomValueHook(
  profileDescriptionAtom,
);
