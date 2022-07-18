import { useRecoilValue } from 'recoil'
import { getListItemsAtom } from 'state/list'
import { DetailedList } from 'types'

interface ItemListProps {
    list: DetailedList
}

export const ItemList = ({ list }: ItemListProps) => {
    const { items } = useRecoilValue(getListItemsAtom(list.id, list))
    return (
        <div>
            Items:
            {items.map(({ id, name }) => (
                <div key={id}>{name}</div>
            ))}
        </div>
    )
}
