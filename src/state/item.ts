import { atomFamily, selectorFamily } from 'recoil'
import { Item } from 'types'
import { getRecoilKey } from 'utils'

import { getInitialState } from './initialState'

const currentItems = new Map<number, Item>()

export const itemAtom = atomFamily<Item, number>({
    key: getRecoilKey('item'),
    effects: id => [
        // Inititalization/deinitialization effect
        () => {
            const item = getInitialState().items.find(i => i.id === id)
            if (!item) {
                throw new Error(
                    `Could not find item with id ${id} in initial state`,
                )
            }
            currentItems.set(item.id, item)
            return () => {
                currentItems.delete(item.id)
            }
        },
    ],
})

export const itemIdsInListSelector = selectorFamily<number[], number>({
    key: getRecoilKey('items-in-list'),
    get: listId => () => {
        const items: number[] = []
        for (const [, item] of currentItems) {
            if (item.list_id === listId) {
                items.push(item.id)
            }
        }
        return items
    },
})
