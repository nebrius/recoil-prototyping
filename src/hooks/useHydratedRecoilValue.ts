import { useContext } from 'react'
import { useRecoilValue } from 'recoil'
import { HydratedAtom } from 'state/atom'
import { InitialRecoilStateContext } from 'state/initialRecoilStateContext'

export function useHydratedRecoilValue<T>(createRecoilValue: HydratedAtom<T>) {
    const initialState = useContext(InitialRecoilStateContext)
    return useRecoilValue(createRecoilValue(initialState))
}
