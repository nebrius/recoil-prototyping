import { Item, List } from 'types'

export interface InitialState {
    lists: List[]
    items: Item[]
}

let state: InitialState

export function setInitialState(initialState: InitialState) {
    state = initialState
}

export function getInitialState(): InitialState {
    if (!state) {
        throw new Error("Cannot get initial state before it's set")
    }
    return state
}
