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

// This HOC is for testing recoil-based components. Even if the goal is to only
// test out an atom/selector/etc., it's still a lot easier to go through a
// component since we need React's rendering lifecycle up and running to get
// hooks to work. This HOC makes it easier to bootstrap that testing
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

// Copied from https://recoiljs.org/docs/guides/testing/
export function RecoilObserver<T>({ atom, onChange }: RecoilObserverProps<T>) {
    const value = useRecoilValue(atom)
    useEffect(() => onChange(value), [onChange, value])
    return null
}
