import { useDehydratedAtom } from 'hooks/useDehydratedAtom'
import { useRef } from 'react'
import { selectorFamily, useRecoilState, useRecoilValue } from 'recoil'
import { dehydratedAtom } from 'state/lib/atom'
import { Item } from 'types'

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

export function useAddItem() {
    const [allItemsValues, setAllItems] = useRecoilState(
        useDehydratedAtom(allItems),
    )
    const itemsRef = useRef(allItemsValues)
    return async (name: string) => {
        console.log(`Making API call to create new item ${name}`)

        // Make API call
        await new Promise(resolve => setTimeout(resolve))
        const newItem: Item = {
            id: 0,
            // eslint-disable-next-line camelcase
            list_id: 0,
            name,
            completed: false,
        }

        // Add item to the list of all items
        setAllItems([newItem, ...itemsRef.current])
    }
}
