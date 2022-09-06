import { atom } from 'recoil'
import { InitialState } from 'types'

export const initialStateAtom = atom<InitialState>({
    key: 'initialState',
})
