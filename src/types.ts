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

export interface DetailedList extends List {
    id: number
    name: string
    items: Item[]
}
