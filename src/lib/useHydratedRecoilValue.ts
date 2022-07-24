import { HydratedAtom } from 'lib/atom'
import { useContext } from 'react'
import { useRecoilValue } from 'recoil'
import { InitialRecoilStateContext } from 'state/initialRecoilStateContext'

export function useHydratedRecoilValue<T>(createRecoilValue: HydratedAtom<T>) {
    const initialState = useContext(InitialRecoilStateContext)
    return useRecoilValue(createRecoilValue(initialState))
}
