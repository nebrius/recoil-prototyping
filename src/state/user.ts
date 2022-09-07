import { atom, selector } from 'recoil'
import { CommonInitialState } from 'types/hydration'

import { initialStateAtom } from './initialState'

export const currentUserAtom = atom({
    key: 'currentUserAtom',
    default: selector({
        key: 'currentUserAtomInitializer',
        get: ({ get }) =>
            (get(initialStateAtom) as CommonInitialState).currentUser,
    }),
})
