import { atom, selectorFamily } from 'recoil'
import { HydratedRecoilAtom, Item } from 'types'
import { getRecoilKey } from 'utils'

const currentItems = new Map<number, Item>()

export const itemAtom: HydratedRecoilAtom<Item, number> =
    id =>
    ({ items }) => {
        const item = items.find(i => i.id === id)
        if (!item) {
            throw new Error(
                `Could not find item with id ${id} in initial state`,
            )
        }
        return atom({
            key: getRecoilKey('item'),
            default: item,
        })
    }

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
