import { atom, selector } from 'recoil'
import { CommonInitialState } from 'types/hydration'

// Typed as unknown since different pages have different types. We use a
// selector below to a) set the type on a per-page basis and b) confirm it's
// only access while on said page. This is exported so that _app.tsx can set
// it's value and page-specific initial state atoms can access it, but this atom
// should not be used anywhere else
// TODO: create a lint rule forbidding access to this atom outside _app.tsx
export const initialStateAtom = atom<unknown>({
    key: 'initialStateAtom',
    // No default is set here intentionally. Not setting the default causes this
    // atom to be set in a "loading" state, enabling React's Suspense that
    // delays rendering of any component dependent on it. We then set this
    // initial state in the Recoil root in _app.tsx (which in practice makes
    // this available before each render)
})

// The common state selector exposes properties available on all pages, and so
// has no route checking in it's `get` function
export const initialCommonStateSelector = selector({
    key: 'initialCommonStateSelector',
    get: ({ get }) => get(initialStateAtom) as CommonInitialState,
})
