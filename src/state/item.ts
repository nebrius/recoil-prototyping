import { useRef } from 'react'
import { atom, selector, selectorFamily, useRecoilState } from 'recoil'
import { Item, PostAddItemRequest, PostAddItemResponse } from 'types'
import { post } from 'utils'

import { initialStateAtom } from './initialState'

const allItems = atom({
    key: 'allItems',

    // We set the default to a selector so that we can grab the initial value
    // from the initial value atom, which is set during first render in the
    // Recoil root in _app.tsx
    default: selector({
        key: 'itemInitializationSelector',
        get: ({ get }) => {
            const { items } = get(initialStateAtom)
            return items
        },
    }),
})

export const itemIdsInListSelector = selectorFamily<number[], number>({
    key: 'items-in-list',
    get:
        listId =>
        ({ get }) => {
            const currentItems = get(allItems)
            const items: number[] = []
            for (const item of currentItems) {
                if (item.listId === listId) {
                    items.push(item.id)
                }
            }
            return items
        },
})

export const itemSelector = selectorFamily<Item, number>({
    key: 'item',
    get:
        id =>
        ({ get }) => {
            const items = get(allItems)
            const item = items.find(i => i.id === id)
            if (!item) {
                throw new Error(`Could not find item with id ${id}`)
            }
            return item
        },
})

export function useAddItem() {
    const [allItemsValues, setAllItems] = useRecoilState(allItems)
    const itemsRef = useRef(allItemsValues)
    return async (body: PostAddItemRequest) => {
        const newItem = await post<PostAddItemRequest, PostAddItemResponse>(
            '/api/item',
            body,
        )
        setAllItems([...itemsRef.current, newItem])
    }
}
