import { atom, selector } from 'recoil';

import { CommonInitialState } from '../types/commonInitialState';

// We take the data returned from Next.js' `getServerSideProps` and stick it
// into the initialStateAtom atom. We use this atom to initialize other atoms,
// although indirectly. Since each page can have different data in it, we forbid
// access to this atom directly, and instead require them to go through page
// specific selectors. These selectors do two things: 1) they make sure they're
// only referenced on the page they're intended for and 2) they cast the data so
// it has the correct TypeScript signature for that page.

// Typed as unknown since different pages have different types. We use a
// selector below to a) set the type on a per-page basis and b) confirm it's
// only access while on said page. This is exported so that _app.tsx can set
// it's value and page-specific initial state atoms can access it, but this atom
// should not be used anywhere else
// TODO: create a lint rule forbidding access to this atom outside _app.tsx and hydration atoms
export const initialStateAtom = atom<unknown>({
  key: 'initialStateAtom',
  // No default is set here intentionally. Not setting the default causes this
  // atom to be set in a "loading" state, enabling React's Suspense that
  // delays rendering of any component dependent on it. We then set this
  // initial state in the Recoil root in _app.tsx (which in practice makes
  // this available before any renders)
});

// The common state selector exposes properties available on all pages, making
// it possible to skip error checking for other atoms that don't care about page
// specific data
export const initialCommonStateSelector = selector({
  key: 'initialCommonStateSelector',
  get: ({ get }) => get(initialStateAtom) as CommonInitialState,
});
