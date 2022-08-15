import { useHydratedRecoilValue } from 'hooks/useHydratedRecoilValue'
import { useRecoilValue } from 'recoil'
import { itemAtom, itemIdsInListSelector } from 'state/item'
import { List } from 'types'

interface ItemListProps {
    currentListId: List['id']
}

const Item = ({ id }: { id: number }) => {
    const item = useHydratedRecoilValue(itemAtom(id))
    return (
        <li>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => console.log('Checked')}
            />
            <label>{item.name}</label>
        </li>
    )
}

export function ItemList({ currentListId }: ItemListProps) {
    const itemIds = useRecoilValue(itemIdsInListSelector(currentListId))
    return (
        <div>
            Items:
            {itemIds.map(id => (
                <Item key={id} id={id} />
            ))}
        </div>
    )
}
