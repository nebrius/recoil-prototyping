import { useEffect } from 'react'
import { RecoilRoot, RecoilValue, useRecoilValue } from 'recoil'
import { currentPageAtom } from 'state/currentPage'
import { initialStateAtom } from 'state/initialState'
import { CommonInitialState } from 'types/hydration'

interface RecoilTestRootProps<
    T extends CommonInitialState = CommonInitialState,
> {
    children?: React.ReactNode
    pageProps: T
    pagePath: string
}

export function RecoilTestRoot<
    T extends CommonInitialState = CommonInitialState,
>({ children, pageProps, pagePath }: RecoilTestRootProps<T>) {
    return (
        <RecoilRoot
            initializeState={({ set }) => {
                set(initialStateAtom, pageProps)
                set(currentPageAtom, pagePath)
            }}
        >
            {children}
        </RecoilRoot>
    )
}

interface RecoilObserverProps<T> {
    atom: RecoilValue<T>
    onChange: (newValue: T) => void
}

export function RecoilObserver<T>({ atom, onChange }: RecoilObserverProps<T>) {
    const value = useRecoilValue(atom)
    useEffect(() => onChange(value), [onChange, value])
    return null
}
