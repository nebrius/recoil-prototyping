// eslint-disable-next-line spaced-comment
/// <reference types="styled-jsx" />

import type { AppProps } from 'next/app'
import Modal from 'react-modal'
import { RecoilRoot } from 'recoil'
import {
    InitialRecoilStateContext,
    InitialState,
} from 'state/lib/initialRecoilStateContext'

Modal.setAppElement('#app')

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div id="app">
            <InitialRecoilStateContext.Provider
                value={pageProps as InitialState}
            >
                <RecoilRoot>
                    <Component {...pageProps} />
                </RecoilRoot>
            </InitialRecoilStateContext.Provider>
        </div>
    )
}

export default MyApp
