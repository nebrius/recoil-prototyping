import { atom } from 'recoil';

import { AccountInitialState } from '../types/accountInitialState';

// We take the data returned from the Next.js root server component and stick it
// into the initialStateAtom atom. We use this atom to initialize other atoms,
// although indirectly. Since each page can have different data in it, we forbid
// access to this atom directly, and instead require them to go through page
// specific selectors. These selectors do two things: 1) they make sure they're
// only referenced on the page they're intended for and 2) they cast the data so
// it has the correct TypeScript signature for that page.
export const accountInitialStateAtom = atom<AccountInitialState>({
  key: 'settings:accountInitialStateAtom',
  // No default is set here intentionally. Not setting the default causes this
  // atom to be set in a "loading" state, enabling React's Suspense that
  // delays rendering of any component dependent on it. We then set this
  // initial state in the Recoil root in AnalyticsRoot (which in practice makes
  // this available before any renders)
});
