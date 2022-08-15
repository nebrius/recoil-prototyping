import { List } from 'types'

interface AddItemProps {
    currentListId: List['id']
}

export function AddItem({ currentListId }: AddItemProps) {
    return <button>Add item to list {currentListId}</button>
}
