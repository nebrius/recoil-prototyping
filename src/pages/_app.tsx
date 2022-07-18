import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { InitialState, setInitialState } from 'state/initialState'

function MyApp({ Component, pageProps }: AppProps) {
    setInitialState(pageProps as InitialState)
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    )
}

export default MyApp
