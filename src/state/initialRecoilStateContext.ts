import React from 'react'
import { Item, List } from 'types'

export interface InitialRecoilState {
    lists: List[]
    items: Item[]
}

export const InitialRecoilStateContext =
    React.createContext<InitialRecoilState>({
        lists: [],
        items: [],
    })
