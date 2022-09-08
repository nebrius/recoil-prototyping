export interface Item {
    id: number
    listId: number
    name: string
    completed: boolean
}

export type ItemFilter = 'all' | 'completed' | 'uncompleted'
