import { atom, selector } from 'recoil'
import { HomePageInitialState, ListPageInitialState } from 'types/hydration'

import { initialStateAtom } from './initialState'

export const allListsAtom = atom({
    key: 'allListsAtom',
    default: selector({
        key: 'allListsAtomInitializer',
        // TODO: I don't love this, but not sure of another way to do this
        // without having a giant switch statement in _app.tsx that switches on
        // the current route and sets a per-page initial state atom. Is that
        // preferable?
        get: ({ get }) => (get(initialStateAtom) as HomePageInitialState).lists,
    }),
})

export const currentListAtom = atom({
    key: 'currentListAtom',
    default: selector({
        key: 'currentListAtomInitializer',
        get: ({ get }) => (get(initialStateAtom) as ListPageInitialState).list,
    }),
})
