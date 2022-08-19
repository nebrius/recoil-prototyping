import { useContext } from 'react'
import { DehydratedAtom } from 'state/lib/atom'
import { InitialRecoilStateContext } from 'state/lib/initialRecoilStateContext'

export function useDehydratedAtom<T>(dehydratedAtom: DehydratedAtom<T>) {
    if (dehydratedAtom.hydratedAtom !== undefined) {
        return dehydratedAtom.hydratedAtom
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const initialState = useContext(InitialRecoilStateContext)
    dehydratedAtom.hydratedAtom = dehydratedAtom(initialState)
    return dehydratedAtom.hydratedAtom
}
