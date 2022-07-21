import { useContext } from 'react'
import { SerializableParam, useRecoilValue } from 'recoil'
import { InitialRecoilStateContext } from 'state/initialRecoilStateContext'
import { HydratedRecoilAtom } from 'types'

export function useHydratedRecoilValue<T, P extends SerializableParam>(
    createRecoilValue: ReturnType<HydratedRecoilAtom<T, P>>,
) {
    const initialState = useContext(InitialRecoilStateContext)
    return useRecoilValue(createRecoilValue(initialState))
}
