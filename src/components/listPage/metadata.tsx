import { useRecoilValue } from 'recoil'
import { currentListAtom } from 'state/list'

export function Metadata() {
    const { name } = useRecoilValue(currentListAtom)
    return <h1>{name}</h1>
}
