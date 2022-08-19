import { useContext } from 'react'
import { useRecoilValue } from 'recoil'
import { HydratedAtom } from 'state/lib/atom'
import { InitialRecoilStateContext } from 'state/lib/initialRecoilStateContext'

export function useHydratedRecoilValue<T>(createRecoilValue: HydratedAtom<T>) {
    const initialState = useContext(InitialRecoilStateContext)
    return useRecoilValue(createRecoilValue(initialState))
}
