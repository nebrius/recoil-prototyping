import {
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
            if ('set' in query && 'get' in query && 'reset' in query) {
                return
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            handler(opts, query as Request)
        },
    })
}

export function useApi<Request>(
    apiToUse: ReturnType<typeof api<Request>>,
): (payload: Request) => void {
    const setter = useSetRecoilState(apiToUse)
    return payload => setter(payload)
}
