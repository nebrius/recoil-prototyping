import { useRecoilValue } from 'recoil'
import { listAtom } from 'state/list'
import { List } from 'types'

interface MetadataProps {
    currentListId: List['id']
}

export const Metadata = ({ currentListId }: MetadataProps) => {
    const { name } = useRecoilValue(listAtom(currentListId))
    return <h1>{name}</h1>
}
