'use client';

import { profileBootstrapRoot } from './profileBootstrapRoot';

export const useProfileDescription = profileBootstrapRoot.bootstrappedValueHook(
  {
    key: 'settings:profileDescriptionAtom',
    initialValue: ({ description }) => description,
  },
);
