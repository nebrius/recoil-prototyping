import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import {
    InitialRecoilStateContext,
    InitialState,
} from 'state/initialRecoilStateContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <InitialRecoilStateContext.Provider value={pageProps as InitialState}>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </InitialRecoilStateContext.Provider>
    )
}

export default MyApp
