import { atom, selector, selectorFamily } from 'recoil'
import { List } from 'types'

import { initialStateAtom } from './initialState'

const allLists = atom({
    key: 'allLists',
    default: selector({
        key: 'allListsInitializer',
        get: ({ get }) => {
            const { lists } = get(initialStateAtom)
            return lists
        },
    }),
})

export const listSelector = selectorFamily<List, number>({
    key: 'list',
    get:
        id =>
        ({ get }) => {
            const lists = get(allLists)
            const list = lists.find(i => i.id === id)
            if (!list) {
                throw new Error(
                    `Could not find item with id ${id} in initial state`,
                )
            }
            return list
        },
})

export const currentListAtom = atom<List | null>({
    key: 'currentList',
    default: null,
})
