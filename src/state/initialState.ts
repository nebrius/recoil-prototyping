import { atom } from 'recoil'

// Typed as unknown since different pages have different types
export const initialStateAtom = atom<unknown>({
    key: 'initialStateAtom',
    // No default is set here intentionally. Not setting the default causes this
    // atom to be set in a "loading" state, enabling React's Suspense that
    // delays rendering of any component dependent on it. We then set this
    // initial state in the Recoil root in _app.tsx (which in practice makes
    // this available before each render)
})
