import React from 'react'
import { Item, List } from 'types'

export interface InitialState {
    lists: List[]
    items: Item[]
}

export const InitialRecoilStateContext = React.createContext<InitialState>({
    lists: [],
    items: [],
})
