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

export type PostAddItemRequest = Omit<Item, 'id'>

export type PostAddItemResponse = Item
