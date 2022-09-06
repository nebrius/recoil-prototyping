import { useRecoilValue } from 'recoil'
import { listSelector } from 'state/list'
import { List } from 'types'

interface MetadataProps {
    currentListId: List['id']
}

export function Metadata({ currentListId }: MetadataProps) {
    const { name } = useRecoilValue(listSelector(currentListId))
    return <h1>{name}</h1>
}
