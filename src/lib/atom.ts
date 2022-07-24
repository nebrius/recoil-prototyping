import {
    atom,
    AtomOptions,
    Loadable,
    RecoilState,
    RecoilValue,
    WrappedValue,
} from 'recoil'

import { InitialState } from '../state/initialRecoilStateContext'

export type HydratedAtomOptions<T> = AtomOptions<T> & {
    init(
        initialState: InitialState,
        // TODO: find a better way to get the type for "default" on an atom
    ): RecoilValue<T> | Promise<T> | Loadable<T> | WrappedValue<T> | T
}

export type HydratedAtom<T> = (initialState: InitialState) => RecoilState<T>

export function hydratedAtom<T>(
    options: HydratedAtomOptions<T>,
): HydratedAtom<T> {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { init, ...atomOptions } = options
    return initialState =>
        atom({
            ...atomOptions,
            default: init(initialState),
        })
}
