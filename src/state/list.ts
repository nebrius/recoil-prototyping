import { List } from 'types'

import { hydratedAtom } from './atom'

export function listAtom(id: number) {
    return hydratedAtom<List>({
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
