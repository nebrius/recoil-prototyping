export async function get<T = never>(endpoint: string) {
    const res = await fetch(`http://localhost:3000/api${endpoint}`)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (await res.json()) as T
}

// Next.js' SSR confuses recoil by making it think that client and server keys
// are the same during hydration (it would seem). Prefixing it with client or
// server fixes duplicate key errors in this case, but does not cause duplicate
// key errors caused by hot module reloading
export function getRecoilKey(baseKey: string) {
    return `${IS_BROWSER ? 'client' : 'server'}:${baseKey}`
}

export const IS_BROWSER = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
)
