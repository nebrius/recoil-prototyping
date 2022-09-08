import { atom, selector } from 'recoil'
import {
    CommonInitialState,
    HomePageInitialState,
    ListPageInitialState,
} from 'types/hydration'

// Typed as unknown since different pages have different types. We use a
// selector below to a) set the type on a per-page basis and b) confirm it's
// only access while on said page. This is exported so that _app.tsx can set
// it's value, but it should not be used anywhere else
// TODO: create a lint rule forbidding access to this atom outside _app.tsx
export const initialStateAtom = atom<unknown>({
    key: 'initialStateAtom',
    // No default is set here intentionally. Not setting the default causes this
    // atom to be set in a "loading" state, enabling React's Suspense that
    // delays rendering of any component dependent on it. We then set this
    // initial state in the Recoil root in _app.tsx (which in practice makes
    // this available before each render)
})

export const currentPageAtom = atom<string>({
    key: 'currentPageAtom',
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

// The selectors below are for getting initial state from Next.js SSR that is
// page-specific. We create a selector that casts the state in
// `initialStateAtom` to the proper type, but only _after_ we have verified
// we're on the right page. If someone tries to access one of these selectors
// from a different page, we throw an exception. We throw an exception because
// otherwise TypeScript would be telling us that data exists on this page when
// in fact it doesn't

export const initialHomePageStateSelector = selector({
    key: 'initialHomePageStateSelector',
    get: ({ get }) => {
        if (get(currentPageAtom) !== '/') {
            throw new Error(
                'Cannot use initialHomePageStateSelector outside of the home page',
            )
        }
        return get(initialStateAtom) as HomePageInitialState
    },
})

export const initialListPageStateSelector = selector({
    key: 'initialListPageStateSelector',
    get: ({ get }) => {
        if (get(currentPageAtom) !== '/list/[id]') {
            throw new Error(
                'Cannot use initialListPageStateSelector outside of the list page',
            )
        }
        return get(initialStateAtom) as ListPageInitialState
    },
})
