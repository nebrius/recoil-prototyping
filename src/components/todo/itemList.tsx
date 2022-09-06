import { useRecoilValue } from 'recoil'
import { itemSelector, itemIdsInListSelector } from 'state/item'
import { List } from 'types'

interface ItemListProps {
    currentListId: List['id']
}

const Item = ({ id }: { id: number }) => {
    function onDelete() {
        console.log('Deleted')
    }

    function onChecked() {
        console.log('Checked')
    }

    const item = useRecoilValue(itemSelector(id))
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

export function ItemList({ currentListId }: ItemListProps) {
    const itemIds = useRecoilValue(itemIdsInListSelector(currentListId))
    return (
        <div>
            {itemIds.map(id => (
                <Item key={id} id={id} />
            ))}
        </div>
    )
}
