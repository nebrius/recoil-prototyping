import { useHydratedRecoilValue } from 'hooks/useHydratedRecoilValue'
import { listAtom } from 'state/list'
import { List } from 'types'

interface MetadataProps {
    currentListId: List['id']
}

export function Metadata({ currentListId }: MetadataProps) {
    const { name } = useHydratedRecoilValue(listAtom(currentListId))
    return <h1>{name}</h1>
}
