import { atom, SerializableParam } from 'recoil'
import { InitialRecoilState } from 'state/initialRecoilStateContext'

export interface Item {
    id: number
    list_id: number
    name: string
    completed: boolean
}

export interface List {
    id: number
    name: string
}

export type HydratedRecoilAtom<T, P extends SerializableParam> = (
    params: P,
) => (initialState: InitialRecoilState) => ReturnType<typeof atom<T>>
