import { atom } from 'recoil'
import { List } from 'types'

import { dehydratedAtom } from './lib/atom'

export function listAtom(id: number) {
    return dehydratedAtom<List>({
        key: 'list',
        init({ lists }) {
            const list = lists.find(i => i.id === id)
            if (!list) {
                throw new Error(
                    `Could not find item with id ${id} in initial state`,
                )
            }
            return list
        },
    })
}

export const currentListAtom = atom<List | null>({
    key: 'currentList',
    default: null,
})
