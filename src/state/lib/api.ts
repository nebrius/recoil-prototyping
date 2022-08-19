import {
    DefaultValue,
    GetRecoilValue,
    ResetRecoilState,
    selector,
    SetRecoilState,
    useSetRecoilState,
} from 'recoil'

type Handler<Request> = (
    opts: {
        set: SetRecoilState
        get: GetRecoilValue
        reset: ResetRecoilState
    },
    newValue: Request,
) => Promise<void>

export function api<Request>(handler: Handler<Request>) {
    return selector<Request>({
        key: 'api-selector',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any
        get: () => undefined as any,
        set: (opts, query) => {
            // Ignore set operations that include default value, since it wasn't called using the setter in useApi
            if (query instanceof DefaultValue) {
                return
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            handler(opts, query)
        },
    })
}

export function useApi<Request>(
    apiToUse: ReturnType<typeof api<Request>>,
): (payload: Request) => void {
    const setter = useSetRecoilState(apiToUse)
    return payload => setter(payload)
}
