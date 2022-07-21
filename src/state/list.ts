import { atom } from 'recoil'
import { HydratedRecoilAtom, List } from 'types'

export const listAtom: HydratedRecoilAtom<List, number> =
    id =>
    ({ lists }) => {
        const list = lists.find(i => i.id === id)
        if (!list) {
            throw new Error(
                `Could not find item with id ${id} in initial state`,
            )
        }
        return atom({
            key: 'list',
            default: list,
        })
    }
