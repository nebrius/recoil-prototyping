import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import {
    InitialRecoilStateContext,
    InitialRecoilState,
} from 'state/initialRecoilStateContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <InitialRecoilStateContext.Provider
            value={pageProps as InitialRecoilState}
        >
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </InitialRecoilStateContext.Provider>
    )
}

export default MyApp
