import { atom, selector } from 'recoil'

import { initialCommonStateSelector } from './initialState'

export const currentUserAtom = atom({
    key: 'currentUserAtom',
    default: selector({
        key: 'currentUserAtomInitializer',
        get: ({ get }) => get(initialCommonStateSelector).currentUser,
    }),
})
