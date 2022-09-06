// eslint-disable-next-line spaced-comment
/// <reference types="styled-jsx" />

import type { AppProps } from 'next/app'
import Modal from 'react-modal'
import { RecoilRoot } from 'recoil'
import { initialStateAtom } from 'state/initialState'

Modal.setAppElement('#app')

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div id="app">
            <RecoilRoot
                initializeState={({ set }) => {
                    set(initialStateAtom, pageProps)
                }}
            >
                <Component {...pageProps} />
            </RecoilRoot>
        </div>
    )
}

export default MyApp
