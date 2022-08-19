import { useContext } from 'react'
import { DehydratedAtom } from 'state/lib/atom'
import { InitialRecoilStateContext } from 'state/lib/initialRecoilStateContext'

export function useDehydratedAtom<T>(dehydratedAtom: DehydratedAtom<T>) {
    const initialState = useContext(InitialRecoilStateContext)
    return dehydratedAtom(initialState)
}
