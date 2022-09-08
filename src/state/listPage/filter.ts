import { atom } from 'recoil'
import { ItemFilter } from 'types/item'

export const filterAtom = atom<ItemFilter>({
    key: 'filterAtom',
    default: 'all',
})
