import { atom } from 'recoil'
import { DetailedList } from 'types'

export function getListItemsAtom(id: number, initialValue: DetailedList) {
    return atom<DetailedList>({
        key: `list-items-${id}`,
        default: initialValue,
    })
}
