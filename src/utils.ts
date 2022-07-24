export async function get<T = never>(endpoint: string) {
    const res = await fetch(`http://localhost:3000/api${endpoint}`)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (await res.json()) as T
}

export const IS_BROWSER = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
)
