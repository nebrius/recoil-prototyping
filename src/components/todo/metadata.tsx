import { useDehydratedAtom } from 'hooks/useDehydratedAtom'
import { useRecoilValue } from 'recoil'
import { listAtom } from 'state/list'
import { List } from 'types'

interface MetadataProps {
    currentListId: List['id']
}

export function Metadata({ currentListId }: MetadataProps) {
    const { name } = useRecoilValue(useDehydratedAtom(listAtom(currentListId)))
    return <h1>{name}</h1>
}
