import { atomFamily } from 'recoil'
import { List } from 'types'
import { getRecoilKey } from 'utils'

import { getInitialState } from './initialState'

export const listAtom = atomFamily<List, number>({
    key: getRecoilKey('list'),
    default: id => {
        const list = getInitialState().lists.find(i => i.id === id)
        if (!list) {
            throw new Error(
                `Could not find item with id ${id} in initial state`,
            )
        }
        return list
    },
})
