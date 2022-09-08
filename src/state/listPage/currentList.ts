import { atom, selector } from 'recoil'

import { initialListPageStateSelector } from './initialState'

export const currentListAtom = atom({
    key: 'currentListAtom',
    default: selector({
        key: 'currentListAtomInitializer',
        get: ({ get }) => get(initialListPageStateSelector).list,
    }),
})
