import { atom } from 'recoil'

export const currentPageAtom = atom<string>({
    key: 'currentPageAtom',
    // Default is left off so we can use a Loadable for it
})
