import { useHydratedRecoilValue } from 'hooks/useHydratedRecoilValue'
import { selectorFamily } from 'recoil'
import { hydratedAtom } from 'state/atom'
import { Item } from 'types'

const allItems = hydratedAtom<Item[]>({
    key: 'allItems',
    init: ({ items }) => items,
})

export function itemAtom(id: number) {
    return hydratedAtom<Item>({
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
        const currentItems = useHydratedRecoilValue(allItems)
        for (const item of currentItems) {
            if (item.list_id === listId) {
                items.push(item.id)
            }
        }
        return items
    },
})
