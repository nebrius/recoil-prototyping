'use client';

import { commonBootstrapRoot } from './commonBootstrapRoot';

export const useCurrentUser = commonBootstrapRoot.bootstrappedValueHook({
  key: 'currentUserAtom',
  initialValue: ({ currentUser }) => currentUser,
});
