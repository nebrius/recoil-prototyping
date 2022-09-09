import { useRecoilValue } from 'recoil'
import { currentListSelector } from 'state/listPage/currentList'

export function Metadata() {
    const { name } = useRecoilValue(currentListSelector)
    return <h1>{name}</h1>
}
