import { useDehydratedAtom } from 'hooks/useDehydratedAtom'
import { useRef } from 'react'
import { atom, selectorFamily, useRecoilState, useRecoilValue } from 'recoil'
import { dehydratedAtom } from 'state/lib/atom'
import { Item, PostAddItemRequest, PostAddItemResponse } from 'types'
import { post } from 'utils'

// Note: dehydrated atoms must _not_ be families, such as itemAtom, since they
// evolve over time and we may try and grab an item that was added after
// initialization
const allItems = dehydratedAtom<Item[]>({
    key: 'allItems',
    init: ({ items }) => items,
})

export function itemAtom(id: number) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const items = useRecoilValue(useDehydratedAtom(allItems))
    const item = items.find(i => i.id === id)
    if (!item) {
        throw new Error(`Could not find item with id ${id}`)
    }
    return atom<Item>({
        key: 'item',
        default: item,
    })
}

export const itemIdsInListSelector = selectorFamily<number[], number>({
    key: 'items-in-list',
    get:
        listId =>
        ({ get }) => {
            const items: number[] = []
            const currentItems = get(useDehydratedAtom(allItems))
            for (const item of currentItems) {
                if (item.listId === listId) {
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
    return async (body: PostAddItemRequest) => {
        const newItem = await post<PostAddItemRequest, PostAddItemResponse>(
            '/api/item',
            body,
        )
        setAllItems([...itemsRef.current, newItem])
    }
}
