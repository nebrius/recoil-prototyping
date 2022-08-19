import { useDehydratedAtom } from 'hooks/useDehydratedAtom'
import { selectorFamily, useRecoilValue } from 'recoil'
import { dehydratedAtom } from 'state/lib/atom'
import { Item } from 'types'

import { api } from './lib/api'

const allItems = dehydratedAtom<Item[]>({
    key: 'allItems',
    init: ({ items }) => items,
})

export function itemAtom(id: number) {
    return dehydratedAtom<Item>({
        key: 'item',
        init: ({ items }) => {
            const item = items.find(i => i.id === id)
            if (!item) {
                throw new Error(
                    `Could not find item with id ${id} in initial state`,
                )
            }
            return item
        },
    })
}

export const itemIdsInListSelector = selectorFamily<number[], number>({
    key: 'items-in-list',
    get: listId => () => {
        const items: number[] = []
        const currentItems = useRecoilValue(useDehydratedAtom(allItems))
        for (const item of currentItems) {
            if (item.list_id === listId) {
                items.push(item.id)
            }
        }
        return items
    },
})

export const addItemApi = api<string>(async ({ get, set }, newName) => {
    console.log(`Making API call to create new item ${newName}`)

    // Make API call
    await new Promise(resolve => setTimeout(resolve))
    const newItem: Item = {
        id: 0,
        // eslint-disable-next-line camelcase
        list_id: 0,
        name: newName,
        completed: false,
    }

    const hydratedAllItems = useDehydratedAtom(allItems)

    // Add item to the list of all items
    const items = get(hydratedAllItems)
    set(hydratedAllItems, [newItem, ...items])
})
