export interface Item {
    id: number
    listId: number
    name: string
    completed: boolean
}

export interface List {
    id: number
    name: string
}

export interface InitialState {
    lists: List[]
    items: Item[]
}

export type PostAddItemRequest = Omit<Item, 'id'>
export type PostAddItemResponse = Item
