import { useRecoilValue } from 'recoil'
import { currentListSelector } from 'state/listPage/currentList'
import {
    itemSelector,
    itemIdsInListSelector,
    useDeleteItem,
    useToggleItemCompleted,
} from 'state/listPage/item'

const Item = ({ id }: { id: number }) => {
    const item = useRecoilValue(itemSelector(id))

    // Use the useDeleteItem hook from state to make an API call to delete the item
    const deleteItem = useDeleteItem()
    function onDelete() {
        console.log(`Deleting item ${id}`)
        void deleteItem(item)
    }

    // Use the useToggleItemCompleted hook from state to make an API call to
    // toggle the item's completion state
    const toggleItemCompleted = useToggleItemCompleted()
    function onChecked() {
        console.log(`Toggling item ${id} completed`)
        void toggleItemCompleted(item)
    }
    return (
        <li className="item">
            <input
                type="checkbox"
                checked={item.completed}
                onChange={onChecked}
            />
            <label>{item.name}</label>
            <button onClick={onDelete}>Delete</button>
            <style jsx>{`
                .item {
                    width: 300px;
                    display: flex;
                    padding: 10px 0;
                    border-top: 1px silver solid;
                }
                .item input {
                    margin-right: 10px;
                }
                .item label {
                    flex-grow: 1;
                }
            `}</style>
        </li>
    )
}

export function Items() {
    const currentListId = useRecoilValue(currentListSelector).id
    const itemIds = useRecoilValue(itemIdsInListSelector(currentListId))
    return (
        <div>
            {itemIds.map(id => (
                <Item key={id} id={id} />
            ))}
        </div>
    )
}
