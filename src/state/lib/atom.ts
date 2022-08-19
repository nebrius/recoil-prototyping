import {
    atom,
    AtomOptions,
    Loadable,
    RecoilState,
    RecoilValue,
    WrappedValue,
} from 'recoil'

import { InitialState } from './initialRecoilStateContext'

export type DehydratedAtomOptions<T> = AtomOptions<T> & {
    init(
        initialState: InitialState,
        // TODO: find a better way to get the type for "default" on an atom
    ): RecoilValue<T> | Promise<T> | Loadable<T> | WrappedValue<T> | T
}

export type DehydratedAtom<T> = (initialState: InitialState) => RecoilState<T>

export function dehydratedAtom<T>(
    options: DehydratedAtomOptions<T>,
): DehydratedAtom<T> {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { init, ...atomOptions } = options
    return initialState =>
        atom({
            ...atomOptions,
            default: init(initialState),
        })
}
